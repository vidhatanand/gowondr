import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LearningArc } from "@/components/sections/LearningArc";
import { SubjectBreadth } from "@/components/sections/SubjectBreadth";
import { Differentiation } from "@/components/sections/Differentiation";
import { ParentConfidence } from "@/components/sections/ParentConfidence";
import { FutureReady } from "@/components/sections/FutureReady";
import { ResearchBridge } from "@/components/sections/ResearchBridge";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "goPondr",
            description:
              "A calm, concept-first learning guide for parents. Full curriculum across 8 subjects for ages 4 through Grade 4.",
            brand: {
              "@type": "Organization",
              name: "goPondr",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Monthly Plan",
                price: "1000",
                priceCurrency: "INR",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Annual Plan",
                price: "10000",
                priceCurrency: "INR",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
              },
            ],
          }),
        }}
      />
      <Hero />
      <ProblemSection />
      <ValueProposition />
      <HowItWorks />
      <LearningArc />
      <SubjectBreadth />
      <Differentiation />
      <ParentConfidence />
      <FutureReady />
      <ResearchBridge />
      <PricingTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}
