import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { FlowComparison } from "@/components/ui/FlowDiagram";

export const metadata: Metadata = {
  title:
    "Why digital literacy should be taught with judgment | Research",
  description:
    "Explore why children need digital understanding, safety, and agency — not just device skills — and how screen-light digital literacy builds real judgment.",
  alternates: {
    canonical: "/research/digital-literacy-with-judgment",
  },
  openGraph: {
    title:
      "Why digital literacy should be taught with judgment | goWondr",
    description:
      "Explore why children need digital understanding, safety, and agency — not just device skills — and how screen-light digital literacy builds real judgment.",
    url: "/research/digital-literacy-with-judgment",
    type: "article",
    siteName: "goWondr",
  },
};

export default function DigitalLiteracyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Digital Literacy with Judgment",
              url: "/research/digital-literacy-with-judgment",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title:
              "Why digital literacy should be taught with judgment, not just devices",
            description:
              "Research on why children need digital understanding, safety, and agency — not just device skills.",
            path: "/research/digital-literacy-with-judgment",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Digital literacy with judgment",
          type: "ScholarlyArticle",
          description:
            "Research on teaching digital literacy with understanding, safety, and agency",
        }}
        relatedEntities={[
          { name: "Digital Citizenship", type: "Thing" },
          { name: "Computational Thinking", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Digital Literacy with Judgment" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Why digital literacy should be taught with judgment, not just
          devices
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display">
          Knowing how to use a device is not the same as understanding the
          digital world. Children need both — and judgment comes first.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <FlowComparison
          title="DEVICE FLUENCY VS DIGITAL JUDGMENT"
          caption="A child who can swipe is not digitally literate. Real digital literacy means understanding how technology works, staying safe, thinking logically, and creating with purpose."
          left={{
            label: "Device Fluency Alone",
            variant: "warning",
            steps: [
              { label: "Can swipe and tap", description: "Basic motor skill, not understanding" },
              { label: "Can open apps", description: "Follows prompts without judgment" },
            ],
            outcome: { label: "Vulnerable", description: "To misinformation, overuse, and passive consumption" },
          }}
          right={{
            label: "Digital Literacy with Judgment",
            variant: "success",
            steps: [
              { label: "Understanding technology", description: "How it works, how information moves" },
              { label: "Safety & boundaries", description: "What to share, what to question" },
              { label: "Computational thinking", description: "Logic, patterns, sequences — mostly unplugged" },
              { label: "Purposeful creation", description: "Making with tools, guided and limited" },
            ],
            outcome: { label: "Capable digital citizen", description: "Not dependent, not afraid — thoughtful and responsible" },
          }}
        />
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Many children today can swipe, tap, and navigate apps before they
          can tie their shoes. But device fluency is not digital literacy.
          Real digital literacy means understanding how technology works,
          why it is designed the way it is, how to stay safe online, how
          to evaluate information, and how to use digital tools as a
          creator — not just a consumer. These skills require judgment,
          and judgment can be developed long before a child needs their
          own device.
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
              Digital literacy frameworks
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              International frameworks for digital literacy — including
              those from UNESCO, the EU, and national curricula — define
              digital competence far more broadly than device skills.
              They include information literacy, online safety, ethical
              behaviour, computational thinking, and creative digital
              expression. These frameworks make clear that digital
              literacy is a multi-dimensional competency, not a set of
              app-based skills.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Age-appropriate technology research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on age-appropriate technology use suggests that
              young children benefit most from guided, conversation-rich
              interactions with technology — not from independent screen
              time. When adults mediate the experience, ask questions,
              and connect what happens on screen to the real world,
              children develop more meaningful digital understanding.
              Unsupervised device use, by contrast, tends to produce
              passive consumption habits rather than genuine competence.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Unplugged computational thinking
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on computational thinking shows that the core
              concepts — sequencing, pattern recognition, decomposition,
              abstraction, and algorithmic thinking — can be taught
              effectively without a computer. Unplugged activities like
              sorting, sequencing stories, giving precise instructions,
              and debugging everyday problems develop the same cognitive
              skills that underpin programming, data analysis, and
              systems thinking. The screen is optional; the thinking is
              not.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Device fluency ≠ digital literacy */}
      <SectionShell bg="linen" narrow={true} id="device-fluency">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Device fluency is not digital literacy
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          A child who can navigate a tablet is not necessarily digitally
          literate. Device fluency is about operating a tool. Digital
          literacy is about understanding the environment that tool
          creates — including how information spreads, how algorithms
          shape what you see, how data is collected, and how to
          distinguish reliable sources from unreliable ones. These are
          thinking skills, not tapping skills. And they are best developed
          through conversation and guided exploration, not through more
          screen time.
        </p>
      </SectionShell>

      {/* Why judgment matters more than exposure */}
      <SectionShell bg="paper" narrow={true} id="judgment-over-exposure">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why judgment matters more than exposure
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Some approaches to digital literacy prioritize early and frequent
          device exposure. The assumption is that children will learn
          digital skills by using digital tools. But exposure without
          judgment produces consumers, not critical thinkers. Children need
          to understand why a notification is designed to grab their
          attention, why a game is designed to keep them playing, and why
          some information online is trustworthy and some is not. These
          lessons are best taught through discussion and reflection — not
          through more app time.
        </p>
      </SectionShell>

      {/* What this means for families */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for families
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          You do not need to hand your child a device to teach them
          digital literacy. You can build computational thinking through
          everyday activities — sorting, sequencing, giving instructions,
          debugging. You can discuss online safety during a family
          conversation. You can explore how technology works by taking
          things apart, asking questions, and wondering together. The
          Learning Guide's{" "}
          <InternalLink href="/subjects/digital-literacy-computational-thinking">
            digital literacy curriculum
          </InternalLink>{" "}
          is built on this screen-light, judgment-first approach. Explore
          the broader{" "}
          <InternalLink href="/future-ready-learning">
            future-ready learning
          </InternalLink>{" "}
          philosophy.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          The goal is not to keep children away from technology. It is to
          make sure that when they encounter it, they have the judgment to
          use it wisely, safely, and creatively. That judgment starts with
          thinking, not tapping.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/subjects/digital-literacy-computational-thinking">
            digital literacy curriculum
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/future-ready-learning">
            future-ready learning
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/research/breadth-future-ready-ai-world">
            breadth research
          </InternalLink>
        </p>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Breadth in an AI world</h3>
            <p className="text-[14px] text-slate mb-3">Why broad foundations across subjects matter more in a future shaped by AI and rapid change.</p>
            <InternalLink href="/research/breadth-future-ready-ai-world">Read more &rarr;</InternalLink>
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
            See judgment-first digital literacy in action
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
