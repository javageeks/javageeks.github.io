import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Core enterprise application development and API design.",
    icon: "backend",
    skills: [
      { id: "java", name: "Java", level: 95 },
      { id: "spring-boot", name: "Spring Boot", level: 95 },
      { id: "spring-mvc", name: "Spring MVC", level: 90 },
      { id: "hibernate", name: "Hibernate / JPA", level: 88 },
      { id: "rest-apis", name: "REST APIs", level: 92 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Platform",
    description: "Deploying and operating enterprise workloads at scale.",
    icon: "cloud",
    skills: [
      { id: "aws", name: "AWS", level: 88 },
      { id: "containers", name: "Docker & Kubernetes", level: 82 },
      { id: "cicd", name: "CI/CD Pipelines", level: 90 },
      { id: "observability", name: "Observability & SRE Practices", level: 80 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Systems",
    description: "Designing resilient, distributed platforms.",
    icon: "architecture",
    skills: [
      { id: "microservices", name: "Microservices", level: 93 },
      { id: "distributed-systems", name: "Distributed Systems", level: 90 },
      { id: "kafka", name: "Apache Kafka", level: 86 },
      { id: "event-driven", name: "Event-Driven Architecture", level: 88 },
      { id: "system-design", name: "System Design", level: 92 },
    ],
  },
  {
    id: "databases",
    title: "Data & Persistence",
    description: "Relational and non-relational data platforms.",
    icon: "database",
    skills: [
      { id: "oracle", name: "Oracle", level: 85 },
      { id: "mongodb", name: "MongoDB", level: 82 },
      { id: "postgresql", name: "PostgreSQL", level: 84 },
      { id: "caching", name: "Distributed Caching", level: 80 },
    ],
  },
  {
    id: "ai",
    title: "AI-Enabled Engineering",
    description: "Applying AI to accelerate and elevate software delivery.",
    icon: "ai",
    skills: [
      { id: "claude-code", name: "Claude Code", level: 90 },
      { id: "spring-ai", name: "Spring AI", level: 84 },
      { id: "langchain4j", name: "LangChain4j", level: 80 },
      { id: "mcp", name: "Model Context Protocol", level: 82 },
      { id: "prompt-engineering", name: "Prompt Engineering", level: 90 },
    ],
  },
];
