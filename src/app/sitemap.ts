import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/data/projects";

const routes = ["", "/projects", "/timeline", "/blog", "/contact"];
const baseUrl = "https://mahiruslu.me";
const lastModified = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: route === "" ? ("monthly" as const) : ("weekly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...caseStudyProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
