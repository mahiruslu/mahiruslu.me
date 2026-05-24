type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="max-w-5xl">
      <p className="font-black uppercase tracking-[0.2em] text-signal">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] text-balance">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-ink-soft">
        {description}
      </p>
    </section>
  );
}
