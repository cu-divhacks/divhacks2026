import Splash from "./Splash";

export default function About() {
    return (
        <>
            <section
                id="about"
                className="relative z-0 min-h-100 text-white py-16 px-6 md:px-12 overflow-hidden shadow-2xl"
            >
                <Splash
                    className="w-2xs h-52 top-6 left-14"
                    color="var(--color-normalyellow)"
                    rotate={-19}
                />
                <Splash
                    className="w-36 h-44 bottom-10 right-24"
                    color="var(--color-lightpink)"
                    rotate={27}
                />
                <Splash
                    className="w-56 h-72 top-1/2 -right-6"
                    color="var(--color-lightteal)"
                    rotate={-8}
                />
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{
                        backgroundColor:
                            "color-mix(in srgb, var(--color-normalpurple) 15%, transparent)",
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-darkteal) 15%, transparent)" }}
                ></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
                    <div className="md:col-span-1 flex flex-col justify-center items-center md:items-start">
                        <h2
                            className="text-5xl sm:text-6xl md:text-8xl select-none transform -rotate-3 text-center md:text-left text-normalorange"
                            style={{
                                textShadow:
                                    "3px 3px 0px var(--color-lightpink), 6px 6px 0px var(--color-normalpurple), 9px 9px 0px var(--color-black)",
                                WebkitTextStroke: "2px var(--color-black)",
                            }}
                        >
                            About DivHacks
                        </h2>
                    </div>

                    <div className="md:col-span-2 relative">
                        <div
                            className="absolute inset-0 rounded-xl backdrop-blur-md -rotate-2 pointer-events-none animate-pulse"
                            style={{
                                borderColor: "var(--color-darkpink)",
                                borderWidth: "2px",
                                boxShadow: "0 0 12px var(--color-lightpink)",
                            }}
                        ></div>
                        <div className="relative p-6 md:p-8 text-base md:text-lg leading-relaxed text-white font-medium space-y-4">
                            <p>
                                <span
                                    style={{
                                        color: "var(--color-normalorange)",
                                    }}
                                    className="font-bold"
                                >
                                    DivHacks
                                </span>
                                , founded in 2017, is Columbia University's
                                premier student-led annual diversity hackathon
                                run by{" "}
                                <span
                                    style={{ color: "var(--color-lightpink)" }}
                                    className="font-semibold"
                                >
                                    Women in Computer Science
                                </span>
                                . Over the past eight years, DivHacks has
                                welcomed attendees from all over the tri-state
                                area.
                            </p>
                            <p>
                                We strive to create an empowering and
                                inspirational space for students who are
                                historically underrepresented in the tech
                                industry. Our goal is an experience that not
                                only reimagines what diversity should look like
                                in the tech industry but gives students the
                                tools to{" "}
                                <span className="font-semibold text-normalyellow">
                                    use technology to implement change
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
