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
  title:
    "Why adaptive planning and spaced revisit matter | Research",
  description:
    "Explore evidence for spaced repetition, adaptive sequencing, and review timing in building durable understanding for children.",
  alternates: {
    canonical: "/research/adaptive-planning-spaced-revisit",
  },
  openGraph: {
    title:
      "Why adaptive planning and spaced revisit matter | goWondr",
    description:
      "Explore evidence for spaced repetition, adaptive sequencing, and review timing in building durable understanding for children.",
    url: "/research/adaptive-planning-spaced-revisit",
    type: "article",
    siteName: "goWondr",
  },
};

export default function AdaptivePlanningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Adaptive Planning",
              url: "/research/adaptive-planning-spaced-revisit",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Why adaptive planning and spaced revisit matter",
            description:
              "Evidence for spaced repetition, adaptive sequencing, and review timing in building durable understanding.",
            path: "/research/adaptive-planning-spaced-revisit",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Adaptive planning and spaced revisit",
          type: "ScholarlyArticle",
          description:
            "Research on spaced repetition, adaptive sequencing, and review timing",
        }}
        relatedEntities={[
          { name: "Spaced Repetition", type: "Thing" },
          { name: "Adaptive Learning", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Adaptive Planning" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Why adaptive planning and spaced revisit matter
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display">
          Learning something once is not enough. Understanding grows when
          ideas are revisited at the right time, in the right way.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <FlowComparison
          title="WHY SPACED REVISIT MATTERS"
          caption="Without revisit, even good learning fades. The adaptive planner spaces review at the right intervals so understanding becomes permanent."
          left={{
            label: "Without Revisit",
            variant: "warning",
            steps: [
              { label: "Child meets a concept", description: "Initial understanding may be fragile" },
              { label: "Days pass without return", description: "Memory fades naturally" },
            ],
            outcome: { label: "Concept lost", description: "Half-remembered or forgotten entirely" },
          }}
          right={{
            label: "With Spaced Revisit",
            variant: "success",
            steps: [
              { label: "Revisit 1 — soon after", description: "Reinforce the idea while it is fresh" },
              { label: "Revisit 2 — after a gap", description: "Strengthen recall through retrieval" },
              { label: "Revisit 3 — new context", description: "Deepen transfer by applying differently" },
            ],
            outcome: { label: "Durable understanding", description: "Child can explain it, use it, and teach it" },
          }}
        />
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Every parent has seen it: your child understands something on
          Monday and has forgotten it by Friday. This is not a failure —
          it is how memory works. The solution is spaced revisit: returning
          to ideas at increasing intervals so they move from short-term
          memory into durable understanding. Combined with adaptive
          planning — adjusting what comes next based on how the child is
          doing — this creates a learning experience that is efficient,
          responsive, and far more effective than one-and-done teaching.
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
              Spaced practice and retrieval research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Spaced practice is one of the most robust findings in
              cognitive science. Hundreds of studies show that distributing
              learning over time — rather than massing it into a single
              session — leads to significantly better long-term retention.
              Retrieval practice, where children actively recall what they
              have learned rather than simply reviewing it, strengthens
              memory traces and improves transfer to new contexts.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Adaptive sequencing research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on adaptive learning systems shows that adjusting the
              sequence and difficulty of material based on learner
              performance leads to faster progress and fewer gaps.
              Adaptive systems work because they respect the child's
              current level — neither boring them with material they have
              already mastered nor overwhelming them with material they
              are not ready for.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Formative assessment research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Formative assessment — ongoing, low-stakes observation of
              what a child understands — is one of the most effective
              strategies for improving learning outcomes. When parents
              observe and log how their child responds to an activity,
              they are performing formative assessment. This information,
              fed back into the planning process, creates a feedback loop
              that makes the next session better than the last.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Why one exposure is not enough */}
      <SectionShell bg="linen" narrow={true} id="why-one-exposure">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why one exposure is not enough
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Most activity-based learning platforms treat each concept as a
          one-time event. You do the activity, check it off, and move on.
          But cognitive science tells us that a single exposure to an idea
          — no matter how well designed — is rarely sufficient for durable
          understanding. Children need to encounter a concept multiple
          times, in different contexts, at increasing intervals, with
          opportunities to actively recall and apply what they have learned.
        </p>
      </SectionShell>

      {/* Why review should be normalized */}
      <SectionShell bg="paper" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why review should be normalized
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          In many learning contexts, review is treated as remediation —
          something you do when a child is struggling. This is backwards.
          Review is how all learners consolidate understanding. When spaced
          revisit is built into the normal rhythm of learning, it removes
          the stigma and makes the process more efficient for everyone.
          Children do not feel like they are falling behind when they
          revisit a concept. They feel like they are getting stronger.
        </p>
      </SectionShell>

      {/* What this means for the product */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for the product
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          goWondr's{" "}
          <InternalLink href="/adaptive-planner">
            adaptive planner
          </InternalLink>{" "}
          automatically schedules spaced revisit based on each child's
          progress. When a parent logs an observation, the planner adjusts
          what comes next — bringing back concepts that need more time,
          advancing concepts that are solid, and spacing review at
          evidence-backed intervals. Parents never have to figure out the
          sequence themselves. The{" "}
          <InternalLink href="/curriculum-coverage">
            curriculum maps
          </InternalLink>{" "}
          show exactly where each child stands.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          Forgetting is natural. Revisit is the solution. When spaced
          review is automatic and adaptive, learning becomes durable —
          and parents can trust that what was taught will actually stick.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/adaptive-planner">
            adaptive planner
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/curriculum-coverage">
            curriculum maps
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
            See adaptive planning in action
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
