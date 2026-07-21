type SplashProps = {
    className?: string;
    color?: string;
    rotate?: number;
};

export default function Splash({
    className = "",
    color = "var(--color-normalpurple)",
    rotate = 0,
}: SplashProps) {
    return (
        <div
            aria-hidden="true"
            className={`absolute opacity-20 pointer-events-none -z-10 ${className}`}
            style={{
                backgroundColor: color,
                transform: `rotate(${rotate}deg)`,
                WebkitMaskImage: "url(/images/splash.png)",
                maskImage: "url(/images/splash.png)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
            }}
        />
    );
}
