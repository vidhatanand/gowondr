import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { FlowComparison } from "@/components/ui/FlowDiagram";

export const metadata: Metadata = {
  title: "Why concept-based curriculum beats random activities | Research",
  description:
    "Learn why concept-first curriculum structure, developmental sequencing, and revisit create stronger understanding than disconnected activities.",
  alternates: { canonical: "/research/concept-first-coverage" },
  openGraph: {
    title:
      "Why concept-based curriculum beats random activities | goWondr",
    description:
      "Learn why concept-first curriculum structure, developmental sequencing, and revisit create stronger understanding than disconnected activities.",
    url: "/research/concept-first-coverage",
    type: "article",
    siteName: "goWondr",
  },
};

export default function ConceptFirstCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Concept-First Coverage",
              url: "/research/concept-first-coverage",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title:
              "Why concept-first coverage beats random activity bundles",
            description:
              "Research on why concept-first coverage is more effective than random activity bundles.",
            path: "/research/concept-first-coverage",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Concept-based curriculum design",
          type: "ScholarlyArticle",
          description:
            "Research on why concept-first coverage is more effective than random activity bundles",
        }}
        relatedEntities={[
          { name: "Learning Trajectories", type: "Thing" },
          { name: "Developmental Progression", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Concept-First Coverage" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Why concept-first coverage beats random activity bundles
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display">
          Children do not need more disconnected content. They need connected
          understanding.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <FlowComparison
          title="RANDOM ACTIVITIES VS CONCEPT-FIRST DESIGN"
          caption="Concept-first coverage gives parents a clear answer to 'What is my child building?' — because every activity connects to a real concept, sequenced developmentally and revisited over time."
          left={{
            label: "Random Activity Bundles",
            variant: "warning",
            steps: [
              { label: "Disconnected worksheets & crafts", description: "No shared concept or structure" },
              { label: "No developmental sequence", description: "Too hard, too easy, or badly timed" },
              { label: "No revisit logic", description: "Today's effort disappears after a week" },
            ],
            outcome: { label: "Parent cannot answer", description: "'What is my child actually building?'" },
          }}
          right={{
            label: "Concept-First Approach",
            variant: "success",
            steps: [
              { label: "Subject \u2192 Strand \u2192 Concept", description: "Clear structure from broad to specific" },
              { label: "Multi-modal activities", description: "Talk, draw, build, explain, use in life" },
              { label: "Evidence + Revisit cycle", description: "Understanding checked and reinforced over time" },
            ],
            outcome: { label: "Connected understanding", description: "Child can notice it, explain it, use it, teach it" },
          }}
        />
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          A child who does a different craft, worksheet, or app activity
          every day may look busy — but busy is not the same as learning.
          Real understanding comes when ideas are introduced in a logical
          order, revisited over time, and connected to what the child already
          knows. That is what concept-first coverage means: starting with the
          ideas that matter, sequencing them developmentally, and making sure
          they stick.
        </p>
      </SectionShell>

      {/* Structure diagram */}
      <SectionShell bg="linen" narrow={true} id="structure">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          How concept-first structure works
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          The curriculum is organized in layers, from broad to specific,
          so every activity connects back to a meaningful idea.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Subject", "Strand", "Concept", "Evidence", "Revisit"].map(
            (step, i) => (
              <div key={step} className="flex items-center gap-3">
                <Card variant="default" className="text-center px-5 py-4">
                  <p className="font-body text-[15px] font-semibold text-ink">
                    {step}
                  </p>
                </Card>
                {i < 4 && (
                  <span className="text-clay text-[20px] select-none">
                    &rarr;
                  </span>
                )}
              </div>
            )
          )}
        </div>
        <p className="mt-6 text-[17px] leading-[28px] text-slate">
          Each subject is divided into strands. Each strand contains
          concepts. Each concept is taught through a developmental
          progression, assessed through observable evidence, and revisited
          at spaced intervals so understanding deepens over time.
        </p>
      </SectionShell>

      {/* Why this matters */}
      <SectionShell bg="paper" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why this matters
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Without a concept-first structure, parents are left to guess what
          to teach next. Activities feel random. Children encounter ideas
          once and never return to them. Gaps appear without anyone noticing.
          A concept-first approach solves this by making the learning path
          visible, intentional, and cumulative. You can see the{" "}
          <InternalLink href="/curriculum-coverage">
            curriculum maps
          </InternalLink>{" "}
          and the full{" "}
          <InternalLink href="/subjects">
            8-subject curriculum
          </InternalLink>{" "}
          to understand the scope.
        </p>
      </SectionShell>

      {/* What evidence says */}
      <SectionShell bg="paper-alt" narrow={true} id="evidence">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What the evidence says
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              IES learning trajectories research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              The Institute of Education Sciences has published extensive
              research on learning trajectories — the natural developmental
              paths children follow as they build understanding in a domain.
              When instruction follows these trajectories, children learn
              more efficiently and develop fewer misconceptions. When
              instruction ignores them, children may memorize procedures
              without understanding.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Early mathematics research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on early mathematics consistently shows that children
              who follow a structured developmental progression — from
              subitizing to counting to comparing to composing — develop
              stronger number sense than children who are exposed to
              scattered, unsequenced activities. The sequence matters as
              much as the content.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Systematic reviews of curriculum structure
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Systematic reviews of early childhood curricula find that
              programmes with a clear scope and sequence outperform those
              with loosely organized activity collections. The advantage is
              not about rigidity — it is about coherence. Children benefit
              when each new idea builds on what came before.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Why random activity libraries fall short */}
      <SectionShell bg="paper" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why random activity libraries fall short
        </h2>
        <div className="mt-6 space-y-5">
          {[
            {
              title: "No developmental sequence",
              desc: "Activities are organized by theme or age, not by the order in which children actually develop understanding.",
            },
            {
              title: "No revisit mechanism",
              desc: "A child encounters an idea once and never returns to it. Understanding fades within days.",
            },
            {
              title: "No visible coverage",
              desc: "Parents cannot see which concepts have been covered, which are emerging, or which have been missed entirely.",
            },
            {
              title: "No connection between ideas",
              desc: "Each activity stands alone. Children cannot build the kind of connected understanding that transfers to new situations.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-[24px] leading-[30px] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[17px] leading-[28px] text-slate">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Why concept-first design is more humane */}
      <SectionShell bg="linen" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why concept-first design is more humane
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Concept-first design is not about being more academic or more
          demanding. It is about being more respectful of the child's time
          and the parent's energy. When you know that every activity serves a
          purpose, that revisit is built in, and that coverage is visible,
          you can relax into the process instead of constantly worrying about
          whether you are doing enough. The structure carries the cognitive
          load so the parent can focus on the relationship.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          Structure is not the enemy of play or creativity. It is what makes
          them effective. A concept-first curriculum gives every playful
          moment a reason and every creative activity a direction.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/curriculum-coverage">
            curriculum maps
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/subjects">
            8-subject curriculum
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/research/adaptive-planning-spaced-revisit">
            adaptive planning research
          </InternalLink>
        </p>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Adaptive planning and spaced revisit</h3>
            <p className="text-[14px] text-slate mb-3">Evidence for spaced repetition and adaptive sequencing in building durable understanding.</p>
            <InternalLink href="/research/adaptive-planning-spaced-revisit">Read more &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Thinking routines and visible understanding</h3>
            <p className="text-[14px] text-slate mb-3">How thinking routines deepen understanding and make learning visible to parents.</p>
            <InternalLink href="/research/thinking-routines-visible-understanding">Read more &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See concept-first learning in action
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try goWondr free for 15 days.
          </p>
          <div className="mt-8">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
