import { describe, expect, it } from "bun:test";
import { projects } from "./projects.ts";
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
