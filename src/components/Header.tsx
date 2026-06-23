import Image from "next/image";

export default function Header() {
    return (
        <div className="absolute top-0 z-10 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12">
            <Image
                src="/league-2027-season-trust-badge-template_White.svg"
                alt="MLH Trust Badge"
                width={130}
                height={228}
            />
        </div>
    );
}
