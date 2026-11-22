import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { certifications } from "@/data/certifications";
import { staggerContainer, scrollRevealViewport } from "@/utils/animations";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Courses"
      title="Certifications and course completions"
      description="A postgraduate certification plus completed Coursera and Anthropic courses."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={staggerContainer()}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {certifications.map((cert) => (
          <Card key={cert.id} as="article" className="text-center">
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-soft">
              <FiAward size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-ink-100 leading-snug">{cert.name}</h3>
            <p className="mt-1 text-xs text-ink-400">{cert.issuer}</p>
            {cert.year ? (
              <p className="mt-2 font-mono text-xs text-ink-500">{cert.year}</p>
            ) : (
              <p className="mt-2 font-mono text-xs text-ink-500">{cert.credentialLabel}</p>
            )}
            {cert.credentialId && (
              <p className="mt-1 font-mono text-[11px] text-ink-500" title="Credential ID">
                ID {cert.credentialId}
              </p>
            )}
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
