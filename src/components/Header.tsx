import Image from "next/image";

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-end px-6 pt-6 lg:px-12 lg:pt-8">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 md:left-12 md:translate-x-0">
                <Image
                    src="/league-2027-season-trust-badge-template_White.svg"
                    alt="MLH Trust Badge"
                    width={130}
                    height={228}
                />
            </div>

            <nav className="hidden relative z-10 ml-auto md:flex max-w-5xl flex-wrap items-center justify-end gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white sm:gap-3 lg:gap-4">
                <a href="#about" className="lg:text-lg hover:text-yellow-500">
                    About
                </a>
                <a href="#tracks" className="lg:text-lg hover:text-yellow-500">
                    Tracks
                </a>
                {/* <a
                    href="#sponsors"
                    className="lg:text-lg hover:text-yellow-500"
                >
                    Sponsors
                </a> */}
                <a href="#faq" className="lg:text-lg hover:text-yellow-500">
                    FAQ
                </a>
                <a
                    href="https://forms.gle/5Cyi44u6HcC5iiZF8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate ml-1 inline-flex items-center justify-center rounded-full border-2 border-black bg-[#fcde57] px-6 py-3 text-base font-black uppercase tracking-[0.16em] text-black shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                    {/* <span className="absolute -inset-2 -z-10">
                        <span className="absolute left-1/2 top-1/2 h-12 w-16 -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[#f8119f] blur-[2px] opacity-90 rotate-[-14deg]" />
                        <span className="absolute left-[18%] top-[18%] h-5 w-5 rounded-full bg-[#882cac] opacity-90" />
                        <span className="absolute right-[10%] top-[24%] h-4 w-4 rounded-full bg-[#fb7e03] opacity-95" />
                        <span className="absolute bottom-[14%] left-[18%] h-3 w-3 rounded-full bg-[#000000] opacity-80" />
                    </span> */}
                    Apply
                </a>
            </nav>
        </header>
    );
}
