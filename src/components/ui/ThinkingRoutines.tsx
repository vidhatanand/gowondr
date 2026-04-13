import { type ReactNode } from "react";
import {
  Eye, FlaskConical, ArrowDownUp, GitBranch, Hammer,
  BookOpen, Layers, MessageSquare, Globe, CheckCircle,
} from "lucide-react";

interface Routine {
  number: number;
  name: string;
  steps: string;
  purpose: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

const routines: Routine[] = [
  {
    number: 1,
    name: "Notice → Wonder → Why → How",
    steps: "Notice, Wonder, Why, How",
    purpose: "Move from observation into inquiry rather than starting with direct explanation",
    icon: <Eye className="h-5 w-5" />,
    color: "#235A5F",
    bg: "#EAF3F2",
  },
  {
    number: 2,
    name: "Predict → Test → Observe → Explain",
    steps: "Predict, Test, Observe, Explain",
    purpose: "Create an inquiry habit instead of passive consumption",
    icon: <FlaskConical className="h-5 w-5" />,
    color: "#4B744F",
    bg: "#EAEDE5",
  },
  {
    number: 3,
    name: "Compare → Sort → Explain the Rule",
    steps: "Compare, Sort, Explain the Rule",
    purpose: "Build classification, logic, and explanation",
    icon: <ArrowDownUp className="h-5 w-5" />,
    color: "#2A6E73",
    bg: "#E5ECE9",
  },
  {
    number: 4,
    name: "Cause → Effect → Change One Thing",
    steps: "Cause, Effect, Change One Thing",
    purpose: "Build systems thinking and consequence awareness",
    icon: <GitBranch className="h-5 w-5" />,
    color: "#886328",
    bg: "#F4EDE1",
  },
  {
    number: 5,
    name: "Make → Model → Explain",
    steps: "Make, Model, Explain",
    purpose: "Make invisible thinking visible through objects, drawing, mapping, or building",
    icon: <Hammer className="h-5 w-5" />,
    color: "#7A5AA6",
    bg: "#EFE9EF",
  },
  {
    number: 6,
    name: "Retell → Sequence → Teach Back",
    steps: "Retell, Sequence, Teach Back",
    purpose: "Strengthen comprehension, memory, and expression",
    icon: <BookOpen className="h-5 w-5" />,
    color: "#6A4E73",
    bg: "#EDE8E9",
  },
  {
    number: 7,
    name: "Story → Scene → Concept → System",
    steps: "Story, Scene, Concept, System",
    purpose: "Start with something emotionally concrete, then widen to the larger principle",
    icon: <Layers className="h-5 w-5" />,
    color: "#94536C",
    bg: "#F4EAEA",
  },
  {
    number: 8,
    name: "Evidence Talk",
    steps: "Evidence Talk",
    purpose: "Move the child from opinion only to supported explanation",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "#A4582E",
    bg: "#F7ECE4",
  },
  {
    number: 9,
    name: "Real-World Transfer",
    steps: "Real-World Transfer",
    purpose: "Help the child see learning everywhere, not only in lesson time",
    icon: <Globe className="h-5 w-5" />,
    color: "#4966A8",
    bg: "#E9EBEF",
  },
  {
    number: 10,
    name: "Reflect → Close → Next Step",
    steps: "Reflect, Close, Next Step",
    purpose: "End each interaction with consolidation and a signal for what to do next",
    icon: <CheckCircle className="h-5 w-5" />,
    color: "#9E563C",
    bg: "#F6EAE3",
  },
];

interface ThinkingRoutinesProps {
  /** Show all 10 or a curated subset */
  variant?: "full" | "compact";
  /** Contextual framing for adapted versions */
  context?: "thinking-routines" | "future-ready" | "breadth";
  className?: string;
}

const contextIntros: Record<string, { title: string; subtitle: string }> = {
  "thinking-routines": {
    title: "The 10 thinking routines",
    subtitle: "Each routine gives children a repeatable structure for showing what they understand — and gives parents a window into real learning.",
  },
  "future-ready": {
    title: "Thinking routines that build future-ready skills",
    subtitle: "In an AI world, the ability to observe, question, explain, connect, and transfer matters more than memorising answers. These routines build exactly those habits.",
  },
  breadth: {
    title: "How thinking routines connect across subjects",
    subtitle: "Breadth without depth is shallow. Thinking routines ensure that every subject — from science to arts to digital literacy — builds real understanding, not just exposure.",
  },
};

export function ThinkingRoutines({
  variant = "full",
  context = "thinking-routines",
  className = "",
}: ThinkingRoutinesProps) {
  const intro = contextIntros[context];
  const items = variant === "compact" ? routines.filter((_, i) => [0, 1, 4, 7, 8, 9].includes(i)) : routines;

  return (
    <div className={className}>
      <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
        {intro.title}
      </h2>
      <p className="mt-3 text-[17px] leading-[28px] text-slate max-w-[640px]">
        {intro.subtitle}
      </p>

      <div className="mt-8 space-y-3">
        {items.map((routine) => (
          <div
            key={routine.number}
            className="flex gap-4 items-start rounded-xl border border-sand/60 p-4 hover:shadow-xs transition-shadow"
            style={{ backgroundColor: routine.bg }}
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl shrink-0"
              style={{ backgroundColor: `${routine.color}15`, color: routine.color }}
            >
              {routine.icon}
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: routine.color }}
                >
                  Routine {routine.number}
                </span>
              </div>
              <p className="font-body font-bold text-[15px] text-ink leading-tight mt-0.5">
                {routine.name}
              </p>
              <p className="text-[13px] text-slate leading-relaxed mt-1">
                {routine.purpose}
              </p>
            </div>
          </div>
        ))}
      </div>

      {variant === "compact" && (
        <p className="mt-4 text-[13px] text-slate italic">
          Showing 6 of 10 routines. See all 10 on the{" "}
          <a href="/research/thinking-routines-visible-understanding" className="text-teal underline underline-offset-2">
            thinking routines research page
          </a>.
        </p>
      )}
    </div>
  );
}
