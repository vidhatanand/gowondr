import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Users, Brain, Layers, MonitorOff, RefreshCw, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About goPondr | Parent-led learning philosophy",
  description:
    "Learn about the mission, ethos, and design philosophy behind goPondr and why it was built as a calmer, parent-led way for families to learn deeply together.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About goPondr | Parent-led learning philosophy",
    description:
      "Learn about the mission, ethos, and design philosophy behind goPondr and why it was built as a calmer, parent-led way for families to learn deeply together.",
    url: "/about",
    type: "article",
    siteName: "goPondr",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "goPondr",
          type: "Organization",
          description:
            "Parent-led learning company building a calmer way for families to learn deeply together",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/page-hands-seeds.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            We are building a calmer way for families to learn deeply together.
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
            goPondr exists because we believe every parent can help
            their child learn, and that the relationship between parent and child
            is the most powerful learning tool there is.
          </p>
        </div>
      </SectionShell>

      {/* Mission */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Our mission
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            To give every parent a clear, calm, and connected way to support
            their child's learning at home. Not to replace schools or teachers,
            but to reclaim the role that parents have always played in their
            children's education: the role of the first and most enduring guide.
          </p>
        </div>
      </SectionShell>

      {/* What We Believe */}
      <SectionShell bg="linen" id="beliefs">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight max-w-2xl">
          What we believe
        </h2>
        <div className="mt-8">
          <FeatureGrid
            columns={3}
            features={[
              {
                icon: <Users className="h-5 w-5" />,
                title: "Parents are enough",
                description:
                  "You do not need a teaching degree. You need attention, warmth, and a clear plan. The guide provides the plan. You provide everything else.",
              },
              {
                icon: <Brain className="h-5 w-5" />,
                title: "Understanding beats performance",
                description:
                  "We care about whether a child genuinely understands, not whether they can score well on a test. Real understanding is durable, transferable, and deeply personal.",
              },
              {
                icon: <Layers className="h-5 w-5" />,
                title: "Breadth builds strength",
                description:
                  "Children learn best when they explore broadly. Our 8-subject curriculum ensures that learning is rich, connected, and never narrow.",
              },
              {
                icon: <MonitorOff className="h-5 w-5" />,
                title: "Less screen, more relationship",
                description:
                  "The screen is a planning tool for the parent, not a teaching tool for the child. Learning lives in the conversation, the activity, and the space between you.",
              },
              {
                icon: <RefreshCw className="h-5 w-5" />,
                title: "Review is not repetition",
                description:
                  "Spaced revisit is how knowledge becomes permanent. We build review into the rhythm so understanding deepens over time, not fades.",
              },
              {
                icon: <Heart className="h-5 w-5" />,
                title: "Calm is a design choice",
                description:
                  "No badges, no streaks, no urgency. Learning should feel like a warm conversation, not a race. We design for calm because calm is where deep thinking happens.",
              },
            ]}
          />
        </div>
        <p className="mt-8 text-[17px] leading-[28px] text-slate max-w-2xl">
          These beliefs are informed by{" "}
          <InternalLink href="/research">research</InternalLink> in learning
          science, developmental psychology, and curriculum design.
        </p>
      </SectionShell>

      {/* The feeling we want */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            The feeling we are building for
          </h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                For the child
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                Learning feels safe, interesting, and connected to real life.
                There is no pressure to perform, no fear of being wrong. Just
                the quiet confidence that comes from genuinely understanding
                something new.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                For the parent
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                You feel capable, supported, and clear about what to do next.
                You do not have to plan, research, or improvise. You show up,
                open the guide, and spend meaningful time with your child. Read
                more about what this means{" "}
                <InternalLink href="/for-parents">for parents</InternalLink>.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                For the home
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                Learning becomes a natural part of the day, not a battle or a
                chore. It is woven into breakfast, walks, bath time, and
                bedtime stories. The home becomes a place where curiosity is
                welcomed and understanding is celebrated.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Philosophy diagram */}
      <SectionShell bg="paper-alt" id="philosophy">
        <div>
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            The virtuous cycle
          </h2>
          <div className="mt-8">
            <FlowDiagram
              title="THE VIRTUOUS CYCLE"
              caption="When the product carries the cognitive load, the parent can stay emotionally present — and the child grows in ways that feel natural."
              direction="vertical"
              nodes={[
                { id: "product", label: "Product thinks hard", description: "Structure, sequence, coverage", variant: "teal" },
                { id: "parent", label: "Parent stays soft", description: "Warmth, encouragement, connection" },
                { id: "child", label: "Child grows deeply", description: "Understanding, confidence, curiosity", variant: "success" },
                { id: "home", label: "Home: a place of curiosity", description: "Learning feels like life" },
              ]}
              connections={[
                { from: "product", to: "parent", label: "enables" },
                { from: "parent", to: "child", label: "nurtures" },
                { from: "child", to: "home", label: "creates" },
                { from: "child", to: "product", label: "growth feeds back", dashed: true },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* Final close */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Built with care, for families who care
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Every detail of goPondr is designed with one question in
            mind: does this help a parent and child learn together more deeply?
            If it does, it stays. If it does not, it goes. That is the standard
            we hold ourselves to, because the families who trust us deserve
            nothing less. Explore the full{" "}
            <InternalLink href="/subjects">8-subject curriculum</InternalLink>{" "}
            to see this philosophy in action.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Join families learning deeply together
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Start your 15-day free trial and experience a calmer way to learn at
            home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
            <Button variant="secondary" size="lg" href="/how-it-works">
              See how it works
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
