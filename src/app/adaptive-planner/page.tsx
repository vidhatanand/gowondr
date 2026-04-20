import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { ComparisonColumns } from "@/components/ui/ComparisonColumns";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { Eye, TrendingUp, Clock, BarChart3, GitBranch, History } from "lucide-react";

export const metadata: Metadata = {
  title: "Adaptive learning plan and progress tracking for kids",
  description:
    "See how the adaptive planner uses parent observations, review timing, and concept progress to create a clearer daily learning plan for each child.",
  alternates: { canonical: "/adaptive-planner" },
  openGraph: {
    title:
      "Adaptive learning plan and progress tracking for kids | goPondr",
    description:
      "See how the adaptive planner uses parent observations, review timing, and concept progress to create a clearer daily learning plan for each child.",
    url: "/adaptive-planner",
    type: "article",
    siteName: "goPondr",
  },
};

export default function AdaptivePlannerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Adaptive Planner", url: "/adaptive-planner" },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Adaptive learning plan and progress tracking for kids",
            description:
              "How the adaptive planner uses parent observations, review timing, and concept progress to create a clearer daily learning plan for each child.",
            path: "/adaptive-planner",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Adaptive learning planner",
          type: "SoftwareApplication",
          description:
            "Adaptive planning system that uses parent observations and concept progress to guide daily learning",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/page-layered-paper.webp", "/images/page-river-delta.webp", "/images/page-threads-center.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Adaptive Planner" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            The planner adapts, so you do not have to guess.
          </h1>
          <p className="mt-5 text-[19px] md:text-[21px] leading-[30px] md:leading-[32px] text-slate font-display max-w-2xl">
            Every child learns at a different pace. The adaptive planner watches
            how your child is progressing and adjusts the daily plan accordingly.
            You never have to decide what to teach next. See{" "}
            <InternalLink href="/how-it-works">how it works</InternalLink> in the
            full learning flow.
          </p>
        </div>
      </SectionShell>

      {/* What the planner considers */}
      <SectionShell bg="paper-alt" id="factors">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What the planner considers
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            The planner does not follow a rigid calendar. It considers multiple
            signals to decide what your child should work on each day.
          </p>
          <div className="mt-8">
            <FeatureGrid
              columns={3}
              features={[
                {
                  icon: <Eye className="h-5 w-5" />,
                  title: "Parent observations",
                  description:
                    "After each session, you note how it went. The planner uses these observations to gauge readiness and understanding.",
                },
                {
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: "Concept progress",
                  description:
                    "Each concept moves through stages of the learning arc. The planner knows where every concept stands and what comes next.",
                },
                {
                  icon: <Clock className="h-5 w-5" />,
                  title: "Review timing",
                  description:
                    "Concepts that have been learned still need revisiting. The planner schedules spaced reviews so knowledge stays durable.",
                },
                {
                  icon: <BarChart3 className="h-5 w-5" />,
                  title: "Subject balance",
                  description:
                    "Learning should not cluster around one subject. The planner ensures coverage across all eight areas over time.",
                },
                {
                  icon: <GitBranch className="h-5 w-5" />,
                  title: "Concept dependencies",
                  description:
                    "Some concepts build on others. The planner respects these prerequisites so children are never asked to leap ahead.",
                },
                {
                  icon: <History className="h-5 w-5" />,
                  title: "Session history",
                  description:
                    "The planner remembers what was covered recently and avoids unnecessary repetition while ensuring important revisits happen.",
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* Planner flow diagram */}
      <SectionShell bg="linen" id="planner-flow">
        <div>
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            How the planner builds your daily session
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            Multiple inputs combine to create a session that is just right for
            your child today.
          </p>
          <div className="mt-8">
            <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
              INPUTS TO DAILY PLAN
            </h3>
            <FlowDiagram
              title="HOW THE ADAPTIVE PLANNER WORKS"
              caption="The planner weighs parent observations, concept readiness, and review timing to create a calm, clear daily plan."
              direction="vertical"
              nodes={[
                { id: "obs", label: "Observations", description: "What the parent noticed" },
                { id: "ready", label: "Concept readiness", description: "Where the child is" },
                { id: "timing", label: "Review timing", description: "What needs revisit" },
                { id: "plan", label: "Daily plan", description: "Today's session, materials, prompts" },
                { id: "review", label: "Review schedule", description: "When to return to ideas" },
                { id: "next", label: "Next concept", description: "What comes after this" },
              ]}
              connections={[
                { from: "obs", to: "plan" },
                { from: "ready", to: "plan" },
                { from: "timing", to: "review" },
              ]}
              groups={[
                { label: "Inputs", nodeIds: ["obs", "ready", "timing"] },
                { label: "Outputs", nodeIds: ["plan", "review", "next"] },
              ]}
            />
            <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center max-w-xl mx-auto">
              Observations, concept readiness, and review timing feed a single daily plan that balances new learning with revisit.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* What the parent sees */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What you see each day
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            You open the guide and see a short, clear plan: two or three
            activities, each tied to a specific concept, with prompts and
            suggestions for how to explore it together. No jargon. No
            overwhelming options. Just the right next step for your child today.
          </p>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Behind that simplicity is the full{" "}
            <InternalLink href="/curriculum-coverage">
              curriculum map
            </InternalLink>
            , working quietly to make sure nothing important gets missed.
          </p>
        </div>
      </SectionShell>

      {/* Why parents need this */}
      <SectionShell bg="paper-alt">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why parents need this
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Without a planner, parents face two bad options. The adaptive
            planner sits between these extremes.
          </p>
          <div className="mt-8">
            <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
              WITHOUT VS WITH A PLANNER
            </h3>
            <ComparisonColumns
              left={{
                title: "Vague reassurance",
                items: [
                  "Browse Pinterest for random activities",
                  "Hope it all adds up over time",
                  "No way to track what was covered",
                  "No concept sequencing",
                  "No built-in review",
                ],
              }}
              right={{
                title: "goPondr approach",
                items: [
                  "Daily plan tied to specific concepts",
                  "Clear progress across all subjects",
                  "Automatic tracking of coverage",
                  "Concept dependencies respected",
                  "Spaced review built in",
                ],
              }}
            />
            <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center max-w-xl mx-auto">
              A planner replaces guesswork with a structured sequence — rigorous underneath, simple on the surface.
            </p>
          </div>
          <p className="mt-6 text-[17px] leading-[28px] text-slate">
            The adaptive planner is rigorous underneath and simple on the
            surface. You get the confidence of a structured curriculum without
            the burden of managing it yourself.
          </p>
        </div>
      </SectionShell>

      {/* What progress means */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What progress means here
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Progress is not a dashboard of green bars. It is a growing map of
            what your child understands, what they are working on, and what has
            been revisited. You can see which concepts are solid, which are
            developing, and which are due for review. It is honest, clear, and
            grounded in what you actually observe.
          </p>
        </div>
      </SectionShell>

      {/* Why review matters */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why review matters as much as new learning
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            New concepts are exciting, but they fade without revisiting. The
            planner automatically schedules reviews at increasing intervals,
            based on{" "}
            <InternalLink href="/research/adaptive-planning-spaced-revisit">
              adaptive planning research
            </InternalLink>
            . This keeps earlier learning alive while new concepts continue to
            build on top. The result is a child whose knowledge is durable, not
            fragile.
          </p>
        </div>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Planning should not be your job
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Your job is to be present, patient, and curious alongside your
            child. The planner takes care of everything else: what to teach,
            when to review, how to balance subjects, and where to go next. Have
            more questions? Check the{" "}
            <InternalLink href="/faq">FAQ</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt" narrow={false}>
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Adaptive planning and spaced revisit</h3>
            <p className="text-[14px] text-slate mb-3">Research on why spaced, adaptive review is more durable than linear progression.</p>
            <InternalLink href="/research/adaptive-planning-spaced-revisit">Read the research &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">How the full flow works</h3>
            <p className="text-[14px] text-slate mb-3">See how daily plans, observations, and reviews connect across a week of learning.</p>
            <InternalLink href="/how-it-works">See how it works &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See the planner in action
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Start your 15-day free trial and let the planner create your
            child's first learning session.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
            <Button variant="secondary" size="lg" href="/how-it-works">
              See the full flow
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
