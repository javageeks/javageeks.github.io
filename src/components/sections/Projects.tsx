import { motion } from "framer-motion";
import { FiArrowUpRight, FiBox } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { featuredProjects } from "@/data/projects";
import { staggerContainer, scrollRevealViewport } from "@/utils/animations";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work, from frameworks to full platforms"
      description="A mix of open-source tooling and complete business platforms."
      tone="raised"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={staggerContainer()}
        className="grid gap-6 lg:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <Card key={project.id} as="article" className="flex flex-col">
            <div
              className="flex h-36 items-center justify-center rounded-lg border border-dashed border-base-500 bg-base-800/70 text-ink-500"
              role="img"
              aria-label={project.screenshotLabel}
            >
              <FiBox size={28} />
              <span className="ml-2 font-mono text-xs">{project.screenshotLabel}</span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-ink-100">{project.name}</h3>
            <p className="mt-1 text-sm text-accent-soft">{project.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">{project.description}</p>

            <div className="mt-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                Architecture
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-300">
                    <span className="mt-1 text-accent">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {project.links.length > 0 ? (
              <div className="mt-6 flex gap-4 border-t border-base-500 pt-5">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-200 hover:text-accent-soft transition-colors"
                  >
                    {link.label}
                    <FiArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-6 border-t border-base-500 pt-5 text-xs text-ink-500">
                Client engagement — source code not public.
              </div>
            )}
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
