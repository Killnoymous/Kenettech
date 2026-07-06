import React, { useState, useEffect } from "react";
import KenetAperture from "./KenetAperture";
import KenetApertureFallback from "./KenetApertureFallback";

interface KenetApertureResponsiveProps {
  openAmount?: number;
  scale?: number;
  centerContent?: React.ReactNode;
  centerLabel?: string;
  size?: number;
  autoBreathe?: boolean;
}

export default function KenetApertureResponsive({ 
  openAmount = 1, 
  scale = 1, 
  centerContent, 
  centerLabel = "K", 
  size = 300,
  autoBreathe = true 
}: KenetApertureResponsiveProps) {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
      } catch (e) {
        return false;
      }
    })();
    setUseFallback(isMobile || !hasWebGL);
  }, []);

  if (useFallback) {
    return <KenetApertureFallback openAmount={openAmount} centerLabel={centerLabel} size={size} />;
  }
  return <KenetAperture openAmount={openAmount} scale={scale} centerContent={centerContent} autoBreathe={autoBreathe} />;
}
