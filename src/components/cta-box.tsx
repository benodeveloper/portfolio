import InkButton from "@/components/ink-button";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

export default function CtaBox({
  title,
  body,
  cta = "Start a conversation",
  href = "/contact",
  className,
}: {
  title: string;
  body: string;
  cta?: string;
  href?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mt-16", className)}>
      <div className="border-4 border-ink bg-paper p-8 shadow-[8px_8px_0_0_var(--ink)]">
        <p className="font-display text-2xl md:text-3xl uppercase">{title}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">{body}</p>
        <InkButton href={href} variant="dark" className="mt-6">{cta}</InkButton>
      </div>
    </Reveal>
  );
}
