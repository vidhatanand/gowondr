import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  BookOpen,
  Compass,
  FlaskConical,
  Heart,
  Home,
} from "lucide-react";

const suggestions = [
  {
    icon: Home,
    label: "Start from home",
    href: "/",
    color: "#235A5F",
    bg: "#EAF3F2",
  },
  {
    icon: BookOpen,
    label: "How it works",
    href: "/how-it-works",
    color: "#A4582E",
    bg: "#F7ECE4",
  },
  {
    icon: FlaskConical,
    label: "Read the research",
    href: "/research",
    color: "#4B7A5B",
    bg: "#EAF3EC",
  },
  {
    icon: Compass,
    label: "Explore subjects",
    href: "/subjects",
    color: "#214D9C",
    bg: "#EAF0FB",
  },
  {
    icon: Heart,
    label: "For parents",
    href: "/for-parents",
    color: "#94536C",
    bg: "#F4EAEA",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-[700px] mx-auto text-center">
          {/* SVG illustration — a gentle path that forks, with a figure pausing */}
          <div className="flex justify-center mb-8">
            <svg
              viewBox="0 0 400 240"
              className="w-full max-w-[400px] h-auto"
              role="img"
              aria-label="A figure standing at a fork in the path, with stepping stones leading in different directions"
            >
              {/* Sky */}
              <rect width="400" height="240" fill="#FFFDF9" />

              {/* Soft clouds */}
              <ellipse cx="80" cy="35" rx="45" ry="12" fill="#F8F4ED" opacity="0.6" />
              <ellipse cx="320" cy="28" rx="50" ry="14" fill="#F8F4ED" opacity="0.5" />
              <ellipse cx="200" cy="45" rx="30" ry="9" fill="#F8F4ED" opacity="0.4" />

              {/* Birds */}
              <path d="M140 50 L145 45 L150 50" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.2" />
              <path d="M260 40 L265 35 L270 40" fill="none" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />

              {/* Distant hills */}
              <path d="M0 130 Q80 100 160 120 Q240 100 320 115 Q360 108 400 118 L400 145 L0 145Z" fill="#4B7A5B" opacity="0.06" />

              {/* Ground */}
              <path d="M0 155 Q100 148 200 152 Q300 148 400 155 L400 240 L0 240Z" fill="#EAF3F2" />
              <path d="M0 170 Q100 165 200 168 Q300 165 400 170 L400 240 L0 240Z" fill="#F7ECE4" />

              {/* Texture dots */}
              {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
                <circle key={i} cx={x} cy={195 + (i % 3) * 8} r="1" fill="#A4582E" opacity="0.08" />
              ))}

              {/* Main path coming from left — then forking */}
              <path d="M0 185 Q60 182 120 185 Q160 188 200 185" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 5" opacity="0.3" />

              {/* Fork — path splits into three */}
              {/* Upper path */}
              <path d="M200 185 Q240 170 290 165 Q340 162 400 158" fill="none" stroke="#235A5F" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" opacity="0.25" />
              {/* Middle path */}
              <path d="M200 185 Q260 185 320 185 Q360 185 400 185" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" opacity="0.25" />
              {/* Lower path */}
              <path d="M200 185 Q240 198 290 205 Q340 210 400 212" fill="none" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" opacity="0.25" />

              {/* Stepping stones at the fork */}
              <ellipse cx="240" cy="172" rx="8" ry="4" fill="#E6D5C3" opacity="0.5" />
              <ellipse cx="260" cy="185" rx="8" ry="4" fill="#E6D5C3" opacity="0.5" />
              <ellipse cx="245" cy="198" rx="8" ry="4" fill="#E6D5C3" opacity="0.5" />

              {/* Small signpost at fork */}
              <line x1="208" y1="168" x2="208" y2="185" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              <rect x="196" y="160" width="24" height="10" rx="2" fill="#A4582E" opacity="0.15" />
              <text x="208" y="168" textAnchor="middle" fontFamily="var(--font-body)" fontSize="5" fontWeight="700" fill="#A4582E" opacity="0.5">?</text>

              {/* Figure standing at the fork — pausing, contemplating */}
              <circle cx="185" cy="148" r="7" fill="#A4582E" />
              <line x1="185" y1="155" x2="185" y2="178" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="185" y1="164" x2="176" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
              <line x1="185" y1="164" x2="194" y2="170" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
              <line x1="185" y1="178" x2="180" y2="192" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
              <line x1="185" y1="178" x2="190" y2="192" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />

              {/* Small plant growing beside the figure */}
              <line x1="165" y1="178" x2="165" y2="168" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              <circle cx="165" cy="165" r="3.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" opacity="0.35" />

              {/* Another plant further along */}
              <line x1="280" y1="175" x2="280" y2="162" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
              <circle cx="280" cy="159" r="4" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" opacity="0.3" />
              <path d="M280 166 q-3 -2 -5 0" fill="none" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />

              {/* Path labels at the far right */}
              <text x="385" y="155" textAnchor="end" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#235A5F" opacity="0.4">learn</text>
              <text x="385" y="183" textAnchor="end" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#A4582E" opacity="0.4">explore</text>
              <text x="385" y="210" textAnchor="end" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#4B7A5B" opacity="0.4">grow</text>
            </svg>
          </div>

          {/* Messaging */}
          <h1 className="font-display text-[36px] md:text-[44px] leading-tight text-ink tracking-tight">
            This path doesn&rsquo;t lead anywhere yet.
          </h1>
          <p className="mt-4 text-[17px] leading-[28px] text-slate max-w-[480px] mx-auto">
            But every good journey has a moment of pausing. Here are some paths
            that do lead somewhere meaningful.
          </p>

          {/* Navigation suggestions */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {suggestions.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                  style={{ backgroundColor: s.bg }}
                >
                  <Icon
                    className="h-6 w-6 transition-transform group-hover:scale-110"
                    style={{ color: s.color }}
                  />
                  <span
                    className="text-[13px] font-semibold text-center"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button variant="primary" href="/">
              Go to homepage
            </Button>
          </div>

          {/* Ethos line */}
          <p className="mt-8 text-[14px] text-slate/50 italic">
            goPondr thinks hard, so you can stay close.
          </p>
        </div>
      </Container>
    </div>
  );
}
