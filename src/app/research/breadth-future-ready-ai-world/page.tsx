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
import { BreadthBridgesSVG } from "@/components/svg/BreadthBridgesSVG";

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
        <BreadthBridgesSVG />
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
