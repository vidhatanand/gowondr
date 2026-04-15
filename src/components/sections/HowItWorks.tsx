import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import {
  UserCircle,
  CalendarDays,
  Sparkles,
  ClipboardCheck,
  RefreshCw,
  MonitorOff,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <UserCircle className="h-6 w-6" />,
    title: "Start with your child",
    description: "Age, stage, subject readiness — the planner shapes a path that fits.",
    color: "#235A5F", // teal
    bg: "#EAF3F2",
  },
  {
    number: 2,
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Open today\u2019s session",
    description: "A calm plan with materials, prompts, and the next concept that makes sense.",
    color: "#A4582E", // terracotta
    bg: "#F7ECE4",
  },
  {
    number: 3,
    icon: <Sparkles className="h-6 w-6" />,
    title: "Learn through real interaction",
    description: "Notice. Explore. Talk. Represent. Connect. Practice. Explain. Use. Revisit.",
    color: "#4B7A5B", // strong
    bg: "#EAF3EC",
  },
  {
    number: 4,
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Log what you noticed",
    description: "No grades. Just note what you saw, heard, and understood.",
    color: "#214D9C", // info
    bg: "#EAF0FB",
  },
  {
    number: 5,
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Let the planner adapt",
    description: "Next session changes based on progress, readiness, and what needs a refresh.",
    color: "#6A4E73", // reading
    bg: "#EDE8E9",
  },
];

export function HowItWorks() {
  return (
    <SectionShell bg="paper-alt" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          One clear next step. Every day.
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate max-w-[520px] mx-auto">
          Five steps that flow naturally — no teaching degree, no complicated setup.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex gap-4 md:gap-6 items-center group">
                {/* Icon — vertically centered */}
                <div
                  className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-2xl flex items-center justify-center shadow-xs group-hover:shadow-sm transition-all duration-200 group-hover:scale-105 shrink-0"
                  style={{ backgroundColor: step.bg, color: step.color }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Step label */}
                  <span
                    className="text-[12px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </span>

                  <h3 className="font-body font-semibold text-[18px] md:text-[20px] text-ink leading-tight mt-1">
                    {step.title}
                  </h3>

                  <p className="text-[15px] text-slate leading-relaxed mt-1.5 max-w-[500px]">
                    {step.description}
                  </p>

                  {/* Accent bar */}
                  <div
                    className="w-10 h-1 rounded-full mt-3 opacity-40"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Screen-light pledge */}
        <div className="mt-12 rounded-2xl bg-teal p-6 md:p-8 text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-paper/15 mx-auto mb-4">
            <MonitorOff className="h-7 w-7 text-paper" />
          </div>
          <h3 className="font-display text-[24px] md:text-[28px] leading-tight text-paper tracking-tight">
            Every activity happens off-screen
          </h3>
          <p className="mt-3 text-[15px] md:text-[17px] leading-relaxed text-paper/80 max-w-[520px] mx-auto">
            The parent reads a short prompt, then puts the device down.
            Activities involve talking, drawing, sorting, building, moving,
            and exploring the real world. The screen is a guide, not a babysitter.
          </p>
          <div className="mt-4 flex justify-center gap-3 flex-wrap">
            <span className="text-[12px] font-semibold text-paper/90 uppercase tracking-wide">Talk</span>
            <span className="text-paper/60">·</span>
            <span className="text-[12px] font-semibold text-paper/90 uppercase tracking-wide">Draw</span>
            <span className="text-paper/60">·</span>
            <span className="text-[12px] font-semibold text-paper/90 uppercase tracking-wide">Sort</span>
            <span className="text-paper/60">·</span>
            <span className="text-[12px] font-semibold text-paper/90 uppercase tracking-wide">Build</span>
            <span className="text-paper/60">·</span>
            <span className="text-[12px] font-semibold text-paper/90 uppercase tracking-wide">Move</span>
            <span className="text-paper/60">·</span>
            <span className="text-[12px] font-semibold text-paper/90 uppercase tracking-wide">Explore</span>
          </div>
        </div>

      <div className="mt-8 text-center">
        <Button variant="ghost" href="/how-it-works">
          See how it works in detail &rarr;
        </Button>
      </div>
    </SectionShell>
  );
}
