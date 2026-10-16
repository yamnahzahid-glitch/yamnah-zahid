import Image from "next/image";
import Link from "next/link";
import { blurFor } from "@/lib/blur";

const facts = [
  { label: "Began", value: "Drought-stress research, lentils" },
  { label: "Dialogue", value: "Youth Roundtable · CVF–V20, Sept 2025" },
  { label: "Carried to", value: "Youth Climate Communiqué · COP30" },
];

export default function SahaFeature() {
  return (
    <section className="saha-section" aria-labelledby="saha-title">
      <div className="saha-wrap">
        <div className="saha-grid">
          <div className="saha-copy fade-up">
            <p className="eyebrow saha-eyebrow">Independent project</p>
            <h2 className="display saha-title" id="saha-title">
              Climate is a question
              <br />
              <em>of how we live.</em>
            </h2>
            <p className="saha-lede">
              My interest in climate change began in science, but it didn’t stay in the laboratory — it
              moved into advocacy, and then into a product. Saha translates climate intelligence into
              something closer to everyday life: how a changing climate affects homes, routines and
              communities, and what people can do about it.
            </p>

            <div className="saha-actions">
              <a className="saha-primary" href="https://www.sahaclimate.com/" target="_blank" rel="noopener noreferrer">
                Visit sahaclimate.com <span aria-hidden="true">↗</span>
              </a>
              <Link className="saha-secondary" href="/experience/saha-climate-platform">
                Read the case study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <a
            className="saha-card fade-up"
            href="https://www.sahaclimate.com/"
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

            <span className="saha-card-proof">
              <Image
                src="/projects/saha-1.png"
                alt="CVF–V20 correspondence inviting review of the Youth Communiqué ahead of COP30"
                width={360}
                height={781}
                sizes="(max-width: 900px) 88vw, 34vw"
                placeholder="blur"
                blurDataURL={blurFor("/projects/saha-1.png")}
              />
              <span className="saha-card-proof-cap">CVF–V20 · Youth Communiqué correspondence</span>
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
