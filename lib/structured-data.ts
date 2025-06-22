import type {
  BlogPosting,
  BreadcrumbList,
  Person,
  ProfessionalService,
  WebSite,
  WithContext,
} from "schema-dts";
import { DATA } from "@/data/resume";

export function generatePersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    alternateName: DATA.initials,
    description: DATA.description,
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    email: DATA.contact.email,
    telephone: DATA.contact.tel,
    address: {
      "@type": "PostalAddress",
      addressLocality: DATA.location,
    },
    jobTitle: DATA.work[0].title,
    worksFor: {
      "@type": "Organization",
      name: DATA.work[0].company,
    },
    knowsAbout: [
      "Software Architecture",
      "Full-Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      ".NET",
      "Cloud Computing",
      "Microservices",
      "System Design",
    ],
    sameAs: Object.values(DATA.contact.social).map((social) => social.url),
  };
}

export function generateWebsiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${DATA.name} Portfolio`,
    description: DATA.description,
    url: DATA.url,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DATA.url}/blogs?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
      // biome-ignore lint/suspicious/noExplicitAny: Schema types don't match exactly with schema-dts
    } as any,
  };
}

export function generateProfessionalServiceSchema(): WithContext<ProfessionalService> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${DATA.name} - Software Engineering Services`,
    description: "Professional software development and architecture services",
    provider: {
      "@type": "Person",
      name: DATA.name,
    },
    areaServed: "Worldwide",
    serviceType: [
      "Software Architecture",
      "Full-Stack Development",
      "Cloud Solutions",
      "Technical Consulting",
      "System Design",
    ],
    // biome-ignore lint/suspicious/noExplicitAny: Schema types don't match exactly with schema-dts
  } as any;
}

export function generateBlogPostSchema(
  title: string,
  description: string,
  publishedTime: string,
  slug: string
): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    publisher: {
      "@type": "Person",
      name: DATA.name,
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    url: `${DATA.url}/blogs/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DATA.url}/blogs/${slug}`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
