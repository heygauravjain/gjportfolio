/**
 * Site Configuration Types
 *
 * TypeScript interfaces for site-wide configuration and UI text.
 * This provides type safety for all UI strings and configuration.
 */

// Page-specific UI text interfaces
export interface HomePageText {
  greeting: string;
  sections: {
    about: string;
    work: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  projects: {
    badge: string;
    title: string;
    description: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    twitterLinkText: string;
    ignoreSoliciting: string;
  };
}

export interface BlogPageText {
  title: string;
  description: string;
  noPostsTitle: string;
  noPostsDescription: string;
  backToBlogsText: string;
  byText: string;
}

export interface NotFoundPageText {
  title: string;
  description: string;
}

export interface CommonUIText {
  present: string;
  theme: string;
  active: string;
  inactive: string;
}

export interface DateFormatConfig {
  locale: string;
  options: Intl.DateTimeFormatOptions;
}

// Main UI Text interface
export interface UIText {
  pages: {
    home: HomePageText;
    blogs: BlogPageText;
    notFound: NotFoundPageText;
  };
  common: CommonUIText;
  dateFormat: DateFormatConfig;
}

// Animation configuration
export interface AnimationConfig {
  blurFadeDelay: number;
}

// Helper function types
export type FormatGreetingFunction = (firstName: string) => string;
export type FormatDateFunction = (date: string | Date) => string;
export type FormatWorkPeriodFunction = (start: string, end?: string) => string;

// Type utility exports
export type UITextKeys = keyof UIText;
export type PageKeys = keyof UIText["pages"];
export type CommonKeys = keyof UIText["common"];
