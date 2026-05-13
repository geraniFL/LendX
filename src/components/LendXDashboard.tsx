import { Button, Card, Icon, Input, Layout, Badge } from "@stellar/design-system"
import React, { useState } from "react"
import styles from "./LendXDashboard.module.css"

export const LendXDashboard: React.FC = () => {
    const [collateral, setCollateral] = useState("1000")
    const [debt, setDebt] = useState("400")

    const healthFactor = (Number(collateral) * 0.8) / Number(debt)
    const isLiquidatable = healthFactor < 1.0

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {/* User Stats */}
                <Card className={styles.card}>
                    <h2><Icon.User01 size="lg" /> My Position</h2>
                    <div className={styles.statRow}>
                        <span>Collateral (XLM)</span>
                        <strong>{collateral}</strong>
                    </div>
                    <div className={styles.statRow}>
                        <span>Debt (USDC)</span>
                        <strong>{debt}</strong>
                    </div>
                    <div className={styles.healthRow}>
                        <span>Health Factor</span>
                        <Badge variant={healthFactor > 1.5 ? "success" : healthFactor > 1.0 ? "warning" : "error"}>
                            {healthFactor.toFixed(2)}
                        </Badge>
                    </div>
                    
                    <div className={styles.actions}>
                        <Button variant="primary" fullWidth>Deposit Collateral</Button>
                        <Button variant="secondary" fullWidth>Borrow USDC</Button>
                    </div>
                </Card>

                {/* Active Auctions (For Agents/Bidders) */}
                <Card className={styles.card}>
                    <h2><Icon.Activity size="lg" /> Active Auctions</h2>
                    <div className={styles.auctionList}>
                        <div className={styles.auctionItem}>
                            <div>
                                <strong>Auction #42</strong>
                                <p>Borrower: G...4x9</p>
                            </div>
                            <div className={styles.auctionDetails}>
                                <span>Debt: 500 USDC</span>
                                <Button variant="tertiary" size="sm">Submit Bid</Button>
                            </div>
                        </div>
                        <p className={styles.emptyText}>No other active liquidations.</p>
                    </div>
                </Card>
            </div>

            {/* Autonomous Logic Section */}
            <Card className={styles.fullCard}>
                <h3><Icon.CpuChip01 size="lg" /> Autonomous Execution Primitives</h3>
                <p>
                    LendX leverages <strong>x402</strong> and <strong>Action Model Programming</strong> to handle liquidations without human intervention.
                </p>
                <div className={styles.primitiveList}>
                    <div className={styles.primitive}>
                        <strong>Monitor Agent</strong>
                        <p>Watches Health Factors and triggers Dutch Auctions for 0.1% fee.</p>
                    </div>
                    <div className={styles.primitive}>
                        <strong>Bidder Agent</strong>
                        <p>Monitors auctions and bids when the discount reaches profitability.</p>
                    </div>
                    <div className={styles.primitive}>
                        <strong>Atomic Path Payments</strong>
                        <p>Settles debt and returns surplus to borrower in one Stellar transaction.</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}
