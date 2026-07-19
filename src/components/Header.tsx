"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    style={{ background: "var(--color-lightpink)" }}
                >
                    Apply
                </a>
            </nav>

            <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="relative z-10 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            >
                <span
                    className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                    className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                    className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
            </button>

            {menuOpen && (
                <nav className="absolute left-0 right-0 top-full z-20 flex flex-col gap-1 bg-black px-6 py-6 text-sm font-semibold uppercase tracking-[0.14em] text-white md:hidden">
                    <a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="py-3 hover:text-normalyellow"
                    >
                        About
                    </a>
                    <a
                        href="#tracks"
                        onClick={() => setMenuOpen(false)}
                        className="py-3 hover:text-normalyellow"
                    >
                        Tracks
                    </a>
                    <a
                        href="#faq"
                        onClick={() => setMenuOpen(false)}
                        className="py-3 hover:text-normalyellow"
                    >
                        FAQ
                    </a>
                    <a
                        href="https://forms.gle/5Cyi44u6HcC5iiZF8"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-base font-black uppercase tracking-[0.16em] text-white"
                        style={{ background: "var(--color-lightpink)" }}
                    >
                        Apply
                    </a>
                </nav>
            )}
        </header>
    );
}
