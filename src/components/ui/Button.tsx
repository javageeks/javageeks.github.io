import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dim shadow-accent-glow border border-transparent",
  secondary:
    "bg-base-700 text-ink-100 hover:bg-base-600 border border-base-500",
  ghost:
    "bg-transparent text-ink-300 hover:text-ink-100 hover:bg-base-700 border border-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none";

interface ButtonAsButton extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
}

interface ButtonAsAnchor extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Shared call-to-action control, rendered as either a <button> or an <a>. */
export function Button(props: ButtonProps) {
  const { variant = "primary", icon, children, className = "", ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {icon}
      {children}
    </button>
  );
}
