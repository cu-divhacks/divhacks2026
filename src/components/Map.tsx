"use client";

import React, { useRef, useEffect } from 'react';

export default function CampusMap() {
  const mapRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    const mapElement = mapRef.current;
    let zoomInstance: any = null;

    const initZoom = async () => {
      if (!mapElement || !mapElement.contentDocument || zoomInstance) return;

      try {
        const svgPanZoom = (await import('svg-pan-zoom')).default;

        zoomInstance = svgPanZoom(mapElement, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 1,
          maxZoom: 10,
        });
      } catch (error) {
        console.error("Zoom initialization failed:", error);
      }
    };

    if (mapElement) {
      initZoom();
      mapElement.addEventListener('load', initZoom);
    }

    return () => {
      if (mapElement) {
        mapElement.removeEventListener('load', initZoom);
      }
      if (zoomInstance) {
        zoomInstance.destroy();
      }
    };
  }, []);

  return (
    <div id="campus-map" className="bg-section" style={{ backgroundColor: '#000000' }}>
      <div className="content-overlay">
        <h2 className="center-text" style={{ padding: '20px', fontSize: '50px', color: '#ffb84d', textAlign: 'center' }}>Campus Map & Route</h2>
        
        <p className="center-text" style={{ textAlign: 'center', fontSize: '20px' }}>
          Follow the custom pink path from the Check-In at Lerner Hall up to the main event at Mudd!
        </p>

        <div 
          className="map-container" 
          style={{ 
            height: '600px', 
            width: '100%', 
            marginTop: '30px', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', 
            backgroundColor: 'white' 
          }}
        >
          <object 
            ref={mapRef}
            id="campus-map-svg" 
            type="image/svg+xml" 
            data="/images/morningside_map.svg" 
            style={{ width: '100%', height: '100%' }}
          >
            Your browser does not support SVG
          </object>
        </div>
        
        <p className="center-text" style={{ textAlign: 'center', marginTop: '15px', fontSize: '16px' }}>
          Need a copy for your phone?{' '}
          <a 
            href="/morningside_map.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'orange' }}
          >
            Download the official campus PDF here
          </a>
        </p>

      </div>
    </div>
  );
}