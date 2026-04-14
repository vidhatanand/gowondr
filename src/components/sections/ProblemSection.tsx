import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";
import { MapPin, BarChart3, ShieldCheck, Heart } from "lucide-react";

const needs = [
  {
    icon: MapPin,
    label: "A calmer way to help",
    detail: "Without turning every evening into a stressful homework battle.",
    softClass: "bg-teal-soft",
    inkClass: "text-teal",
  },
  {
    icon: BarChart3,
    label: "A clearer picture of progress",
    detail: "So you know what your child is building — not just what they finished.",
    softClass: "bg-terracotta-soft",
    inkClass: "text-terracotta",
  },
  {
    icon: ShieldCheck,
    label: "Confidence nothing is missed",
    detail: "A real curriculum, not scattered Pinterest activities and guesswork.",
    softClass: "bg-strong-soft",
    inkClass: "text-strong-ink",
  },
  {
    icon: Heart,
    label: "Support that fits real life",
    detail: "10 minutes at the table, a story before bed, a question during a walk.",
    softClass: "bg-info-soft",
    inkClass: "text-info-ink",
  },
];

export function ProblemSection() {
  return (
    <SectionShell id="for-parents">
      <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
        You care deeply. The hard part is knowing what comes next.
      </h2>
      <p className="mt-5 text-[17px] leading-[28px] text-slate text-center max-w-[560px] mx-auto">
        Most parents do not need more motivation. They need:
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {needs.map((need) => {
          const Icon = need.icon;
          return (
            <Card
              key={need.label}
              variant="subject"
              subjectSoftClass={need.softClass}
              subjectInkClass={need.inkClass}
              hover
              className="flex flex-col"
            >
              <Icon className="h-7 w-7 mb-3" />
              <h3 className="font-display text-[24px] leading-[30px] text-ink mb-2">
                {need.label}
              </h3>
              <p className="text-[15px] text-slate leading-relaxed flex-1">
                {need.detail}
              </p>
            </Card>
          );
        })}
      </div>

      <p className="mt-10 text-[17px] leading-[28px] text-slate text-center max-w-[560px] mx-auto">
        You know your child best. What you should not have to do is become a
        curriculum planner, a pacing expert, and a pedagogy specialist after
        dinner.
      </p>
    </SectionShell>
  );
}
