"use client";

import { useState } from "react";
import { List, X } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

interface PageTOCProps {
  sections: TOCItem[];
  className?: string;
}

export function PageTOC({ sections, className = "" }: PageTOCProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden sticky top-16 z-40 bg-paper/90 backdrop-blur-sm border-b border-sand">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 w-full px-6 py-3 text-[14px] font-semibold text-slate cursor-pointer"
        >
          <List className="h-4 w-4" />
          On this page
          {open && <X className="h-4 w-4 ml-auto" />}
        </button>
        {open && (
          <nav className="px-6 pb-4 space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block py-1.5 text-[14px] text-slate hover:text-teal transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:block sticky top-24 self-start w-[200px] shrink-0 ${className}`}
      >
        <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-clay mb-3">
          On this page
        </p>
        <nav className="space-y-1 border-l border-sand pl-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block py-1 text-[13px] text-slate hover:text-teal transition-colors leading-snug"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
