import type { MetadataRoute } from "next";
import { projectCases } from "@/data/projects";
import { siteUrl } from "@/lib/seo";

/**
 * Every indexable route. /expertise is deliberately absent: it rewrites to the
 * home page and canonicalises there, so listing it would advertise a duplicate.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/experience`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/resume`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const caseStudies: MetadataRoute.Sitemap = projectCases.map((project) => ({
    url: `${siteUrl}/experience/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...pages, ...caseStudies].map((entry) => ({ ...entry, lastModified }));
}
