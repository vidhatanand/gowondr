import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Chip } from "@/components/ui/Chip";
import { StrandMapSVG } from "@/components/ui/StrandMapSVG";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Users, Building2, Map, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "World learning and social studies for kids at home",
  description:
    "Help children understand people, places, community, money, culture, fairness, routines, and everyday systems with world learning at home.",
};

const strands = [
  {
    name: "Self, Family & Community",
    description:
      "Understanding personal identity, family roles, neighbours, helpers, and how communities work together.",
  },
  {
    name: "Needs, Wants & Money",
    description:
      "Distinguishing needs from wants, understanding where things come from, basic money concepts, saving, and fairness.",
  },
  {
    name: "Time, Routines & Geography",
    description:
      "Days, seasons, calendars, maps, directions, local places, near and far, physical features of the world.",
  },
  {
    name: "Culture, Rules & Responsibility",
    description:
      "Traditions, celebrations, languages, rules and fairness, caring for shared spaces, understanding services and the environment.",
  },
];

const examples = [
  "A child draws a map of their street, marking the bakery, the park, and the neighbour\u2019s house.",
  "At the grocery store, a child sorts items into \u201Cthings we need\u201D and \u201Cthings we want\u201D and talks about why.",
  "A child interviews a grandparent about what school was like when they were young and notices differences.",
  "After learning about recycling, a child sorts household waste and explains where each type goes.",
  "A child creates a weekly schedule with pictures, placing meals, play, learning, and rest in order.",
];

export default function WorldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "World Learning, Society & Life Systems",
              url: "/subjects/world-learning-society-life",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "World Learning, Society & Life Systems curriculum",
          type: "Course",
          description:
            "Parent-led world learning, society, and life systems curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Subjects", href: "/subjects" },
            { label: "World Learning, Society & Life Systems" },
          ]}
        />
        <Chip variant="subject" subjectSoftClass="bg-world-soft" subjectInkClass="text-world-ink">
          World Learning, Society & Life Systems
        </Chip>
        <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          World learning, society, and life systems for kids at home
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
          Children should learn not only what exists, but how life works.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
          This strand of the{" "}
          <InternalLink href="/subjects">
            8-subject home learning curriculum
          </InternalLink>{" "}
          helps children understand the world they live in: self and family,
          community, needs and wants, money, time and routines, geography,
          culture, rules and fairness, services, and the environment. Grounded in{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum maps
          </InternalLink>{" "}
          so understanding deepens over time.
        </p>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <StrandMapSVG
          subject="World"
          color="#886328"
          bg="#F4EDE1"
          title="WORLD LEARNING STRAND MAP"
          caption="Children move from understanding self and family outward — to community, place, culture, and the systems that shape daily life."
          strands={[
            { label: "Self & Family", concepts: ["Identity & roles", "Relationships", "Daily routines"] },
            { label: "Community", concepts: ["Helpers & services", "Rules & fairness", "Cooperation"] },
            { label: "Place & Culture", concepts: ["Geography & maps", "Traditions", "Environment & care"] },
            { label: "Life Systems", concepts: ["Needs vs wants", "Money & exchange", "Work & value"] },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={2} features={[
          { icon: <Users className="h-5 w-5" />, title: "Self, Family & Community", description: "Understanding personal identity, family roles, neighbours, helpers, and how communities work together." },
          { icon: <Building2 className="h-5 w-5" />, title: "Needs, Wants & Money", description: "Distinguishing needs from wants, understanding where things come from, basic money concepts, saving, and fairness." },
          { icon: <Map className="h-5 w-5" />, title: "Time, Routines & Geography", description: "Days, seasons, calendars, maps, directions, local places, near and far, physical features of the world." },
          { icon: <Globe className="h-5 w-5" />, title: "Culture, Rules & Responsibility", description: "Traditions, celebrations, languages, rules and fairness, caring for shared spaces, understanding services and the environment." },
        ]} />
      </SectionShell>

      {/* What children build */}
      <SectionShell bg="paper" id="what-children-build">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What children build here
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            World learning is where a child begins to see themselves as part of
            something larger. It is not facts about countries and capitals. It is
            understanding how families work, why rules exist, where food comes
            from, and what it means to be fair.
          </p>
          <p>
            This is the kind of{" "}
            <InternalLink href="/research/breadth-future-ready-ai-world">
              breadth that prepares children for an AI-shaped world
            </InternalLink>
            : the ability to see systems, ask why, and care about others.
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
              <span className="font-display text-world-ink font-semibold shrink-0">
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
            The guide weaves world learning into everyday life. It suggests
            conversations to have at the dinner table, walks to take with
            purpose, and small projects that connect your child to the world
            around them.
          </p>
          <p>
            Every activity comes with context for you as the parent so you can
            guide with confidence. See{" "}
            <InternalLink href="/how-it-works">
              how the daily learning guide works
            </InternalLink>{" "}
            to understand the full experience.
          </p>
        </div>
      </SectionShell>

      {/* Close + CTA */}
      <SectionShell bg="teal">
        <div className="text-center">
          <p className="text-[17px] leading-[28px] opacity-90 max-w-lg mx-auto mb-4">
            A child who understands the world they live in is better prepared to
            shape the one they will inherit.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
