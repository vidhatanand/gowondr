import Link from "next/link";
import { type ReactNode } from "react";

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function InternalLink({
  href,
  children,
  className = "",
}: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={`text-teal underline underline-offset-2 decoration-teal/30 hover:decoration-teal/70 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
