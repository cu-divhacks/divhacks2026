import Image from "next/image";

export default function Header() {
    return (
        <header className="relative w-full z-20 flex items-center justify-end px-6 py-6 lg:px-12 lg:py-8 bg-black">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 md:left-12 md:translate-x-0">
                <Image
                    src="/league-2027-season-trust-badge-template_White.svg"
                    alt="MLH Trust Badge"
                    width={130}
                    height={228}
                />
            </div>

            <nav className="hidden relative z-10 ml-auto md:flex max-w-5xl flex-wrap items-center justify-end gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white sm:gap-3 lg:gap-4">
                <a href="#about" className="lg:text-lg hover:text-normalyellow">
                    About
                </a>
                <a href="#tracks" className="lg:text-lg hover:text-normalyellow">
                    Tracks
                </a>
                {/* <a
                    href="#sponsors"
                    className="lg:text-lg hover:text-normalyellow"
                >
                    Sponsors
                </a> */}
                <a href="#faq" className="lg:text-lg hover:text-normalyellow">
                    FAQ
                </a>
                <a
                    href="https://forms.gle/5Cyi44u6HcC5iiZF8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate ml-1 inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-base font-black uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
                    style={{ background: "rgba(248, 17, 159, 1)" }}
                >
                    Apply
                </a>
            </nav>
        </header>
    );
}
