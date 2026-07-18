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
    href: "https://github.com/javageeks",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khajahussainshaik/",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hussainshaik7913@gmail.com",
    icon: "email",
  },
  {
    id: "resume",
    label: "Download Resume",
    href: "/ShaikKhajaHussain.pdf",
    icon: "resume",
  },
];
