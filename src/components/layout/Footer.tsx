import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Subjects", href: "/subjects" },
      { label: "Curriculum & Coverage", href: "/curriculum-coverage" },
      { label: "Adaptive Planner", href: "/adaptive-planner" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Research Hub", href: "/research" },
      { label: "Screen-Light Learning", href: "/playful-screen-light-learning" },
      { label: "Future-Ready Learning", href: "/future-ready-learning" },
      { label: "For Parents", href: "/for-parents" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const trustItems = [
  "Parent-led, concept-first, screen-light learning",
  "Built for ages 4 through Grade 4",
  "Full curriculum across 8 subjects",
  "Adaptive daily guidance",
];

export function Footer() {
  return (
    <footer className="relative border-t border-sand overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-linen/80" aria-hidden="true" />
      <Container className="relative z-10">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Logo size="sm" />
            <p className="mt-3 text-[14px] text-slate leading-relaxed">
              The curriculum thinks hard, so you can stay close.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-[13px] uppercase tracking-[0.08em] text-slate mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="border-t border-sand py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {trustItems.map((item) => (
              <span
                key={item}
                className="text-[12px] text-slate/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sand py-5 text-center">
          <p className="text-[12px] text-slate/60">
            &copy; {new Date().getFullYear()} goPondr. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
