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
import { Lightbulb, MessageSquare, Users, Compass, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Inquiry-based learning and learning skills for kids",
  description:
    "Build thinking, communication, collaboration, reflection, and inquiry-based learning skills that help children learn across the full curriculum.",
};

const strands = [
  {
    name: "Learning Skills & Dispositions",
    description:
      "Curiosity, persistence, focus, flexibility, self-correction, willingness to try, comfort with not knowing yet.",
  },
  {
    name: "Thinking & Communication",
    description:
      "Asking good questions, explaining reasoning, comparing ideas, making connections, presenting findings clearly.",
  },
  {
    name: "Collaboration & Participation",
    description:
      "Working with others, listening to different perspectives, contributing to shared projects, giving and receiving feedback.",
  },
  {
    name: "Inquiry Contexts & Integrated Projects",
    description:
      "Cross-subject investigations, project-based learning, real-world problems, sustained inquiry over time.",
  },
  {
    name: "Reflection & Metacognition",
    description:
      "Thinking about thinking, noticing what helped, identifying what was hard, planning next steps, celebrating growth.",
  },
];

const examples = [
  "A child notices that two books give different answers to the same question and asks, \u201CWhich one is right, and how do we find out?\u201D",
  "After building a model bridge, a child explains what they would change next time and why.",
  "A child plans a small investigation \u2014 \u201CWhich fruit has the most seeds?\u201D \u2014 and carries it out over three days.",
  "During a family conversation, a child pauses and says, \u201CI changed my mind because I heard something new.\u201D",
  "A child draws a thinking map connecting a science observation to something they learned in world learning.",
];

export default function InquiryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Inquiry, Learning & Life Skills",
              url: "/subjects/inquiry-learning-life-skills",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Inquiry, Learning & Life Skills curriculum",
          type: "Course",
          description:
            "Parent-led inquiry, learning, and life skills curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Subjects", href: "/subjects" },
            { label: "Inquiry, Learning & Life Skills" },
          ]}
        />
        <Chip variant="subject" subjectSoftClass="bg-inquiry-soft" subjectInkClass="text-inquiry-ink">
          Inquiry, Learning & Life Skills
        </Chip>
        <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          Inquiry, learning, and life skills for kids
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
          The future belongs to children who can ask, connect, and adapt.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
          This strand of the{" "}
          <InternalLink href="/subjects">
            8-subject home learning curriculum
          </InternalLink>{" "}
          builds the skills that make all other learning possible: thinking,
          communication, collaboration, reflection, and sustained inquiry.
          Anchored in{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum maps
          </InternalLink>{" "}
          so these dispositions are developed deliberately, not left to chance.
        </p>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <FlowDiagram
          title="INQUIRY STRAND MAP"
          caption="Inquiry is the skill of learning itself — asking, thinking, collaborating, and growing in comfort with complexity."
          direction="vertical"
          nodes={[
            { id: "core", label: "Core Inquiry", description: "Asking, attending, connecting", variant: "teal" },
            { id: "thinking", label: "Thinking", description: "Comparing, explaining, revising" },
            { id: "social", label: "Collaboration", description: "Working together, listening, sharing" },
            { id: "growth", label: "Dispositions", description: "Persistence, curiosity, comfort with unknowns" },
          ]}
          connections={[
            { from: "core", to: "thinking", label: "drives" },
            { from: "thinking", to: "social", label: "shared via" },
            { from: "growth", to: "core", label: "sustains" },
            { from: "social", to: "growth", label: "strengthens" },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={3} features={[
          { icon: <Lightbulb className="h-5 w-5" />, title: "Learning Skills & Dispositions", description: "Curiosity, persistence, focus, flexibility, self-correction, willingness to try, comfort with not knowing yet." },
          { icon: <MessageSquare className="h-5 w-5" />, title: "Thinking & Communication", description: "Asking good questions, explaining reasoning, comparing ideas, making connections, presenting findings clearly." },
          { icon: <Users className="h-5 w-5" />, title: "Collaboration & Participation", description: "Working with others, listening to different perspectives, contributing to shared projects, giving and receiving feedback." },
          { icon: <Compass className="h-5 w-5" />, title: "Inquiry Contexts & Integrated Projects", description: "Cross-subject investigations, project-based learning, real-world problems, sustained inquiry over time." },
          { icon: <RotateCcw className="h-5 w-5" />, title: "Reflection & Metacognition", description: "Thinking about thinking, noticing what helped, identifying what was hard, planning next steps, celebrating growth." },
        ]} />
      </SectionShell>

      {/* What children build */}
      <SectionShell bg="paper" id="what-children-build">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What children build here
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Inquiry is not a subject in the traditional sense. It is the way a
            child approaches every subject. A child who can ask a good question,
            plan an investigation, reflect on what they found, and communicate
            their thinking is a child who can learn anything.
          </p>
          <p>
            The guide draws on{" "}
            <InternalLink href="/research/thinking-routines-visible-understanding">
              thinking routines research
            </InternalLink>{" "}
            to make these skills visible and practicable. Inquiry is not
            abstract. It is a set of habits that can be taught, modelled, and
            celebrated every day.
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
              <span className="font-display text-inquiry-ink font-semibold shrink-0">
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
            The guide weaves inquiry into every day. It suggests questions to
            ask, thinking routines to try, and reflection prompts that help your
            child notice how they are learning, not just what they are learning.
          </p>
          <p>
            Over time, these habits become second nature. Your child starts
            asking their own questions, making their own connections, and
            reflecting without being prompted. That is the goal. See{" "}
            <InternalLink href="/how-it-works">
              how the daily learning guide works
            </InternalLink>{" "}
            for the full experience.
          </p>
        </div>
      </SectionShell>

      {/* Close + CTA */}
      <SectionShell bg="teal">
        <div className="text-center">
          <p className="text-[17px] leading-[28px] opacity-90 max-w-lg mx-auto mb-4">
            The most valuable skill a child can develop is the ability to learn
            itself. Give them the habits, the language, and the confidence to
            keep learning long after the guide is gone.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
