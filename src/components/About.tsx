export default function About() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap');
            `}</style>

            <section className="relative min-h-125 bg-slate-950 text-white py-16 px-6 md:px-12 my-8 overflow-hidden rounded-2xl border-4 border-zinc-800 shadow-2xl font-sans">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: "rgba(136, 44, 172, 0.15)" }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: "rgba(33, 143, 118, 0.15)" }}
                ></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    <div className="md:col-span-1 flex flex-col justify-center">
                        <h2
                            className="text-7xl md:text-8xl select-none transform -rotate-3"
                            style={{
                                fontFamily: "'Sedgwick Ave Display', cursive",
                                color: "#fb7e03",
                                textShadow:
                                    "3px 3px 0px #f8119f, 6px 6px 0px #882cac, 9px 9px 0px #000",
                                WebkitTextStroke: "2px #000",
                            }}
                        >
                            About DivHacks
                        </h2>
                        <div
                            className="h-3 w-36 mt-2 rounded-full transform -rotate-3 animate-pulse"
                            style={{
                                backgroundColor: "#cc007e",
                                boxShadow: "0 0 12px #f8119f",
                            }}
                        ></div>
                    </div>

                    <div className="md:col-span-2 relative">
                        <div className="absolute inset-0 bg-black/75 border border-zinc-800 rounded-xl backdrop-blur-md -rotate-1 pointer-events-none"></div>
                        <div className="relative p-6 md:p-8 text-lg md:text-xl leading-relaxed text-slate-200 font-medium space-y-4">
                            <p>
                                <span
                                    style={{ color: "#fb7e03" }}
                                    className="font-bold"
                                >
                                    DivHacks
                                </span>
                                , founded in 2017, is Columbia University's
                                premier student-led annual diversity hackathon
                                run by{" "}
                                <span
                                    style={{ color: "#f8119f" }}
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
                                <span
                                    style={{ color: "#fcde57" }}
                                    className="font-semibold"
                                >
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
