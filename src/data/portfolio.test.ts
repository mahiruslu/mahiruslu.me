import { describe, expect, it } from "bun:test";
import { caseStudyProjects, featuredProjects, projects } from "./projects.ts";
import { timeline } from "./timeline.ts";

describe("portfolio data", () => {
  it("contains cleaned project tags and technologies", () => {
    for (const project of projects) {
      expect(project.tags.every(Boolean), project.name).toBe(true);
      expect(project.technologies.every(Boolean), project.name).toBe(true);
    }
  });

  it("keeps timeline entries sorted by descending order", () => {
    const orders = timeline.map((item) => item.order);
    const sorted = [...orders].sort((a, b) => b - a);

    expect(orders).toEqual(sorted);
  });
});

describe("case studies", () => {
  it("includes descriptive title text for Nimbo, Bulgu, and Kadraj", () => {
    for (const slug of ["nimbo", "bulgu", "kadraj"]) {
      const project = caseStudyProjects.find((item) => item.slug === slug);
      expect(project?.caseStudy.titleDescription?.trim(), slug).toBeTruthy();
    }
  });

  it("uses unique project slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every case study a summary, role, highlights, and stack", () => {
    expect(caseStudyProjects.length).toBeGreaterThan(0);

    for (const project of caseStudyProjects) {
      expect(project.caseStudy.summary.length, project.name).toBeGreaterThan(0);
      expect(project.caseStudy.role.length, project.name).toBeGreaterThan(0);
      expect(project.caseStudy.highlights.length, project.name).toBeGreaterThan(0);
      expect(project.caseStudy.stack.length, project.name).toBeGreaterThan(0);
    }
  });

  it("only features projects that have a case study", () => {
    expect(featuredProjects.length).toBe(5);
    for (const project of featuredProjects) {
      expect(project.caseStudy, project.name).toBeDefined();
    }
  });
});
