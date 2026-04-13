import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { subjects } from "@/lib/subjects";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import {
  BookOpen,
  Calculator,
  Leaf,
  Globe,
  Heart,
  Palette,
  Blocks,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "8-subject home learning curriculum for ages 4 to Grade 4",
  description:
    "Explore the full home learning curriculum: reading, math, science, world learning, personal development, arts, digital literacy, and inquiry for ages 4 to Grade 4.",
};

const subjectSlugs = [
  "reading-language-expression",
  "math-logic-patterns",
  "science-nature-inquiry",
  "world-learning-society-life",
  "personal-development-health-life-skills",
  "arts-design-creative-expression",
  "digital-literacy-computational-thinking",
  "inquiry-learning-life-skills",
];

const subjectIcons = [
  BookOpen,
  Calculator,
  Leaf,
  Globe,
  Heart,
  Palette,
  Blocks,
  Compass,
];

export default function SubjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Subjects", url: "/subjects" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "8-subject home learning curriculum",
          type: "EducationalOccupationalProgram",
          description:
            "Full concept-based curriculum across 8 connected subjects for ages 4 to Grade 4",
        }}
        relatedEntities={subjects.map((s, i) => ({
          name: s.name,
          type: "Course",
          description: s.description,
          url: `/subjects/${subjectSlugs[i]}`,
        }))}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Subjects" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          8 subjects. One connected learning system.
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
          Not a one-subject tutoring tool. A full,{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum
          </InternalLink>
          . Subject, strand, concept, activities, evidence, revisit. Every
          subject connects to a broader picture of what your child is building.
        </p>
      </SectionShell>

      {/* Subject Grid */}
      <SectionShell bg="linen">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-10">
          Explore all 8 subjects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, i) => {
            const Icon = subjectIcons[i];
            const slug = subjectSlugs[i];
            return (
              <Card
                key={subject.key}
                variant="subject"
                subjectSoftClass={subject.softClass}
                subjectInkClass={subject.inkClass}
                hover
              >
                <Icon className="h-7 w-7 mb-3" />
                <h3 className="font-display text-[24px] leading-[30px] text-ink mb-2">
                  {subject.shortName}
                </h3>
                <p className="text-[17px] leading-[28px] text-slate mb-4">
                  {subject.description}
                </p>
                <InternalLink href={`/subjects/${slug}`}>
                  Explore {subject.shortName} &rarr;
                </InternalLink>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* How subjects connect */}
      <SectionShell bg="paper">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-8 text-center">
          How the subjects connect
        </h2>
        <FlowDiagram
          title="HOW 8 SUBJECTS CONNECT"
          caption="No subject stands alone. Language supports all learning, inquiry connects every domain, and real-world context gives meaning to every concept."
          direction="vertical"
          nodes={[
            { id: "reading", label: "Reading", description: "Language & Expression" },
            { id: "math", label: "Math", description: "Logic & Patterns" },
            { id: "science", label: "Science", description: "Nature & Inquiry" },
            { id: "world", label: "World", description: "Society & Life" },
            { id: "personal", label: "Personal Dev", description: "Health & Life Skills" },
            { id: "arts", label: "Arts", description: "Design & Expression" },
            { id: "digital", label: "Digital", description: "Literacy & Thinking" },
            { id: "inquiry", label: "Inquiry", description: "Learning & Life Skills" },
          ]}
          connections={[
            { from: "reading", to: "math" },
            { from: "math", to: "science" },
            { from: "science", to: "world" },
            { from: "world", to: "personal" },
            { from: "personal", to: "arts" },
            { from: "arts", to: "digital" },
            { from: "digital", to: "inquiry" },
          ]}
          groups={[
            { label: "Foundations", nodeIds: ["reading", "math", "science"] },
            { label: "Breadth", nodeIds: ["world", "personal", "arts"] },
            { label: "Future-Ready", nodeIds: ["digital", "inquiry"] },
          ]}
        />
      </SectionShell>

      {/* Why breadth matters */}
      <SectionShell bg="paper">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl mb-6">
          Why breadth matters
        </h2>
        <div className="space-y-4 max-w-2xl text-[17px] leading-[28px] text-slate">
          <p>
            Children do not learn in silos. A child counting seeds is doing
            math, science, and fine motor development at the same time. A child
            narrating a drawing is practising oral language, creative expression,
            and self-awareness.
          </p>
          <p>
            Breadth is not about doing more. It is about making sure that what
            matters is not accidentally left out. When you follow a full{" "}
            <InternalLink href="/curriculum-coverage">
              curriculum map
            </InternalLink>
            , you can trust that every domain of your child&apos;s development
            is being nurtured, not just the ones that are easiest to measure.
          </p>
          <p>
            This is what{" "}
            <InternalLink href="/future-ready-learning">
              future-ready learning
            </InternalLink>{" "}
            looks like: confident, connected, whole.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] tracking-tight mb-4">
            See the full curriculum in action
          </h2>
          <p className="text-[17px] leading-[28px] opacity-90 max-w-lg mx-auto mb-8">
            Start your 15-day free trial and explore every subject, strand, and
            concept.
          </p>
          <Button variant="warm" size="lg" href="/pricing">
            Start your free trial
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
