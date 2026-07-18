import type { FeaturedProject } from "@/types";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-engineering-framework",
    name: "AI Engineering Framework",
    tagline: "AI-assisted engineering platform for enterprise software delivery.",
    description:
      "An internal AI Engineering Framework designed for the Verizon Point of Contact Portal team, built on Claude Code, MCP integrations, reusable skills, and 15+ specialized engineering agents. Standardizes AI-assisted workflows across incident analysis, code review, PR generation, test-case generation, release preparation, developer onboarding, feature-flag auditing, status reporting, and API traceability.",
    architecture: [
      "Claude Code integrated with GitHub and Jira via Model Context Protocol.",
      "Structured engineering knowledge covering 11 business workflows for onboarding and knowledge sharing.",
      "Specialized AI agents targeting distinct stages of the software development lifecycle.",
    ],
    technologies: ["Claude Code", "MCP", "Prompt Engineering", "GitHub", "Jira"],
    screenshotLabel: "AI Engineering Framework — agent architecture",
    links: [
      { label: "View on GitHub", href: "https://github.com/javageeks" },
    ],
    featured: true,
  },
  {
    id: "verizon-point-of-contact-portal",
    name: "Verizon Point of Contact Portal",
    tagline: "Enterprise approval platform used across multiple Verizon applications.",
    description:
      "Centralized approval platform used by B360 Account Inquiry, MyBiz, ACSS, and other Verizon systems for discount approvals, payment approvals, pricing exceptions, offers, and Terms & Conditions. Assumed full technical ownership after a complete engineering team transition and led ongoing development, production support, enhancements, and delivery with a newly formed team of 2–3 engineers.",
    architecture: [
      "Multi-application approval workflow layer integrating with multiple upstream Verizon applications.",
      "Java / Spring Boot microservices exposing REST APIs to consuming enterprise systems.",
      "AWS-based deployment with CloudWatch observability.",
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "AWS", "CloudWatch"],
    screenshotLabel: "Point of Contact Portal — approval workflow overview",
    links: [
      { label: "View on GitHub", href: "https://github.com/javageeks" },
    ],
    featured: true,
  },
  {
    id: "wells-fargo-consent-engine",
    name: "Wells Fargo Consent Engine",
    tagline: "Consent rationalization and marketing compliance platform.",
    description:
      "Backend platform responsible for customer consent rationalization and marketing compliance at Wells Fargo. Led the Capgemini engineering team of four consultants delivering Spring Boot microservices, Kafka integrations, and MongoDB persistence services, deployed on Pivotal Cloud Foundry. Established the project from inception, including project structure, engineering standards, and delivery processes.",
    architecture: [
      "Event-driven consent processing built on Spring Boot microservices and Kafka.",
      "MongoDB persistence for consent state.",
      "REST APIs integrating consent services with upstream marketing and compliance systems, deployed on PCF.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "PCF", "REST APIs"],
    screenshotLabel: "Consent Engine — event-driven processing pipeline",
    links: [
      { label: "View on GitHub", href: "https://github.com/javageeks" },
    ],
    featured: true,
  },
  {
    id: "a1-paints",
    name: "A1 Paints",
    tagline: "Business management platform for a paint retail business.",
    description:
      "End-to-end business management solution designed and developed for a paint retail business, supporting inventory management, customer transactions, reporting, and daily business operations. Successfully deployed for a real business user and currently in active production, with plans to evolve into a SaaS product.",
    architecture: [
      "Inventory, transactions, and reporting modules organized around a single business domain.",
      "Deployed to a real business user, currently in active production use.",
      "Designed to evolve into a multi-tenant SaaS offering over time.",
    ],
    technologies: ["Java", "Spring Boot", "REST APIs"],
    screenshotLabel: "A1 Paints — inventory & transactions dashboard",
    links: [
      { label: "View on GitHub", href: "https://github.com/javageeks" },
    ],
    featured: true,
  },
];
