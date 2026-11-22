import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Returns a value that initially equals `target` (so the real number is in the
 * initial HTML — visible to crawlers, screenshots, link previews, and users on
 * slow connections before JavaScript animates). Once the element scrolls into
 * view, it briefly re-animates from 0 → target as a decorative flourish.
 *
 * `prefers-reduced-motion` and the very first render both see the final value.
 */
export function useCountUp(target: number, durationMs = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState<number>(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;

    // Respect the user's motion preference: no count-up animation at all.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setValue(target);
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    let start: number | null = null;
    let frame: number;
    setValue(0);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target * 10) / 10);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, durationMs]);

  return { ref, value };
}
