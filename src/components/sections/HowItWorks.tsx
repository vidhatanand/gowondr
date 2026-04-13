import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  UserCircle,
  CalendarDays,
  MessageCircle,
  ClipboardCheck,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Tell us about your child",
    description:
      "We use age, stage, subject area, and progress to shape the path.",
  },
  {
    icon: CalendarDays,
    title: "Open today's session",
    description:
      "You get a calm, guided plan with materials, prompts, and the next concept that makes sense.",
  },
  {
    icon: MessageCircle,
    title: "Learn through real interaction",
    description:
      "Notice. Explore. Talk. Represent. Connect. Practice. Explain. Use. Revisit.",
  },
  {
    icon: ClipboardCheck,
    title: "Log what you noticed",
    description:
      "You do not need to grade your child. Just record what you saw, heard, and understood.",
  },
  {
    icon: RefreshCw,
    title: "Let the planner adapt",
    description:
      "The next session changes based on progress, readiness, and what needs a refresh.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell bg="paper-alt" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          One clear next step. Every day.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Card key={i} hover>
              <div className="flex items-start gap-4 lg:flex-col">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-soft shrink-0">
                  <Icon className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[13px] font-semibold text-teal">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="font-body font-semibold text-[17px] text-ink mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-slate leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button variant="ghost" href="/how-it-works">
          See how it works &rarr;
        </Button>
      </div>
    </SectionShell>
  );
}
