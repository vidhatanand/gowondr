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
import { Monitor, Keyboard, Globe, Wand2, ShieldCheck, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital literacy and computational thinking for kids",
  description:
    "Teach children how digital systems work, how to think logically, and how to stay safe online with age-appropriate, screen-light digital literacy for kids.",
};

const strands = [
  {
    name: "Digital Understanding",
    description:
      "How computers, the internet, and digital systems work. What data is, where it goes, and how machines follow instructions.",
  },
  {
    name: "Device Foundations & Productivity",
    description:
      "Basic device skills, typing awareness, file organisation, using simple tools for learning and creating.",
  },
  {
    name: "Internet, Information & Media",
    description:
      "Finding information, evaluating sources, understanding advertising, distinguishing fact from opinion online.",
  },
  {
    name: "Digital Creation",
    description:
      "Using simple tools to create \u2014 drawing apps, presentations, audio recordings \u2014 as a form of expression, not consumption.",
  },
  {
    name: "Digital Citizenship & Safety",
    description:
      "Online kindness, privacy basics, screen time awareness, knowing when to ask an adult, understanding digital footprints.",
  },
  {
    name: "Computational Thinking",
    description:
      "Sequencing, patterns, decomposition, logical reasoning, debugging, algorithms \u2014 mostly taught unplugged through conversation and play.",
  },
];

const examples = [
  "A child writes step-by-step instructions for making a sandwich, then follows them exactly to see if they work \u2014 an unplugged algorithm.",
  "A child sorts a set of picture cards into a sequence and explains what happens if one step is removed.",
  "During a conversation about a website, a child asks, \u201CHow does it know my name?\u201D and the parent explains cookies simply.",
  "A child spots an advertisement in an app and says, \u201CThat\u2019s not part of the game. It\u2019s trying to sell something.\u201D",
  "A child draws a flowchart for their morning routine, including a decision point: \u201CIs it raining? If yes, take an umbrella.\u201D",
];

export default function DigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Digital Literacy & Computational Thinking",
              url: "/subjects/digital-literacy-computational-thinking",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Digital Literacy & Computational Thinking curriculum",
          type: "Course",
          description:
            "Parent-led digital literacy and computational thinking curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden">
        <RandomHeroBg images={["/images/subject-digital-1.jpg", "/images/subject-digital-2.jpg"]} />
        <div className="relative z-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Subjects", href: "/subjects" },
            { label: "Digital Literacy & Computational Thinking" },
          ]}
        />
        <Chip variant="subject" subjectSoftClass="bg-digital-soft" subjectInkClass="text-digital-ink">
          Digital Literacy & Computational Thinking
        </Chip>
        <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          Digital literacy and computational thinking for kids
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
          Children need more than device fluency. They need judgment.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
          This strand of the{" "}
          <InternalLink href="/subjects">
            8-subject home learning curriculum
          </InternalLink>{" "}
          teaches children how digital systems work, how to think logically, and
          how to stay safe online. The approach is age-appropriate and
          screen-light: children learn through conversation, logic, and
          unplugged thinking. Mapped to{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum maps
          </InternalLink>{" "}
          so digital understanding grows alongside everything else.
        </p>
        </div>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <StrandMapSVG
          subject="Digital"
          color="#4966A8"
          bg="#E9EBEF"
          title="DIGITAL LITERACY STRAND MAP"
          caption="Digital literacy starts with understanding and judgment — not screen time."
          strands={[
            { label: "Understanding", concepts: ["What technology is", "How info moves", "Digital vocabulary"] },
            { label: "Computational Thinking", concepts: ["Step-by-step logic", "Pattern recognition", "Problem breakdown"] },
            { label: "Safety", concepts: ["What to share", "Boundaries online", "Respectful behaviour"] },
            { label: "Creation", concepts: ["Making with purpose", "Simple digital tools", "Guided screen use"] },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={3} features={[
          { icon: <Monitor className="h-5 w-5" />, title: "Digital Understanding", description: "How computers, the internet, and digital systems work. What data is, where it goes, and how machines follow instructions." },
          { icon: <Keyboard className="h-5 w-5" />, title: "Device Foundations & Productivity", description: "Basic device skills, typing awareness, file organisation, using simple tools for learning and creating." },
          { icon: <Globe className="h-5 w-5" />, title: "Internet, Information & Media", description: "Finding information, evaluating sources, understanding advertising, distinguishing fact from opinion online." },
          { icon: <Wand2 className="h-5 w-5" />, title: "Digital Creation", description: "Using simple tools to create \u2014 drawing apps, presentations, audio recordings \u2014 as a form of expression, not consumption." },
          { icon: <ShieldCheck className="h-5 w-5" />, title: "Digital Citizenship & Safety", description: "Online kindness, privacy basics, screen time awareness, knowing when to ask an adult, understanding digital footprints." },
          { icon: <Code className="h-5 w-5" />, title: "Computational Thinking", description: "Sequencing, patterns, decomposition, logical reasoning, debugging, algorithms \u2014 mostly taught unplugged through conversation and play." },
        ]} />
      </SectionShell>

      {/* What it feels like */}
      <SectionShell bg="paper" id="what-it-feels-like">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What this subject feels like
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Digital literacy at this age is not about screen time. It is about
            building the mental models that let a child navigate the digital
            world with confidence and caution. Most activities happen off-screen:
            sequencing games, logic puzzles, sorting tasks, and conversations
            about how technology works.
          </p>
          <p>
            The guide is informed by research on{" "}
            <InternalLink href="/research/digital-literacy-with-judgment">
              digital literacy with judgment
            </InternalLink>
            . It helps children understand technology rather than simply consume
            it, building the kind of thinking that will matter most as they grow.
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
              <span className="font-display text-digital-ink font-semibold shrink-0">
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
            Each activity explains the digital concept being introduced, gives
            you an unplugged or low-screen way to explore it, and offers
            conversation prompts that help your child think critically about
            technology.
          </p>
          <p>
            You do not need to be technically skilled. You need to be willing to
            think alongside your child about how the digital world works. See{" "}
            <InternalLink href="/how-it-works">
              how the daily learning guide works
            </InternalLink>{" "}
            for the full picture.
          </p>
        </div>
      </SectionShell>

      {/* Close + CTA */}
      <SectionShell bg="teal">
        <div className="text-center">
          <p className="text-[17px] leading-[28px] opacity-90 max-w-lg mx-auto mb-4">
            The children who thrive in a digital world will not be those who
            learned to swipe first. They will be those who learned to think
            first.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
