import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: "div" | "article";
}

/** Panel with the shared enterprise card treatment: hairline border, subtle elevation, hover lift. */
export function Card({ children, className = "", hoverable = true, as = "div" }: CardProps) {
  const Component = motion[as];

  return (
    <Component
      variants={fadeUp}
      className={`panel p-6 transition-all duration-300 ${
        hoverable ? "hover:border-accent/40 hover:-translate-y-0.5" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
