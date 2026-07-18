import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  children?: ReactNode;
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

type ButtonAsButton =
  BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor =
  BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    icon,
    children,
    className = "",
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.as === "a") {
	const { as: _as, ...anchorProps } = props;
    void _as;

    return (
      <a className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props;
  void _as;

  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}