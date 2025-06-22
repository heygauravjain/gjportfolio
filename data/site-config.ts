/**
 * Site Configuration
 *
 * This file centralizes all UI text strings and configuration used throughout the application
 * to ensure consistency, maintainability, and easy localization support.
 *
 * Benefits:
 * - Type safety for all UI strings
 * - Single source of truth for text content
 * - Easy to update text across the entire application
 * - Supports future internationalization (i18n)
 * - Prevents hardcoded strings scattered throughout components
 *
 * Usage:
 * import { UI_TEXT, ANIMATION_CONFIG, formatGreeting } from "@/data/site-config";
 *
 * Examples:
 * - UI_TEXT.pages.home.sections.about
 * - ANIMATION_CONFIG.blurFadeDelay
 * - formatGreeting("Deepak")
 */

import type { AnimationConfig, UIText } from "@/types";

// Implementation of the UI Text constants
export const UI_TEXT: UIText = {
  pages: {
    home: {
      greeting: "Hi, I'm {name} 👋",
      sections: {
        about: "About",
        work: "Work Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      projects: {
        badge: "My Projects",
        title: "Check out my latest work",
        description:
          "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
      },
      contact: {
        badge: "Contact",
        title: "Get in Touch",
        description: "Want to chat? Just shoot me a dm",
        twitterLinkText: "with a direct question on twitter",
        ignoreSoliciting:
          "and I'll respond whenever I can. I will ignore all soliciting.",
      },
    },
    blogs: {
      title: "Blogs",
      description:
        "Thoughts, ideas, and insights on web development and technology.",
      noPostsTitle: "No blog posts yet",
      noPostsDescription: "Check back soon for new content!",
      backToBlogsText: "Back to blogs",
      byText: "By",
    },
    notFound: {
      title: "Page Not Found",
      description:
        "Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",
    },
  },

  common: {
    present: "Present",
    theme: "Theme",
    active: "active",
    inactive: "inactive",
  },

  dateFormat: {
    locale: "en-US",
    options: {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  },
} as const;

// Animation Constants
export const ANIMATION_CONFIG: AnimationConfig = {
  blurFadeDelay: 0.04,
} as const;

// Helper function to format greeting with name
export function formatGreeting(firstName: string): string {
  return UI_TEXT.pages.home.greeting.replace("{name}", firstName);
}

// Helper function to format date consistently
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString(
    UI_TEXT.dateFormat.locale,
    UI_TEXT.dateFormat.options
  );
}

// Helper function to format work period
export function formatWorkPeriod(start: string, end?: string): string {
  return `${start} - ${end ?? UI_TEXT.common.present}`;
}
