"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

const COUNTDOWN_TARGET = new Date(2026, 8, 25, 0, 0, 0).getTime();

const styles = `
  .hero {
    background: rgba(42, 13, 53, 1);
    width: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
    z-index: 0;
    display: flex;
    flex-direction: column;
  }

  .hero-bg-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(ellipse 60% 50% at 70% 20%, color-mix(in srgb, var(--color-normalpurple) 45%, transparent) 0%, transparent 100%),
      radial-gradient(ellipse 40% 35% at 85% 75%, rgba(224,64,208,0.18) 0%, transparent 100%);
  }

  .hero-body {
    position: relative;
    z-index: 2;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 48px 80px 32px 80px;
    gap: 54px;
  }

  .hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .headline {
    font-family: var(--font-title), sans-serif;
    font-size: clamp(56px, 7.2vw, 110px);
    line-height: 0.88;
    margin: 0 0 20px;
    letter-spacing: 3px;
    white-space: nowrap;
  }

  .word-concrete { color: var(--color-lightteal); }
  .word-jungle { color: var(--color-normalpurple); }

  .hero-sub {
    font-size: clamp(20px, 2vw, 28px);
    color: color-mix(in srgb, var(--color-white) 55%, transparent);
    line-height: 1.5;
    max-width: 100%;
    margin: 0 0 24px;
  }

  .hero-ctas {
    display: flex;
    gap: 14px;
    align-items: center;
    margin-bottom: 32px;
  }

  .btn-primary {
    font-family: var(--font-title), sans-serif;
    font-size: 44px;
    letter-spacing: 2px;
    background: var(--color-darkpink);
    color: var(--color-white);
    border: none;
    border-radius: 8px;
    padding: 14px 48px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background 0.15s ease, transform 0.1s ease;
  }

  .btn-primary:hover {
    background: var(--color-lightpink);
    transform: translateY(-2px);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .meta-row {
    display: flex;
    gap: 36px;
    width: fit-content;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .meta-label {
    font-family: var(--font-title), sans-serif;
    font-size: 29px;
    letter-spacing: 2.5px;
    color: var(--color-lightteal);
  }

  .meta-val {
    font-size: 25px;
    font-weight: 700;
    color: var(--color-white);
    white-space: nowrap;
  }

  .hero-right {
    flex-shrink: 0;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    .hero-body {
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 32px 60px;
    }
    .headline {
      white-space: normal;
    }
    .hero-right {
      width: 100%;
    }
  }

  .banner {
    position: relative;
    z-index: 10;
    margin-top: 48px;
    width: 100%;
    min-height: 116px;
    background: var(--color-normalyellow);
    display: flex;
    align-items: center;
  }

  .banner-inner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    padding: 16px 24px;
  }

  .banner-title, .banner-sep, .countdown-num {
    font-family: var(--font-title), sans-serif;
    font-size: clamp(32px, 4vw, 50px);
    color: var(--color-white);
  }

  .banner-title {
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .countdown {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 56px;
  }

  .countdown-num {
    line-height: 1;
  }

  .countdown-label {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--color-white);
  }

  @media (min-width: 1024px) {
    .banner-inner {
      padding: 16px 48px;
    }
  }

  @media (max-width: 640px) {
    .banner-inner {
      justify-content: center;
      text-align: center;
    }
  }
`;

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const update = () =>
            setTimeLeft(Math.max(COUNTDOWN_TARGET - Date.now(), 0));
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    const days = Math.floor(timeLeft / 86400000);
    const hours = Math.floor((timeLeft % 86400000) / 3600000);
    const minutes = Math.floor((timeLeft % 3600000) / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);

    return (
        <>
            <style>{styles}</style>

            <div className="flex min-h-screen flex-col">
                <Header />

                <section className="hero">
                    <div className="banner">
                        <div className="banner-inner">
                            <span className="banner-title">
                                DivHacks 2026
                            </span>
                            <span className="banner-sep">•</span>
                            <div className="countdown">
                                {[
                                    { label: "Days", value: days },
                                    { label: "Hours", value: hours },
                                    { label: "Min", value: minutes },
                                    { label: "Sec", value: seconds },
                                ].map((unit) => (
                                    <div
                                        className="countdown-item"
                                        key={unit.label}
                                    >
                                        <span className="countdown-num">
                                            {String(unit.value).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>
                                        <span className="countdown-label">
                                            {unit.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hero-bg-glow" />

                    <div className="hero-body">
                        <div className="hero-left">
                            <h1 className="headline">
                                <span className="word-concrete">
                                    Concrete
                                </span>{" "}
                                <span className="word-jungle">Jungle</span>
                            </h1>

                            <p className="hero-sub">
                                A hackathon for building smarter solutions for
                                the communities we live in. Food. Housing.
                                Transportation.
                                <br />
                            </p>

                            <div className="hero-ctas">
                                <a
                                    href="https://forms.gle/5Cyi44u6HcC5iiZF8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    Apply Now
                                </a>
                            </div>

                            <div className="meta-row">
                                <div className="meta-item">
                                    <span className="meta-label">When</span>
                                    <span className="meta-val">
                                        September 26–27, 2026
                                    </span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Where</span>
                                    <span className="meta-val">
                                        Columbia University
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-right">
                            <img
                                src="/images/Divhacks-logo.png"
                                alt="DivHacks Logo"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
