"use client";

import { useState } from "react";

interface ArcStep {
  number: number;
  label: string;
  description: string;
  phase: string;
}

interface LearningArcVisualProps {
  title?: string;
  caption?: string;
  steps: ArcStep[];
  className?: string;
}

// Phase colors matching brand
const phaseConfig: Record<string, { color: string; bg: string; label: string }> = {
  Experience: { color: "#235A5F", bg: "#EAF3F2", label: "Experience" },
  Understanding: { color: "#A4582E", bg: "#F7ECE4", label: "Understanding" },
  Mastery: { color: "#4B7A5B", bg: "#EAF3EC", label: "Mastery" },
  Transfer: { color: "#214D9C", bg: "#EAF0FB", label: "Transfer" },
};

// Positions for 9 nodes along a gentle S-curve path
// Designed for a 360x520 viewBox (portrait, mobile-first)
const nodePositions = [
  { x: 80, y: 50 },    // 1. Notice
  { x: 200, y: 80 },   // 2. Explore
  { x: 290, y: 140 },  // 3. Talk
  { x: 260, y: 220 },  // 4. Represent
  { x: 140, y: 260 },  // 5. Connect
  { x: 70, y: 330 },   // 6. Practice
  { x: 140, y: 400 },  // 7. Explain
  { x: 260, y: 420 },  // 8. Use
  { x: 300, y: 490 },  // 9. Revisit
];

export function LearningArcVisual({
  title,
  caption,
  steps,
  className = "",
}: LearningArcVisualProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Build the S-curve path through all points
  const pathPoints = nodePositions;
  let pathD = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
  for (let i = 1; i < pathPoints.length; i++) {
    const prev = pathPoints[i - 1];
    const curr = pathPoints[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.5;
    const cpy1 = prev.y;
    const cpx2 = prev.x + (curr.x - prev.x) * 0.5;
    const cpy2 = curr.y;
    pathD += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${curr.x} ${curr.y}`;
  }

  // Revisit loop back to start
  const last = pathPoints[pathPoints.length - 1];
  const first = pathPoints[0];

  return (
    <figure
      className={`mx-auto max-w-[900px] ${className}`}
      role="img"
      aria-label={title || "Learning arc"}
    >
      {title && (
        <figcaption className="text-center mb-4">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
            {title}
          </span>
        </figcaption>
      )}

      <div className="rounded-2xl border border-sand bg-paper-alt p-4 md:p-8">
        {/* Phase legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {Object.entries(phaseConfig).map(([key, config]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: config.color }}
              />
              <span className="text-[12px] font-medium text-slate">
                {config.label}
              </span>
            </div>
          ))}
        </div>

        {/* SVG + detail panel layout */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* SVG Arc */}
          <div className="w-full md:w-1/2 flex justify-center">
            <svg
              viewBox="0 0 360 540"
              className="w-full max-w-[320px] h-auto"
              style={{ filter: "drop-shadow(0 2px 8px rgba(30,42,52,0.04))" }}
            >
              {/* Background texture — subtle paper grain */}
              <defs>
                <filter id="grain">
                  <feTurbulence baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                  <feBlend in="SourceGraphic" mode="multiply" />
                </filter>
              </defs>

              {/* Main path — the learning journey */}
              <path
                d={pathD}
                fill="none"
                stroke="#E6D5C3"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Animated path overlay */}
              <path
                d={pathD}
                fill="none"
                stroke="#235A5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 4"
                opacity="0.4"
              />

              {/* Revisit arc — dashed curve back to start */}
              <path
                d={`M ${last.x} ${last.y} C ${last.x + 40} ${last.y - 60}, ${first.x - 40} ${first.y + 80}, ${first.x} ${first.y}`}
                fill="none"
                stroke="#235A5F"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                opacity="0.3"
                strokeLinecap="round"
              />
              {/* Revisit label */}
              <text
                x={last.x + 20}
                y={last.y - 20}
                className="text-[9px]"
                fill="#52616D"
                fontStyle="italic"
                fontFamily="var(--font-body)"
              >
                revisit strengthens
              </text>

              {/* Nodes */}
              {steps.map((step, i) => {
                const pos = nodePositions[i];
                const phase = phaseConfig[step.phase] || phaseConfig.Experience;
                const isActive = activeStep === i;
                const nodeRadius = isActive ? 22 : 18;

                return (
                  <g
                    key={step.number}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                    onClick={() => setActiveStep(isActive ? null : i)}
                  >
                    {/* Outer glow on hover */}
                    {isActive && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={nodeRadius + 6}
                        fill={phase.bg}
                        opacity="0.6"
                      />
                    )}

                    {/* Node circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeRadius}
                      fill={isActive ? phase.color : phase.bg}
                      stroke={phase.color}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{ transition: "all 0.2s ease-out" }}
                    />

                    {/* Number */}
                    <text
                      x={pos.x}
                      y={pos.y - 3}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isActive ? "#FFFDF9" : phase.color}
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="var(--font-body)"
                      style={{ transition: "fill 0.2s" }}
                    >
                      {step.number}
                    </text>

                    {/* Label below node */}
                    <text
                      x={pos.x}
                      y={pos.y + nodeRadius + 14}
                      textAnchor="middle"
                      fill="#1E2A34"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="var(--font-body)"
                    >
                      {step.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detail panel — always shows all steps, highlights active */}
          <div className="w-full md:w-1/2 text-left">
            <div className="space-y-1.5">
              {steps.map((step, i) => {
                const phase = phaseConfig[step.phase];
                const isActive = activeStep === i;
                return (
                  <div
                    key={step.number}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-paper shadow-xs"
                        : "hover:bg-paper/60"
                    }`}
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-bold text-paper shrink-0"
                      style={{ backgroundColor: phase?.color || "#235A5F" }}
                    >
                      {step.number}
                    </span>
                    <div className="min-w-0">
                      <span className="font-body font-semibold text-[14px] text-ink">
                        {step.label}
                      </span>
                      <span className="text-[13px] text-slate block sm:inline sm:ml-1.5">
                        — {step.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
