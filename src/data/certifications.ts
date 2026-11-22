import type { Certification } from "@/types";

/**
 * Complete set of certifications and course completions:
 *   - IIIT Bangalore postgraduate certification
 *   - Coursera course completions (Angular, Bootstrap 4) with credential IDs
 *   - Anthropic course completions (MCP, Subagents, Agent Skills, Claude API)
 * Credential IDs are included where issued; years are included where available.
 */
export const certifications: Certification[] = [
  {
    id: "pg-blockchain-iiit-b",
    name: "PG Certification in Blockchain",
    issuer: "IIIT Bangalore",
    credentialLabel: "Postgraduate Certification",
  },
  {
    id: "angular-coursera",
    name: "Front-End JavaScript Frameworks: Angular",
    issuer: "Coursera",
    year: "2019",
    credentialLabel: "Course Certificate",
    credentialId: "6CM7G5PWSTUF",
  },
  {
    id: "bootstrap-coursera",
    name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera",
    year: "2019",
    credentialLabel: "Course Certificate",
    credentialId: "SF4V574LXKGW",
  },
  {
    id: "mcp-advanced-anthropic",
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    year: "2026",
    credentialLabel: "Course Certificate",
    credentialId: "t7iwhipgp2qc",
  },
  {
    id: "mcp-intro-anthropic",
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    year: "2026",
    credentialLabel: "Course Certificate",
  },
  {
    id: "subagents-anthropic",
    name: "Certificate of Completion: Introduction to Subagents",
    issuer: "Anthropic",
    year: "2026",
    credentialLabel: "Course Certificate",
  },
  {
    id: "agent-skills-anthropic",
    name: "Certificate of Completion: Introduction to Agent Skills",
    issuer: "Anthropic",
    year: "2026",
    credentialLabel: "Course Certificate",
  },
  {
    id: "claude-api-anthropic",
    name: "Building with the Claude API",
    issuer: "Anthropic",
    year: "2026",
    credentialLabel: "Course Certificate",
    credentialId: "hxqv6h9rhhmp",
  },
];
