import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FloatingServiceWidget from "@/components/FloatingServiceWidget";
import { siteConfig } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`;
const description = siteConfig.hero.subtitle;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s · ${siteConfig.brand.name}`,
  },
  description,
  applicationName: siteConfig.brand.name,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.brand.name, url: siteConfig.url }],
  creator: siteConfig.brand.name,
  publisher: siteConfig.brand.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/brand/favicon.png", type: "image/png", sizes: "131x117" }],
    apple: { url: "/brand/favicon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.brand.name,
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: siteConfig.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brand.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/adowlz-logo.svg`,
  description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  sameAs: siteConfig.social.map((s) => s.href),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  areaServed: siteConfig.contact.locations.map((city) => ({
    "@type": "City",
    name: city,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <FloatingServiceWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
