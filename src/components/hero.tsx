import Image from "next/image";
import InkButton from "@/components/ink-button";
import { site } from "@/lib/site";

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-12 pb-16">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-6">
            <div className="relative inline-block">
              <h1 className="rough font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter pb-4">
                <span className="bleed" style={delay(0)}>Hello!</span>{" "}
                <span className="bleed" style={delay(1)}>I&apos;m</span>{" "}
                <span className="bleed" style={delay(2)}>Hassan</span>{" "}
                <span className="bleed" style={delay(2)}>Benadardor.</span>
              </h1>
              <svg
                className="brush absolute left-0 -bottom-1 w-full h-5 overflow-visible"
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
                fill="none"
                stroke="#0d0d0f"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 10 C 60 4, 120 16, 200 9 S 340 5, 396 11" strokeWidth="7" />
                <path d="M30 15 C 110 12, 220 18, 340 14" strokeWidth="3" />
              </svg>

            </div>

            <p className="soak text-lg md:text-xl max-w-2xl leading-relaxed">
              A <span className="highlight-ink font-bold">Lead Software Developer</span> at go-digital, based in{" "}
              <span className="highlight-ink font-bold">Agadir, Morocco</span>. For almost seven years I have built and
              led web platforms with Laravel, React and Next.js, from the data model to deployment on Docker, AWS and
              CI/CD. Before that: Doctori, Grafimage, and a Linux and networking background that still shapes how I
              tune performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
            {[
              { href: site.github, variant: "light", label: "GitHub" },
              { href: site.resume, variant: "light", label: "Résumé" },
              { href: `mailto:${site.email}`, variant: "dark", label: "Get in Touch" },
            ].map(({ href, variant, label }, i) => (
              <div key={label} className="btn-pop" style={{ "--ad": `${1.5 + i * 0.15}s` } as React.CSSProperties}>
                <InkButton href={href} variant={variant as "light" | "dark"}>{label}</InkButton>
              </div>
            ))}
          </div>
        </div>

        {/* Taped polaroid avatar */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
          <svg className="splat" viewBox="0 0 200 200" aria-hidden="true">
            <g fill="#0d0d0f" filter="url(#rough)">
              <path d="M100 18c22-6 38 10 48 22 20-4 40 12 34 34 14 14 12 36-4 48 4 22-14 40-36 36-12 16-38 18-52 4-22 6-42-12-38-34-18-14-16-40 2-52-2-22 18-40 40-36 4-12 4-16 6-22z" />
              <circle cx="14" cy="30" r="7" />
              <circle cx="188" cy="168" r="9" />
              <circle cx="176" cy="18" r="4" />
              <circle cx="24" cy="176" r="5" />
              <circle cx="196" cy="90" r="3" />
            </g>
          </svg>
          <div className="tape" style={{ top: -12, left: -22, transform: "rotate(-38deg)" }} />
          <div className="tape" style={{ top: -12, right: -22, transform: "rotate(38deg)" }} />
          <div className="polaroid w-full h-full">
            <Image
              src="/me-character.png"
              alt="Illustrated portrait of Hassan"
              width={640}
              height={640}
              priority
              className="w-full h-full object-cover bg-white border-4 border-black shadow-[12px_12px_0_0_#0d0d0f] rotate-3 hover:rotate-0 hover:scale-[1.03] transition-transform duration-300 grayscale contrast-125 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
