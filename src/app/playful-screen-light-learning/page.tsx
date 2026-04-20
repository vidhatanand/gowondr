import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { FlowComparison } from "@/components/ui/FlowDiagram";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";
import { MessageCircle, Box, BookOpen, Pencil, Move, Theater, Eye, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Playful, screen-light learning for kids at home",
  description:
    "Discover a calmer alternative to noisy apps and worksheet-heavy routines with playful, screen-light learning that happens mostly in the real world.",
  alternates: { canonical: "/playful-screen-light-learning" },
  openGraph: {
    title:
      "Playful, screen-light learning for kids at home | goPondr",
    description:
      "Discover a calmer alternative to noisy apps and worksheet-heavy routines with playful, screen-light learning that happens mostly in the real world.",
    url: "/playful-screen-light-learning",
    type: "article",
    siteName: "goPondr",
  },
};

export default function PlayfulScreenLightLearningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            {
              name: "Playful, Screen-Light Learning",
              url: "/playful-screen-light-learning",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title: "Playful, screen-light learning for kids at home",
            description:
              "A calmer alternative to noisy apps and worksheet-heavy routines — playful, screen-light learning that happens mostly in the real world.",
            path: "/playful-screen-light-learning",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Screen-light learning approach",
          type: "EducationalOccupationalProgram",
          description:
            "Playful, screen-light learning methodology for children at home",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/page-child-drawing.webp", "/images/page-hands-seeds.webp", "/images/page-child-window.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Playful, Screen-Light Learning" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Less screen noise. More real understanding.
          </h1>
          <p className="mt-5 text-[19px] md:text-[21px] leading-[30px] md:leading-[32px] text-slate font-display max-w-2xl">
            Children learn through conversation, objects, stories, drawing,
            movement, building, and play. goPondr keeps the screen
            where it belongs: as a planning tool for the parent, not a teaching
            tool for the child. Learning happens in the real world, between you
            and your child.
          </p>
        </div>
      </SectionShell>

      {/* What we believe */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Screens should not replace the relationship
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Most educational apps put the child alone with a screen. That can
            feel convenient, but it removes the most powerful part of learning:
            the human connection. When a parent and child explore an idea
            together, the conversation itself becomes the lesson. No app can
            replicate the back-and-forth of a curious child and a present
            parent.
          </p>
        </div>
      </SectionShell>

      {/* Why it matters */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Fast attention is not deep learning
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Flashy animations and instant rewards keep children engaged, but
            engagement is not the same as understanding. Deep learning requires
            time to think, space to wonder, and permission to be wrong. It
            requires a pace that screens rarely offer. This is supported by{" "}
            <InternalLink href="/research/playful-screen-light-learning">
              research on playful learning
            </InternalLink>
            .
          </p>
        </div>
      </SectionShell>

      {/* What playful means */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What playful actually means
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Playful does not mean unstructured or random. It means learning
            happens through activities that feel natural and enjoyable to a
            child: building a tower and counting the blocks, drawing a map of
            their bedroom, acting out a story, or sorting leaves by size. The
            learning is real and intentional. The experience is light and joyful.
          </p>
        </div>
      </SectionShell>

      {/* Eight modalities */}
      <SectionShell bg="paper-alt" id="modalities">
        <div className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Eight ways children learn with you
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            The parent reads the{" "}
            <InternalLink href="/how-it-works">daily session</InternalLink> plan
            on their phone or laptop. Then the screen goes away. The child
            learns through real-world activities across these modalities:
          </p>
          <div className="mt-8">
            <FeatureGrid
              columns={4}
              features={[
                {
                  icon: <MessageCircle className="h-5 w-5" />,
                  title: "Conversation",
                  description: "Talking, asking, wondering aloud together.",
                },
                {
                  icon: <Box className="h-5 w-5" />,
                  title: "Objects",
                  description: "Sorting, counting, and building with real things.",
                },
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  title: "Stories",
                  description: "Listening, retelling, and imagining together.",
                },
                {
                  icon: <Pencil className="h-5 w-5" />,
                  title: "Drawing",
                  description: "Sketching ideas, maps, and observations.",
                },
                {
                  icon: <Move className="h-5 w-5" />,
                  title: "Movement",
                  description: "Walking, acting, clapping, and measuring with the body.",
                },
                {
                  icon: <Theater className="h-5 w-5" />,
                  title: "Pretend play",
                  description: "Acting out scenes and exploring roles.",
                },
                {
                  icon: <Eye className="h-5 w-5" />,
                  title: "Observation",
                  description: "Noticing patterns, changes, and details in the world.",
                },
                {
                  icon: <Hammer className="h-5 w-5" />,
                  title: "Making",
                  description: "Building, crafting, and constructing with simple materials.",
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>

      {/* Screen-heavy vs screen-light path */}
      <SectionShell bg="linen" id="comparison">
        <div>
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Two paths, two outcomes
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-2xl">
            The difference between screen-heavy and screen-light learning is not
            just about time spent on a device. It is about what stays with the
            child afterward.
          </p>
          <div className="mt-8">
            <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
              TWO PATHS COMPARED
            </h3>
            <FlowComparison
              title="SCREEN-HEAVY VS SCREEN-LIGHT"
              caption="Screen-light learning keeps the child in the real world — talking, touching, moving — while the parent stays meaningfully involved."
              left={{
                label: "Screen-Heavy Path",
                variant: "warning",
                steps: [
                  { label: "App-based task", description: "Child taps and swipes through content" },
                  { label: "Task completed", description: "Correct answer registered, badge earned" },
                  { label: "Idea not owned", description: "Child cannot explain or transfer the concept" },
                ],
                outcome: { label: "Fades quickly", description: "No lasting understanding, no real-life transfer" },
              }}
              right={{
                label: "Screen-Light Path",
                variant: "success",
                steps: [
                  { label: "Real-world prompt", description: "Guide suggests an activity with real materials" },
                  { label: "Multi-modal engagement", description: "Child talks, touches, moves, draws, observes" },
                  { label: "Parent conversation", description: "Coaching language deepens the experience" },
                ],
                outcome: { label: "Understanding that lasts", description: "Transfers to new contexts, retained over time" },
              }}
            />
            <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center max-w-xl mx-auto">
              Screen-heavy learning fades quickly; screen-light learning builds durable understanding grounded in real-world experience.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Parent reassurance */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            You do not need fancy materials
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            No special kits. No expensive manipulatives. No printer required.
            Most activities use things already in your home: paper, pencils,
            coins, food, toys, nature, and your own voice. The simplicity is
            intentional. When materials are simple, the thinking stays central.
          </p>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            This is learning designed{" "}
            <InternalLink href="/for-parents">for parents</InternalLink> who
            want something calmer, more connected, and more real across the full{" "}
            <InternalLink href="/subjects">8-subject curriculum</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Learning that lives in the real world
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            The best learning happens when children can touch, move, talk, draw,
            and wonder. goPondr is built on this belief. The screen
            is just the planning layer. The learning itself belongs to you and
            your child, in your home, at your pace.
          </p>
        </div>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt" narrow={false}>
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Why playful, screen-light learning works</h3>
            <p className="text-[14px] text-slate mb-3">Evidence for playful, guided, multi-modal learning that uses conversation, movement, and real materials.</p>
            <InternalLink href="/research/playful-screen-light-learning">Read the research &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">What this means for parents</h3>
            <p className="text-[14px] text-slate mb-3">A calmer, more connected way to learn at home — with simple materials and real conversation.</p>
            <InternalLink href="/for-parents">Read for parents &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Try a calmer way to learn
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Start your 15-day free trial and see what screen-light learning
            feels like.
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
