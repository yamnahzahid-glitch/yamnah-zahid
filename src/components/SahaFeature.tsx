import Link from "next/link";

const facts = [
  { label: "Focus", value: "Climate communication" },
  { label: "Work", value: "Research & advocacy" },
  { label: "Milestone", value: "Youth Climate Communiqué · CVF–V20" },
];

export default function SahaFeature() {
  return (
    <section className="saha-section" aria-labelledby="saha-title">
      <div className="saha-wrap">
        <div className="saha-grid">
          <div className="saha-copy fade-up">
            <p className="eyebrow saha-eyebrow">Independent project</p>
            <h2 className="display saha-title" id="saha-title">
              Saha — climate research,
              <br />
              <em>made liveable.</em>
            </h2>
            <p className="saha-lede">
              A platform built to close the gap between climate research and daily life — turning evidence
              on food, water, and changing seasons into something people can actually use, with advocacy
              work carried into the CVF–V20 conversation ahead of COP30.
            </p>

            <div className="saha-actions">
              <a className="saha-primary" href="https://sahaclimate.com" target="_blank" rel="noopener noreferrer">
                Visit sahaclimate.com <span aria-hidden="true">↗</span>
              </a>
              <Link className="saha-secondary" href="/experience/saha-climate-platform">
                Read the case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <a
            className="saha-card fade-up"
            href="https://sahaclimate.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit sahaclimate.com"
            data-cursor="Visit"
          >
            <span className="saha-card-orbit" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor">
                <circle cx="100" cy="100" r="78" strokeWidth=".75" opacity=".45" />
                <circle cx="100" cy="100" r="56" strokeWidth=".75" opacity=".3" />
                <ellipse cx="100" cy="100" rx="78" ry="30" strokeWidth=".75" opacity=".35" />
                <ellipse cx="100" cy="100" rx="30" ry="78" strokeWidth=".75" opacity=".2" />
              </svg>
            </span>

            <span className="saha-card-head">
              <span className="saha-card-live"><i aria-hidden="true" />Live</span>
              <span className="saha-card-domain">sahaclimate.com</span>
            </span>

            <dl className="saha-card-facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <span className="saha-card-foot">
              Open the platform <span className="saha-card-arrow" aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
