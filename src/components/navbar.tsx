"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Cloud, Sparkle, Squiggle, Star } from "@/components/doodles";
import InkButton from "@/components/ink-button";
import { site } from "@/lib/site";

type MenuState = "closed" | "open" | "closing";
const CLOSE_MS = 320; // keep in sync with the menu-out animation in globals.css

function Logo() {
  return (
    <span className="blot">
      <Image src="/me-icon.png" alt="" width={40} height={40} className="w-full h-full object-cover" />
    </span>
  );
}

/** Three hand-drawn lines of uneven length. */
function BurgerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="burger w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7 C 9 6, 15 7.5, 20 6.5" />
      <path d="M4 12.2 C 8 11.6, 12 12.6, 17 12" />
      <path d="M4 17.5 C 10 16.8, 15 18, 20 17.2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
      <path d="M5.5 5 C 10 9.5, 14 14, 18.8 19" />
      <path d="M18.5 5.5 C 14 9.8, 10 14.5, 5.2 18.6" />
    </svg>
  );
}

type NavLink = { href: string; label: string };

/** `links` comes from the server (lib/content.ts) so Blog/Projects only show when they have content. */
export default function Navbar({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuState>("closed");
  const [origin, setOrigin] = useState({ x: "90%", y: "40px" });
  const openBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const openMenu = () => {
    // the ink circle grows out of the burger button
    const r = openBtn.current?.getBoundingClientRect();
    if (r) setOrigin({ x: `${r.left + r.width / 2}px`, y: `${r.top + r.height / 2}px` });
    setMenu("open");
  };

  const closeMenu = useCallback((restoreFocus = true) => {
    setMenu((m) => (m === "open" ? "closing" : m));
    window.setTimeout(() => {
      setMenu("closed");
      if (restoreFocus) openBtn.current?.focus();
    }, CLOSE_MS);
  }, []);

  useEffect(() => {
    if (menu !== "open") return;
    closeBtn.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return closeMenu();
      if (e.key !== "Tab" || !dialog.current) return;
      // keep keyboard focus inside the menu while it is open
      const items = dialog.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    // the menu is mobile-only: close it if the viewport grows past the breakpoint
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && closeMenu(false);

    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
      document.body.style.overflow = "";
    };
  }, [menu, closeMenu]);

  return (
    <>
      <header id="nav">
        <nav className="pill w-full max-w-md justify-between md:w-auto md:max-w-none md:justify-start" aria-label="Main">
          <Link href="/" className="logo" aria-label={`${site.name}, home`}>
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="nl" aria-current={isActive(href) ? "page" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={site.resume} className="nl" aria-current={isActive(site.resume) ? "page" : undefined}>
                Résumé
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <InkButton href={`mailto:${site.email}`} variant="cta">
              Let&apos;s Talk
            </InkButton>
            <button
              ref={openBtn}
              type="button"
              className="menu-btn"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-controls="overlay"
              aria-expanded={menu === "open"}
              onClick={openMenu}
            >
              <BurgerIcon />
            </button>
          </div>
        </nav>
      </header>

      {menu !== "closed" && (
        <div
          ref={dialog}
          id="overlay"
          data-state={menu}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          style={{ "--ox": origin.x, "--oy": origin.y } as React.CSSProperties}
        >
          {/* decoration */}
          <div className="shade -right-16 -bottom-10 w-72 h-72" aria-hidden="true" />
          <div className="shade -left-16 top-[9%] w-44 h-44 opacity-60" aria-hidden="true" />
          <Cloud className="w-24 top-24 right-6" delay={-0.6} wiggle={-3} />
          <Sparkle className="w-10 top-[42%] right-10" delay={-0.5} />
          <Star className="w-5 top-28 left-1/2" delay={-0.45} wiggle={18} />
          <Squiggle className="w-28 bottom-28 right-8" delay={-0.4} wiggle={3} />

          <div className="relative flex items-center justify-between">
            <Link href="/" className="logo" aria-label={`${site.name}, home`} onClick={() => closeMenu(false)}>
              <Logo />
            </Link>
            <button ref={closeBtn} type="button" className="menu-btn" aria-label="Close menu" onClick={() => closeMenu()}>
              <CloseIcon />
            </button>
          </div>

          <nav className="relative" aria-label="Mobile">
            <ul className="space-y-1">
              {[...links, { href: site.resume, label: "Résumé" }].map(({ href, label }, i) => {
                const active = isActive(href);
                return (
                  <li key={href} className="menu-item" style={{ "--i": i } as React.CSSProperties}>
                    <Link
                      href={href}
                      className="menu-link"
                      aria-current={active ? "page" : undefined}
                      onClick={() => closeMenu(false)}
                    >
                      <span className="menu-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className={active ? "highlight-ink" : undefined}>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative menu-item space-y-3" style={{ "--i": links.length + 1 } as React.CSSProperties}>
            <p className="font-display font-bold text-lg">Say hi</p>
            <div className="flex flex-wrap gap-2">
              <a className="chip menu-chip" href={`mailto:${site.email}`}>Email</a>
              <a className="chip menu-chip" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="chip menu-chip" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
