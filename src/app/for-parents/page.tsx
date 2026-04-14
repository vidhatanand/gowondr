import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  Eye, Heart, HandHeart, Compass, Clock, Sparkles,
  Search, CalendarDays, ShieldCheck, Leaf, BarChart3, MessageCircle,
  BookOpen, RefreshCw, GitBranch, ClipboardCheck, TrendingUp,
} from "lucide-react";
import { ForParentsSVG } from "@/components/svg/ForParentsSVG";

export const metadata: Metadata = {
  title: "How to teach your child at home without being a teacher",
  description:
    "Parents do not need a teaching degree to make a real difference. Get a calmer, parent-led way to help your child learn at home with the right next step, prompts, and support.",
  alternates: { canonical: "/for-parents" },
  openGraph: {
    title:
      "How to teach your child at home without being a teacher | goPondr",
    description:
      "Parents do not need a teaching degree to make a real difference. Get a calmer, parent-led way to help your child learn at home with the right next step, prompts, and support.",
    url: "/for-parents",
    type: "article",
    siteName: "goPondr",
  },
};

export default function ForParentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "For Parents", url: "/for-parents" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Parent-led learning support",
          type: "Service",
          description:
            "How goPondr supports parents who are not trained teachers",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/page-child-window.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "For Parents" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            You do not need to be a teacher to help your child learn at home
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
            You already bring what matters most: attention, warmth, trust,
            context, continuity, and love. No textbook can replace that. goPondr simply gives you a clear{" "}
            <InternalLink href="/how-it-works">daily learning guide</InternalLink>{" "}
            so you always know what to do next.
          </p>
        </div>
      </SectionShell>

      {/* What parents bring — color-coded cards */}
      <SectionShell bg="linen">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          What you already bring
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          No textbook can replace these. They are your superpower.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {([
            { icon: Eye, title: "Attention", body: "You notice what excites, frustrates, and readies your child. No teacher of thirty can match that.", softClass: "bg-teal-soft", inkClass: "text-teal" },
            { icon: Heart, title: "Warmth", body: "Learning sticks when it feels safe. Your patience creates the conditions for real understanding.", softClass: "bg-terracotta-soft", inkClass: "text-terracotta" },
            { icon: HandHeart, title: "Trust", body: "Your child trusts you uniquely. That trust makes it safe to struggle, question, and try again.", softClass: "bg-strong-soft", inkClass: "text-strong-ink" },
            { icon: Compass, title: "Context", body: "You know their routines, interests, fears, and strengths. That context makes every moment richer.", softClass: "bg-info-soft", inkClass: "text-info-ink" },
            { icon: Clock, title: "Continuity", body: "You are there every day. Learning compounds when the same caring person follows the thread.", softClass: "bg-reading-soft", inkClass: "text-reading-ink" },
            { icon: Sparkles, title: "Love", body: "The deepest advantage. Children learn best from people who love them. No curriculum replaces that.", softClass: "bg-personal-soft", inkClass: "text-personal-ink" },
          ]).map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                variant="subject"
                subjectSoftClass={item.softClass}
                subjectInkClass={item.inkClass}
                hover
                className="flex flex-col"
              >
                <Icon className="h-7 w-7 mb-3" />
                <h3 className="font-display text-[24px] leading-[30px] text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate leading-relaxed flex-1">
                  {item.body}
                </p>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* Reframe */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            You are not replacing school
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            This is not about becoming a substitute teacher. It is about using
            the time you already spend with your child more intentionally. Even
            twenty minutes a day, done well, can create a foundation that lasts.
            The guide handles the planning, sequencing, and review. You bring
            the relationship.
          </p>
        </div>
      </SectionShell>

      {/* What the system carries — icon card style */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          What the system carries, so you do not have to
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          You focus on the relationship. The system handles the rest.
        </p>
        <div className="mt-8 max-w-[800px] mx-auto space-y-4">
          {([
            { icon: <BookOpen className="h-6 w-6" />, title: "Curriculum structure", desc: "Full 8-subject curriculum, sequenced by concept and stage — so you never have to plan from scratch.", color: "#235A5F", bg: "#EAF3F2" },
            { icon: <GitBranch className="h-6 w-6" />, title: "Concept dependencies", desc: "The system knows what should come before what, so your child builds on solid ground.", color: "#A4582E", bg: "#F7ECE4" },
            { icon: <CalendarDays className="h-6 w-6" />, title: "Daily activity suggestions", desc: "Each session is ready to use — with materials, prompts, and coaching language.", color: "#4B7A5B", bg: "#EAF3EC" },
            { icon: <RefreshCw className="h-6 w-6" />, title: "Spaced review timing", desc: "The planner remembers what needs revisiting, so important ideas don't fade.", color: "#214D9C", bg: "#EAF0FB" },
            { icon: <TrendingUp className="h-6 w-6" />, title: "Progress tracking", desc: "See where understanding is strong, where it's still building, and what comes next.", color: "#6A4E73", bg: "#EDE8E9" },
          ]).map((item) => (
            <div key={item.title} className="flex gap-4 md:gap-6 items-center group">
              <div
                className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-2xl flex items-center justify-center shadow-xs group-hover:shadow-sm transition-all duration-200 group-hover:scale-105 shrink-0"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-body font-semibold text-[18px] md:text-[20px] text-ink leading-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate leading-relaxed mt-1 max-w-[500px]">
                  {item.desc}
                </p>
                <div className="w-10 h-1 rounded-full mt-3 opacity-40" style={{ backgroundColor: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Six things parents need — subject-breadth style */}
      <SectionShell bg="paper">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          Six things every parent needs
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          goPondr is designed around exactly these needs.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {([
            { icon: Search, title: "What to explore", desc: "A clear starting point based on your child's real readiness — not a generic age label.", softClass: "bg-teal-soft", inkClass: "text-teal" },
            { icon: CalendarDays, title: "A daily plan", desc: "Exactly what to do today, with prompts, materials, and activities ready to go.", softClass: "bg-terracotta-soft", inkClass: "text-terracotta" },
            { icon: ShieldCheck, title: "Confidence in coverage", desc: "Know the plan covers what matters across 8 subjects, connected to a real curriculum.", softClass: "bg-strong-soft", inkClass: "text-strong-ink" },
            { icon: Leaf, title: "Natural activities", desc: "Learning that feels like play, talk, and everyday life — not homework or screen drills.", softClass: "bg-science-soft", inkClass: "text-science-ink" },
            { icon: BarChart3, title: "Visible progress", desc: "See growth without tests, grades, or comparison. Know where things are strong and where they're building.", softClass: "bg-info-soft", inkClass: "text-info-ink" },
            { icon: MessageCircle, title: "Words to say", desc: "Parent coaching language so you always know how to start the conversation and respond to what happens.", softClass: "bg-arts-soft", inkClass: "text-arts-ink" },
          ]).map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                variant="subject"
                subjectSoftClass={item.softClass}
                subjectInkClass={item.inkClass}
                hover
                className="flex flex-col"
              >
                <Icon className="h-7 w-7 mb-3" />
                <h3 className="font-display text-[24px] leading-[30px] text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate leading-relaxed flex-1">
                  {item.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {/* How the partnership works — creative SVG */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          How goPondr supports you
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          goPondr takes the hard parts off your plate so you can focus on the relationship.
        </p>

        <div className="mt-10 max-w-[700px] mx-auto">
<ForParentsSVG />
          <p className="text-center mt-4 text-[13px] text-slate max-w-[440px] mx-auto">
            goPondr builds the ground. You walk the path together. Your child grows along the way.
          </p>
        </div>
      </SectionShell>

      {/* Common fears */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Common fears, honestly answered
          </h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                &ldquo;What if I teach it wrong?&rdquo;
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                The guide gives you the right concepts, the right prompts, and
                the right sequence. You do not need to be the expert. You just
                need to follow the session and let the conversation unfold.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                &ldquo;What if I do not have time?&rdquo;
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                Sessions are designed for 15 to 30 minutes. Many families fit
                them into breakfast, bath time, or a walk. Consistency matters
                more than length.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[20px] text-ink mb-2">
                &ldquo;What if my child resists?&rdquo;
              </h3>
              <p className="text-[17px] leading-[28px] text-slate">
                Children resist worksheets and screens. They rarely resist a
                parent who sits down, asks a good question, and genuinely
                listens. The guide helps you start conversations, not
                assignments.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Emotional close */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            You are already your child's best teacher
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Not because you know everything, but because you care the most. goPondr does not replace you. It supports you. It gives you
            the structure so you can focus on the relationship. And that
            relationship is where real learning lives.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Start learning together
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try it free for 15 days. See what a calm, connected learning rhythm
            feels like for your family.
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
