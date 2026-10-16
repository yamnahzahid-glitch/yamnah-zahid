import { jsonLd, pageGraph } from "@/lib/seo";
import { blurFor } from "@/lib/blur";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import ResumeSection from "@/components/ResumeSection";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "About Yumnah Zahid | Campaign Strategist",
  description: "Meet Yumnah Zahid, an Islamabad-based campaign strategist and content systems lead working across campaign strategy, AI content production, stakeholder engagement, and climate communications.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Yumnah Zahid | Campaign Strategist",
    description: "How Yumnah Zahid approaches campaign strategy, AI content systems, and stakeholder-led communication, with the career and education behind it.",
    images: [{ url: "/photos/portrait-about.jpg" }],
  },
};

const principles = [
  {
    index: "01",
    title: "Start with a behavioural diagnosis.",
    body: "Not a creative brief. Where in the funnel is the audience dropping off, and what do they need to believe before they’ll convert?",
  },
  {
    index: "02",
    title: "Build the system before the creative.",
    body: "A workflow a team can repeat, a budget allocated across audience tiers, and review checkpoints that hold brand consistency across more than one pair of eyes.",
  },
  {
    index: "03",
    title: "Ask what actually changed.",
    body: "Generative tools make it cheap to produce more. The useful question stops being “can you make something?” and becomes “can you tell whether your input changed anything?”",
  },
];

const experience = [
  {
    period: "Dec 2025 - Present",
    role: "Marketing Specialist",
    company: "PriceOye",
    detail: "AI product content, the Asli Warranty and PayPak × PriceOye campaigns, PR outreach across external agencies and new joint ventures, and a public-trust campaign that onboarded 12 stakeholders.",
  },
  {
    period: "Dec 2024 - Aug 2025",
    role: "Creative Executive",
    company: "Fishbowl Agency",
    detail: "Content across media platforms for a leading telecom client, turning briefs into advertising concepts for DVCs, social and integrated brand activations.",
  },
  {
    period: "May 2024 - Jul 2024",
    role: "HR Intern",
    company: "FFBL Power Company",
    detail: "Coordinated training delivery and design for the FPCL Learning Hub launch and the Summer Training sessions.",
  },
  {
    period: "Sept 2023 - Jan 2024",
    role: "Project Trainee",
    company: "Foodpanda / APAC Operations",
    detail: "Tracked training KPIs across the programme and supported the launch of the translated APAC Rider App, widening its reach across the region.",
  },
  {
    period: "Case study",
    role: "Independent research — stakeholder engagement in CSR",
    company: "Bestway Group",
    detail: "Evaluated how a major corporation’s CSR initiatives communicated with community and institutional stakeholders, with recommendations for stronger accountability.",
  },
];

const capabilities = [
  "Campaign strategy",
  "Funnel & conversion strategy",
  "AI content production",
  "Creative governance",
  "Stakeholder engagement & PR",
  "Performance analytics (CPA, CTR, ROAS)",
];

const missionPoints = [
  "Diagnose the behaviour before writing a brief",
  "Segment the audience, then allocate budget across those tiers up front",
  "Leave behind a creative workflow a team can repeat",
  "Measure whether the input changed anything, not how much was produced",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <main id="main-content">
        <section className="about-page-hero">
          <div className="about-page-wrap about-page-hero-grid">
            <div className="about-page-hero-copy">
              <p className="eyebrow">A little about me</p>
              <h1 className="display"><span>Strategy with</span><em>a human story.</em></h1>
              <p className="about-page-lede">I am Yumnah Zahid, a campaign strategist and content systems lead: trust architecture, AI-driven content systems, and stakeholder-led narrative building across paid, owned and earned channels.</p>
              <div className="about-page-hero-actions">
                <a className="about-page-link" href="#about-mission">Explore my approach <span aria-hidden="true">&#8595;</span></a>
                <Link className="about-page-work-link" href="/experience">Selected work <span aria-hidden="true">&#8599;</span></Link>
              </div>
            </div>
            <figure className="about-page-portrait">
              <Image
                src="/photos/Hamnah-zahid.webp"
                alt="Editorial portrait representing Yumnah Zahid"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                placeholder="blur"
                blurDataURL={blurFor("/photos/Hamnah-zahid.webp")}
              />
              <figcaption><span>Yumnah Zahid</span><span>Campaign Strategist / Content Systems Lead / Climate Communications</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="about-mission" id="about-mission" aria-labelledby="about-mission-title">
          <div className="about-page-wrap about-mission-grid">
            <div className="about-mission-visual" aria-label="Selected campaign creative">
              <figure className="about-mission-image about-mission-image-main">
                <Image src="/projects/rox-3.jpg" alt="ROX campaign creative showing a culture-led brand story" fill sizes="(min-width: 900px) 42vw, 88vw" placeholder="blur" blurDataURL={blurFor("/projects/rox-3.jpg")} />
                <figcaption>Campaign storytelling <span>01 / Selected work</span></figcaption>
              </figure>
              <figure className="about-mission-image about-mission-image-detail">
                <Image src="/projects/rox-2.jpg" alt="A creator-led moment from the ROX campaign" fill sizes="(min-width: 900px) 25vw, 58vw" placeholder="blur" blurDataURL={blurFor("/projects/rox-2.jpg")} />
                <figcaption>Creative in context</figcaption>
              </figure>
              <span className="about-mission-visual-mark" aria-hidden="true">YZ</span>
            </div>

            <div className="about-mission-copy">
              <span className="about-mission-label">My mission</span>
              <h2 className="display" id="about-mission-title">Make every idea <em>mean something.</em></h2>
              <p className="about-mission-lede">I don’t start with content. I start with the behaviour the content needs to change.</p>
              <p className="about-mission-body">The work divides into two tracks. Behaviour and growth systems — marketing built like an experiment, where a visual or a network of voices is a variable you can test. And culture and creative systems — ideas that have to survive outside the deck, on a shoot floor and in a feed. Running underneath both: taking something abstract and making it tangible.</p>
              <ul className="about-mission-points">
                {missionPoints.map((point) => <li key={point}><span aria-hidden="true">&#10003;</span>{point}</li>)}
              </ul>
              <Link href="/experience" className="about-mission-link">See how I put it into practice <span aria-hidden="true">&#8599;</span></Link>
            </div>
          </div>
        </section>

        <section className="about-page-principles">
          <div className="about-page-wrap">
            <header className="about-page-section-heading">
              <p className="eyebrow">How I think</p>
              <h2 className="display">A creative process with <em>purpose.</em></h2>
              <p>A behavioural question brings the insight. An operating model helps it travel.</p>
            </header>
            <div className="about-page-principle-grid">
              {principles.map((item) => (
                <article className="about-page-principle" key={item.index}>
                  <span className="about-page-principle-index">{item.index}</span>
                  <h3 className="display">{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-career">
          <div className="about-page-wrap about-page-career-grid">
            <header className="about-page-career-heading">
              <p className="eyebrow">Experience & education</p>
              <h2 className="display">A foundation built <em>over time.</em></h2>
              <p>Research, creative practice, and project coordination have each shaped how I approach the work.</p>
              <div className="about-page-education">
                <span className="eyebrow">Education</span>
                <article><span>2019 - 2023</span><h3>COMSATS, Islamabad</h3><p>BSc Biological Sciences / Islamabad, Pakistan</p></article>
                <article><span>2024 - 2026</span><h3>Arden University</h3><p>MSc Project Management / Coventry, UK</p></article>
              </div>
            </header>
            <ol className="about-page-career-list">
              {experience.map((item) => (
                <li key={`${item.company}-${item.period}`}>
                  <span className="about-page-career-dot" aria-hidden="true" />
                  <p className="about-page-career-period">{item.period}</p>
                  <h3 className="display">{item.role}</h3>
                  <p className="about-page-career-company">{item.company}</p>
                  <p className="about-page-career-detail">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-page-capabilities">
          <div className="about-page-wrap about-page-capabilities-inner">
            <div>
              <p className="eyebrow">What I bring</p>
              <h2 className="display">Strategy, systems, <em>and follow-through.</em></h2>
            </div>
            <ul>{capabilities.map((item) => <li key={item}><span aria-hidden="true">&#8595;</span>{item}</li>)}</ul>
          </div>
        </section>

        <ResumeSection
          eyebrow="Resume"
          heading={<>Everything here,<br /><em>condensed.</em></>}
          copy="Roles, results, and the tools behind them — the same story as this page, in the format a hiring team can scan in a minute."
          note="One page · Updated 2026"
        />

        <section className="about-page-cta">
          <div className="about-page-wrap">
            <div className="about-contact-panel">
              <Image
                className="about-contact-image"
                src="/projects/about-creative-work.jpg"
                alt="A creative professional developing ideas at her desk"
                fill
                sizes="(min-width: 1500px) 1400px, 94vw"
                placeholder="blur"
                blurDataURL={blurFor("/projects/about-creative-work.jpg")}
              />
              <div className="about-contact-content">
                <p className="eyebrow">Have something in mind?</p>
                <h2 className="display">Let&apos;s make your next idea <em>matter.</em></h2>
                <p className="about-contact-copy">Have a campaign, content system, or communications challenge to shape? Tell me a little about it and we can explore the right next step.</p>
                <div className="about-contact-actions">
                  <Link href="/contact" className="about-contact-primary">Start a conversation <span aria-hidden="true">&#8599;</span></Link>
                  <Link href="/experience" className="about-contact-secondary">Explore selected work</Link>
                </div>
                <p className="about-contact-note">Campaigns <span aria-hidden="true">·</span> Content systems <span aria-hidden="true">·</span> Climate communications</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            pageGraph({
              type: "AboutPage",
              path: "/about",
              name: "About Yumnah Zahid | Campaign Strategist",
              description: "How Yumnah Zahid approaches campaign strategy, AI content systems, and stakeholder-led communication, with the career and education behind it.",
              image: "/photos/portrait-about.jpg",
            }),
          ),
        }}
      />
      <SiteFooter />
      <PortfolioEnhancements />
    </div>
  );
}
