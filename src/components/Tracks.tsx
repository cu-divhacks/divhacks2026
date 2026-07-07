"use client";

import { useState } from "react";

const tracks = [
    {
        id: "move-smarter",
        name: "Move Smarter",
        badge: "PHYSICAL MOVEMENT ONLY",
        badgeColor: "#fb7e03",
        icon: "/images/move-smarter.png",
        accentColor: "#fb7e03",
        description: "Getting around the city, but better. Anything about how people and things move through NYC",
        tags: ["Transit", "Bikes", "Optimization"],
        focusAreas: ["Transit . Bikes . Scooters . Commute",
            "Optimization . Carbon Footprint . Energy"
        ],
    },
    {
        id: "live-better",
        name: "Live Better",
        badge: "STRICTLY PERSONAL UTILITY",
        badgeColor: "#F7C82A",
        icon: "/images/live-better.png",
        accentColor: "#F7C82A",
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
        badgeColor: "#44C299",
        icon: "/images/know-your-city.png",
        accentColor: "#44C299",
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
]

export default function Tracks() {
    const [selectedTrack, setSelectedTrack] = useState<typeof tracks[number] | null>(null);
    
    return (
        <section className="tracks-section">
            {/* Title sign */ }
            <div className="tracks-sign-wrapper">
                <div className="tracks-sign-posts">
                    <div className="sign-post"/>
                    <div className="sign-post"/>
                </div>
                <div className="tracks-sign">
                    <h2 className="tracks-title">TRACKS</h2>
                </div>
            </div>

            <p className="tracks-subtitle">Choose Your Station</p>

            { /* Train Car */ }
            <div className="train-wrapper">
                {/* Left side panel */ }
                <div className="train-side-panel">
                    <div className="train-light"/>
                    <div className="train-door">
                        <span className="train-label">
                            TRK - {selectedTrack ? `0${tracks.indexOf(selectedTrack) + 1}` : "??"}
                        </span>
                    </div>
                </div>
                
                { /* Windows */ }
                <div className="train-windows">
                    {tracks.map((track) => (
                        <button
                            key={track.id}
                            className={`train-window ${selectedTrack?.id === track.id ? "active" : ""}` }
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
                                        (e.target as HTMLImageElement).style.display = "none";
                                    }}
                                />
                            </div>
                            <span className="window-label">{track.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            { /* Train Wheels */ }
            <div className="train-wheels">
                {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="wheel" />
                ))}
            </div>
            <div className="track-rails">
                <div className="rail"/>
                <div className="rail"/>
                <div className="rail-ties">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="rail-tie"/>
                    ))}
                </div>
            </div>

            { /* Detail panel */ }
            {selectedTrack ? (
                <div className="track-detail">
                    <div className="detail-left">
                        <div className="detail-icon-box" style={{ borderColor: selectedTrack.accentColor }}>
                            <img 
                                src={selectedTrack.icon}
                                alt={selectedTrack.name}
                                className="detail-icon"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
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
                                    style={{ borderColor: selectedTrack.accentColor, color: selectedTrack.accentColor }}
                                >
                                    {selectedTrack.badge}
                                </span>
                            </div>
                            <p className="detail-description">{selectedTrack.description}</p>
                            <div className="detail-tags">
                                {selectedTrack.tags.map((tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="detail-focus" style={{ borderColor: selectedTrack.accentColor }}>
                        <img
                            src="/images/splash.png"
                            alt=""
                            className="focus-splatter"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        <p className="focus-label" style={{ color: selectedTrack.accentColor }}>
                            FOCUS AREAS
                        </p>
                        {selectedTrack.focusAreas.map((area, i) => (
                            <p key={i} className="focus-area">
                                . {area}
                            </p>
                        ))}
                        <div className="focus-badge" style={{ borderColor: selectedTrack.accentColor, color: selectedTrack.accentColor }}>
                            {selectedTrack.badge}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-state-prompt">
                    Pick a window to board
                </div>
            )}

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');
                .tracks-section {
                    background-color: #000000;
                    padding: 60px 40px 80px;
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
                    margin-top: -60px;
                    position: relative;
                    width: 100%;
                    max-width: 900px;
                }

                .splatter-bg {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 220%; 
                    height: auto;
                    z-index: 0;
                    pointer-events: none;
                }

                .tracks-sign-posts {
                    display: flex;
                    gap: 200px;
                }
                .sign-post {
                    width: 14px;
                    height: 40px;
                    background: #F7C82A;
                    border-radius: 2px;
                }
                .tracks-sign {
                    background: #F7C82A;
                    padding: 14px 60px;
                    border-radius: 6px;
                    margin-top: -2px;
                    box-shadow: 0 4px 15px rgba(247, 200, 42, 0.2);
                    position: relative;
                    animation: boxNeonPulse 2s ease-in-out infinite;
                }
                .tracks-title {
                    font-family: 'Sedgwick Ave Display', cursive;
                    font-size: 4rem;
                    color: #ffffff;
                    -webkit-text-stroke: 1px black;
                    letter-spacing: 2px;
                    margin: 0;
                    text-shadow: 4px 4px 0px rgba(0,0,0,0.8); 
                    z-index: 1; 
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
                    background: #882cac;
                    border-radius: 8px 8px 0 0;
                    border: 3px solid #4e1266;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    min-height: 160px;
                }
                .train-side-panel {
                    width: 80px;
                    background: #4c1861;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 16px 8px;
                    border-right: 3px solid #4c1861;
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
                    background: #7a507a;
                    border: 2px solid #353137;
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
                    border: 2px solid #f8119f;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 8px;
                    cursor: pointer;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .train-window:hover {
                    border-color: var(--accent);
                }
                .train-window.active {
                    border-color: var(--accent);
                    box-shadow: 6px 6px 0px var(--accent);
                    transform: translate(-3px, -3px);
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
                    font-family: Sedgwick Ave Display, cursive;
                    font-size: 1rem;
                    text-align: center;
                    letter-spacing: 2px;
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
                    background: #9a6a9a;
                    display: flex;
                    align-items: center;
                    padding: 6px 20px;
                    gap: 0;
                    justify-content: space-around;
                    border: 2px solid #c090c0;
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
                    background: #555;
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
                    background: #434241;
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
                    background: #fefefe;
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
                    font-size: 2rem;
                    margin: 0;
                    font-family: Sedgwick Ave Display, cursive;
                    letter-spacing: 2px;
                }
                .detail-badge {
                    border: 1px solid;
                    border-radius: 20px;
                    padding: 2px 12px;
                    font-size: 0.8rem;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
                .detail-description {
                    color: #f5f5f5;
                    font-size: 1rem;
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
                    border: 2px solid #333;
                    border-radius: 4px;
                    padding: 20px 24px;
                    min-width: 280px;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1;
                }
                .focus-splatter {
                    position: absolute;
                    bottom: -40px;
                    right: -40px;
                    width: 250px;
                    transform: rotate(25deg);
                    z-index: -1;
                    opacity: 0.6;
                    pointer-events:
                }
                .focus-label {
                    color: #ffb347;
                    font-family: San Francisco, sans-serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    margin: 0 0 12px;
                }
                .focus-area {
                    color: #ffffff;
                    font-family: San Francisco, sans-serif;
                    font-size: 0.95rem;
                    margin: 0 0 6px;
                    line-height: 1.5;
                }
                .focus-badge {
                    margin-top: 16px;
                    border: 2px solid;
                    border-radius: 6px;
                    padding: 6px 12px;
                    font-size: 0.72rem;
                    letter-spacing: 1px;
                    font-family: San Francisco, sans-serif;
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
                .empty-state-prompt {
                    width: 100%;
                    text-align: center;
                    color: #888888;
                    font-size: 1.4rem;
                    margin-top: 60px;
                    margin-bottom: 20px;
                    letter-spacing: 1px;
                }
                
                @keyframes boxNeonPulse {
                    0%, 100% {
                        box-shadow: 0 4px 15px rgba(247, 200, 42, 0.2), 0 0 10px #F7C82A;
                    }
                    50% {
                        box-shadow: 0 4px 15px rgba(247, 200, 42, 0.2), 0 0 30px #F7C82A;
                    }
                }
            `}</style>
        </section>
    );
}
