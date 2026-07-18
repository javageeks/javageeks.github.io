import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, scrollRevealViewport } from "@/utils/animations";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "raised";
}

/** Consistent section wrapper: id anchor, eyebrow label, heading, and reveal animation. */
export function Section({ id, eyebrow, title, description, children, tone = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-28 ${tone === "raised" ? "bg-base-800/50" : ""}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealViewport}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={`${id}-heading`} className="section-heading mt-3">
            {title}
          </h2>
          {description && <p className="mt-4 text-ink-400 leading-relaxed">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
