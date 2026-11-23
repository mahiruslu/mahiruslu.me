import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectIndex } from "@/components/ProjectIndex";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Mobile, web, and macOS projects by Mahir Uslu: products for employers, client sites, and independent apps.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Mahir Uslu",
    description:
      "Mobile, web, and macOS projects by Mahir Uslu: products for employers, client sites, and independent apps.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      <PageIntro
        eyebrow={`Projects — ${projects.length}`}
        title="Projects"
        description="Products for employers, client sites, and apps I build myself. Selected ones have a write-up."
      />
      {/* Not wrapped in <Reveal>: names here are morph targets and must be visible on arrival. */}
      <div className="mt-14">
        <ProjectIndex projects={projects} />
      </div>
    </div>
  );
}
