import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const researchTopics = [
  "Responsive parent-child interaction",
  "Playful and guided learning",
  "Thinking routines and visible thinking",
  "Concept maps and connected understanding",
  "Learning progressions and adaptive sequencing",
  "Screen-light, relationship-first early learning",
  "Future-ready skills for an AI-shaped world",
];

export function ResearchBridge() {
  return (
    <SectionShell bg="paper-alt" id="research" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/abstract-5.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper-alt/70" aria-hidden="true" />
      <div className="relative z-10">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          This approach is rooted in how children actually learn.
        </h2>

        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Our approach is built around research on:
        </p>

        <Card className="mt-8 text-left">
          <ul className="space-y-3">
            {researchTopics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 text-[15px] text-ink"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-8">
          <Button variant="primary" href="/research">
            Read the research
          </Button>
        </div>
      </div>
      </div>
    </SectionShell>
  );
}
