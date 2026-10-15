import type { Metadata, Viewport } from "next";
import "./globals.css";
import { jsonLd, site, siteGraph, siteUrl } from "@/lib/seo";

const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yumnah Zahid | Marketing & Creative Portfolio",
    template: "%s | Yumnah Zahid",
  },
  description,
  applicationName: "Yumnah Zahid Portfolio",
  keywords: [
    "Yumnah Zahid",
    "marketing strategist",
    "creative portfolio",
    "brand storytelling",
    "AI content strategy",
    "campaign ideation",
    "influencer marketing",
    "Karachi marketing professional",
  ],
  authors: [{ name: "Yumnah Zahid", url: "https://www.linkedin.com/in/yumnah-zahid-741429285/" }],
  creator: "Yumnah Zahid",
  publisher: "Yumnah Zahid",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: "Yumnah Zahid",
    title: "Yumnah Zahid | Marketing & Creative Portfolio",
    description,
    images: [
      {
        url: "/photos/portrait-hero.jpg",
        width: 1200,
        height: 1500,
        alt: "Yumnah Zahid, marketing and creative professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumnah Zahid | Marketing & Creative Portfolio",
    description,
    images: ["/photos/portrait-hero.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "portfolio",
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Self-hosted: same origin, so these start with the HTML instead of
            waiting on a third-party DNS + TLS handshake. */}
        <link rel="preload" href="/fonts/RebelSansDisplay-VF.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/RebelSansText-VF.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {/* Identity and site graph, emitted once for every route. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(siteGraph()) }}
        />
      </body>
    </html>
  );
}