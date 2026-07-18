import type { AiCapability } from "@/types";

/**
 * Each capability below reflects work described in Shaik Khaja Hussain's resume:
 * the internal AI Engineering Framework, the specialized agents, the MCP integrations,
 * and the AI-assisted Transfer Your Service MVP at Verizon.
 */
export const aiCapabilities: AiCapability[] = [
  {
    id: "framework",
    title: "Internal AI Engineering Framework",
    description:
      "Designed and shipped an internal framework with 15+ specialized engineering agents for the Verizon Point of Contact Portal team — covering incident analysis, code review, PR generation, test-case generation, release preparation, and developer onboarding.",
  },
  {
    id: "claude-code",
    title: "Claude Code in enterprise delivery",
    description:
      "Integrated Claude Code into day-to-day delivery on a business-critical Verizon platform, with human review as the final gate on every change.",
  },
  {
    id: "mcp",
    title: "Model Context Protocol integration",
    description:
      "Connected Claude Code to internal developer tooling — GitHub and Jira — through MCP, so AI-assisted workflows operate on real enterprise systems rather than isolated prompts.",
  },
  {
    id: "specialized-agents",
    title: "Specialized agents for the SDLC",
    description:
      "Built agents targeting distinct SDLC stages — story analysis, feature-flag auditing, API traceability, and status reporting — rather than a single general-purpose assistant.",
  },
  {
    id: "knowledge",
    title: "AI-assisted knowledge management",
    description:
      "Structured engineering knowledge covering 11 business workflows for onboarding, incident analysis, and knowledge sharing across the team.",
  },
  {
    id: "production-ai",
    title: "AI in production workflows",
    description:
      "Contributed to the MVP of Verizon's AI-assisted Transfer Your Service initiative — auto-analyzing validation failures and system errors during complex service-transfer workflows and surfacing recommendations to customer service representatives.",
  },
];
