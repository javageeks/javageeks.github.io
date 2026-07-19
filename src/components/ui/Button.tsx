import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonProps =
  | (CommonProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
      })
  | (CommonProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
      });

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

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";

  const classes = `${baseClasses} ${variantClasses[variant]} ${props.className ?? ""}`;

  if (props.as === "a") {
    return (
      <a
        className={classes}
        href={props.href}
        target={props.target}
        rel={props.rel}
        download={props.download}
        onClick={props.onClick}
      >
        {props.icon}
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.icon}
      {props.children}
    </button>
  );
}

export default Button;