import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently asked questions about goPondr | FAQ",
  description:
    "Answers about ages, subjects, screen time, planning, pricing, free trial, and how parents use goPondr at home.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently asked questions about goPondr | FAQ",
    description:
      "Answers about ages, subjects, screen time, planning, pricing, free trial, and how parents use goPondr at home.",
    url: "/faq",
    type: "article",
    siteName: "goPondr",
  },
};

const aboutProductItems = [
  {
    question: "Who is goPondr for?",
    answer:
      "It is for parents of children aged 4 through Grade 4 who want a structured, calm, and connected way to support learning at home. You do not need to be a teacher or homeschooler to use it.",
  },
  {
    question: "Is this for children who are struggling in school?",
    answer:
      "It can help, but it is not designed only for struggling children. It is for any family that wants to deepen understanding, build confidence, and spend intentional learning time together.",
  },
  {
    question: "Is this homeschooling?",
    answer:
      "Not necessarily. Many families use goPondr alongside school to supplement and strengthen what their child is learning. Others use it as their primary curriculum. It works either way.",
  },
  {
    question: "Can I use it for just one subject, like math?",
    answer:
      "You can focus on any subject, but goPondr is designed to support all 8 subjects because breadth builds stronger foundations. Even if math is your focus, your child benefits from the connections across subjects.",
  },
  {
    question: "Is this a gamified learning app?",
    answer:
      "No. There are no points, badges, streaks, or rewards. Learning is the reward. The guide focuses on genuine understanding through real-world activities and conversation, not engagement tricks.",
  },
  {
    question: "What is the end goal?",
    answer:
      "A child who can think clearly, explain what they know, connect ideas across subjects, and keep learning independently. Not a child who can score well on a test, but one who genuinely understands.",
  },
];

const howItWorksItems = [
  {
    question: "How much screen time does my child need?",
    answer:
      "Almost none. The parent uses a phone or laptop to read the daily session plan, then the screen goes away. Activities are designed to happen in the real world through conversation, drawing, building, sorting, and play.",
  },
  {
    question: "How long is each session?",
    answer:
      "Fifteen to thirty minutes. Sessions are designed to be short enough to fit into a busy day and focused enough to be meaningful. Consistency matters more than length.",
  },
  {
    question: "Do I need special materials?",
    answer:
      "No. Most activities use things already in your home: paper, pencils, coins, food, toys, and nature. No special kits, printers, or expensive manipulatives are required.",
  },
  {
    question: "What if I am not confident about a subject?",
    answer:
      "The guide gives you the right concepts, prompts, and activities. You do not need to be an expert. You just follow the session and let the conversation unfold. The system carries the curriculum so you can focus on the relationship.",
  },
  {
    question: "How does the adaptive planner work?",
    answer:
      "The planner uses your observations after each session, along with concept progress, review timing, and subject balance, to create the next daily plan. It adjusts automatically so you never have to guess what to teach next.",
  },
  {
    question: "What if I get stuck or do not know what to do?",
    answer:
      "The guide walks you through each session with clear prompts and suggestions. If you are ever unsure, the next step is always visible. You are never left guessing.",
  },
];

const pricingTrialItems = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. You get 15 days of full access to all subjects and features. No payment details are required to start.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Monthly is \u20B91,000 per child. Annual is \u20B910,000 per child, which saves you \u20B92,000. Both plans include everything.",
  },
  {
    question: "Is the price per child or per family?",
    answer:
      "Per child. Each child gets their own adaptive plan, progress tracking, and curriculum path.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no contracts or cancellation fees. You can stop at any time and your child\u2019s progress is saved.",
  },
];

const faqItems = [...aboutProductItems, ...howItWorksItems, ...pricingTrialItems];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "goPondr FAQ",
          type: "FAQPage",
          description:
            "Frequently asked questions about goPondr for parent-led home learning",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/page-layered-paper.webp')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
            Answers about ages, subjects, screen time, planning, pricing, and how
            parents use goPondr at home. If you do not find your answer
            here, explore{" "}
            <InternalLink href="/how-it-works">how it works</InternalLink> or
            read more{" "}
            <InternalLink href="/for-parents">for parents</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* FAQ accordion — grouped */}
      <SectionShell bg="paper-alt">
        <div className="max-w-2xl mx-auto space-y-10">
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink tracking-tight mb-4">
              About the product
            </h3>
            <Accordion items={aboutProductItems} />
          </div>
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink tracking-tight mb-4">
              How it works
            </h3>
            <Accordion items={howItWorksItems} />
          </div>
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink tracking-tight mb-4">
              Pricing & trial
            </h3>
            <Accordion items={pricingTrialItems} />
          </div>
        </div>
      </SectionShell>

      {/* Supporting links */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Still have questions?
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Learn more about our{" "}
            <InternalLink href="/subjects">8-subject curriculum</InternalLink>,
            our approach to{" "}
            <InternalLink href="/playful-screen-light-learning">
              screen-light learning
            </InternalLink>
            , or see our{" "}
            <InternalLink href="/pricing">pricing plans</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Try it and see for yourself
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Start your 15-day free trial. No payment required.
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
