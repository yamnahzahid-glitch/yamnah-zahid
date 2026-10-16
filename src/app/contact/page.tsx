import { jsonLd, pageGraph } from "@/lib/seo";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PortfolioEnhancements from "@/components/PortfolioEnhancements";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact | Yumnah Zahid — Campaign Strategist",
  description: "Have a campaign or brief in mind? Contact Yumnah Zahid to discuss campaign strategy, AI content systems, and stakeholder communication.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "profile",
    url: "/contact",
    title: "Contact | Yumnah Zahid — Campaign Strategist",
    description: "Get in touch with Yumnah Zahid about campaign strategy, content systems, and communications projects.",
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
              name: "Contact | Yumnah Zahid — Campaign Strategist",
              description: "Get in touch with Yumnah Zahid about campaign strategy, content systems, and communications projects.",
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