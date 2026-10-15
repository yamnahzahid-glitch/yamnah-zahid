import { jsonLd, pageGraph } from "@/lib/seo";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | Yumnah Zahid — Marketing & Creative Strategist",
  description: "Have a project, campaign, or story in mind? Contact Yumnah Zahid to discuss creative strategy, content, and campaigns.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "profile",
    url: "/contact",
    title: "Contact | Yumnah Zahid — Marketing & Creative Strategist",
    description: "Get in touch with Yumnah Zahid about campaigns, content, and brand storytelling projects.",
    images: [{ url: "/photos/portrait-hero.jpg" }],
  },
};

export default function ContactPage() {
  return (
    <div className="case-page">
      <SiteHeader />
      <main id="main-content">
        <ContactSection standalone />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            pageGraph({
              type: "ContactPage",
              path: "/contact",
              name: "Contact | Yumnah Zahid — Marketing & Creative Strategist",
              description: "Get in touch with Yumnah Zahid about campaigns, content, and brand storytelling projects.",
              image: "/photos/portrait-hero.jpg",
            }),
          ),
        }}
      />
      <SiteFooter />
      <PortfolioEnhancements />
    </div>
  );
}