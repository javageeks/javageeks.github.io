import type { FeaturedProject } from "@/types";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-engineering-framework",
    name: "AI Engineering Framework",
    tagline: "A reusable framework for AI-assisted enterprise software delivery.",
    description:
      "An opinionated framework and set of conventions for integrating Claude Code, MCP servers, and prompt libraries into enterprise Java delivery pipelines — covering code review, documentation generation, and test scaffolding.",
    architecture: [
      "Pluggable MCP server registry for internal tooling.",
      "Prompt library versioned alongside application code.",
      "CI-integrated review agent for pull request triage.",
    ],
    technologies: ["Claude Code", "MCP", "Spring Boot", "GitHub Actions"],
    screenshotLabel: "AI Engineering Framework — architecture overview",
    links: [
      { label: "View on GitHub", href: "https://github.com/your-username/ai-engineering-framework" },
    ],
    featured: true,
  },
  {
    id: "enterprise-spring-boot-template",
    name: "Enterprise Spring Boot Template",
    tagline: "A production-grade starter template for enterprise Java services.",
    description:
      "A batteries-included Spring Boot template encoding enterprise conventions: layered architecture, centralized exception handling, observability, security defaults, and CI/CD pipelines ready for regulated environments.",
    architecture: [
      "Layered hexagonal architecture with clear domain boundaries.",
      "Built-in observability via structured logging and metrics.",
      "Security defaults aligned with common compliance baselines.",
    ],
    technologies: ["Java", "Spring Boot", "Docker", "GitHub Actions"],
    screenshotLabel: "Enterprise Spring Boot Template — module layout",
    links: [
      { label: "View on GitHub", href: "https://github.com/your-username/enterprise-spring-boot-template" },
    ],
    featured: true,
  },
  {
    id: "system-design-playbook",
    name: "System Design Playbook",
    tagline: "A field guide to designing resilient distributed systems.",
    description:
      "A structured playbook covering architecture decision records, failure-mode analysis, capacity planning, and trade-off frameworks used to guide enterprise system design reviews.",
    architecture: [
      "Template library for architecture decision records (ADRs).",
      "Checklists for capacity planning and failure-mode analysis.",
      "Reference diagrams for common distributed system patterns.",
    ],
    technologies: ["Markdown", "Diagrams as Code", "ADRs"],
    screenshotLabel: "System Design Playbook — decision record template",
    links: [
      { label: "View on GitHub", href: "https://github.com/your-username/system-design-playbook" },
    ],
    featured: true,
  },
  {
    id: "a1-paints-platform",
    name: "A1 Paints Business Management Platform",
    tagline: "An end-to-end platform for a multi-location retail paint business.",
    description:
      "A business management platform covering inventory, point-of-sale, supplier orders, and reporting for a multi-location retail operation, built with an enterprise-grade Java backend and a modern web frontend.",
    architecture: [
      "Modular monolith with clear domain boundaries, ready to extract services as scale demands.",
      "Role-based access control across store, warehouse, and admin roles.",
      "Scheduled reporting pipeline for daily and monthly business summaries.",
    ],
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    screenshotLabel: "A1 Paints Platform — inventory dashboard",
    links: [
      { label: "View on GitHub", href: "https://github.com/your-username/a1-paints-platform" },
    ],
    featured: true,
  },
];
