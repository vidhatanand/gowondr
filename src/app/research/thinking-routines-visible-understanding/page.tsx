import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { ThinkingRoutines } from "@/components/ui/ThinkingRoutines";

export const metadata: Metadata = {
  title:
    "Why thinking routines and visible understanding matter | Research",
  description:
    "Explore how thinking routines, representation, and concept mapping deepen children's understanding and make learning visible to parents.",
  alternates: {
    canonical: "/research/thinking-routines-visible-understanding",
  },
  openGraph: {
    title:
      "Why thinking routines and visible understanding matter | goPondr",
    description:
      "Explore how thinking routines, representation, and concept mapping deepen children's understanding and make learning visible to parents.",
    url: "/research/thinking-routines-visible-understanding",
    type: "article",
    siteName: "goPondr",
  },
};

export default function ThinkingRoutinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Thinking Routines",
              url: "/research/thinking-routines-visible-understanding",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title:
              "Why thinking routines and visible understanding matter",
            description:
              "Research on how thinking routines, representation, and concept mapping deepen children's understanding.",
            path: "/research/thinking-routines-visible-understanding",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Thinking routines in education",
          type: "ScholarlyArticle",
          description:
            "Research on how thinking routines and visible understanding deepen learning",
        }}
        relatedEntities={[
          { name: "Visible Thinking", type: "Thing" },
          { name: "Concept Mapping", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden">
        <RandomHeroBg images={["/images/research-thinking-1.jpg", "/images/research-thinking-2.jpg"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Research", href: "/research" },
              { label: "Thinking Routines" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Why thinking routines and visible understanding matter
          </h1>
          <p className="mt-6 text-[21px] leading-[32px] text-slate font-display max-w-2xl">
            Understanding is invisible until a child finds a way to show it.
            Thinking routines give them that way.
          </p>
        </div>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          HOW THINKING ROUTINES WORK
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 500 300" className="w-full h-auto" role="img" aria-label="A magnifying glass revealing colorful thinking inside a child's thought cloud, while a parent watches and sees the revealed patterns">
            <rect width="500" height="300" fill="#FFFDF9" />

            {/* === Child figure (left) === */}
            <circle cx="100" cy="155" r="8" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="100" y1="163" x2="100" y2="190" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="100" y1="172" x2="91" y2="181" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="100" y1="172" x2="109" y2="181" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="100" y1="190" x2="94" y2="208" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="100" y1="190" x2="106" y2="208" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Thought cloud above child (opaque/grey) */}
            <ellipse cx="135" cy="105" rx="45" ry="32" fill="#52616D" opacity="0.08" />
            <ellipse cx="130" cy="100" rx="38" ry="26" fill="#52616D" opacity="0.06" />
            {/* Cloud bumps */}
            <circle cx="105" cy="95" r="14" fill="#52616D" opacity="0.06" />
            <circle cx="155" cy="90" r="16" fill="#52616D" opacity="0.06" />
            <circle cx="130" cy="80" r="13" fill="#52616D" opacity="0.07" />
            {/* Thought bubble trail from head */}
            <circle cx="108" cy="140" r="3" fill="#52616D" opacity="0.1" />
            <circle cx="115" cy="128" r="4" fill="#52616D" opacity="0.08" />

            {/* Question mark inside cloud (opaque thinking) */}
            <text x="130" y="108" fontFamily="var(--font-body)" fontSize="22" fontWeight="700" fill="#52616D" opacity="0.12" textAnchor="middle">?</text>

            {/* === Magnifying glass (center) === */}
            {/* Glass circle */}
            <circle cx="250" cy="120" r="55" fill="none" stroke="#235A5F" strokeWidth="2.5" opacity="0.45" />
            <circle cx="250" cy="120" r="53" fill="#FFFDF9" opacity="0.5" />
            {/* Handle */}
            <line x1="290" y1="158" x2="330" y2="198" stroke="#235A5F" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            <line x1="328" y1="196" x2="335" y2="203" stroke="#A4582E" strokeWidth="4" strokeLinecap="round" opacity="0.3" />

            {/* Inside the magnifying glass: revealed colorful thinking patterns */}
            {/* Colored shapes/connections visible through the glass */}
            <circle cx="230" cy="100" r="8" fill="#235A5F" opacity="0.15" />
            <circle cx="260" cy="90" r="6" fill="#A4582E" opacity="0.15" />
            <circle cx="270" cy="115" r="7" fill="#4B7A5B" opacity="0.15" />
            <circle cx="235" cy="130" r="5" fill="#235A5F" opacity="0.12" />
            <circle cx="258" cy="140" r="6" fill="#A4582E" opacity="0.12" />

            {/* Connections between revealed thoughts */}
            <line x1="235" y1="103" x2="256" y2="92" stroke="#235A5F" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <line x1="262" y1="95" x2="268" y2="110" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <line x1="265" y1="118" x2="258" y2="135" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <line x1="238" y1="128" x2="253" y2="137" stroke="#235A5F" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <line x1="233" y1="106" x2="235" y2="126" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />

            {/* Small stars/sparkles showing revelation */}
            <path d="M215 85 l2 -4 l2 4 l-4 0Z" fill="#A4582E" opacity="0.2" />
            <path d="M282 95 l1.5 -3 l1.5 3 l-3 0Z" fill="#235A5F" opacity="0.18" />
            <path d="M245 145 l1.5 -3 l1.5 3 l-3 0Z" fill="#4B7A5B" opacity="0.18" />

            {/* Glass lens sheen */}
            <path d="M218 90 Q228 78 245 80" fill="none" stroke="#FFFDF9" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

            {/* === Parent figure (right) === */}
            <circle cx="400" cy="150" r="8" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="400" y1="158" x2="400" y2="188" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="400" y1="167" x2="391" y2="177" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="400" y1="167" x2="409" y2="177" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="400" y1="188" x2="394" y2="208" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="400" y1="188" x2="406" y2="208" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Parent's "seeing" lines - looking at the magnifying glass */}
            <path d="M392 152 Q360 140 310 125" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" strokeDasharray="3 3" />
            <path d="M392 155 Q360 148 310 140" fill="none" stroke="#235A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" strokeDasharray="3 3" />

            {/* Labels */}
            <text x="100" y="230" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#1E2A34" opacity="0.45" textAnchor="middle">Child</text>
            <text x="100" y="243" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">Thinking is hidden</text>

            <text x="250" y="200" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="#235A5F" opacity="0.6" textAnchor="middle">Thinking routine</text>
            <text x="250" y="214" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">makes thinking visible</text>

            <text x="400" y="230" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#1E2A34" opacity="0.45" textAnchor="middle">Parent</text>
            <text x="400" y="243" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.45" textAnchor="middle">Can now see and support</text>

            {/* Bottom process labels */}
            <text x="130" y="275" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">&quot;What do you notice?&quot;</text>
            <text x="250" y="275" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Draw, explain, connect</text>
            <text x="380" y="275" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.4" textAnchor="middle">Better evidence, better support</text>

            {/* Flow arrows at bottom */}
            <path d="M185 272 L210 272" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" markerEnd="none" />
            <path d="M210 272 l-3 -2 l0 4Z" fill="#52616D" opacity="0.25" />
            <path d="M305 272 L335 272" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
            <path d="M335 272 l-3 -2 l0 4Z" fill="#52616D" opacity="0.25" />
          </svg>
        </div>
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center">
          Thinking routines give children a structured way to show what they understand — and give parents a window into real learning.
        </p>
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          It is hard to know what your child really understands. They might
          say the right answer without understanding why. They might
          understand deeply but struggle to explain it. Thinking routines
          solve this by giving children simple, repeatable ways to show
          their thinking — through drawing, sorting, comparing, explaining,
          and connecting. When thinking becomes visible, parents can see
          what is working and what needs more time.
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
              Project Zero and Harvard visible thinking
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Harvard's Project Zero has spent decades developing and
              studying thinking routines — simple structures like
              See-Think-Wonder, Think-Pair-Share, and Connect-Extend-Challenge.
              Research from Project Zero shows that when these routines are
              used regularly, children develop stronger reasoning skills,
              richer vocabulary for discussing ideas, and greater
              metacognitive awareness. They learn not just content, but how
              to think about their own thinking.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Concept mapping research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on concept mapping shows that when children organize
              ideas visually — drawing connections between concepts,
              categorizing, and sequencing — they develop deeper
              understanding than when they simply memorize facts. Concept
              maps also reveal misconceptions early, allowing parents and
              teachers to address them before they become entrenched.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Representation research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on children's representations — drawings, diagrams,
              models, and stories — shows that the act of representing an
              idea in a new form deepens understanding. When a child draws
              what they learned, builds a model, or tells a story about a
              concept, they are processing the idea at a deeper level than
              when they simply listen or watch.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* The 10 thinking routines */}
      <SectionShell bg="linen" id="routines">
        <div className="max-w-[700px] mx-auto">
          <ThinkingRoutines variant="full" context="thinking-routines" />
        </div>
      </SectionShell>

      {/* How routines help children */}
      <SectionShell bg="paper" narrow={true} id="for-children">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          How routines help children
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Thinking routines give children a framework for engaging with new
          ideas. Instead of being asked a vague question like "What did you
          learn?", they are given a specific structure: "What do you see?
          What do you think? What do you wonder?" This reduces anxiety,
          builds confidence, and creates habits of mind that transfer across
          subjects. Over time, children internalize these routines and begin
          to use them independently.
        </p>
      </SectionShell>

      {/* How routines help parents */}
      <SectionShell bg="paper" narrow={true} id="for-parents">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          How routines help parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          For parents, thinking routines solve the assessment problem. You
          do not need a test to know if your child understands something.
          You need to see their thinking. When a child can compare two
          ideas, explain a connection, or represent a concept in their own
          way, you can see understanding forming in real time. This makes
          learning visible — and it makes the parent's role clearer and
          more rewarding.
        </p>
      </SectionShell>

      {/* What this means for the product */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for the product
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          goPondr embeds thinking routines directly into
          activities. Children are regularly asked to compare, connect,
          represent, and explain. These are not add-ons — they are core to
          how every concept is taught. The{" "}
          <InternalLink href="/subjects/arts-design-creative-expression">
            arts curriculum
          </InternalLink>{" "}
          makes particular use of representation, while thinking routines
          appear across all subjects. Learn more about{" "}
          <InternalLink href="/how-it-works">how it works</InternalLink>.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          Understanding is not something you can test with a quiz. It is
          something you can see — when a child draws, explains, connects,
          and wonders. Thinking routines make that possible, every day.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/how-it-works">how it works</InternalLink> /{" "}
          <InternalLink href="/subjects/arts-design-creative-expression">
            arts curriculum
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
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Playful, screen-light learning</h3>
            <p className="text-[14px] text-slate mb-3">Evidence for guided, multi-modal learning using conversation, movement, and real materials.</p>
            <InternalLink href="/research/playful-screen-light-learning">Read more &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See visible thinking in action
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
