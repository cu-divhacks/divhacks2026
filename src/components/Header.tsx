import Image from "next/image";

export default function Header() {
    return (
        <header style={{
            background: "#000000",
            width: "100%",
            padding: "0 60px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 10,
        }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                    src="/league-2027-season-trust-badge-template_White.svg"
                    alt="MLH Trust Badge"
                    width={100}
                    height={175}
                />
            </div>
            <nav style={{ display: "flex", gap: "48px", alignItems: "center" }}>
                {["About", "Tracks", "Sponsors", "FAQ"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} style={{
                        color: "rgba(255,255,255,0.8)",
                        textDecoration: "none",
                        fontSize: "18px",
                        fontFamily: "var(--font-geist-sans)",
                        letterSpacing: "0.5px",
                    }}>{item}</a>
                ))}
            </nav>
        </header>
    );
}
