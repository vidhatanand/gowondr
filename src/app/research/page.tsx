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
  title: "Parent-led learning research and evidence",
  description:
    "Explore the evidence behind parent-child learning, concept-first curriculum design, playful screen-light learning, adaptive planning, and future-ready skills.",
  alternates: { canonical: "/research" },
  openGraph: {
    title:
      "Parent-led learning research and evidence | goWondr",
    description:
      "Explore the evidence behind parent-child learning, concept-first curriculum design, playful screen-light learning, adaptive planning, and future-ready skills.",
    url: "/research",
    type: "article",
    siteName: "goWondr",
  },
};

const researchCards = [
  {
    title: "Parent-child connection and learning",
    summary:
      "Why responsive parent-child interaction supports language, confidence, attention, and deeper learning outcomes.",
    href: "/research/parent-child-connection-learning",
  },
  {
    title: "Concept-first curriculum coverage",
    summary:
      "Why concept-based curriculum structure, developmental sequencing, and revisit cycles create stronger understanding than disconnected activities.",
    href: "/research/concept-first-coverage",
  },
  {
    title: "Playful, screen-light learning",
    summary:
      "Evidence for guided, multi-modal learning that uses conversation, movement, and real materials instead of passive screen time.",
    href: "/research/playful-screen-light-learning",
  },
  {
    title: "Thinking routines and visible understanding",
    summary:
      "How thinking routines, representation, and concept mapping deepen children's understanding and make learning visible to parents.",
    href: "/research/thinking-routines-visible-understanding",
  },
  {
    title: "Adaptive planning and spaced revisit",
    summary:
      "Evidence for spaced repetition, adaptive sequencing, and review timing in building durable understanding.",
    href: "/research/adaptive-planning-spaced-revisit",
  },
  {
    title: "Breadth in an AI world",
    summary:
      "Why broad foundations across subjects matter more in a future shaped by AI, automation, and rapid change.",
    href: "/research/breadth-future-ready-ai-world",
  },
  {
    title: "Digital literacy with judgment",
    summary:
      "Why children need digital understanding, safety, and agency — not just device skills — and how screen-light digital literacy builds real judgment.",
    href: "/research/digital-literacy-with-judgment",
  },
];

const researchTruths = [
  "Children learn best when a caring adult is present and responsive.",
  "Concept-first structure beats disconnected activity bundles.",
  "Playful, multi-modal learning leads to deeper understanding than passive screen time.",
  "Thinking routines make understanding visible to both child and parent.",
  "Spaced revisit builds durable knowledge that sticks beyond a single session.",
  "Broad foundations across subjects prepare children better than narrow drilling.",
  "Digital literacy requires judgment, not just device fluency.",
  "Honest research means stating what the evidence supports — and what it does not.",
];

export default function ResearchHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Parent-led learning research hub",
          type: "WebPage",
          description:
            "Evidence base for parent-led, concept-first home learning",
        }}
        relatedEntities={[
          { name: "Parent-child connection and learning", type: "Thing" },
          { name: "Concept-based curriculum design", type: "Thing" },
          { name: "Playful screen-light learning", type: "Thing" },
          { name: "Thinking routines in education", type: "Thing" },
          { name: "Adaptive planning and spaced revisit", type: "Thing" },
          { name: "Educational breadth for AI readiness", type: "Thing" },
          { name: "Digital literacy with judgment", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Research that supports the approach — and keeps the claims honest
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate">
          goWondr is built on a set of beliefs about how children
          learn best. Those beliefs are shaped by research — not invented from
          scratch, not cherry-picked to sell a product. This hub collects the
          evidence that supports our approach, explains what the research
          suggests (and what it does not), and shows how it shapes the product
          decisions we make every day.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          We think{" "}
          <InternalLink href="/for-parents">parents</InternalLink> deserve to
          know why something works before they trust it with their child's
          time. So we keep the claims honest, the citations real, and the
          limitations visible.
        </p>
      </SectionShell>

      {/* How research topics connect */}
      <SectionShell bg="paper">
        <FlowDiagram
          title="HOW OUR RESEARCH CONNECTS"
          caption="Each research area builds on the others — from foundational parent-child interaction through curriculum design to future-readiness."
          direction="vertical"
          nodes={[
            { id: "parent", label: "Parent-Child Connection", description: "Why the relationship matters" },
            { id: "playful", label: "Playful Learning", description: "Why real experience beats screens" },
            { id: "concept", label: "Concept-First Coverage", description: "Why connected concepts work" },
            { id: "thinking", label: "Thinking Routines", description: "How visible thinking helps" },
            { id: "adaptive", label: "Adaptive Planning", description: "Why review timing matters" },
            { id: "breadth", label: "Breadth for AI World", description: "Why broad foundations matter" },
            { id: "digital", label: "Digital Judgment", description: "Why understanding beats fluency" },
          ]}
          connections={[
            { from: "parent", to: "playful", label: "supports" },
            { from: "parent", to: "concept", label: "grounds" },
            { from: "playful", to: "thinking", label: "enriches" },
            { from: "concept", to: "adaptive", label: "structured by" },
            { from: "adaptive", to: "breadth", label: "prepares" },
            { from: "breadth", to: "digital", label: "includes" },
          ]}
          groups={[
            { label: "Foundation", nodeIds: ["parent", "playful"] },
            { label: "Curriculum Design", nodeIds: ["concept", "thinking", "adaptive"] },
            { label: "Future Readiness", nodeIds: ["breadth", "digital"] },
          ]}
        />
      </SectionShell>

      {/* Research truths */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Eight truths the evidence supports
        </h2>
        <ol className="mt-8 space-y-4">
          {researchTruths.map((truth, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-display text-[17px] text-teal font-semibold shrink-0">
                {i + 1}.
              </span>
              <p className="text-[17px] leading-[28px] text-slate">{truth}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* Research grid */}
      <SectionShell bg="paper">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          Explore the evidence
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate text-center max-w-2xl mx-auto">
          Each page explains what the research says, what it means for
          families, and how it shapes{" "}
          <InternalLink href="/how-it-works">
            how the product works
          </InternalLink>
          .
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchCards.map((card) => (
            <Card key={card.href} variant="elevated" hover>
              <h3 className="font-display text-[24px] leading-[30px] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[24px] text-slate">
                {card.summary}
              </p>
              <div className="mt-5">
                <Button variant="ghost" href={card.href}>
                  Read the research
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See the research in action
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try goWondr free for 15 days. No payment details
            required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
            <Button variant="secondary" size="lg" href="/for-parents">
              Learn more for parents
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
