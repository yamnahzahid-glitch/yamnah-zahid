import { jsonLd, pageGraph } from "@/lib/seo";
import { blurFor } from "@/lib/blur";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import ResumeSection from "@/components/ResumeSection";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "About Yumnah Zahid | Marketing & Creative Strategist",
  description: "Meet Yumnah Zahid, a Karachi-based marketing and creative strategist working across brand storytelling, AI-powered content, campaigns, research, and project management.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Yumnah Zahid | Marketing & Creative Strategist",
    description: "How Yumnah Zahid approaches marketing strategy, creative campaigns, and brand storytelling, with the career and education behind it.",
    images: [{ url: "/photos/portrait-about.jpg" }],
  },
};

const principles = [
  {
    index: "01",
    title: "Begin with understanding.",
    body: "Good creative work starts with context: the audience, the brief, the business need, and the detail that makes a story matter.",
  },
  {
    index: "02",
    title: "Make the message human.",
    body: "I look for the clear, relatable idea inside complex information, then shape it into content people can connect with.",
  },
  {
    index: "03",
    title: "Carry it through.",
    body: "From research and planning to production and rollout, I bring structure to the process so ideas can become real work.",
  },
];

const experience = [
  {
    period: "Dec 2025 - Aug 2026",
    role: "Marketing Specialist",
    company: "Priceoye",
    detail: "AI-powered product content, campaign planning, creator coordination, and PR outreach.",
  },
  {
    period: "Dec 2024 - Aug 2025",
    role: "Creative Executive",
    company: "Fishbowl Agency / Jazz Business",
    detail: "Creative concepts, DVCs, social campaigns, and activations across Garaj, ROX, FikrFree, Dealo, SportsX, and Fitflex.",
  },
  {
    period: "May 2024 - Jul 2024",
    role: "HR Intern",
    company: "FFBL Company / Fauji Foods",
    detail: "Research, vendor outreach, learning hub support, and visual materials for training and development.",
  },
  {
    period: "Sept 2023 - Jan 2024",
    role: "Project Trainee",
    company: "Foodpanda / APAC Operations",
    detail: "CV screening, training coordination, KPI tracking, and support for a translated rider app launch.",
  },
];

const capabilities = [
  "Brand storytelling",
  "Campaign strategy",
  "AI-enabled content",
  "Creative concepting",
  "Influencer & PR outreach",
  "Research & project management",
];

const missionPoints = [
  "Start with the audience and the real question behind the brief",
  "Give every campaign a clear story and a reason to exist",
  "Carry ideas from research and planning through to delivery",
  "Use new creative tools thoughtfully, with people at the centre",
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
              <p className="about-page-lede">I am Yumnah Zahid, a marketing and creative strategist bringing research, clear thinking, and expressive storytelling together to make ideas connect.</p>
              <div className="about-page-hero-actions">
                <a className="about-page-link" href="#about-mission">Explore my approach <span aria-hidden="true">&#8595;</span></a>
                <Link className="about-page-work-link" href="/experience">Selected work <span aria-hidden="true">&#8599;</span></Link>
              </div>
            </div>
            <figure className="about-page-portrait">
              <Image
                src="/photos/portrait-about.jpg"
                alt="Editorial portrait representing Yumnah Zahid"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                placeholder="blur"
                blurDataURL={blurFor("/photos/portrait-about.jpg")}
              />
              <figcaption><span>Yumnah Zahid</span><span>Creative Marketer /Brand Storyteller/Content Strategist</span></figcaption>
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
              <p className="about-mission-lede">I turn ambitious ideas into stories people can understand, feel, and act on.</p>
              <p className="about-mission-body">From campaign strategy to the detail in a single post, I want each creative decision to earn its place: grounded in audience insight, shaped with clear thinking, and carried through with care.</p>
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
              <p>Curiosity brings the insight. A clear process helps it travel.</p>
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
                <article><span>2019 - 2023</span><h3>COMSATS University Islamabad</h3><p>BS Biological Sciences / Islamabad, Pakistan</p></article>
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
              <h2 className="display">Strategy, story, <em>and follow-through.</em></h2>
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
                <p className="about-contact-copy">Have a campaign, content challenge, or brand story to shape? Tell me a little about it and we can explore the right next step.</p>
                <div className="about-contact-actions">
                  <Link href="/contact" className="about-contact-primary">Start a conversation <span aria-hidden="true">&#8599;</span></Link>
                  <Link href="/experience" className="about-contact-secondary">Explore selected work</Link>
                </div>
                <p className="about-contact-note">Strategy <span aria-hidden="true">·</span> Campaigns <span aria-hidden="true">·</span> Creative content</p>
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
              name: "About Yumnah Zahid | Marketing & Creative Strategist",
              description: "How Yumnah Zahid approaches marketing strategy, creative campaigns, and brand storytelling, with the career and education behind it.",
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
