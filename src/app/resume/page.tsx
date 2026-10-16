import { jsonLd, pageGraph } from "@/lib/seo";
import { blurFor } from "@/lib/blur";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import ResumeViewer from "@/components/ResumeViewer";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Resume | Yumnah Zahid — Campaign Strategist",
  description:
    "Preview or download the resume of Yumnah Zahid — campaign strategist and content systems lead working across campaigns, AI content systems, and stakeholder communication.",
  alternates: { canonical: "/resume" },
  openGraph: {
    type: "profile",
    url: "/resume",
    title: "Resume | Yumnah Zahid — Campaign Strategist",
    description: "Preview or download the resume of Yumnah Zahid: campaign strategy, AI content systems, stakeholder engagement, and climate communication.",
    images: [{ url: "/photos/resume-hero.webp" }],
  },
};


export default function ResumePage() {
  return (
    <div className="case-page resume-page">
      <SiteHeader />
      <main id="main-content">
        <section className="resume-banner" aria-labelledby="resume-page-title">
          <Image
            className="resume-banner-img"
            src="/photos/resume-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurFor("/photos/resume-hero.webp")}
          />
          <span className="resume-banner-veil" aria-hidden="true" />
          {/* The page still needs its H1 for assistive tech and search; the
              banner itself carries the message visually. */}
          <h1 className="visually-hidden" id="resume-page-title">Resume</h1>
        </section>

        <section className="resume-document" aria-label="Resume document">
          <div className="resume-page-wrap">
            <ResumeViewer />
          </div>
        </section>

        <section className="resume-footnote">
          <div className="resume-page-wrap resume-footnote-inner">
            <div>
              <p className="eyebrow">Next step</p>
              <h2 className="display">Something you&apos;d like to <em>talk through?</em></h2>
            </div>
            <div className="resume-footnote-links">
              <Link className="resume-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
              <a className="resume-ghost" href="https://www.linkedin.com/in/yumnah-zahid-741429285/" target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a className="resume-ghost" href="mailto:yumnahz2001@gmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            pageGraph({
              type: "ProfilePage",
              path: "/resume",
              name: "Resume | Yumnah Zahid — Campaign Strategist",
              description: "Preview or download the resume of Yumnah Zahid: campaign strategy, AI content systems, stakeholder engagement, and climate communication.",
              image: "/photos/resume-hero.webp",
            }),
          ),
        }}
      />
      <SiteFooter />
      <PortfolioEnhancements />
    </div>
  );
}
