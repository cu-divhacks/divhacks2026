"use client";

import Splash from "./Splash";

const tracks = [
    {
        id: "move-smarter",
        name: "Move Smarter",
        badge: "PHYSICAL MOVEMENT ONLY",
        icon: "/images/move-smarter.png",
        accentColor: "#4fc3f7",
        description: "Getting around the city, but better. Anything about how people and things move through NYC",
        tags: ["Transit", "Bikes", "Optimization"],
    },
    {
        id: "live-better",
        name: "Live Better",
        badge: "STRICTLY PERSONAL UTILITY",
        icon: "/images/live-better.png",
        accentColor: "#ffb347",
        description:
            "The grind of daily NYC life, optimized. Everything besides transportation — helping one person's day run smoother.",
        tags: ["Groceries", "Meal Planning", "Apartment Hacks"],
    },
    {
        id: "know-your-city",
        name: "Know Your City",
        badge: "ANTI TOURIST TRACK",
        icon: "/images/know-your-city.png",
        accentColor: "#44C299",
        description:
            "NYC, block by block. Helping people feel more connected to their neighborhood and local culture.",
        tags: ["Hidden Gems", "Local Events", "Neighborhood"],
    },
    {
        id: "hack-the-city",
        name: "Hack the City",
        badge: "DATA & APPROACHABILITY",
        icon: "/images/hack-the-city.png",
        accentColor: "var(--color-red)",
        description:
            "Data that makes urban systems approachable. Makes messy urban data more visual and actionable.",
        tags: ["Air Quality", "Housing Equity", "Rent Trends"],
    },
];

export default function Tracks() {
    return (
        <section id="tracks" className="tracks-section">
            <Splash
                className="w-md h-xs top-2 right-10"
                color="var(--color-blue)"
                rotate={-21}
            />
            <Splash
                className="w-40 h-32 top-1/2 left-6"
                color="var(--color-darkteal)"
                rotate={33}
            />

            {/* Title sign */}
            <div className="tracks-sign-wrapper">
                <div className="tracks-sign">
                    <h2 className="tracks-title">TRACKS</h2>
                </div>
            </div>

            <p className="tracks-subtitle">All Aboard — Explore Every Track</p>

            <div className="tracks-grid">
                {tracks.map((track) => (
                    <div
                        key={track.id}
                        className="track-card"
                        style={{ "--accent": track.accentColor } as React.CSSProperties}
                    >
                        <div className="track-card-icon">
                            <img
                                src={track.icon}
                                alt={track.name}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                        </div>
                        <div className="track-card-body">
                            <div className="track-card-title-row">
                                <h3 className="track-card-name">{track.name}</h3>
                                <span className="track-card-badge">{track.badge}</span>
                            </div>
                            <p className="track-card-description">{track.description}</p>
                            <div className="track-card-tags">
                                {track.tags.map((tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');
                .tracks-section {
                    background-color: rgba(42, 13, 53, 1);
                    padding: 60px 40px 60px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    z-index: 0;
                }

                .tracks-sign-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 8px;
                    position: relative;
                    width: 100%;
                    max-width: 900px;
                }
                .tracks-sign {
                    background: transparent;
                    padding: 14px 60px;
                    margin-top: -2px;
                    position: relative;
                }
                .tracks-title {
                    font-family: 'Sedgwick Ave Display', cursive;
                    font-size: 5rem;
                    color: #ffffff;
                    -webkit-text-stroke: 2px black;
                    text-shadow: 5px 5px 0px #31983c;
                    letter-spacing: 4px;
                    margin: 0;
                    transform: rotate(-2deg);
                    position: relative;
                    z-index: 1;
                }
                .tracks-subtitle {
                    color: var(--color-white);
                    font-size: 1.1rem;
                    margin: 0 0 28px;
                    letter-spacing: 1px;
                    text-align: center;
                }

                .tracks-grid {
                    width: 100%;
                    max-width: 1100px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }

                .track-card {
                    background: #000000;
                    border: 2px solid var(--accent);
                    border-radius: 8px;
                    padding: 16px;
                    display: flex;
                    gap: 14px;
                    align-items: flex-start;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                .track-card:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 6px 6px 0px var(--accent);
                }

                .track-card-icon {
                    width: 56px;
                    height: 56px;
                    background: var(--color-white);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .track-card-icon img {
                    width: 46px;
                    height: 46px;
                    object-fit: contain;
                    border-radius: 50%;
                }

                .track-card-body {
                    flex: 1;
                    min-width: 0;
                }
                .track-card-title-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 6px;
                }
                .track-card-name {
                    font-family: 'Sedgwick Ave Display', cursive;
                    font-size: 2rem;
                    color: var(--accent);
                    margin: 0;
                }
                .track-card-badge {
                    border: 1px solid var(--accent);
                    color: var(--accent);
                    border-radius: 20px;
                    padding: 2px 10px;
                    font-size: 0.75rem;
                    letter-spacing: 1px;
                    font-weight: 600;
                    white-space: nowrap;
                }
                .track-card-description {
                    color: #f5f5f5;
                    font-size: 1rem;
                    line-height: 1.5;
                    margin: 0 0 10px;
                }
                .track-card-tags {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                .tag {
                    border: 1.5px solid var(--accent);
                    color: var(--accent);
                    background: color-mix(in srgb, var(--accent) 15%, transparent);
                    border-radius: 20px;
                    padding: 3px 10px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    white-space: nowrap;
                }

                @media (max-width: 900px) {
                    .tracks-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .tracks-section {
                        padding: 48px 20px 48px;
                    }
                    .tracks-sign {
                        padding: 10px 28px;
                    }
                    .tracks-title {
                        font-size: 2rem;
                    }
                    .track-card {
                        padding: 14px;
                        gap: 12px;
                    }
                    .track-card-tags {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
}
