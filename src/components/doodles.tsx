/**
 * Hand-drawn ink doodles in the style of editorial halftone illustrations.
 * Each one draws its strokes in, then wiggles gently (see `.doodle` in globals.css).
 * Position them with `className` (absolute utilities) and stagger with `delay` (seconds).
 */

type Props = { className?: string; delay?: number; wiggle?: number };

const vars = (delay = 0, wiggle?: number) =>
  ({ "--dd": `${delay}s`, ...(wiggle !== undefined && { "--wiggle": `${wiggle}deg` }) }) as React.CSSProperties;

/** Three short strokes radiating out, like "ding!" lines around a head. */
export function Sparkle({ className, delay, wiggle }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, wiggle)} viewBox="0 0 40 40" strokeWidth="2.6" aria-hidden="true">
      <path d="M20 4 L21 15" />
      <path d="M6 12 L14 19" />
      <path d="M34 11 L27 19" />
    </svg>
  );
}

/** A looping telephone-cord line. */
export function Squiggle({ className, delay, wiggle }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, wiggle)} viewBox="0 0 120 40" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 26 C 14 26, 18 8, 26 10 C 34 12, 26 30, 34 30 C 44 30, 44 8, 54 10 C 62 12, 54 30, 62 30 C 72 30, 72 8, 82 10 C 90 12, 82 30, 90 30 C 100 30, 104 20, 116 18" />
    </svg>
  );
}

/** Single leaf with a centre vein. */
export function Leaf({ className, delay, wiggle }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, wiggle)} viewBox="0 0 60 40" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 30 C 14 8, 40 4, 56 10 C 46 28, 22 38, 4 30 Z" />
      <path d="M8 28 C 22 22, 34 16, 48 12" />
    </svg>
  );
}

/** Scalloped cloud outline. */
export function Cloud({ className, delay, wiggle }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, wiggle)} viewBox="0 0 100 50" strokeWidth="2.4" aria-hidden="true">
      <path d="M10 40 C 2 40, 2 26, 12 26 C 10 14, 26 10, 32 18 C 36 6, 56 4, 60 18 C 66 10, 82 12, 80 26 C 92 24, 96 40, 86 40" />
    </svg>
  );
}

/** Four-point twinkle star, filled with ink. */
export function Star({ className, delay, wiggle }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, wiggle)} viewBox="0 0 30 30" strokeWidth="2" aria-hidden="true">
      <path d="M15 2 C 16 11, 19 14, 28 15 C 19 16, 16 19, 15 28 C 14 19, 11 16, 2 15 C 11 14, 14 11, 15 2 Z" />
    </svg>
  );
}

/** Little motion lines, like something just zipped past. */
export function Motion({ className, delay, wiggle }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, wiggle)} viewBox="0 0 50 30" strokeWidth="2.4" aria-hidden="true">
      <path d="M4 6 L30 6" />
      <path d="M14 15 L46 15" />
      <path d="M6 24 L28 24" />
    </svg>
  );
}

/** A long, slightly uneven ground line with a few grass tufts, for a figure to stand on. */
export function Ground({ className, delay }: Props) {
  return (
    <svg className={`doodle ${className ?? ""}`} style={vars(delay, 0)} viewBox="0 0 300 24" strokeWidth="2.6" preserveAspectRatio="none" aria-hidden="true">
      <path d="M4 14 C 50 11, 90 16, 140 13 S 230 11, 296 14" />
      <path d="M40 12 L36 4 M44 12 L46 3 M48 12 L54 6" strokeWidth="1.8" />
      <path d="M250 12 L246 5 M254 12 L257 3" strokeWidth="1.8" />
    </svg>
  );
}
