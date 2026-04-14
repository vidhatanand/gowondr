import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InternalLink } from "@/components/ui/InternalLink";
import { EntityGraph } from "@/components/ui/EntityGraph";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { RandomHeroBg } from "@/components/ui/RandomHeroBg";

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
      "Why digital literacy should be taught with judgment | goPondr",
    description:
      "Explore why children need digital understanding, safety, and agency — not just device skills — and how screen-light digital literacy builds real judgment.",
    url: "/research/digital-literacy-with-judgment",
    type: "article",
    siteName: "goPondr",
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
      <SectionShell bg="paper" className="relative overflow-hidden min-h-[280px] md:min-h-[340px]">
        <RandomHeroBg images={["/images/research-digital-1.webp", "/images/research-digital-2.webp"]} />
        <div className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Research", href: "/research" },
              { label: "Digital Literacy with Judgment" },
            ]}
          />
          <h1 className="font-display text-[40px] leading-[46px] md:text-[52px] md:leading-[58px] text-ink tracking-tight max-w-3xl">
            Why digital literacy should be taught with judgment, not just
            devices
          </h1>
          <p className="mt-6 text-[21px] leading-[32px] text-slate font-display max-w-2xl">
            Knowing how to use a device is not the same as understanding the
            digital world. Children need both — and judgment comes first.
          </p>
        </div>
      </SectionShell>

      {/* Diagram */}
      <SectionShell bg="paper">
        <h3 className="font-body text-[11px] tracking-[0.15em] uppercase text-slate/60 font-semibold mb-4 text-center">
          DEVICE FLUENCY VS DIGITAL JUDGMENT
        </h3>
        <div className="rounded-2xl border border-sand bg-paper p-4 md:p-6">
          <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two toolboxes: left has a single hammer representing device fluency, right has a full open toolbox with many tools representing digital judgment" preserveAspectRatio="xMidYMid meet">
            <rect width="600" height="280" fill="#FFFDF9" />

            {/* Divider */}
            <line x1="300" y1="30" x2="300" y2="250" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />

            {/* Ground */}
            <line x1="0" y1="220" x2="600" y2="220" stroke="#A4582E" strokeWidth="0.5" opacity="0.1" />

            {/* === LEFT: Single tool (hammer = device fluency) === */}
            {/* Oversized grey hammer */}
            {/* Handle */}
            <line x1="160" y1="115" x2="160" y2="195" stroke="#52616D" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
            {/* Hammer head */}
            <rect x="138" y="100" width="44" height="20" rx="4" fill="#52616D" opacity="0.15" />
            <rect x="138" y="100" width="44" height="20" rx="4" fill="none" stroke="#52616D" strokeWidth="2" opacity="0.3" />
            {/* Handle detail */}
            <line x1="157" y1="145" x2="163" y2="145" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />
            <line x1="157" y1="155" x2="163" y2="155" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />
            <line x1="157" y1="165" x2="163" y2="165" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />

            {/* Different-shaped holes (problems child can't solve with hammer) */}
            {/* Circle hole */}
            <circle cx="70" cy="160" r="10" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.2" />
            <text x="70" y="164" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">O</text>
            {/* Square hole */}
            <rect x="65" y="185" width="18" height="18" rx="2" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.2" />
            {/* Triangle hole */}
            <polygon points="80,135 90,120 100,135" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.2" />

            {/* Child figure holding the hammer, looking limited */}
            <circle cx="110" cy="148" r="7" fill="#4B7A5B" />
            <line x1="110" y1="155" x2="110" y2="182" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
            {/* One arm reaching toward hammer */}
            <line x1="110" y1="164" x2="125" y2="158" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            {/* Other arm hanging */}
            <line x1="110" y1="164" x2="100" y2="175" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="110" y1="182" x2="104" y2="200" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="110" y1="182" x2="116" y2="200" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

            {/* === RIGHT: Full toolbox with 5 tools === */}
            {/* Toolbox body — warm brown */}
            <rect x="380" y="155" width="150" height="55" rx="5" fill="#E6D5C3" opacity="0.5" />
            <rect x="380" y="155" width="150" height="55" rx="5" fill="none" stroke="#A4582E" strokeWidth="2" opacity="0.35" />
            {/* Toolbox inner shadow */}
            <line x1="385" y1="160" x2="525" y2="160" stroke="#A4582E" strokeWidth="0.5" opacity="0.15" />

            {/* Lid — open, angled up */}
            <path d="M380 155 L384 118 L526 118 L530 155" fill="#E6D5C3" opacity="0.25" />
            <path d="M380 155 L384 118 L526 118 L530 155" fill="none" stroke="#A4582E" strokeWidth="1.5" opacity="0.25" />
            {/* Lid handle */}
            <path d="M438 118 Q455 108 472 118" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            {/* Lid hinge details */}
            <circle cx="385" cy="155" r="2" fill="#A4582E" opacity="0.2" />
            <circle cx="525" cy="155" r="2" fill="#A4582E" opacity="0.2" />

            {/* Tool 1: Understanding — teal wrench */}
            <rect x="394" y="128" width="7" height="30" rx="1.5" fill="#235A5F" opacity="0.3" />
            <circle cx="397" cy="125" r="6" fill="none" stroke="#235A5F" strokeWidth="1.5" opacity="0.35" />
            <circle cx="397" cy="125" r="2.5" fill="#235A5F" opacity="0.15" />
            <text x="397" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.5" textAnchor="middle">Understand</text>

            {/* Tool 2: Safety — green shield */}
            <path d="M420 122 L427 116 L434 122 L434 138 Q427 144 420 138Z" fill="#4B7A5B" opacity="0.25" stroke="#4B7A5B" strokeWidth="1" />
            <line x1="427" y1="120" x2="427" y2="138" stroke="#4B7A5B" strokeWidth="0.5" opacity="0.2" />
            <text x="427" y="182" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.5" textAnchor="middle">Safety</text>

            {/* Tool 3: Logic — terracotta ruler */}
            <rect x="446" y="112" width="6" height="42" rx="1" fill="#A4582E" opacity="0.25" />
            <line x1="447" y1="118" x2="451" y2="118" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
            <line x1="447" y1="124" x2="451" y2="124" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
            <line x1="447" y1="130" x2="451" y2="130" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
            <line x1="447" y1="136" x2="451" y2="136" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
            <line x1="447" y1="142" x2="451" y2="142" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
            <text x="449" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.5" textAnchor="middle">Logic</text>

            {/* Tool 4: Creation — blue pencil */}
            <line x1="472" y1="110" x2="472" y2="152" stroke="#4966A8" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
            <path d="M470.5 110 L472 104 L473.5 110" fill="#A4582E" opacity="0.35" />
            {/* Pencil body stripe */}
            <line x1="472" y1="115" x2="472" y2="148" stroke="#4966A8" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
            <text x="472" y="182" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4966A8" opacity="0.5" textAnchor="middle">Creation</text>

            {/* Tool 5: Judgment — gold compass */}
            <circle cx="497" cy="130" r="8" fill="none" stroke="#886328" strokeWidth="1.5" opacity="0.35" />
            <circle cx="497" cy="130" r="2" fill="#886328" opacity="0.25" />
            {/* Compass needle */}
            <line x1="497" y1="124" x2="497" y2="136" stroke="#886328" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
            <line x1="491" y1="130" x2="503" y2="130" stroke="#886328" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
            {/* Compass cardinal marks */}
            <circle cx="497" cy="123" r="1" fill="#886328" opacity="0.3" />
            <text x="497" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#886328" opacity="0.5" textAnchor="middle">Judgment</text>

            {/* Child figure building a small structure */}
            <circle cx="355" cy="145" r="7" fill="#4B7A5B" />
            <line x1="355" y1="152" x2="355" y2="180" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
            {/* One arm reaching to build */}
            <line x1="355" y1="162" x2="368" y2="158" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            {/* Other arm */}
            <line x1="355" y1="162" x2="345" y2="172" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="355" y1="180" x2="349" y2="198" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="355" y1="180" x2="361" y2="198" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

            {/* Small structure being built (stacked blocks) */}
            <rect x="368" y="172" width="9" height="12" rx="1.5" fill="#4B7A5B" opacity="0.25" />
            <rect x="374" y="166" width="9" height="18" rx="1.5" fill="#235A5F" opacity="0.2" />
            <rect x="371" y="162" width="15" height="4" rx="1" fill="#A4582E" opacity="0.2" />
            <rect x="373" y="158" width="10" height="4" rx="1" fill="#4966A8" opacity="0.15" />

            {/* Labels */}
            <text x="130" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.8" textAnchor="middle">Device fluency alone</text>
            <text x="130" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">One skill, limited capability</text>

            <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Digital literacy with judgment</text>
            <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Understanding, safety, logic, creation, judgment</text>

            {/* Outcome labels */}
            <text x="130" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Limited</text>
            <text x="450" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Capable</text>
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
          things apart, asking questions, and wondering together. goPondr's{" "}
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
            Try goPondr free for 15 days.
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
