import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionBg = "paper" | "paper-alt" | "linen" | "teal" | "terracotta-soft";

interface SectionShellProps {
  children: ReactNode;
  bg?: SectionBg;
  id?: string;
  className?: string;
  narrow?: boolean;
}

const bgStyles: Record<SectionBg, string> = {
  paper: "bg-paper",
  "paper-alt": "bg-paper-alt",
  linen: "bg-linen",
  teal: "bg-teal text-paper",
  "terracotta-soft": "bg-terracotta-soft",
};

export function SectionShell({
  children,
  bg = "paper",
  id,
  className = "",
  narrow,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`py-14 md:py-18 lg:py-24 ${bgStyles[bg]} ${className}`}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
