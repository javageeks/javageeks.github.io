import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { aiCapabilities } from "@/data/ai-engineering";
import { staggerContainer, scrollRevealViewport } from "@/utils/animations";

export function AIEngineering() {
  return (
    <Section
      id="ai-engineering"
      eyebrow="AI Engineering"
      title="AI-enabled software engineering, applied responsibly"
      description="AI as an accelerant inside enterprise delivery — not a replacement for architectural judgment or code review."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={staggerContainer()}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {aiCapabilities.map((capability) => (
          <Card key={capability.id} as="article">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
              <FiCpu size={17} />
            </span>
            <h3 className="mt-4 font-semibold text-ink-100">{capability.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{capability.description}</p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
