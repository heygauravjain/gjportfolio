/**
 * Resume Data Types
 *
 * TypeScript interfaces for all resume-related data structures.
 * This provides type safety and IDE support for resume data.
 */

import type { ComponentType } from "react";

export interface SkillItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface NavbarItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  navbar: boolean;
}

export interface ContactInfo {
  email: string;
  tel: string;
  social: {
    GitHub: SocialLink;
    LinkedIn: SocialLink;
    X: SocialLink;
    Youtube: SocialLink;
    email: SocialLink;
  };
}

export interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface ProjectLink {
  type: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  href: string;
  dates: string;
  status: "active" | "inactive";
  description: string;
  technologies: readonly string[];
  links: readonly {
    type: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
  }[];
  image?: string;
  video?: string;
}

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: SkillCategory[];
  navbar: NavbarItem[];
  contact: ContactInfo;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
}
