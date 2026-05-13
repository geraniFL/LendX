import { Card, Icon } from "@stellar/design-system"
import React from "react"
import { Link } from "react-router-dom"
import { LendXDashboard } from "../components/LendXDashboard"
import { labPrefix } from "../contracts/util"
import styles from "./Home.module.css"

const Home: React.FC = () => (
	<div className={styles.Home}>
		<header className={styles.Header}>
			<h1>Autonomous Lending on Stellar</h1>
			<p>
				Welcome to the <strong>LendX</strong> maintainer portal. This interface allows you to monitor protocol health, manage auctions, and interact with agent-native DeFi primitives.
			</p>
		</header>

		<LendXDashboard />

		<section className={styles.SecondarySection}>
			<Card>
				<h2>
					<Icon.Code02 size="lg" />
					Developer Entry Points
				</h2>

				<p>
					LendX is built for <strong>Drips Wave</strong> contributors. Here is how to get started:
				</p>

				<ol>
					<li>
						Explore the core logic in <code>/contracts/lend-x</code>
					</li>
					<li>
						Read our <strong>Action Model Programming</strong> guide in <Link to="/docs/architecture" className="Link Link--primary">ARCHITECTURE.md</Link>
					</li>
					<li>
						Claim a <strong>Wave Task</strong> from the <a href="https://github.com/geraniFL/LendX/issues" className="Link Link--primary" target="_blank">Issue Tracker</a>
					</li>
				</ol>

				<nav className={styles.Nav}>
					<Link to="/debug">
						<button className="Button Button--tertiary Button--md">
							Contract Explorer
							<Icon.ArrowUpRight size="md" />
						</button>
					</Link>
					<Link to={labPrefix()}>
						<button className="Button Button--tertiary Button--md">
							Transaction Explorer
							<Icon.ArrowUpRight size="md" />
						</button>
					</Link>
				</nav>
			</Card>

			<Card>
				<h2>
					<Icon.ShieldTick size="lg" />
					Protocol Safety
				</h2>
				<p>
					LendX replaces traditional bots with protocol-native agents. This ensures that liquidations are always handled efficiently and fairly.
				</p>
				<p>
					Current Network: <strong>Stellar Testnet</strong>
				</p>
				<Link to="/ROADMAP.md" className="Link Link--primary">View Roadmap</Link>
			</Card>
		</section>
	</div>
)

export default Home
