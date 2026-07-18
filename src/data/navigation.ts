import type { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "architecture", label: "Architecture", href: "#architecture" },
  { id: "ai-engineering", label: "AI Engineering", href: "#ai-engineering" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@example.com",
    icon: "email",
  },
  {
    id: "resume",
    label: "Download Resume",
    href: "/enterprise-brand-portal/resume.pdf",
    icon: "resume",
  },
];
