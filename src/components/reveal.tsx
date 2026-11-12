"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Blurs/fades its children into view when scrolled to. `delay` (seconds) staggers siblings. */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={{ "--rd": `${delay}s` } as React.CSSProperties}>
      {children}
    </div>
  );
}
