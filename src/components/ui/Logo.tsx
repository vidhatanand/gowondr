import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const heights = {
  sm: 20,
  md: 26,
  lg: 32,
};

export function Logo({ size = "md", className = "" }: LogoProps) {
  const h = heights[size];
  const w = Math.round(h * (219 / 52)); // maintain aspect ratio

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/pondr.svg"
        alt="goPondr"
        width={w}
        height={h}
        priority
      />
    </Link>
  );
}
