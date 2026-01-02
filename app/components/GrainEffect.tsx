"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    grained: (element: string, options: any) => void;
  }
}

export default function GrainEffect() {
  useEffect(() => {
    // Charger le script grained.js
    const script = document.createElement("script");
    script.src = "/grained.js";
    script.async = true;

    script.onload = () => {
      if (typeof window.grained !== "undefined") {
        const options = {
          animate: true,
          patternWidth: 100,
          patternHeight: 100,
          grainOpacity: 0.2,
          grainDensity: 1.8,
          grainWidth: 1,
          grainHeight: 1,
        };
        window.grained("#grain", options);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup si nécessaire
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="grain" />;
}
