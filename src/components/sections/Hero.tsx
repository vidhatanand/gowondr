import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { StatStrip } from "@/components/ui/StatStrip";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";

const heroImages = [
  '/images/hero-1.webp',
  '/images/hero-2.webp',
  '/images/hero-3.webp',
  '/images/hero-4.webp',
  '/images/hero-5.webp',
];

const heroStats = [
  { value: "8", label: "Subjects" },
  { value: "6", label: "Stages" },
  { value: "15", label: "Day Free Trial" },
  { value: "9", label: "Step Learning Arc" },
];

export function Hero() {
  return (
    <SectionShell bg="linen" className="!pt-20 !pb-16 md:!pt-28 md:!pb-20 relative overflow-hidden">
      <RandomHeroBg images={heroImages} />
      <div className="max-w-[800px] relative z-10">
        {/* Eyebrow */}
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-teal mb-5">
          Parent-led &middot; Concept-first &middot; Ages 4 through Grade 4
        </p>

        {/* H1 */}
        <h1 className="font-display text-[36px] leading-[42px] md:text-[52px] md:leading-[58px] lg:text-[64px] lg:leading-[68px] text-ink tracking-tight">
          The calm, concept-first teaching system for parents who want to
          help&nbsp;&mdash; without turning home into school.
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-[17px] md:text-[19px] leading-[28px] md:leading-[32px] text-slate max-w-[640px]">
          Your child does not need more random worksheets, more noisy apps, or
          more pressure. They need a better learning rhythm&nbsp;&mdash; one that
          is warm, well-sequenced, and rooted in real understanding.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
          <Button variant="secondary" size="lg" href="/subjects">
            Explore the curriculum
          </Button>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mt-12 pt-8 border-t border-sand/60 relative z-10">
        <StatStrip stats={heroStats} />
      </div>
    </SectionShell>
  );
}
