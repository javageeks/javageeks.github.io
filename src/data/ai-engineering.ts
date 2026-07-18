import type { AiCapability } from "@/types";

export const aiCapabilities: AiCapability[] = [
  {
    id: "claude-code",
    title: "Claude Code in the delivery loop",
    description:
      "Using Claude Code for scaffolding, refactoring, and test generation inside real enterprise codebases — with human review as the final gate on every change.",
  },
  {
    id: "prompt-engineering",
    title: "Prompt engineering as a discipline",
    description:
      "Treating prompts as versioned engineering artifacts: reviewed, tested, and iterated the same way application code is.",
  },
  {
    id: "mcp",
    title: "Model Context Protocol integration",
    description:
      "Connecting internal tools and data sources to AI assistants through MCP servers, so AI-assisted workflows can safely act on real systems.",
  },
  {
    id: "spring-ai",
    title: "Spring AI & LangChain4j",
    description:
      "Building LLM-integrated features directly into Java services — retrieval-augmented generation, structured outputs, and tool-calling patterns.",
  },
  {
    id: "productivity",
    title: "Developer productivity, measured",
    description:
      "Tracking cycle time, review turnaround, and defect rates before and after introducing AI-assisted workflows to validate real impact, not just adoption.",
  },
  {
    id: "knowledge-management",
    title: "AI-assisted knowledge management",
    description:
      "Using AI tooling to keep architecture decision records, runbooks, and onboarding docs current as systems evolve.",
  },
];
