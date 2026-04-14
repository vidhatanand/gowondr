import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Accordion } from "@/components/ui/Accordion";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { FlowDiagram, FlowComparison } from "@/components/ui/FlowDiagram";
import { StepFlow } from "@/components/ui/StepFlow";
import { ComparisonColumns } from "@/components/ui/ComparisonColumns";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { subjects } from "@/lib/subjects";
import {
  BookOpen,
  Calculator,
  Leaf,
  Globe,
  Heart,
  Palette,
  Blocks,
  Compass,
  Eye,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  RefreshCw,
  Search,
  Image,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Design System",
  description: "goPondr design system preview",
};

const neutralColors = [
  { name: "Paper", token: "paper-0", hex: "#FFFDF9", class: "bg-paper" },
  { name: "Paper Alt", token: "paper-50", hex: "#FBF7F1", class: "bg-paper-alt" },
  { name: "Linen", token: "linen-100", hex: "#F8F4ED", class: "bg-linen" },
  { name: "Sand", token: "sand-200", hex: "#EFE6D8", class: "bg-sand" },
  { name: "Clay", token: "clay-300", hex: "#E6D5C3", class: "bg-clay" },
  { name: "Slate", token: "slate-700", hex: "#52616D", class: "bg-slate" },
  { name: "Ink", token: "ink-900", hex: "#1E2A34", class: "bg-ink" },
];

const brandColors = [
  { name: "Teal", hex: "#235A5F", class: "bg-teal" },
  { name: "Teal Soft", hex: "#EAF3F2", class: "bg-teal-soft" },
  { name: "Terracotta", hex: "#A4582E", class: "bg-terracotta" },
  { name: "Terracotta Mid", hex: "#B8743C", class: "bg-terracotta-mid" },
  { name: "Terracotta Soft", hex: "#F7ECE4", class: "bg-terracotta-soft" },
  { name: "Focus", hex: "#214D9C", class: "bg-focus" },
];

const semanticColors = [
  { name: "Strong Foundation", ink: "#4B7A5B", soft: "#EAF3EC", inkClass: "bg-strong-ink", softClass: "bg-strong-soft" },
  { name: "Building", ink: "#8B6522", soft: "#F8F0DE", inkClass: "bg-building-ink", softClass: "bg-building-soft" },
  { name: "Needs Refresh", ink: "#9E563C", soft: "#F6EAE3", inkClass: "bg-refresh-ink", softClass: "bg-refresh-soft" },
  { name: "Info", ink: "#214D9C", soft: "#EAF0FB", inkClass: "bg-info-ink", softClass: "bg-info-soft" },
  { name: "Danger", ink: "#A23E48", soft: "#F9E8EA", inkClass: "bg-danger-ink", softClass: "bg-danger-soft" },
];

const subjectIcons = [BookOpen, Calculator, Leaf, Globe, Heart, Palette, Blocks, Compass];

const typeScale = [
  { token: "display-xl", size: "64/68", font: "display", sample: "Welcome to learning" },
  { token: "display-l", size: "52/58", font: "display", sample: "A concept-first approach" },
  { token: "display-m", size: "40/46", font: "display", sample: "How it works" },
  { token: "display-s", size: "32/38", font: "display", sample: "Full curriculum breadth" },
  { token: "heading-m", size: "24/30", font: "display", sample: "Parent-guided learning" },
  { token: "body-l", size: "19/32", font: "body", sample: "Long-form intro paragraph text for marketing pages and editorials." },
  { token: "body-m", size: "17/28", font: "body", sample: "Standard marketing body copy used throughout the website." },
  { token: "body-s", size: "15/24", font: "body", sample: "Cards, bullets, metadata, and secondary content." },
  { token: "label", size: "13/18", font: "body", sample: "CHIPS, TABS, EYEBROW TEXT" },
  { token: "micro", size: "12/16", font: "body", sample: "Fine print, footnotes, timestamps" },
];

const faqDemo = [
  { question: "What is goPondr?", answer: "A parent-led, concept-first home learning system for ages 4 through Grade 4, covering 8 subjects with adaptive daily plans." },
  { question: "Do I need to be a teacher?", answer: "No. The system carries the sequence, coverage, and pedagogy. You bring warmth, encouragement, and real-life connection." },
  { question: "How much does it cost?", answer: "Monthly plan at ₹1,000 per child per month, or annual at ₹10,000 per child per year. Start with a free 15-day trial." },
];

const spacingScale = [4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 96];
const radiusScale = [
  { name: "sm", value: "8px" },
  { name: "md", value: "12px" },
  { name: "lg", value: "16px" },
  { name: "xl", value: "20px" },
  { name: "2xl", value: "24px" },
  { name: "pill", value: "999px" },
];

export default function DesignSystemPage() {
  return (
    <div className="pb-24">
      {/* Page header */}
      <SectionShell bg="linen">
        <h1 className="font-display text-[52px] leading-[58px] text-ink tracking-tight">
          Design System
        </h1>
        <p className="mt-4 text-[19px] leading-[32px] text-slate max-w-[600px]">
          goPondr visual foundation. Tokens, components, and patterns
          for building a calm, warm, trustworthy learning brand.
        </p>

        {/* Sub-page links */}
        <div className="mt-8">
          <Link
            href="/design-system/svg"
            className="group inline-flex items-center gap-4 rounded-xl border border-sand bg-paper px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-soft">
              <Image className="h-5 w-5 text-teal" />
            </div>
            <div>
              <p className="font-display text-[17px] text-ink group-hover:text-teal transition-colors">
                SVG Illustration Guidelines
              </p>
              <p className="text-[13px] text-slate">
                Style rules, color usage, and component patterns for all SVG artwork.
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-slate group-hover:text-teal transition-colors ml-2 shrink-0" />
          </Link>
        </div>
      </SectionShell>

      {/* Colors: Neutrals */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Neutral Colors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {neutralColors.map((c) => (
            <div key={c.token}>
              <div
                className={`${c.class} h-20 rounded-xl border border-sand`}
              />
              <p className="mt-2 font-semibold text-[13px] text-ink">
                {c.name}
              </p>
              <p className="text-[12px] text-slate font-mono">{c.hex}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Colors: Brand */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Brand Colors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandColors.map((c) => (
            <div key={c.name}>
              <div
                className={`${c.class} h-20 rounded-xl border border-sand/40`}
              />
              <p className="mt-2 font-semibold text-[13px] text-ink">
                {c.name}
              </p>
              <p className="text-[12px] text-slate font-mono">{c.hex}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Colors: Semantic */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Semantic States
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {semanticColors.map((c) => (
            <div key={c.name}>
              <div className="flex gap-2 h-20">
                <div
                  className={`${c.inkClass} flex-1 rounded-xl`}
                />
                <div
                  className={`${c.softClass} flex-1 rounded-xl border border-sand/40`}
                />
              </div>
              <p className="mt-2 font-semibold text-[13px] text-ink">
                {c.name}
              </p>
              <p className="text-[12px] text-slate font-mono">
                {c.ink} / {c.soft}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Colors: Subjects */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Subject Colors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {subjects.map((s, i) => {
            const Icon = subjectIcons[i];
            return (
              <div key={s.key}>
                <div
                  className={`${s.softClass} h-24 rounded-xl border border-sand/40 flex items-center justify-center`}
                >
                  <Icon className={`h-8 w-8 ${s.inkClass}`} />
                </div>
                <p className={`mt-2 font-semibold text-[13px] ${s.inkClass}`}>
                  {s.shortName}
                </p>
                <p className="text-[12px] text-slate">{s.name}</p>
              </div>
            );
          })}
        </div>
      </SectionShell>

      {/* Typography */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Typography Scale
        </h2>
        <div className="space-y-6">
          {typeScale.map((t) => {
            const [size, line] = t.size.split("/");
            return (
              <div key={t.token} className="border-b border-sand pb-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[12px] font-mono text-slate bg-linen px-2 py-0.5 rounded">
                    {t.token}
                  </span>
                  <span className="text-[12px] text-slate">
                    {size}px / {line}px
                  </span>
                </div>
                <p
                  className={t.font === "display" ? "font-display" : "font-body"}
                  style={{
                    fontSize: `${size}px`,
                    lineHeight: `${line}px`,
                    letterSpacing:
                      t.font === "display" ? "-0.03em" : undefined,
                  }}
                >
                  {t.sample}
                </p>
              </div>
            );
          })}
        </div>
      </SectionShell>

      {/* Spacing */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Spacing Scale
        </h2>
        <div className="space-y-3">
          {spacingScale.map((s) => (
            <div key={s} className="flex items-center gap-4">
              <span className="text-[13px] font-mono text-slate w-12 text-right">
                {s}px
              </span>
              <div
                className="bg-teal/20 rounded-sm"
                style={{ width: `${s}px`, height: "24px" }}
              />
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Border Radius */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Border Radius
        </h2>
        <div className="flex flex-wrap gap-6">
          {radiusScale.map((r) => (
            <div key={r.name} className="text-center">
              <div
                className="w-20 h-20 bg-teal-soft border-2 border-teal/30"
                style={{ borderRadius: r.value }}
              />
              <p className="mt-2 font-semibold text-[13px] text-ink">
                {r.name}
              </p>
              <p className="text-[12px] text-slate font-mono">{r.value}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Shadows */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Shadow Scale
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div
              key={s}
              className={`bg-paper rounded-2xl p-6 shadow-${s}`}
            >
              <p className="font-semibold text-[15px] text-ink">shadow-{s}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Buttons */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Buttons
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="warm">Warm / Conversion</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="default">Default size</Button>
              <Button size="lg">Large size</Button>
            </div>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              With Icons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button icon={<BookOpen className="h-4 w-4" />}>
                Explore Curriculum
              </Button>
              <Button
                variant="warm"
                icon={<Compass className="h-4 w-4" />}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Cards */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-display text-[24px] text-ink mb-2">
              Default Card
            </h3>
            <p className="text-[15px] text-slate">
              Paper background with sand border. Clean, calm, and structured.
            </p>
          </Card>
          <Card variant="elevated" hover>
            <h3 className="font-display text-[24px] text-ink mb-2">
              Elevated Card
            </h3>
            <p className="text-[15px] text-slate">
              With shadow and hover lift effect for interactive elements.
            </p>
          </Card>
          <Card
            variant="subject"
            subjectSoftClass="bg-math-soft"
            subjectInkClass="text-math-ink"
            hover
          >
            <h3 className="font-display text-[24px] mb-2">
              Subject Card
            </h3>
            <p className="text-[15px] opacity-80">
              Tinted with a subject color for contextual identification.
            </p>
          </Card>
        </div>
      </SectionShell>

      {/* Chips */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Chips
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Brand Chips
            </h3>
            <div className="flex flex-wrap gap-2">
              <Chip>Screen-light</Chip>
              <Chip variant="teal">Concept-first</Chip>
              <Chip variant="terracotta">Free trial</Chip>
            </div>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Subject Chips
            </h3>
            <div className="flex flex-wrap gap-2">
              {subjects.map((s, i) => {
                const Icon = subjectIcons[i];
                return (
                  <Chip
                    key={s.key}
                    variant="subject"
                    subjectSoftClass={s.softClass}
                    subjectInkClass={s.inkClass}
                    icon={<Icon className="h-3.5 w-3.5" />}
                  >
                    {s.shortName}
                  </Chip>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Section Shells */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Section Backgrounds
        </h2>
      </SectionShell>
      <SectionShell bg="paper" className="!py-6">
        <p className="text-[15px] text-slate">bg=&quot;paper&quot; (default)</p>
      </SectionShell>
      <SectionShell bg="paper-alt" className="!py-6">
        <p className="text-[15px] text-slate">bg=&quot;paper-alt&quot;</p>
      </SectionShell>
      <SectionShell bg="linen" className="!py-6">
        <p className="text-[15px] text-slate">bg=&quot;linen&quot;</p>
      </SectionShell>
      <SectionShell bg="teal" className="!py-6">
        <p className="text-[15px] text-paper/80">bg=&quot;teal&quot;</p>
      </SectionShell>
      <SectionShell bg="terracotta-soft" className="!py-6">
        <p className="text-[15px] text-slate">bg=&quot;terracotta-soft&quot;</p>
      </SectionShell>

      {/* Accordion */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Accordion / FAQ
        </h2>
        <div className="max-w-[760px]">
          <Accordion items={faqDemo} />
        </div>
      </SectionShell>

      {/* Pricing Cards */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Pricing Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px]">
          <PricingCard
            plan="Monthly"
            price={"₹1,000"}
            period="child / month"
            features={[
              "Full curriculum across 8 subjects",
              "Adaptive daily planning",
              "Parent coaching language",
              "Printables included",
              "Progress tracking",
            ]}
            ctaText="Start free trial"
            ctaHref="#"
          />
          <PricingCard
            plan="Annual"
            price={"₹10,000"}
            period="child / year"
            savings="Save ₹2,000"
            highlighted
            features={[
              "Everything in Monthly",
              "Save ₹2,000 per child per year",
              "Full year of guided learning",
              "Priority support",
              "Annual growth story",
            ]}
            ctaText="Start free trial"
            ctaHref="#"
          />
        </div>
      </SectionShell>

      {/* FlowDiagram */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Flow Diagram
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Linear Flow (Vertical)
            </h3>
            <FlowDiagram
              title="CURRICULUM STRUCTURE"
              caption="Learning flows from broad stages down to specific concepts."
              direction="vertical"
              nodes={[
                { id: "stages", label: "6 Stages", description: "Age 4 through Grade 4" },
                { id: "subjects", label: "8 Subjects", description: "Full curriculum breadth" },
                { id: "concepts", label: "Concepts", description: "Real units of learning", variant: "teal" },
                { id: "evidence", label: "Evidence", description: "Can the child use it?" },
                { id: "revisit", label: "Revisit", description: "Spaced return to deepen" },
              ]}
              connections={[
                { from: "stages", to: "subjects", label: "organised into" },
                { from: "subjects", to: "concepts", label: "built from" },
                { from: "concepts", to: "evidence", label: "assessed via" },
                { from: "evidence", to: "revisit", label: "informs" },
                { from: "revisit", to: "concepts", label: "deepens", dashed: true },
              ]}
            />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Grouped Flow (Horizontal)
            </h3>
            <FlowDiagram
              title="THE LEARNING ARC"
              caption="Every concept follows this progression from first noticing to lasting understanding."
              direction="vertical"
              nodes={[
                { id: "notice", label: "Notice", description: "Observe something real" },
                { id: "explore", label: "Explore", description: "Touch, sort, test" },
                { id: "talk", label: "Talk", description: "Describe, question" },
                { id: "represent", label: "Represent", description: "Draw, build, model" },
                { id: "connect", label: "Connect", description: "Link to life" },
                { id: "revisit", label: "Revisit", description: "Return to deepen" },
              ]}
              connections={[
                { from: "notice", to: "explore" },
                { from: "explore", to: "talk" },
                { from: "talk", to: "represent" },
                { from: "represent", to: "connect" },
                { from: "connect", to: "revisit" },
              ]}
              groups={[
                { label: "Experience", nodeIds: ["notice", "explore", "talk"] },
                { label: "Understanding", nodeIds: ["represent", "connect"] },
                { label: "Transfer", nodeIds: ["revisit"] },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* StepFlow */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Step Flow
        </h2>
        <StepFlow
          steps={[
            { number: 1, title: "Tell us about your child", description: "Age, stage, subject readiness" },
            { number: 2, title: "Open today's session", description: "Guided plan with materials and prompts" },
            { number: 3, title: "Learn together", description: "Talk, explore, represent, connect" },
            { number: 4, title: "Log observations", description: "What you noticed and what happened" },
            { number: 5, title: "Planner adapts", description: "Next session adjusts automatically" },
          ]}
        />
      </SectionShell>

      {/* ComparisonColumns */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Comparison Columns
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              Default Variant
            </h3>
            <ComparisonColumns
              left={{
                title: "What the system carries",
                items: ["Sequence and coverage", "Revisit timing", "Concept connections", "Parent scripts"],
              }}
              right={{
                title: "What you carry",
                items: ["Encouragement", "Patience and delight", "Emotional safety", "Real-life curiosity"],
              }}
            />
          </div>
        </div>
      </SectionShell>

      {/* FeatureGrid */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Feature Grid
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              3 Columns
            </h3>
            <FeatureGrid
              columns={3}
              features={[
                { icon: <Eye className="h-5 w-5" />, title: "Notice", description: "Start with something visible, familiar, or surprising." },
                { icon: <Search className="h-5 w-5" />, title: "Explore", description: "Touch it, sort it, compare it, test it." },
                { icon: <MessageCircle className="h-5 w-5" />, title: "Talk", description: "Describe, retell, guess, explain." },
                { icon: <Lightbulb className="h-5 w-5" />, title: "Represent", description: "Draw, mark, act out, build, model." },
                { icon: <ArrowRight className="h-5 w-5" />, title: "Connect", description: "Link to real life and earlier learning." },
                { icon: <RefreshCw className="h-5 w-5" />, title: "Revisit", description: "Return later for deeper understanding." },
              ]}
            />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate mb-4">
              4 Columns
            </h3>
            <FeatureGrid
              columns={4}
              features={subjects.slice(0, 4).map((s, i) => ({
                icon: [<BookOpen key={0} className="h-5 w-5" />, <Calculator key={1} className="h-5 w-5" />, <Leaf key={2} className="h-5 w-5" />, <Globe key={3} className="h-5 w-5" />][i],
                title: s.shortName,
                description: s.description,
              }))}
            />
          </div>
        </div>
      </SectionShell>

      {/* StatStrip */}
      <SectionShell>
        <h2 className="font-display text-[32px] leading-[38px] text-ink mb-8">
          Stat Strip
        </h2>
        <StatStrip
          stats={[
            { value: "8", label: "Subjects" },
            { value: "6", label: "Stages" },
            { value: "15", label: "Day Trial" },
            { value: "9", label: "Step Arc" },
          ]}
        />
      </SectionShell>
    </div>
  );
}
