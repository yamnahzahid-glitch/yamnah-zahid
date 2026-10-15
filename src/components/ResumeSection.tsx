import Link from "next/link";
import ResumeCard from "@/components/ResumeCard";

type ResumeSectionProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  copy?: string;
  note?: string;
};

const facts = [
  { label: "Role", value: "Marketing & Creative" },
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Format", value: "PDF · One page" },
];

export default function ResumeSection({
  eyebrow = "Resume",
  heading = (
    <>
      The full story,
      <br />
      <em>on one page.</em>
    </>
  ),
  copy = "Campaigns, content, and brand work — with the roles, results, and tools behind them. Preview it in the browser or keep a copy for later.",
  note = "Updated 2026",
}: ResumeSectionProps) {
  return (
    <section id="resume" className="resume-section" aria-labelledby="resume-title">
      <div className="resume-wrap">
        <div className="resume-grid">
          <div className="resume-copy fade-up">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display resume-title" id="resume-title">{heading}</h2>
            <p className="resume-lede">{copy}</p>

            <dl className="resume-meta">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="resume-actions">
              <Link className="resume-primary" href="/resume">
                View resume <span aria-hidden="true">↗</span>
              </Link>
              <a className="resume-secondary u-link" href="/resume.pdf" download="Yumnah-Zahid-Resume.pdf">
                Download PDF <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <Link className="resume-doc fade-up" href="/resume" aria-label="View the full resume" data-cursor="View">
            <span className="resume-badge">PDF</span>
            <ResumeCard />
            <span className="resume-doc-foot">
              <span>{note}</span>
              <span className="resume-doc-cue">Full Preview <span aria-hidden="true">↗</span></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
