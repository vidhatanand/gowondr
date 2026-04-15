import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Chip } from "@/components/ui/Chip";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { StrandMapSVG } from "@/components/ui/StrandMapSVG";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Brain, Users, Scale, ShieldCheck, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Life skills and personal development for kids",
  description:
    "Build emotional awareness, relationships, health, safety, movement, responsibility, and self-management with a calm, parent-led life skills curriculum for kids.",
  alternates: { canonical: "/subjects/personal-development-health-life-skills" }
};

const strands = [
  {
    name: "Self-Awareness & Emotional Development",
    description:
      "Naming feelings, recognising emotions in self and others, building confidence, managing frustration, developing a growth mindset.",
  },
  {
    name: "Relationships & Social Skills",
    description:
      "Sharing, turn-taking, empathy, resolving conflict, cooperation, kindness, understanding boundaries.",
  },
  {
    name: "Values, Ethics & Responsibility",
    description:
      "Honesty, fairness, gratitude, caring for belongings, contributing to the household, understanding right and wrong.",
  },
  {
    name: "Health, Hygiene & Safety",
    description:
      "Personal hygiene, nutrition basics, sleep routines, body safety, road safety, knowing when and how to ask for help.",
  },
  {
    name: "Physical Development & Movement",
    description:
      "Gross motor skills, fine motor skills, coordination, balance, body awareness, active play.",
  },
];

const examples = [
  "A child names three feelings they had today and draws a face for each one in a small journal.",
  "After a disagreement with a sibling, a child practises saying, \u201CI felt upset when...\u201D instead of shouting.",
  "A child sets the table independently, remembering where each item goes without being reminded.",
  "During a walk, a child identifies safe places to cross the road and explains why they chose them.",
  "A child tries a new balance activity, falls, and says, \u201CI\u2019ll try again differently,\u201D without prompting.",
];

export default function PersonalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Personal Development, Health & Life Skills",
              url: "/subjects/personal-development-health-life-skills",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Personal Development, Health & Life Skills curriculum",
          type: "Course",
          description:
            "Parent-led personal development, health, and life skills curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/subject-personal-1.webp", "/images/subject-personal-2.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Subjects", href: "/subjects" },
              { label: "Personal Development, Health & Life Skills" },
            ]}
          />
          <Chip variant="subject" subjectSoftClass="bg-personal-soft" subjectInkClass="text-personal-ink">
            Personal Development, Health & Life Skills
          </Chip>
          <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Personal development, health, and life skills for kids
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
            Learning is not separate from the child&apos;s inner life.
          </p>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            This strand of the{" "}
            <InternalLink href="/subjects">
              8-subject home learning curriculum
            </InternalLink>{" "}
            nurtures the whole child: self-awareness, emotional regulation,
            relationships, values, health, hygiene, safety, and physical
            development. Woven through{" "}
            <InternalLink href="/curriculum-coverage">
              concept-based curriculum maps
            </InternalLink>{" "}
            so personal growth is intentional, not incidental.
          </p>
        </div>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <StrandMapSVG
          subject="Personal"
          color="#94536C"
          bg="#F4EAEA"
          title="PERSONAL DEVELOPMENT STRAND MAP"
          caption="Inner awareness builds the foundation for healthy relationships, ethical values, and physical wellbeing."
          strands={[
            { label: "Inner Development", concepts: ["Naming feelings", "Managing frustration", "Growth mindset"] },
            { label: "Relationships", concepts: ["Empathy & kindness", "Sharing & turn-taking", "Conflict resolution"] },
            { label: "Values & Ethics", concepts: ["Fairness & honesty", "Responsibility", "Respect for others"] },
            { label: "Health & Body", concepts: ["Hygiene & self-care", "Safety awareness", "Movement"] },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={3} features={[
          { icon: <Brain className="h-5 w-5" />, title: "Self-Awareness & Emotional Development", description: "Naming feelings, recognising emotions in self and others, building confidence, managing frustration, developing a growth mindset." },
          { icon: <Users className="h-5 w-5" />, title: "Relationships & Social Skills", description: "Sharing, turn-taking, empathy, resolving conflict, cooperation, kindness, understanding boundaries." },
          { icon: <Scale className="h-5 w-5" />, title: "Values, Ethics & Responsibility", description: "Honesty, fairness, gratitude, caring for belongings, contributing to the household, understanding right and wrong." },
          { icon: <ShieldCheck className="h-5 w-5" />, title: "Health, Hygiene & Safety", description: "Personal hygiene, nutrition basics, sleep routines, body safety, road safety, knowing when and how to ask for help." },
          { icon: <Activity className="h-5 w-5" />, title: "Physical Development & Movement", description: "Gross motor skills, fine motor skills, coordination, balance, body awareness, active play." },
        ]} />
      </SectionShell>

      {/* What it feels like */}
      <SectionShell bg="paper" id="what-it-feels-like">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What this subject feels like
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Personal development is not a separate lesson. It is the thread that
            runs through every other subject. When a child learns to name their
            frustration, persist through difficulty, show kindness to a sibling,
            and take care of their body, they are building the foundation for
            every kind of learning.
          </p>
          <p>
            The guide draws on{" "}
            <InternalLink href="/research/parent-child-connection-learning">
              parent-child connection research
            </InternalLink>{" "}
            to support these moments gently. It does not lecture. It gives you
            language, moments, and prompts to help your child grow from the
            inside out.
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
              <span className="font-display text-personal-ink font-semibold shrink-0">
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
            Each day, the guide offers small, age-appropriate activities that
            build emotional vocabulary, social confidence, and practical life
            skills. It tells you what to say, what to notice, and how to
            respond when things get difficult.
          </p>
          <p>
            This is not about perfection. It is about presence. Learn more about{" "}
            <InternalLink href="/how-it-works">
              how the daily learning guide works
            </InternalLink>
            .
          </p>
        </div>
      </SectionShell>

      {/* Close + CTA */}
      <SectionShell bg="teal">
        <div className="text-center">
          <p className="text-[17px] leading-[28px] opacity-90 max-w-lg mx-auto mb-4">
            The most important thing a child learns is how to be themselves.
            Give them the language, habits, and confidence to do it well.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
