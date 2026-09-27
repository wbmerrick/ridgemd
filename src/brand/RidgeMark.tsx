import { RIDGE_MD_COLOR } from "./tokens";

/**
 * RidgeMD brand mark — layered mountain ridge mark.
 * Tallest peak tip uses the mint MD accent so the mark reads as “ridge + MD”.
 */
export const RIDGE_MARK_VIEWBOX = "0 0 32 32";

type RidgeMarkProps = {
  size?: number | string;
  /** Ink / stroke color for the ridge body (usually white or near-black). */
  color?: string;
  /** Peak tip accent — defaults to brand mint. */
  accent?: string;
  className?: string;
  title?: string;
};

export function RidgeMark({
  size = 22,
  color = "currentColor",
  accent = RIDGE_MD_COLOR,
  className = "",
  title,
}: RidgeMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={RIDGE_MARK_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {/* Soft field ring — keeps the mark legible on busy hero photography */}
      <circle cx="16" cy="16" r="14.25" stroke={color} strokeWidth="1.35" opacity="0.55" />
      {/* Ridge mass */}
      <path
        d="M6.2 21.8 11.1 12.4 14.6 17.2 19.4 8.6 25.8 21.8Z"
        fill={color}
      />
      {/* Tallest peak tip — mint signature */}
      <path d="M19.4 8.6 16.55 14.35 22.25 14.35Z" fill={accent} />
      {/* Baseline shelf */}
      <path
        d="M7.2 22.6H24.8"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Inline SVG markup fragments for LaserLogo / static files (viewBox 0 0 32 32). */
export function ridgeMarkSvgInner(color: string, accent: string = RIDGE_MD_COLOR): string {
  return [
    `<circle cx="16" cy="16" r="14.25" stroke="${color}" stroke-width="1.35" opacity="0.55"/>`,
    `<path d="M6.2 21.8 11.1 12.4 14.6 17.2 19.4 8.6 25.8 21.8Z" fill="${color}"/>`,
    `<path d="M19.4 8.6 16.55 14.35 22.25 14.35Z" fill="${accent}"/>`,
    `<path d="M7.2 22.6H24.8" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/>`,
  ].join("");
}

export default RidgeMark;
