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
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {examples.map((ex) => (
        <Card
          key={ex.subject}
          variant="subject"
          subjectSoftClass={ex.bgClass}
          subjectInkClass={ex.colorClass}
          hover
          className="flex flex-col"
        >
          {/* Subject header */}
          <div className={`${ex.colorClass} mb-3`}>{ex.icon}</div>
          <h3 className="font-display text-[24px] leading-[30px] text-ink mb-3">
            {ex.subject}
          </h3>

          {/* Bullet examples */}
          <ul className="space-y-2 flex-1">
            {ex.examples.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${ex.colorClass.replace("text-", "bg-")} mt-2 shrink-0 opacity-60`}
                />
                <span className="text-[14px] text-ink leading-relaxed">
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
