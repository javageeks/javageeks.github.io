import type { Certification } from "@/types";

/**
 * Sourced exclusively from the certifications listed in the resume.
 * Years are omitted where not specified — nothing has been invented.
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
    name: "Angular",
    issuer: "Coursera",
    credentialLabel: "Course Certificate",
  },
  {
    id: "bootstrap-coursera",
    name: "Bootstrap",
    issuer: "Coursera",
    credentialLabel: "Course Certificate",
  },
];
