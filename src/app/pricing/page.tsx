import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { breadcrumbJsonLd } from "@/lib/seo";


export const metadata: Metadata = {
  title: "Pricing for goPondr | Parent-led home learning",
  description:
    "Choose monthly or annual pricing per child for goPondr. Start with a 15-day free trial and explore the full 8-subject home learning curriculum.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing for goPondr | Parent-led home learning",
    description:
      "Choose monthly or annual pricing per child for goPondr. Start with a 15-day free trial and explore the full 8-subject home learning curriculum.",
    url: "/pricing",
    type: "article",
    siteName: "goPondr",
  },
};

const pricingFaqItems = [
  {
    question: "Is the 15-day trial really free?",
    answer:
      "Yes. You get full access to all subjects and features for 15 days. No payment details are required to start.",
  },
  {
    question: "What happens after the trial ends?",
    answer:
      "You choose a plan to continue, or your account simply pauses. Nothing is charged automatically.",
  },
  {
    question: "Can I switch between monthly and annual?",
    answer:
      "Yes, you can switch at any time. If you move from monthly to annual, you start saving immediately.",
  },
  {
    question: "Is the price per child or per family?",
    answer:
      "Per child. Each child gets their own adaptive plan, progress tracking, and curriculum path. Families with multiple children can add each child separately.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no contracts or cancellation fees. You can stop at any time and your child's progress is saved.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Pricing", url: "/pricing" },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "goPondr",
            description:
              "Parent-led home learning curriculum for ages 4 through Grade 4.",
            brand: {
              "@type": "Organization",
              name: "goPondr",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Monthly Plan",
                price: "1000",
                priceCurrency: "INR",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Annual Plan",
                price: "10000",
                priceCurrency: "INR",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
              },
            ],
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "goPondr pricing",
          type: "Product",
          description:
            "Monthly and annual subscription pricing for parent-led home learning",
        }}
      />

      {/* Hero */}
      <SectionShell bg="paper">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Pricing" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
          Simple pricing for a clearer learning rhythm
        </h1>
        <p className="mt-6 text-[17px] leading-[28px] text-slate max-w-2xl">
          Start with a 15-day free trial. Then choose the plan that works for
          your family. Every plan includes the full{" "}
          <InternalLink href="/subjects">8-subject curriculum</InternalLink>,
          adaptive planning, progress tracking, and daily sessions.
        </p>
      </SectionShell>

      {/* Pricing cards */}
      <SectionShell bg="paper-alt">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
          <PricingCard
            plan="Monthly"
            price="₹1,000"
            period="month"
            features={[
              "Full 8-subject curriculum",
              "Adaptive daily planner",
              "Parent observation tracking",
              "Spaced review scheduling",
              "Progress across all concepts",
              "Cancel anytime",
            ]}
            ctaText="Start 15-day free trial"
            ctaHref="/signup?plan=monthly"
          />
          <PricingCard
            plan="Annual"
            price="₹10,000"
            period="year"
            savings="Save ₹2,000"
            highlighted
            features={[
              "Everything in Monthly",
              "Two months free",
              "Full 8-subject curriculum",
              "Adaptive daily planner",
              "Parent observation tracking",
              "Spaced review scheduling",
            ]}
            ctaText="Start 15-day free trial"
            ctaHref="/signup?plan=annual"
          />
        </div>
        <p className="mt-6 text-center text-[15px] text-slate">
          Pricing is per child. Each child gets their own adaptive learning
          plan.
        </p>
      </SectionShell>

      {/* Why annual */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Why families choose annual
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-slate">
            Learning compounds over time. The annual plan gives your family the
            space to build a consistent rhythm without worrying about monthly
            renewals. It also saves you two full months. Most families who try
            the guide for a few weeks choose annual because they see the
            difference a connected curriculum makes.
          </p>
        </div>
      </SectionShell>

      {/* What is included */}
      <SectionShell bg="linen">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            What is included in every plan
          </h2>
          <ul className="mt-6 space-y-3 text-[17px] leading-[28px] text-slate">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Full access to all 8 subjects, strands, and concepts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Adaptive daily planner that adjusts to your child
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Playful, screen-light activity suggestions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Parent observation logging after each session
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Spaced review and revisit scheduling
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Concept-level progress tracking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">&#10003;</span>
              Learning arc guidance from Notice to Revisit
            </li>
          </ul>
          <p className="mt-6 text-[17px] leading-[28px] text-slate">
            Learn more about{" "}
            <InternalLink href="/how-it-works">how it works</InternalLink> or
            read what the guide means{" "}
            <InternalLink href="/for-parents">for parents</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* Pricing FAQ */}
      <SectionShell bg="paper">
        <div className="max-w-2xl">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
            Pricing questions
          </h2>
          <div className="mt-6">
            <Accordion items={pricingFaqItems} />
          </div>
          <p className="mt-6 text-[17px] leading-[28px] text-slate">
            Have more questions? Visit the full{" "}
            <InternalLink href="/faq">FAQ</InternalLink>.
          </p>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            Try it free for 15 days
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            No payment required. Full access to every subject and feature. See
            the difference a connected curriculum makes.
          </p>
          <div className="mt-8">
            <Button variant="warm" size="lg" href="/signup">
              Start your free trial
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
