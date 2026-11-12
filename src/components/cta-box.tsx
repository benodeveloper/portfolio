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
      <div className="card p-8">
        <p className="font-display text-2xl font-bold md:text-3xl">{title}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">{body}</p>
        <InkButton href={href} variant="dark" className="mt-6">{cta}</InkButton>
      </div>
    </Reveal>
  );
}
