import type { SkillCategory } from "@/types";

/**
 * Skills grouped to mirror the technical skills section of the resume.
 * All entries below appear in Shaik Khaja Hussain's resume — nothing has been added.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Enterprise Java and Spring — the core of nearly 15 years of delivery.",
    icon: "backend",
    skills: [
      { id: "java", name: "Java", level: 95 },
      { id: "spring-boot", name: "Spring Boot", level: 95 },
      { id: "spring-mvc", name: "Spring MVC", level: 90 },
      { id: "spring-data-jpa", name: "Spring Data JPA", level: 88 },
      { id: "hibernate", name: "Hibernate", level: 88 },
      { id: "rest-apis", name: "REST APIs", level: 92 },
      { id: "spring-security", name: "Spring Security", level: 82 },
    ],
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems & Integration",
    description: "Microservices, event-driven pipelines, and cross-system integration.",
    icon: "architecture",
    skills: [
      { id: "microservices", name: "Microservices", level: 92 },
      { id: "kafka", name: "Apache Kafka", level: 85 },
      { id: "event-driven", name: "Event-Driven Architecture", level: 85 },
      { id: "rest-integration", name: "REST Integration", level: 90 },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Deployment platforms and delivery pipelines for enterprise workloads.",
    icon: "cloud",
    skills: [
      { id: "aws", name: "AWS (EC2, S3, CloudWatch)", level: 82 },
      { id: "pcf", name: "Pivotal Cloud Foundry", level: 80 },
      { id: "docker", name: "Docker", level: 80 },
      { id: "jenkins", name: "Jenkins", level: 82 },
      { id: "cicd", name: "CI/CD", level: 85 },
      { id: "git-github", name: "Git / GitHub", level: 92 },
      { id: "sonarqube", name: "SonarQube", level: 78 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Full Stack delivery — React and Angular across enterprise applications.",
    icon: "frontend",
    skills: [
      { id: "react", name: "React", level: 82 },
      { id: "angular", name: "Angular", level: 82 },
      { id: "typescript", name: "TypeScript", level: 80 },
      { id: "javascript", name: "JavaScript", level: 85 },
      { id: "html-css", name: "HTML5 / CSS3", level: 82 },
      { id: "bootstrap", name: "Bootstrap", level: 80 },
    ],
  },
  {
    id: "databases",
    title: "Data & Persistence",
    description: "Relational and document data platforms in enterprise systems.",
    icon: "database",
    skills: [
      { id: "oracle", name: "Oracle", level: 85 },
      { id: "mongodb", name: "MongoDB", level: 82 },
      { id: "sql", name: "SQL", level: 88 },
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    description: "AI-assisted software engineering integrated into enterprise delivery.",
    icon: "ai",
    skills: [
      { id: "claude-code", name: "Claude Code", level: 90 },
      { id: "mcp", name: "Model Context Protocol (MCP)", level: 88 },
      { id: "spring-ai", name: "Spring AI", level: 75 },
      { id: "langchain4j", name: "LangChain4j", level: 72 },
      { id: "prompt-engineering", name: "Prompt Engineering", level: 88 },
      { id: "agentic-ai", name: "Agentic AI", level: 82 },
    ],
  },
];
