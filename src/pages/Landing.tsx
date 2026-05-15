import { Icon } from "@stellar/design-system"
import React from "react"
import { Link } from "react-router-dom"
import { useScrollReveal } from "../hooks/useScrollReveal"
import heroImage from "../images/hero_agent.png"
import styles from "./Landing.module.css"

const Landing: React.FC = () => {
	const heroReveal = useScrollReveal()
	const problemReveal = useScrollReveal()
	const agentReveal = useScrollReveal()
	const stellarReveal = useScrollReveal()
	const ctaReveal = useScrollReveal()

	return (
		<div className={styles.Landing}>
			{/* Navbar */}
			<nav className={styles.Navbar}>
				<div className={styles.NavLogo}>
					<Icon.Stellar size="md" color="var(--accent-cyan)" />
					<span>LendX</span>
				</div>
				<div className={styles.NavLinks}>
					<a href="#features">Features</a>
					<a href="#agents">Agents</a>
					<a href="#tech">Technology</a>
					<a
						href="https://github.com/geraniFL/LendX"
						target="_blank"
						rel="noreferrer"
					>
						Docs
					</a>
				</div>
				<div className={styles.NavCTA}>
					<Link to="/dashboard">
						<button className={styles.ButtonNav}>Launch App</button>
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<section className={styles.Hero}>
				<div
					ref={heroReveal.ref}
					className={`${styles.HeroContent} ${styles.Reveal} ${heroReveal.isVisible ? styles.Visible : ""}`}
				>
					<h1>
						Autonomous Lending. <span>AI Execution.</span> Stellar Native.
					</h1>
					<p>
						The first decentralized lending protocol where AI agents replace
						human liquidators. Eliminating gas wars, reducing MEV, and
						protecting borrower collateral through protocol-native intelligence.
					</p>
					<div className={styles.HeroActions}>
						<Link to="/dashboard">
							<button className={styles.ButtonPrimary}>Enter Dashboard</button>
						</Link>
						<a
							href="https://github.com/geraniFL/LendX"
							target="_blank"
							rel="noreferrer"
						>
							<button className={styles.ButtonSecondary}>View on GitHub</button>
						</a>
					</div>
				</div>
				<div className={styles.HeroImage}>
					<img src={heroImage} alt="LendX AI Agent Interface" />
				</div>
			</section>

			{/* Problem vs Solution */}
			<section id="features" className={styles.Section}>
				<div
					ref={problemReveal.ref}
					className={`${styles.Centered} ${styles.Reveal} ${problemReveal.isVisible ? styles.Visible : ""}`}
				>
					<h2>Reframing Liquidation</h2>
					<p>
						Traditional lending protocols treat liquidation as an arbitrage
						race. Bots battle for discounts, driving up fees and leaving
						borrowers with massive losses. LendX fixes this by turning
						liquidation into a managed, agent-driven market.
					</p>
				</div>

				<div className={styles.Grid}>
					<div className={styles.Card}>
						<div className={styles.CardIcon}>
							<Icon.AlertTriangle size="lg" />
						</div>
						<h3>The Gas War Problem</h3>
						<p>
							On most chains, liquidation bots bid up gas to be first. This
							creates MEV chaos and instability during market volatility.
						</p>
					</div>
					<div className={styles.Card}>
						<div className={styles.CardIcon}>
							<Icon.ShieldTick size="lg" />
						</div>
						<h3>The LendX Solution</h3>
						<p>
							By using Stellar's fixed-fee structure and protocol-native Monitor
							Agents, the "first valid transaction wins" without a war.
						</p>
					</div>
					<div className={styles.Card}>
						<div className={styles.CardIcon}>
							<Icon.Coins01 size="lg" />
						</div>
						<h3>Borrower Surplus</h3>
						<p>
							Unlike traditional protocols where liquidators take the entire
							discount, LendX auctions return surplus collateral to the
							borrower.
						</p>
					</div>
				</div>
			</section>

			{/* Agent Roles */}
			<section id="agents" className={`${styles.Section} ${styles.CTA}`}>
				<div
					ref={agentReveal.ref}
					className={`${styles.Centered} ${styles.Reveal} ${agentReveal.isVisible ? styles.Visible : ""}`}
				>
					<h2>The Agent Economy</h2>
					<p>
						LendX agents are not third-party bots—they are protocol-native
						economic actors with defined roles and compensation via x402 atomic
						payments.
					</p>
				</div>

				<div className={styles.Grid}>
					<div className={styles.Card}>
						<h3>Monitor Agents</h3>
						<p>
							Scans the ledger for unsafe positions. When a vault falls below
							the collateral ratio, the agent triggers an auction and earns a
							0.1% trigger fee atomically.
						</p>
						<Icon.SearchMd size="lg" color="var(--accent-cyan)" />
					</div>
					<div className={styles.Card}>
						<h3>Bidder Agents</h3>
						<p>
							Monitors active auctions and submits bids when the collateral
							discount is attractive. Agents compete on bid value, not gas
							price.
						</p>
						<Icon.Target01 size="lg" color="var(--accent-cyan)" />
					</div>
					<div className={styles.Card}>
						<h3>x402 Payments</h3>
						<p>
							Atomic machine-to-machine payments ensure agents are compensated
							instantly inside the protocol function calls they trigger.
						</p>
						<Icon.CpuChip01 size="lg" color="var(--accent-cyan)" />
					</div>
				</div>
			</section>

			{/* Why Stellar */}
			<section id="tech" className={styles.Section}>
				<div
					ref={stellarReveal.ref}
					className={`${styles.Centered} ${styles.Reveal} ${stellarReveal.isVisible ? styles.Visible : ""}`}
				>
					<h2>Engineered for Stellar</h2>
					<p>
						LendX leverages Stellar's structural advantages to enable a new
						class of autonomous DeFi.
					</p>
				</div>

				<div className={styles.Grid}>
					<div className={styles.Card}>
						<h3>Native USDC</h3>
						<p>
							No bridge risk. Lender deposits, borrower debt, and agent
							commissions are all settled in Circle-issued native USDC.
						</p>
					</div>
					<div className={styles.Card}>
						<h3>Fixed Fees</h3>
						<p>
							Predictable costs eliminate MEV gas wars, allowing agents to
							operate with high efficiency and low overhead.
						</p>
					</div>
					<div className={styles.Card}>
						<h3>Atomic DEX</h3>
						<p>
							Soroban contracts can execute path payments on the Stellar DEX
							atomically, ensuring seamless collateral liquidation.
						</p>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className={styles.CTA}>
				<div
					ref={ctaReveal.ref}
					className={`${styles.Reveal} ${ctaReveal.isVisible ? styles.Visible : ""}`}
				>
					<h2>Ready to build the future?</h2>
					<p>
						Join the LendX ecosystem and start building autonomous lending
						agents on Stellar.
					</p>
					<div style={{ marginTop: "3rem" }}>
						<Link to="/dashboard">
							<button className={styles.ButtonPrimary}>Get Started</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Landing
