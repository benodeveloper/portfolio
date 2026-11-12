"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type Grecaptcha = {
  ready: (cb: () => void) => void;
  render: (el: HTMLElement, opts: Record<string, unknown>) => number;
  reset: (id?: number) => void;
};
declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type State = { kind: "idle" } | { kind: "checking" } | { kind: "ready"; url: string } | { kind: "error"; message: string };

/** reCAPTCHA v2 checkbox; on success the server hands back a short-lived link to the PDF. */
export default function ResumeGate({ siteKey }: { siteKey: string }) {
  const box = useRef<HTMLDivElement>(null);
  const widget = useRef<number | null>(null);
  const [state, setState] = useState<State>({ kind: "idle" });

  const onToken = useCallback(async (token: string) => {
    setState({ kind: "checking" });
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) throw new Error(data.error || "Something went wrong.");
      setState({ kind: "ready", url: data.url });
    } catch (e) {
      setState({ kind: "error", message: e instanceof Error ? e.message : "Something went wrong." });
      // let reCAPTCHA finish its checkmark animation before resetting, or its script
      // touches elements that no longer exist ("can't access property style, d is null")
      window.setTimeout(() => {
        if (widget.current !== null) window.grecaptcha?.reset(widget.current);
      }, 600);
    }
  }, []);

  const renderWidget = useCallback(() => {
    const g = window.grecaptcha;
    if (!g || !box.current || widget.current !== null) return;
    g.ready(() => {
      if (!box.current || widget.current !== null) return;
      widget.current = g.render(box.current, {
        sitekey: siteKey,
        callback: onToken,
        "expired-callback": () => setState({ kind: "idle" }),
      });
    });
  }, [siteKey, onToken]);

  // the script may already be loaded when navigating back to this page
  useEffect(renderWidget, [renderWidget]);

  return (
    <div className="space-y-6">
      <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" onReady={renderWidget} />

      {/* The widget container stays mounted for the page's lifetime (only hidden): removing it
          while reCAPTCHA's script is still running breaks the script. */}
      <div hidden={state.kind === "ready"} className="space-y-6">
        <p className="text-sm leading-relaxed">Tick the box below to prove you are human, and the résumé is yours.</p>
        <div ref={box} className="min-h-[78px]" />
      </div>

      {state.kind === "checking" && <p className="font-display font-bold">Checking...</p>}
      {state.kind === "error" && (
        <p role="alert" className="font-display font-bold">
          {state.message}
        </p>
      )}

      {state.kind === "ready" && (
        <div className="space-y-4">
          <p className="font-display text-xl font-bold">Thanks, you are all set.</p>
          <div className="flex flex-wrap gap-5">
            <a href={state.url} target="_blank" rel="noreferrer" className="btn btn-dark">
              View résumé
            </a>
            <a href={`${state.url}&download=1`} className="btn btn-light">
              Download PDF
            </a>
          </div>
          <p className="text-xs opacity-60">These links work for 10 minutes.</p>
        </div>
      )}
    </div>
  );
}
