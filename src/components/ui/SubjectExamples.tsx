import { type ReactNode } from "react";
import { Card } from "@/components/ui/Card";

interface SubjectExample {
  icon: ReactNode;
  subject: string;
  colorClass: string;
  bgClass: string;
  examples: string[];
}

interface SubjectExamplesProps {
  examples: SubjectExample[];
  className?: string;
}

export function SubjectExamples({
  examples,
  className = "",
}: SubjectExamplesProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr ${className}`}>
      {examples.map((ex) => (
        <Card
          key={ex.subject}
          variant="subject"
          subjectSoftClass={ex.bgClass}
          subjectInkClass={ex.colorClass}
          hover
          className="flex flex-col h-full"
        >
          <div className={`${ex.colorClass} mb-3`}>{ex.icon}</div>
          <h3 className={`font-display text-[24px] leading-[30px] text-ink mb-3`}>
            {ex.subject}
          </h3>

          <ul className="space-y-2.5 flex-1">
            {ex.examples.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-[13px] text-slate mt-0.5 shrink-0">&#x2022;</span>
                <span className="text-[14px] text-slate leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
