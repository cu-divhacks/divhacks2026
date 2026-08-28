"use client";

import { useEffect, useRef } from "react";
import styles from "./Sponsors.module.css";

interface SponsorLogoProps {
    src: string;
    alt: string;
    rank: "platinum" | "gold" | "silver" | "bronze";
}

const sponsorData = [
    // Platinum sponsors (largest)
    { id: 1, src: "/images/Logo/rippleLogo.svg", alt: "DivHacks", rank: "platinum" as const },
    { id: 2, src: "/images/Logo/capitalOneLogo.svg", alt: "Capital One", rank: "platinum" as const },
    // Gold sponsors
    { id: 3, src: "/images/Logo/spacexaiLogo.svg", alt: "SpaceX AI", rank: "gold" as const },
    // Silver sponsors
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
    const containerRef = useRef<HTMLDivElement>(null);

    // Group sponsors by rank
    const platinumSponsors = sponsorData.filter(s => s.rank === "platinum");
    const goldSponsors = sponsorData.filter(s => s.rank === "gold");
    const silverSponsors = sponsorData.filter(s => s.rank === "silver");
    const bronzeSponsors = sponsorData.filter(s => s.rank === "bronze");

    // Create rows:
    // Row 1: Both Platinum side by side (Ripple + Capital One)
    // Row 2: Single Gold (SpaceX AI)
    // Row 3: Silver (Red Bull)
    // Row 4: Bronze (Tavily) - below Red Bull
    const rows = [
        // Row 1: Ripple + Capital One
        [platinumSponsors[0], platinumSponsors[1]],
        // Row 2: SpaceX AI
        [goldSponsors[0]],
        // Row 3: Red Bull
        [silverSponsors[0]],
        // Row 4: Tavily
        [bronzeSponsors[0]],
    ].filter(row => row.some(s => s));

    useEffect(() => {
        if (!containerRef.current) return;

        const logos = containerRef.current.querySelectorAll(`.${styles.sponsorLogo}`);
        
        logos.forEach((logo) => {
            const rank = logo.getAttribute('data-rank');
            
            // Define random ranges based on rank
            const ranges: Record<string, { x: number; y: number; rotate: number }> = {
                platinum: { x: 40, y: 24, rotate: 16 },  // -8° ~ +8°
                gold:     { x: 32, y: 20, rotate: 4 },   // -2° ~ +2°
                silver:   { x: 24, y: 16, rotate: 10 },  // -5° ~ +5°
                bronze:   { x: 20, y: 12, rotate: 8 },   // -4° ~ +4°
            };
            
            const range = ranges[rank || 'bronze'];
            
            // Generate random transform values for each logo
            const randomX = (Math.random() - 0.5) * range.x;
            const randomY = (Math.random() - 0.5) * range.y;
            let randomRotate = (Math.random() - 0.5) * range.rotate;

            // Pin SpaceX AI (gold) and Red Bull (silver) to opposing tilts so
            // they read as contrasting angles rather than random noise.
            if (rank === 'gold') randomRotate = -3;
            if (rank === 'silver') randomRotate = 4;
            
            // Store in CSS variables
            (logo as HTMLElement).style.setProperty('--random-x', `${randomX}px`);
            (logo as HTMLElement).style.setProperty('--random-y', `${randomY}px`);
            (logo as HTMLElement).style.setProperty('--random-rotate', `${randomRotate}deg`);
        });
    }, []);

    return (
        <section id="sponsors" className={styles.sponsorsSection}>
            <h2 className={styles.sponsorsTitle}>OUR SPONSORS</h2>
            
            <div ref={containerRef} className={styles.sponsorsContainer}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.sponsorRow}>
                        {row.map((sponsor) => (
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
