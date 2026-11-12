"use client";

import Link from "next/link";
import type { ComponentProps, PointerEvent } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<typeof Link> & {
  variant?: "light" | "dark" | "cta";
};

const variants = {
  light: "btn btn-light",
  dark: "btn btn-dark",
  cta: "cta",
} as const;

/** Link styled as an ink button; the ink bloom grows from the pointer entry point. */
export default function InkButton({ variant = "light", className, onPointerEnter, href, ...props }: Props) {
  const handlePointerEnter = (e: PointerEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    onPointerEnter?.(e);
  };

  const external = typeof href === "string" && /^(https?:|mailto:)/.test(href);
  const isFile = typeof href === "string" && /\.(pdf|tex)$/.test(href);

  return (
    <Link
      href={href}
      className={cn(variants[variant], className)}
      onPointerEnter={handlePointerEnter}
      {...(external || isFile ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    />
  );
}
