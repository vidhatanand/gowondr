"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Parents", href: "/for-parents" },
  { label: "Subjects", href: "/subjects" },
  { label: "Research", href: "/research" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-sand">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[15px] text-slate hover:text-ink rounded-lg hover:bg-linen transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/pricing" size="default">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate hover:text-ink cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-paper border-t border-sand">
          <Container>
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-[17px] text-slate hover:text-ink hover:bg-linen rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button href="/pricing" className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
