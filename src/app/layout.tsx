import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = "https://blobcoffee.in";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: "Blob Coffee — Investor Pitch Deck | Seed Round ₹30 Lakhs",
  description:
    "Blob Coffee is a premium single-origin concentrated cold brew crafted for cafe-grade taste at home or on the go. Raising ₹30 Lakhs. Udaipur, Rajasthan.",
  metadataBase: new URL(siteUrl),

  // ── Open Graph (WhatsApp, Facebook, LinkedIn) ──────────────────────────────
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Blob Coffee",
    title: "Blob Coffee — Premium Cold Brew | Seed Round ₹30 Lakhs",
    description:
      "Single-origin concentrated cold brew. 9-month ambient shelf life. No synthetic preservatives. Raising ₹30 Lakhs to scale micro-manufacturing in Udaipur.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Blob Coffee — Premium Cold Brew Investor Pitch Deck",
      },
    ],
    locale: "en_IN",
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Blob Coffee — Premium Cold Brew | Seed Round ₹30 Lakhs",
    description:
      "Single-origin concentrated cold brew. 9-month ambient shelf life. No synthetic preservatives. Raising ₹30 Lakhs.",
    images: [ogImage],
  },

  // ── Favicons ───────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-32.png",
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data for Google & rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Blob Coffee",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon-32.png`,
      },
      description:
        "Premium single-origin concentrated cold brew coffee. Chemical-free, nitrogen-flushed, 9-month ambient shelf life.",
      foundingDate: "2026",
      foundingLocation: {
        "@type": "Place",
        name: "Udaipur, Rajasthan, India",
      },
      founder: {
        "@type": "Person",
        name: "Sumit Sharma",
        jobTitle: "Founder & Beverage Architect",
        description:
          "Certified barista and F&B entrepreneur with 8+ years of experience. Beverage Consultant specializing in Brewing Methodologies and Coffee Tasting.",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Blob Coffee — Investor Pitch Deck | Seed Round ₹30 Lakhs",
      isPartOf: { "@id": `${siteUrl}/#organization` },
      description:
        "Blob Coffee investor pitch deck. Raising ₹30 Lakhs seed round to establish micro-manufacturing infrastructure in Udaipur and scale into quick-commerce distribution.",
      image: ogImage,
      inLanguage: "en-IN",
    },
    {
      "@type": "Product",
      name: "Blob Coffee — Concentrated Cold Brew",
      brand: { "@type": "Brand", name: "Blob Coffee" },
      description:
        "Premium single-origin concentrated cold brew. Nitrogen-flushed, zero synthetic preservatives, 9-month ambient shelf life. Cafe-grade taste concentrated for the everyday.",
      image: ogImage,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld-blob-coffee"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
