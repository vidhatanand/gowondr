import { SectionShell } from "@/components/ui/SectionShell";
import { ComparisonColumns } from "@/components/ui/ComparisonColumns";

export function ValueProposition() {
  return (
    <SectionShell bg="teal">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
          The curriculum thinks hard, so you can stay close.
        </h2>

        <p className="mt-5 text-[17px] leading-[28px] text-paper/80 max-w-[640px] mx-auto">
          You bring warmth and attention. The system brings sequence, coverage,
          repetition, and what comes next.
        </p>

        <div className="mt-10">
          <ComparisonColumns
            variant="teal"
            left={{
              title: "What the system carries",
              items: [
                "Sequence, coverage, next-step judgment",
                "Revisit timing and activity design",
                "Concept connections and pacing logic",
                "Parent scripts and coaching language",
              ],
            }}
            right={{
              title: "What you carry",
              items: [
                "Encouragement and observation",
                "Patience, delight, and relevance",
                "Emotional safety and connection",
                "Real-life conversation and curiosity",
              ],
            }}
          />
        </div>
      </div>
    </SectionShell>
  );
}
