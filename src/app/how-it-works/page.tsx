import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd } from "@/lib/seo";
import { LearningArcVisual } from "@/components/ui/LearningArcVisual";
import { SubjectExamples } from "@/components/ui/SubjectExamples";
import {
  Eye,
  FlaskConical,
  MessageCircle,
  Pencil,
  Link2,
  RefreshCw,
  Megaphone,
  Home,
  RotateCcw,
  BookOpen,
  Calculator,
  Leaf,
  Globe,
  Heart,
  Palette,
  Blocks,
  Compass,
  UserCircle,
  CalendarDays,
  Sparkles,
  ClipboardCheck,
  MonitorOff,
} from "lucide-react";

const fiveSteps = [
  {
    number: 1,
    icon: <UserCircle className="h-6 w-6" />,
    title: "Start with your child",
    description:
      "Tell us your child's age, stage, and what they already know. The planner finds the right starting point across all subjects.",
    color: "#235A5F",
    bg: "#EAF3F2",
  },
  {
    number: 2,
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Open your daily session",
    description:
      "Each day, the guide prepares a short session with activities drawn from your child's current concepts, designed for screen-light learning.",
    color: "#A4582E",
    bg: "#F7ECE4",
  },
  {
    number: 3,
    icon: <Sparkles className="h-6 w-6" />,
    title: "Follow the learning arc",
    description:
      "Every concept follows a natural progression — notice, explore, talk, represent, connect, practice, explain, use, and revisit.",
    color: "#4B7A5B",
    bg: "#EAF3EC",
  },
  {
    number: 4,
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Log what you observe",
    description:
      "After each session, note what happened. Quick observations replace tests and grades with something more honest and useful.",
    color: "#214D9C",
    bg: "#EAF0FB",
  },
  {
    number: 5,
    icon: <RefreshCw className="h-6 w-6" />,
    title: "The planner adapts",
    description:
      "Based on your observations, the adaptive plan adjusts what comes next. Review is spaced automatically.",
    color: "#6A4E73",
    bg: "#EDE8E9",
  },
];

export const metadata: Metadata = {
  title: "How parent-led home learning works",
  description:
    "See how goWondr turns parent-child time into a clear daily learning plan with concept-based curriculum, review, and screen-light activities across 8 subjects.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How parent-led home learning works | goWondr",
    description:
      "See how goWondr turns parent-child time into a clear daily learning plan with concept-based curriculum, review, and screen-light activities across 8 subjects.",
    url: "/how-it-works",
    type: "article",
    siteName: "goWondr",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "How It Works", url: "/how-it-works" },
          ]),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Parent-led home learning methodology",
          type: "HowTo",
          description:
            "Step-by-step process for parent-led concept-first home learning",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "How It Works" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          How parent-led home learning works
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
          No teaching degree needed. No complicated setup. Just you, your child,
          and a clear plan built around how children actually learn. The Learning
          Guide gives you a daily{" "}
          <InternalLink href="/adaptive-planner">
            adaptive learning plan
          </InternalLink>{" "}
          grounded in a{" "}
          <InternalLink href="/curriculum-coverage">
            concept-based curriculum
          </InternalLink>{" "}
          that spans an{" "}
          <InternalLink href="/subjects">8-subject curriculum</InternalLink>.
        </p>
      </SectionShell>

      {/* Five Steps */}
      <SectionShell bg="paper-alt" id="steps">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          Five steps to connected learning
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate text-center max-w-[600px] mx-auto">
          No complicated setup. Each step flows naturally into the next.
        </p>
        <div className="mt-10 max-w-[800px] mx-auto space-y-4">
          {fiveSteps.map((step) => (
            <div key={step.number} className="flex gap-4 md:gap-6 items-center group">
              <div
                className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-2xl flex items-center justify-center shadow-xs group-hover:shadow-sm transition-all duration-200 group-hover:scale-105 shrink-0"
                style={{ backgroundColor: step.bg, color: step.color }}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </span>
                <h3 className="font-body font-semibold text-[18px] md:text-[20px] text-ink leading-tight mt-1">
                  {step.title}
                </h3>
                <p className="text-[15px] text-slate leading-relaxed mt-1.5 max-w-[500px]">
                  {step.description}
                </p>
                <div
                  className="w-10 h-1 rounded-full mt-3 opacity-40"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Learning Arc */}
      <SectionShell bg="paper" id="learning-arc">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          The learning arc
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate text-center max-w-[600px] mx-auto">
          Every concept follows a natural progression so understanding builds
          over time, not in a single sitting.
        </p>
        <div className="mt-10">
          <LearningArcVisual
            title="NOTICE TO REVISIT"
            caption="Children move through four phases — experiencing, understanding, mastering, and transferring — before the cycle begins again."
            steps={[
              { number: 1, label: "Notice", description: "Observe something real or surprising in the world", icon: <Eye className="h-4 w-4" />, phase: "Experience" },
              { number: 2, label: "Explore", description: "Touch, sort, test, compare, play with it", icon: <FlaskConical className="h-4 w-4" />, phase: "Experience" },
              { number: 3, label: "Talk", description: "Describe, retell, question, explain aloud", icon: <MessageCircle className="h-4 w-4" />, phase: "Experience" },
              { number: 4, label: "Represent", description: "Draw, build, map, act out, model it", icon: <Pencil className="h-4 w-4" />, phase: "Understanding" },
              { number: 5, label: "Connect", description: "Link to real life and earlier learning", icon: <Link2 className="h-4 w-4" />, phase: "Understanding" },
              { number: 6, label: "Practice", description: "Purposeful repetition and retrieval", icon: <RefreshCw className="h-4 w-4" />, phase: "Mastery" },
              { number: 7, label: "Explain", description: "Teach it back in your own words", icon: <Megaphone className="h-4 w-4" />, phase: "Mastery" },
              { number: 8, label: "Use", description: "Apply the idea in everyday life", icon: <Home className="h-4 w-4" />, phase: "Transfer" },
              { number: 9, label: "Revisit", description: "Return later to deepen and secure", icon: <RotateCcw className="h-4 w-4" />, phase: "Transfer" },
            ]}
          />
        </div>
      </SectionShell>

      {/* What real sessions look like — all 8 subjects */}
      <SectionShell bg="linen" id="real-examples">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center">
          What real sessions look like
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate text-center max-w-[600px] mx-auto">
          Everyday moments across all 8 subjects — at the kitchen table, on a
          walk, during play, or before bed.
        </p>
        <div className="mt-10">
          <SubjectExamples
            examples={[
              {
                icon: <BookOpen className="h-5 w-5" />,
                subject: "Reading & Language",
                colorClass: "text-reading-ink",
                bgClass: "bg-reading-soft",
                examples: [
                  "Retelling a bedtime story using three toy figures, narrating each voice",
                  "Clapping syllables in family names and discovering patterns",
                  "Pausing mid-story to ask 'What do you think happens next?'",
                ],
              },
              {
                icon: <Calculator className="h-5 w-5" />,
                subject: "Math & Logic",
                colorClass: "text-math-ink",
                bgClass: "bg-math-soft",
                examples: [
                  "Counting plates at dinner — four people need four forks",
                  "Splitting a banana into equal halves and talking about 'fair shares'",
                  "Making a pattern with coloured blocks and extending it",
                ],
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                subject: "Science & Nature",
                colorClass: "text-science-ink",
                bgClass: "bg-science-soft",
                examples: [
                  "Planting a seed and checking it each day — predicting what will change",
                  "Testing which objects float or sink in the bathtub",
                  "Watching shadow lengths change through the afternoon",
                ],
              },
              {
                icon: <Globe className="h-5 w-5" />,
                subject: "World Learning",
                colorClass: "text-world-ink",
                bgClass: "bg-world-soft",
                examples: [
                  "Talking about where food comes from at the shop",
                  "Drawing a simple map of the route to school",
                  "Discussing 'What do helpers in our community do?'",
                ],
              },
              {
                icon: <Heart className="h-5 w-5" />,
                subject: "Personal Development",
                colorClass: "text-personal-ink",
                bgClass: "bg-personal-soft",
                examples: [
                  "Naming feelings after a difficult moment — 'I felt frustrated'",
                  "Practising a morning self-care routine independently",
                  "Talking through a disagreement with a sibling calmly",
                ],
              },
              {
                icon: <Palette className="h-5 w-5" />,
                subject: "Arts & Expression",
                colorClass: "text-arts-ink",
                bgClass: "bg-arts-soft",
                examples: [
                  "Drawing what happened in today's science observation",
                  "Responding to music by moving — fast, slow, gentle, strong",
                  "Building something from recycled materials and explaining the design",
                ],
              },
              {
                icon: <Blocks className="h-5 w-5" />,
                subject: "Digital Literacy",
                colorClass: "text-digital-ink",
                bgClass: "bg-digital-soft",
                examples: [
                  "Following a set of step-by-step instructions like an algorithm",
                  "Sorting information cards into categories — 'safe to share' vs 'private'",
                  "Talking about what the internet is in simple, child-friendly terms",
                ],
              },
              {
                icon: <Compass className="h-5 w-5" />,
                subject: "Inquiry & Life Skills",
                colorClass: "text-inquiry-ink",
                bgClass: "bg-inquiry-soft",
                examples: [
                  "Asking 'What changed?' after an experiment and discussing why",
                  "Planning a tiny project — choosing a question and finding out more",
                  "Comparing two ideas and explaining which one makes more sense",
                ],
              },
            ]}
          />
        </div>
      </SectionShell>

      {/* Why families stay */}
      <SectionShell bg="paper-alt">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why families stay
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Sessions are short enough to fit into a busy day, meaningful enough
            that children remember what they learned, and connected enough that
            parents can see real progress over weeks and months. It is not about
            doing more. It is about doing the right thing, in the right order,
            at the right time.
          </p>
        </div>
      </SectionShell>

      {/* Screen-light callout */}
      <SectionShell bg="paper">
        <div className="max-w-[700px] mx-auto">
          <div className="flex items-start gap-4 rounded-2xl border border-teal/15 bg-teal-soft p-5 md:p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal shrink-0">
              <MonitorOff className="h-6 w-6 text-paper" />
            </div>
            <div>
              <p className="font-body font-bold text-[16px] text-teal">
                Every activity happens off-screen
              </p>
              <p className="text-[15px] text-slate leading-relaxed mt-1.5">
                The parent reads a short prompt, then puts the device down.
                Activities involve talking, drawing, sorting, building, moving,
                and exploring the real world. The screen is a guide, not a babysitter.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Ready to see it for yourself?
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try goWondr free for 15 days. No payment details
            required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" href="/pricing">
              Start your 15-day free trial
            </Button>
            <Button variant="secondary" size="lg" href="/for-parents">
              Learn more for parents
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
