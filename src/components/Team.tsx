"use client";

const teamMembers = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    name: "Name Placeholder",
    role: "DivHacks Lead",
    major: "Computer Engineering",
    school: "Columbia Engineering",
    year: "Sophomore",
    image: null, // To Replace with actual image URLs
}));

export default function Team() {
    return (
        <section className="team-section">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');
            `}</style>

            <div className="splatter-container">
                <img 
                    src="/images/splash.png" 
                    alt="Background Splatter" 
                    className="background-splatter"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
            </div>

            <h2 className="team-title">THE TEAM</h2>

            <div className="marquee-container">
                <div className="marquee-track">
                    {[...teamMembers, ...teamMembers].map((member, index) => {
                        
                        const bgColorClass = index % 2 === 0 ? "bg-yellow" : "bg-orange";
                        return (
                            <div key={`${member.id}-${index}`} className={`team-card ${bgColorClass}`}>
                                <div className="card-grid-overlay" />
                                
                                <div className="card-content">
                                    <div className="profile-img-box">
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="profile-img" />
                                        ) : (
                                            <div className="profile-placeholder" />
                                        )}
                                    </div>
                                    <div className="info-box">
                                        <h3 className="info-name">{member.name}</h3>
                                        <p className="info-text">{member.role}</p>
                                        <p className="info-text">{member.major}</p>
                                        <p className="info-text">{member.school}</p>
                                        <p className="info-text">{member.year}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .team-section {
                    background-color: #1A1A1A;
                    padding: 80px 40px 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: var(--font-geist-sans), sans-serif;
                    position: relative;
                    overflow: hidden;
                    min-height: 100vh;
                }

                /* Background Splatter */
                .splatter-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    max-width: 1500px;
                    z-index: 0;
                    display: flex;
                    justify-content: center;
                    pointer-events: none;
                    opacity: 0.7;
                }
                .background-splatter {
                    width: 100%;
                    height: auto;
                    opacity: 0.9;
                }

                /* Title Styling */
                .team-title {
                    font-family: 'Sedgwick Ave Display', cursive;
                    font-size: 5rem;
                    color: #FFC83D;
                    -webkit-text-stroke: 2px #000000; 
                    text-shadow: 5px 5px 0px #31983C;
                    margin: 0 0 60px 0;
                    letter-spacing: 4px;
                    position: relative;
                    z-index: 1;
                    transform: rotate(-2deg); 
                }

                .marquee-container {
                    width: 100vw; 
                    overflow: hidden;
                    position: relative;
                    z-index: 1;
                    padding: 20px 0;
                }

                .marquee-track {
                    display: flex;
                    width: max-content;
                    gap: 30px;
                    animation: scrollRight 35s linear infinite; 
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }

                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }

                .team-card {
                    width: 240px; 
                    flex-shrink: 0; 
                    aspect-ratio: 2.5 / 3; 
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 24px;
                    box-shadow: 4px 4px 0px rgba(0,0,0,0.5); 
                    transition: transform 0.2s ease; /* Smooth hover effect */
                }

                .team-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 8px 12px 0px rgba(0,0,0,0.5);
                }
                .bg-yellow {
                    background-color: #f8119f;
                }
                .bg-orange {
                    background-color: #44C299;
                }

                /* CSS Magic for the Grid Lines */
                .card-grid-overlay {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-image:
                        linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px);
                    background-size: 20px 20px;
                    z-index: 0;
                }

                .card-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }

                /* Profile Picture Square */
                .profile-img-box {
                    width: 90px;
                    height: 90px;
                    background: #FFF;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                .profile-placeholder {
                    width: 100%;
                    height: 100%;
                    background-color: #FFF;
                }
                .profile-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                /* Info Box */
                .info-box {
                    background-color: #FCEFB4; 
                    border-radius: 20px;
                    padding: 16px 8px;
                    text-align: center;
                    color: #000;
                }
                .info-name {
                    font-weight: 900;
                    font-size: 0.85rem;
                    margin: 0 0 4px 0;
                }
                .info-text {
                    font-weight: 800;
                    font-size: 0.65rem;
                    line-height: 1.3;
                    margin: 0;
                }

                @media (max-width: 1024px) {
                    .team-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .team-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .team-title {
                        font-size: 4rem;
                    }
                }
                @media (max-width: 480px) {
                    .team-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}
