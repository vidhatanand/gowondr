import { SectionShell } from "@/components/ui/SectionShell";
import { PricingCard } from "@/components/ui/PricingCard";
import { Chip } from "@/components/ui/Chip";

export function PricingTeaser() {
  return (
    <SectionShell id="pricing">
      <div className="text-center mb-10">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Start free. Choose the plan that fits your family.
        </h2>
        <div className="mt-4">
          <Chip variant="terracotta">15-day free trial</Chip>
        </div>
        <p className="mt-4 text-[15px] text-slate">
          Each child gets their own learning path, progress record, review
          rhythm, and daily plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
        <PricingCard
          plan="Monthly"
          price="₹1,000"
          period="child / month"
          features={[
            "Full curriculum across 8 subjects",
            "Adaptive daily planning",
            "Parent coaching language",
            "Printables included",
            "Progress tracking",
          ]}
          ctaText="Start free trial"
          ctaHref="#"
        />
        <PricingCard
          plan="Annual"
          price="₹10,000"
          period="child / year"
          savings="Save ₹2,000"
          highlighted
          features={[
            "Everything in Monthly",
            "Save ₹2,000 per child per year",
            "Full year of guided learning",
            "Priority support",
            "Annual growth story",
          ]}
          ctaText="Start free trial"
          ctaHref="#"
        />
      </div>
    </SectionShell>
  );
}
