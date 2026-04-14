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
import { Search, Sprout, Magnet, CloudSun } from "lucide-react";

export const metadata: Metadata = {
  title: "Science curriculum and activities for kids at home",
  description:
    "Build observation, prediction, testing, explanation, and wonder with a science curriculum for kids at home using real-world materials and parent guidance.",
};

const strands = [
  {
    name: "Observation & Inquiry Skills",
    description:
      "Looking closely, asking questions, making predictions, recording observations, explaining findings.",
  },
  {
    name: "Living Things & the Natural World",
    description:
      "Plants, animals, habitats, the human body, life cycles, growth, and interdependence.",
  },
  {
    name: "Materials, Forces & Energy",
    description:
      "Properties of materials, changes, pushes and pulls, magnets, light, sound, and simple machines.",
  },
  {
    name: "Earth, Weather & Engineering",
    description:
      "Weather patterns, seasons, water, rocks, soil, building structures, testing designs.",
  },
];

const examples = [
  "A child watches an ice cube melt on a plate, draws what it looks like every five minutes, and describes what changed.",
  "After planting seeds in two cups \u2014 one in sunlight, one in a cupboard \u2014 a child predicts which will grow taller and checks daily.",
  "A child drops different objects from the same height and notices that weight does not always decide which lands first.",
  "Using a magnifying glass, a child examines a leaf and discovers veins running through it like tiny roads.",
  "A child builds a bridge from cardboard and tests how many small toys it can hold before it bends.",
];

export default function SciencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Science, Nature & Inquiry",
              url: "/subjects/science-nature-inquiry",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Science, Nature & Inquiry curriculum",
          type: "Course",
          description:
            "Parent-led science, nature, and inquiry curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/subject-science-1.jpg", "/images/subject-science-2.jpg"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Subjects", href: "/subjects" },
              { label: "Science, Nature & Inquiry" },
            ]}
          />
          <Chip variant="subject" subjectSoftClass="bg-science-soft" subjectInkClass="text-science-ink">
            Science, Nature & Inquiry
          </Chip>
          <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Science, nature, and inquiry for kids at home
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
            Science should feel like wonder disciplined by attention.
          </p>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            This strand of the{" "}
            <InternalLink href="/subjects">
              8-subject home learning curriculum
            </InternalLink>{" "}
            builds scientific thinking through real-world materials: observation,
            living things, plants, animals, the body, materials, forces, light,
            sound, weather, and engineering. Aligned with{" "}
            <InternalLink href="/curriculum-coverage">
              concept-based curriculum maps
            </InternalLink>{" "}
            so each investigation has purpose and progression.
          </p>
        </div>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <StrandMapSVG
          subject="Science"
          color="#4B744F"
          bg="#EAEDE5"
          title="SCIENCE STRAND MAP"
          caption="Inquiry skills are the engine — observation, questioning, prediction. They apply across all domains."
          strands={[
            { label: "Inquiry Skills", concepts: ["Observing closely", "Asking questions", "Making predictions"] },
            { label: "Living Things", concepts: ["Plants & growth", "Animals & habitats", "Body & health"] },
            { label: "Materials & Forces", concepts: ["Properties", "Pushes & pulls", "Light & sound"] },
            { label: "Earth & Weather", concepts: ["Weather patterns", "Seasons & change", "Earth & sky"] },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={2} features={[
          { icon: <Search className="h-5 w-5" />, title: "Observation & Inquiry Skills", description: "Looking closely, asking questions, making predictions, recording observations, explaining findings." },
          { icon: <Sprout className="h-5 w-5" />, title: "Living Things & the Natural World", description: "Plants, animals, habitats, the human body, life cycles, growth, and interdependence." },
          { icon: <Magnet className="h-5 w-5" />, title: "Materials, Forces & Energy", description: "Properties of materials, changes, pushes and pulls, magnets, light, sound, and simple machines." },
          { icon: <CloudSun className="h-5 w-5" />, title: "Earth, Weather & Engineering", description: "Weather patterns, seasons, water, rocks, soil, building structures, testing designs." },
        ]} />
      </SectionShell>

      {/* What it feels like */}
      <SectionShell bg="paper" id="what-it-feels-like">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What this subject feels like
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Science at home does not require a lab. It requires attention. A
            kitchen table, a garden, a walk to the park \u2014 these are your
            classrooms. The child who watches, predicts, tests, and explains is
            doing real science, with real materials, in real time.
          </p>
          <p>
            The guide uses a{" "}
            <InternalLink href="/research/playful-screen-light-learning">
              playful, screen-light approach
            </InternalLink>{" "}
            so that children learn through doing, not watching. Every
            investigation is designed to be led by a parent with ordinary
            household items.
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
              <span className="font-display text-science-ink font-semibold shrink-0">
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
            Each science activity comes with a clear question to explore,
            materials you already have, steps to follow, and prompts that help
            your child think like a scientist. The guide tells you what to
            observe and how to extend the investigation if your child is ready.
          </p>
          <p>
            You do not need a science background. You need curiosity and a
            willingness to say, &quot;Let&apos;s find out.&quot; Learn more about{" "}
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
            The world is already the most extraordinary laboratory. Help your
            child learn to see it that way.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
