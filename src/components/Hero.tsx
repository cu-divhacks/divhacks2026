"use client";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Bebas+Neue&display=swap');

  .hero {
    background: #2d1b69;
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: 'Space Grotesk', sans-serif;
  }

  .hero-bg-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(ellipse 60% 50% at 70% 20%, rgba(123,47,190,0.45) 0%, transparent 100%),
      radial-gradient(ellipse 40% 35% at 85% 75%, rgba(224,64,208,0.18) 0%, transparent 100%);
  }

  .hero-body {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 40px 80px;
    gap: 60px;
    flex: 1;
    min-height: calc(100vh - 0px);
  }

  .hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .headline {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(100px, 14vw, 200px);
    line-height: 0.88;
    margin: 0 0 32px;
    letter-spacing: 3px;
  }

  .word-line-1 { display: block; }
  .word-line-2 { display: block; }

  .word-hack { color: #ffffff; }
  .word-the { color: #4ecfb0; }
  .word-city { color: #cc44cc; }

  .hero-sub {
    font-size: clamp(15px, 1.2vw, 18px);
    color: rgba(255,255,255,0.55);
    line-height: 1.65;
    max-width: 500px;
    margin: 0 0 40px;
  }

  .hero-ctas {
    display: flex;
    gap: 14px;
    align-items: center;
    margin-bottom: 56px;
  }

  .btn-primary {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    background: #e040d0;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 16px 36px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background 0.15s ease, transform 0.1s ease;
  }

  .btn-primary:hover {
    background: #f060e8;
    transform: translateY(-2px);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .meta-row {
    display: flex;
    gap: 48px;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .meta-label {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 12px;
    letter-spacing: 2.5px;
    color: #4ecfb0;
  }

  .meta-val {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }

  .hero-right {
    flex-shrink: 0;
    width: 42%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .graffiti-box {
    background: #0d0820;
    border-radius: 12px;
    width: 100%;
    aspect-ratio: 4 / 3;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    .hero-body {
      flex-direction: column;
      padding: 40px 32px 60px;
    }
    .hero-right {
      width: 100%;
    }
  }
`;

export default function Hero() {
  return (
    <>
      <style>{styles}</style>
      <div style={{
          background: "#F7C82A",
          width: "100%",
          padding: "22px 0",
          textAlign: "center" as const,
      }}>
          <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              color: "#ffffff",
              letterSpacing: "3px",
          }}>
              Columbia University DivHacks Hackathon 2026
          </span>
      </div>
      <section className="hero">
        <div className="hero-bg-glow" />

        <div className="hero-body">
          <div className="hero-left">
            <h1 className="headline">
              <span className="word-line-1">
                <span className="word-hack">Hack </span>
                <span className="word-the">The</span>
              </span>
              <span className="word-line-2">
                <span className="word-city">City.</span>
              </span>
            </h1>

            <p className="hero-sub">
              A hackathon for building smarter solutions for the communities
              we live in. Food. Housing. Transportation.
            </p>

            <div className="hero-ctas">
              <a
                href="https://forms.gle/5Cyi44u6HcC5iiZF8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Pre-Register Now
              </a>
            </div>

            <div className="meta-row">
              <div className="meta-item">
                <span className="meta-label">When</span>
                <span className="meta-val">September 26–27, 2026</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Where</span>
                <span className="meta-val">Columbia University</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Affiliation</span>
                <span className="meta-val">MLH Official</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="graffiti-box">
              {/* Drop your image asset here when ready */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}