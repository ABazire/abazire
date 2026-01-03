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
          patternWidth: 80,
          patternHeight: 80,
          grainOpacity: 0.2,
          grainDensity: 1,
          grainWidth: 0.7,
          grainHeight: 0.7,
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
