import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";

const contrasts = [
  {
    against: "Against worksheets",
    statement: "We organize learning, not just practice pages.",
    detail:
      "Every session connects to a wider curriculum built around concepts, not random content drops.",
  },
  {
    against: "Against child-only apps",
    statement: "The adult stays meaningfully involved.",
    detail:
      "Parent-guided learning with coaching scripts, observation prompts, and conversation starters.",
  },
  {
    against: "Against gamified edtech",
    statement: "Less noise, more clarity.",
    detail:
      "No badges, no streaks, no reward explosions. Just calm, structured, real learning.",
  },
  {
    against: "Against fragmented activities",
    statement: "Every session connects to a wider curriculum.",
    detail:
      "Concept-first structure means each activity builds on what came before and leads to what comes next.",
  },
];

export function Differentiation() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/abstract-3.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/70" aria-hidden="true" />
      <div className="relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Coverage without overwhelm. Depth without academic heaviness.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {contrasts.map((c) => (
          <Card key={c.against} variant="elevated">
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-terracotta mb-2">
              {c.against}
            </p>
            <h3 className="font-display text-[24px] leading-[30px] text-ink mb-2">
              {c.statement}
            </h3>
            <p className="text-[15px] text-slate leading-relaxed">
              {c.detail}
            </p>
          </Card>
        ))}
      </div>
      </div>
    </SectionShell>
  );
}
