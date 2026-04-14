import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";

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
      "Why adaptive planning and spaced revisit matter | goPondr",
    description:
      "Explore evidence for spaced repetition, adaptive sequencing, and review timing in building durable understanding for children.",
    url: "/research/adaptive-planning-spaced-revisit",
    type: "article",
    siteName: "goPondr",
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
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/research-adaptive-1.webp", "/images/research-adaptive-2.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Research", href: "/research" },
              { label: "Adaptive Planning" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Why adaptive planning and spaced revisit matter
          </h1>
          <p className="mt-6 text-[21px] leading-[32px] text-slate font-display max-w-2xl">
            Learning something once is not enough. Understanding grows when
            ideas are revisited at the right time, in the right way.
          </p>
        </div>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
          WHY SPACED REVISIT MATTERS
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two paths through a field: top path is straight with wilting plants behind the walker, bottom path loops back with plants staying green" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="fieldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="70%" stopColor="#F8F4ED" />
                <stop offset="100%" stopColor="#EFE6D8" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect width="600" height="280" fill="url(#fieldGrad)" />

            {/* Horizontal divider between top and bottom */}
            <line x1="30" y1="140" x2="570" y2="140" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />

            {/* === TOP: Without Revisit === */}
            {/* Ground */}
            <path d="M30 115 L570 115" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />
            <path d="M30 115 Q100 117 200 115 Q350 113 570 115 L570 128 L30 128Z" fill="#A4582E" opacity="0.06" />

            {/* Straight path */}
            <path d="M50 105 L530 105" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
            <path d="M50 108 L530 108" fill="none" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.1" />

            {/* 5 plants with decreasing opacity */}
            {/* Plant 1 — nearly gone (opacity 0.1) */}
            <line x1="100" y1="103" x2="97" y2="88" stroke="#52616D" strokeWidth="1.2" strokeLinecap="round" opacity="0.1" />
            <circle cx="96" cy="86" r="3.5" fill="#52616D" opacity="0.06" />
            <path d="M97 93 q-4 -2 -5 1" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.08" />

            {/* Plant 2 — fading (opacity 0.2) */}
            <line x1="175" y1="103" x2="172" y2="82" stroke="#52616D" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
            <circle cx="171" cy="79" r="4" fill="#52616D" opacity="0.1" />
            <path d="M172 88 q-5 -3 -7 1" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <path d="M173 93 q4 -2 6 1" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.1" />

            {/* Plant 3 — wilting (opacity 0.35) */}
            <line x1="255" y1="103" x2="250" y2="78" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <circle cx="249" cy="75" r="5" fill="#4B7A5B" opacity="0.15" />
            <path d="M250 85 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            <path d="M251 90 q4 -3 7 0" fill="none" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

            {/* Plant 4 — somewhat ok (opacity 0.5) */}
            <line x1="335" y1="103" x2="335" y2="76" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
            <circle cx="335" cy="72" r="5.5" fill="#4B7A5B" opacity="0.2" />
            <path d="M335 85 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <path d="M335 78 q5 -4 8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

            {/* Plant 5 — just planted (opacity 0.7) */}
            <line x1="415" y1="103" x2="415" y2="72" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <circle cx="415" cy="68" r="6" fill="#4B7A5B" opacity="0.25" />
            <path d="M415 85 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M415 78 q6 -5 9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

            {/* Fading label */}
            <text x="138" y="75" fontFamily="var(--font-body)" fontSize="7" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">fading...</text>
            <text x="215" y="72" fontFamily="var(--font-body)" fontSize="7" fontWeight="600" fill="#52616D" opacity="0.18" textAnchor="middle">fading...</text>

            {/* Walker figure — looking back with concern */}
            <circle cx="490" cy="85" r="7" fill="#A4582E" />
            <line x1="490" y1="92" x2="490" y2="112" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            {/* One arm forward, one back (looking back) */}
            <line x1="490" y1="100" x2="480" y2="108" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="490" y1="100" x2="500" y2="106" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="490" y1="112" x2="485" y2="125" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="490" y1="112" x2="496" y2="125" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            {/* Concern: head turned back */}
            <text x="490" y="77" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#52616D" opacity="0.3" textAnchor="middle">?</text>

            {/* Forward arrow */}
            <path d="M530 105 l10 0 l-4 -3 m4 3 l-4 3" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

            {/* === BOTTOM: With Spaced Revisit === */}
            {/* Ground */}
            <path d="M30 225 L570 225" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />
            <path d="M30 225 Q200 227 400 225 Q500 223 570 225 L570 240 L30 240Z" fill="#A4582E" opacity="0.06" />

            {/* Looping path */}
            <path d="M50 215 Q100 215 140 210 Q165 205 180 210 Q195 218 185 225 Q175 230 165 225 Q160 218 175 210 Q200 200 240 210 Q265 215 280 210 Q300 205 310 210 Q325 218 315 225 Q305 230 295 225 Q288 218 305 210 Q330 200 370 210 Q400 215 420 210 Q440 205 450 210 Q465 218 455 225 Q445 230 435 225 Q428 218 445 210 Q470 200 510 210 L550 215" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />

            {/* All plants green and growing taller */}
            {/* Plant 1 — short but strong */}
            <line x1="110" y1="213" x2="110" y2="188" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
            <circle cx="110" cy="184" r="5.5" fill="#4B7A5B" opacity="0.25" />
            <path d="M110 198 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M110 192 q5 -4 8 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

            {/* Plant 2 — medium, stronger */}
            <line x1="220" y1="213" x2="220" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <circle cx="220" cy="177" r="6.5" fill="#4B7A5B" opacity="0.28" />
            <path d="M220 198 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M220 190 q6 -5 9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
            <path d="M220 203 q5 -3 7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

            {/* Plant 3 — tall */}
            <line x1="340" y1="213" x2="340" y2="175" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
            <circle cx="340" cy="170" r="7.5" fill="#4B7A5B" opacity="0.3" />
            <path d="M340 195 q-6 -5 -10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <path d="M340 185 q6 -5 10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <path d="M340 200 q-5 -3 -7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

            {/* Plant 4 — tallest */}
            <line x1="470" y1="213" x2="470" y2="170" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
            <circle cx="470" cy="165" r="8" fill="#4B7A5B" opacity="0.32" />
            <path d="M470 192 q-7 -6 -10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <path d="M470 183 q7 -6 10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <path d="M470 198 q5 -3 8 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

            {/* Return labels at loop points */}
            <text x="175" y="237" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Return</text>
            <text x="305" y="237" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Return</text>
            <text x="445" y="237" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Return</text>

            {/* Small return arrows at loops */}
            <path d="M168 228 Q175 223 182 228" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
            <path d="M182 228 l-2 -2 l-1 3Z" fill="#235A5F" opacity="0.3" />
            <path d="M298 228 Q305 223 312 228" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
            <path d="M312 228 l-2 -2 l-1 3Z" fill="#235A5F" opacity="0.3" />
            <path d="M438 228 Q445 223 452 228" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
            <path d="M452 228 l-2 -2 l-1 3Z" fill="#235A5F" opacity="0.3" />

            {/* Walker figure — confident */}
            <circle cx="540" cy="195" r="7" fill="#4B7A5B" />
            <line x1="540" y1="202" x2="540" y2="222" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="540" y1="210" x2="532" y2="218" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="540" y1="210" x2="548" y2="216" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="540" y1="222" x2="535" y2="238" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="540" y1="222" x2="546" y2="238" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

            {/* Soil texture */}
            {[50,100,150,200,250].map((x, i) => (
              <circle key={`ld${i}`} cx={x} cy={122 + (i % 3) * 3} r="0.6" fill="#A4582E" opacity="0.07" />
            ))}
            {[80,160,250,350,450,530].map((x, i) => (
              <circle key={`rd${i}`} cx={x} cy={232 + (i % 3) * 3} r="0.6" fill="#A4582E" opacity="0.07" />
            ))}

            {/* Labels */}
            <text x="150" y="30" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.55" textAnchor="middle">Without revisit</text>
            <text x="150" y="45" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Straight through, never looking back</text>

            <text x="150" y="158" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.7" textAnchor="middle">With spaced revisit</text>
            <text x="150" y="173" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Looping back keeps knowledge alive</text>

            {/* Outcome labels */}
            <text x="540" y="125" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Knowledge fades</text>
            <text x="540" y="252" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Knowledge grows</text>
          </svg>
        </div>
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center">
          Without revisit, even good learning fades. The adaptive planner spaces review at the right intervals so understanding becomes permanent.
        </p>
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
          goPondr's{" "}
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
            Try goPondr free for 15 days.
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
