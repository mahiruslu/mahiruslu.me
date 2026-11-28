import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "@/components/ExternalLink";
import { ProjectName } from "@/components/ProjectName";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { caseStudyProjects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

function findCaseStudy(slug: string) {
  const index = caseStudyProjects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return null;
  }

  return {
    project: caseStudyProjects[index],
    next: caseStudyProjects[(index + 1) % caseStudyProjects.length],
  };
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = findCaseStudy(slug);
  if (!found) {
    return {};
  }

  const { project } = found;
  const { titleDescription } = project.caseStudy;
  const title = titleDescription ? `${project.name} – ${titleDescription}` : project.name;
  return {
    title,
    description: project.caseStudy.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${title} | Mahir Uslu`,
      description: project.caseStudy.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const found = findCaseStudy(slug);
  if (!found) {
    notFound();
  }

  const { project, next } = found;
  const { caseStudy } = project;

  return (
    <article className="mx-auto w-full max-w-[1320px] px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12">
      <Link
        href="/projects"
        className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors duration-150 hover:text-ink"
      >
        <span
          aria-hidden="true"
          className="transition-[translate] duration-200 ease-out group-hover:-translate-x-0.5"
        >
          ←
        </span>
        Projects
      </Link>

      <header className="mt-10 max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
          {project.type} · {project.year}
        </p>
        {/* Not wrapped in <Reveal>: the name morphs in from the project list. */}
        <h1 className="mt-5 font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-[-0.03em]">
          <ProjectName slug={project.slug} name={project.name} />
        </h1>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-ink-soft text-pretty">
            {caseStudy.summary}
          </p>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-12 border-t border-line pt-10 lg:grid-cols-12">
        <Reveal as="div" delay={0.15} className="lg:col-span-4">
          <dl className="grid gap-8 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Role</dt>
              <dd className="mt-2 text-base">{caseStudy.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Stack</dt>
              <dd className="mt-2 text-base">{caseStudy.stack.join(", ")}</dd>
            </div>
            {project.links.length > 0 ? (
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Links</dt>
                <dd className="mt-1 flex flex-wrap gap-x-5">
                  {project.links.map((link) => (
                    <ExternalLink key={link.href} href={link.href}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </Reveal>

        <section className="lg:col-span-8" aria-labelledby="highlights">
          <h2 id="highlights" className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Highlights
          </h2>
          <RevealGroup as="ol" className="mt-4 border-t border-line" stagger={0.06}>
            {caseStudy.highlights.map((highlight, index) => (
              <RevealItem
                as="li"
                key={highlight}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5 text-lg leading-relaxed"
              >
                <span className="pt-1.5 font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty">{highlight}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </div>

      {caseStudy.images && caseStudy.images.length > 0 ? (
        <RevealGroup as="div" className="mt-20 grid gap-6 md:grid-cols-2" stagger={0.08}>
          {caseStudy.images.map((image) => (
            <RevealItem key={image.src} className="overflow-hidden bg-paper-raised">
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      ) : null}

      {next.slug !== project.slug ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group mt-28 block border-t border-line pt-8"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            Next case study
          </span>
          <span className="mt-4 flex items-baseline justify-between gap-6">
            <span className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-none tracking-[-0.02em] transition-colors duration-200 group-hover:text-accent">
              <ProjectName slug={next.slug} name={next.name} />
            </span>
            <ArrowUpRight className="h-6 w-6 shrink-0 rotate-45 text-muted transition-[translate,color] duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent" />
          </span>
        </Link>
      ) : null}
    </article>
  );
}
