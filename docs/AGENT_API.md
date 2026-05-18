# LendX Agent API Reference

This document provides a comprehensive API reference for developers building custom monitor or bidder agents for the LendX protocol.

## Overview

The LendX protocol relies on external agents to maintain system health and execute liquidations efficiently. There are two primary types of agents:
1. **Monitor Agents**: Monitor vault health and trigger liquidations when positions become undercollateralized.
2. **Bidder Agents**: Participate in Dutch Auctions to acquire liquidated collateral.

## Contract Architecture

The core logic is implemented in the `LendX` Soroban contract. Agents interact directly with the contract using the Soroban CLI, Stellar SDK, or custom RPC clients.

### 1. Triggering an Auction (Monitor Agents)

Monitor agents continuously track vault health factors. When a vault's health factor drops below 1, the agent can trigger an auction.

**Function:** `trigger_auction`

**Parameters:**
- `agent: Address` - The Soroban address of the monitor agent triggering the auction.
- `borrower: Address` - The Soroban address of the undercollateralized borrower.

**Execution Details:**
- The transaction must be signed by the `agent`.
- The contract verifies the vault's health factor. If it is < 1, the vault is liquidated.
- An auction is instantiated, and an `AuctionData` entry is stored with an `Auction ID`.
- **x402 Trigger Fee:** The agent is eligible for an atomic trigger fee upon successful liquidation, incentivizing rapid detection.

**Example Invocation (Soroban CLI):**
```bash
soroban contract invoke \
    --id <CONTRACT_ID> \
    --source-account <AGENT_SECRET_KEY> \
    --network testnet \
    -- \
    trigger_auction \
    --agent <AGENT_ADDRESS> \
    --borrower <BORROWER_ADDRESS>
```

### 2. Bidding on Liquidations (Bidder Agents)

Once an auction is open, bidder agents can submit bids to repay the borrower's debt in exchange for the collateral.

**Function:** `bid`

**Parameters:**
- `bidder: Address` - The Soroban address of the bidder agent.
- `auction_id: u32` - The ID of the open auction.
- `amount: i128` - The amount of debt token (e.g., USDC) the bidder is offering to repay.

**Execution Details:**
- The transaction must be signed by the `bidder`.
- The `amount` provided must cover the required `debt_to_repay`.
- If successful, the auction status is updated to `Closed`.
- In a full Dutch Auction implementation, the required bid amount dynamically decreases over time until a bidder steps in.

**Example Invocation (Soroban CLI):**
```bash
soroban contract invoke \
    --id <CONTRACT_ID> \
    --source-account <BIDDER_SECRET_KEY> \
    --network testnet \
    -- \
    bid \
    --bidder <BIDDER_ADDRESS> \
    --auction_id <AUCTION_ID> \
    --amount <BID_AMOUNT>
```

## Storage Layout & Data Structures

Agents may need to query the contract's storage to monitor state.

### `VaultData`
Stored under the `DataKey::Vault(Address)` key.
```rust
pub struct VaultData {
    pub collateral: i128,
    pub debt: i128,
    pub last_update: u64,
}
```

### `AuctionData`
Stored under the `DataKey::Auction(u32)` key.
```rust
pub struct AuctionData {
    pub borrower: Address,
    pub collateral_amount: i128,
    pub debt_to_repay: i128,
    pub start_time: u64,
    pub status: Symbol, // Open, Closed
}
```

## Best Practices for Agent Development
- **Monitor Gas Limits**: Triggering auctions involves modifying multiple storage keys. Ensure your transactions have sufficient gas limits.
- **RPC Nodes**: Use a high-performance RPC node for minimum latency.
- **Fail-safes**: Implement retries for your bids in case of front-running by other bidder agents.
