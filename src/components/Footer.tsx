import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMailSharp, IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="w-full py-10 px-4 flex flex-col items-center justify-center gap-7">
            <a
                href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-lightpink underline underline-offset-3 text-sm"
            >
                MLH Code of Conduct
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
                <a
                    href="mailto:cu.divhacks@gmail.com"
                    aria-label="Email Us"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <IoMailSharp size={30} />
                </a>

                <a
                    href="https://instagram.com/divhacks"
                    aria-label="Instagram"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <IoLogoInstagram size={32} />
                </a>

                <a
                    href="https://facebook.com/divhacks"
                    aria-label="Facebook"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <FaFacebookF size={24} />
                </a>

                <a
                    href="https://linkedin.com/company/divhacks"
                    aria-label="LinkedIn"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <FaLinkedinIn size={26} />
                </a>

                <a
                    href="https://twitter.com/divhacks"
                    aria-label="Twitter"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <FaTwitter size={28} />
                </a>
            </div>
            <div className="w-full text-center pt-3 font-normal text-base md:text-lg">
                Copyright © 2026 DivHacks. All Rights Reserved.
            </div>
        </footer>
    );
}
