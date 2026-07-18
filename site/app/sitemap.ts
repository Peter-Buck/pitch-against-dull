import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/content/case-studies/index";

const BASE = "https://www.peter-buck.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/meet`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/think`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/ip-development`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${BASE}/work-1/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
