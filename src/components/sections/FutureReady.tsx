import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";

const skills = [
  "Strong foundations",
  "Flexible reasoning",
  "Expressive language",
  "Curiosity",
  "Judgment",
  "Confidence",
  "The ability to connect ideas across domains",
];

export function FutureReady() {
  return (
    <SectionShell id="future-ready">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          In an AI world, answers get cheaper. Thinking gets more valuable.
        </h2>

        <p className="mt-6 text-[17px] leading-[28px] text-slate">
          Your child&rsquo;s future advantage will not come from getting through
          more content faster. It will come from building:
        </p>

        <ul className="mt-6 space-y-2 inline-block text-left">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3 text-[17px] text-ink"
            >
              <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
              {skill}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[17px] leading-[28px] text-slate">
          That is why goWondr builds fundamentals and breadth
          together.
        </p>

        <div className="mt-8">
          <Button variant="ghost" href="/future-ready-learning">
            See how this prepares children for the future &rarr;
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
