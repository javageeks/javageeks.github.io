import type { ArchitecturePrinciple } from "@/types";

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    id: "domain-boundaries",
    title: "Design around domain boundaries",
    description:
      "Services are decomposed around business domains, not technical layers, so teams can own a domain end-to-end and change it independently.",
  },
  {
    id: "resilience-by-default",
    title: "Resilience is a default, not an add-on",
    description:
      "Timeouts, retries, circuit breakers, and graceful degradation are built into services from day one, not bolted on after the first outage.",
  },
  {
    id: "event-driven-first",
    title: "Prefer event-driven integration",
    description:
      "Where coupling would otherwise be synchronous and brittle, domain events decouple producers from consumers and improve system-wide resilience.",
  },
  {
    id: "observability-native",
    title: "Observability is part of the design",
    description:
      "Structured logging, metrics, and tracing are designed alongside the service, not retrofitted, so production behavior is understandable by default.",
  },
  {
    id: "evolvable-systems",
    title: "Design for evolution, not perfection",
    description:
      "Architecture decisions favor reversibility and incremental migration paths — strangler-fig patterns over big-bang rewrites.",
  },
  {
    id: "security-by-design",
    title: "Security and compliance from the start",
    description:
      "Access control, data handling, and audit requirements are treated as first-class architectural constraints, especially in regulated domains.",
  },
];
