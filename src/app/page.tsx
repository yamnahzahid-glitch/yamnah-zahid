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
  "Behaviour & Growth Systems",
  "Campaign Strategy",
  "AI Content Systems",
  "Culture & Creative Systems",
  "Trust Architecture",
  "Performance Analytics",
];


const roles = [
  {
    dates: "Dec 2025 — Present",
    title: "Marketing Specialist",
    company: "PriceOye",
    location: "Islamabad, Pakistan",
    description: <>AI product content, the <strong>Asli Warranty</strong> campaign and the <strong>PayPak × PriceOye</strong> New Year campaign, alongside PR outreach across external agencies and new joint ventures, and a public-trust campaign that onboarded 12 stakeholders to grow media outreach.</>,
    tags: ["AI content", "Campaigns", "PR outreach"],
  },
  {
    dates: "Dec 2024 — Aug 2025",
    title: "Creative Executive",
    company: "Fishbowl Agency",
    location: "Islamabad, Pakistan",
    description: <>Content across media platforms for a leading telecom client, turning client briefs into advertising concepts for <strong>DVCs, social and integrated brand activations</strong> that non-specialist audiences could follow.</>,
    tags: ["DVCs", "Social", "Activations"],
  },
  {
    dates: "May 2024 — Jul 2024",
    title: "HR Intern",
    company: "FFBL Power Company",
    location: "Learning & development",
    description: <>Coordinated training delivery and design for the <strong>FPCL Learning Hub launch</strong> and the Summer Training sessions.</>,
    tags: ["Training delivery", "Coordination", "Design"],
  },
  {
    dates: "Sept 2023 — Jan 2024",
    title: "Project Trainee",
    company: "Foodpanda",
    location: "APAC Operations",
    description: <>Tracked training KPIs across the programme and supported the launch of the <strong>translated APAC Rider App</strong>, widening its reach across the region.</>,
    tags: ["KPI tracking", "Training", "App launch"],
  },
  {
    dates: "Case study",
    title: "Independent research — stakeholder engagement in CSR",
    company: "Bestway Group",
    location: "Research project",
    description: <>Evaluated how a major corporation&rsquo;s CSR initiatives communicated with community and institutional stakeholders, and set out recommendations for stronger accountability.</>,
    tags: ["Research", "Stakeholders", "CSR"],
  },
];

const strengths = [
  "Campaign strategy",
  "Funnel & conversion strategy",
  "Stakeholder engagement",
  "AI content production",
  "Creative governance",
  "Audience segmentation",
  "Performance analytics (CPA, CTR, ROAS)",
  "PR & vendor management",
];

/* One transparent cut-out at every breakpoint - no art direction, so no
   <picture> and no hand-rolled srcset: next/image handles the whole range. */
const HERO_PORTRAIT = "/photos/elegant-yamnah-zahid-figure.png";

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

function HeroSection() {
  return (
    <section id="top" className="relative flex flex-col justify-between overflow-hidden pt-20 md:pt-24">
      <div className="hero-shell relative mx-auto grid w-full grow shrink-0 items-center gap-8 px-7 pb-5 md:px-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative z-10 py-8 lg:col-span-7 lg:py-0">
          <p className="hero-kicker eyebrow mb-8 hero-el">Creative Marketer &amp; Campaign Strategist</p>
          <h1 className="hero-title">
            <span className="rl"><span>Belief into a</span></span>
            <span className="rl"><span className="accent">measurable</span></span>
            <span className="rl"><span>asset.</span></span>
          </h1>
          <p className="hero-copy hero-el mt-7 max-w-md text-sm leading-relaxed md:text-base">
            I don’t start with content. I start with the behaviour
            <br className="hidden md:inline" /> the content needs to change — campaigns, AI content systems and trust architecture.
          </p>
          <div className="hero-el mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/experience" className="hero-cta rounded-full px-6 py-3 text-[10px] uppercase tracking-[.2em] transition-colors">Explore my work ↗</Link>
            <Link href="/contact" className="hero-secondary u-link text-[10px] uppercase tracking-[.2em]">Get in touch</Link>
          </div>
          <div className="hero-stats hero-el mt-8 flex max-w-xl items-start gap-6 text-[9px] uppercase tracking-[.16em] md:gap-10" aria-label="Selected results">
            <div className="hero-stat"><p className="display text-3xl normal-case tracking-normal text-ink">+21%</p><p className="mt-1">Daily orders</p></div>
            <div className="hero-stat"><p className="display text-3xl normal-case tracking-normal text-ink">200</p><p className="mt-1">SKUs rebuilt</p></div>
            <div className="hero-stat"><p className="display text-3xl normal-case tracking-normal text-ink">250+</p><p className="mt-1">Creators</p></div>
          </div>
        </div>
        <div className="hero-img-wrap relative mx-auto flex w-full items-end justify-center lg:col-span-5">
          <div className="hero-portrait relative">
            <span className="hero-portrait-frame">
              {/* The source is 1242x2208, far larger than the frame renders at,
                  so the optimiser only ever scales it down - no upscaling, and
                  a fraction of the original's bytes. */}
              <Image
                fill
                priority
                sizes="(min-width: 1024px) 460px, (min-width: 768px) 410px, 360px"
                className="hero-portrait-img"
                src={HERO_PORTRAIT}
                alt="Portrait of Yumnah Zahid"
                placeholder="blur"
                blurDataURL={blurFor(HERO_PORTRAIT)}
              />
            </span>
          </div>
        </div>
      </div>
      <a className="hero-scroll hero-el" href="#capabilities" aria-label="Scroll to expertise">
        <span>Scroll</span><span className="hero-scroll-arrow" aria-hidden="true">&#8595;</span>
      </a>
    </section>
  );
}

function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative z-10 -mt-10 overflow-hidden border-y border-paper/10 bg-ink py-5 text-paper" aria-label="Areas of expertise">
      <div className="marquee-track italiana text-lg md:text-xl text-paper/70" aria-hidden="true">
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
                src="/photos/Hamnah-zahid.png"
                alt="Editorial portrait photograph"
                placeholder="blur"
                blurDataURL={blurFor("/photos/Hamnah-zahid.webp")}
              />
              <figcaption className="about-photo-caption">
                <span className="about-caption-mark" aria-hidden="true">YZ</span>
                <span><strong>Yumnah Zahid</strong><small>Campaign Strategist</small></span>
              </figcaption>
            </div>
          </figure>

          <div className="about-copy">
            <Eyebrow className="about-overline">About Me</Eyebrow>
            <h2 className="about-title display" aria-label="About Yumnah: I’m a campaign strategist, content systems lead, communications specialist, researcher, and climate communicator">
              <span className="about-title-static">I’m a</span>{" "}
              <RotatingAboutLine />
            </h2>
            <p className="about-intro">
              Most of my work starts with a behavioural diagnosis, not a creative brief: where in the funnel is the audience dropping off, and what do they need to believe before they&rsquo;ll convert? At PriceOye I&rsquo;ve used that question to run an AI content system that moved conversion rate and daily orders, and a 250-plus person creator campaign engineered for earned-media trust rather than another paid placement.
            </p>
            <p className="about-followup">
              There is a thread through all of it: taking something abstract and making it tangible. AI content made a product easier to imagine; Asli Warranty made trust easier to believe; ROX made connectivity feel like a lifestyle; FikrFree made protection easier to relate to.
            </p>
            <div className="about-details" aria-label="About details">
              <div><span>Based in</span><strong>Islamabad, Pakistan</strong></div>
              <div><span>Focus</span><strong>Campaigns · AI content systems · Climate comms</strong></div>
              <div><span>Studying</span><strong>MSc Project Management, Arden University</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Tool = { name: string; logo?: string; kind?: string; mark?: ReactNode };

const tools: Tool[] = [
  { name: "Adobe", logo: "/logos/adobe.svg" },
  { name: "Google Analytics", logo: "/logos/google-analytics.svg" },
  { name: "ImagineArt", logo: "/logos/imagineart.svg" },
  { name: "ChatGPT", logo: "/logos/chatgpt.svg" },
  { name: "Canva", logo: "/logos/canva.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Meta Ads", logo: "/logos/meta.svg" },
  { name: "Power BI", logo: "/logos/microsoft-power-bi.svg" },
  { name: "Excel", logo: "/logos/microsoft-excel.svg" },
];

function ToolMark({ tool }: { tool: Tool }) {
  if (tool.logo) {
    return (
      <span className="tool-mark tool-mark-logo" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tool.logo} alt="" width={20} height={20} loading="lazy" decoding="async" />
      </span>
    );
  }
  return <span className={`tool-mark ${tool.kind ?? ""}`} aria-hidden="true">{tool.mark}</span>;
}

function ExpertiseSection() {
  return (
    <section id="capabilities" className="profile-section py-20 md:py-28">
      <div className="mx-auto max-w-375 px-6 md:px-12">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <div>
              <Eyebrow className="mb-4">Expertise</Eyebrow>
              <h2 className="display">Skills built<br /><em>around the funnel.</em></h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed">A foundation in research and project management, paired with the tools behind the campaigns and content systems I run.</p>
            </div>
            <div>
              <Eyebrow className="mb-4">Software &amp; platforms</Eyebrow>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Software and platforms">
                {tools.map((tool) => (
                  <li className="tool-chip" key={tool.name}>
                    <ToolMark tool={tool} />
                    <span className="text-xs font-medium">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <article className="profile-panel strengths-panel h-full p-6 md:p-9 lg:col-span-7">
            <div className="mb-7 flex items-center gap-2" aria-hidden="true"><span className="panel-dot" /><span className="panel-dot" /><span className="panel-dot" /></div>
            <div className="flex flex-col gap-3 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div><Eyebrow className="mb-3">Core strengths</Eyebrow><h3 className="display">Strategy with an operating model.</h3></div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">{strengths.map((strength) => <li className="skill-chip" key={strength}>{strength}</li>)}</ul>
            <p className="mt-8 max-w-xl text-sm leading-relaxed">I bring research, creative governance and AI-enabled production together, so a campaign leaves behind a workflow a team can repeat and a report leadership can read.</p>
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
    answer: "Campaign strategy, funnel and conversion work, AI content production, creator and PR outreach, and stakeholder-led communication, including climate communications.",
  },
  {
    question: "How do you approach a new project?",
    answer: "With a behavioural diagnosis rather than a creative brief: where in the funnel the audience is dropping off, and what they need to believe before they convert. The strategy, the creative system and the reporting follow from that answer.",
  },
  {
    question: "Can you work with an existing brand team?",
    answer: "Yes. I can collaborate with in-house teams, agencies, and creators, and adapt to the workflows and tools already in place.",
  },
  {
    question: "How do you use AI in creative work?",
    answer: "As a production system, not a shortcut. At PriceOye that meant structured prompt workflows in ImagineArt, competitive benchmarking on what was actually converting, and review checkpoints so brand consistency held across a team.",
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
        {/* Saha has its own dedicated section below, so it is not repeated here. */}
        <RecentProjects exclude={["saha-climate-platform"]} />
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
