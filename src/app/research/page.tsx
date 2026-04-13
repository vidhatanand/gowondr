import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

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
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          HOW OUR RESEARCH CONNECTS
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 700 300" className="w-full h-auto" role="img" aria-label="River tributaries showing how seven research streams flow together into one river of understanding">
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="100%" stopColor="#F8F4ED" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#235A5F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#235A5F" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="seaGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#235A5F" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#235A5F" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <rect width="700" height="300" fill="url(#skyGrad)" />

            {/* Distant hills */}
            <path d="M0 140 Q80 100 160 130 Q240 105 320 125 Q400 100 480 120 Q560 95 640 115 L700 108 L700 300 L0 300Z" fill="#4B7A5B" opacity="0.12" />
            <path d="M0 160 Q100 130 200 155 Q300 125 400 150 Q500 130 600 145 L700 135 L700 300 L0 300Z" fill="#4B7A5B" opacity="0.08" />

            {/* Ground / riverbank base */}
            <path d="M0 200 Q100 195 200 200 Q350 190 500 195 Q600 192 700 200 L700 300 L0 300Z" fill="#EFE6D8" opacity="0.6" />

            {/* Foundation streams (teal, left side) */}
            {/* Stream 1: Parent-Child Connection */}
            <path d="M20 120 Q40 140 60 155 Q90 175 130 190 Q170 200 220 208 Q270 212 320 215" fill="none" stroke="#235A5F" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            <path d="M20 120 Q40 140 60 155 Q90 175 130 190 Q170 200 220 208 Q270 212 320 215" fill="none" stroke="#235A5F" strokeWidth="8" strokeLinecap="round" opacity="0.1" />
            {/* Stream 2: Playful Learning */}
            <path d="M30 170 Q60 180 100 192 Q140 200 190 210 Q250 216 320 218" fill="none" stroke="#235A5F" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M30 170 Q60 180 100 192 Q140 200 190 210 Q250 216 320 218" fill="none" stroke="#235A5F" strokeWidth="6" strokeLinecap="round" opacity="0.08" />

            {/* Merge node 1 (foundation merge) */}
            <circle cx="320" cy="216" r="4" fill="#235A5F" opacity="0.4" />

            {/* Curriculum Design tributaries (terracotta/green, middle) */}
            {/* Stream 3: Concept-First */}
            <path d="M180 130 Q220 155 260 175 Q300 192 340 205 Q380 212 420 216" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
            <path d="M180 130 Q220 155 260 175 Q300 192 340 205 Q380 212 420 216" fill="none" stroke="#A4582E" strokeWidth="6" strokeLinecap="round" opacity="0.08" />
            {/* Stream 4: Thinking Routines */}
            <path d="M240 110 Q280 140 320 165 Q360 185 400 205 Q420 212 440 216" fill="none" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
            <path d="M240 110 Q280 140 320 165 Q360 185 400 205 Q420 212 440 216" fill="none" stroke="#4B7A5B" strokeWidth="6" strokeLinecap="round" opacity="0.08" />
            {/* Stream 5: Adaptive Planning */}
            <path d="M300 145 Q340 165 380 185 Q420 200 450 212 Q460 215 470 217" fill="none" stroke="#A4582E" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />

            {/* Merge node 2 (curriculum merge) */}
            <circle cx="440" cy="216" r="4" fill="#A4582E" opacity="0.35" />

            {/* Main river getting wider after merges */}
            <path d="M320 215 Q380 214 440 216 Q500 218 560 222 Q600 226 640 232 Q670 238 700 245" fill="none" stroke="#235A5F" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
            <path d="M320 218 Q380 220 440 220 Q500 224 560 230 Q600 238 640 248 Q670 255 700 262" fill="none" stroke="#235A5F" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            {/* River fill */}
            <path d="M320 213 Q380 212 440 214 Q500 216 560 220 Q600 224 640 230 Q670 236 700 243 L700 265 Q670 258 640 252 Q600 242 560 234 Q500 228 440 224 Q380 222 320 220Z" fill="#235A5F" opacity="0.1" />

            {/* Future Readiness tributaries (right side) */}
            {/* Stream 6: Breadth */}
            <path d="M420 130 Q460 155 500 180 Q530 198 555 212 Q570 220 580 225" fill="none" stroke="#52616D" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
            {/* Stream 7: Digital Judgment */}
            <path d="M500 140 Q530 160 555 180 Q575 198 590 212 Q600 222 610 230" fill="none" stroke="#52616D" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />

            {/* Merge node 3 (future readiness merge) */}
            <circle cx="580" cy="224" r="3.5" fill="#52616D" opacity="0.35" />

            {/* Sea / horizon at right edge */}
            <path d="M640 228 Q660 232 680 240 Q700 248 700 260 L700 300 L640 300 Q645 280 640 260Z" fill="url(#seaGrad)" />
            {/* Horizon line */}
            <line x1="640" y1="228" x2="700" y2="243" stroke="#235A5F" strokeWidth="0.5" opacity="0.3" />

            {/* Texture dots on riverbank */}
            {[130,180,250,340,390,460,520,580,620].map((x, i) => (
              <circle key={i} cx={x} cy={235 + (i % 3) * 4} r="0.8" fill="#A4582E" opacity="0.15" />
            ))}
            {[100,160,220,310,370,430,490,560,640].map((x, i) => (
              <circle key={i} cx={x} cy={242 + (i % 2) * 5} r="0.6" fill="#4B7A5B" opacity="0.12" />
            ))}

            {/* Small trees/vegetation along banks */}
            {/* Left bank trees */}
            <line x1="50" y1="165" x2="50" y2="152" stroke="#4B7A5B" strokeWidth="1" opacity="0.3" />
            <circle cx="50" cy="149" r="4" fill="#4B7A5B" opacity="0.2" />
            <line x1="90" y1="188" x2="90" y2="176" stroke="#4B7A5B" strokeWidth="1" opacity="0.25" />
            <circle cx="90" cy="173" r="3.5" fill="#4B7A5B" opacity="0.18" />
            <line x1="150" y1="195" x2="150" y2="184" stroke="#4B7A5B" strokeWidth="1" opacity="0.25" />
            <circle cx="150" cy="181" r="3" fill="#4B7A5B" opacity="0.15" />

            {/* Mid trees */}
            <line x1="350" y1="202" x2="350" y2="190" stroke="#4B7A5B" strokeWidth="1" opacity="0.2" />
            <circle cx="350" cy="187" r="3.5" fill="#4B7A5B" opacity="0.15" />
            <line x1="480" y1="205" x2="480" y2="194" stroke="#4B7A5B" strokeWidth="1" opacity="0.2" />
            <circle cx="480" cy="191" r="3" fill="#4B7A5B" opacity="0.12" />

            {/* Small child figure at the sea/right edge */}
            <circle cx="665" cy="218" r="5" fill="none" stroke="#1E2A34" strokeWidth="1.2" opacity="0.5" />
            <line x1="665" y1="223" x2="665" y2="237" stroke="#1E2A34" strokeWidth="1.2" opacity="0.5" />
            <line x1="665" y1="228" x2="658" y2="233" stroke="#1E2A34" strokeWidth="1.2" opacity="0.5" />
            <line x1="665" y1="228" x2="672" y2="233" stroke="#1E2A34" strokeWidth="1.2" opacity="0.5" />
            <line x1="665" y1="237" x2="659" y2="248" stroke="#1E2A34" strokeWidth="1.2" opacity="0.5" />
            <line x1="665" y1="237" x2="671" y2="248" stroke="#1E2A34" strokeWidth="1.2" opacity="0.5" />

            {/* Group labels */}
            <text x="25" y="112" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#235A5F" opacity="0.7">FOUNDATION</text>
            <text x="260" y="102" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#A4582E" opacity="0.7">CURRICULUM DESIGN</text>
            <text x="455" y="122" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#52616D" opacity="0.7">FUTURE READINESS</text>

            {/* Stream labels */}
            <text x="22" y="115" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.6" dy="12">Parent-Child</text>
            <text x="32" y="178" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.6" dy="-4">Playful Learning</text>
            <text x="182" y="124" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.55">Concept-First</text>
            <text x="242" y="104" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.55">Thinking Routines</text>
            <text x="302" y="139" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.5">Adaptive</text>
            <text x="422" y="124" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.5">Breadth</text>
            <text x="502" y="134" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.5">Digital</text>

            {/* "The child" label near the figure */}
            <text x="650" y="258" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#1E2A34" opacity="0.5" textAnchor="middle">the child</text>
          </svg>
        </div>
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
