import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FONT_DISPLAY_CSS, RIDGE_MD_COLOR } from "@/brand/tokens";

export type LaserLogoProps = {
  /** Increment to remount the SVG and restart CSS/SMIL animations from 0. */
  play: number;
  onComplete?: () => void;
  className?: string;
};

const ANIMATION_MS = 4100;

const containerStyle: CSSProperties = {
  width: "100%",
  aspectRatio: "4 / 1",
  overflow: "hidden",
  lineHeight: 0,
  background: "transparent",
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Shared RidgeMD mountain mark + wordmark (revealed by laser). */
function BrandLockup() {
  return (
    <>
      <g transform="translate(36, 18) scale(2)">
        <circle cx="16" cy="16" r="14.25" stroke="#FFFFFF" strokeWidth="1.35" opacity="0.55" />
        <path d="M6.2 21.8 11.1 12.4 14.6 17.2 19.4 8.6 25.8 21.8Z" fill="#FFFFFF" />
        <path d="M19.4 8.6 16.55 14.35 22.25 14.35Z" fill={RIDGE_MD_COLOR} />
        <path d="M7.2 22.6H24.8" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      </g>
      <text
        x="118"
        y="62"
        style={{ fontFamily: FONT_DISPLAY_CSS, fontWeight: 600, fontSize: 42, letterSpacing: "-0.03em" }}
        fill="#FFFFFF"
      >
        Ridge
        <tspan fill={RIDGE_MD_COLOR}>MD</tspan>
      </text>
    </>
  );
}

/** Static end-state mark for prefers-reduced-motion. */
function StaticDarkLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 100"
      width="100%"
      role="img"
      aria-label="RidgeMD"
    >
      <rect width="400" height="100" fill="#000000" />
      <BrandLockup />
      <line x1="118" y1="74" x2="270" y2="74" stroke="#C89E67" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LaserLogoSvg({ play }: { play: number }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    try {
      svg.setCurrentTime?.(0);
    } catch {
      // Some browsers throw if no SMIL timeline exists yet.
    }
  }, [play]);

  const glowId = `ll-glow-${play}`;
  const beamGradId = `ll-beam-grad-${play}`;
  const revealId = `ll-reveal-${play}`;

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 100"
      width="100%"
      role="img"
      aria-label="RidgeMD"
    >
      <defs>
        <style>{`
          .ll-bg-${play} { fill: #000000; }
          .ll-brand-${play} {
            opacity: 1;
          }
          .ll-beam-core-${play} {
            stroke: url(#${beamGradId});
            stroke-width: 3;
            stroke-linecap: round;
            filter: url(#${glowId});
            opacity: 0;
            animation: ll-beam-run-${play} 1.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s forwards;
          }
          .ll-beam-core-${play} {
            stroke-dasharray: 16 420;
          }
          .ll-beam-halo-${play} {
            stroke: #C89E67;
            stroke-width: 10;
            stroke-linecap: round;
            opacity: 0;
            filter: url(#${glowId});
            stroke-dasharray: 24 420;
            animation: ll-beam-run-${play} 1.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s forwards;
          }
          .ll-hotspot-${play} {
            fill: #FFB068;
            opacity: 0;
            filter: url(#${glowId});
            animation: ll-hotspot-${play} 1.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s forwards;
          }
          .ll-underline-${play} {
            stroke: #C89E67;
            stroke-width: 2.5;
            stroke-linecap: round;
            stroke-dasharray: 160;
            stroke-dashoffset: 160;
            animation: ll-underline-${play} 0.55s ease-out 2.7s forwards;
          }
          @keyframes ll-beam-run-${play} {
            0% { opacity: 0; stroke-dashoffset: 0; }
            8% { opacity: 1; }
            78% { opacity: 1; stroke-dashoffset: -400; }
            100% { opacity: 0; stroke-dashoffset: -420; }
          }
          @keyframes ll-hotspot-${play} {
            0% { opacity: 0; transform: translateX(20px); }
            10% { opacity: 1; }
            78% { opacity: 1; transform: translateX(372px); }
            100% { opacity: 0; transform: translateX(380px); }
          }
          @keyframes ll-underline-${play} {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
        <filter id={glowId} x="-50%" y="-250%" width="200%" height="600%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id={beamGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C89E67" stopOpacity="0" />
          <stop offset="35%" stopColor="#FF9A4A" stopOpacity="1" />
          <stop offset="100%" stopColor="#C89E67" stopOpacity="0.2" />
        </linearGradient>
        <clipPath id={revealId}>
          <rect x="0" y="0" width="0" height="100">
            <animate attributeName="width" from="0" to="400" begin="0.2s" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.2 0.8 0.2 1" keyTimes="0;1" />
          </rect>
        </clipPath>
      </defs>

      <rect className={`ll-bg-${play}`} width="400" height="100" />

      {/* Laser sweep */}
      <line className={`ll-beam-halo-${play}`} x1="20" y1="50" x2="380" y2="50" />
      <line className={`ll-beam-core-${play}`} x1="20" y1="50" x2="380" y2="50" />
      <circle className={`ll-hotspot-${play}`} cx="0" cy="50" r="5" />

      {/* Brand revealed behind laser */}
      <g clipPath={`url(#${revealId})`}>
        <g className={`ll-brand-${play}`}>
          <BrandLockup />
          <line className={`ll-underline-${play}`} x1="118" y1="74" x2="270" y2="74" />
        </g>
      </g>
    </svg>
  );
}

export default function LaserLogo({ play, onComplete, className }: LaserLogoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (reducedMotion) {
      onCompleteRef.current?.();
      return;
    }
    const id = window.setTimeout(() => {
      onCompleteRef.current?.();
    }, ANIMATION_MS);
    return () => window.clearTimeout(id);
  }, [play, reducedMotion]);

  return (
    <div className={className} style={containerStyle} data-laser-play={play}>
      {reducedMotion ? (
        <StaticDarkLogo />
      ) : (
        <LaserLogoSvg key={play} play={play} />
      )}
    </div>
  );
}
