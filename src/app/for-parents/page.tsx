import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { ComparisonColumns } from "@/components/ui/ComparisonColumns";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Search, HelpCircle, Lightbulb, MessageCircle, Eye, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to teach your child at home without being a teacher",
  description:
    "Parents do not need a teaching degree to make a real difference. Get a calmer, parent-led way to help your child learn at home with the right next step, prompts, and support.",
  alternates: { canonical: "/for-parents" },
  openGraph: {
    title:
      "How to teach your child at home without being a teacher | goWondr",
    description:
      "Parents do not need a teaching degree to make a real difference. Get a calmer, parent-led way to help your child learn at home with the right next step, prompts, and support.",
    url: "/for-parents",
    type: "article",
    siteName: "goWondr",
  },
};

export default function ForParentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "For Parents", url: "/for-parents" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Parent-led learning support",
          type: "Service",
          description:
            "How goWondr supports parents who are not trained teachers",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "For Parents" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          You do not need to be a teacher to help your child learn at home
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
          You already bring what matters most: attention, warmth, trust,
          context, continuity, and love. No textbook can replace that. The
          Learning Guide simply gives you a clear{" "}
          <InternalLink href="/how-it-works">daily learning guide</InternalLink>{" "}
          so you always know what to do next.
        </p>
      </SectionShell>

      {/* What parents bring */}
      <SectionShell bg="linen">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl">
          What you already bring
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Attention",
              body: "You notice what excites your child, what frustrates them, and what they are ready for. No classroom teacher of thirty children can match that.",
            },
            {
              title: "Warmth",
              body: "Learning sticks when it feels safe. Your patience and encouragement create the conditions where real understanding can grow.",
            },
            {
              title: "Trust",
              body: "Your child trusts you in a way they trust no one else. That trust makes it safe to struggle, ask questions, and try again.",
            },
            {
              title: "Context",
              body: "You know your child's world: their routines, interests, fears, and strengths. That context makes every learning moment richer.",
            },
            {
              title: "Continuity",
              body: "You are there every day. Learning compounds when the same caring person follows the thread across weeks, months, and years.",
            },
            {
              title: "Love",
              body: "The deepest advantage of all. Children learn best from people who love them, and no curriculum can substitute for that.",
            },
          ].map((item) => (
            <Card key={item.title} variant="default" hover>
              <h3 className="font-display text-[20px] text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[24px] text-slate">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* Reframe */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            You are not replacing school
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            This is not about becoming a substitute teacher. It is about using
            the time you already spend with your child more intentionally. Even
            twenty minutes a day, done well, can create a foundation that lasts.
            The guide handles the planning, sequencing, and review. You bring
            the relationship.
          </p>
        </div>
      </SectionShell>

      {/* System carries vs You carry */}
      <SectionShell bg="paper-alt">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What the system carries, so you do not have to
          </h2>
          <div className="mt-8">
            <ComparisonColumns
              left={{
                title: "The system carries",
                items: [
                  "Curriculum structure and sequencing",
                  "Concept dependencies and prerequisites",
                  "Daily activity suggestions",
                  "Spaced review and revisit timing",
                  "Progress tracking across subjects",
                ],
              }}
              right={{
                title: "You carry",
                items: [
                  "The conversation and the connection",
                  "Simple observations after each session",
                  "Patience when things take time",
                  "Encouragement when things click",
                  "The decision to show up each day",
                ],
              }}
            />
          </div>
        </div>
      </SectionShell>

      {/* Six things parents need */}
      <SectionShell bg="paper">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Six things every parent needs
          </h2>
          <div className="mt-8">
            <FeatureGrid
              columns={3}
              features={[
                {
                  icon: <Search className="h-5 w-5" />,
                  title: "A clear starting point",
                  description:
                    "Not a generic age label, but a real assessment of where your child is across all subjects.",
                },
                {
                  icon: <HelpCircle className="h-5 w-5" />,
                  title: "A daily plan",
                  description:
                    "Tells you exactly what to do, with prompts and activities ready to go.",
                },
                {
                  icon: <Lightbulb className="h-5 w-5" />,
                  title: "Confidence in coverage",
                  description:
                    "Know the plan covers what matters, connected to a real adaptive planner.",
                },
                {
                  icon: <MessageCircle className="h-5 w-5" />,
                  title: "Natural activities",
                  description:
                    "Activities that feel natural, not like homework. Screen-light learning rooted in play, talk, and everyday life.",
                },
                {
                  icon: <Eye className="h-5 w-5" />,
                  title: "Visible progress",
                  description:
                    "A way to see progress without tests, grades, or comparison.",
                },
                {
                  icon: <ArrowRight className="h-5 w-5" />,
                  title: "Reassurance",
                  description:
                    "Confidence that you are doing enough, backed by parent-child connection research.",
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* How it works together */}
      <SectionShell bg="paper-alt">
        <div>
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            How the guide supports you
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            goWondr takes the hard parts off your plate so you can
            focus on the relationship.
          </p>
          <div className="mt-8">
            <FlowDiagram
              title="HOW THE PARTNERSHIP WORKS"
              caption="The product carries structure and sequence. The parent carries warmth and attention. Together, they create the conditions for deeper learning."
              direction="vertical"
              nodes={[
                { id: "guide", label: "goWondr", description: "Curriculum, sequence, coaching language", variant: "teal" },
                { id: "structure", label: "Clear structure", description: "Daily plans, review timing, progress tracking" },
                { id: "parent", label: "Parent guides with warmth", description: "Encouragement, observation, conversation" },
                { id: "child", label: "Child learns deeply", description: "Understanding, confidence, curiosity", variant: "success" },
              ]}
              connections={[
                { from: "guide", to: "structure", label: "provides" },
                { from: "structure", to: "parent", label: "supports" },
                { from: "parent", to: "child", label: "nurtures" },
                { from: "child", to: "guide", label: "growth feeds back", dashed: true },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* Common fears */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Common fears, honestly answered
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                &ldquo;What if I teach it wrong?&rdquo;
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                The guide gives you the right concepts, the right prompts, and
                the right sequence. You do not need to be the expert. You just
                need to follow the session and let the conversation unfold.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                &ldquo;What if I do not have time?&rdquo;
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                Sessions are designed for 15 to 30 minutes. Many families fit
                them into breakfast, bath time, or a walk. Consistency matters
                more than length.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                &ldquo;What if my child resists?&rdquo;
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                Children resist worksheets and screens. They rarely resist a
                parent who sits down, asks a good question, and genuinely
                listens. The guide helps you start conversations, not
                assignments.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Emotional close */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            You are already your child's best teacher
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Not because you know everything, but because you care the most. The
            Learning Guide does not replace you. It supports you. It gives you
            the structure so you can focus on the relationship. And that
            relationship is where real learning lives.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Start learning together
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try it free for 15 days. See what a calm, connected learning rhythm
            feels like for your family.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
            <Button variant="secondary" size="lg" href="/how-it-works">
              See how it works
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
