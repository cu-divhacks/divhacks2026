"use client";

import { useEffect } from "react";

/**
 * Landing on `/#section` (e.g. clicking a nav link from `/map`) scrolls the
 * browser to the anchor before images above it have loaded, so the target keeps
 * shifting and the page ends up overshooting the section. This re-runs the jump
 * to the hash target once layout has settled (after `window` load) with an
 * instant scroll so there is no smooth-scroll animation to overshoot.
 */
export default function HashScrollFix() {
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (!id) return;

        let cancelled = false;

        const scrollToTarget = () => {
            if (cancelled) return;
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
        };

        // Correct once on mount, again after everything (fonts/images) has loaded,
        // and once more as a safety net for late layout shifts.
        requestAnimationFrame(scrollToTarget);

        if (document.readyState === "complete") {
            const t = setTimeout(scrollToTarget, 200);
            return () => {
                cancelled = true;
                clearTimeout(t);
            };
        }

        const onLoad = () => {
            scrollToTarget();
            setTimeout(scrollToTarget, 200);
        };
        window.addEventListener("load", onLoad);
        return () => {
            cancelled = true;
            window.removeEventListener("load", onLoad);
        };
    }, []);

    return null;
}
