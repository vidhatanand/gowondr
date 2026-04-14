import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { StepFlow } from "@/components/ui/StepFlow";

export const metadata: Metadata = {
  title: "Concept-based curriculum maps and learning progressions",
  description:
    "See how goPondr structures learning across stages, subjects, strands, concepts, evidence, and revisits so progress feels connected instead of random.",
  alternates: { canonical: "/curriculum-coverage" },
  openGraph: {
    title:
      "Concept-based curriculum maps and learning progressions | goPondr",
    description:
      "See how goPondr structures learning across stages, subjects, strands, concepts, evidence, and revisits so progress feels connected instead of random.",
    url: "/curriculum-coverage",
    type: "article",
    siteName: "goPondr",
  },
};

export default function CurriculumCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Curriculum & Coverage", url: "/curriculum-coverage" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Concept-based curriculum structure",
          type: "EducationalOccupationalProgram",
          description:
            "How the curriculum organizes learning through subjects, strands, concepts, evidence, and revisit",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/page-river-delta.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Curriculum & Coverage" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Coverage matters. Connected coverage matters more.
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
            Most curricula give you a list of topics. goPondr gives you
            a map: 6 stages, an{" "}
            <InternalLink href="/subjects">8-subject curriculum</InternalLink>,
            clear strands, concrete concepts, evidence of understanding, and
            built-in revisit so nothing important falls away.
          </p>
        </div>
      </SectionShell>

      {/* Why concept-first matters */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why concept-first matters
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Topics tell children what to study. Concepts tell them what to
            understand. When learning is organized around concepts, children
            build transferable knowledge: ideas that connect across subjects and
            stages, not isolated facts that fade after a test. This is supported
            by{" "}
            <InternalLink href="/research/concept-first-coverage">
              concept-based curriculum research
            </InternalLink>
            .
          </p>
        </div>
      </SectionShell>

      {/* Curriculum hierarchy diagram */}
      <SectionShell bg="linen" id="curriculum-hierarchy">
        <div>
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            How the curriculum is structured
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            Every layer connects to the next, so parents and children always
            know where they are and where they are going.
          </p>
          <div className="mt-8">
            <FlowDiagram
              title="CURRICULUM STRUCTURE"
              caption="Learning flows from broad stages down to specific concepts, then cycles through activities, evidence, and revisit to build durable understanding."
              direction="vertical"
              nodes={[
                { id: "stages", label: "6 Developmental Stages", description: "Age 4 through Grade 4" },
                { id: "subjects", label: "8 Subjects", description: "Reading, Math, Science, and 5 more" },
                { id: "strands", label: "Strands", description: "Major threads within each subject" },
                { id: "concepts", label: "Concepts", description: "The real units of learning", variant: "teal" },
                { id: "activities", label: "Multi-modal Activities", description: "Hands-on, talk, draw, move, play" },
                { id: "evidence", label: "Evidence", description: "Can the child explain and use it?" },
                { id: "revisit", label: "Revisit", description: "Spaced return to deepen understanding" },
              ]}
              connections={[
                { from: "stages", to: "subjects", label: "organised into" },
                { from: "subjects", to: "strands", label: "broken into" },
                { from: "strands", to: "concepts", label: "built from" },
                { from: "concepts", to: "activities", label: "taught through" },
                { from: "activities", to: "evidence", label: "assessed via" },
                { from: "evidence", to: "revisit", label: "informs" },
                { from: "revisit", to: "concepts", label: "deepens", dashed: true },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* 5-layer structure */}
      <SectionShell bg="paper" id="five-layers">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            The five layers of learning
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            From broad subjects down to individual revisits, each layer gives
            learning its shape.
          </p>
          <div className="mt-10">
            <StepFlow
              steps={[
                {
                  number: 1,
                  title: "Subject",
                  description:
                    "Eight broad areas of learning, from Mathematics to Inquiry and Life Skills.",
                },
                {
                  number: 2,
                  title: "Strand",
                  description:
                    "Major threads within a subject. For example, Number Sense and Geometry within Mathematics.",
                },
                {
                  number: 3,
                  title: "Concept",
                  description:
                    "A single, clear idea to understand. Not a topic to cover, but something to genuinely grasp.",
                },
                {
                  number: 4,
                  title: "Evidence",
                  description:
                    "What understanding looks like in practice. Observable signs that a concept has taken root.",
                },
                {
                  number: 5,
                  title: "Revisit",
                  description:
                    "Built-in return to earlier concepts at spaced intervals, so knowledge stays durable over time.",
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* Why this matters to parents */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why this matters to parents
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Without structure, home learning can feel random: a worksheet here,
            a video there, and no way to know whether it all adds up. With goPondr, every session connects to a concept, every concept
            belongs to a strand, and every strand serves a subject. You can
            always see the bigger picture, and so can your child.
          </p>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            The{" "}
            <InternalLink href="/adaptive-planner">
              adaptive planner
            </InternalLink>{" "}
            uses this structure to decide what comes next, so you spend your
            energy on the learning itself, not on planning it. See{" "}
            <InternalLink href="/how-it-works">how it works</InternalLink> in
            practice.
          </p>
        </div>
      </SectionShell>

      {/* Progress definition */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What progress actually means
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Progress is not a score. It is not a percentage. Progress means your
            child can explain a concept in their own words, use it in a new
            situation, and return to it later without starting from scratch.
            goPondr tracks this through parent observations, not
            tests, because understanding is something you witness, not something
            you measure with a number.
          </p>
        </div>
      </SectionShell>

      {/* Why revisit matters */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why revisit matters
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Children do not learn something once and keep it forever. Memory
            fades unless it is refreshed. goPondr schedules revisits
            automatically, bringing back earlier concepts at the right time so
            they stay strong. This is not repetition for the sake of repetition.
            It is spaced practice designed to make knowledge durable and
            connected.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See the full curriculum in action
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Start a 15-day free trial and explore every subject, strand, and
            concept for your child.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
            <Button variant="secondary" size="lg" href="/subjects">
              Browse all 8 subjects
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
