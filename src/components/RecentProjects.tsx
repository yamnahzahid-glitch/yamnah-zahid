import { blurFor } from "@/lib/blur";
import Image from "next/image";
import Link from "next/link";
import { projectCases, type ProjectCaseStudy } from "@/data/projects";

type RecentProjectsProps = {
  id?: string;
  compact?: boolean;
};

type Shape = "landscape" | "square" | "portrait";

const COLUMNS = 12;

function shapeOf(cover: ProjectCaseStudy["cover"]): Shape {
  const ratio = cover.width / cover.height;
  if (ratio < 0.9) return "portrait";
  if (ratio < 1.25) return "square";
  return "landscape";
}

/**
 * Lays the gallery out on a 12-column grid, giving each card a width that suits
 * its cover: wide for landscape screenshots, narrow for phone captures. Rows are
 * packed in document order and any remainder is absorbed by the row's last card,
 * so the result is deterministic — no masonry library, no layout JS.
 */
function layout(projects: ProjectCaseStudy[]) {
  const preferred: Record<Shape, number> = { landscape: 7, square: 4, portrait: 4 };
  const cards = projects.map((project) => {
    const shape = shapeOf(project.cover);
    return { project, shape, span: preferred[shape] };
  });

  let rowStart = 0;
  let used = 0;

  const closeRow = (endIndex: number) => {
    const leftover = COLUMNS - used;
    if (leftover > 0 && endIndex > rowStart) cards[endIndex - 1].span += leftover;
    used = 0;
    rowStart = endIndex;
  };

  cards.forEach((card, index) => {
    // a second landscape in the same row shares the space rather than wrapping
    if (card.shape === "landscape" && used > 0 && used + card.span > COLUMNS) {
      card.span = Math.max(5, COLUMNS - used);
    }
    if (used + card.span > COLUMNS) closeRow(index);
    used += card.span;
    if (used >= COLUMNS) closeRow(index + 1);
  });
  closeRow(cards.length);

  return cards;
}

export default function RecentProjects({ id = "projects", compact = false }: RecentProjectsProps) {
  const cards = layout(projectCases);

  return (
    <section id={id} className={`rpc-section${compact ? " rpc-section-compact" : ""}`}>
      <div className="rpc-wrap">
        <header className="rpc-head">
          <p className="eyebrow rpc-eyebrow">{compact ? "Selected case studies" : "Latest work"}</p>
          <h2>Recent <em>Projects</em></h2>
          <p className="rpc-note">
            Campaigns, content, and brand stories shaped with thoughtful strategy and clear purpose.
          </p>
        </header>

        <div className="rpc-grid">
          {cards.map(({ project, shape, span }, index) => (
            <article
              className={`rpc-card rpc-${shape}`}
              key={project.slug}
              style={{ "--span": span, "--ratio": `${project.cover.width} / ${project.cover.height}` } as React.CSSProperties}
            >
              <Link className="rpc-link" href={`/experience/${project.slug}`}>
                <span className="rpc-stage">
                  <Image
                    className="rpc-shot"
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={project.cover.width}
                    height={project.cover.height}
                    sizes={shape === "portrait" ? "(max-width: 760px) 86vw, 30vw" : "(max-width: 760px) 92vw, 58vw"}
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
          ))}
        </div>
      </div>
    </section>
  );
}
