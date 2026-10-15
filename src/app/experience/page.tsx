import { jsonLd, pageGraph } from "@/lib/seo";
import { blurFor } from "@/lib/blur";
import type { Metadata } from "next";
import Image from "next/image";
import RecentProjects from "@/components/RecentProjects";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { projectCases } from "@/data/projects";

export const metadata: Metadata = {
  title: "Experience & Project Case Studies | Yumnah Zahid",
  description: "Explore campaign, content, PR, brand film, and climate communication case studies by Yumnah Zahid.",
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "profile",
    url: "/experience",
    title: "Experience & Project Case Studies | Yumnah Zahid",
    description: "Campaign, content, PR, brand film, and climate communication case studies by Yumnah Zahid.",
    images: [{ url: "/projects/believability-4.png" }],
  },
};

const facts = [
  { value: String(projectCases.length).padStart(2, "0"), label: "Case studies" },
  { value: "04", label: "Roles since 2023" },
  { value: "2026", label: "Most recent" },
];

/** The three covers that read best small, stacked as a deck. */
const deck = ["asli-warranty-challenge", "fikrfree-jazz-brand-film", "saha-climate-platform"]
  .map((slug) => projectCases.find((project) => project.slug === slug))
  .filter((project): project is (typeof projectCases)[number] => Boolean(project));

export default function ExperiencePage() {
  return (
    <div className="case-page">
      <SiteHeader />
      <main>
        <section className="xhero">
          <div className="xhero-wrap">
            <div className="xhero-copy">
              <p className="eyebrow">Experience</p>
              <h1 className="display">Ideas into <em>impact.</em></h1>
              <p className="xhero-lede">
                Selected work across marketing strategy, creative campaigns, public relations, and climate
                communication. Open a case study to see the brief, the approach, and what it delivered.
              </p>

              <dl className="xhero-facts">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.value}</dt>
                    <dd>{fact.label}</dd>
                  </div>
                ))}
              </dl>

              <p className="xhero-cue">
                <span aria-hidden="true">↓</span> Scroll for the full set
              </p>
            </div>

            <div className="xhero-deck" aria-hidden="true">
              {deck.map((project, index) => (
                <figure className={`xhero-plate xhero-plate-${index + 1}`} key={project.slug}>
                  <Image
                    src={project.cover.src}
                    alt=""
                    width={project.cover.width}
                    height={project.cover.height}
                    sizes="(max-width: 900px) 40vw, 22vw"
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL={blurFor(project.cover.src)}
                  />
                  <figcaption>{project.type}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <RecentProjects id="experience-projects" compact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            pageGraph({
              type: "CollectionPage",
              path: "/experience",
              name: "Experience & Project Case Studies | Yumnah Zahid",
              description: "Campaign, content, PR, brand film, and climate communication case studies by Yumnah Zahid.",
              image: "/projects/believability-4.png",
            }),
          ),
        }}
      />
      <SiteFooter />
      <PortfolioEnhancements />
    </div>
  );
}
