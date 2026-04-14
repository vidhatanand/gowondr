import { SectionShell } from "@/components/ui/SectionShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { subjects } from "@/lib/subjects";
import {
  BookOpen,
  Calculator,
  Leaf,
  Globe,
  Heart,
  Palette,
  Blocks,
  Compass,
} from "lucide-react";

const subjectIcons = [BookOpen, Calculator, Leaf, Globe, Heart, Palette, Blocks, Compass];

export function SubjectBreadth() {
  return (
    <SectionShell bg="paper-alt" id="subjects">
      <div className="text-center mb-12">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          A full curriculum, not a single-skill app.
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-[600px] mx-auto">
          Strong fundamentals and real breadth across 8 connected subjects.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject, i) => {
          const Icon = subjectIcons[i];
          return (
            <Card
              key={subject.key}
              variant="subject"
              subjectSoftClass={subject.softClass}
              subjectInkClass={subject.inkClass}
              hover
              className="flex flex-col"
            >
              <Icon className={`h-7 w-7 ${subject.inkClass} mb-3`} />
              <h3 className={`font-display text-[24px] leading-[30px] text-ink mb-2`}>
                {subject.shortName}
              </h3>
              <p className="text-[15px] text-slate leading-relaxed mb-4 flex-1">
                {subject.description}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button variant="ghost" href="/subjects">
          Explore all subjects &rarr;
        </Button>
      </div>
    </SectionShell>
  );
}
