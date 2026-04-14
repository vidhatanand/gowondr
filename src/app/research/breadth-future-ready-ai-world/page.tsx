import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { ThinkingRoutines } from "@/components/ui/ThinkingRoutines";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";

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
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/research-breadth-1.webp", "/images/research-breadth-2.webp"]} />
        <div className="relative z-10">
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
        </div>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
          NARROW VS BROAD FOUNDATIONS
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two bridges: a narrow plank that cannot span the river versus a wide sturdy bridge with eight colored sections spanning safely to the far shore" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="bridgeSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFDF9" />
                <stop offset="60%" stopColor="#F8F4ED" />
              </linearGradient>
              <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#235A5F" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#235A5F" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <rect width="600" height="280" fill="url(#bridgeSky)" />

            {/* Divider */}
            <line x1="300" y1="30" x2="300" y2="250" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />

            {/* === LEFT: Narrow Bridge === */}
            {/* River / void */}
            <rect x="55" y="162" width="190" height="50" rx="6" fill="url(#riverGrad)" />
            {/* Water ripples */}
            <path d="M70 178 Q90 174 110 178 Q130 182 150 178 Q170 174 190 178 Q210 182 230 178" fill="none" stroke="#235A5F" strokeWidth="0.6" opacity="0.15" />
            <path d="M80 190 Q100 186 120 190 Q140 194 160 190 Q180 186 200 190 Q220 194 240 190" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.1" />
            <path d="M75 200 Q95 197 115 200 Q135 203 155 200 Q175 197 195 200 Q215 203 235 200" fill="none" stroke="#235A5F" strokeWidth="0.4" opacity="0.08" />

            {/* Near bank */}
            <path d="M15 155 Q35 150 55 155 L55 175 L15 175Z" fill="#A4582E" opacity="0.12" />
            <path d="M15 155 Q35 150 55 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

            {/* Far bank — with gap visible */}
            <path d="M245 155 Q265 150 285 155 L285 175 L245 175Z" fill="#A4582E" opacity="0.12" />
            <path d="M245 155 Q265 150 285 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

            {/* Narrow plank bridge — two thin planks that don't reach */}
            <rect x="50" y="155" width="110" height="4" rx="1" fill="#2A6E73" opacity="0.2" />
            <text x="105" y="153" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#2A6E73" opacity="0.5" textAnchor="middle">Math</text>
            <rect x="50" y="160" width="110" height="4" rx="1" fill="#6A4E73" opacity="0.2" />
            <text x="105" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#6A4E73" opacity="0.5" textAnchor="middle">Reading</text>

            {/* Gap — plank ends, doesn't reach far bank */}
            <path d="M160 158 L245 158" fill="none" stroke="#52616D" strokeWidth="0.6" opacity="0.15" strokeDasharray="3 4" />
            <path d="M160 162 L245 162" fill="none" stroke="#52616D" strokeWidth="0.6" opacity="0.12" strokeDasharray="3 4" />

            {/* Weak single support */}
            <line x1="105" y1="164" x2="105" y2="180" stroke="#A4582E" strokeWidth="1.2" opacity="0.15" />

            {/* Void label */}
            <text x="150" y="195" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Future challenges</text>

            {/* Hesitant figure at edge of plank */}
            <circle cx="148" cy="138" r="7" fill="#A4582E" />
            <line x1="148" y1="145" x2="148" y2="162" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            {/* Arms up in uncertainty */}
            <line x1="148" y1="152" x2="138" y2="146" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="152" x2="158" y2="146" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="162" x2="143" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="162" x2="153" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            {/* Question mark */}
            <text x="148" y="128" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.35" textAnchor="middle">?</text>

            {/* === RIGHT: Broad Bridge === */}
            {/* River */}
            <rect x="355" y="162" width="195" height="50" rx="6" fill="url(#riverGrad)" />
            {/* Water ripples */}
            <path d="M370 178 Q390 174 410 178 Q430 182 450 178 Q470 174 490 178 Q510 182 530 178" fill="none" stroke="#235A5F" strokeWidth="0.6" opacity="0.15" />
            <path d="M375 190 Q395 186 415 190 Q435 194 455 190 Q475 186 495 190 Q515 194 535 190" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.1" />
            <path d="M380 200 Q400 197 420 200 Q440 203 460 200 Q480 197 500 200 Q520 203 540 200" fill="none" stroke="#235A5F" strokeWidth="0.4" opacity="0.08" />

            {/* Near bank */}
            <path d="M315 155 Q335 150 355 155 L355 175 L315 175Z" fill="#A4582E" opacity="0.12" />
            <path d="M315 155 Q335 150 355 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

            {/* Far bank */}
            <path d="M550 155 Q570 150 590 155 L590 175 L550 175Z" fill="#A4582E" opacity="0.12" />
            <path d="M550 155 Q570 150 590 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

            {/* Wide bridge deck — 8 colored sections */}
            <rect x="350" y="150" width="205" height="16" rx="3" fill="#EFE6D8" opacity="0.3" />
            {/* 1. Reading */}
            <rect x="350" y="150" width="25" height="16" rx="3" fill="#6A4E73" opacity="0.25" />
            {/* 2. Math */}
            <rect x="375" y="150" width="25" height="16" fill="#2A6E73" opacity="0.25" />
            {/* 3. Science */}
            <rect x="400" y="150" width="26" height="16" fill="#4B744F" opacity="0.25" />
            {/* 4. World */}
            <rect x="426" y="150" width="25" height="16" fill="#886328" opacity="0.2" />
            {/* 5. Personal */}
            <rect x="451" y="150" width="26" height="16" fill="#94536C" opacity="0.2" />
            {/* 6. Arts */}
            <rect x="477" y="150" width="25" height="16" fill="#7A5AA6" opacity="0.2" />
            {/* 7. Digital */}
            <rect x="502" y="150" width="25" height="16" fill="#4966A8" opacity="0.2" />
            {/* 8. Inquiry */}
            <rect x="527" y="150" width="28" height="16" rx="3" fill="#9E563C" opacity="0.2" />

            {/* Subject labels on bridge */}
            <text x="362" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#6A4E73" opacity="0.6" textAnchor="middle">Reading</text>
            <text x="387" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#2A6E73" opacity="0.6" textAnchor="middle">Math</text>
            <text x="413" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B744F" opacity="0.6" textAnchor="middle">Science</text>
            <text x="438" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#886328" opacity="0.55" textAnchor="middle">World</text>
            <text x="464" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#94536C" opacity="0.55" textAnchor="middle">Personal</text>
            <text x="489" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#7A5AA6" opacity="0.55" textAnchor="middle">Arts</text>
            <text x="514" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4966A8" opacity="0.55" textAnchor="middle">Digital</text>
            <text x="541" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#9E563C" opacity="0.55" textAnchor="middle">Inquiry</text>

            {/* Bridge supports (sturdy) */}
            <line x1="390" y1="166" x2="390" y2="182" stroke="#A4582E" strokeWidth="2" opacity="0.2" />
            <line x1="450" y1="166" x2="450" y2="182" stroke="#A4582E" strokeWidth="2" opacity="0.2" />
            <line x1="510" y1="166" x2="510" y2="182" stroke="#A4582E" strokeWidth="2" opacity="0.2" />

            {/* Bridge railing */}
            <line x1="350" y1="148" x2="555" y2="148" stroke="#A4582E" strokeWidth="1" opacity="0.15" />
            {[365,385,405,425,445,465,485,505,525,545].map((x, i) => (
              <line key={`rl${i}`} x1={x} y1="148" x2={x} y2="151" stroke="#A4582E" strokeWidth="0.6" opacity="0.12" />
            ))}

            {/* Parent + child walking across confidently */}
            {/* Parent */}
            <circle cx="465" cy="128" r="8" fill="#A4582E" />
            <line x1="465" y1="136" x2="465" y2="155" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="465" y1="144" x2="455" y2="150" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            <line x1="465" y1="144" x2="478" y2="148" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
            {/* Child */}
            <circle cx="483" cy="134" r="6" fill="#4B7A5B" />
            <line x1="483" y1="140" x2="483" y2="155" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="483" y1="146" x2="476" y2="151" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="483" y1="146" x2="490" y2="151" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />

            {/* Future challenges label */}
            <text x="450" y="197" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Future challenges</text>

            {/* Far shore label */}
            <text x="570" y="148" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#4B7A5B" opacity="0.5" textAnchor="middle">Future-ready</text>

            {/* Labels */}
            <text x="150" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.8" textAnchor="middle">Narrow approach</text>
            <text x="150" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Only two subjects, can&apos;t bridge the gap</text>

            <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Breadth approach</text>
            <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Eight subjects span the full river</text>

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
