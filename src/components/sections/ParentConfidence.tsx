import { SectionShell } from "@/components/ui/SectionShell";

export function ParentConfidence() {
  return (
    <SectionShell bg="terracotta-soft">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          You do not need teacher training to make a real difference.
        </h2>

        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-[600px] mx-auto">
          You already know your child. We help with sequence, language, and what
          comes next. The system gives you parent scripts, observation prompts,
          and the confidence to guide learning at home&nbsp;&mdash; without
          second-guessing every step.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div>
            <h3 className="font-body font-semibold text-[15px] text-ink mb-1">
              Words to say
            </h3>
            <p className="text-[14px] text-slate leading-relaxed">
              Every session includes parent scripts and conversation starters.
            </p>
          </div>
          <div>
            <h3 className="font-body font-semibold text-[15px] text-ink mb-1">
              What to notice
            </h3>
            <p className="text-[14px] text-slate leading-relaxed">
              Guided observation prompts help you see real learning in action.
            </p>
          </div>
          <div>
            <h3 className="font-body font-semibold text-[15px] text-ink mb-1">
              What comes next
            </h3>
            <p className="text-[14px] text-slate leading-relaxed">
              The planner always knows the next concept that makes sense.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
