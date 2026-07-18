/**
 * Central site configuration — deployment URL, base path, and metadata
 * referenced by components that need to build absolute links (e.g. sharing, canonical URLs).
 */
export const siteConfig = {
  siteName: "Enterprise Brand Portal",
  siteUrl: "https://example.github.io/enterprise-brand-portal/",
  basePath: "/enterprise-brand-portal/",
  title: "Enterprise Technical Lead | Enterprise Java, Distributed Systems & AI Engineering",
  description:
    "Portfolio of an Enterprise Technical Lead with 15 years across telecom, banking and retail — specializing in Enterprise Java, distributed systems, cloud architecture, and AI-enabled software engineering.",
} as const;
