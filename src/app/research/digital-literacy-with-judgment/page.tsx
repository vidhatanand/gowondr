import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "Why digital literacy should be taught with judgment | Research",
  description:
    "Explore why children need digital understanding, safety, and agency — not just device skills — and how screen-light digital literacy builds real judgment.",
  alternates: {
    canonical: "/research/digital-literacy-with-judgment",
  },
  openGraph: {
    title:
      "Why digital literacy should be taught with judgment | goWondr",
    description:
      "Explore why children need digital understanding, safety, and agency — not just device skills — and how screen-light digital literacy builds real judgment.",
    url: "/research/digital-literacy-with-judgment",
    type: "article",
    siteName: "goWondr",
  },
};

export default function DigitalLiteracyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Research", url: "/research" },
            {
              name: "Digital Literacy with Judgment",
              url: "/research/digital-literacy-with-judgment",
            },
          ]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd({
            title:
              "Why digital literacy should be taught with judgment, not just devices",
            description:
              "Research on why children need digital understanding, safety, and agency — not just device skills.",
            path: "/research/digital-literacy-with-judgment",
          }),
        }}
      />
      <EntityGraph
        mainEntity={{
          name: "Digital literacy with judgment",
          type: "ScholarlyArticle",
          description:
            "Research on teaching digital literacy with understanding, safety, and agency",
        }}
        relatedEntities={[
          { name: "Digital Citizenship", type: "Thing" },
          { name: "Computational Thinking", type: "Thing" },
        ]}
      />

      {/* Hero */}
      <SectionShell bg="paper" narrow={true}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research", href: "/research" },
            { label: "Digital Literacy with Judgment" },
          ]}
        />
        <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight">
          Why digital literacy should be taught with judgment, not just
          devices
        </h1>
        <p className="mt-6 text-[21px] leading-[32px] text-slate font-display">
          Knowing how to use a device is not the same as understanding the
          digital world. Children need both — and judgment comes first.
        </p>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-2">
          DEVICE FLUENCY VS DIGITAL JUDGMENT
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two toolboxes: left has a single hammer representing device fluency, right has a full open toolbox with many tools representing digital judgment">
            <rect width="600" height="280" fill="#FFFDF9" />

            {/* Divider */}
            <line x1="300" y1="30" x2="300" y2="250" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />

            {/* Ground */}
            <line x1="0" y1="220" x2="600" y2="220" stroke="#A4582E" strokeWidth="0.5" opacity="0.1" />

            {/* === LEFT: Single tool (hammer = device fluency) === */}
            {/* Single large hammer */}
            {/* Handle */}
            <line x1="150" y1="120" x2="150" y2="190" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
            {/* Hammer head */}
            <rect x="133" y="108" width="34" height="16" rx="3" fill="#52616D" opacity="0.2" />
            <rect x="133" y="108" width="34" height="16" rx="3" fill="none" stroke="#52616D" strokeWidth="1.2" opacity="0.3" />

            {/* Child figure next to hammer, looking limited */}
            <circle cx="100" cy="155" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="100" y1="161" x2="100" y2="182" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="100" y1="168" x2="93" y2="175" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="100" y1="168" x2="107" y2="175" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="100" y1="182" x2="95" y2="198" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />
            <line x1="100" y1="182" x2="105" y2="198" stroke="#1E2A34" strokeWidth="1.5" opacity="0.4" />

            {/* Reaching toward hammer with one hand */}
            <path d="M107 175 Q120 170 135 168" fill="none" stroke="#1E2A34" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2" />

            {/* Empty space around - nothing else to work with */}
            <text x="150" y="205" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.25" textAnchor="middle">one tool only</text>

            {/* === RIGHT: Full toolbox === */}
            {/* Open toolbox base */}
            <rect x="380" y="155" width="140" height="50" rx="4" fill="#EFE6D8" opacity="0.4" />
            <rect x="380" y="155" width="140" height="50" rx="4" fill="none" stroke="#A4582E" strokeWidth="1.5" opacity="0.3" />

            {/* Toolbox lid (open, angled up) */}
            <path d="M380 155 L385 125 L515 125 L520 155" fill="#EFE6D8" opacity="0.15" />
            <path d="M380 155 L385 125 L515 125 L520 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.2" />
            {/* Handle on lid */}
            <path d="M435 125 Q450 118 465 125" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.2" />

            {/* Tools sticking out of the box (different colors = different competencies) */}
            {/* Tool 1: Understanding (wrench - teal) */}
            <rect x="392" y="135" width="6" height="25" rx="1" fill="#235A5F" opacity="0.25" />
            <circle cx="395" cy="132" r="5" fill="none" stroke="#235A5F" strokeWidth="1.2" opacity="0.3" />

            {/* Tool 2: Safety (shield - terracotta) */}
            <path d="M415 130 L420 125 L425 130 L425 143 Q420 148 415 143Z" fill="#A4582E" opacity="0.2" stroke="#A4582E" strokeWidth="0.8" />

            {/* Tool 3: Logic (ruler/straight edge - green) */}
            <rect x="438" y="120" width="5" height="35" rx="0.5" fill="#4B7A5B" opacity="0.22" />
            <line x1="439" y1="125" x2="442" y2="125" stroke="#4B7A5B" strokeWidth="0.4" opacity="0.3" />
            <line x1="439" y1="130" x2="442" y2="130" stroke="#4B7A5B" strokeWidth="0.4" opacity="0.3" />
            <line x1="439" y1="135" x2="442" y2="135" stroke="#4B7A5B" strokeWidth="0.4" opacity="0.3" />
            <line x1="439" y1="140" x2="442" y2="140" stroke="#4B7A5B" strokeWidth="0.4" opacity="0.3" />

            {/* Tool 4: Creation (pencil/pen - ink) */}
            <line x1="460" y1="118" x2="460" y2="152" stroke="#1E2A34" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
            <path d="M459 118 L460 112 L461 118" fill="#A4582E" opacity="0.3" />

            {/* Tool 5: Patterns (gear - slate) */}
            <circle cx="480" cy="138" r="7" fill="none" stroke="#52616D" strokeWidth="1.2" opacity="0.25" />
            <circle cx="480" cy="138" r="3" fill="#52616D" opacity="0.1" />
            {/* Gear teeth */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 480 + Math.cos(rad) * 7;
              const y1 = 138 + Math.sin(rad) * 7;
              const x2 = 480 + Math.cos(rad) * 9;
              const y2 = 138 + Math.sin(rad) * 9;
              return <line key={`g${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#52616D" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />;
            })}

            {/* Tool 6: Questioning (magnifying glass - teal) */}
            <circle cx="502" cy="135" r="5" fill="none" stroke="#235A5F" strokeWidth="1" opacity="0.25" />
            <line x1="506" y1="139" x2="512" y2="148" stroke="#235A5F" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />

            {/* Child figure next to toolbox, building something */}
            <circle cx="360" cy="148" r="6" fill="none" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="360" y1="154" x2="360" y2="178" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="360" y1="162" x2="353" y2="170" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="360" y1="162" x2="372" y2="165" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="360" y1="178" x2="355" y2="198" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />
            <line x1="360" y1="178" x2="365" y2="198" stroke="#1E2A34" strokeWidth="1.5" opacity="0.5" />

            {/* Something being built (small structure) */}
            <rect x="370" y="170" width="8" height="10" rx="1" fill="none" stroke="#4B7A5B" strokeWidth="1" opacity="0.3" />
            <rect x="376" y="165" width="8" height="15" rx="1" fill="none" stroke="#235A5F" strokeWidth="1" opacity="0.25" />
            <rect x="373" y="162" width="14" height="3" rx="0.5" fill="none" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />

            {/* Labels */}
            <text x="130" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.55" textAnchor="middle">Device fluency alone</text>
            <text x="130" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.35" textAnchor="middle">One skill, limited capability</text>

            <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.7" textAnchor="middle">Digital judgment</text>
            <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Understanding, safety, logic, creation</text>

            {/* Tool labels inside box */}
            <text x="395" y="175" fontFamily="var(--font-body)" fontSize="6.5" fontWeight="600" fill="#235A5F" opacity="0.35">Understand</text>
            <text x="430" y="175" fontFamily="var(--font-body)" fontSize="6.5" fontWeight="600" fill="#A4582E" opacity="0.35">Safety</text>
            <text x="460" y="175" fontFamily="var(--font-body)" fontSize="6.5" fontWeight="600" fill="#4B7A5B" opacity="0.35">Logic</text>
            <text x="490" y="175" fontFamily="var(--font-body)" fontSize="6.5" fontWeight="600" fill="#52616D" opacity="0.35">Create</text>

            {/* Outcome labels */}
            <text x="130" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Vulnerable to misuse</text>
            <text x="450" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Capable digital citizen</text>
          </svg>
        </div>
        <p className="mt-3 text-[14px] leading-[22px] text-slate/70 text-center">
          A child who can swipe is not digitally literate. Real digital literacy means understanding how technology works, staying safe, thinking logically, and creating with purpose.
        </p>
      </SectionShell>

      {/* Parent summary */}
      <SectionShell bg="paper-alt" narrow={true} id="parent-summary">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          The short version for parents
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Many children today can swipe, tap, and navigate apps before they
          can tie their shoes. But device fluency is not digital literacy.
          Real digital literacy means understanding how technology works,
          why it is designed the way it is, how to stay safe online, how
          to evaluate information, and how to use digital tools as a
          creator — not just a consumer. These skills require judgment,
          and judgment can be developed long before a child needs their
          own device.
        </p>
      </SectionShell>

      {/* What evidence says */}
      <SectionShell bg="paper" narrow={true} id="evidence">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What the evidence says
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Digital literacy frameworks
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              International frameworks for digital literacy — including
              those from UNESCO, the EU, and national curricula — define
              digital competence far more broadly than device skills.
              They include information literacy, online safety, ethical
              behaviour, computational thinking, and creative digital
              expression. These frameworks make clear that digital
              literacy is a multi-dimensional competency, not a set of
              app-based skills.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Age-appropriate technology research
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on age-appropriate technology use suggests that
              young children benefit most from guided, conversation-rich
              interactions with technology — not from independent screen
              time. When adults mediate the experience, ask questions,
              and connect what happens on screen to the real world,
              children develop more meaningful digital understanding.
              Unsupervised device use, by contrast, tends to produce
              passive consumption habits rather than genuine competence.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[24px] leading-[30px] text-ink">
              Unplugged computational thinking
            </h3>
            <p className="mt-3 text-[17px] leading-[28px] text-slate">
              Research on computational thinking shows that the core
              concepts — sequencing, pattern recognition, decomposition,
              abstraction, and algorithmic thinking — can be taught
              effectively without a computer. Unplugged activities like
              sorting, sequencing stories, giving precise instructions,
              and debugging everyday problems develop the same cognitive
              skills that underpin programming, data analysis, and
              systems thinking. The screen is optional; the thinking is
              not.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Device fluency ≠ digital literacy */}
      <SectionShell bg="linen" narrow={true} id="device-fluency">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Device fluency is not digital literacy
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          A child who can navigate a tablet is not necessarily digitally
          literate. Device fluency is about operating a tool. Digital
          literacy is about understanding the environment that tool
          creates — including how information spreads, how algorithms
          shape what you see, how data is collected, and how to
          distinguish reliable sources from unreliable ones. These are
          thinking skills, not tapping skills. And they are best developed
          through conversation and guided exploration, not through more
          screen time.
        </p>
      </SectionShell>

      {/* Why judgment matters more than exposure */}
      <SectionShell bg="paper" narrow={true} id="judgment-over-exposure">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          Why judgment matters more than exposure
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Some approaches to digital literacy prioritize early and frequent
          device exposure. The assumption is that children will learn
          digital skills by using digital tools. But exposure without
          judgment produces consumers, not critical thinkers. Children need
          to understand why a notification is designed to grab their
          attention, why a game is designed to keep them playing, and why
          some information online is trustworthy and some is not. These
          lessons are best taught through discussion and reflection — not
          through more app time.
        </p>
      </SectionShell>

      {/* What this means for families */}
      <SectionShell bg="paper-alt" narrow={true}>
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight">
          What this means for families
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          You do not need to hand your child a device to teach them
          digital literacy. You can build computational thinking through
          everyday activities — sorting, sequencing, giving instructions,
          debugging. You can discuss online safety during a family
          conversation. You can explore how technology works by taking
          things apart, asking questions, and wondering together. The
          Learning Guide's{" "}
          <InternalLink href="/subjects/digital-literacy-computational-thinking">
            digital literacy curriculum
          </InternalLink>{" "}
          is built on this screen-light, judgment-first approach. Explore
          the broader{" "}
          <InternalLink href="/future-ready-learning">
            future-ready learning
          </InternalLink>{" "}
          philosophy.
        </p>
      </SectionShell>

      {/* Close */}
      <SectionShell bg="paper" narrow={true}>
        <p className="text-[17px] leading-[28px] text-slate">
          The goal is not to keep children away from technology. It is to
          make sure that when they encounter it, they have the judgment to
          use it wisely, safely, and creatively. That judgment starts with
          thinking, not tapping.
        </p>
        <p className="mt-4 text-[17px] leading-[28px] text-slate">
          Explore more:{" "}
          <InternalLink href="/research">research hub</InternalLink> /{" "}
          <InternalLink href="/subjects/digital-literacy-computational-thinking">
            digital literacy curriculum
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/future-ready-learning">
            future-ready learning
          </InternalLink>{" "}
          /{" "}
          <InternalLink href="/research/breadth-future-ready-ai-world">
            breadth research
          </InternalLink>
        </p>
      </SectionShell>

      {/* Related reading */}
      <SectionShell bg="paper-alt">
        <h2 className="font-display text-[24px] text-ink mb-6">Related reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Breadth in an AI world</h3>
            <p className="text-[14px] text-slate mb-3">Why broad foundations across subjects matter more in a future shaped by AI and rapid change.</p>
            <InternalLink href="/research/breadth-future-ready-ai-world">Read more &rarr;</InternalLink>
          </Card>
          <Card hover>
            <h3 className="font-body font-semibold text-[16px] text-ink mb-1">Playful, screen-light learning</h3>
            <p className="text-[14px] text-slate mb-3">Evidence for guided, multi-modal learning using conversation, movement, and real materials.</p>
            <InternalLink href="/research/playful-screen-light-learning">Read more &rarr;</InternalLink>
          </Card>
        </div>
      </SectionShell>

      {/* CTA */}
      <SectionShell bg="teal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-paper tracking-tight">
            See judgment-first digital literacy in action
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-paper/80">
            Try goWondr free for 15 days.
          </p>
          <div className="mt-8">
            <Button variant="warm" size="lg" href="/pricing">
              Start your free trial
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
