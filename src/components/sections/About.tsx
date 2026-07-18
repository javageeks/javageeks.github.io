import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";
import { aboutStats, aboutParagraphs, aboutFocusAreas } from "@/data/about";
import { fadeUp, staggerContainer, scrollRevealViewport } from "@/utils/animations";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering leadership grounded in distributed systems"
      description="A track record built on enterprise-scale platforms, not side projects."
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={staggerContainer()}
          className="space-y-5"
        >
          {aboutParagraphs.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp} className="text-ink-300 leading-relaxed">
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
            {aboutFocusAreas.map((area) => (
              <Badge key={area} tone="accent">
                {area}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={staggerContainer()}
          className="grid grid-cols-2 gap-4"
        >
          {aboutStats.map((stat) => (
            <motion.div key={stat.id} variants={fadeUp}>
              <StatCounter stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
