import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className = "", narrow }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-8 ${
        narrow ? "max-w-[760px]" : "max-w-[1280px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
