import type { ExperienceEntry } from "@/types";

/**
 * Client names are disclosed at the employer-of-record level, consistent with the resume.
 * Internal application names and project codenames are kept out of public descriptions.
 */
export const experienceEntries: ExperienceEntry[] = [
  {
    id: "innova-verizon",
    role: "Lead Consultant",
    organization: "Innova Solutions",
    industry: "Telecommunications — Client: Verizon Communications",
    period: "March 2024 — Present",
    location: "Hyderabad, India",
    summary:
      "Lead Full Stack Developer for an enterprise customer-servicing platform and technical owner of a centralized approvals platform consumed by multiple enterprise applications across the client's customer-servicing estate.",
    responsibilities: [
      "Lead development of enterprise customer-servicing capabilities supporting Retail, Telesales, Indirect Sales, and Customer Care operations for both B2B and B2C customers.",
      "Own the technical direction of the approvals platform with a team of 2–3 engineers, following a complete engineering team transition with no legacy engineering support.",
      "Design and develop REST APIs supporting customer onboarding, account management, billing, upgrades, promotions, device management, and service-transfer workflows.",
      "Partner with Product Owners, Business Analysts, Architects, QA, and business stakeholders across the software development lifecycle.",
    ],
    achievements: [
      { id: "a1", text: "Assumed full technical ownership of a business-critical enterprise approvals platform after complete engineering team turnover and successfully onboarded a newly formed team." },
      { id: "a2", text: "Designed and implemented an internal AI engineering framework with a set of specialized agents supporting incident analysis, code review, pull-request generation, test-case generation, release preparation, onboarding, and API traceability." },
      { id: "a3", text: "Integrated Claude Code with source-control and issue-tracking systems via Model Context Protocol to standardize AI-assisted workflows across the team." },
      { id: "a4", text: "Contributed to an AI-assisted service-workflow initiative — auto-analyzing validation failures and system errors during complex multi-system workflows and surfacing recommendations to customer service representatives." },
      { id: "a5", text: "Optimized backend APIs supporting enterprise customer accounts with large numbers of service lines and resolved complex distributed-transaction issues across downstream systems." },
    ],
    architecture: [
      "Enterprise microservices in Java and Spring Boot, exposing REST APIs to customer-facing channels and integrating with multiple downstream enterprise systems.",
      "Multi-application approvals layer used as a single entry point across several client applications.",
      "MCP-based integration between AI agents and enterprise developer tooling for repeatable, auditable AI-assisted workflows.",
    ],
    leadership: [
      "Onboarded a newly formed engineering team onto a business-critical platform with no prior engineering context available.",
      "Standardized engineering workflows for onboarding, incident analysis, release management, and delivery.",
      "Mentored engineers through code reviews, debugging sessions, technical guidance, and structured knowledge sharing.",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "REST APIs", "React", "Angular", "AWS", "CloudWatch", "Git", "Claude Code", "MCP"],
  },
  {
    id: "capgemini-wellsfargo",
    role: "Manager",
    organization: "Capgemini",
    industry: "Banking & Financial Services — Client: Wells Fargo",
    period: "2021 — 2023",
    location: "Hyderabad, India",
    summary:
      "Led the Capgemini engineering team delivering backend services for the client's consent platform, responsible for customer consent rationalization and marketing compliance.",
    responsibilities: [
      "Led a team of four Capgemini consultants working closely with the client's technical leads.",
      "Established the project from inception, including project structure, engineering standards, development practices, and delivery processes.",
      "Designed and developed Spring Boot microservices, REST APIs, and Kafka integrations supporting consent-processing workflows.",
      "Built MongoDB persistence services and deployed applications on an enterprise cloud platform.",
    ],
    achievements: [
      { id: "a1", text: "Stood up the engagement from inception — project structure, engineering standards, and delivery processes the team continued to operate under." },
      { id: "a2", text: "Delivered core consent-processing microservices supporting customer consent validation across marketing compliance workflows." },
      { id: "a3", text: "Contributed directly to core services while leading the team, participating in requirement analysis, sprint planning, estimation, and architecture discussions." },
    ],
    architecture: [
      "Event-driven consent-processing pipeline built on Spring Boot microservices and Kafka.",
      "MongoDB persistence for consent state, deployed on an enterprise cloud platform.",
      "REST APIs integrating consent services with upstream marketing and compliance systems.",
    ],
    leadership: [
      "Led a team of four Capgemini consultants in close coordination with the client's technical leads.",
      "Mentored engineers through code reviews and technical guidance across Agile ceremonies.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "Enterprise Cloud", "REST APIs", "CI/CD"],
  },
  {
    id: "accion-labs",
    role: "Senior Software Engineer",
    organization: "Accion Labs",
    industry: "Financial Services — Verification Platform",
    period: "2018 — 2021",
    location: "Hyderabad, India",
    summary:
      "Full Stack Engineer on an enterprise verification platform supporting financial institutions with customer identity, address, and document verification during loan processing.",
    responsibilities: [
      "Developed Spring Boot microservices and Angular-based user interfaces supporting document-verification workflows.",
      "Designed and developed REST APIs integrating third-party verification providers.",
      "Worked closely with business teams during requirement analysis and Agile delivery.",
      "Contributed to Proof of Concept initiatives involving OCR and Machine Learning for handwritten-document extraction and mobile image processing.",
    ],
    achievements: [
      { id: "a1", text: "Delivered end-to-end features across backend and Angular UI, expanding from backend-focused work into Full Stack ownership." },
      { id: "a2", text: "Prototyped OCR and Machine Learning approaches for handwritten-document extraction and mobile capture as PoCs feeding into the verification pipeline." },
    ],
    architecture: [
      "Microservices-based verification workflow orchestrating multiple third-party identity, address, and document providers.",
      "Angular UI over Spring Boot REST APIs, backed by Oracle for verification data.",
    ],
    leadership: [
      "Worked directly with business teams during requirement analysis and Agile ceremonies.",
      "Expanded technical breadth from backend engineering into Full Stack delivery.",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "Oracle", "REST APIs", "OCR (PoC)", "Machine Learning (PoC)"],
  },
  {
    id: "capgemini-ecommerce",
    role: "Technical Lead / Senior Software Engineer",
    organization: "Capgemini",
    industry: "eCommerce",
    period: "2015 — 2018",
    location: "Hyderabad, India",
    summary: "Developed enterprise eCommerce applications using Java and Spring technologies.",
    responsibilities: [
      "Developed enterprise eCommerce applications on Java and the Spring ecosystem.",
      "Built REST APIs and Spring Batch solutions.",
      "Worked on application modernization and performance optimization.",
      "Delivered production support and defect resolution.",
    ],
    achievements: [
      { id: "a1", text: "Contributed to modernization and performance optimization across production eCommerce workloads." },
      { id: "a2", text: "Delivered production support and defect resolution alongside feature development." },
    ],
    architecture: [
      "Java- and Spring-based eCommerce services with Spring Batch pipelines for scheduled processing.",
      "REST API layer supporting eCommerce channel integrations.",
    ],
    leadership: ["Contributed as Technical Lead / Senior Engineer across eCommerce delivery."],
    technologies: ["Java", "Spring", "REST APIs", "Spring Batch"],
  },
  {
    id: "wipro-cms",
    role: "Senior Software Engineer",
    organization: "Wipro",
    industry: "Enterprise Content Management",
    period: "2011 — 2015",
    location: "Hyderabad, India",
    summary: "Developed enterprise content management solutions using Java and Spring MVC.",
    responsibilities: [
      "Developed enterprise CMS solutions on Java and Spring MVC.",
      "Worked on SOLR search integration, REST services, and SQL optimization.",
      "Participated in production support, defect resolution, and performance tuning.",
    ],
    achievements: [
      { id: "a1", text: "Contributed to production stability and performance across enterprise content management workloads." },
    ],
    architecture: [
      "Java and Spring MVC based CMS with SOLR-powered search and REST service integrations.",
    ],
    leadership: ["Contributed to enterprise CMS engineering and production operations."],
    technologies: ["Java", "Spring MVC", "SOLR", "REST Services", "SQL"],
  },
];
