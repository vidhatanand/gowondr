import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Chip } from "@/components/ui/Chip";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Hash, Layers, Ruler, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Parent-led math curriculum for kids at home",
  description:
    "Build number sense, operations, geometry, measurement, data, pattern recognition, and reasoning with a parent-led math curriculum for kids at home.",
};

const strands = [
  {
    name: "Number Sense & Counting",
    description:
      "Sorting, patterns, counting with meaning, one-to-one correspondence, subitising, understanding quantity.",
  },
  {
    name: "Operations & Place Value",
    description:
      "Addition, subtraction, grouping, early multiplication thinking, place value, fractions as parts of a whole.",
  },
  {
    name: "Measurement & Geometry",
    description:
      "Comparing lengths, weights, and capacity. Recognising shapes, symmetry, spatial reasoning, position and direction.",
  },
  {
    name: "Data, Estimation & Chance",
    description:
      "Collecting and sorting information, reading simple charts, estimating, exploring likelihood and fairness.",
  },
];

const examples = [
  "A child sorts a bowl of buttons by colour and then re-sorts by size, discovering that groups can overlap.",
  "While baking, a child measures flour using cups and notices that two halves fill one whole.",
  "A five-year-old counts the steps from the door to the garden, then estimates how many steps to the gate.",
  "A child builds a symmetrical tower with blocks, checks it from both sides, and adjusts one piece.",
  "After collecting leaves, a child makes a simple bar chart showing which tree gave the most.",
];

export default function MathPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Math, Logic & Patterns",
              url: "/subjects/math-logic-patterns",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Math, Logic & Patterns curriculum",
          type: "Course",
          description:
            "Parent-led math, logic, and patterns curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Subjects", href: "/subjects" },
            { label: "Math, Logic & Patterns" },
          ]}
        />
        <Chip variant="subject" subjectSoftClass="bg-math-soft" subjectInkClass="text-math-ink">
          Math, Logic & Patterns
        </Chip>
        <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          Math, logic, and patterns for kids at home
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
          Math should feel sensible, visible, and grounded.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
          This strand of the{" "}
          <InternalLink href="/subjects">
            8-subject home learning curriculum
          </InternalLink>{" "}
          builds mathematical thinking from the ground up: sorting, patterns,
          counting, number sense, operations, place value, fractions,
          measurement, geometry, data, estimation, and chance. Structured around{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum maps
          </InternalLink>{" "}
          so each idea arrives at the right time.
        </p>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <FlowDiagram
          title="MATH STRAND MAP"
          caption="Number sense is the foundation. Operations build on it, measurement applies it, and data connects patterns across all mathematical thinking."
          direction="vertical"
          nodes={[
            { id: "number", label: "Number Sense", description: "Counting, comparing, subitising" },
            { id: "ops", label: "Operations", description: "Add, subtract, place value, multiply" },
            { id: "measure", label: "Measurement", description: "Length, weight, shapes, position" },
            { id: "data", label: "Data & Patterns", description: "Sorting, graphs, pattern recognition" },
          ]}
          connections={[
            { from: "number", to: "ops", label: "foundation" },
            { from: "number", to: "measure", label: "applied in" },
            { from: "data", to: "number", label: "supports" },
            { from: "ops", to: "measure", label: "used in" },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={2} features={[
          { icon: <Hash className="h-5 w-5" />, title: "Number Sense & Counting", description: "Sorting, patterns, counting with meaning, one-to-one correspondence, subitising, understanding quantity." },
          { icon: <Layers className="h-5 w-5" />, title: "Operations & Place Value", description: "Addition, subtraction, grouping, early multiplication thinking, place value, fractions as parts of a whole." },
          { icon: <Ruler className="h-5 w-5" />, title: "Measurement & Geometry", description: "Comparing lengths, weights, and capacity. Recognising shapes, symmetry, spatial reasoning, position and direction." },
          { icon: <BarChart3 className="h-5 w-5" />, title: "Data, Estimation & Chance", description: "Collecting and sorting information, reading simple charts, estimating, exploring likelihood and fairness." },
        ]} />
      </SectionShell>

      {/* What children build */}
      <SectionShell bg="paper" id="what-children-build">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What children build here
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Math at home is not about speed or memorisation. It is about seeing
            how the world is structured. A child who understands that five is
            one more than four, that a square has equal sides, that halving
            something creates two equal parts, is building a framework for
            reasoning that will serve them everywhere.
          </p>
          <p>
            The guide draws on{" "}
            <InternalLink href="/research/concept-first-coverage">
              concept-based curriculum research
            </InternalLink>{" "}
            to make sure each mathematical idea is introduced concretely,
            practised meaningfully, and revisited as the child grows.
          </p>
        </div>
      </SectionShell>

      {/* Example moments */}
      <SectionShell bg="linen" id="examples">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          Example moments
        </h2>
        <ol className="space-y-4 max-w-2xl">
          {examples.map((example, i) => (
            <li
              key={i}
              className="flex gap-4 text-[17px] leading-[28px] text-slate"
            >
              <span className="font-display text-math-ink font-semibold shrink-0">
                {i + 1}.
              </span>
              <span>{example}</span>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* How the guide helps */}
      <SectionShell bg="paper" id="how-the-guide-helps">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          How the guide helps
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Each day, the guide suggests a focused math activity using everyday
            materials. It explains the concept behind the activity, offers
            language prompts you can use, and tells you what to look for as
            evidence of understanding.
          </p>
          <p>
            You do not need to be confident in math yourself. The guide makes
            the reasoning visible so you can support it naturally. See{" "}
            <InternalLink href="/how-it-works">
              how the daily learning guide works
            </InternalLink>{" "}
            for a closer look.
          </p>
        </div>
      </SectionShell>

      {/* Close + CTA */}
      <SectionShell bg="teal">
        <div className="text-center">
          <p className="text-[17px] leading-[28px] opacity-90 max-w-lg mx-auto mb-4">
            Math is not a talent. It is a way of seeing. Give your child the
            chance to see clearly, from the very beginning.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
