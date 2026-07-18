import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "default" | "accent" | "signal";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "border-base-500 text-ink-300 bg-base-700",
  accent: "border-accent/40 text-accent-soft bg-accent/10",
  signal: "border-signal-green/40 text-signal-green bg-signal-green/10",
};

/** Small pill used for technology tags, status labels, and category markers. */
export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
