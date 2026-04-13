import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { ThinkingRoutines } from "@/components/ui/ThinkingRoutines";

export const metadata: Metadata = {
  title: "Why breadth matters in an AI world | Research",
  description:
    "Explore why broad foundations across subjects, not just math and reading, matter more in a future shaped by AI, automation, and rapid change.",
  alternates: {
    canonical: "/research/breadth-future-ready-ai-world",
  },
  openGraph: {
    title:
      "Why breadth matters in an AI world | goPondr",
    description:
      "Explore why broad foundations across subjects, not just math and reading, matter more in a future shaped by AI, automation, and rapid change.",
    url: "/research/breadth-future-ready-ai-world",
    type: "article",
    siteName: "goPondr",
  },
};

export default function BreadthFutureReadyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Breadth in an AI World",
              url: "/research/breadth-future-ready-ai-world",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Why breadth matters in an AI world",
            description:
              "Research on why broad foundations across subjects matter more in a future shaped by AI, automation, and rapid change.",
            path: "/research/breadth-future-ready-ai-world",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Educational breadth for AI readiness",
          type: "ScholarlyArticle",
          description:
            "Research on why breadth across subjects matters for future readiness",
        }}
        relatedEntities={[
          { name: "21st Century Skills", type: "Thing" },
          { name: "Artificial Intelligence in Education", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Breadth in an AI World" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          Why breadth matters in an AI world
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display max-w-2xl">
          The future will not reward narrow specialization alone. It will
          reward people who can connect ideas across domains.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          NARROW VS BROAD FOUNDATIONS
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two bridges: a narrow plank that cannot span the river versus a wide sturdy bridge with eight colored sections spanning safely to the far shore">
            <defs>
              <linearGradient id="bridgeSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="60%" stopColor="#F8F4ED" />
              </linearGradient>
              <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#235A5F" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#235A5F" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <rect width="600" height="280" fill="url(#bridgeSky)" />

            {/* Divider */}
            <line x1="300" y1="30" x2="300" y2="250" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />

            {/* === LEFT: Narrow Bridge === */}
            {/* River */}
            <rect x="60" y="165" width="180" height="45" rx="4" fill="url(#riverGrad)" />
            {/* Water ripples */}
            <path d="M80 180 Q100 176 120 180 Q140 184 160 180" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.12" />
            <path d="M90 192 Q110 188 130 192 Q150 196 170 192 Q190 188 210 192" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.1" />

            {/* Near bank (left) */}
            <rect x="20" y="155" width="50" height="20" rx="3" fill="#A4582E" opacity="0.12" />
            <path d="M20 155 Q45 152 70 155" fill="none" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />

            {/* Far bank (right) - with gap */}
            <rect x="230" y="155" width="50" height="20" rx="3" fill="#A4582E" opacity="0.12" />
            <path d="M230 155 Q255 152 280 155" fill="none" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />

            {/* Narrow plank bridge - doesn't reach */}
            <rect x="65" y="158" width="100" height="4" rx="1" fill="#A4582E" opacity="0.25" />
            {/* Gap visible */}
            <path d="M165 160 L230 160" fill="none" stroke="#52616D" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 4" />

            {/* Bridge support (single, weak) */}
            <line x1="115" y1="162" x2="115" y2="175" stroke="#A4582E" strokeWidth="1" opacity="0.15" />

            {/* Figure hesitating on narrow bridge */}
            <circle cx="145" cy="142" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="145" y1="148" x2="145" y2="163" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="145" y1="154" x2="138" y2="161" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="145" y1="154" x2="152" y2="159" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            {/* Arms raised slightly (uncertainty) */}
            <line x1="145" y1="163" x2="140" y2="172" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="145" y1="163" x2="150" y2="172" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />

            {/* Question mark above figure */}
            <text x="145" y="132" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.25" textAnchor="middle">?</text>

            {/* Narrow bridge labels */}
            <text x="115" y="145" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">Math + Reading</text>

            {/* === RIGHT: Broad Bridge === */}
            {/* River */}
            <rect x="360" y="165" width="180" height="45" rx="4" fill="url(#riverGrad)" />
            {/* Water ripples */}
            <path d="M380 180 Q400 176 420 180 Q440 184 460 180" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.12" />
            <path d="M390 192 Q410 188 430 192 Q450 196 470 192 Q490 188 510 192" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.1" />

            {/* Near bank */}
            <rect x="320" y="155" width="50" height="20" rx="3" fill="#A4582E" opacity="0.12" />
            <path d="M320 155 Q345 152 370 155" fill="none" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />

            {/* Far bank */}
            <rect x="530" y="155" width="50" height="20" rx="3" fill="#A4582E" opacity="0.12" />
            <path d="M530 155 Q555 152 580 155" fill="none" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />

            {/* Wide sturdy bridge with 8 colored sections */}
            {/* Bridge deck */}
            <rect x="365" y="152" width="170" height="12" rx="2" fill="#EFE6D8" opacity="0.4" />
            {/* 8 subject color sections */}
            <rect x="365" y="152" width="21" height="12" rx="1" fill="#235A5F" opacity="0.2" />
            <rect x="386" y="152" width="21" height="12" fill="#A4582E" opacity="0.2" />
            <rect x="407" y="152" width="22" height="12" fill="#4B7A5B" opacity="0.2" />
            <rect x="429" y="152" width="21" height="12" fill="#235A5F" opacity="0.15" />
            <rect x="450" y="152" width="21" height="12" fill="#52616D" opacity="0.15" />
            <rect x="471" y="152" width="22" height="12" fill="#A4582E" opacity="0.15" />
            <rect x="493" y="152" width="21" height="12" fill="#4B7A5B" opacity="0.15" />
            <rect x="514" y="152" width="21" height="12" rx="1" fill="#235A5F" opacity="0.18" />

            {/* Bridge supports (sturdy) */}
            <line x1="400" y1="164" x2="400" y2="180" stroke="#A4582E" strokeWidth="1.5" opacity="0.2" />
            <line x1="450" y1="164" x2="450" y2="180" stroke="#A4582E" strokeWidth="1.5" opacity="0.2" />
            <line x1="500" y1="164" x2="500" y2="180" stroke="#A4582E" strokeWidth="1.5" opacity="0.2" />

            {/* Bridge railing */}
            <line x1="365" y1="150" x2="535" y2="150" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />
            {[380,400,420,440,460,480,500,520].map((x, i) => (
              <line key={`rl${i}`} x1={x} y1="150" x2={x} y2="153" stroke="#A4582E" strokeWidth="0.5" opacity="0.12" />
            ))}

            {/* Figure walking confidently across */}
            <circle cx="470" cy="136" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="470" y1="142" x2="470" y2="157" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="470" y1="148" x2="463" y2="155" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="470" y1="148" x2="477" y2="155" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            {/* Walking legs */}
            <line x1="470" y1="157" x2="465" y2="166" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="470" y1="157" x2="476" y2="166" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Labels */}
            <text x="150" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.55" textAnchor="middle">Narrow approach</text>
            <text x="150" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">Only two subjects, can&apos;t bridge the gap</text>

            <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.7" textAnchor="middle">Broad foundations</text>
            <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Eight subjects span the full river</text>

            {/* River label */}
            <text x="150" y="198" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#235A5F" opacity="0.3" textAnchor="middle">Future challenges</text>
            <text x="450" y="198" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#235A5F" opacity="0.3" textAnchor="middle">Future challenges</text>

            {/* Far shore labels */}
            <text x="255" y="150" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.3" textAnchor="middle">Readiness</text>
            <text x="555" y="148" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#4B7A5B" opacity="0.45" textAnchor="middle">Readiness</text>

            {/* Outcome labels */}
            <text x="150" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Gaps in critical areas</text>
            <text x="450" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Future-ready learner</text>
          </svg>
        </div>
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center">
          In an AI world, children who can only compute or decode are not enough. They need breadth — world understanding, creative expression, digital judgment, and inquiry habits.
        </p>
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Many educational programmes focus almost exclusively on literacy
          and numeracy. These are essential — but they are not enough. In
          a world increasingly shaped by artificial intelligence,
          automation, and rapid change, children who have broad foundations
          across science, arts, social studies, physical development, and
          digital literacy will be better equipped to adapt, create, and
          contribute. Breadth is not a luxury. It is preparation.
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
              OECD future of education frameworks
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              The OECD's Education 2030 framework emphasizes that future
              learners will need competencies that span disciplinary
              boundaries — including creativity, critical thinking,
              collaboration, and the ability to navigate complexity and
              ambiguity. These competencies are not developed within a
              single subject. They emerge from broad, connected learning
              experiences across multiple domains.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Breadth vs. depth research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on expertise development suggests that early breadth
              — exposure to multiple domains before specialization —
              produces more adaptable, creative thinkers. Children who
              experience a wide range of subjects and thinking styles
              develop stronger transfer skills: the ability to apply
              knowledge from one domain to solve problems in another. This
              is increasingly valuable in a world where the most important
              problems span multiple disciplines.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Transfer learning
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Transfer — the ability to apply learning from one context to
              another — is one of the most sought-after and difficult-to-achieve
              outcomes in education. Research consistently shows that
              transfer is more likely when learners have been exposed to
              concepts across multiple domains, because they develop more
              abstract, flexible mental models. Narrow training in a single
              subject tends to produce knowledge that is brittle and
              context-dependent.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Why fundamentals alone are not enough */}
      <SectionShell bg="linen" narrow={true} id="beyond-fundamentals">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why fundamentals alone are not enough
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Literacy and numeracy are foundational — but they are tools, not
          destinations. A child who can read but has never explored science,
          art, or how societies work has powerful tools with nowhere to
          apply them. In a future where AI can perform routine cognitive
          tasks, the distinctly human advantages — creativity, ethical
          reasoning, aesthetic judgment, physical skill, social
          understanding — become more important, not less. These develop
          through breadth, not through more drilling of the basics.
        </p>
      </SectionShell>

      {/* Why breadth is not dilution */}
      <SectionShell bg="paper" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why breadth is not dilution
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          A common objection to broad curricula is that they spread
          learning too thin. But breadth done well is not the same as
          breadth done poorly. When each subject is organized around key
          concepts, taught with developmental sequencing, and revisited
          over time, breadth creates depth — not instead of depth, but
          through depth across multiple domains. goPondr's{" "}
          <InternalLink href="/subjects">
            8-subject curriculum
          </InternalLink>{" "}
          is designed with this principle at its core.
        </p>
      </SectionShell>

      {/* What this means for families */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for families
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          You do not need to choose between breadth and depth. A
          well-designed curriculum provides both. By learning across
          subjects — including{" "}
          <InternalLink href="/subjects/digital-literacy-computational-thinking">
            digital literacy
          </InternalLink>
          , arts, science, and social studies — your child builds the kind
          of flexible, connected understanding that prepares them for a
          future none of us can fully predict. Learn more about the{" "}
          <InternalLink href="/future-ready-learning">
            future-ready learning
          </InternalLink>{" "}
          approach.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          The world your child will grow up in will be different from the
          one you grew up in. Breadth is what gives them the flexibility
          to thrive in it — whatever form it takes.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/future-ready-learning">
            future-ready learning
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/subjects">
            8-subject curriculum
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/subjects/digital-literacy-computational-thinking">
            digital literacy
          </InternalLink>
        </p>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Digital literacy with judgment</h3>
            <p className="text-[14px] text-slate mb-3">Why children need digital understanding, safety, and agency -- not just device skills.</p>
            <InternalLink href="/research/digital-literacy-with-judgment">Read more &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Concept-first curriculum coverage</h3>
            <p className="text-[14px] text-slate mb-3">Why concept-based structure creates stronger understanding than disconnected activities.</p>
            <InternalLink href="/research/concept-first-coverage">Read more &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* Thinking routines for breadth */}
      <SectionShell bg="linen">
        <div className="max-w-[700px] mx-auto">
          <ThinkingRoutines variant="compact" context="breadth" />
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See broad learning in action
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
