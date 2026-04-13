import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-[18px]",
  md: "text-[22px]",
  lg: "text-[28px]",
};

export function Logo({ size = "md", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 group ${className}`}
    >
      {/* Icon mark — three connected dots forming a learning path */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        className={`${size === "sm" ? "w-5 h-5" : size === "lg" ? "w-7 h-7" : "w-6 h-6"} text-teal shrink-0`}
      >
        {/* Path connecting three nodes */}
        <path
          d="M6 22 Q14 6 22 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Three learning nodes */}
        <circle cx="6" cy="22" r="3" fill="currentColor" />
        <circle cx="14" cy="10" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="22" cy="14" r="3" fill="currentColor" />
        {/* Subtle revisit arc */}
        <path
          d="M22 14 Q24 20 18 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 2"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* Wordmark */}
      <span className={`font-body font-bold tracking-tight ${sizes[size]}`}>
        <span className="text-slate">go</span>
        <span className="text-teal">Pondr</span>
      </span>
    </Link>
  );
}
