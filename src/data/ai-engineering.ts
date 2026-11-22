import type { AiCapability } from "@/types";

/**
 * Describes the AI engineering practice at a client-neutral level.
 * Internal application names and project codenames are kept out.
 */
export const aiCapabilities: AiCapability[] = [
  {
    id: "framework",
    title: "Internal AI engineering framework",
    description:
      "Designed and shipped an internal framework with a set of specialized engineering agents covering incident analysis, code review, pull-request generation, test-case generation, release preparation, and developer onboarding.",
  },
  {
    id: "claude-code",
    title: "Claude Code in enterprise delivery",
    description:
      "Integrated Claude Code into day-to-day delivery on a business-critical enterprise platform, with human review as the final gate on every change.",
  },
  {
    id: "mcp",
    title: "Model Context Protocol integration",
    description:
      "Connected Claude Code to internal developer tooling — source-control and issue-tracking systems — through MCP, so AI-assisted workflows operate on real enterprise systems rather than isolated prompts.",
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
      "Structured engineering knowledge organized around business workflows for onboarding, incident analysis, and knowledge sharing across the team.",
  },
  {
    id: "production-ai",
    title: "AI in production workflows",
    description:
      "Contributed to an AI-assisted service-workflow initiative — auto-analyzing validation failures and system errors during complex multi-system workflows and surfacing recommendations to customer service representatives.",
  },
];
