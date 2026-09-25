"use client";

import styles from "./Sponsors.module.css";

interface SponsorLogoProps {
    src: string;
    alt: string;
    rank: "platinum" | "gold" | "silver" | "bronze";
}

const sponsorData = [
    // Platinum sponsors (largest)
    { id: 1, src: "/images/Logo/capitalOneLogo.svg", alt: "Capital One", rank: "platinum" as const },
    { id: 2, src: "/images/Logo/rippleLogo.svg", alt: "DivHacks", rank: "platinum" as const },
    // Gold sponsors
    { id: 3, src: "/images/Logo/spacexaiLogo.svg", alt: "SpaceX AI", rank: "gold" as const },
    // Silver sponsors
    { id: 6, src: "/images/Logo/nordvpnLogo.svg", alt: "NordVPN", rank: "silver" as const },
    { id: 7, src: "/images/Logo/nordpassLogo.png", alt: "NordPass", rank: "silver" as const },
    { id: 8, src: "/images/Logo/incogniLogo.png", alt: "Incogni", rank: "silver" as const },
    { id: 9, src: "/images/Logo/sailyLogo.png", alt: "Saily", rank: "silver" as const },
    { id: 10, src: "/images/Logo/coveronLogo.png", alt: "CoverOn", rank: "silver" as const },
    { id: 4, src: "/images/Logo/redBullLogo.svg", alt: "Red Bull", rank: "silver" as const },
    // Bronze sponsors
    { id: 5, src: "/images/Logo/tavilyLogo.svg", alt: "Tavily", rank: "bronze" as const },
];

function SponsorLogo({ src, alt, rank }: SponsorLogoProps) {
    return (
        <div 
            className={`${styles.sponsorLogo} ${rank === 'platinum' ? styles.rankPlatinum : rank === 'gold' ? styles.rankGold : rank === 'silver' ? styles.rankSilver : styles.rankBronze}`}
            data-rank={rank}
        >
            {src ? (
                <img src={src} alt={alt} className={styles.sponsorImg} />
            ) : (
                <div className={styles.sponsorPlaceholder}>
                    <span>{alt}</span>
                </div>
            )}
        </div>
    );
}

export default function Sponsors() {
    // One row per tier; logos within a tier wrap onto extra rows as needed.
    const tiers = (["platinum", "gold", "silver", "bronze"] as const)
        .map(rank => sponsorData.filter(s => s.rank === rank))
        .filter(tier => tier.length > 0);

    return (
        <section id="sponsors" className={styles.sponsorsSection}>
            <h2 className={styles.sponsorsTitle}>OUR SPONSORS</h2>

            <div className={styles.sponsorsContainer}>
                {tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className={styles.tierRow}>
                        {tier.map((sponsor) => (
                            <SponsorLogo
                                key={sponsor.id}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                rank={sponsor.rank}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
