import { Reveal } from "@/components/Reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="max-w-4xl">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-[clamp(3.25rem,9vw,7rem)] leading-[0.95] tracking-[-0.02em] text-balance">
          {title}
        </h1>
      </Reveal>
      {description ? (
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            {description}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
