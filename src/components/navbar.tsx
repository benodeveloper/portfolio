"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import InkButton from "@/components/ink-button";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header id="nav">
        <nav className="pill" aria-label="Main">
          <Link href="/" className="logo" aria-label={site.name}>
            <span className="blot">
              <Image src="/me-icon.png" alt="" width={40} height={40} className="w-full h-full object-cover" />
            </span>
          </Link>

          <ul className="hidden md:flex items-center">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="nl" aria-current={isActive(href) ? "page" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.resume} target="_blank" rel="noreferrer" className="nl">
                Résumé
              </a>
            </li>
          </ul>

          <InkButton href={`mailto:${site.email}`} variant="cta">
            Let&apos;s Talk
          </InkButton>

          <button
            type="button"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-white text-black font-bold"
            aria-label="Open menu"
            aria-controls="overlay"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            ≡
          </button>
        </nav>
      </header>

      {open && (
        <div id="overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex items-center justify-between">
            <span className="logo"><span className="blot"><Image src="/me-icon.png" alt="" width={40} height={40} className="w-full h-full object-cover" /></span></span>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white text-black font-bold"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="space-y-4 font-display uppercase text-3xl" aria-label="Mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block hover:opacity-60 transition-opacity"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6 font-bold uppercase text-sm">
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
        </div>
      )}
    </>
  );
}
