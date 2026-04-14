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
import { Paintbrush, Hammer, Music, Drama, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Arts and creative expression for kids at home",
  description:
    "Help children draw, make, sing, move, act, and create with an arts and creative expression curriculum that supports learning across the whole child.",
};

const strands = [
  {
    name: "Visual Arts",
    description:
      "Drawing, painting, printmaking, collage, colour mixing, observational sketching, exploring line, shape, and texture.",
  },
  {
    name: "Craft, Design & Making",
    description:
      "Building with recycled materials, sewing, weaving, model making, designing for a purpose, iterating on ideas.",
  },
  {
    name: "Music",
    description:
      "Singing, rhythm, beat, tempo, dynamics, simple instruments, listening, responding to music, creating patterns of sound.",
  },
  {
    name: "Dance & Movement",
    description:
      "Moving to music, exploring space and levels, creating sequences, expressing feelings through the body.",
  },
  {
    name: "Drama & Storytelling",
    description:
      "Role play, puppet shows, retelling stories, improvisation, using voice and gesture to communicate.",
  },
  {
    name: "Aesthetic Response & Creative Process",
    description:
      "Responding to art, noticing beauty, reflecting on their own work, learning to describe what they see and feel.",
  },
];

const examples = [
  "A child mixes two paint colours, discovers a new shade, and names it after something in nature.",
  "Using cardboard boxes and tape, a child designs a house for a toy animal, testing whether the door opens properly.",
  "A child listens to two pieces of music and describes one as \u201Cslow and sad\u201D and the other as \u201Cjumpy and excited.\u201D",
  "A child creates a short dance that tells the story of a seed growing into a tree, choosing three different movements.",
  "After making a clay figure, a child looks at it from different angles and decides to change the arms.",
];

export default function ArtsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Arts, Design & Creative Expression",
              url: "/subjects/arts-design-creative-expression",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Arts, Design & Creative Expression curriculum",
          type: "Course",
          description:
            "Parent-led arts, design, and creative expression curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/subject-arts-1.webp", "/images/subject-arts-2.webp"]} />
        <div className="relative z-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Subjects", href: "/subjects" },
            { label: "Arts, Design & Creative Expression" },
          ]}
        />
        <Chip variant="subject" subjectSoftClass="bg-arts-soft" subjectInkClass="text-arts-ink">
          Arts, Design & Creative Expression
        </Chip>
        <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          Arts, design, and creative expression for kids at home
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
          Expression is not extra. It is part of understanding.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
          This strand of the{" "}
          <InternalLink href="/subjects">
            8-subject home learning curriculum
          </InternalLink>{" "}
          gives children space to draw, make, sing, move, act, and create.
          Visual arts, craft, design, music, dance, drama, storytelling,
          aesthetic response, and creative process \u2014 all structured through{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum maps
          </InternalLink>{" "}
          so creativity develops with intention.
        </p>
        </div>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <StrandMapSVG
          subject="Arts"
          color="#7A5AA6"
          bg="#EFE9EF"
          title="ARTS & EXPRESSION STRAND MAP"
          caption="Children make, perform, and respond — and each strengthens the others."
          strands={[
            { label: "Making", concepts: ["Drawing & painting", "Craft & construction", "Design for purpose"] },
            { label: "Performing", concepts: ["Music & rhythm", "Dance & movement", "Drama & storytelling"] },
            { label: "Responding", concepts: ["Aesthetic awareness", "Talking about art", "Expression & meaning"] },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={3} features={[
          { icon: <Paintbrush className="h-5 w-5" />, title: "Visual Arts", description: "Drawing, painting, printmaking, collage, colour mixing, observational sketching, exploring line, shape, and texture." },
          { icon: <Hammer className="h-5 w-5" />, title: "Craft, Design & Making", description: "Building with recycled materials, sewing, weaving, model making, designing for a purpose, iterating on ideas." },
          { icon: <Music className="h-5 w-5" />, title: "Music", description: "Singing, rhythm, beat, tempo, dynamics, simple instruments, listening, responding to music, creating patterns of sound." },
          { icon: <Sparkles className="h-5 w-5" />, title: "Dance & Movement", description: "Moving to music, exploring space and levels, creating sequences, expressing feelings through the body." },
          { icon: <Drama className="h-5 w-5" />, title: "Drama & Storytelling", description: "Role play, puppet shows, retelling stories, improvisation, using voice and gesture to communicate." },
          { icon: <Sparkles className="h-5 w-5" />, title: "Aesthetic Response & Creative Process", description: "Responding to art, noticing beauty, reflecting on their own work, learning to describe what they see and feel." },
        ]} />
      </SectionShell>

      {/* What children build */}
      <SectionShell bg="paper" id="what-children-build">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What children build here
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            The arts are not a reward for finishing other subjects. They are a
            way of thinking. A child who draws an observation is thinking
            scientifically. A child who acts out a story is practising language.
            A child who designs and builds is doing engineering.
          </p>
          <p>
            The guide uses{" "}
            <InternalLink href="/research/thinking-routines-visible-understanding">
              thinking routines research
            </InternalLink>{" "}
            to help children slow down, look closely, and reflect on what they
            create. Artistic expression becomes a tool for deeper understanding
            across every subject.
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
              <span className="font-display text-arts-ink font-semibold shrink-0">
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
            Each arts activity comes with simple instructions, materials you
            already have, and prompts to help your child think about what they
            are making and why. The guide does not ask for perfection. It asks
            for engagement.
          </p>
          <p>
            You do not need to be artistic yourself. You need to be willing to
            sit alongside your child and say, &quot;Tell me about what you
            made.&quot; Learn more about{" "}
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
            Every child is born creative. The question is whether we give them
            the space, the materials, and the invitation to stay that way.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
