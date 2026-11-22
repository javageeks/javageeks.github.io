import type { StatItem } from "@/types";

/**
 * Stats are values that are safe to share publicly and don't count
 * artifacts of specific client engagements.
 */
export const aboutStats: StatItem[] = [
  { id: "years", label: "Years of Experience", value: 15, suffix: "" },
  { id: "industries", label: "Enterprise Domains", value: 4, suffix: "" },
  { id: "employers", label: "Employers", value: 5, suffix: "" },
  { id: "practice-areas", label: "Core Practice Areas", value: 5, suffix: "" },
];

export const aboutParagraphs: string[] = [
  "Technical Lead with nearly 15 years designing, developing, and leading enterprise software platforms across telecommunications, banking, financial services, and eCommerce. Deep experience in Java, Spring Boot, microservices, distributed systems, and cloud technologies, with a Full Stack background covering React and Angular.",
  "The work I take on is business-critical. I have assumed full technical ownership of an enterprise platform at a Fortune 100 telecommunications client after a complete engineering team transition, established a consent-processing platform for a leading global financial institution from inception with a team of four, and consistently stood up projects with the engineering standards, structure, and delivery practices they need to hold up over time.",
  "More recently, I've focused on practical AI adoption inside enterprise engineering — an internal AI engineering framework built on Claude Code, Model Context Protocol, and specialized agents that supports developer onboarding, incident analysis, release preparation, and software delivery productivity for the teams I work with.",
];

export const aboutFocusAreas: string[] = [
  "Enterprise Java",
  "Distributed Systems",
  "Cloud Architecture",
  "Technical Leadership",
  "AI Engineering",
];
