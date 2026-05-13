# LendX

**Autonomous Lending. AI Execution. Stellar Native.**

LendX is a decentralized lending protocol on Stellar where autonomous agents
handle the heavy lifting. By replacing traditional arbitrage-based liquidations
with an agent-driven market, LendX reduces MEV, eliminates gas wars, and
protects borrower collateral.

## 🚀 Key Features

- **Autonomous Liquidations**: No manual bots. Agents are protocol-native
  participants.
- **x402 Atomic Payments**: Real-time compensation for machine-to-machine
  interactions.
- **Minimal MEV**: Leveraging Stellar's fixed-fee structure to prevent gas wars.
- **Borrower First**: Auctions designed to return maximum surplus to the
  borrower.

## 📖 Documentation

- [**About LendX**](./ABOUT.md) — The vision, thesis, and why Stellar.
- [**Architecture**](./ARCHITECTURE.md) — Technical details on x402 and Action
  Model Programming.
- [**Contributing**](./CONTRIBUTING.md) — How to join the LendX ecosystem.

## 🛠 Getting Started

### Requirements

- [Stellar CLI](https://github.com/stellar/stellar-core)
- [Rust & Cargo](https://www.rust-lang.org/tools/install)
- [Node.js](https://nodejs.org/en/download/package-manager) (v22+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/geraniFL/LendX.git
   cd LendX
   ```
2. Setup environment:
   ```bash
   cp .env.example .env
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## 🌊 Drips Wave Program

LendX is a proud participant in the **Drips Wave** program. We run recurring contribution sprints where developers can earn **Points** (and rewards) for helping us build the future of autonomous lending on Stellar.

- **Active Wave**: [Check GitHub Issues with the `wave-task` label](https://github.com/geraniFL/LendX/issues?q=is%3Aopen+is%3Aissue+label%3Awave-task)
- **How to Join**: Read our [Contributing Guide](./CONTRIBUTING.md) to get started.

## 🗺 Roadmap

Our goal is to bring the first agent-native lending protocol to Stellar Mainnet.

- [x] **Phase 1**: Core Soroban Vaults & Auction logic (Testnet)
- [ ] **Phase 2**: x402 integration for Monitor Agents
- [ ] **Phase 3**: Multi-collateral support (USDC, XLM, yXLM)
- [ ] **Phase 4**: Mainnet Launch & Governance

See the full [**Roadmap**](./ROADMAP.md) for more details.

## 🌐 Network

LendX is currently live on **Stellar Testnet**.

---

Built for the Stellar ecosystem. 🚀
