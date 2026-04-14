import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "warm" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-paper hover:bg-teal/90 shadow-xs hover:shadow-sm",
  warm:
    "bg-terracotta text-paper hover:bg-terracotta/90 shadow-xs hover:shadow-sm",
  secondary:
    "bg-paper text-ink border border-sand hover:border-clay hover:shadow-xs",
  ghost:
    "text-teal hover:bg-teal-soft",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-11 md:h-12 px-4 md:px-5 text-[14px] md:text-[15px]",
  lg: "h-12 md:h-14 px-5 md:px-7 text-[15px] md:text-[17px]",
};

export function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  icon,
  href,
  ...rest
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2
    font-body font-semibold
    rounded-[16px]
    transition-all duration-200 ease-out
    cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
