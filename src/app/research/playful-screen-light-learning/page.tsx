import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

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
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          WHY MULTI-MODAL BEATS SINGLE-MODE
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two windows: left shows a child alone with a screen in cold blue light, right shows a parent and child together with books and objects in warm light">
            <rect width="600" height="280" fill="#FFFDF9" />

            {/* === LEFT WINDOW: Screen-heavy === */}
            {/* Window frame */}
            <rect x="30" y="40" width="240" height="180" rx="8" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.3" />
            {/* Window panes (cross) */}
            <line x1="150" y1="40" x2="150" y2="220" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />
            <line x1="30" y1="130" x2="270" y2="130" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />

            {/* Cool blue tint inside */}
            <rect x="31" y="41" width="238" height="178" rx="7" fill="#52616D" opacity="0.06" />

            {/* Screen rectangle (glowing) */}
            <rect x="115" y="95" width="50" height="35" rx="3" fill="#52616D" opacity="0.12" />
            <rect x="115" y="95" width="50" height="35" rx="3" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.25" />
            {/* Screen glow */}
            <rect x="110" y="90" width="60" height="45" rx="5" fill="#52616D" opacity="0.04" />

            {/* Child figure alone, looking at screen */}
            <circle cx="140" cy="152" r="7" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="140" y1="159" x2="140" y2="180" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="140" y1="166" x2="132" y2="174" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="140" y1="166" x2="148" y2="174" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="140" y1="180" x2="134" y2="195" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="140" y1="180" x2="146" y2="195" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />

            {/* Empty space around child - isolation */}

            {/* === RIGHT WINDOW: Screen-light === */}
            {/* Window frame */}
            <rect x="330" y="40" width="240" height="180" rx="8" fill="none" stroke="#A4582E" strokeWidth="1.5" opacity="0.35" />
            {/* Window panes */}
            <line x1="450" y1="40" x2="450" y2="220" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />
            <line x1="330" y1="130" x2="570" y2="130" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />

            {/* Warm tint inside */}
            <rect x="331" y="41" width="238" height="178" rx="7" fill="#A4582E" opacity="0.04" />

            {/* Table */}
            <line x1="370" y1="175" x2="530" y2="175" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <line x1="385" y1="175" x2="385" y2="200" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <line x1="515" y1="175" x2="515" y2="200" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

            {/* Objects on table */}
            {/* Book */}
            <path d="M390 168 L390 175 L405 175 L405 168 Q397 165 390 168Z" fill="none" stroke="#235A5F" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
            <line x1="397" y1="166" x2="397" y2="175" stroke="#235A5F" strokeWidth="0.5" opacity="0.2" />

            {/* Leaf */}
            <path d="M425 170 q4 -8 10 -3 q-4 8 -10 3" fill="#4B7A5B" opacity="0.25" />
            <line x1="425" y1="170" x2="435" y2="167" stroke="#4B7A5B" strokeWidth="0.5" opacity="0.2" />

            {/* Blocks */}
            <rect x="455" y="165" width="8" height="10" rx="1" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.3" />
            <rect x="462" y="168" width="8" height="7" rx="1" fill="none" stroke="#235A5F" strokeWidth="1" opacity="0.25" />

            {/* Small drawing/paper */}
            <rect x="485" y="167" width="12" height="8" rx="0.5" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.2" />
            <path d="M487 172 Q491 169 495 172" fill="none" stroke="#4B7A5B" strokeWidth="0.5" opacity="0.25" />

            {/* Parent figure (taller, right) */}
            <circle cx="475" cy="138" r="7" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="475" y1="145" x2="475" y2="170" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="475" y1="152" x2="466" y2="162" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="475" y1="152" x2="484" y2="160" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="475" y1="170" x2="469" y2="185" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="475" y1="170" x2="481" y2="185" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Child figure (smaller, left, facing parent) */}
            <circle cx="420" cy="147" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="420" y1="153" x2="420" y2="172" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="420" y1="159" x2="413" y2="166" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="420" y1="159" x2="428" y2="165" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="420" y1="172" x2="415" y2="185" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="420" y1="172" x2="425" y2="185" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Conversation lines between them */}
            <path d="M430 148 Q445 143 465 143" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" strokeDasharray="2 2" />
            <path d="M432 153 Q445 150 463 149" fill="none" stroke="#235A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" strokeDasharray="2 2" />

            {/* Window sill light (warm) */}
            <path d="M340 55 Q370 48 400 55" fill="none" stroke="#A4582E" strokeWidth="0.5" opacity="0.15" />
            <path d="M500 55 Q520 48 540 55" fill="none" stroke="#A4582E" strokeWidth="0.5" opacity="0.15" />

            {/* Labels */}
            <text x="150" y="245" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.55" textAnchor="middle">Screen-heavy</text>
            <text x="150" y="260" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">Single mode, alone, surface only</text>

            <text x="450" y="245" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.7" textAnchor="middle">Screen-light</text>
            <text x="450" y="260" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Multi-modal, together, durable</text>
          </svg>
        </div>
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center">
          When children use multiple senses — talking, touching, moving, drawing — they process ideas more deeply than tapping a screen.
        </p>
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
