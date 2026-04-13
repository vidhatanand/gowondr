import { SectionShell } from "@/components/ui/SectionShell";

const needs = [
  "a calmer way to help",
  "a clearer picture of progress",
  "confidence that they are not missing something important",
  "support that fits real family life",
];

export function ProblemSection() {
  return (
    <SectionShell id="for-parents">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          You care deeply. The hard part is knowing what comes next.
        </h2>

        <p className="mt-6 text-[17px] leading-[28px] text-slate">
          Most parents do not need more motivation. They need:
        </p>

        <ul className="mt-6 space-y-3">
          {needs.map((need) => (
            <li
              key={need}
              className="text-[17px] leading-[28px] text-ink"
            >
              {need}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[17px] leading-[28px] text-slate">
          You know your child best. What you should not have to do is become a
          curriculum planner, a pacing expert, and a pedagogy specialist after
          dinner.
        </p>
      </div>
    </SectionShell>
  );
}
