import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { ParentChildSVG } from "@/components/svg/ParentChildSVG";

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
        <RandomHeroBg images={["/images/research-parent-child-1.webp", "/images/research-parent-child-2.webp"]} />
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
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
          FROM RESPONSIVE INTERACTION TO LEARNING
        </h3>
        <ParentChildSVG />
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
              <p className="text-[15px] text-ink leading-relaxed">{claim}</p>
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
              <p className="text-[15px] text-ink leading-relaxed">{claim}</p>
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
