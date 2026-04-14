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
  title: "Why playful, screen-light learning works | Research",
  description:
    "Explore evidence for playful, guided, multi-modal learning that uses conversation, movement, and real materials instead of passive screen time.",
  alternates: { canonical: "/research/playful-screen-light-learning" },
  openGraph: {
    title:
      "Why playful, screen-light learning works | goPondr",
    description:
      "Explore evidence for playful, guided, multi-modal learning that uses conversation, movement, and real materials instead of passive screen time.",
    url: "/research/playful-screen-light-learning",
    type: "article",
    siteName: "goPondr",
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
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/research-playful-1.webp", "/images/research-playful-2.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Research", href: "/research" },
              { label: "Playful Screen-Light Learning" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Why playful, screen-light, multi-modal learning works
          </h1>
          <p className="mt-6 text-[21px] leading-[32px] text-slate font-display max-w-2xl">
            Young children learn deepest when they can talk, move, touch, and
            make — not just watch and tap.
          </p>
        </div>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          WHY MULTI-MODAL BEATS SINGLE-MODE
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two windows: left shows a child alone with a screen in cold blue light, right shows a parent and child together with books and objects in warm light" preserveAspectRatio="xMidYMid meet">
            <rect width="600" height="280" fill="#FFFDF9" />

            {/* === LEFT WINDOW: Screen-heavy === */}
            {/* Window frame with sill */}
            <rect x="25" y="35" width="250" height="185" rx="10" fill="#52616D" opacity="0.05" />
            <rect x="25" y="35" width="250" height="185" rx="10" fill="none" stroke="#52616D" strokeWidth="2" opacity="0.3" />
            {/* Window sill */}
            <rect x="20" y="218" width="260" height="6" rx="2" fill="#52616D" opacity="0.12" />
            {/* Top frame bar */}
            <rect x="25" y="35" width="250" height="12" rx="10" fill="#52616D" opacity="0.08" />

            {/* Dark/blue-grey interior */}
            <rect x="30" y="50" width="240" height="168" rx="6" fill="#1E2A34" opacity="0.06" />

            {/* Glowing screen rectangle */}
            <rect x="105" y="72" width="70" height="48" rx="4" fill="#4966A8" opacity="0.08" />
            <rect x="108" y="75" width="64" height="42" rx="3" fill="#4966A8" opacity="0.12" />
            <rect x="108" y="75" width="64" height="42" rx="3" fill="none" stroke="#4966A8" strokeWidth="1.5" opacity="0.3" />
            {/* Screen glow aura */}
            <rect x="95" y="62" width="90" height="68" rx="8" fill="#4966A8" opacity="0.03" />
            {/* Screen content lines */}
            <line x1="118" y1="85" x2="160" y2="85" stroke="#4966A8" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <line x1="118" y1="92" x2="152" y2="92" stroke="#4966A8" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <line x1="118" y1="99" x2="158" y2="99" stroke="#4966A8" strokeWidth="1" strokeLinecap="round" opacity="0.12" />

            {/* Blue light casting on child */}
            <path d="M108 117 L125 145 L155 145 L172 117Z" fill="#4966A8" opacity="0.04" />

            {/* Child figure alone — sitting */}
            <circle cx="140" cy="140" r="7" fill="#4B7A5B" />
            <line x1="140" y1="147" x2="140" y2="172" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
            {/* Arms forward toward screen */}
            <line x1="140" y1="155" x2="130" y2="162" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="140" y1="155" x2="150" y2="162" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            {/* Legs (sitting) */}
            <line x1="140" y1="172" x2="132" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="140" y1="172" x2="148" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

            {/* Floating tap/swipe labels */}
            <text x="80" y="160" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">tap</text>
            <text x="195" y="148" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">swipe</text>
            <text x="88" y="130" fontFamily="var(--font-body)" fontSize="7" fontWeight="600" fill="#52616D" opacity="0.15" textAnchor="middle">tap</text>

            {/* === RIGHT WINDOW: Screen-light === */}
            {/* Window frame with sill */}
            <rect x="325" y="35" width="250" height="185" rx="10" fill="#A4582E" opacity="0.04" />
            <rect x="325" y="35" width="250" height="185" rx="10" fill="none" stroke="#A4582E" strokeWidth="2" opacity="0.35" />
            {/* Window sill */}
            <rect x="320" y="218" width="260" height="6" rx="2" fill="#A4582E" opacity="0.12" />
            {/* Top frame bar */}
            <rect x="325" y="35" width="250" height="12" rx="10" fill="#A4582E" opacity="0.06" />

            {/* Warm golden interior */}
            <rect x="330" y="50" width="240" height="168" rx="6" fill="#A4582E" opacity="0.04" />

            {/* Warm window light in background */}
            <rect x="500" y="58" width="50" height="40" rx="4" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.2" />
            <line x1="525" y1="58" x2="525" y2="98" stroke="#A4582E" strokeWidth="0.5" opacity="0.12" />
            <line x1="500" y1="78" x2="550" y2="78" stroke="#A4582E" strokeWidth="0.5" opacity="0.12" />
            {/* Light rays from window */}
            <path d="M500 98 L480 130 L545 130 L550 98Z" fill="#A4582E" opacity="0.03" />
            {/* Plant on windowsill */}
            <rect x="515" y="95" width="10" height="8" rx="2" fill="#A4582E" opacity="0.15" />
            <line x1="520" y1="95" x2="520" y2="82" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
            <path d="M520 85 q-4 -3 -6 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
            <path d="M520 82 q4 -2 5 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

            {/* Table */}
            <rect x="360" y="168" width="160" height="4" rx="1" fill="#A4582E" opacity="0.2" />
            <line x1="375" y1="172" x2="375" y2="198" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
            <line x1="505" y1="172" x2="505" y2="198" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />

            {/* Objects on table */}
            {/* Leaf */}
            <path d="M375 162 q5 -9 12 -3 q-5 9 -12 3" fill="#4B7A5B" opacity="0.3" />
            <line x1="375" y1="162" x2="387" y2="159" stroke="#4B7A5B" strokeWidth="0.6" opacity="0.25" />

            {/* Blocks */}
            <rect x="400" y="157" width="10" height="11" rx="1.5" fill="#A4582E" opacity="0.2" />
            <rect x="408" y="160" width="10" height="8" rx="1.5" fill="#235A5F" opacity="0.18" />
            <rect x="404" y="152" width="10" height="8" rx="1.5" fill="#4B7A5B" opacity="0.15" />

            {/* Book */}
            <path d="M430 160 L430 168 L448 168 L448 160 Q440 157 430 160Z" fill="#235A5F" opacity="0.15" />
            <line x1="439" y1="158" x2="439" y2="168" stroke="#235A5F" strokeWidth="0.5" opacity="0.2" />

            {/* Pencils */}
            <line x1="460" y1="168" x2="465" y2="152" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <line x1="463" y1="168" x2="470" y2="155" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

            {/* Paper/drawing */}
            <rect x="480" y="159" width="14" height="9" rx="0.5" fill="#FFFDF9" opacity="0.4" stroke="#52616D" strokeWidth="0.6" />
            <path d="M483 165 Q487 162 490 165" fill="none" stroke="#4B7A5B" strokeWidth="0.6" opacity="0.25" />

            {/* Parent figure */}
            <circle cx="470" cy="110" r="8" fill="#A4582E" />
            <line x1="470" y1="118" x2="470" y2="148" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" />
            <line x1="470" y1="128" x2="458" y2="140" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="470" y1="128" x2="482" y2="138" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="470" y1="148" x2="464" y2="166" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="470" y1="148" x2="476" y2="166" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            {/* Parent smile */}
            <path d="M466 113 Q470 116 474 113" fill="none" stroke="#FFFDF9" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

            {/* Child figure — facing parent */}
            <circle cx="410" cy="118" r="7" fill="#4B7A5B" />
            <line x1="410" y1="125" x2="410" y2="150" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="410" y1="134" x2="400" y2="143" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="410" y1="134" x2="420" y2="140" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="410" y1="150" x2="404" y2="166" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="410" y1="150" x2="416" y2="166" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

            {/* Conversation arcs between them */}
            <path d="M420 120 Q435 114 458 114" fill="none" stroke="#235A5F" strokeWidth="1" strokeLinecap="round" opacity="0.25" strokeDasharray="2 2" />
            <path d="M422 126 Q438 122 456 120" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" strokeDasharray="2 2" />
            <path d="M425 131 Q440 128 455 127" fill="none" stroke="#235A5F" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" strokeDasharray="2 2" />

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
          surface for the child. goPondr uses technology to
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
          Every activity in goPondr is designed to be done
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
