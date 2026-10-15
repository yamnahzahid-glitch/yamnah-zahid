/**
 * Single source of truth for everything search engines and social cards read:
 * canonical origin, identity, social profiles and the structured-data builders.
 * Pages import from here rather than repeating literals.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yumnahzahid.com";

export const site = {
  name: "Yumnah Zahid",
  shortName: "Yumnah Zahid",
  jobTitle: "Marketing & Creative Strategist",
  tagline: "Marketing & Creative Portfolio",
  description:
    "Yumnah Zahid is a marketing and creative professional in Karachi, building brand stories, AI-powered content, and campaigns that connect with people.",
  email: "yumnahzahid2001@gmail.com",
  phone: "+92-336-1273335",
  locality: "Karachi",
  country: "PK",
  locale: "en_PK",
  image: "/photos/portrait-hero.jpg",
  profiles: [
    "https://www.linkedin.com/in/yumnah-zahid-741429285/",
    "https://sahaclimate.com",
  ],
} as const;

/** Search engines want absolute URLs in structured data, unlike metadata. */
export function absolute(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

/** The person and the site itself: emitted once, site-wide, and referenced by @id elsewhere. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: site.jobTitle,
        description: site.description,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        url: siteUrl,
        image: absolute(site.image),
        address: {
          "@type": "PostalAddress",
          addressLocality: site.locality,
          addressCountry: site.country,
        },
        knowsAbout: [
          "Brand storytelling",
          "Campaign strategy",
          "AI-assisted content production",
          "Influencer marketing",
          "Public relations",
          "Climate communication",
        ],
        sameAs: [...site.profiles],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: `${site.name} | ${site.tagline}`,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
    ],
  };
}

/** A page node that ties a route back to the site and the person. */
export function pageGraph(input: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "ProfilePage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
  image?: string;
  extra?: Record<string, unknown>[];
}) {
  const { type = "WebPage", path, name, description, image, extra = [] } = input;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${absolute(path)}#page`,
        url: absolute(path),
        name,
        description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        ...(image ? { primaryImageOfPage: absolute(image) } : {}),
      },
      ...extra,
    ],
  };
}

/** Breadcrumbs give search results a readable path instead of a bare URL. */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: absolute(step.path),
    })),
  };
}

/** Escapes the one sequence that could break out of a JSON-LD script block. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
