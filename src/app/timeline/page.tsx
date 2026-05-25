import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Career and education timeline for Mahir Uslu, Senior Frontend Developer at Innovance Consultancy.",
  alternates: {
    canonical: "/timeline",
  },
  openGraph: {
    title: "Timeline | Mahir Uslu",
    description:
      "Career and education timeline for Mahir Uslu, including Innovance Consultancy and graduate studies in Computer Engineering.",
    url: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Career log"
        title="A practical path through product teams, consulting work, and engineering foundations."
        description="Sorted from the latest work backward, with role context kept direct and scannable."
      />

      <ol className="mt-14 border-l-2 border-ink">
        {timeline.map((item) => (
          <li key={`${item.order}-${item.name}`} className="relative pl-7">
            <div className="absolute -left-[11px] top-2 h-5 w-5 border-2 border-ink bg-acid text-[var(--on-acid)]" />
            <article className="grid gap-5 border-b-2 border-ink pb-9 pt-1 md:grid-cols-[minmax(180px,0.42fr)_1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-signal">
                  {item.type}
                </p>
                <p className="mt-2 font-bold text-steel">
                  {item.dateStart} - {item.dateEnd || "Present"}
                </p>
              </div>
              <div>
                <h2 className="font-display text-4xl font-black leading-tight">
                  {item.title}
                </h2>
                <p className="mt-2 text-xl font-bold">{item.name}</p>
                {item.description ? (
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-soft">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
