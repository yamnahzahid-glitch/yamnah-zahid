import { absolute, breadcrumbs, jsonLd, personId } from "@/lib/seo";
import { blurFor } from "@/lib/blur";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCases } from "@/data/projects";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} ${project.emphasis}`,
    description: project.summary,
    alternates: { canonical: `/experience/${project.slug}` },
    openGraph: {
      title: `${project.title} ${project.emphasis}`,
      description: project.summary,
      images: [project.cover.src],
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);
  if (!project) notFound();
  const projectIndex = projectCases.findIndex((item) => item.slug === project.slug);
  const previousProject = projectCases[(projectIndex - 1 + projectCases.length) % projectCases.length];
  const nextProject = projectCases[(projectIndex + 1) % projectCases.length];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${absolute(`/experience/${project.slug}`)}#work`,
        name: `${project.title} ${project.emphasis}`,
        headline: `${project.title} ${project.emphasis}`,
        description: project.summary,
        abstract: project.overview,
        url: absolute(`/experience/${project.slug}`),
        image: absolute(project.cover.src),
        datePublished: project.year,
        inLanguage: "en",
        keywords: project.tags.join(", "),
        genre: project.type,
        creator: { "@id": personId },
        author: { "@id": personId },
        publisher: { "@id": personId },
        about: project.client,
        ...(project.link ? { sameAs: [project.link.href] } : {}),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Experience", path: "/experience" },
        { name: `${project.title} ${project.emphasis}`, path: `/experience/${project.slug}` },
      ]),
    ],
  };


  return (
    <div className="case-page case-detail">
      <SiteHeader />
      <main>
      <article>
        <div className="case-detail-head">
          <Link className="case-back" href="/experience">← All experience</Link>
          <p className="eyebrow">{project.type} <span aria-hidden="true">·</span> {project.year}</p>
          <h1 className="display">{project.title}<br /><em>{project.emphasis}</em></h1>
          <p className="case-lede">{project.summary}</p>
          <ul className="case-tags" aria-label="Project disciplines">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          {project.link && (
            <p className="case-visit">
              <a href={project.link.href} target="_blank" rel="noopener noreferrer">Visit {project.link.label} <span aria-hidden="true">↗</span></a>
            </p>
          )}
        </div>

        <figure
          className="case-cover"
          style={{ "--ratio": `${project.cover.width} / ${project.cover.height}` } as React.CSSProperties}
        >
          <Image src={project.cover.src} alt={project.cover.alt} fill priority sizes="(max-width: 900px) 100vw, 90vw" placeholder="blur" blurDataURL={blurFor(project.cover.src)} />
          {project.cover.caption && <figcaption>{project.cover.caption}</figcaption>}
        </figure>

        <div className="case-content">
          <dl className="case-facts" aria-label="Project information">
            <div><dt>Client</dt><dd>{project.client}</dd></div>
            <div><dt>Engagement</dt><dd>{project.engagement}</dd></div>
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            {project.link && (
              <div><dt>Live link</dt><dd><a className="case-fact-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label}</a></dd></div>
            )}
          </dl>

          <section className="case-overview-block">
            <p className="eyebrow">Overview</p>
            <p className="case-overview">{project.overview}</p>
          </section>

          <div className="case-copy-grid case-brief-grid">
            <section>
              <p className="eyebrow">The objective</p>
              <h2>What success <em>needed to do.</em></h2>
              <p>{project.objective}</p>
            </section>
            <section>
              <p className="eyebrow">The challenge</p>
              <h2>What needed to <em>change.</em></h2>
              <p>{project.challenge}</p>
            </section>
          </div>

          <section className="case-process">
            <header>
              <p className="eyebrow">The thinking</p>
              <h2>From brief to <em>execution.</em></h2>
            </header>
            <div className="case-process-grid">
              <div>
                <h3>Strategy</h3>
                <ol className="case-step-list">
                  {project.strategy.map((step, index) => (
                    <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
                  ))}
                </ol>
              </div>
              <div>
                <h3>Execution</h3>
                <ol className="case-step-list">
                  {project.execution.map((step, index) => (
                    <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="case-deliverables">
              <p className="eyebrow">Key deliverables</p>
              <ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>

          <section className="case-results">
            <p className="eyebrow">What the work delivered</p>
            <h2>Outcomes with <em>purpose.</em></h2>
            <ul className="case-approach case-outcome-list">
              {project.outcomeDetails.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ul>
          </section>
          <section className="case-impact">
            <p className="eyebrow">Impact at a glance</p>
            <strong>{project.outcome}</strong>
            <span>{project.outcomeLabel}</span>
            <p>{project.impact}</p>
          </section>

          {project.gallery.length > 0 && (
            <section className="case-gallery" aria-label="Project materials">
              <div className="case-gallery-heading">
                <p className="eyebrow">Project materials</p>
                <span>Selected visuals &amp; supporting material</span>
              </div>
              <div className="case-gallery-grid">
                {project.gallery.map((item) => (
                  <figure
                    className="case-gallery-item"
                    key={item.src}
                    style={{ "--ratio": `${item.width} / ${item.height}` } as React.CSSProperties}
                  >
                    <div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 45vw" placeholder="blur" blurDataURL={blurFor(item.src)} /></div>
                    <figcaption>{item.caption ?? item.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <nav className="case-next" aria-label="Project navigation">
        <Link className="case-project-link" href={`/experience/${previousProject.slug}`}>
          <small>Previous case study</small><span>← {previousProject.title} {previousProject.emphasis}</span>
        </Link>
        <Link className="case-project-index" href="/experience">All case studies</Link>
        <Link className="case-project-link case-project-next" href={`/experience/${nextProject.slug}`}>
          <small>Next case study</small><span>{nextProject.title} {nextProject.emphasis} →</span>
        </Link>
      </nav>
      </main>
      <SiteFooter />
      <PortfolioEnhancements />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
    </div>
  );
}
