import { type ReactNode } from "react";

interface ArcStep {
  number: number;
  label: string;
  description: string;
  icon: ReactNode;
  phase: string;
}

interface LearningArcVisualProps {
  title?: string;
  caption?: string;
  steps: ArcStep[];
  className?: string;
}

const phaseColors: Record<string, { bg: string; text: string; border: string }> = {
  Experience: { bg: "bg-teal-soft", text: "text-teal", border: "border-teal/20" },
  Understanding: { bg: "bg-terracotta-soft", text: "text-terracotta", border: "border-terracotta/20" },
  Mastery: { bg: "bg-strong-soft", text: "text-strong-ink", border: "border-strong-ink/20" },
  Transfer: { bg: "bg-info-soft", text: "text-info-ink", border: "border-info-ink/20" },
};

export function LearningArcVisual({
  title,
  caption,
  steps,
  className = "",
}: LearningArcVisualProps) {
  // Group by phase
  const phases = steps.reduce<Record<string, ArcStep[]>>((acc, step) => {
    if (!acc[step.phase]) acc[step.phase] = [];
    acc[step.phase].push(step);
    return acc;
  }, {});

  return (
    <figure
      className={`mx-auto max-w-[900px] ${className}`}
      role="img"
      aria-label={title || "Learning arc"}
    >
      {title && (
        <figcaption className="text-center mb-6">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
            {title}
          </span>
        </figcaption>
      )}

      {/* Phase-based layout: 2x2 grid on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(phases).map(([phase, phaseSteps]) => {
          const colors = phaseColors[phase] || phaseColors.Experience;
          return (
            <div
              key={phase}
              className={`rounded-2xl border ${colors.border} ${colors.bg} p-5 md:p-6`}
            >
              {/* Phase label */}
              <p className={`text-[12px] font-semibold uppercase tracking-[0.08em] ${colors.text} mb-4`}>
                {phase}
              </p>

              {/* Steps in this phase */}
              <div className="space-y-3">
                {phaseSteps.map((step, i) => (
                  <div key={step.number} className="flex items-start gap-3">
                    {/* Number circle */}
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-paper border ${colors.border} shrink-0`}>
                      <span className={`text-[13px] font-semibold ${colors.text}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`${colors.text}`}>{step.icon}</span>
                        <h4 className="font-body font-semibold text-[15px] text-ink">
                          {step.label}
                        </h4>
                      </div>
                      <p className="mt-0.5 text-[13px] text-slate leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connector dot between steps within a phase */}
                    {i < phaseSteps.length - 1 && (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Revisit loop indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-[13px] text-slate italic">
          <svg width="40" height="16" className="text-teal/40">
            <path
              d="M38 8 C38 8 30 2 20 2 C10 2 2 8 2 8 C2 8 10 14 20 14 C30 14 38 8 38 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <path d="M2 5 L2 11 L6 8 Z" fill="currentColor" />
          </svg>
          <span>The cycle strengthens with each revisit</span>
        </div>
      </div>

      {caption && (
        <p className="text-center mt-4 text-[13px] text-slate leading-relaxed max-w-[640px] mx-auto">
          {caption}
        </p>
      )}
    </figure>
  );
}
