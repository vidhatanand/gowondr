import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <SectionShell bg="linen">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          You do not need to do everything. You just need a better next step.
        </h2>

        <p className="mt-5 text-[17px] leading-[28px] text-slate">
          Give your child a calmer, deeper, more connected way to learn&nbsp;&mdash;
          and give yourself the clarity to guide it.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="warm" size="lg" href="/pricing">
            Start your 15-day free trial
          </Button>
          <Button variant="secondary" size="lg" href="/subjects">
            Explore the curriculum
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
