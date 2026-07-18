import type { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "telecom-lead",
    role: "Enterprise Technical Lead",
    organization: "Fortune 100 Telecommunications Company",
    industry: "Telecommunications",
    period: "2021 — Present",
    location: "Remote / Hybrid",
    summary:
      "Leading architecture and delivery for customer-facing billing and provisioning platforms serving tens of millions of subscribers.",
    responsibilities: [
      "Own end-to-end technical architecture for billing, provisioning, and order-management platforms.",
      "Set engineering standards across four cross-functional squads and mentor senior engineers.",
      "Partner with product and platform leadership to translate business roadmaps into technical execution plans.",
      "Drive adoption of AI-assisted engineering workflows to raise delivery velocity without compromising quality.",
    ],
    achievements: [
      { id: "a1", text: "Re-platformed a monolithic billing engine into event-driven microservices, cutting change lead time from weeks to days." },
      { id: "a2", text: "Reduced production incident volume by 42% through improved observability and architectural guardrails." },
      { id: "a3", text: "Introduced Claude Code and Spring AI into the delivery workflow, reducing average PR cycle time by 30%." },
      { id: "a4", text: "Established a shared platform library adopted by 12+ downstream teams, eliminating duplicated integration code." },
    ],
    architecture: [
      "Event-driven microservices with Kafka as the system of record for domain events.",
      "API gateway and BFF layer decoupling channel teams from core billing services.",
      "Strangler-fig migration strategy to retire legacy monolith components incrementally.",
    ],
    leadership: [
      "Mentored 6 engineers into senior and lead roles.",
      "Chaired the architecture review board for platform modernization initiatives.",
      "Led quarterly technical roadmap planning with product and infrastructure stakeholders.",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "AWS", "Oracle", "MongoDB", "Kubernetes", "Claude Code"],
  },
  {
    id: "financial-institution",
    role: "Senior Solutions Architect",
    organization: "Leading Global Financial Institution",
    industry: "Banking & Financial Services",
    period: "2017 — 2021",
    location: "On-site / Hybrid",
    summary:
      "Architected core banking integration services connecting legacy mainframe systems with modern digital channels.",
    responsibilities: [
      "Designed integration architecture between legacy core banking systems and new digital banking channels.",
      "Led security and compliance reviews for services handling regulated financial data.",
      "Defined coding standards, API contracts, and testing strategy across a 20-engineer program.",
      "Presented architecture decisions to senior technology leadership and risk committees.",
    ],
    achievements: [
      { id: "a1", text: "Delivered a real-time payments integration layer processing 2M+ transactions daily with 99.99% availability." },
      { id: "a2", text: "Led migration from a batch-oriented settlement process to a near-real-time event pipeline." },
      { id: "a3", text: "Reduced integration onboarding time for new digital channel partners from 8 weeks to 10 days." },
    ],
    architecture: [
      "Anti-corruption layer isolating modern services from mainframe data models.",
      "Idempotent, exactly-once event processing for payment and settlement workflows.",
      "Zero-downtime deployment pipeline for regulated production environments.",
    ],
    leadership: [
      "Acted as technical authority for architecture governance across three delivery teams.",
      "Ran onboarding and enablement sessions for engineers new to distributed systems design.",
    ],
    technologies: ["Java", "Spring MVC", "Hibernate", "Oracle", "REST APIs", "AWS"],
  },
  {
    id: "consulting",
    role: "Technical Consultant, Enterprise Systems",
    organization: "Global Technology Consulting Company",
    industry: "Retail & Consulting",
    period: "2010 — 2017",
    location: "Client Sites / Remote",
    summary:
      "Delivered enterprise Java platforms for retail clients, spanning order management, inventory, and point-of-sale integration.",
    responsibilities: [
      "Built and maintained enterprise Java applications for large retail clients across multiple engagements.",
      "Translated client business requirements into scalable technical designs.",
      "Provided production support and performance tuning for high-traffic retail systems during peak seasons.",
    ],
    achievements: [
      { id: "a1", text: "Optimized order-processing services to handle 5x peak holiday traffic without additional infrastructure spend." },
      { id: "a2", text: "Delivered a reusable inventory-sync framework adopted across 4 client engagements." },
    ],
    architecture: [
      "Service-oriented integration between point-of-sale, inventory, and order-management systems.",
      "Caching strategy to absorb seasonal read-heavy traffic spikes.",
    ],
    leadership: [
      "Led a team of 5 engineers across two concurrent client engagements.",
      "Mentored junior consultants on enterprise Java best practices.",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Oracle"],
  },
];
