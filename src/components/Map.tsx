"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Campus map + route section.
 *
 * Desktop: the full SVG, pan/zoomable via svg-pan-zoom, inside a contained card.
 * Mobile:  a static pre-cropped image of the route. No zoom, no interaction.
 */

const MAP_SVG = "/images/morningside_map.svg";
const MAP_CROPPED = "/images/morningside_map_cropped.png";
const MAP_PDF = "/morningside_map.pdf";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return isMobile;
}

/**
 * Inlines the map SVG into `container` and initialises svg-pan-zoom on the real
 * <svg> element. Passing an <object> (or its contentDocument svg) to
 * svg-pan-zoom is what triggers "createSVGMatrix is not a function" — the lib
 * needs a live, same-document SVGSVGElement.
 */
function usePanZoom() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let instance: { destroy: () => void } | null = null;
    let cancelled = false;

    (async () => {
      try {
        const [{ default: svgPanZoom }, markup] = await Promise.all([
          import("svg-pan-zoom"),
          fetch(MAP_SVG).then((res) => res.text()),
        ]);
        if (cancelled) return;

        container.innerHTML = markup;
        const svg = container.querySelector("svg");
        if (!svg) return;

        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");

        instance = svgPanZoom(svg, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 1,
          maxZoom: 10,
        });
      } catch (error) {
        console.error("svg-pan-zoom failed to initialise:", error);
      }
    })();

    return () => {
      cancelled = true;
      instance?.destroy();
      container.innerHTML = "";
    };
  }, []);

  return ref;
}

function DesktopMap() {
  const ref = usePanZoom();
  return <div ref={ref} id="campus-map-svg" className="map-card map-card--desktop" />;
}

function MobileMap() {
  return (
    <img
      src={MAP_CROPPED}
      alt="Campus map cropped to the pink route from Lerner Hall to Mudd"
      className="map-card map-card--mobile"
    />
  );
}

export default function CampusMap() {
  const isMobile = useIsMobile();

  return (
    <div id="campus-map" className="bg-section map-section">
      <div className="content-overlay">
        <h2 className="center-text map-heading">Campus Map &amp; Route</h2>
        <p className="center-text map-subtitle">
          Follow the custom pink path from the Check-In at Lerner Hall up to the
          main event at Mudd!
        </p>

        {isMobile === null ? (
          <div className="map-card map-card--placeholder" aria-hidden />
        ) : isMobile ? (
          <MobileMap />
        ) : (
          <DesktopMap />
        )}

        <p className="center-text map-download">
          Need a copy for your phone?{" "}
          <a href={MAP_PDF} target="_blank" rel="noopener noreferrer">
            Download the official campus PDF here.
          </a>
        </p>
      </div>

      <style>{`
        /* Match the Header / Footer background, not pure black. */
        .map-section { background-color: var(--color-black); }
        .map-heading {
          padding: 20px;
          font-size: 50px;
          color: #ffb84d;
          text-align: center;
        }
        .map-subtitle { text-align: center; font-size: 20px; }

        .map-card {
          display: block;
          width: 100%;
          max-width: 760px;
          margin: 30px auto 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }
        .map-card--desktop { height: 600px; background: transparent; }
        .map-card--placeholder { height: 600px; }
        .map-card--mobile { max-width: 440px; height: auto; }

        .map-download { text-align: center; margin-top: 15px; font-size: 16px; }
        .map-download a { color: orange; }

        @media (max-width: 767px) {
          .map-section { padding: 24px 20px 32px; }
          .map-heading { font-size: 34px; }
          .map-subtitle { font-size: 17px; }
          .map-card { margin-top: 24px; }
          .map-card--placeholder { height: auto; aspect-ratio: 3 / 4; }
        }
      `}</style>
    </div>
  );
}
