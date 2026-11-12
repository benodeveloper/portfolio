"use client";

import { useEffect, useState } from "react";

type Burst = { id: number; x: number; y: number; size: number; rotation: number; rays: number[]; star: boolean };

let nextId = 0;
const LIFETIME = 750;

/**
 * Comic-style "pop" wherever the page is clicked: a halftone dot puff swells and fades
 * while hand-drawn impact lines shoot outward (see `.click-burst` in globals.css).
 */
export default function ClickSplat() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const id = nextId++;
      const count = 7 + Math.floor(Math.random() * 3);
      const burst: Burst = {
        id,
        x: e.clientX,
        y: e.clientY,
        size: 90 + Math.random() * 30,
        rotation: Math.random() * 360,
        // each ray gets its own length so the burst looks hand-drawn, not mechanical
        rays: Array.from({ length: count }, () => 0.7 + Math.random() * 0.45),
        star: Math.random() < 0.4,
      };
      setBursts((list) => [...list, burst]);
      window.setTimeout(() => setBursts((list) => list.filter((b) => b.id !== id)), LIFETIME);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {bursts.map((b) => (
        <div
          key={b.id}
          className="click-burst"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size, "--r": `${b.rotation}deg` } as React.CSSProperties}
          aria-hidden="true"
        >
          <div className="puff" />
          <svg viewBox="-50 -50 100 100" className="rays">
            {b.rays.map((len, i) => {
              const a = (i / b.rays.length) * Math.PI * 2;
              const inner = 16;
              const outer = inner + 26 * len;
              return (
                <line
                  key={i}
                  x1={Math.cos(a) * inner}
                  y1={Math.sin(a) * inner}
                  x2={Math.cos(a) * outer}
                  y2={Math.sin(a) * outer}
                  strokeWidth={i % 2 ? 2.2 : 3}
                />
              );
            })}
            {b.star && (
              <path className="star" d="M34 -38 C 34.6 -33, 36 -31.6, 41 -31 C 36 -30.4, 34.6 -29, 34 -24 C 33.4 -29, 32 -30.4, 27 -31 C 32 -31.6, 33.4 -33, 34 -38 Z" />
            )}
          </svg>
        </div>
      ))}
    </>
  );
}
