import { blurFor } from "@/lib/blur";
import { jsonLd, pageGraph, site } from "@/lib/seo";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import RotatingAboutLine from "@/components/RotatingAboutLine";
import RecentProjects from "@/components/RecentProjects";
import ResumeSection from "@/components/ResumeSection";
import SahaFeature from "@/components/SahaFeature";
import ContactSection from "@/components/ContactSection";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const marqueeItems = [
  "Brand Storytelling",
  "AI Content Strategy",
  "Campaign Ideation",
  "Influencer & PR",
  "Prompt Engineering",
  "Copywriting",
];


const roles = [
  {
    dates: "Dec 2025 — Aug 2026",
    title: "Marketing Specialist",
    company: "Priceoye",
    location: "Karachi, Pakistan",
    description: <>Led an AI-driven product content initiative, replacing static visuals with AI-generated creative and improving daily orders and conversion. Also led campaigns end to end, from the PayPak × Priceoye New Year campaign to the “Asli Warranty Challenge” (3K+ followers gained) and PR outreach that helped confirm Priceoye as TECNO’s Official Distributor.</>,
    tags: ["AI Content", "Campaigns", "Influencer & PR"],
  },
  {
    dates: "Dec 2024 — Aug 2025",
    title: "Creative Executive",
    company: "Fishbowl Agency",
    location: "Jazz Business Vertical",
    description: <>Created content for the Jazz Business vertical — DVCs, social campaigns and activations for <strong>Garaj, Rox, FikrFree, Dealo, SportsX and Fitflex</strong>, translating product features into stories built for production.</>,
    tags: ["DVCs", "Social", "Activations"],
  },
  {
    dates: "May 2024 — Jul 2024",
    title: "HR Intern",
    company: "FFBL Company",
    location: "Fauji Foods",
    description: <>Conducted research and vendor outreach for the <strong>FPCL Learning Hub and website launch</strong>, and designed posters and visual materials for training and development sessions.</>,
    tags: ["Research", "Vendor Outreach", "Visual Design"],
  },
  {
    dates: "Sept 2023 — Jan 2024",
    title: "Project Trainee",
    company: "Foodpanda",
    location: "APAC Operations",
    description: <>Managed <strong>CV screening and training coordination</strong>, tracked KPIs and training response data, and helped launch the translated APAC Rider App, improving accessibility across regions.</>,
    tags: ["KPI Tracking", "Training", "App Launch"],
  },
];

const strengths = [
  "Brand storytelling",
  "Influencer & PR outreach",
  "Competitor & trend research",
  "AI-generated product content",
  "Meta Ads Manager",
  "Prompt engineering",
  "Campaign ideation",
  "Copywriting",
];

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

function HeroSection() {
  return (
    <section id="top" className="relative flex flex-col justify-between overflow-hidden pt-24 md:pt-28">
      <div className="hero-shell relative mx-auto grid w-full flex-1 items-center gap-8 px-7 pb-8 md:px-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative z-10 py-8 lg:col-span-7 lg:py-0">
          <p className="hero-kicker eyebrow mb-8 hero-el">Marketing &amp; Creative</p>
          <h1 className="hero-title">
            <span className="rl"><span>Stories that</span></span>
            <span className="rl"><span className="accent">stop the</span></span>
            <span className="rl"><span>scroll.</span></span>
          </h1>
          <p className="hero-copy hero-el mt-7 max-w-md text-sm leading-relaxed md:text-base">
            I craft brand stories, digital campaigns and creative experiences
            <br className="hidden md:inline" /> that connect people, build trust and turn ideas into impact.
          </p>
          <div className="hero-el mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/experience" className="hero-cta rounded-full px-6 py-3 text-[10px] uppercase tracking-[.2em] transition-colors">Explore my work ↗</Link>
            <Link href="/contact" className="hero-secondary u-link text-[10px] uppercase tracking-[.2em]">Get in touch</Link>
          </div>
          <div className="hero-stats hero-el mt-10 flex max-w-xl items-start gap-6 text-[9px] uppercase tracking-[.16em] md:gap-10" aria-label="Selected results">
            <div className="hero-stat"><p className="display text-3xl normal-case tracking-normal text-ink">+21%</p><p className="mt-1">Order lift</p></div>
            <div className="hero-stat"><p className="display text-3xl normal-case tracking-normal text-ink">200+</p><p className="mt-1">AI images</p></div>
            <div className="hero-stat"><p className="display text-3xl normal-case tracking-normal text-ink">250+</p><p className="mt-1">Creators</p></div>
          </div>
        </div>
        <div className="hero-img-wrap relative mx-auto flex w-full items-end justify-center lg:col-span-5">
          <span className="hero-ring" aria-hidden="true" />
          <div className="hero-portrait relative">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet="/photos/elegant-yamnah-zahid-figure.webp"
              />
              <Image
                fill
                priority
                sizes="(min-width: 1024px) 100vw, 92vw"
                className="hero-portrait-img"
                src="/photos/elegant-yamnah-zahid.webp"
                alt="Portrait of Yumnah Zahid"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="hero-el flex items-center justify-between px-7 pb-5 text-[9px] uppercase tracking-[.2em] text-smoke md:px-14">
        <span className="hidden items-center gap-4 md:flex">Scroll <span className="inline-block h-12 w-px hero-line" id="scroll-line" /> ↓</span>
      </div>
    </section>
  );
}

function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="bg-ink text-paper border-y border-paper/10 py-5 overflow-hidden" aria-label="Areas of expertise">
      <div className="marquee-track italiana text-xl md:text-2xl text-paper/70" aria-hidden="true">
        {loop.map((item, index) => <span key={`${item}-${index}`} className="contents"><span className="px-8">{item}</span><span className="text-bronze px-2">✦</span></span>)}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="mx-auto max-w-375 px-6 md:px-12">
        <div className="about-layout">
          <figure className="about-portrait-wrap fade-up">
            <div className="about-portrait-frame">
              <Image
                fill
                sizes="(min-width: 1024px) 40vw, 88vw"
                className="about-portrait-image"
                data-parallax
                src="/photos/portrait-about.jpg"
                alt="Editorial portrait photograph"
                placeholder="blur"
                blurDataURL={blurFor("/photos/portrait-about.jpg")}
              />
              <figcaption className="about-photo-caption">
                <span className="about-caption-mark" aria-hidden="true">YZ</span>
                <span><strong>Yumnah Zahid</strong><small>Creative Marketer</small></span>
              </figcaption>
            </div>
          </figure>

          <div className="about-copy">
            <Eyebrow className="about-overline">About Me</Eyebrow>
            <h2 className="about-title display" aria-label="About Yumnah: I’m a storyteller, strategist, marketer, researcher, creator, and communicator">
              <span className="about-title-static">I’m a</span>{" "}
              <RotatingAboutLine />
            </h2>
            <p className="about-intro">
              I currently lead AI-powered content and campaign strategy at Priceoye, turning complex briefs into stories people actually stop for. My time at Fishbowl Agency sharpened my instinct for narrative, while an MSc in Project Management brings discipline to the creative process.
            </p>
            <p className="about-followup">
              I’m drawn to the space where thoughtful strategy meets expressive storytelling — and where new tools can make good ideas travel further.
            </p>
            <div className="about-details" aria-label="About details">
              <div><span>Based in</span><strong>Karachi, Pakistan</strong></div>
              <div><span>Focus</span><strong>AI content · Campaigns · Brand stories</strong></div>
              <div><span>Studying</span><strong>MSc Project Management, Arden University</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolMark({ kind, children }: { kind: string; children: ReactNode }) {
  return <span className={`tool-mark ${kind}`} aria-hidden="true">{children}</span>;
}

function ExpertiseSection() {
  return (
    <section id="capabilities" className="profile-section py-20 md:py-28">
      <div className="mx-auto max-w-375 px-6 md:px-12">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <div>
              <Eyebrow className="mb-4">Expertise</Eyebrow>
              <h2 className="display">Creative skills<br /><em>with purpose.</em></h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed">A foundation in research and project management, paired with practical tools for modern marketing and creative work.</p>
            </div>
            <div>
              <Eyebrow className="mb-4">Software &amp; platforms</Eyebrow>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Software and platforms">
                <li className="tool-chip"><ToolMark kind="tool-powerpoint">P</ToolMark><span className="text-xs font-medium">PowerPoint</span></li>
                <li className="tool-chip"><ToolMark kind="tool-excel">X</ToolMark><span className="text-xs font-medium">Excel</span></li>
                <li className="tool-chip"><ToolMark kind="tool-analytics"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19v-4M12 19V9M19 19V5" /></svg></ToolMark><span className="text-xs font-medium">Analytics</span></li>
                <li className="tool-chip"><ToolMark kind="tool-meta"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 16c2.7-8.5 5.3-8.5 9 0s6.3 8.5 9 0M3 16c2.7 8.5 5.3 8.5 9 0s6.3-8.5 9 0" /></svg></ToolMark><span className="text-xs font-medium">Meta Ads</span></li>
                <li className="tool-chip"><ToolMark kind="tool-canva">C</ToolMark><span className="text-xs font-medium">Canva</span></li>
                <li className="tool-chip"><ToolMark kind="tool-imagine"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg></ToolMark><span className="text-xs font-medium">ImagineArt</span></li>
                <li className="tool-chip"><ToolMark kind="tool-adobe"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h7L3 21V3Zm11 0h7v18L14 3ZM12 13l3.2 8H8.8l3.2-8Z" /></svg></ToolMark><span className="text-xs font-medium">Adobe</span></li>
                <li className="tool-chip"><ToolMark kind="tool-powerbi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V11M10 20V5M16 20v-6M22 20H2" /></svg></ToolMark><span className="text-xs font-medium">Power BI</span></li>
                <li className="tool-chip"><ToolMark kind="tool-python"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-3 0-4 1.2-4 3v2h8v1H6c-1.8 0-3 1.2-3 4s1.2 4 3 4h2v-3c0-1.8 1.2-3 3-3h4c1.8 0 3-1.2 3-3V6c0-1.8-1.5-3-6-3Z" /><path d="M9.5 6h.01" /></svg></ToolMark><span className="text-xs font-medium">Python</span></li>
                <li className="tool-chip"><ToolMark kind="tool-sql"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg></ToolMark><span className="text-xs font-medium">SQL</span></li>
                <li className="tool-chip"><ToolMark kind="tool-office"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3 5 6v12l9 3 5-2.5v-13L14 3Z" /><path d="M14 3v18" /></svg></ToolMark><span className="text-xs font-medium">MS Office</span></li>
              </ul>
            </div>
          </div>
          <article className="profile-panel strengths-panel h-full p-6 md:p-9 lg:col-span-7">
            <div className="mb-7 flex items-center gap-2" aria-hidden="true"><span className="panel-dot" /><span className="panel-dot" /><span className="panel-dot" /></div>
            <div className="flex flex-col gap-3 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div><Eyebrow className="mb-3">Core strengths</Eyebrow><h3 className="display">Strategy meets storytelling.</h3></div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">{strengths.map((strength) => <li className="skill-chip" key={strength}>{strength}</li>)}</ul>
            <p className="mt-8 max-w-xl text-sm leading-relaxed">I bring research, creative direction, and AI-enabled production together to build content and campaigns with a clear purpose.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="xtl-section">
      <div className="xtl-wrap">
        <header className="xtl-head">
          <div>
            <Eyebrow className="mb-4">Career Timeline</Eyebrow>
            <h2 className="display">Work <em>Experience</em></h2>
          </div>
        </header>
        <div className="xtl-list">
          <span className="xtl-rail-cap xtl-rail-cap-start" aria-hidden="true" />
          <span className="xtl-rail-cap xtl-rail-cap-end" aria-hidden="true" />
          <span className="xtl-progress" aria-hidden="true" />
          <ol className="xtl-items" aria-label="Work experience">
            {roles.map((role, index) => (
              <li className="xtl-item fade-up" key={`${role.company}-${role.dates}`}>
                <div className="xtl-meta">
                  <span className="xtl-date">{role.dates}</span>
                  <h3 className="xtl-company">{role.company}</h3>
                  <span className="xtl-loc">{role.location}</span>
                </div>
                <div className="xtl-node" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="xtl-content">
                  <h4 className="xtl-role">{role.title}</h4>
                  <p className="xtl-desc">{role.description}</p>
                  <div className="xtl-foot">
                    <ul className="xtl-tags" aria-label={`${role.title} focus areas`}>
                      {role.tags.map((tag) => <li className="xtl-tag" key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "What kind of work do you take on?",
    answer: "I work across brand storytelling, campaign planning, AI-enabled content, creative concepting, influencer outreach, and research-led communication.",
  },
  {
    question: "How do you approach a new project?",
    answer: "I start by understanding the audience, goals, and context. From there, I shape a clear direction, plan the content or campaign, and support it through delivery.",
  },
  {
    question: "Can you work with an existing brand team?",
    answer: "Yes. I can collaborate with in-house teams, agencies, and creators, and adapt to the workflows and tools already in place.",
  },
  {
    question: "How do you use AI in creative work?",
    answer: "I use AI as a practical creative tool for exploration and production, guided by a human-led strategy, brand context, and careful review.",
  },
  {
    question: "What details should I share when getting in touch?",
    answer: "A short note about your project, its goals, timing, and the kind of support you need is a great place to start. We can work through the rest together.",
  },
];

function FAQSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-layout">
        <aside className="faq-intro">
          <span className="faq-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 20 6v5.2c0 4.7-3.2 8-8 9.8-4.8-1.8-8-5.1-8-9.8V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg></span>
          <p className="eyebrow">A few helpful details</p>
          <h2 className="display" id="faq-title">Frequently asked <em>questions.</em></h2>
          <p className="faq-intro-copy">A little more about how I think, collaborate, and bring creative work to life.</p>
          <div className="faq-note"><span aria-hidden="true">&#8599;</span><p>Have another question?<br /><Link href="/contact">Let&apos;s talk about it.</Link></p></div>
        </aside>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-question">{item.question}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer"><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <>
      <div className="cursor-dot" aria-hidden="true"><span className="cursor-label">View</span></div>
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <Marquee />
        <AboutSection />
        <ExpertiseSection />
        <RecentProjects />
        <ExperienceSection />
        <SahaFeature />
        <ResumeSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <PortfolioEnhancements />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            pageGraph({
              path: "/",
              name: `${site.name} | ${site.tagline}`,
              description: site.description,
              image: site.image,
              // The FAQ block is eligible for a rich result, so describe it.
              extra: [
                {
                  "@type": "FAQPage",
                  mainEntity: faqItems.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer },
                  })),
                },
              ],
            }),
          ),
        }}
      />
    </>
  );
}
