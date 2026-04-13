import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "subject";
  subjectSoftClass?: string;
  subjectInkClass?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  subjectSoftClass,
  subjectInkClass,
  hover,
}: CardProps) {
  const base = "rounded-[20px] transition-all duration-200";

  const variants = {
    default: `bg-paper border border-sand p-5 md:p-7 ${
      hover ? "hover:shadow-sm hover:-translate-y-0.5" : ""
    }`,
    elevated: `bg-paper border border-sand p-5 md:p-7 shadow-sm ${
      hover ? "hover:shadow-md hover:-translate-y-0.5" : ""
    }`,
    subject: `${subjectSoftClass ?? "bg-paper-alt"} ${
      subjectInkClass ?? ""
    } border border-sand/50 p-5 md:p-7 ${
      hover ? "hover:shadow-sm hover:-translate-y-0.5" : ""
    }`,
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
