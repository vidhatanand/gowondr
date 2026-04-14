import { type ReactNode } from "react";

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
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {examples.map((ex) => (
        <div
          key={ex.subject}
          className={`rounded-xl border border-sand/50 ${ex.bgClass} p-5`}
        >
          {/* Subject header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`${ex.colorClass}`}>{ex.icon}</div>
            <h3 className={`font-body font-semibold text-[16px] ${ex.colorClass}`}>
              {ex.subject}
            </h3>
          </div>

          {/* Bullet examples */}
          <ul className="space-y-2">
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
        </div>
      ))}
    </div>
  );
}
