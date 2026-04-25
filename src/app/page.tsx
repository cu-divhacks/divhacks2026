import Image from "next/image";

export default function Home() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#D16A99] text-white">
            <div className="absolute top-0 z-10 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12">
                <Image
                    src="/league-2027-season-trust-badge-template_White.svg"
                    alt="MLH Trust Badge"
                    width={130}
                    height={228}
                />
            </div>
            <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center lg:items-start lg:gap-10 lg:pl-56 lg:pr-16 lg:text-left">
                <div className="flex flex-col gap-2 lg:gap-3">
                    <p className="order-first text-xs font-semibold uppercase tracking-[0.15em] text-black lg:order-2 lg:tracking-[0.2em] lg:text-xl">
                        Columbia University
                    </p>
                    <h1 className="order-2 text-4xl font-black leading-none tracking-tighter lg:order-first lg:text-6xl xl:text-9xl">
                        <span className="text-white">DivHacks</span>
                        <span className="text-black"> 2026</span>
                    </h1>
                    <p className="order-3 text-2xl font-semibold text-white lg:text-4xl">
                        Coming Soon
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                        href="https://mailchi.mp/18c989449932/divhacks-mailing-list"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-colors bg-white text-[#D16A99] hover:bg-black hover:text-white"
                    >
                        Interested in participating?
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSehqS2KVlaA9t904rwTMOSQmmTB6I-AwA-uWdychuNrlMw6zA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-colors bg-white text-[#D16A99] hover:bg-black hover:text-white"
                    >
                        Interested in sponsoring?
                    </a>
                </div>
            </main>
        </div>
    );
}
