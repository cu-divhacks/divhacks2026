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

            <div className="flex items-center gap-4 sm:gap-5">
                <a
                    href="mailto:cu.divhacks@gmail.com"
                    aria-label="Email Us"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <IoMailSharp size={34} />
                </a>

                <a
                    href="https://instagram.com/divhacks"
                    aria-label="Instagram"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <IoLogoInstagram size={38} />
                </a>

                <a
                    href="https://facebook.com/divhacks"
                    aria-label="Facebook"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <FaFacebookF size={28} />
                </a>

                <a
                    href="https://linkedin.com/company/divhacks"
                    aria-label="LinkedIn"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <FaLinkedinIn size={30} />
                </a>

                <a
                    href="https://twitter.com/divhacks"
                    aria-label="Twitter"
                    className="bg-white hover:bg-lightpink hover:text-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-95 transition-opacity"
                >
                    <FaTwitter size={32} />
                </a>
            </div>
            <div className="w-full text-center pt-3 font-normal text-base md:text-lg">
                Copyright © 2026 DivHacks. All Rights Reserved.
            </div>
        </footer>
    );
}
