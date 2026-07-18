import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { architecturePrinciples } from "@/data/architecture";
import { staggerContainer, fadeUp, scrollRevealViewport } from "@/utils/animations";

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="Architecture"
      title="Principles that hold up under real production load"
      description="A consistent point of view applied across every platform I've architected."
      tone="raised"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={staggerContainer()}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {architecturePrinciples.map((principle, index) => (
          <Card key={principle.id} as="article">
            <span className="font-mono text-xs text-ink-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-semibold text-ink-100">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{principle.description}</p>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={scrollRevealViewport}
        variants={fadeUp}
        className="panel mt-8 overflow-hidden"
      >
        <div className="border-b border-base-500 bg-base-800/60 px-5 py-3 font-mono text-xs text-ink-500">
          reference-architecture.diagram
        </div>
        <div className="overflow-x-auto p-6">
          <div className="flex min-w-[640px] items-center justify-between gap-3 font-mono text-xs">
            {["Channels", "API Gateway", "Domain Services", "Event Bus", "Data Stores"].map(
              (node, i, arr) => (
                <div key={node} className="flex items-center gap-3">
                  <div className="rounded-lg border border-base-500 bg-base-700 px-4 py-3 text-center text-ink-200 whitespace-nowrap">
                    {node}
                  </div>
                  {i < arr.length - 1 && <span className="text-accent">→</span>}
                </div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
