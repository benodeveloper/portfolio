import Image from "next/image";
import { Cloud, Ground, Leaf, Motion, Sparkle, Squiggle, Star } from "@/components/doodles";
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
              <h1 className="rough font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] pb-4">
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
                stroke="var(--ink)"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 10 C 60 4, 120 16, 200 9 S 340 5, 396 11" strokeWidth="5" />
                <path d="M30 15 C 110 12, 220 18, 340 14" strokeWidth="2.5" />
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

        {/* Illustrated avatar on a halftone patch, surrounded by doodles */}
        <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] shrink-0">
          <div className="splat absolute inset-0">
            <div className="shade -right-[4%] -top-[2%] w-[48%] h-[42%]" aria-hidden="true" />
            <div className="shade -left-[6%] bottom-[2%] w-[52%] h-[46%]" style={{ animationDelay: "-4s" }} aria-hidden="true" />
          </div>

          <Cloud className="w-24 -top-2 -right-4 md:w-28" delay={0.2} wiggle={-3} />
          <Sparkle className="w-10 top-6 left-4 md:w-12" delay={0.35} />
          <Star className="w-6 top-1/3 -left-4" delay={0.5} wiggle={18} />
          <Leaf className="w-14 bottom-10 -left-6 md:w-16" delay={0.6} wiggle={-8} />
          <Squiggle className="w-24 bottom-[18%] -right-8 md:w-28" delay={0.75} wiggle={4} />
          <Motion className="w-10 top-1/2 -right-6" delay={0.9} />
          <Star className="w-4 bottom-1/4 -right-2" delay={1} wiggle={-18} />

          <div className="polaroid relative w-full h-full mix-blend-multiply">
            <div className="bob w-full h-full">
              <Image
                src="/me-character.png"
                alt="Ink illustration of Hassan"
                width={720}
                height={720}
                priority
                className="w-full h-full object-contain transition-transform duration-500 hover:-rotate-3 hover:scale-[1.03]"
              />
            </div>
          </div>
          <Ground className="-bottom-3 -left-[6%] w-[112%] h-6" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
