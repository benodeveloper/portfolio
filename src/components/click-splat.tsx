"use client";

import { useEffect, useState } from "react";

type Splat = { id: number; x: number; y: number; size: number; rotation: number };

let nextId = 0;

/** Spawns a short-lived ink splat wherever the page is clicked. */
export default function ClickSplat() {
  const [splats, setSplats] = useState<Splat[]>([]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const id = nextId++;
      const splat: Splat = {
        id,
        x: e.clientX,
        y: e.clientY,
        size: 70 + Math.random() * 80,
        rotation: Math.random() * 360,
      };
      setSplats((list) => [...list, splat]);
      window.setTimeout(() => setSplats((list) => list.filter((s) => s.id !== id)), 900);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {splats.map((s) => (
        <svg
          key={s.id}
          className="click-splat"
          style={
            {
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              "--r": `${s.rotation}deg`,
            } as React.CSSProperties
          }
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <g fill="#0d0d0f" filter="url(#rough)">
            <path d="M60 8c10 0 14 12 22 14 12 2 28-2 30 10 2 10-10 16-8 26 2 12 14 22 4 32-8 8-20 0-30 6-10 6-14 20-26 16-12-4-8-18-14-28-6-10-22-12-20-26 2-12 18-8 26-14 8-6 6-22 16-34z" />
            <circle cx="20" cy="30" r="3" />
            <circle cx="100" cy="90" r="4" />
            <circle cx="85" cy="20" r="2.5" />
            <circle cx="25" cy="100" r="3.5" />
          </g>
        </svg>
      ))}
    </>
  );
}
