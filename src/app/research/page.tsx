import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import {
  Heart, Layers, Leaf, Brain, RefreshCw, Globe, Shield,
} from "lucide-react";
import { ResearchHubSVG } from "@/components/svg/ResearchHubSVG";

export const metadata: Metadata = {
  title: "Parent-led learning research and evidence",
  description:
    "Explore the evidence behind parent-child learning, concept-first curriculum design, playful screen-light learning, adaptive planning, and future-ready skills.",
  alternates: { canonical: "/research" },
  openGraph: {
    title:
      "Parent-led learning research and evidence | goPondr",
    description:
      "Explore the evidence behind parent-child learning, concept-first curriculum design, playful screen-light learning, adaptive planning, and future-ready skills.",
    url: "/research",
    type: "article",
    siteName: "goPondr",
  },
};

const researchCards = [
  {
    title: "Parent-Child Connection",
    summary: "Why responsive parent-child interaction supports language, confidence, and deeper learning.",
    href: "/research/parent-child-connection-learning",
    icon: Heart,
    softClass: "bg-terracotta-soft",
    inkClass: "text-terracotta",
  },
  {
    title: "Concept-First Coverage",
    summary: "Why concept-based structure and revisit cycles create stronger understanding than random activities.",
    href: "/research/concept-first-coverage",
    icon: Layers,
    softClass: "bg-teal-soft",
    inkClass: "text-teal",
  },
  {
    title: "Playful, Screen-Light Learning",
    summary: "Evidence for guided, multi-modal learning using conversation, movement, and real materials.",
    href: "/research/playful-screen-light-learning",
    icon: Leaf,
    softClass: "bg-science-soft",
    inkClass: "text-science-ink",
  },
  {
    title: "Thinking Routines",
    summary: "How thinking routines and concept mapping make understanding visible to both child and parent.",
    href: "/research/thinking-routines-visible-understanding",
    icon: Brain,
    softClass: "bg-arts-soft",
    inkClass: "text-arts-ink",
  },
  {
    title: "Adaptive Planning & Revisit",
    summary: "Evidence for spaced repetition, adaptive sequencing, and review timing in building durable knowledge.",
    href: "/research/adaptive-planning-spaced-revisit",
    icon: RefreshCw,
    softClass: "bg-info-soft",
    inkClass: "text-info-ink",
  },
  {
    title: "Breadth in an AI World",
    summary: "Why broad foundations across subjects matter more in a future shaped by AI and rapid change.",
    href: "/research/breadth-future-ready-ai-world",
    icon: Globe,
    softClass: "bg-world-soft",
    inkClass: "text-world-ink",
  },
  {
    title: "Digital Literacy with Judgment",
    summary: "Why children need understanding, safety, and agency — not just device fluency.",
    href: "/research/digital-literacy-with-judgment",
    icon: Shield,
    softClass: "bg-digital-soft",
    inkClass: "text-digital-ink",
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
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/page-soil-layers.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Research" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Research that supports the approach — and keeps the claims honest
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
            goPondr is built on a set of beliefs about how children
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
        </div>
      </SectionShell>

      {/* How research topics connect */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
          HOW OUR RESEARCH CONNECTS
        </h3>
        <ResearchHubSVG />
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center">
          Each research area builds on the others — from foundational parent-child interaction through curriculum design to future-readiness.
        </p>
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

      {/* Research grid — matches subjects page card style */}
      <SectionShell bg="linen">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight mb-10">
          Explore the evidence
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.href}
                variant="subject"
                subjectSoftClass={card.softClass}
                subjectInkClass={card.inkClass}
                hover
                className="flex flex-col"
              >
                <Icon className="h-7 w-7 mb-3" />
                <h3 className="font-display text-[24px] leading-[30px] text-ink mb-2">
                  {card.title}
                </h3>
                <p className="text-[17px] leading-[28px] text-slate mb-4 flex-1">
                  {card.summary}
                </p>
                <InternalLink href={card.href}>
                  Read the research &rarr;
                </InternalLink>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See the research in action
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try goPondr free for 15 days. No payment details
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
