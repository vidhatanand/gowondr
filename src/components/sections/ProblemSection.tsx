import { SectionShell } from "@/components/ui/SectionShell";
import { MapPin, BarChart3, ShieldCheck, Heart } from "lucide-react";

const needs = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "A calmer way to help",
    detail: "Without turning every evening into a stressful homework battle.",
    color: "#235A5F",
    bg: "#EAF3F2",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: "A clearer picture of progress",
    detail: "So you know what your child is building — not just what they finished.",
    color: "#A4582E",
    bg: "#F7ECE4",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    label: "Confidence nothing is missed",
    detail: "A real curriculum, not scattered Pinterest activities and guesswork.",
    color: "#4B7A5B",
    bg: "#EAF3EC",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    label: "Support that fits real life",
    detail: "10 minutes at the table, a story before bed, a question during a walk.",
    color: "#214D9C",
    bg: "#EAF0FB",
  },
];

export function ProblemSection() {
  return (
    <SectionShell id="for-parents" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/abstract-2.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/70" aria-hidden="true" />
      <div className="relative z-10">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          You care deeply. The hard part is knowing what comes next.
        </h2>

        <p className="mt-5 text-[17px] leading-[28px] text-slate text-center max-w-[560px] mx-auto">
          Most parents do not need more motivation. They need:
        </p>

        {/* Need cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {needs.map((need) => (
            <div
              key={need.label}
              className="flex items-start gap-3.5 rounded-xl border border-sand/60 p-4 hover:shadow-xs transition-shadow"
              style={{ backgroundColor: need.bg }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{ backgroundColor: `${need.color}15`, color: need.color }}
              >
                {need.icon}
              </div>
              <div>
                <p
                  className="font-body font-semibold text-[15px] leading-tight"
                  style={{ color: need.color }}
                >
                  {need.label}
                </p>
                <p className="text-[13px] text-slate/80 leading-relaxed mt-1">
                  {need.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[17px] leading-[28px] text-slate text-center max-w-[560px] mx-auto">
          You know your child best. What you should not have to do is become a
          curriculum planner, a pacing expert, and a pedagogy specialist after
          dinner.
        </p>
      </div>
      </div>
    </SectionShell>
  );
}
