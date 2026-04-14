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
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          HOW OUR RESEARCH CONNECTS
        </h3>
        <div className="rounded-2xl border border-sand bg-paper overflow-hidden">
          <svg viewBox="0 0 700 300" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Research landscape showing seven evidence landmarks along a path">
            <defs>
              <linearGradient id="researchSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="100%" stopColor="#F8F4ED" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect width="700" height="300" fill="url(#researchSky)" />

            {/* Clouds */}
            <ellipse cx="120" cy="32" rx="48" ry="12" fill="#FBF7F1" opacity="0.7" />
            <ellipse cx="145" cy="27" rx="32" ry="9" fill="#FFFDF9" />
            <ellipse cx="400" cy="22" rx="55" ry="13" fill="#FBF7F1" opacity="0.6" />
            <ellipse cx="425" cy="17" rx="35" ry="10" fill="#FFFDF9" opacity="0.4" />
            <ellipse cx="580" cy="38" rx="30" ry="9" fill="#FBF7F1" opacity="0.45" />

            {/* Sun glow near horizon */}
            <circle cx="620" cy="95" r="18" fill="#F8E8D0" opacity="0.2" />
            <circle cx="620" cy="95" r="10" fill="#F8E8D0" opacity="0.3" />
            {/* Sun rays */}
            <line x1="620" y1="75" x2="620" y2="70" stroke="#E8C87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
            <line x1="634" y1="81" x2="638" y2="78" stroke="#E8C87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
            <line x1="606" y1="81" x2="602" y2="78" stroke="#E8C87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
            <line x1="640" y1="95" x2="644" y2="95" stroke="#E8C87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.1" />
            <line x1="600" y1="95" x2="596" y2="95" stroke="#E8C87A" strokeWidth="0.8" strokeLinecap="round" opacity="0.1" />

            {/* Birds */}
            <path d="M170 48 L175 43 L180 48" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.2" />
            <path d="M190 42 L194 38 L198 42" fill="none" stroke="#52616D" strokeWidth="0.7" opacity="0.15" />
            <path d="M480 30 L484 26 L488 30" fill="none" stroke="#52616D" strokeWidth="0.7" opacity="0.2" />

            {/* Far distant mountains */}
            <path d="M0 115 Q50 85 110 100 Q160 78 230 95 Q290 72 360 90 Q420 75 480 88 Q540 70 600 85 Q650 78 700 88 L700 140 L0 140Z" fill="#235A5F" opacity="0.06" />

            {/* Nearer hills */}
            <path d="M0 135 Q70 108 150 128 Q220 105 310 122 Q380 106 460 118 Q530 100 610 115 Q660 108 700 118 L700 158 L0 158Z" fill="#4B7A5B" opacity="0.1" />

            {/* Ground layer 1 — research foundation (deeper) */}
            <path d="M0 175 Q80 162 170 170 Q280 160 400 168 Q520 158 630 165 Q670 162 700 168 L700 300 L0 300Z" fill="#EAF3F2" opacity="0.6" />

            {/* Ground layer 2 — learning path surface */}
            <path d="M0 195 Q90 182 190 190 Q310 180 430 188 Q540 178 640 185 Q675 183 700 188 L700 300 L0 300Z" fill="#F7ECE4" />

            {/* Texture dots in ground */}
            {[60,120,180,250,320,390,450,520,580,640].map((x, i) => (
              <circle key={`gt1-${i}`} cx={x} cy={210 + (i % 3) * 8} r="1" fill="#A4582E" opacity="0.1" />
            ))}
            {[90,150,210,280,350,420,480,550,610].map((x, i) => (
              <circle key={`gt2-${i}`} cx={x} cy={225 + (i % 2) * 6} r="0.8" fill="#235A5F" opacity="0.08" />
            ))}
            {[75,140,200,270,340,410,470,540,600,660].map((x, i) => (
              <circle key={`gt3-${i}`} cx={x} cy={240 + (i % 3) * 5} r="0.6" fill="#886328" opacity="0.08" />
            ))}

            {/* === THE WINDING PATH === */}
            <path d="M30 215 Q80 205 130 212 Q180 220 230 210 Q290 198 340 208 Q400 218 450 205 Q510 192 560 200 Q610 210 660 198" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" opacity="0.35" />
            {/* Path glow */}
            <path d="M30 215 Q80 205 130 212 Q180 220 230 210 Q290 198 340 208 Q400 218 450 205 Q510 192 560 200 Q610 210 660 198" fill="none" stroke="#A4582E" strokeWidth="6" strokeLinecap="round" strokeDasharray="6 4" opacity="0.06" />

            {/* === GROUP LABELS above the path === */}
            <text x="110" y="168" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#235A5F" opacity="0.7" textAnchor="middle">FOUNDATION</text>
            <text x="340" y="168" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#A4582E" opacity="0.65" textAnchor="middle">DESIGN</text>
            <text x="580" y="168" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#52616D" opacity="0.65" textAnchor="middle">FUTURE</text>

            {/* === LANDMARK 1: Connection (teal) === */}
            <circle cx="70" cy="213" r="6" fill="#235A5F" opacity="0.15" />
            <circle cx="70" cy="213" r="3.5" fill="#235A5F" opacity="0.4" />
            {/* Icon: two overlapping circles */}
            <circle cx="67" cy="213" r="2.5" fill="none" stroke="#235A5F" strokeWidth="0.8" />
            <circle cx="73" cy="213" r="2.5" fill="none" stroke="#235A5F" strokeWidth="0.8" />
            <text x="70" y="228" fontFamily="var(--font-body)" fontSize="8" fill="#235A5F" textAnchor="middle">Connection</text>

            {/* === LANDMARK 2: Play (teal) === */}
            <circle cx="155" cy="210" r="6" fill="#235A5F" opacity="0.15" />
            <circle cx="155" cy="210" r="3.5" fill="#235A5F" opacity="0.4" />
            {/* Icon: leaf shape */}
            <path d="M153 212 Q155 207 157 212 Q155 211 153 212Z" fill="#235A5F" />
            <line x1="155" y1="212" x2="155" y2="214" stroke="#235A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
            <text x="155" y="225" fontFamily="var(--font-body)" fontSize="8" fill="#235A5F" textAnchor="middle">Play</text>

            {/* === LANDMARK 3: Concepts (terracotta) === */}
            <circle cx="260" cy="206" r="6" fill="#A4582E" opacity="0.15" />
            <circle cx="260" cy="206" r="3.5" fill="#A4582E" opacity="0.4" />
            {/* Icon: small book */}
            <rect x="257" y="204" width="6" height="5" rx="0.5" fill="none" stroke="#A4582E" strokeWidth="0.7" />
            <line x1="260" y1="204" x2="260" y2="209" stroke="#A4582E" strokeWidth="0.5" opacity="0.4" />
            <text x="260" y="221" fontFamily="var(--font-body)" fontSize="8" fill="#A4582E" textAnchor="middle">Concepts</text>

            {/* === LANDMARK 4: Thinking (green) === */}
            <circle cx="355" cy="210" r="6" fill="#4B7A5B" opacity="0.15" />
            <circle cx="355" cy="210" r="3.5" fill="#4B7A5B" opacity="0.4" />
            {/* Icon: magnifying glass */}
            <circle cx="354" cy="209" r="2" fill="none" stroke="#4B7A5B" strokeWidth="0.7" />
            <line x1="355.5" y1="210.5" x2="357.5" y2="212.5" stroke="#4B7A5B" strokeWidth="0.7" strokeLinecap="round" />
            <text x="355" y="225" fontFamily="var(--font-body)" fontSize="8" fill="#4B7A5B" textAnchor="middle">Thinking</text>

            {/* === LANDMARK 5: Revisit (terracotta) === */}
            <circle cx="445" cy="208" r="6" fill="#A4582E" opacity="0.15" />
            <circle cx="445" cy="208" r="3.5" fill="#A4582E" opacity="0.4" />
            {/* Icon: spiral */}
            <path d="M445 206 Q448 206 448 208 Q448 210 445 210 Q443 210 443 208.5 Q443 207 444.5 207" fill="none" stroke="#A4582E" strokeWidth="0.7" strokeLinecap="round" />
            <text x="445" y="223" fontFamily="var(--font-body)" fontSize="8" fill="#A4582E" textAnchor="middle">Revisit</text>

            {/* === LANDMARK 6: Breadth (slate) === */}
            <circle cx="535" cy="198" r="6" fill="#52616D" opacity="0.15" />
            <circle cx="535" cy="198" r="3.5" fill="#52616D" opacity="0.4" />
            {/* Icon: flower with petals */}
            <circle cx="535" cy="198" r="1" fill="#52616D" opacity="0.4" />
            {[0,45,90,135,180,225,270,315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const px = 535 + Math.cos(rad) * 2.8;
              const py = 198 + Math.sin(rad) * 2.8;
              return <circle key={`petal-${i}`} cx={px} cy={py} r="0.8" fill="#52616D" opacity="0.35" />;
            })}
            <text x="535" y="213" fontFamily="var(--font-body)" fontSize="8" fill="#52616D" textAnchor="middle">Breadth</text>

            {/* === LANDMARK 7: Digital (slate) === */}
            <circle cx="620" cy="202" r="6" fill="#52616D" opacity="0.15" />
            <circle cx="620" cy="202" r="3.5" fill="#52616D" opacity="0.4" />
            {/* Icon: compass shape */}
            <circle cx="620" cy="202" r="2.5" fill="none" stroke="#52616D" strokeWidth="0.7" opacity="0.45" />
            <line x1="620" y1="199" x2="620" y2="205" stroke="#52616D" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
            <line x1="617.5" y1="202" x2="622.5" y2="202" stroke="#52616D" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
            <text x="620" y="217" fontFamily="var(--font-body)" fontSize="8" fill="#52616D" textAnchor="middle">Digital</text>

            {/* === TREES along the upper bank === */}
            <line x1="45" y1="185" x2="45" y2="170" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
            <circle cx="45" cy="166" r="5" fill="#4B7A5B" opacity="0.15" />
            <circle cx="41" cy="169" r="3.5" fill="#4B7A5B" opacity="0.1" />

            <line x1="110" y1="182" x2="110" y2="168" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.22" />
            <circle cx="110" cy="165" r="4.5" fill="#4B7A5B" opacity="0.13" />

            <line x1="200" y1="180" x2="200" y2="167" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <circle cx="200" cy="164" r="4" fill="#4B7A5B" opacity="0.12" />
            <circle cx="196" cy="166" r="3" fill="#4B7A5B" opacity="0.08" />

            <line x1="310" y1="178" x2="310" y2="165" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
            <circle cx="310" cy="162" r="4.5" fill="#4B7A5B" opacity="0.12" />

            <line x1="480" y1="176" x2="480" y2="164" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <circle cx="480" cy="161" r="3.5" fill="#4B7A5B" opacity="0.1" />

            <line x1="590" y1="178" x2="590" y2="166" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <circle cx="590" cy="163" r="4" fill="#4B7A5B" opacity="0.1" />

            {/* Small plants growing progressively taller left to right */}
            <line x1="85" y1="220" x2="85" y2="216" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
            <circle cx="85" cy="215" r="1.5" fill="#4B7A5B" opacity="0.2" />

            <line x1="230" y1="215" x2="230" y2="209" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
            <circle cx="230" cy="208" r="2" fill="#4B7A5B" opacity="0.2" />

            <line x1="400" y1="218" x2="400" y2="210" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            <circle cx="400" cy="209" r="2.5" fill="#4B7A5B" opacity="0.2" />

            <line x1="570" y1="205" x2="570" y2="195" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            <circle cx="570" cy="194" r="3" fill="#4B7A5B" opacity="0.2" />

            {/* Tiny flowers scattered */}
            <circle cx="100" cy="218" r="1.5" fill="#A4582E" opacity="0.2" />
            <circle cx="190" cy="212" r="1.5" fill="#A4582E" opacity="0.18" />
            <circle cx="290" cy="216" r="1.5" fill="#A4582E" opacity="0.15" />
            <circle cx="420" cy="214" r="1.5" fill="#A4582E" opacity="0.15" />
            <circle cx="510" cy="205" r="1.5" fill="#A4582E" opacity="0.12" />
            <circle cx="650" cy="208" r="1.5" fill="#A4582E" opacity="0.12" />

            {/* === PARENT + CHILD FIGURES walking center-right === */}
            {/* Parent */}
            <circle cx="500" cy="188" r="5" fill="#A4582E" />
            <line x1="500" y1="193" x2="500" y2="208" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="500" y1="199" x2="493" y2="205" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M500 199 Q505 196 509 198" fill="none" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="500" y1="208" x2="495" y2="218" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="500" y1="208" x2="505" y2="218" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" />

            {/* Child */}
            <circle cx="513" cy="194" r="4" fill="#4B7A5B" />
            <line x1="513" y1="198" x2="513" y2="211" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M513 204 Q510 201 508 199" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
            <line x1="513" y1="204" x2="518" y2="209" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
            <line x1="513" y1="211" x2="509" y2="220" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
            <line x1="513" y1="211" x2="517" y2="220" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />

            {/* Connected hands */}
            <line x1="508" y1="198" x2="509" y2="199" stroke="#C4886A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

            {/* "the child" label near horizon */}
            <text x="660" y="185" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#1E2A34" opacity="0.4" textAnchor="middle">the child</text>
            {/* Small figure at the horizon */}
            <circle cx="660" cy="192" r="3" fill="#4B7A5B" opacity="0.3" />
            <line x1="660" y1="195" x2="660" y2="203" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
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
