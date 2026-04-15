import { SectionShell } from "@/components/ui/SectionShell";
import { LearningArcVisualLazy as LearningArcVisual } from "@/components/ui/LearningArcVisualLazy";

export function LearningArc() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/abstract-5.webp')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/70" aria-hidden="true" />
      <div className="relative z-10">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          A learning arc, not a content dump.
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-[600px] mx-auto">
          Every concept follows a natural progression that builds real
          understanding, not just completion.
        </p>

        <div className="mt-10">
          <LearningArcVisual
            title="THE LEARNING ARC"
            caption="Nine steps from first noticing to lasting understanding. The cycle strengthens with each revisit."
            steps={[
              { number: 1, label: "Notice", description: "Observe something real or surprising", phase: "Experience" },
              { number: 2, label: "Explore", description: "Touch, sort, test, compare, play", phase: "Experience" },
              { number: 3, label: "Talk", description: "Describe, retell, question, explain", phase: "Experience" },
              { number: 4, label: "Represent", description: "Draw, build, map, act out", phase: "Understanding" },
              { number: 5, label: "Connect", description: "Link to real life and prior learning", phase: "Understanding" },
              { number: 6, label: "Practice", description: "Purposeful repetition and retrieval", phase: "Mastery" },
              { number: 7, label: "Explain", description: "Teach it back in own words", phase: "Mastery" },
              { number: 8, label: "Use", description: "Apply the idea in everyday life", phase: "Transfer" },
              { number: 9, label: "Revisit", description: "Return later to deepen and secure", phase: "Transfer" },
            ]}
          />
        </div>
      </div>
      </div>
    </SectionShell>
  );
}
