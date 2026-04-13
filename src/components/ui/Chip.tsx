import { type ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  variant?: "default" | "subject" | "teal" | "terracotta";
  subjectSoftClass?: string;
  subjectInkClass?: string;
  icon?: ReactNode;
  className?: string;
}

export function Chip({
  children,
  variant = "default",
  subjectSoftClass,
  subjectInkClass,
  icon,
  className = "",
}: ChipProps) {
  const variants = {
    default: "bg-linen text-slate",
    subject: `${subjectSoftClass ?? "bg-paper-alt"} ${subjectInkClass ?? "text-slate"}`,
    teal: "bg-teal-soft text-teal",
    terracotta: "bg-terracotta-soft text-terracotta",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full px-3 py-1.5
        text-[13px] font-semibold leading-tight
        ${variants[variant]}
        ${className}
      `}
    >
      {icon}
      {children}
    </span>
  );
}
