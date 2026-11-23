import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { TimelineDot, TimelineRail } from "@/components/TimelineRail";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Where Mahir Uslu has worked and studied: Innovance Consultancy, Onservices, Selcuk University, and Karabuk University.",
  alternates: {
    canonical: "/timeline",
  },
  openGraph: {
    title: "Experience | Mahir Uslu",
    description:
      "Where Mahir Uslu has worked and studied: Innovance Consultancy, Onservices, Selcuk University, and Karabuk University.",
    url: "/timeline",
  },
};

const typeLabel = {
  job: "Work",
  school: "Education",
  life: "Origin",
} as const;

export default function TimelinePage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      <PageIntro
        eyebrow="Experience"
        title="Where I’ve worked and studied."
      />

      <div className="mt-16">
        <TimelineRail>
          {timeline.map((item) => (
            <li key={`${item.order}-${item.name}`} className="relative pb-14 pl-10 last:pb-0">
              <TimelineDot />
              <Reveal as="article" className="grid gap-4 md:grid-cols-12 md:gap-6">
                <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted md:col-span-3 md:pt-2">
                  <p>
                    {item.dateStart} — {item.dateEnd || "Present"}
                  </p>
                  <p className="mt-1">{typeLabel[item.type]}</p>
                </div>
                <div className="md:col-span-8">
                  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.015em]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-lg">{item.name}</p>
                  {item.description ? (
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft text-pretty">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </TimelineRail>
      </div>
    </div>
  );
}
