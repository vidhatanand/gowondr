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

export const metadata: Metadata = {
  title: "How to teach your child at home without being a teacher",
  description:
    "Parents do not need a teaching degree to make a real difference. Get a calmer, parent-led way to help your child learn at home with the right next step, prompts, and support.",
  alternates: { canonical: "/for-parents" },
  openGraph: {
    title:
      "How to teach your child at home without being a teacher | goWondr",
    description:
      "Parents do not need a teaching degree to make a real difference. Get a calmer, parent-led way to help your child learn at home with the right next step, prompts, and support.",
    url: "/for-parents",
    type: "article",
    siteName: "goWondr",
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
            "How goWondr supports parents who are not trained teachers",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
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
          context, continuity, and love. No textbook can replace that. The
          Learning Guide simply gives you a clear{" "}
          <InternalLink href="/how-it-works">daily learning guide</InternalLink>{" "}
          so you always know what to do next.
        </p>
      </SectionShell>

      {/* What parents bring — color-coded cards */}
      <SectionShell bg="linen">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          What you already bring
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          No textbook can replace these. They are your superpower.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {([
            { icon: <Eye className="h-5 w-5" />, title: "Attention", body: "You notice what excites, frustrates, and readies your child. No teacher of thirty can match that.", color: "#235A5F", bg: "#EAF3F2" },
            { icon: <Heart className="h-5 w-5" />, title: "Warmth", body: "Learning sticks when it feels safe. Your patience creates the conditions for real understanding.", color: "#A4582E", bg: "#F7ECE4" },
            { icon: <HandHeart className="h-5 w-5" />, title: "Trust", body: "Your child trusts you uniquely. That trust makes it safe to struggle, question, and try again.", color: "#4B7A5B", bg: "#EAF3EC" },
            { icon: <Compass className="h-5 w-5" />, title: "Context", body: "You know their routines, interests, fears, and strengths. That context makes every moment richer.", color: "#214D9C", bg: "#EAF0FB" },
            { icon: <Clock className="h-5 w-5" />, title: "Continuity", body: "You are there every day. Learning compounds when the same caring person follows the thread.", color: "#6A4E73", bg: "#EDE8E9" },
            { icon: <Sparkles className="h-5 w-5" />, title: "Love", body: "The deepest advantage. Children learn best from people who love them. No curriculum replaces that.", color: "#94536C", bg: "#F4EAEA" },
          ]).map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 rounded-xl border border-sand/60 p-4 hover:shadow-xs transition-shadow"
              style={{ backgroundColor: item.bg }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-body font-semibold text-[15px] leading-tight" style={{ color: item.color }}>
                  {item.title}
                </p>
                <p className="text-[13px] text-slate/80 leading-relaxed mt-1">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
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
          goWondr is designed around exactly these needs.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {([
            { icon: <Search className="h-5 w-5" />, title: "What to explore", desc: "A clear starting point based on your child's real readiness — not a generic age label.", color: "text-teal", bg: "bg-teal-soft", border: "border-teal/20" },
            { icon: <CalendarDays className="h-5 w-5" />, title: "A daily plan", desc: "Exactly what to do today, with prompts, materials, and activities ready to go.", color: "text-terracotta", bg: "bg-terracotta-soft", border: "border-terracotta/20" },
            { icon: <ShieldCheck className="h-5 w-5" />, title: "Confidence in coverage", desc: "Know the plan covers what matters across 8 subjects, connected to a real curriculum.", color: "text-strong-ink", bg: "bg-strong-soft", border: "border-strong-ink/20" },
            { icon: <Leaf className="h-5 w-5" />, title: "Natural activities", desc: "Learning that feels like play, talk, and everyday life — not homework or screen drills.", color: "text-science-ink", bg: "bg-science-soft", border: "border-science-ink/20" },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Visible progress", desc: "See growth without tests, grades, or comparison. Know where things are strong and where they're building.", color: "text-info-ink", bg: "bg-info-soft", border: "border-info-ink/20" },
            { icon: <MessageCircle className="h-5 w-5" />, title: "Words to say", desc: "Parent coaching language so you always know how to start the conversation and respond to what happens.", color: "text-arts-ink", bg: "bg-arts-soft", border: "border-arts-ink/20" },
          ]).map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border ${item.border} ${item.bg} p-5 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div className={`${item.color} mb-3`}>{item.icon}</div>
              <h3 className={`font-body font-semibold text-[16px] ${item.color} mb-1.5`}>
                {item.title}
              </h3>
              <p className="text-[14px] text-slate leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* How the partnership works — creative SVG */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          How goWondr supports you
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          goWondr takes the hard parts off your plate so you can focus on the relationship.
        </p>

        <div className="mt-10 max-w-[600px] mx-auto">
          <div className="rounded-2xl border border-sand bg-paper p-5 md:p-8">
            {/* SVG concentric circles — labels positioned outside */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* The circles */}
              <div className="shrink-0">
                <svg viewBox="0 0 240 240" className="w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
                  {/* Outer — goWondr */}
                  <circle cx="120" cy="120" r="115" fill="#EAF3F2" stroke="#235A5F" strokeWidth="2" />
                  {/* Middle — Parent */}
                  <circle cx="120" cy="120" r="78" fill="#F7ECE4" stroke="#A4582E" strokeWidth="2" />
                  {/* Inner — Child */}
                  <circle cx="120" cy="120" r="42" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="2.5" />
                  {/* Center star */}
                  <text x="120" y="124" textAnchor="middle" fill="#4B7A5B" fontSize="22">&#10029;</text>
                </svg>
              </div>

              {/* Labels — clean readable text beside the SVG */}
              <div className="space-y-5 text-center md:text-left">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-teal-soft border-2 border-teal shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-bold text-[15px] text-teal">goWondr</p>
                    <p className="text-[13px] text-slate">Structure, sequence, coaching language, review timing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-terracotta-soft border-2 border-terracotta shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-bold text-[15px] text-terracotta">You, the parent</p>
                    <p className="text-[13px] text-slate">Warmth, attention, conversation, encouragement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-strong-soft border-2 border-strong-ink shrink-0 mt-1" />
                  <div>
                    <p className="font-body font-bold text-[15px] text-strong-ink">Your child</p>
                    <p className="text-[13px] text-slate">Understanding, confidence, curiosity, capability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-[13px] text-slate max-w-[440px] mx-auto">
            goWondr wraps around with structure. You wrap around with warmth. Your child grows at the heart of both.
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
            Not because you know everything, but because you care the most. The
            Learning Guide does not replace you. It supports you. It gives you
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
