import { SectionShell } from "@/components/ui/SectionShell";
import { LearningArcVisual } from "@/components/ui/LearningArcVisual";
import {
  Eye,
  FlaskConical,
  MessageCircle,
  Pencil,
  Link2,
  RefreshCw,
  Megaphone,
  Home,
  RotateCcw,
} from "lucide-react";

export function LearningArc() {
  return (
    <SectionShell>
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
              { number: 1, label: "Notice", description: "Observe something real or surprising", icon: <Eye className="h-4 w-4" />, phase: "Experience" },
              { number: 2, label: "Explore", description: "Touch, sort, test, compare, play", icon: <FlaskConical className="h-4 w-4" />, phase: "Experience" },
              { number: 3, label: "Talk", description: "Describe, retell, question, explain", icon: <MessageCircle className="h-4 w-4" />, phase: "Experience" },
              { number: 4, label: "Represent", description: "Draw, build, map, act out", icon: <Pencil className="h-4 w-4" />, phase: "Understanding" },
              { number: 5, label: "Connect", description: "Link to real life and prior learning", icon: <Link2 className="h-4 w-4" />, phase: "Understanding" },
              { number: 6, label: "Practice", description: "Purposeful repetition and retrieval", icon: <RefreshCw className="h-4 w-4" />, phase: "Mastery" },
              { number: 7, label: "Explain", description: "Teach it back in own words", icon: <Megaphone className="h-4 w-4" />, phase: "Mastery" },
              { number: 8, label: "Use", description: "Apply the idea in everyday life", icon: <Home className="h-4 w-4" />, phase: "Transfer" },
              { number: 9, label: "Revisit", description: "Return later to deepen and secure", icon: <RotateCcw className="h-4 w-4" />, phase: "Transfer" },
            ]}
          />
        </div>
      </div>
    </SectionShell>
  );
}
