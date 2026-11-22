export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "resume";
}

export interface ExperienceAchievement {
  id: string;
  text: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  industry: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: ExperienceAchievement[];
  architecture: string[];
  leadership: string[];
  technologies: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  level: number; // 0-100, used for proficiency indicator
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: "backend" | "cloud" | "architecture" | "database" | "ai" | "frontend";
  skills: SkillItem[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  architecture: string[];
  technologies: string[];
  screenshotLabel: string;
  links: ProjectLink[];
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  credentialLabel: string;
  credentialId?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface ArchitecturePrinciple {
  id: string;
  title: string;
  description: string;
}

export interface AiCapability {
  id: string;
  title: string;
  description: string;
}
