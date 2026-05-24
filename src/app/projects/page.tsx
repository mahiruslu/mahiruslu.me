import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PageIntro } from "@/components/PageIntro";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected React, React Native, web, mobile, and private Vercel projects by Mahir Uslu.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Mahir Uslu",
    description:
      "Selected web, mobile, React Native, and private Vercel projects by Mahir Uslu.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
      <PageIntro
        eyebrow="Case-study index"
        title="Products shipped across web, mobile, commerce, and operations."
        description="A compact view of shipped work, contribution context, technologies, and live destinations where available."
      />

      <div className="mt-12 grid border-t-2 border-ink">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid gap-6 border-b-2 border-ink py-7 lg:grid-cols-[80px_minmax(220px,0.8fr)_minmax(0,1.4fr)_minmax(180px,0.45fr)]"
          >
            <div className="font-display text-5xl font-black text-steel">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-signal">
                {project.type}
              </p>
              <h2 className="mt-2 font-display text-4xl font-black leading-none">
                {project.name}
              </h2>
              <p className="mt-3 text-sm font-bold text-steel">
                {project.year}
              </p>
            </div>
            <div className="space-y-4">
              <p className="max-w-3xl text-lg font-medium leading-8 text-ink-soft">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-ink bg-paper px-3 py-1 text-sm font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-ink px-3 py-1 text-sm font-bold text-paper"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              {project.links.length > 0 ? (
                project.links.map((link) => (
                  <ExternalLink key={link.href} href={link.href}>
                    {link.label}
                  </ExternalLink>
                ))
              ) : (
                <span className="border-2 border-steel px-3 py-2 text-sm font-bold text-steel">
                  Internal product
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
