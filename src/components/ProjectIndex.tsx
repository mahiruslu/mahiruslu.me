"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "@/components/ExternalLink";
import { ProjectName } from "@/components/ProjectName";
import type { Project, ProjectType } from "@/data/projects";
import { easeOut, spring } from "@/lib/motion";

const filters = [
  { id: "all", label: "All", types: null },
  { id: "mobile", label: "Mobile", types: ["Mobile App"] },
  { id: "web", label: "Web", types: ["Web app", "Website"] },
  { id: "desktop", label: "Desktop", types: ["Desktop App"] },
] as const satisfies ReadonlyArray<{
  id: string;
  label: string;
  types: readonly ProjectType[] | null;
}>;

type FilterId = (typeof filters)[number]["id"];


function matches(project: Project, filterId: FilterId) {
  const filter = filters.find((item) => item.id === filterId);
  return !filter?.types || (filter.types as readonly ProjectType[]).includes(project.type);
}

export function ProjectIndex({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<FilterId>("all");
  const visible = projects.filter((project) => matches(project, active));

  return (
    <div>
      <LayoutGroup id="project-filters">
        <div
          role="group"
          aria-label="Filter projects by platform"
          className="flex flex-wrap gap-1"
        >
          {filters.map((filter) => {
            const isActive = filter.id === active;
            const count = projects.filter((project) => matches(project, filter.id)).length;

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(filter.id)}
                className={`press relative inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm transition-colors duration-150 ${
                  isActive ? "text-paper" : "text-ink-soft hover:text-ink"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="filter-pill"
                    transition={reduce ? { duration: 0 } : spring}
                    className="absolute inset-0 rounded-full bg-ink"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative">{filter.label}</span>
                <span className="relative font-mono text-[11px] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <p className="sr-only" aria-live="polite">
        {visible.length} projects shown
      </p>

      <ol className="mt-8 border-t border-line">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => (
            <motion.li
              key={project.slug}
              layout={reduce ? false : "position"}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: easeOut } }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              transition={reduce ? undefined : spring}
              className="border-b border-line"
            >
              <ProjectRow project={project} index={index} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const meta = (
    <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
      {project.type} · {project.year}
    </span>
  );

  const body = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-[scale] duration-300 ease-out group-hover:scale-x-100"
      />
      <span className="hidden font-mono text-xs text-muted md:col-span-1 md:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="md:col-span-4">
        <span
          className={`block font-display text-4xl leading-none tracking-[-0.015em] sm:text-5xl ${
            project.caseStudy ? "transition-colors duration-200 group-hover:text-accent" : ""
          }`}
        >
          {project.caseStudy ? (
            <ProjectName slug={project.slug} name={project.name} />
          ) : (
            project.name
          )}
        </span>
        <span className="mt-3 block">{meta}</span>
      </span>
      <span className="text-ink-soft text-pretty md:col-span-5">
        <span className="line-clamp-3 md:line-clamp-2">{project.description}</span>
        <span className="mt-3 block font-mono text-xs text-muted">
          {project.technologies.join(" / ")}
        </span>
      </span>
    </>
  );

  const rowClass =
    "group relative grid gap-4 py-7 md:grid-cols-12 md:items-baseline md:gap-6";

  if (project.caseStudy) {
    return (
      <Link href={`/projects/${project.slug}`} className={rowClass}>
        {body}
        <span className="inline-flex items-center gap-1.5 text-sm font-medium md:col-span-2 md:justify-self-end">
          Read case study
          <ArrowUpRight className="rotate-45 text-muted transition-[translate,color] duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-accent" />
        </span>
      </Link>
    );
  }

  return (
    <div className={rowClass}>
      {body}
      <span className="flex flex-wrap gap-x-5 text-sm md:col-span-2 md:flex-col md:items-end md:gap-0">
        {project.links.length > 0 ? (
          project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))
        ) : (
          <span className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Internal
          </span>
        )}
      </span>
    </div>
  );
}
