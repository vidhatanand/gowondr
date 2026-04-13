import { type ReactNode } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface StepFlowProps {
  steps: Step[];
  className?: string;
}

export function StepFlow({ steps, className = "" }: StepFlowProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Connecting line — vertical on mobile, hidden on desktop (circles handle it) */}
      <div className="absolute left-5 top-10 bottom-10 w-px bg-sand md:hidden" />

      <div className="flex flex-col md:flex-row md:items-start gap-0 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.number} className="flex md:flex-col md:items-center md:flex-1 relative">
            {/* Horizontal connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-sand z-0" />
            )}

            {/* Step content */}
            <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center relative z-10 pb-8 md:pb-0 pl-0">
              {/* Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal text-paper text-[15px] font-semibold shrink-0 shadow-xs">
                {step.icon ?? step.number}
              </div>

              <div className="md:mt-3">
                <h3 className="font-body font-semibold text-[15px] md:text-[16px] text-ink leading-tight">
                  {step.title}
                </h3>
                <p className="mt-1 text-[14px] text-slate leading-relaxed max-w-[220px] md:max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
