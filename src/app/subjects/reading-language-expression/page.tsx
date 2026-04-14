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
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { BookOpen, Ear, Music, Pencil } from "lucide-react";

export const metadata: Metadata = {
  title: "Reading and language curriculum for kids at home",
  description:
    "Build oral language, phonics, comprehension, vocabulary, writing, and expression with a parent-led reading curriculum for kids learning at home.",
};

const strands = [
  {
    name: "Oral Language & Listening",
    description:
      "Conversations, storytelling, retelling, following directions, building vocabulary through talk.",
  },
  {
    name: "Phonological Awareness & Phonics",
    description:
      "Rhyme, syllables, letter-sound relationships, blending, segmenting, decoding.",
  },
  {
    name: "Reading Comprehension & Knowledge",
    description:
      "Understanding texts, making predictions, asking questions, connecting ideas, building background knowledge.",
  },
  {
    name: "Writing, Spelling & Expression",
    description:
      "Letter formation, inventive spelling, sentence building, journaling, creative and expository writing.",
  },
];

const examples = [
  "A four-year-old retells a story using three toy figures, narrating each character\u2019s voice.",
  "A child claps syllables in family members\u2019 names and discovers that \u201CGrandmother\u201D has three.",
  "After reading about a river, a child draws a map and labels it with invented spelling.",
  "A parent pauses mid-story and asks, \u201CWhat do you think will happen next?\u201D \u2014 and the child offers two possibilities.",
  "A child writes a letter to a friend, sounding out each word slowly, then reads it aloud with pride.",
];

export default function ReadingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
            {
              name: "Reading, Language & Expression",
              url: "/subjects/reading-language-expression",
            },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Reading, Language & Expression curriculum",
          type: "Course",
          description:
            "Parent-led reading, language, and expression curriculum for children ages 4 to Grade 4.",
          isPartOf: "8-subject home learning curriculum",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden">
        <RandomHeroBg images={["/images/subject-reading-1.jpg", "/images/subject-reading-2.jpg"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Subjects", href: "/subjects" },
              { label: "Reading, Language & Expression" },
            ]}
          />
          <Chip variant="subject" subjectSoftClass="bg-reading-soft" subjectInkClass="text-reading-ink">
            Reading, Language & Expression
          </Chip>
          <h1 className="mt-4 font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Reading, language, and expression for kids at home
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl italic">
            Reading is not just decoding. It is a whole language life.
          </p>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            This strand of the{" "}
            <InternalLink href="/subjects">
              8-subject home learning curriculum
            </InternalLink>{" "}
            builds every dimension of literacy: listening, speaking, reading,
            writing, and the confidence to express ideas. Mapped to{" "}
            <InternalLink href="/curriculum-coverage">
              concept-based curriculum maps
            </InternalLink>{" "}
            so nothing is missed and nothing is rushed.
          </p>
        </div>
      </SectionShell>

      {/* Strand structure */}
      <SectionShell bg="paper">
        <StrandMapSVG
          subject="Reading"
          color="#6A4E73"
          bg="#EDE8E9"
          title="READING & LANGUAGE STRAND MAP"
          caption="Each strand builds on the others — oral language supports phonics, decoding enables comprehension, and writing deepens the entire cycle."
          strands={[
            { label: "Oral Language", concepts: ["Vocabulary building", "Retelling & sequencing", "Following directions"] },
            { label: "Phonics", concepts: ["Rhyme & syllables", "Letter-sound links", "Blending & decoding"] },
            { label: "Comprehension", concepts: ["Prediction & inference", "Main idea & detail", "Connecting to knowledge"] },
            { label: "Writing", concepts: ["Letters & mark-making", "Sentence building", "Descriptive language"] },
          ]}
        />
      </SectionShell>

      {/* Strands */}
      <SectionShell bg="linen" id="strands">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8">
          What this subject includes
        </h2>
        <FeatureGrid columns={2} features={[
          { icon: <Ear className="h-5 w-5" />, title: "Oral Language & Listening", description: "Conversations, storytelling, retelling, following directions, building vocabulary through talk." },
          { icon: <Music className="h-5 w-5" />, title: "Phonological Awareness & Phonics", description: "Rhyme, syllables, letter-sound relationships, blending, segmenting, decoding." },
          { icon: <BookOpen className="h-5 w-5" />, title: "Reading Comprehension & Knowledge", description: "Understanding texts, making predictions, asking questions, connecting ideas, building background knowledge." },
          { icon: <Pencil className="h-5 w-5" />, title: "Writing, Spelling & Expression", description: "Letter formation, inventive spelling, sentence building, journaling, creative and expository writing." },
        ]} />
      </SectionShell>

      {/* What it feels like */}
      <SectionShell bg="paper" id="what-it-feels-like">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          What this subject feels like
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Language learning at home feels like conversation, not correction. A
            child who is listened to learns to listen. A child who is read to
            learns to read. A child who is invited to express themselves learns
            that their ideas matter.
          </p>
          <p>
            The guide supports you in creating these moments naturally,
            weaving phonics practice into play, comprehension questions into
            bedtime stories, and writing into daily life. It builds on{" "}
            <InternalLink href="/research/parent-child-connection-learning">
              research on parent-child learning
            </InternalLink>{" "}
            to keep language development warm, connected, and real.
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
              <span className="font-display text-reading-ink font-semibold shrink-0">
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
            Each day, the guide gives you a short, clear reading and language
            activity matched to your child&apos;s current level. It tells you
            what to do, what to say, what to notice, and when to revisit a
            concept that needs strengthening.
          </p>
          <p>
            You do not need teaching experience. You do not need a phonics
            programme. You need presence, a few minutes, and a guide that knows{" "}
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
            Language is the foundation of everything else a child will learn.
            Give them a whole language life, not just a reading level.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
