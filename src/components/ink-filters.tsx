/** Shared SVG filters (#goo, #rough) referenced from CSS. Render once in the root layout. */
export default function InkFilters() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="b" />
          <feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
        </filter>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" />
        </filter>
      </defs>
    </svg>
  );
}
