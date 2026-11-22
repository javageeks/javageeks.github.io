import type { FeaturedProject } from "@/types";

/**
 * Only AI Engineering Framework and A1 Paints have public repositories.
 * Client platform work (telecommunications customer servicing, banking consent processing)
 * is described at a level that does not expose internal application names or codenames.
 */
export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-engineering-framework",
    name: "AI Engineering Framework",
    tagline: "AI-assisted engineering workflows for enterprise software delivery.",
    description:
      "An internal engineering framework built on Claude Code, Model Context Protocol, reusable skills, and a set of specialized agents. Standardizes AI-assisted workflows across incident analysis, code review, pull-request generation, test-case generation, release preparation, developer onboarding, feature-flag auditing, status reporting, and API traceability.",
    architecture: [
      "Claude Code integrated with source-control and issue-tracking systems via Model Context Protocol.",
      "Structured engineering knowledge organized around business workflows for onboarding and knowledge sharing.",
      "Specialized agents targeting distinct stages of the software development lifecycle.",
    ],
    technologies: ["Claude Code", "MCP", "Prompt Engineering"],
    screenshotLabel: "AI Engineering Framework — agent architecture",
    links: [
      { label: "View on GitHub", href: "https://github.com/javageeks" },
    ],
    featured: true,
  },
  {
    id: "enterprise-approval-platform",
    name: "Enterprise Approval Platform",
    tagline: "Centralized approvals platform for a Fortune 100 telecommunications client.",
    description:
      "A centralized approvals platform used by multiple enterprise applications across the client's customer-servicing estate for discount, payment, pricing-exception, offer, and terms-and-conditions approvals. Assumed full technical ownership after a complete engineering team transition with no legacy engineering support, and led ongoing development, production support, enhancements, and delivery with a newly formed team.",
    architecture: [
      "Approval workflow layer integrating with multiple upstream enterprise applications.",
      "Java and Spring Boot microservices exposing REST APIs to consuming systems.",
      "Cloud deployment with centralized logging and metrics for production operations.",
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "Cloud", "Observability"],
    screenshotLabel: "Enterprise approval workflow — high-level overview",
    links: [],
    featured: true,
  },
  {
    id: "consent-platform",
    name: "Consent Platform",
    tagline: "Customer consent rationalization and marketing compliance for a global bank.",
    description:
      "Backend platform responsible for customer consent rationalization and marketing compliance at a leading global financial institution. Led the engineering team of four consultants delivering Spring Boot microservices, event-driven integrations on Kafka, and MongoDB persistence services, deployed on an enterprise cloud platform. Established the project from inception, including project structure, engineering standards, and delivery processes.",
    architecture: [
      "Event-driven consent processing built on Spring Boot microservices and Kafka.",
      "MongoDB persistence for consent state.",
      "REST APIs integrating consent services with upstream marketing and compliance systems, deployed on enterprise cloud infrastructure.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "Enterprise Cloud", "REST APIs"],
    screenshotLabel: "Consent platform — event-driven processing pipeline",
    links: [],
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
