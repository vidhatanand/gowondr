import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";
import { SVG_TEXT, SVG_COLORS, SVG_FIGURES, SVG_SHAPES, SVG_DEPTH, SVG_INVENTORY } from "@/lib/svg-design-system";
import { ResearchHubSVG } from "@/components/svg/ResearchHubSVG";
import { ParentChildSVG } from "@/components/svg/ParentChildSVG";
import { ConceptFirstSVG } from "@/components/svg/ConceptFirstSVG";
import { PlayfulScreenLightSVG } from "@/components/svg/PlayfulScreenLightSVG";
import { ThinkingRoutinesSVG } from "@/components/svg/ThinkingRoutinesSVG";
import { AdaptivePlanningSVG } from "@/components/svg/AdaptivePlanningSVG";
import { BreadthBridgesSVG } from "@/components/svg/BreadthBridgesSVG";
import { DigitalLiteracySVG } from "@/components/svg/DigitalLiteracySVG";
import { ForParentsSVG } from "@/components/svg/ForParentsSVG";
import { SubjectConnectionSVG } from "@/components/ui/SubjectConnectionSVG";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "SVG Design System",
  description: "goPondr SVG illustration guidelines, tokens, and inventory",
};

const componentMap: Record<string, ComponentType<{ className?: string }>> = {
  "/research": ResearchHubSVG,
  "/research/parent-child-connection-learning": ParentChildSVG,
  "/research/concept-first-coverage": ConceptFirstSVG,
  "/research/playful-screen-light-learning": PlayfulScreenLightSVG,
  "/research/thinking-routines-visible-understanding": ThinkingRoutinesSVG,
  "/research/adaptive-planning-spaced-revisit": AdaptivePlanningSVG,
  "/research/breadth-future-ready-ai-world": BreadthBridgesSVG,
  "/research/digital-literacy-with-judgment": DigitalLiteracySVG,
  "/for-parents": ForParentsSVG,
  "/subjects": SubjectConnectionSVG,
};

export default function SVGDesignSystemPage() {
  return (
    <div className="pb-24">
      <SectionShell bg="linen">
        <h1 className="font-display text-[52px] leading-[58px] text-ink tracking-tight">
          SVG Design System
        </h1>
        <p className="mt-4 text-[19px] leading-[32px] text-slate max-w-[600px]">
          Rules, tokens, and inventory for all inline SVG illustrations across goPondr.
          Every SVG must follow these specs for consistency and readability.
        </p>
      </SectionShell>

      {/* Typography Tokens */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Typography Tokens
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(SVG_TEXT).filter(([k]) => k !== "fontFamily").map(([name, spec]) => (
            <Card key={name}>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-teal mb-2">{name}</p>
              <div className="bg-paper-alt rounded-lg p-4 mb-3">
                <svg viewBox="0 0 200 40" className="w-full h-auto">
                  <text
                    x="100"
                    y="25"
                    textAnchor="middle"
                    fontFamily="var(--font-body)"
                    fontSize={(spec as {fontSize: number}).fontSize}
                    fontWeight={(spec as {fontWeight: number}).fontWeight}
                    fill="#1E2A34"
                    opacity={(spec as {opacity: number}).opacity}
                  >
                    Sample {name} text
                  </text>
                </svg>
              </div>
              <p className="text-[13px] text-slate">
                fontSize: {(spec as {fontSize: number}).fontSize}px &middot;
                weight: {(spec as {fontWeight: number}).fontWeight} &middot;
                opacity: {(spec as {opacity: number}).opacity}
              </p>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* Color Palette */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          SVG Color Palette
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {Object.entries(SVG_COLORS).filter(([, v]) => typeof v === "string").map(([name, color]) => (
            <div key={name}>
              <div className="h-16 rounded-lg border border-sand" style={{ backgroundColor: color as string }} />
              <p className="mt-2 font-semibold text-[13px] text-ink">{name}</p>
              <p className="text-[12px] text-slate font-mono">{color as string}</p>
            </div>
          ))}
        </div>
        <h3 className="font-display text-[24px] text-ink mt-8 mb-4">Subject Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {Object.entries(SVG_COLORS.subjects).map(([name, color]) => (
            <div key={name}>
              <div className="h-12 rounded-lg" style={{ backgroundColor: color }} />
              <p className="mt-1 font-semibold text-[11px] text-ink capitalize">{name}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Figure Specs */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Figure Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px]">
          <Card>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-terracotta mb-3">Parent Figure</p>
            <div className="bg-paper-alt rounded-lg p-6 flex justify-center">
              <svg viewBox="0 0 60 100" className="w-16 h-auto">
                <circle cx="30" cy="15" r={SVG_FIGURES.parent.headRadius} fill={SVG_FIGURES.parent.headFill} />
                <line x1="30" y1="23" x2="30" y2="55" stroke={SVG_FIGURES.parent.bodyStroke} strokeWidth={SVG_FIGURES.parent.bodyStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="35" x2="18" y2="48" stroke={SVG_FIGURES.parent.bodyStroke} strokeWidth={SVG_FIGURES.parent.limbStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="35" x2="42" y2="48" stroke={SVG_FIGURES.parent.bodyStroke} strokeWidth={SVG_FIGURES.parent.limbStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="55" x2="22" y2="75" stroke={SVG_FIGURES.parent.bodyStroke} strokeWidth={SVG_FIGURES.parent.limbStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="55" x2="38" y2="75" stroke={SVG_FIGURES.parent.bodyStroke} strokeWidth={SVG_FIGURES.parent.limbStrokeWidth} strokeLinecap="round" />
              </svg>
            </div>
            <p className="mt-3 text-[13px] text-slate">
              Head: r={SVG_FIGURES.parent.headRadius}, fill={SVG_FIGURES.parent.headFill}<br />
              Body: strokeWidth={SVG_FIGURES.parent.bodyStrokeWidth}<br />
              Limbs: strokeWidth={SVG_FIGURES.parent.limbStrokeWidth}
            </p>
          </Card>
          <Card>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-strong-ink mb-3">Child Figure</p>
            <div className="bg-paper-alt rounded-lg p-6 flex justify-center">
              <svg viewBox="0 0 60 100" className="w-16 h-auto">
                <circle cx="30" cy="20" r={SVG_FIGURES.child.headRadius} fill={SVG_FIGURES.child.headFill} />
                <line x1="30" y1="26" x2="30" y2="55" stroke={SVG_FIGURES.child.bodyStroke} strokeWidth={SVG_FIGURES.child.bodyStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="36" x2="20" y2="47" stroke={SVG_FIGURES.child.bodyStroke} strokeWidth={SVG_FIGURES.child.limbStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="36" x2="40" y2="47" stroke={SVG_FIGURES.child.bodyStroke} strokeWidth={SVG_FIGURES.child.limbStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="55" x2="23" y2="72" stroke={SVG_FIGURES.child.bodyStroke} strokeWidth={SVG_FIGURES.child.limbStrokeWidth} strokeLinecap="round" />
                <line x1="30" y1="55" x2="37" y2="72" stroke={SVG_FIGURES.child.bodyStroke} strokeWidth={SVG_FIGURES.child.limbStrokeWidth} strokeLinecap="round" />
              </svg>
            </div>
            <p className="mt-3 text-[13px] text-slate">
              Head: r={SVG_FIGURES.child.headRadius}, fill={SVG_FIGURES.child.headFill}<br />
              Body: strokeWidth={SVG_FIGURES.child.bodyStrokeWidth}<br />
              Limbs: strokeWidth={SVG_FIGURES.child.limbStrokeWidth}
            </p>
          </Card>
        </div>
      </SectionShell>

      {/* Shape & Depth Rules */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Shape & Depth Rules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-teal mb-2">Stroke Widths</p>
            <ul className="space-y-2 text-[14px] text-slate">
              <li>Primary: {SVG_SHAPES.primaryStroke}px</li>
              <li>Secondary: {SVG_SHAPES.secondaryStroke}px</li>
              <li>Decorative: {SVG_SHAPES.decorativeStroke}px</li>
              <li>Linecap: {SVG_SHAPES.strokeLinecap}</li>
            </ul>
          </Card>
          <Card>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-teal mb-2">Dash Patterns</p>
            <ul className="space-y-2 text-[14px] text-slate">
              <li>Dashed: &quot;{SVG_SHAPES.dashPattern}&quot;</li>
              <li>Dotted: &quot;{SVG_SHAPES.dotPattern}&quot;</li>
            </ul>
          </Card>
          <Card>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-teal mb-2">Depth Layers</p>
            <ul className="space-y-2 text-[14px] text-slate">
              <li>Far: {SVG_DEPTH.far.opacity}–{SVG_DEPTH.far.maxOpacity}</li>
              <li>Mid: {SVG_DEPTH.mid.opacity}–{SVG_DEPTH.mid.maxOpacity}</li>
              <li>Near: {SVG_DEPTH.near.opacity}–{SVG_DEPTH.near.maxOpacity}</li>
            </ul>
          </Card>
        </div>
      </SectionShell>

      {/* SVG Inventory */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          SVG Inventory
        </h2>
        <div className="space-y-10">
          {SVG_INVENTORY.map((svg) => {
            const Component = componentMap[svg.path];
            return (
              <div key={svg.path}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-teal">{svg.type}</span>
                  <h3 className="font-body font-semibold text-[17px] text-ink">{svg.title}</h3>
                </div>
                <p className="text-[14px] text-slate mb-4">{svg.concept}</p>
                {Component && <Component />}
                <p className="text-[12px] text-slate font-mono mt-2">{svg.viewBox} · {svg.page} · {svg.hasFigures ? "Has figures" : "No figures"}</p>
              </div>
            );
          })}
        </div>
      </SectionShell>
    </div>
  );
}
