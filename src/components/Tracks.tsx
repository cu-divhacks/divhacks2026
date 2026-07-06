"use client";

import { useState } from "react";

const tracks = [
    {
        id: "move-smarter",
        name: "Move Smarter",
        badge: "PHYSICAL MOVEMENT ONLY",
        badgeColor: "#4fc3f7",
        icon: "/images/move-smarter.png",
        accentColor: "#4fc3f7",
        description:
            "Getting around the city, but better. Anything about how people and things move through NYC",
        tags: ["Transit", "Bikes", "Optimization"],
        focusAreas: [
            "Transit . Bikes . Scooters . Commute",
            "Optimization . Carbon Footprint . Energy",
        ],
    },
    {
        id: "live-better",
        name: "Live Better",
        badge: "STRICTLY PERSONAL UTILITY",
        badgeColor: "var(--color-normalorange)",
        icon: "/images/live-better.png",
        accentColor: "var(--color-normalorange)",
        description:
            "The grind of daily NYC life, optimized. Everything besides transportation — helping one person's day run smoother.",
        tags: ["Groceries", "Meal Planning", "Apartment Hacks"],
        focusAreas: [
            "Groceries . Laundry . Meal Planning",
            "Shortest Lines . Small Apartment Hacks",
        ],
    },
    {
        id: "know-your-city",
        name: "Know Your City",
        badge: "ANTI TOURIST TRACK",
        badgeColor: "#81c784",
        icon: "/images/know-your-city.png",
        accentColor: "#81c784",
        description:
            "NYC for people who actually live here. Helps people feel more connected to their neighborhood and local culture.",
        tags: ["Hidden Gems", "Local Events", "Neighborhood"],
        focusAreas: [
            "Hidden Gems . Hyperlocal Events . Arts",
            "Popups . Food Trucks . Neighborhood Culture",
        ],
    },
    {
        id: "hack-the-city",
        name: "Hack the City",
        badge: "DATA & ACCESSIBILITY",
        badgeColor: "#ef5350",
        icon: "/images/hack-the-city.png",
        accentColor: "#ef5350",
        description:
            "Data that makes urban systems accessible. Makes messy urban data more visual and actionable.",
        tags: ["Air Quality", "Housing Equity", "Rent Trends"],
        focusAreas: [
            "Air Quality . Green Space . Housing Equity",
            "Pedestrian Traffic . Rent Trends",
        ],
    },
];

export default function Tracks() {
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

    return (
        <section id="tracks" className="tracks-section">
            {/* Title sign */}
            <div className="tracks-sign-wrapper">
                <div className="tracks-sign-posts">
                    <div className="sign-post" />
                    <div className="sign-post" />
                </div>
                <div className="tracks-sign">
                    <h2 className="tracks-title">TRACKS</h2>
                </div>
            </div>

            <p className="tracks-subtitle">Choose Your Station</p>

            {/* Train Car */}
            <div className="train-wrapper">
                {/* Left side panel */}
                <div className="train-side-panel">
                    <div className="train-light" />
                    <div className="train-door">
                        <span className="train-label">
                            TRK - 0{tracks.indexOf(selectedTrack) + 1}
                        </span>
                    </div>
                </div>

                {/* Windows */}
                <div className="train-windows">
                    {tracks.map((track) => (
                        <button
                            key={track.id}
                            className={`train-window ${selectedTrack.id === track.id ? "active" : ""}`}
                            onClick={() => setSelectedTrack(track)}
                            style={
                                {
                                    "--accent": track.accentColor,
                                } as React.CSSProperties
                            }
                        >
                            <div className="window-icon-circle">
                                <img
                                    src={track.icon}
                                    alt={track.name}
                                    className="window-icon"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLImageElement
                                        ).style.display = "none";
                                    }}
                                />
                            </div>
                            <span className="window-label">{track.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Train Wheels */}
            <div className="train-wheels">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="wheel" />
                ))}
            </div>
            <div className="track-rails">
                <div className="rail" />
                <div className="rail" />
                <div className="rail-ties">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="rail-tie" />
                    ))}
                </div>
            </div>

            {/* Detail panel */}
            <div className="track-detail">
                <div className="detail-left">
                    <div
                        className="detail-icon-box"
                        style={{ borderColor: selectedTrack.accentColor }}
                    >
                        <img
                            src={selectedTrack.icon}
                            alt={selectedTrack.name}
                            className="detail-icon"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                    "none";
                            }}
                        />
                    </div>
                    <div className="detail-info">
                        <div className="detail-title-row">
                            <h3
                                className="detail-name"
                                style={{ color: selectedTrack.accentColor }}
                            >
                                {selectedTrack.name}
                            </h3>
                            <span
                                className="detail-badge"
                                style={{
                                    borderColor: selectedTrack.accentColor,
                                    color: selectedTrack.accentColor,
                                }}
                            >
                                {selectedTrack.badge}
                            </span>
                        </div>
                        <p className="detail-description">
                            {selectedTrack.description}
                        </p>
                        <div className="detail-tags">
                            {selectedTrack.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="detail-focus">
                    <p
                        className="focus-label"
                        style={{ color: selectedTrack.accentColor }}
                    >
                        FOCUS AREAS
                    </p>
                    {selectedTrack.focusAreas.map((area, i) => (
                        <p key={i} className="focus-area">
                            . {area}
                        </p>
                    ))}
                    <div
                        className="focus-badge"
                        style={{
                            borderColor: selectedTrack.accentColor,
                            color: selectedTrack.accentColor,
                        }}
                    >
                        {selectedTrack.badge}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .tracks-section {
                    background-color: #0a0a1a;
                    padding: 60px 20px 80px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: var(--font-geist-sans), sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .tracks-sign-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 16px;
                }
                .tracks-sign-posts {
                    display: flex;
                    gap: 200px;
                }
                .sign-post {
                    width: 14px;
                    height: 40px;
                    background: var(--color-normalorange);
                    border-radius: 2px;
                }
                .tracks-sign {
                    background: var(--color-normalorange);
                    padding: 14px 60px;
                    border-radius: 6px;
                    margin-top: -2px;
                }
                .tracks-title {
                    font-size: 3rem;
                    font-weight: 900;
                    color: white;
                    letter-spacing: 6px;
                    margin: 0;
                    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
                    font-family: var(--font-geist-mono), monospace;
                }
                .tracks-subtitle {
                    color: #aaa;
                    font-size: 1.1rem;
                    margin: 0 0 32px;
                    letter-spacing: 1px;
                }

                .train-wrapper {
                    width: 100%;
                    max-width: 1100px;
                    display: flex;
                    background: var(--color-normalpurple);
                    border-radius: 8px 8px 0 0;
                    border: 3px solid var(--color-normalpurple);
                    overflow: hidden;
                    min-height: 160px;
                }
                .train-side-panel {
                    width: 80px;
                    background: var(--color-normalpurple);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 16px 8px;
                    border-right: 3px solid var(--color-normalpurple);
                    flex-shrink: 0;
                }
                .train-light {
                    width: 20px;
                    height: 20px;
                    background: #ffd700;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #ffd700;
                }
                .train-door {
                    background: var(--color-normalpurple);
                    border: 2px solid var(--color-normalpurple);
                    border-radius: 4px;
                    width: 48px;
                    height: 60px;
                    text-align: center;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    padding-bottom: 4px;
                }
                .train-label {
                    color: #ffffff;
                    font-size: 0.6rem;
                    letter-spacing: 1px;
                }
                .train-windows {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    padding: 20px 20px;
                    flex: 1;
                }
                .train-window {
                    background: #000000;
                    border: 2px solid #626262;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 8px;
                    cursor: pointer;
                    transition:
                        border-color 0.2s,
                        box-shadow 0.2s;
                }
                .train-window:hover {
                    border-color: var(--accent);
                }
                .train-window.active {
                    border-color: var(--accent);
                    box-shadow: 0 0 12px var(--accent);
                }
                .window-icon-circle {
                    width: 70px;
                    height: 70px;
                    background: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .window-icon {
                    width: 64px;
                    height: 64px;
                    object-fit: contain;
                    border-radius: 50%;
                }
                .window-label {
                    color: #fffcfc;
                    font-size: 0.75rem;
                    text-align: center;
                    letter-spacing: 0.5px;
                }
                .train-window.active .window-label {
                    color: var(--accent);
                    font-weight: 700;
                    text-transform: uppercase;
                }

                /* Train Wheels and Rails */
                .train-wheels {
                    width: 100%;
                    max-width: 1100px;
                    background: var(--color-normalpurple);
                    display: flex;
                    align-items: center;
                    padding: 6px 20px;
                    gap: 0;
                    justify-content: space-around;
                    border: 2px solid var(--color-normalpurple);
                    border-top: none;
                }
                .wheel {
                    width: 28px;
                    height: 28px;
                    background: #555;
                    border-radius: 50%;
                    border: 3px solid #888;
                }
                .track-rails {
                    width: 100%;
                    max-width: 1100px;
                    margin-bottom: 48px;
                    position: relative;
                }
                .rail {
                    height: 6px;
                    background: var(--color-normalorange);
                    margin: 2px 0;
                }
                .rail-ties {
                    display: flex;
                    gap: 0;
                    margin-top: 4px;
                }
                .rail-tie {
                    flex: 1;
                    height: 18px;
                    background: #5a3a1a;
                    border-right: 2px solid #0a0a1a;
                }
                .track-detail {
                    width: 100%;
                    max-width: 1100px;
                    display: flex;
                    gap: 32px;
                    align-items: flex-start;
                }
                .detail-left {
                    display: flex;
                    gap: 20px;
                    flex: 1;
                    align-items: flex-start;
                }
                .detail-icon-box {
                    width: 100px;
                    height: 100px;
                    border: 2px solid #fff;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: #cecece;
                }
                .detail-icon {
                    width: 70px;
                    height: 70px;
                    object-fit: contain;
                }
                .detail-info {
                    flex: 1;
                }
                .detail-title-row {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                }
                .detail-name {
                    font-size: 1.6rem;
                    font-weight: 800;
                    margin: 0;
                    font-family: var(--font-geist-mono), monospace;
                }
                .detail-badge {
                    border: 1px solid;
                    border-radius: 20px;
                    padding: 2px 12px;
                    font-size: 0.65rem;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
                .detail-description {
                    color: #ccc;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin: 0 0 16px;
                }
                .detail-tags {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .tag {
                    border: 1px solid #555;
                    color: #ccc;
                    border-radius: 20px;
                    padding: 4px 14px;
                    font-size: 0.8rem;
                }

                /* Focus areas */
                .detail-focus {
                    background: #111;
                    border: 1px solid #333;
                    border-radius: 10px;
                    padding: 20px 24px;
                    min-width: 280px;
                    flex-shrink: 0;
                }
                .focus-label {
                    color: var(--color-normalorange);
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    margin: 0 0 12px;
                }
                .focus-area {
                    color: #bbb;
                    font-size: 0.82rem;
                    margin: 0 0 6px;
                    line-height: 1.5;
                }
                .focus-badge {
                    margin-top: 16px;
                    border: 1px solid;
                    border-radius: 6px;
                    padding: 6px 12px;
                    font-size: 0.72rem;
                    letter-spacing: 1px;
                    text-align: center;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .train-windows {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .track-detail {
                        flex-direction: column;
                    }
                    .detail-focus {
                        min-width: unset;
                        width: 100%;
                    }
                    .tracks-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
