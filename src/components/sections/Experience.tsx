import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { experienceEntries } from "@/data/experience";
import { fadeUp, scrollRevealViewport } from "@/utils/animations";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've led architecture and delivery"
      description="Fifteen years across regulated, high-scale industries — telecommunications, banking, and retail."
      tone="raised"
    >
      <div className="relative space-y-10 border-l border-base-500 pl-8 sm:pl-10">
        {experienceEntries.map((entry) => (
          <motion.article
            key={entry.id}
            initial="hidden"
            whileInView="visible"
            viewport={scrollRevealViewport}
            variants={fadeUp}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-base-900 sm:-left-[calc(2.5rem+5px)]" />

            <div className="panel p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-ink-100">{entry.role}</h3>
                  <p className="mt-1 text-ink-400">
                    {entry.organization} <span className="text-ink-500">— {entry.industry}</span>
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-ink-500">
                  <div>{entry.period}</div>
                  <div>{entry.location}</div>
                </div>
              </div>

              <p className="mt-4 text-ink-300 leading-relaxed">{entry.summary}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                    Responsibilities
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {entry.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-300">
                        <span className="mt-1 text-accent">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                    Achievements
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {entry.achievements.map((item) => (
                      <li key={item.id} className="flex gap-2 text-sm text-ink-300">
                        <span className="mt-1 text-signal-green">✓</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                    Architecture
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {entry.architecture.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-300">
                        <span className="mt-1 text-accent">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                    Leadership
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {entry.leadership.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink-300">
                        <span className="mt-1 text-accent">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-base-500 pt-5">
                {entry.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
