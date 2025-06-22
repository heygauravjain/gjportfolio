import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { SEO_CONFIG } from "@/data/seo";
import {
  generatePersonSchema,
  generateProfessionalServiceSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Entrepreneur`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [...SEO_CONFIG.keywords],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  category: "Technology",
  classification: "Software Engineering Portfolio",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: SEO_CONFIG.openGraph.siteName,
    locale: SEO_CONFIG.openGraph.locale,
    type: SEO_CONFIG.openGraph.type,
    images: [SEO_CONFIG.openGraph.images],
  },
  robots: SEO_CONFIG.robots,
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    creator: `@${DATA.contact.social.X.url.split("/").pop()}`,
    images: [SEO_CONFIG.openGraph.images.url],
  },
  alternates: {
    canonical: DATA.url,
    types: {
      "application/rss+xml": `${DATA.url}/feed.xml`,
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProfessionalServiceSchema()),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//youtube.com" />
        <link rel="dns-prefetch" href="//x.com" />

        {/* Canonical URL */}
        <link rel="canonical" href={DATA.url} />

        {/* Language alternatives */}
        <link rel="alternate" hrefLang="en" href={DATA.url} />
        <link rel="alternate" hrefLang="x-default" href={DATA.url} />
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6",
          satoshi.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Analytics />
            <SpeedInsights />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
