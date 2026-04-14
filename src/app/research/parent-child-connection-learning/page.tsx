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
  title: "Why parent-child connection matters for learning | Research",
  description:
    "Learn why responsive parent-child interaction supports language, confidence, attention, and learning, and what that means for parent-led home learning.",
  alternates: { canonical: "/research/parent-child-connection-learning" },
  openGraph: {
    title:
      "Why parent-child connection matters for learning | goPondr",
    description:
      "Learn why responsive parent-child interaction supports language, confidence, attention, and learning, and what that means for parent-led home learning.",
    url: "/research/parent-child-connection-learning",
    type: "article",
    siteName: "goPondr",
  },
};

export default function ParentChildConnectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Parent-Child Connection",
              url: "/research/parent-child-connection-learning",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Why parent-child connection matters for learning",
            description:
              "Research on why responsive parent-child interaction supports language, confidence, attention, and learning.",
            path: "/research/parent-child-connection-learning",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Parent-child connection and learning",
          type: "ScholarlyArticle",
          description:
            "Research on why responsive parent-child interaction matters for learning",
        }}
        relatedEntities={[
          { name: "Serve and Return Interaction", type: "Thing" },
          { name: "Attachment Theory", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/research-parent-child-1.jpg", "/images/research-parent-child-2.jpg"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Research", href: "/research" },
              { label: "Parent-Child Connection" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Why parent-child connection matters for learning
          </h1>
          <p className="mt-6 text-[21px] leading-[32px] text-slate font-display max-w-2xl">
            The strongest learning tool in early childhood is still a caring
            adult.
          </p>
        </div>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          FROM RESPONSIVE INTERACTION TO LEARNING
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6 max-w-md mx-auto">
          <svg viewBox="0 0 400 520" className="w-full h-auto" role="img" aria-label="A seed growing into a tree, showing how responsive interaction grows into learning outcomes through language, safety, and attention">
            <defs>
              <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A4582E" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A4582E" stopOpacity="0.12" />
              </linearGradient>
              <linearGradient id="trunkGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#A4582E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#A4582E" stopOpacity="0.35" />
              </linearGradient>
              <radialGradient id="canopyGrad" cx="0.5" cy="0.6" r="0.5">
                <stop offset="0%" stopColor="#4B7A5B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4B7A5B" stopOpacity="0.08" />
              </radialGradient>
            </defs>

            {/* Background warmth */}
            <rect width="400" height="520" fill="#FFFDF9" />

            {/* Soil layer */}
            <path d="M0 420 Q50 415 100 418 Q200 412 300 416 Q350 414 400 420 L400 520 L0 520Z" fill="url(#soilGrad)" />
            {/* Soil texture dots */}
            {[30,70,120,165,210,260,305,340,375].map((x, i) => (
              <circle key={`s${i}`} cx={x} cy={440 + (i % 4) * 12} r="1" fill="#A4582E" opacity="0.12" />
            ))}
            {[50,95,140,185,230,275,320,365].map((x, i) => (
              <circle key={`s2${i}`} cx={x} cy={455 + (i % 3) * 10} r="0.7" fill="#A4582E" opacity="0.08" />
            ))}

            {/* Seed at the base */}
            <ellipse cx="200" cy="430" rx="12" ry="8" fill="#A4582E" opacity="0.35" />
            <ellipse cx="200" cy="430" rx="8" ry="5" fill="#A4582E" opacity="0.2" />

            {/* Roots spreading down */}
            <path d="M200 435 Q195 450 180 465 Q170 475 155 485" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
            <path d="M200 435 Q205 448 215 460 Q225 470 240 478" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
            <path d="M200 435 Q198 455 195 470 Q192 480 188 495" fill="none" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
            <path d="M200 435 Q202 452 208 468 Q212 478 218 490" fill="none" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />

            {/* Trunk growing up */}
            <path d="M200 420 Q198 380 200 340 Q202 300 200 260 Q198 230 200 200" fill="none" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
            {/* Trunk width variation */}
            <path d="M196 420 Q194 380 196 340 Q197 300 196 260" fill="none" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <path d="M204 420 Q206 380 204 340 Q203 300 204 260" fill="none" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

            {/* Three main branches from trunk */}
            {/* Branch 1: Language (left) */}
            <path d="M200 310 Q180 290 155 270 Q135 255 120 240 Q110 230 105 218" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
            <path d="M120 240 Q110 225 105 218" fill="none" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            {/* Sub-branches */}
            <path d="M155 270 Q140 260 130 252" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            <path d="M135 255 Q120 248 112 240" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

            {/* Branch 2: Safety (center-up) */}
            <path d="M200 280 Q200 250 200 220 Q200 190 200 165" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
            <path d="M200 220 Q200 195 200 165" fill="none" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            {/* Sub-branches */}
            <path d="M200 230 Q188 218 178 210" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <path d="M200 230 Q212 218 222 210" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

            {/* Branch 3: Attention (right) */}
            <path d="M200 310 Q220 290 245 270 Q265 255 280 240 Q290 230 295 218" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
            <path d="M280 240 Q290 225 295 218" fill="none" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            {/* Sub-branches */}
            <path d="M245 270 Q260 260 270 252" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            <path d="M265 255 Q278 248 288 240" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

            {/* Leaf clusters on branches */}
            {/* Language branch leaves */}
            <circle cx="105" cy="215" r="14" fill="#4B7A5B" opacity="0.15" />
            <circle cx="115" cy="225" r="10" fill="#4B7A5B" opacity="0.12" />
            <circle cx="128" cy="248" r="8" fill="#4B7A5B" opacity="0.1" />

            {/* Safety branch leaves (center) */}
            <circle cx="200" cy="158" r="16" fill="#4B7A5B" opacity="0.15" />
            <circle cx="180" cy="205" r="10" fill="#4B7A5B" opacity="0.1" />
            <circle cx="220" cy="205" r="10" fill="#4B7A5B" opacity="0.1" />

            {/* Attention branch leaves */}
            <circle cx="295" cy="215" r="14" fill="#4B7A5B" opacity="0.15" />
            <circle cx="285" cy="225" r="10" fill="#4B7A5B" opacity="0.12" />
            <circle cx="272" cy="248" r="8" fill="#4B7A5B" opacity="0.1" />

            {/* Full canopy arc */}
            <ellipse cx="200" cy="195" rx="120" ry="70" fill="url(#canopyGrad)" />

            {/* Small detail leaves scattered in canopy */}
            {[130,155,180,210,235,260].map((x, i) => (
              <path key={`lf${i}`} d={`M${x} ${170 + (i % 3) * 15} q4 -6 8 0 q-4 6 -8 0`} fill="#4B7A5B" opacity={0.15 + (i % 2) * 0.05} />
            ))}

            {/* Labels */}
            {/* Seed label */}
            <text x="200" y="460" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="#A4582E" opacity="0.7" textAnchor="middle">Responsive interaction</text>
            <text x="200" y="474" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.45" textAnchor="middle">Notice, respond, talk</text>

            {/* Branch labels along the branches */}
            {/* Language */}
            <text x="110" y="295" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#235A5F" opacity="0.6" textAnchor="middle" transform="rotate(-35, 110, 295)">Language</text>

            {/* Safety */}
            <text x="225" y="255" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#235A5F" opacity="0.6" textAnchor="start" transform="rotate(-90, 225, 255)">Safety</text>

            {/* Attention */}
            <text x="290" y="295" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#235A5F" opacity="0.6" textAnchor="middle" transform="rotate(35, 290, 295)">Attention</text>

            {/* Canopy / outcome label */}
            <text x="200" y="145" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#4B7A5B" opacity="0.7" textAnchor="middle">Stronger learning outcomes</text>
            <text x="200" y="159" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.45" textAnchor="middle">Willingness to try, ability to explain</text>

            {/* Soil label */}
            <text x="200" y="505" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.35" textAnchor="middle">Good soil: trust, warmth, presence</text>
          </svg>
        </div>
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center max-w-lg mx-auto">
          Serve-and-return interaction — noticing, responding, talking — builds the language, safety, and confidence that make learning possible.
        </p>
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          When you talk with your child, respond to their questions, follow
          their curiosity, and explain things in your own words, you are doing
          something no app or worksheet can replicate. Decades of research
          show that this kind of responsive interaction — noticing what your
          child is interested in and building on it — is one of the strongest
          predictors of language development, confidence, attention span, and
          long-term learning outcomes.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          This is not about being a perfect teacher. It is about being present,
          curious, and willing to learn alongside your child.
        </p>
      </SectionShell>

      {/* What the evidence says */}
      <SectionShell bg="paper" narrow={true} id="evidence">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What the evidence says
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Harvard Center on the Developing Child: serve and return
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              The Harvard Center on the Developing Child describes early
              learning as a series of serve-and-return interactions. A child
              reaches out with a babble, a gesture, or a question — and a
              caring adult responds. This back-and-forth builds neural
              connections, develops language, and strengthens the
              relationship that makes learning feel safe. When these
              interactions are frequent and responsive, children develop
              stronger cognitive and social-emotional foundations.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              OECD analysis of parental engagement
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              The OECD has found that what parents do at home matters more
              for learning outcomes than family income or parental education
              level. Reading together, talking about the world, and engaging
              in everyday learning activities are consistently associated
              with stronger outcomes in literacy, numeracy, and
              social-emotional development.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Meta-analyses on parental involvement
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Multiple meta-analyses have found a consistent, positive
              relationship between parental involvement in learning and
              children's academic achievement. The effect is strongest when
              involvement is responsive rather than directive — when parents
              follow their child's lead, ask open questions, and create space
              for the child to think, rather than simply drilling or
              correcting.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              The South India early learning study
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              A study conducted in South India found that a structured,
              parent-led programme of playful interaction significantly
              improved children's cognitive and language outcomes, even in
              resource-constrained settings. The key factor was not
              materials or technology — it was the quality of the
              parent-child interaction itself.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* What this means for parents */}
      <SectionShell bg="linen" narrow={true} id="for-parents">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          The evidence does not ask you to replicate school at home, become a
          subject-matter expert, or push your child harder. It asks you to do
          something simpler and more powerful:
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Card variant="default">
            <h3 className="font-display text-[20px] text-ink mb-2">
              Not this
            </h3>
            <ul className="space-y-2 text-[15px] leading-[24px] text-slate">
              <li>Replicate school at home</li>
              <li>Become a subject-matter expert</li>
              <li>Push harder when things are difficult</li>
              <li>Fill every moment with instruction</li>
            </ul>
          </Card>
          <Card variant="default">
            <h3 className="font-display text-[20px] text-ink mb-2">
              Instead, this
            </h3>
            <ul className="space-y-2 text-[15px] leading-[24px] text-slate">
              <li>Notice what your child is curious about</li>
              <li>Ask open questions and wait for answers</li>
              <li>Respond to what they say and do</li>
              <li>Explain things in your own words</li>
              <li>Connect new ideas to what they already know</li>
            </ul>
          </Card>
        </div>
      </SectionShell>

      {/* What this means for the product */}
      <SectionShell bg="paper" narrow={true} id="for-the-product">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for the product
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Because parent-child interaction is the engine of learning, goPondr is designed to support the parent, not replace them.
          Every activity is meant to be done together. The guide provides
          structure, sequencing, and prompts — but the parent brings the
          warmth, the context, and the responsiveness that no technology can
          replicate. Learn more about{" "}
          <InternalLink href="/how-it-works">how it works</InternalLink>.
        </p>
      </SectionShell>

      {/* What we do NOT claim */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What we do not claim
        </h2>
        <div className="mt-6 space-y-4">
          {/* NOT claims */}
          {[
            "That parent-led learning is superior to all other forms of education",
            "That professional teachers are unnecessary",
            "That every parent has the time or circumstances to do this without help",
          ].map((claim) => (
            <div key={claim} className="flex items-start gap-3 rounded-xl border border-refresh-ink/15 bg-refresh-soft p-4">
              <span className="text-refresh-ink text-[16px] font-bold shrink-0 mt-0.5">✕</span>
              <p className="text-[15px] text-ink/80 leading-relaxed">{claim}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {/* DO claims */}
          {[
            "When parents engage in responsive interaction, the evidence consistently shows positive effects on learning",
            "A well-designed tool can make that engagement easier, clearer, and more effective",
            "The relationship between parent and child is one of the most powerful forces in early learning",
          ].map((claim) => (
            <div key={claim} className="flex items-start gap-3 rounded-xl border border-strong-ink/15 bg-strong-soft p-4">
              <span className="text-strong-ink text-[16px] font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-[15px] text-ink/80 leading-relaxed">{claim}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          Connection is not a bonus. It is the foundation. Everything else
          in goPondr — the curriculum, the adaptive planner, the
          activities — exists to make the most of the time you already spend
          with your child.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/for-parents">for parents</InternalLink> /{" "}
          <InternalLink href="/how-it-works">how it works</InternalLink> /{" "}
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
            See connection-first learning in action
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
