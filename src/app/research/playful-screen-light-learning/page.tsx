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
  title: "Why playful, screen-light learning works | Research",
  description:
    "Explore evidence for playful, guided, multi-modal learning that uses conversation, movement, and real materials instead of passive screen time.",
  alternates: { canonical: "/research/playful-screen-light-learning" },
  openGraph: {
    title:
      "Why playful, screen-light learning works | goWondr",
    description:
      "Explore evidence for playful, guided, multi-modal learning that uses conversation, movement, and real materials instead of passive screen time.",
    url: "/research/playful-screen-light-learning",
    type: "article",
    siteName: "goWondr",
  },
};

export default function PlayfulScreenLightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Playful Screen-Light Learning",
              url: "/research/playful-screen-light-learning",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Why playful, screen-light, multi-modal learning works",
            description:
              "Evidence for playful, guided, multi-modal learning that uses conversation, movement, and real materials.",
            path: "/research/playful-screen-light-learning",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Playful screen-light learning research",
          type: "ScholarlyArticle",
          description:
            "Research on playful, guided, multi-modal learning approaches",
        }}
        relatedEntities={[
          { name: "Guided Play", type: "Thing" },
          { name: "Multi-modal Learning", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Playful Screen-Light Learning" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Why playful, screen-light, multi-modal learning works
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display">
          Young children learn deepest when they can talk, move, touch, and
          make — not just watch and tap.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <FlowComparison
          title="WHY MULTI-MODAL BEATS SINGLE-MODE"
          caption="When children use multiple senses — talking, touching, moving, drawing — they process ideas more deeply than tapping a screen."
          left={{
            label: "Passive Screen Learning",
            variant: "warning",
            steps: [
              { label: "Single input mode", description: "Tap and swipe on a flat surface" },
              { label: "Task completion", description: "Correct answer = done, move on" },
            ],
            outcome: { label: "Surface engagement only", description: "Idea fades quickly, limited transfer" },
          }}
          right={{
            label: "Guided, Screen-Light Learning",
            variant: "success",
            steps: [
              { label: "Real materials", description: "Objects, paper, nature, household items" },
              { label: "Rich conversation", description: "Parent-child dialogue and coaching" },
              { label: "Movement & play", description: "Acting, building, sorting, exploring" },
              { label: "Multi-modal expression", description: "Drawing, mapping, making, representing" },
            ],
            outcome: { label: "Durable understanding", description: "Multiple neural pathways engaged, transfers to life" },
          }}
        />
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Children learn deeply through play, conversation, and movement.
          When learning involves multiple senses and modes — drawing,
          building, storytelling, sorting, acting out — understanding is
          stronger, more flexible, and more durable. Screen-based learning
          can support certain goals, but for young children, the richest
          learning happens off-screen, with a caring adult nearby.
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
              Guided play research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on guided play — where an adult sets up the
              environment and learning goals, but the child has agency within
              that structure — shows that it produces equal or better
              learning outcomes compared to direct instruction for young
              children. Guided play supports vocabulary, spatial reasoning,
              mathematics, and scientific thinking. The key is that the child
              is actively engaged, not passively receiving.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Screen time research for young children
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on screen time for children under eight consistently
              finds that passive screen consumption is associated with
              reduced language development, shorter attention spans, and
              lower executive function. Interactive, co-viewed screen use
              with a parent can have neutral or mildly positive effects —
              but it rarely outperforms equivalent off-screen interaction.
              For the youngest learners, hands-on and conversational
              activities remain the strongest evidence-backed approach.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Multi-modal learning
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Cognitive science research supports the idea that learning is
              strengthened when children engage with concepts through
              multiple modes — verbal, visual, kinesthetic, and social.
              When a child talks about a concept, draws it, builds it, and
              explains it to someone else, they form richer mental
              representations than if they only read about it or watched
              a video.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Playful ≠ unstructured */}
      <SectionShell bg="linen" narrow={true} id="playful-not-unstructured">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Playful does not mean unstructured
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          There is a common misunderstanding that playful learning means
          letting children do whatever they want. The evidence says
          otherwise. The most effective playful learning happens within a
          clear structure: the adult knows the learning goal, sets up an
          environment that invites exploration, and guides the child's
          attention toward the concept. The child experiences it as play. The
          adult knows it is purposeful.
        </p>
      </SectionShell>

      {/* Screen-light ≠ anti-technology */}
      <SectionShell bg="paper" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Screen-light does not mean anti-technology
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Screen-light is not a rejection of technology. It is a design
          principle that keeps the screen in its proper role: as a planning
          and reference tool for the parent, not as the primary learning
          surface for the child. goWondr uses technology to
          organize the curriculum, adapt the plan, and track progress —
          while the actual learning happens through conversation, play,
          drawing, building, and real-world exploration. Learn more about
          the{" "}
          <InternalLink href="/playful-screen-light-learning">
            screen-light learning approach
          </InternalLink>
          .
        </p>
      </SectionShell>

      {/* What this means for product design */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for product design
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Every activity in goWondr is designed to be done
          off-screen. The parent reads a short prompt, then puts the device
          down and engages with the child. Activities involve talking,
          drawing, sorting, building, moving, storytelling, and exploring
          the real world. The screen is a guide, not a babysitter.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          Play is not a break from learning. It is how young children learn
          best. And the best screen time is the kind that leads to more
          time off-screen, doing things that matter.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/playful-screen-light-learning">
            screen-light learning
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/for-parents">for parents</InternalLink> /{" "}
          <InternalLink href="/research/parent-child-connection-learning">
            parent-child connection
          </InternalLink>
        </p>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Parent-child connection and learning</h3>
            <p className="text-[14px] text-slate mb-3">Why responsive parent-child interaction supports language, confidence, and deeper learning.</p>
            <InternalLink href="/research/parent-child-connection-learning">Read more &rarr;</InternalLink>
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
            See playful learning in action
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
