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
          goPondr is designed around exactly these needs.
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
          How goPondr supports you
        </h2>
        <p className="mt-3 text-[17px] leading-[28px] text-slate text-center max-w-[520px] mx-auto">
          goPondr takes the hard parts off your plate so you can focus on the relationship.
        </p>

        <div className="mt-10 max-w-[700px] mx-auto">
          {/* Landscape illustration — layered ground, path, horizon */}
          <div className="rounded-2xl border border-sand bg-paper overflow-hidden">
            <svg viewBox="0 0 600 260" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              {/* Sky gradient */}
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFDF9" />
                  <stop offset="100%" stopColor="#F8F4ED" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="600" height="170" fill="url(#sky)" />

              {/* Soft clouds */}
              <ellipse cx="120" cy="50" rx="50" ry="14" fill="#F8F4ED" opacity="0.7" />
              <ellipse cx="140" cy="45" rx="35" ry="12" fill="#FBF7F1" opacity="0.6" />
              <ellipse cx="450" cy="35" rx="60" ry="15" fill="#F8F4ED" opacity="0.5" />
              <ellipse cx="475" cy="30" rx="40" ry="12" fill="#FBF7F1" opacity="0.4" />
              <ellipse cx="300" cy="65" rx="30" ry="10" fill="#F8F4ED" opacity="0.3" />

              {/* Birds — simple V shapes */}
              <path d="M 170 70 L 175 65 L 180 70" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.3" />
              <path d="M 190 60 L 195 55 L 200 60" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.25" />
              <path d="M 400 50 L 405 45 L 410 50" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.2" />

              {/* Sun/horizon — warm glow */}
              <ellipse cx="300" cy="155" rx="280" ry="30" fill="#EAF3F2" opacity="0.5" />
              <circle cx="300" cy="120" r="40" fill="#FBF7F1" stroke="#E6D5C3" strokeWidth="1.5" />
              <circle cx="300" cy="120" r="30" fill="#F8F4ED" stroke="#EFE6D8" strokeWidth="1" />
              {/* Sun rays */}
              <line x1="300" y1="72" x2="300" y2="65" stroke="#E6D5C3" strokeWidth="1" opacity="0.5" />
              <line x1="330" y1="92" x2="338" y2="87" stroke="#E6D5C3" strokeWidth="1" opacity="0.4" />
              <line x1="270" y1="92" x2="262" y2="87" stroke="#E6D5C3" strokeWidth="1" opacity="0.4" />
              <line x1="340" y1="115" x2="348" y2="115" stroke="#E6D5C3" strokeWidth="1" opacity="0.3" />
              <line x1="260" y1="115" x2="252" y2="115" stroke="#E6D5C3" strokeWidth="1" opacity="0.3" />
              <text x="300" y="117" textAnchor="middle" fill="#52616D" fontSize="10" fontWeight="600" fontFamily="var(--font-body)">future</text>
              <text x="300" y="129" textAnchor="middle" fill="#52616D" fontSize="9" fontFamily="var(--font-body)">possibilities</text>

              {/* Distant hills */}
              <path d="M 0 170 Q 80 140 160 160 Q 240 175 300 155 Q 360 140 440 158 Q 520 170 600 150 L 600 175 L 0 175 Z" fill="#EAF3F2" opacity="0.4" />

              {/* Ground layer 1 — goPondr structure (teal, deepest) */}
              <path d="M 0 195 Q 100 175 200 185 Q 300 195 400 182 Q 500 175 600 185 L 600 340 L 0 340 Z" fill="#EAF3F2" />
              <path d="M 0 195 Q 100 175 200 185 Q 300 195 400 182 Q 500 175 600 185" fill="none" stroke="#235A5F" strokeWidth="1.5" opacity="0.25" />
              {/* Texture dots in goPondr layer */}
              <circle cx="50" cy="290" r="1.5" fill="#235A5F" opacity="0.1" />
              <circle cx="100" cy="300" r="1.5" fill="#235A5F" opacity="0.1" />
              <circle cx="170" cy="295" r="1.5" fill="#235A5F" opacity="0.08" />
              <circle cx="250" cy="305" r="1.5" fill="#235A5F" opacity="0.1" />
              <circle cx="350" cy="298" r="1.5" fill="#235A5F" opacity="0.08" />
              <circle cx="440" cy="300" r="1.5" fill="#235A5F" opacity="0.1" />
              <circle cx="520" cy="290" r="1.5" fill="#235A5F" opacity="0.08" />
              <circle cx="560" cy="305" r="1.5" fill="#235A5F" opacity="0.1" />

              {/* Ground layer 2 — parent warmth (terracotta, middle) */}
              <path d="M 0 215 Q 100 205 200 210 Q 300 218 400 208 Q 500 202 600 212 L 600 340 L 0 340 Z" fill="#F7ECE4" />

              {/* Learning path — dotted trail across the warm layer */}
              <path d="M 60 240 Q 130 230 200 235 Q 280 242 350 236 Q 430 232 520 228" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.4" strokeLinecap="round" />

              {/* Stepping stones along the path */}
              <ellipse cx="100" cy="239" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
              <ellipse cx="180" cy="235" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
              <ellipse cx="265" cy="238" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
              <ellipse cx="345" cy="236" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
              <ellipse cx="430" cy="232" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
              <ellipse cx="505" cy="229" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />

              {/* Small items on stepping stones — book, cube, leaf */}
              <rect x="96" y="233" width="8" height="6" rx="1" fill="#6A4E73" opacity="0.5" />
              <rect x="177" y="229" width="6" height="6" rx="1" fill="#2A6E73" opacity="0.5" />
              <circle cx="267" cy="233" r="3" fill="#4B744F" opacity="0.5" />
              <rect x="342" y="230" width="7" height="5" rx="1" fill="#886328" opacity="0.5" />
              <circle cx="432" cy="227" r="3" fill="#7A5AA6" opacity="0.4" />
              <rect x="502" y="223" width="6" height="6" rx="1" fill="#4966A8" opacity="0.4" />

              {/* Parent figure — detailed stick figure */}
              <circle cx="228" cy="168" r="10" fill="#A4582E" /> {/* head */}
              <line x1="228" y1="178" x2="228" y2="206" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" /> {/* body */}
              <line x1="228" y1="206" x2="218" y2="225" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* leg left */}
              <line x1="228" y1="206" x2="238" y2="225" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* leg right */}
              <line x1="228" y1="188" x2="215" y2="200" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* arm left */}
              <path d="M 228 188 Q 240 182 252 185" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* arm reaching to child */}

              {/* Child figure — smaller, walking with parent */}
              <circle cx="260" cy="180" r="7.5" fill="#4B7A5B" /> {/* head */}
              <line x1="260" y1="188" x2="260" y2="210" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" /> {/* body */}
              <line x1="260" y1="210" x2="253" y2="225" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* leg left */}
              <line x1="260" y1="210" x2="267" y2="225" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* leg right */}
              <path d="M 260 195 Q 252 190 250 186" fill="none" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* arm to parent */}
              <line x1="260" y1="195" x2="270" y2="200" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* arm right */}

              {/* Connection between hands — warmth line */}
              <path d="M 250 186 L 252 185" fill="none" stroke="#E6D5C3" strokeWidth="2" strokeLinecap="round" />

              {/* Growing plants — progressive growth left to right */}
              {/* Tiny sprout */}
              <line x1="340" y1="210" x2="340" y2="202" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="340" cy="199" r="3" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />

              {/* Small plant */}
              <line x1="390" y1="207" x2="390" y2="195" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="390" cy="192" r="4" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
              <line x1="390" y1="200" x2="384" y2="196" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
              <circle cx="382" cy="194" r="2.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />

              {/* Medium plant */}
              <line x1="440" y1="204" x2="440" y2="186" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
              <circle cx="440" cy="183" r="5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
              <line x1="440" y1="195" x2="432" y2="189" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="430" cy="187" r="3.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />
              <line x1="440" y1="192" x2="448" y2="188" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="450" cy="186" r="3" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />

              {/* Tall plant — flourishing */}
              <line x1="500" y1="200" x2="500" y2="175" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
              <circle cx="500" cy="172" r="6" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1.2" />
              <line x1="500" y1="190" x2="490" y2="182" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="488" cy="180" r="4.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
              <line x1="500" y1="185" x2="510" y2="178" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="512" cy="176" r="4" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
              <line x1="500" y1="195" x2="492" y2="190" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
              <circle cx="490" cy="188" r="3" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />

              {/* A tiny flower on the tall plant */}
              <circle cx="500" cy="170" r="2" fill="#A4582E" opacity="0.6" />

              {/* Small background trees — distant, soft */}
              <line x1="540" y1="195" x2="540" y2="170" stroke="#235A5F" strokeWidth="2" opacity="0.15" strokeLinecap="round" />
              <circle cx="540" cy="165" r="10" fill="#235A5F" opacity="0.08" />
              <line x1="560" y1="192" x2="560" y2="172" stroke="#235A5F" strokeWidth="2" opacity="0.12" strokeLinecap="round" />
              <circle cx="560" cy="167" r="8" fill="#235A5F" opacity="0.06" />

              {/* Labels removed — shown in HTML below the SVG */}
            </svg>

            {/* Text below illustration */}
            <div className="px-5 md:px-8 pb-6 pt-4 border-t border-sand bg-paper-alt">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-3 h-3 rounded-full bg-teal-soft border-2 border-teal mx-auto mb-1.5" />
                  <p className="font-body font-semibold text-[13px] text-teal">goPondr is the ground</p>
                  <p className="text-[12px] text-slate mt-0.5">Curriculum, sequence, review, coaching language</p>
                </div>
                <div>
                  <div className="w-3 h-3 rounded-full bg-terracotta-soft border-2 border-terracotta mx-auto mb-1.5" />
                  <p className="font-body font-semibold text-[13px] text-terracotta">You are the path</p>
                  <p className="text-[12px] text-slate mt-0.5">Warmth, attention, conversation, encouragement</p>
                </div>
                <div>
                  <div className="w-3 h-3 rounded-full bg-strong-soft border-2 border-strong-ink mx-auto mb-1.5" />
                  <p className="font-body font-semibold text-[13px] text-strong-ink">Your child grows</p>
                  <p className="text-[12px] text-slate mt-0.5">Understanding, confidence, curiosity, capability</p>
                </div>
              </div>
            </div>
          </div>
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
