import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { FlowDiagram } from "@/components/ui/FlowDiagram";

export const metadata: Metadata = {
  title:
    "Why thinking routines and visible understanding matter | Research",
  description:
    "Explore how thinking routines, representation, and concept mapping deepen children's understanding and make learning visible to parents.",
  alternates: {
    canonical: "/research/thinking-routines-visible-understanding",
  },
  openGraph: {
    title:
      "Why thinking routines and visible understanding matter | goWondr",
    description:
      "Explore how thinking routines, representation, and concept mapping deepen children's understanding and make learning visible to parents.",
    url: "/research/thinking-routines-visible-understanding",
    type: "article",
    siteName: "goWondr",
  },
};

export default function ThinkingRoutinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Thinking Routines",
              url: "/research/thinking-routines-visible-understanding",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title:
              "Why thinking routines and visible understanding matter",
            description:
              "Research on how thinking routines, representation, and concept mapping deepen children's understanding.",
            path: "/research/thinking-routines-visible-understanding",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Thinking routines in education",
          type: "ScholarlyArticle",
          description:
            "Research on how thinking routines and visible understanding deepen learning",
        }}
        relatedEntities={[
          { name: "Visible Thinking", type: "Thing" },
          { name: "Concept Mapping", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Thinking Routines" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Why thinking routines and visible understanding matter
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display">
          Understanding is invisible until a child finds a way to show it.
          Thinking routines give them that way.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <FlowDiagram
          title="HOW THINKING ROUTINES WORK"
          caption="Thinking routines give children a structured way to show what they understand — and give parents a window into real learning."
          direction="vertical"
          nodes={[
            { id: "question", label: "Structured question", description: "'What do you notice?' 'What changed?'", variant: "teal" },
            { id: "visible", label: "Thinking made visible", description: "Child draws, explains, maps, represents" },
            { id: "parent", label: "Parent sees understanding", description: "Where it is strong or shaky" },
            { id: "evidence", label: "Better evidence", description: "For the adaptive planner" },
            { id: "meta", label: "Child develops metacognition", description: "Thinking about thinking" },
            { id: "support", label: "More targeted support", description: "Revisit and guidance improve", variant: "success" },
          ]}
          connections={[
            { from: "question", to: "visible", label: "child responds" },
            { from: "visible", to: "parent" },
            { from: "visible", to: "evidence" },
            { from: "visible", to: "meta" },
            { from: "parent", to: "support", label: "informs" },
            { from: "evidence", to: "support" },
          ]}
        />
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          It is hard to know what your child really understands. They might
          say the right answer without understanding why. They might
          understand deeply but struggle to explain it. Thinking routines
          solve this by giving children simple, repeatable ways to show
          their thinking — through drawing, sorting, comparing, explaining,
          and connecting. When thinking becomes visible, parents can see
          what is working and what needs more time.
        </p>
      </SectionShell>

      {/* What evidence says */}
      <SectionShell bg="paper" narrow={true} id="evidence">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What the evidence says
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Project Zero and Harvard visible thinking
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Harvard's Project Zero has spent decades developing and
              studying thinking routines — simple structures like
              See-Think-Wonder, Think-Pair-Share, and Connect-Extend-Challenge.
              Research from Project Zero shows that when these routines are
              used regularly, children develop stronger reasoning skills,
              richer vocabulary for discussing ideas, and greater
              metacognitive awareness. They learn not just content, but how
              to think about their own thinking.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Concept mapping research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on concept mapping shows that when children organize
              ideas visually — drawing connections between concepts,
              categorizing, and sequencing — they develop deeper
              understanding than when they simply memorize facts. Concept
              maps also reveal misconceptions early, allowing parents and
              teachers to address them before they become entrenched.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Representation research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on children's representations — drawings, diagrams,
              models, and stories — shows that the act of representing an
              idea in a new form deepens understanding. When a child draws
              what they learned, builds a model, or tells a story about a
              concept, they are processing the idea at a deeper level than
              when they simply listen or watch.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* How routines help children */}
      <SectionShell bg="linen" narrow={true} id="for-children">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          How routines help children
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Thinking routines give children a framework for engaging with new
          ideas. Instead of being asked a vague question like "What did you
          learn?", they are given a specific structure: "What do you see?
          What do you think? What do you wonder?" This reduces anxiety,
          builds confidence, and creates habits of mind that transfer across
          subjects. Over time, children internalize these routines and begin
          to use them independently.
        </p>
      </SectionShell>

      {/* How routines help parents */}
      <SectionShell bg="paper" narrow={true} id="for-parents">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          How routines help parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          For parents, thinking routines solve the assessment problem. You
          do not need a test to know if your child understands something.
          You need to see their thinking. When a child can compare two
          ideas, explain a connection, or represent a concept in their own
          way, you can see understanding forming in real time. This makes
          learning visible — and it makes the parent's role clearer and
          more rewarding.
        </p>
      </SectionShell>

      {/* What this means for the product */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for the product
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          goWondr embeds thinking routines directly into
          activities. Children are regularly asked to compare, connect,
          represent, and explain. These are not add-ons — they are core to
          how every concept is taught. The{" "}
          <InternalLink href="/subjects/arts-design-creative-expression">
            arts curriculum
          </InternalLink>{" "}
          makes particular use of representation, while thinking routines
          appear across all subjects. Learn more about{" "}
          <InternalLink href="/how-it-works">how it works</InternalLink>.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          Understanding is not something you can test with a quiz. It is
          something you can see — when a child draws, explains, connects,
          and wonders. Thinking routines make that possible, every day.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/how-it-works">how it works</InternalLink> /{" "}
          <InternalLink href="/subjects/arts-design-creative-expression">
            arts curriculum
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/research/concept-first-coverage">
            concept-first coverage
          </InternalLink>
        </p>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Concept-first curriculum coverage</h3>
            <p className="text-[14px] text-slate mb-3">Why concept-based structure creates stronger understanding than disconnected activities.</p>
            <InternalLink href="/research/concept-first-coverage">Read more &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Playful, screen-light learning</h3>
            <p className="text-[14px] text-slate mb-3">Evidence for guided, multi-modal learning using conversation, movement, and real materials.</p>
            <InternalLink href="/research/playful-screen-light-learning">Read more &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See visible thinking in action
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
