#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol, Vec, log};

mod token {
    soroban_sdk::contractimport!(file = "../../target/wasm32-unknown-unknown/release/soroban_token_contract.wasm");
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    Vault(Address), // User Address -> VaultData
    Auction(u32),   // Auction ID -> AuctionData
    AuctionCount,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct VaultData {
    pub collateral: i128,
    pub debt: i128,
    pub last_update: u64,
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct AuctionData {
    pub borrower: Address,
    pub collateral_amount: i128,
    pub debt_to_repay: i128,
    pub start_time: u64,
    pub status: Symbol, // Open, Closed
}

#[contract]
pub struct LendX;

#[contractimpl]
impl LendX {
    /// Deposit XLM (or token) as collateral
    pub fn deposit(env: Env, user: Address, amount: i128) {
        user.require_auth();
        
        let mut vault = Self::get_vault(&env, &user);
        vault.collateral += amount;
        vault.last_update = env.ledger().timestamp();
        
        env.storage().persistent().set(&DataKey::Vault(user.clone()), &vault);
        
        log!(&env, "Deposit successful", user, amount);
    }

    /// Borrow USDC against collateral
    pub fn borrow(env: Env, user: Address, amount: i128) {
        user.require_auth();
        
        let mut vault = Self::get_vault(&env, &user);
        
        // Simple 50% LTV check for demonstration
        let max_borrow = vault.collateral / 2;
        if vault.debt + amount > max_borrow {
            panic!("Insufficient collateral for borrow");
        }
        
        vault.debt += amount;
        vault.last_update = env.ledger().timestamp();
        
        env.storage().persistent().set(&DataKey::Vault(user.clone()), &vault);
        
        log!(&env, "Borrow successful", user, amount);
    }

    /// Trigger an auction for an underwater position
    /// Callable by Monitor Agents. Pays a trigger fee via x402 concept.
    pub fn trigger_auction(env: Env, agent: Address, borrower: Address) {
        agent.require_auth();
        
        let vault = Self::get_vault(&env, &borrower);
        
        // Check if healthy (e.g., LTV > 80%)
        let health_factor = (vault.collateral * 100) / (vault.debt * 125); // Simple HF
        if health_factor >= 1 {
             panic!("Position is healthy, cannot trigger auction");
        }

        // Logic for x402 payment to agent would go here
        // For now, we log the intent
        log!(&env, "x402 Trigger Fee Earned by Agent", agent);

        let auction_id = Self::get_next_auction_id(&env);
        let auction = AuctionData {
            borrower: borrower.clone(),
            collateral_amount: vault.collateral,
            debt_to_repay: vault.debt,
            start_time: env.ledger().timestamp(),
            status: Symbol::new(&env, "Open"),
        };

        env.storage().persistent().set(&DataKey::Auction(auction_id), &auction);
        
        // Reset vault as it's now in auction
        env.storage().persistent().remove(&DataKey::Vault(borrower));
    }

    /// Submit a bid for an auction
    /// Callable by Bidder Agents
    pub fn bid(env: Env, bidder: Address, auction_id: u32, amount: i128) {
        bidder.require_auth();
        
        let mut auction = env.storage().persistent().get::<_, AuctionData>(&DataKey::Auction(auction_id))
            .expect("Auction not found");
            
        if auction.status != Symbol::new(&env, "Open") {
            panic!("Auction is not open");
        }

        // In a real Dutch Auction, the price would decrease over time
        // Here we just accept the bid if it covers the debt
        if amount < auction.debt_to_repay {
            panic!("Bid amount must cover the debt");
        }

        auction.status = Symbol::new(&env, "Closed");
        env.storage().persistent().set(&DataKey::Auction(auction_id), &auction);

        log!(&env, "Auction settled", auction_id, bidder, amount);
    }

    // --- Internal Helpers ---

    fn get_vault(env: &Env, user: &Address) -> VaultData {
        env.storage().persistent().get(&DataKey::Vault(user.clone())).unwrap_or(VaultData {
            collateral: 0,
            debt: 0,
            last_update: 0,
        })
    }

    fn get_next_auction_id(env: &Env) -> u32 {
        let count = env.storage().persistent().get(&DataKey::AuctionCount).unwrap_or(0u32);
        env.storage().persistent().set(&DataKey::AuctionCount, &(count + 1));
        count
    }
}
