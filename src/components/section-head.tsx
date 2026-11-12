export default function SectionHead({ num, title, intro }: { num: string; title: string; intro: string }) {
  return (
    <div className="sec-head">
      <span className="section-num" aria-hidden="true">{num}</span>
      <div>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        <p className="soak mt-4 max-w-2xl text-lg leading-relaxed">{intro}</p>
      </div>
    </div>
  );
}
