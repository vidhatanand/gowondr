import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { ThinkingRoutines } from "@/components/ui/ThinkingRoutines";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { Brain, MessageSquare, Link2, HelpCircle, Lightbulb, Monitor, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Future-ready learning for kids in an AI world",
  description:
    "Prepare children for an AI-shaped future through strong foundations, broader knowledge, digital judgment, and adaptable thinking instead of more screen dependence.",
  alternates: { canonical: "/future-ready-learning" },
  openGraph: {
    title:
      "Future-ready learning for kids in an AI world | goPondr",
    description:
      "Prepare children for an AI-shaped future through strong foundations, broader knowledge, digital judgment, and adaptable thinking instead of more screen dependence.",
    url: "/future-ready-learning",
    type: "article",
    siteName: "goPondr",
  },
};

export default function FutureReadyLearningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            {
              name: "Future-Ready Learning",
              url: "/future-ready-learning",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Future-ready learning for kids in an AI world",
            description:
              "Preparing children for an AI-shaped future through strong foundations, broader knowledge, digital judgment, and adaptable thinking.",
            path: "/future-ready-learning",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Future-ready education philosophy",
          type: "EducationalOccupationalProgram",
          description:
            "Building future-ready skills through foundations, breadth, and adaptable thinking",
        }}
        relatedEntities={[
          {
            name: "Artificial Intelligence in Education",
            type: "Thing",
          },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/page-new-leaf.webp", "/images/page-stacked-stones.webp", "/images/page-sunset-path.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Future-Ready Learning" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            In an AI world, answers get cheaper. Thinking gets more valuable.
          </h1>
          <p className="mt-5 text-[19px] md:text-[21px] leading-[30px] md:leading-[32px] text-slate font-display max-w-2xl">
            The future belongs to children who can understand, explain, connect,
            question, create, adapt, and use judgment. These are not skills you
            learn from an app. They grow through real relationships, real
            conversations, and a broad foundation across the full{" "}
            <InternalLink href="/subjects">8-subject curriculum</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* What future-ready does NOT mean */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What future-ready does not mean
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Future-ready does not mean more screens, earlier coding, or faster
            exposure to technology. It does not mean racing through content or
            chasing the latest digital tool. Children who are truly prepared for
            an AI-shaped world are not the ones who can use the most apps. They
            are the ones who can think independently when the apps are gone.
          </p>
        </div>
      </SectionShell>

      {/* Why breadth matters */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why breadth matters more than ever
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            In a world where AI can answer narrow questions instantly, the
            advantage goes to people who can see connections across fields. A
            child who understands science, history, art, and mathematics has more
            to draw on when solving problems that AI cannot frame. Breadth is not
            a luxury. It is a survival skill. This is supported by{" "}
            <InternalLink href="/research/breadth-future-ready-ai-world">
              breadth research
            </InternalLink>
            .
          </p>
        </div>
      </SectionShell>

      {/* What we are preparing for */}
      <SectionShell bg="paper">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What we are preparing children for
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            The world your child will grow into will reward a different set of
            capabilities than the one we grew up in.
          </p>
          <div className="mt-8">
            <FeatureGrid
              columns={3}
              features={[
                {
                  icon: <Brain className="h-5 w-5" />,
                  title: "Deep understanding",
                  description:
                    "Not memorized facts, but genuine comprehension that transfers to new situations.",
                },
                {
                  icon: <MessageSquare className="h-5 w-5" />,
                  title: "Clear explanation",
                  description:
                    "The ability to articulate ideas in their own words, not repeat someone else's.",
                },
                {
                  icon: <Link2 className="h-5 w-5" />,
                  title: "Connected thinking",
                  description:
                    "Seeing how ideas relate across subjects and contexts, not in isolation.",
                },
                {
                  icon: <HelpCircle className="h-5 w-5" />,
                  title: "Genuine questioning",
                  description:
                    "Asking why, how, and what if instead of accepting the first answer.",
                },
                {
                  icon: <Lightbulb className="h-5 w-5" />,
                  title: "Creative problem-solving",
                  description:
                    "Finding new approaches when familiar ones do not work.",
                },
                {
                  icon: <Monitor className="h-5 w-5" />,
                  title: "Digital judgment",
                  description:
                    "Knowing when to use technology, when to question it, and when to put it down.",
                },
                {
                  icon: <Compass className="h-5 w-5" />,
                  title: "Adaptable thinking",
                  description:
                    "Adjusting approach when context changes, rather than relying on a single method.",
                },
              ]}
            />
          </div>
          <p className="mt-6 text-[17px] leading-[28px] text-slate">
            See how we approach{" "}
            <InternalLink href="/subjects/digital-literacy-computational-thinking">
              digital literacy
            </InternalLink>{" "}
            and{" "}
            <InternalLink href="/subjects/inquiry-learning-life-skills">
              inquiry
            </InternalLink>{" "}
            as part of the broader curriculum.
          </p>
        </div>
      </SectionShell>

      {/* How the guide supports this */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            How goPondr supports future-ready thinking
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Every session in goPondr is designed to build the kind of
            thinking that matters most. Activities ask children to notice, then
            explore, then explain in their own words. Concepts connect across
            subjects so knowledge forms a web, not a list. Review is spaced so
            understanding lasts. And because learning happens through
            conversation and play rather than screens, children develop the
            inner resources that no technology can replace.
          </p>
        </div>
      </SectionShell>

      {/* Future-ready diagram */}
      <SectionShell bg="linen" id="foundation">
        <div>
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            How foundations lead to future readiness
          </h2>
          <div className="mt-8">
            <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
              FOUNDATIONS TO FUTURE READINESS
            </h3>
            <FlowDiagram
              title="BUILDING FUTURE-READY LEARNERS"
              caption="Strong foundations across multiple domains converge into a child who can understand, explain, connect, and adapt."
              direction="vertical"
              nodes={[
                { id: "lang", label: "Language & Literacy", description: "Reading, writing, expression" },
                { id: "math", label: "Mathematical Reasoning", description: "Number sense, patterns, logic" },
                { id: "science", label: "Scientific Thinking", description: "Observation, testing, explaining" },
                { id: "world", label: "World Understanding", description: "Community, culture, systems" },
                { id: "creative", label: "Creative Expression", description: "Art, music, making" },
                { id: "digital", label: "Digital Judgment", description: "Safety, logic, purpose" },
                { id: "inquiry", label: "Inquiry Habits", description: "Questioning, connecting, adapting" },
                { id: "child", label: "Future-Ready Child", description: "Can understand, explain, connect, adapt", variant: "teal" },
              ]}
              connections={[
                { from: "lang", to: "child" },
                { from: "math", to: "child" },
                { from: "science", to: "child" },
                { from: "world", to: "child" },
                { from: "creative", to: "child" },
                { from: "digital", to: "child" },
                { from: "inquiry", to: "child" },
              ]}
              groups={[
                { label: "What We Build", nodeIds: ["lang", "math", "science", "world", "creative", "digital", "inquiry"] },
                { label: "The Outcome", nodeIds: ["child"] },
              ]}
            />
            <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center max-w-xl mx-auto">
              Seven broad foundations converge into a child who can understand, explain, connect, and adapt to any future.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Final close */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            The best preparation is a strong foundation
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            You do not need to predict the future to prepare your child for it.
            A child who can think clearly, ask good questions, and explain what
            they know will adapt to whatever comes. That foundation starts now,
            at home, with you.
          </p>
        </div>
      </SectionShell>

      {/* Thinking routines for future-readiness */}
      <SectionShell bg="linen">
        <div className="max-w-[700px] mx-auto">
          <ThinkingRoutines variant="compact" context="future-ready" />
        </div>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt" narrow={false}>
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Why breadth matters in an AI world</h3>
            <p className="text-[14px] text-slate mb-3">Research on why broad foundations across subjects matter more in a future shaped by AI and rapid change.</p>
            <InternalLink href="/research/breadth-future-ready-ai-world">Read the research &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Explore all 8 subjects</h3>
            <p className="text-[14px] text-slate mb-3">See how the full curriculum builds broad foundations across language, math, science, arts, and more.</p>
            <InternalLink href="/subjects">See all subjects &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Build a foundation that lasts
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Start your 15-day free trial and give your child the kind of
            learning that prepares them for any future.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
            <Button variant="secondary" size="lg" href="/subjects">
              Explore all 8 subjects
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
