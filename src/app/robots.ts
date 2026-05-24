import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mahiruslu.me/sitemap.xml",
    host: "https://mahiruslu.me",
  };
}
