import { DATA } from "./resume";

export const SEO_CONFIG = {
  keywords: [
    "Full-Stack Engineer",
    "Software Architect",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    ".NET Developer",
    "Cloud Architecture",
    "AWS",
    "Azure",
    "Microservices",
    "System Design",
    "Software Engineering",
    "Deepak Jangra",
    "Portfolio",
    "Blog",
    "Technical Writing",
    "Programming",
    "Web Development",
    "API Development",
    "Database Design",
    "DevOps",
    "CI/CD",
    "Serverless",
    "AI Integration",
    "Entrepreneur",
  ],

  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: `${DATA.name} Portfolio`,
    images: {
      url: `${DATA.url}/og-default.png`,
      width: 1200,
      height: 630,
      alt: DATA.name,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
} as const;
