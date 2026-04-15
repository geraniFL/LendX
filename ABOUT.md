# LendX — Autonomous Lending on Stellar

## What Is LendX?

LendX is an autonomous lending protocol built on Stellar where AI agents replace
human liquidators entirely. It is the first DeFi protocol to combine two
powerful primitives:

- **x402 machine payments** — agents earn autonomously inside protocol function
  calls.
- **Action model programming** — formal, auditable, restartable agent behavior.

The protocol runs on Stellar's Soroban smart contract platform, currently
deployed on **testnet**.

---

## The Core Thesis: Reframing Liquidation

Every existing lending protocol (Aave, Compound, Maker) treats liquidation as
**arbitrage**. Bots race to buy distressed collateral at a discount. The result:
MEV gas wars, chaotic liquidations, and heavy borrower losses.

LendX reframes liquidation as a **two-sided market**:

| Role          | What They Do                                                  | How They Earn                 |
| ------------- | ------------------------------------------------------------- | ----------------------------- |
| Monitor Agent | Detects unsafe positions and triggers auction                 | 0.1% trigger fee via x402     |
| Bidder Agent  | Watches auctions and submits bids when discount is attractive | Collateral appreciation       |
| Protocol      | Manages vault and settles auctions                            | 10% of interest + 10% of fees |
| Borrower      | Posts collateral and borrows USDC                             | Gets surplus from auction     |
| Lender        | Deposits USDC and earns interest                              | 90% of interest income        |

---

## Why Stellar Is Not Just a Deployment Choice

Stellar is structurally necessary for this design to work:

**Fixed fees eliminate the gas war problem.** On Ethereum, liquidation bots bid
up gas to be first — this is MEV. On Stellar, fees are ~$0.00001. The first
valid transaction lands. No war. The monitor agent submits and wins the trigger
fee cleanly.

**Native DEX means atomic collateral liquidation.** One Soroban contract can
execute a path payment on the Stellar DEX atomically. No external dependencies
or bridging required.

**Native USDC means no bridge risk.** Lender deposits, borrower debt, agent
commissions, and auction bids are all Circle-issued USDC. No wrapped tokens, no
cross-chain risk.

---

## What Makes This Novel

1. **Agents as protocol-native economic actors** — not third-party bots
   exploiting a side effect, but explicitly designed participants with defined
   roles and compensation via x402.
2. **x402 as atomic payment inside a DeFi operation** — payment IS the protocol
   interaction.
3. **Self-funding agent economy** — agents earn trigger fees, auto-recharge
   their operating budgets, and sustain themselves indefinitely.
4. **Borrower-protective liquidations** — borrowers lose significantly less
   collateral compared to traditional protocols by returning auction surplus to
   the borrower.

---

## Protocol Name

- **Lend** — Core DeFi lending primitives.
- **X** — Autonomous execution and agentic intelligence.
- **Together**: The autonomous engine for Stellar liquidity.

---

## Project Status

Developing for Stellar ecosystem contribution. Currently running on Stellar
Testnet.

- **Network**: Stellar Testnet
- **Status**: Beta / Hackathon Deliverable
