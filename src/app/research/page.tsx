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
          <svg viewBox="0 0 800 380" className="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Seven research streams flowing together like river tributaries into one river of understanding">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="80%" stopColor="#F8F4ED" />
                <stop offset="100%" stopColor="#EFE6D8" />
              </linearGradient>
              <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#235A5F" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#235A5F" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#235A5F" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#235A5F" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#235A5F" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect width="800" height="380" fill="url(#sky)" />

            {/* Clouds */}
            <ellipse cx="140" cy="40" rx="55" ry="14" fill="#FBF7F1" opacity="0.7" />
            <ellipse cx="165" cy="35" rx="38" ry="11" fill="#FFFDF9" opacity="0.5" />
            <ellipse cx="480" cy="28" rx="65" ry="16" fill="#FBF7F1" opacity="0.6" />
            <ellipse cx="510" cy="22" rx="42" ry="12" fill="#FFFDF9" opacity="0.4" />
            <ellipse cx="680" cy="45" rx="35" ry="10" fill="#FBF7F1" opacity="0.4" />

            {/* Birds */}
            <path d="M200 55 L205 50 L210 55" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.2" />
            <path d="M220 48 L225 43 L230 48" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />
            <path d="M550 38 L555 33 L560 38" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />

            {/* Far distant mountains */}
            <path d="M0 130 Q60 90 120 115 Q180 85 250 108 Q320 80 400 105 Q470 82 540 100 Q610 78 680 95 Q730 88 800 100 L800 160 L0 160Z" fill="#235A5F" opacity="0.06" />

            {/* Nearer hills */}
            <path d="M0 155 Q80 120 170 145 Q250 115 350 140 Q430 118 530 135 Q610 112 700 130 Q750 125 800 135 L800 180 L0 180Z" fill="#4B7A5B" opacity="0.1" />
            <path d="M0 170 Q100 145 210 162 Q310 140 420 158 Q520 142 630 155 Q710 140 800 150 L800 195 L0 195Z" fill="#4B7A5B" opacity="0.07" />

            {/* Ground / riverbank */}
            <path d="M0 210 Q100 200 200 208 Q350 198 500 205 Q650 200 800 210 L800 380 L0 380Z" fill="#EFE6D8" opacity="0.5" />

            {/* === FOUNDATION STREAMS (teal, left) === */}

            {/* Stream 1: Parent-Child Connection — widest, most important */}
            <path d="M10 125 Q35 148 65 168 Q100 188 145 202 Q200 214 260 222 Q320 228 380 230" fill="none" stroke="#235A5F" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <path d="M10 125 Q35 148 65 168 Q100 188 145 202 Q200 214 260 222 Q320 228 380 230" fill="none" stroke="#235A5F" strokeWidth="10" strokeLinecap="round" opacity="0.06" />

            {/* Stream 2: Playful Learning */}
            <path d="M20 180 Q55 192 95 205 Q145 215 205 224 Q270 230 340 233 Q360 234 380 234" fill="none" stroke="#235A5F" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
            <path d="M20 180 Q55 192 95 205 Q145 215 205 224 Q270 230 340 233 Q360 234 380 234" fill="none" stroke="#235A5F" strokeWidth="8" strokeLinecap="round" opacity="0.05" />

            {/* Foundation merge */}
            <circle cx="380" cy="232" r="5" fill="#235A5F" opacity="0.3" />
            <circle cx="380" cy="232" r="8" fill="#235A5F" opacity="0.08" />

            {/* === CURRICULUM DESIGN STREAMS (terracotta/green, middle) === */}

            {/* Stream 3: Concept-First */}
            <path d="M200 128 Q250 155 300 180 Q350 200 400 218 Q430 226 470 232" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
            <path d="M200 128 Q250 155 300 180 Q350 200 400 218 Q430 226 470 232" fill="none" stroke="#A4582E" strokeWidth="8" strokeLinecap="round" opacity="0.05" />

            {/* Stream 4: Thinking Routines */}
            <path d="M280 108 Q325 140 370 172 Q415 198 455 220 Q475 228 500 234" fill="none" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
            <path d="M280 108 Q325 140 370 172 Q415 198 455 220 Q475 228 500 234" fill="none" stroke="#4B7A5B" strokeWidth="8" strokeLinecap="round" opacity="0.05" />

            {/* Stream 5: Adaptive Planning */}
            <path d="M350 145 Q395 170 440 195 Q475 212 510 226 Q530 232 545 236" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
            <path d="M350 145 Q395 170 440 195 Q475 212 510 226 Q530 232 545 236" fill="none" stroke="#A4582E" strokeWidth="6" strokeLinecap="round" opacity="0.04" />

            {/* Curriculum merge */}
            <circle cx="510" cy="234" r="5" fill="#A4582E" opacity="0.25" />
            <circle cx="510" cy="234" r="8" fill="#A4582E" opacity="0.06" />

            {/* === MAIN RIVER (combined, widening) === */}
            <path d="M380 228 Q440 228 510 232 Q570 236 630 242 Q680 250 730 258 Q760 264 800 270" fill="none" stroke="#235A5F" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
            <path d="M380 236 Q440 238 510 240 Q570 244 630 252 Q680 260 730 270 Q760 276 800 284" fill="none" stroke="#235A5F" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
            {/* River body fill */}
            <path d="M380 226 Q440 226 510 230 Q570 234 630 240 Q680 248 730 256 Q760 262 800 268 L800 286 Q760 278 730 272 Q680 264 630 256 Q570 248 510 244 Q440 240 380 238Z" fill="url(#river)" />

            {/* Water shimmer highlights */}
            <path d="M420 232 Q440 230 460 232" fill="none" stroke="#FFFDF9" strokeWidth="0.8" opacity="0.3" />
            <path d="M530 236 Q555 234 575 237" fill="none" stroke="#FFFDF9" strokeWidth="0.8" opacity="0.25" />
            <path d="M640 248 Q660 246 680 250" fill="none" stroke="#FFFDF9" strokeWidth="0.8" opacity="0.2" />
            <path d="M470 236 Q480 234 490 236" fill="none" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.2" />
            <path d="M590 242 Q600 240 612 243" fill="none" stroke="#FFFDF9" strokeWidth="0.6" opacity="0.2" />
            <path d="M710 258 Q720 256 735 260" fill="none" stroke="#FFFDF9" strokeWidth="0.7" opacity="0.15" />

            {/* === FUTURE READINESS STREAMS (slate, right) === */}

            {/* Stream 6: Breadth */}
            <path d="M490 125 Q530 152 570 182 Q600 205 630 225 Q650 236 670 244" fill="none" stroke="#52616D" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
            <path d="M490 125 Q530 152 570 182 Q600 205 630 225 Q650 236 670 244" fill="none" stroke="#52616D" strokeWidth="7" strokeLinecap="round" opacity="0.04" />

            {/* Stream 7: Digital Judgment */}
            <path d="M570 135 Q600 158 630 185 Q655 208 675 228 Q685 238 695 248" fill="none" stroke="#52616D" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
            <path d="M570 135 Q600 158 630 185 Q655 208 675 228 Q685 238 695 248" fill="none" stroke="#52616D" strokeWidth="5" strokeLinecap="round" opacity="0.03" />

            {/* Future merge */}
            <circle cx="675" cy="244" r="4" fill="#52616D" opacity="0.25" />
            <circle cx="675" cy="244" r="7" fill="#52616D" opacity="0.06" />

            {/* === SEA / HORIZON === */}
            <path d="M730 255 Q755 260 780 268 Q800 276 800 290 L800 380 L730 380 Q733 340 730 300Z" fill="url(#sea)" />
            {/* Horizon shimmer */}
            <path d="M735 260 Q750 256 765 262" fill="none" stroke="#FFFDF9" strokeWidth="0.6" opacity="0.2" />
            <path d="M750 270 Q760 267 775 272" fill="none" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.15" />

            {/* === RIVERBANK DETAIL === */}

            {/* Pebbles/texture */}
            {[140,190,260,340,400,470,540,600,660,720].map((x, i) => (
              <circle key={`p1-${i}`} cx={x} cy={250 + (i % 3) * 5} r="1" fill="#A4582E" opacity="0.12" />
            ))}
            {[110,170,230,320,380,450,510,580,640,700].map((x, i) => (
              <circle key={`p2-${i}`} cx={x} cy={258 + (i % 2) * 6} r="0.8" fill="#4B7A5B" opacity="0.1" />
            ))}
            {[160,240,330,420,500,570,630].map((x, i) => (
              <circle key={`p3-${i}`} cx={x} cy={265 + (i % 3) * 4} r="0.6" fill="#886328" opacity="0.08" />
            ))}

            {/* Trees along upper bank */}
            <line x1="55" y1="175" x2="55" y2="158" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <circle cx="55" cy="154" r="5.5" fill="#4B7A5B" opacity="0.18" />
            <circle cx="50" cy="157" r="4" fill="#4B7A5B" opacity="0.12" />

            <line x1="105" y1="195" x2="105" y2="180" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
            <circle cx="105" cy="176" r="5" fill="#4B7A5B" opacity="0.15" />
            <circle cx="100" cy="179" r="3.5" fill="#4B7A5B" opacity="0.1" />

            <line x1="165" y1="205" x2="165" y2="192" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <circle cx="165" cy="189" r="4" fill="#4B7A5B" opacity="0.12" />

            <line x1="320" y1="212" x2="320" y2="198" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
            <circle cx="320" cy="195" r="4.5" fill="#4B7A5B" opacity="0.12" />
            <circle cx="316" cy="198" r="3" fill="#4B7A5B" opacity="0.08" />

            <line x1="430" y1="215" x2="430" y2="202" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <circle cx="430" cy="199" r="3.5" fill="#4B7A5B" opacity="0.1" />

            <line x1="560" y1="218" x2="560" y2="205" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <circle cx="560" cy="202" r="4" fill="#4B7A5B" opacity="0.1" />

            {/* Flowers/details */}
            <circle cx="80" cy="198" r="2" fill="#A4582E" opacity="0.2" />
            <circle cx="240" cy="220" r="1.5" fill="#94536C" opacity="0.15" />
            <circle cx="480" cy="222" r="2" fill="#A4582E" opacity="0.15" />
            <circle cx="620" cy="232" r="1.5" fill="#7A5AA6" opacity="0.12" />

            {/* Small rocks near river */}
            <ellipse cx="350" cy="245" rx="4" ry="2.5" fill="#E6D5C3" opacity="0.4" />
            <ellipse cx="530" cy="248" rx="3.5" ry="2" fill="#E6D5C3" opacity="0.35" />
            <ellipse cx="680" cy="255" rx="3" ry="2" fill="#E6D5C3" opacity="0.3" />

            {/* === PARENT + CHILD FIGURES at the sea === */}
            {/* Parent */}
            <circle cx="745" cy="232" r="6" fill="#A4582E" opacity="0.5" />
            <line x1="745" y1="238" x2="745" y2="258" stroke="#A4582E" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
            <line x1="745" y1="246" x2="736" y2="254" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <path d="M745 246 Q752 242 758 244" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="745" y1="258" x2="739" y2="272" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <line x1="745" y1="258" x2="751" y2="272" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

            {/* Child */}
            <circle cx="762" cy="240" r="5" fill="#4B7A5B" opacity="0.5" />
            <line x1="762" y1="245" x2="762" y2="262" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <path d="M762 252 Q758 248 756 245" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <line x1="762" y1="252" x2="768" y2="258" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <line x1="762" y1="262" x2="757" y2="274" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <line x1="762" y1="262" x2="767" y2="274" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

            {/* === LABELS === */}

            {/* Group headers */}
            <text x="18" y="115" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="#235A5F" opacity="0.8">FOUNDATION</text>
            <text x="290" y="98" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="#A4582E" opacity="0.7">CURRICULUM DESIGN</text>
            <text x="520" y="115" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="#52616D" opacity="0.7">FUTURE READINESS</text>

            {/* Stream labels with background pills */}
            <rect x="14" y="120" width="82" height="16" rx="8" fill="#235A5F" opacity="0.08" />
            <text x="55" y="132" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.7" textAnchor="middle">Parent-Child</text>

            <rect x="14" y="168" width="95" height="16" rx="8" fill="#235A5F" opacity="0.08" />
            <text x="62" y="180" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.7" textAnchor="middle">Playful Learning</text>

            <rect x="193" y="115" width="80" height="16" rx="8" fill="#A4582E" opacity="0.08" />
            <text x="233" y="127" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.65" textAnchor="middle">Concept-First</text>

            <rect x="267" y="96" width="108" height="16" rx="8" fill="#4B7A5B" opacity="0.08" />
            <text x="321" y="108" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.65" textAnchor="middle">Thinking Routines</text>

            <rect x="342" y="133" width="60" height="16" rx="8" fill="#A4582E" opacity="0.06" />
            <text x="372" y="145" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.55" textAnchor="middle">Adaptive</text>

            <rect x="483" y="113" width="55" height="16" rx="8" fill="#52616D" opacity="0.06" />
            <text x="510" y="125" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.55" textAnchor="middle">Breadth</text>

            <rect x="563" y="123" width="50" height="16" rx="8" fill="#52616D" opacity="0.06" />
            <text x="588" y="135" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.5" textAnchor="middle">Digital</text>

            {/* Figures label */}
            <text x="753" y="288" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#1E2A34" opacity="0.45" textAnchor="middle">the child</text>
            <text x="753" y="300" fontFamily="var(--font-body)" fontSize="9" fill="#52616D" opacity="0.35" textAnchor="middle">at the horizon</text>

            {/* River label */}
            <text x="600" y="280" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.3" textAnchor="middle">understanding flows together</text>
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
