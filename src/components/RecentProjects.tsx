import { blurFor } from "@/lib/blur";
import Image from "next/image";
import Link from "next/link";
import { projectCases, type ProjectCaseStudy } from "@/data/projects";

type RecentProjectsProps = {
  id?: string;
  compact?: boolean;
  /** Slugs that have their own dedicated section elsewhere on the page. */
  exclude?: string[];
};

type Shape = "landscape" | "square" | "portrait";

function shapeOf(cover: ProjectCaseStudy["cover"]): Shape {
  const ratio = cover.width / cover.height;
  if (ratio < 0.9) return "portrait";
  if (ratio < 1.25) return "square";
  return "landscape";
}

/**
 * Two cards per row on desktop, one on phones. A fixed two-up grid keeps every
 * frame the same width, so a 900px screenshot is always scaled down rather than
 * stretched across the full wrap — which is what made the covers look soft.
 */
export default function RecentProjects({ id = "projects", compact = false, exclude = [] }: RecentProjectsProps) {
  const projects = exclude.length
    ? projectCases.filter((project) => !exclude.includes(project.slug))
    : projectCases;

  return (
    <section id={id} className={`rpc-section${compact ? " rpc-section-compact" : ""}`}>
      <div className="rpc-wrap">
        <header className="rpc-head">
          <p className="eyebrow rpc-eyebrow">{compact ? "Selected case studies" : "Latest work"}</p>
          <h2>Recent <em>Projects</em></h2>
          <p className="rpc-note">
            Campaigns, content systems, and communications work, each with the brief, the approach, and the result.
          </p>
        </header>

        <div className="rpc-grid">
          {projects.map((project, index) => {
            const shape = shapeOf(project.cover);
            // Screenshots are framed whole; photography fills the frame.
            const contain = project.cover.fit === "contain";

            return (
              <article className={`rpc-card rpc-${shape}${contain ? " rpc-contain" : ""}`} key={project.slug}>
                <Link className="rpc-link" href={`/experience/${project.slug}`}>
                  <span className="rpc-stage">
                    <Image
                      className="rpc-shot"
                      src={project.cover.src}
                      alt={project.cover.alt}
                      width={project.cover.width}
                      height={project.cover.height}
                      sizes="(max-width: 900px) 92vw, 46vw"
                      priority={!compact && index === 0}
                      placeholder="blur"
                      blurDataURL={blurFor(project.cover.src)}
                    />
                  </span>

                  <span className="rpc-meta">
                    <span className="rpc-kicker">
                      <span className="rpc-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="rpc-type">{project.type}</span>
                      <span className="rpc-year">{project.year}</span>
                    </span>

                    <h3 className="rpc-title">{project.title} <em>{project.emphasis}</em></h3>
                    <span className="rpc-desc">{project.summary}</span>

                    <span className="rpc-foot">
                      <span className="rpc-tags">
                        {project.tags.slice(0, 2).map((tag) => <span className="rpc-tag" key={tag}>{tag}</span>)}
                      </span>
                      <span className="rpc-stat">
                        <b>{project.outcome}</b>
                        <i>{project.outcomeLabel}</i>
                      </span>
                    </span>

                    <span className="rpc-cta">
                      Read case study
                      <span className="rpc-arrow" aria-hidden="true">↗</span>
                    </span>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
