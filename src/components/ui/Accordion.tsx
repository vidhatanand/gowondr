"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`divide-y divide-sand ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-body font-semibold text-[17px] text-ink pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[2000px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-slate text-[15px] leading-relaxed pr-10">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
