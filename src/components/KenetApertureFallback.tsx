import React from "react";

/**
 * KenetApertureFallback — static SVG version of KenetAperture for mobile / low-power
 * devices where a full WebGL scene isn't worth the cost. Same radial 8-blade layout
 * and color tokens as the 3D version, with a simple CSS pulse instead of true rotation.
 *
 * Props mirror KenetAperture where relevant:
 *  - openAmount: 0-1, controls how far blades are drawn open (purely visual, static per render)
 *  - centerLabel: optional string/node to show at center instead of "K"
 *  - size: pixel size of the square viewport
 */
const BLADE_COLORS = ["#2F4454", "#376E6F", "#2E151B", "#20393A", "#2F4454", "#376E6F", "#2E151B", "#20393A"];
const ROSE = "#DA7B93";
const BLADE_COUNT = 8;

function bladePoints(angleDeg: number, openAmount: number) {
  // Simple approximation: interpolate blade tip distance from center based on openAmount
  // so blades visually "retract" outward as openAmount increases (closed = tips near center).
  const rad = (angleDeg * Math.PI) / 180;
  const cx = 100, cy = 100;
  const pivotR = 46;
  // closed (openAmount=0): tipR small (~6), blade tip reaches near center, covering it
  // open (openAmount=1): tipR ~= pivotR, blade tip retracted back to its pivot, clearing the center
  const tipR = 6 + openAmount * 40;
  const px = cx + pivotR * Math.cos(rad);
  const py = cy + pivotR * Math.sin(rad);
  const tx = cx + tipR * Math.cos(rad);
  const ty = cy + tipR * Math.sin(rad);
  const perp = rad + Math.PI / 2;
  const w = 16;
  const p1x = px + w * Math.cos(perp), p1y = py + w * Math.sin(perp);
  const p2x = px - w * Math.cos(perp), p2y = py - w * Math.sin(perp);
  return `${p1x.toFixed(1)},${p1y.toFixed(1)} ${tx.toFixed(1)},${ty.toFixed(1)} ${p2x.toFixed(1)},${p2y.toFixed(1)}`;
}

interface KenetApertureFallbackProps {
  openAmount?: number;
  centerLabel?: React.ReactNode;
  size?: number;
}

export default function KenetApertureFallback({ openAmount = 1, centerLabel = "K", size = 220 }: KenetApertureFallbackProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "kenet-aperture-pulse 8s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes kenet-aperture-pulse {
          0%, 100% { opacity: 0.92; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
      <svg viewBox="0 0 200 200" width={size} height={size}>
        {Array.from({ length: BLADE_COUNT }).map((_, i) => {
          const angle = (360 / BLADE_COUNT) * i;
          return (
            <polygon
              key={i}
              points={bladePoints(angle, openAmount)}
              fill={BLADE_COLORS[i % BLADE_COLORS.length]}
              stroke={ROSE}
              strokeWidth="0.6"
              opacity="0.95"
            />
          );
        })}
        {openAmount > 0.4 && (
          <text
            x="100"
            y="108"
            textAnchor="middle"
            fontSize="34"
            fontFamily="Georgia, serif"
            fontWeight="600"
            fill={ROSE}
          >
            {centerLabel}
          </text>
        )}
      </svg>
    </div>
  );
}
