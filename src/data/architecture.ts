import type { ArchitecturePrinciple } from "@/types";

/**
 * Principles reflect patterns applied across telecommunications, banking,
 * financial services, and eCommerce engagements — described at a client-neutral level.
 */
export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    id: "domain-boundaries",
    title: "Design around domain boundaries",
    description:
      "Services are decomposed around business capabilities so each team can own a domain end-to-end and change it independently.",
  },
  {
    id: "resilience-by-default",
    title: "Resilience is a default, not an add-on",
    description:
      "Timeouts, retries, and graceful handling of downstream failures are built into services from the start, informed by real distributed-transaction issues resolved on enterprise platforms.",
  },
  {
    id: "event-driven-first",
    title: "Prefer event-driven integration",
    description:
      "Where synchronous coupling would be brittle, domain events on Kafka decouple producers from consumers — a pattern used across consent-processing and similar pipelines.",
  },
  {
    id: "observability-native",
    title: "Observability as part of the design",
    description:
      "Structured logging and metrics are designed alongside services so production behavior stays understandable at scale.",
  },
  {
    id: "evolvable-systems",
    title: "Design for evolution, not perfection",
    description:
      "Architecture decisions favor incremental migration and reversibility — the same posture that made taking over a business-critical enterprise platform after a full team transition feasible.",
  },
  {
    id: "standards-from-inception",
    title: "Set engineering standards from inception",
    description:
      "New projects are stood up with explicit project structure, engineering standards, and delivery practices — the difference between a project that stays healthy and one that decays.",
  },
];
