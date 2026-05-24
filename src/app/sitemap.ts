import type { MetadataRoute } from "next";

const routes = ["", "/projects", "/timeline", "/blog", "/contact"];
const baseUrl = "https://mahiruslu.me";
const lastModified = new Date("2026-05-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
