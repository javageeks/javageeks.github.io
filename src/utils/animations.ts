import type { Variants } from "framer-motion";

/** Fade content upward into place — the default scroll-reveal used across sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger container for revealing a list of children in sequence. */
export const staggerContainer = (staggerMs = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerMs,
    },
  },
});

/** Simple fade-in, used for backgrounds and ambient elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

/** Slide in from the left, used for timeline entries. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scrollRevealViewport = { once: true, margin: "-10% 0px -10% 0px" } as const;
