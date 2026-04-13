import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

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
      <SectionShell bg="paper">
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
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          WHY SPACED REVISIT MATTERS
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two paths through a field: left path is straight with wilting plants behind the walker, right path loops back with plants staying green">
            <defs>
              <linearGradient id="fieldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="70%" stopColor="#F8F4ED" />
                <stop offset="100%" stopColor="#EFE6D8" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect width="600" height="280" fill="url(#fieldGrad)" />

            {/* Divider */}
            <line x1="300" y1="30" x2="300" y2="240" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />

            {/* Ground line */}
            <line x1="0" y1="210" x2="600" y2="210" stroke="#A4582E" strokeWidth="0.5" opacity="0.15" />

            {/* === LEFT: Without Revisit - Straight path, fading plants === */}
            {/* Straight path */}
            <path d="M40 190 L260 190" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
            <path d="M40 195 L260 195" fill="none" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.12" />

            {/* Plants along path - progressively wilting/fading from left to right */}
            {/* Plant 1 (far left, oldest - nearly gone) */}
            <line x1="65" y1="188" x2="62" y2="175" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.1" />
            <circle cx="62" cy="173" r="3" fill="#4B7A5B" opacity="0.06" />

            {/* Plant 2 (fading) */}
            <line x1="100" y1="188" x2="97" y2="170" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.15" />
            <path d="M97 170 q-4 -2 -6 1" fill="none" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
            <circle cx="96" cy="168" r="3.5" fill="#4B7A5B" opacity="0.08" />

            {/* Plant 3 (wilting) */}
            <line x1="140" y1="188" x2="136" y2="165" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
            <path d="M136 165 q-5 -3 -7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
            <path d="M137 170 q4 -2 6 1" fill="none" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />

            {/* Plant 4 (just planted, still ok) */}
            <line x1="185" y1="188" x2="185" y2="168" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M185 168 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            <path d="M185 173 q5 -3 7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

            {/* Walker figure on left path (at the end) */}
            <circle cx="230" cy="172" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="230" y1="178" x2="230" y2="194" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="230" y1="184" x2="224" y2="190" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="230" y1="184" x2="236" y2="190" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="230" y1="194" x2="225" y2="207" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="230" y1="194" x2="235" y2="207" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />

            {/* Arrow showing direction (forward only) */}
            <path d="M250 190 l8 0 l-3 -3 m3 3 l-3 3" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

            {/* Fading effect indicators (ghost of forgotten knowledge) */}
            <path d="M65 160 Q80 155 100 158" fill="none" stroke="#52616D" strokeWidth="0.5" opacity="0.08" strokeDasharray="2 3" />
            <text x="82" y="153" fontFamily="var(--font-body)" fontSize="7" fontWeight="600" fill="#52616D" opacity="0.15" textAnchor="middle">fading...</text>

            {/* === RIGHT: With Spaced Revisit - Looping path, green plants === */}
            {/* Looping path */}
            <path d="M340 190 Q380 190 410 175 Q440 158 460 170 Q480 182 470 195 Q455 208 435 200 Q420 192 440 180 Q465 165 490 175 Q510 185 520 190 L560 190" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

            {/* Plants along right path - all green and growing */}
            {/* Plant 1 (revisited - strong) */}
            <line x1="360" y1="188" x2="360" y2="160" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
            <circle cx="360" cy="155" r="6" fill="#4B7A5B" opacity="0.18" />
            <path d="M360 172 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <path d="M360 165 q5 -4 8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

            {/* Plant 2 (revisited - strong) */}
            <line x1="420" y1="188" x2="420" y2="155" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <circle cx="420" cy="150" r="7" fill="#4B7A5B" opacity="0.2" />
            <path d="M420 170 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <path d="M420 163 q6 -5 9 -1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <path d="M420 177 q5 -3 7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

            {/* Plant 3 (revisited - strong) */}
            <line x1="480" y1="188" x2="480" y2="157" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <circle cx="480" cy="152" r="7" fill="#4B7A5B" opacity="0.2" />
            <path d="M480 170 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <path d="M480 163 q6 -5 9 -1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

            {/* Plant 4 (most recent) */}
            <line x1="530" y1="188" x2="530" y2="165" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
            <circle cx="530" cy="160" r="6" fill="#4B7A5B" opacity="0.17" />
            <path d="M530 175 q-5 -4 -7 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

            {/* Revisit arrows showing the loops */}
            <path d="M380 178 Q395 168 410 178" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
            <path d="M440 175 Q455 162 470 175" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />

            {/* Walker figure on right path */}
            <circle cx="545" cy="172" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="545" y1="178" x2="545" y2="194" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="545" y1="184" x2="539" y2="190" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="545" y1="184" x2="551" y2="190" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="545" y1="194" x2="540" y2="207" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="545" y1="194" x2="550" y2="207" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Labels */}
            <text x="150" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.55" textAnchor="middle">Without revisit</text>
            <text x="150" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">Straight through, never looking back</text>

            <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.7" textAnchor="middle">With spaced revisit</text>
            <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Looping back keeps knowledge alive</text>

            {/* Outcome labels */}
            <text x="150" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Knowledge fades behind</text>
            <text x="450" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Knowledge stays growing</text>

            {/* Soil texture */}
            {[50,90,130,170,210,250].map((x, i) => (
              <circle key={`ld${i}`} cx={x} cy={220 + (i % 3) * 4} r="0.6" fill="#A4582E" opacity="0.08" />
            ))}
            {[350,390,430,470,510,550].map((x, i) => (
              <circle key={`rd${i}`} cx={x} cy={220 + (i % 3) * 4} r="0.6" fill="#A4582E" opacity="0.08" />
            ))}
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
