import { motion } from "framer-motion";
import { FiServer, FiCloud, FiGitMerge, FiDatabase, FiCpu } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";
import { staggerContainer, scrollRevealViewport } from "@/utils/animations";
import type { SkillCategory } from "@/types";

const iconMap: Record<SkillCategory["icon"], typeof FiServer> = {
  backend: FiServer,
  cloud: FiCloud,
  architecture: FiGitMerge,
  database: FiDatabase,
  ai: FiCpu,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit built for enterprise-grade delivery"
      description="Depth in backend engineering and distributed systems, extended by AI-enabled workflows."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={staggerContainer()}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <Card key={category.id} as="article" className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-soft">
                  <Icon size={17} />
                </span>
                <h3 className="font-semibold text-ink-100">{category.title}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-400">{category.description}</p>

              <ul className="mt-5 space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.id}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink-300">{skill.name}</span>
                      <span className="font-mono text-xs text-ink-500">{skill.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1 rounded-full bg-base-600" aria-hidden="true">
                      <div
                        className="h-1 rounded-full bg-accent"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </motion.div>
    </Section>
  );
}
