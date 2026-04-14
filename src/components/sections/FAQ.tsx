import { SectionShell } from "@/components/ui/SectionShell";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What age group is goPondr designed for?",
    answer:
      "goPondr is designed for children aged 4 through Grade 4. The adaptive planner adjusts content, complexity, and expectations based on your child's age, stage, and individual progress.",
  },
  {
    question: "Do I need teaching experience to use this?",
    answer:
      "Not at all. The system carries the curriculum structure, sequencing, and pedagogy. You receive parent scripts, observation prompts, coaching language, and clear daily plans. Your role is to bring warmth, encouragement, and connection.",
  },
  {
    question: "What subjects are covered?",
    answer:
      "Eight connected subjects: Reading, Language & Expression; Math, Logic & Patterns; Science, Nature & Inquiry; World Learning, Society & Life Systems; Personal Development, Health & Life Skills; Arts, Design & Creative Expression; Digital Literacy & Computational Thinking; and Inquiry, Learning & Life Skills.",
  },
  {
    question: "Is this a screen-based learning app?",
    answer:
      "No. goPondr is screen-light by design. Children learn through talk, objects, movement, stories, play, drawing, and real-world life. The screen is used by the parent to access the plan, not by the child for content consumption.",
  },
  {
    question: "How much time does a session take?",
    answer:
      "Sessions are designed to be manageable and flexible. A typical session takes 15–30 minutes, but you can adjust based on your child's energy and your family's schedule. The system supports different energy levels.",
  },
  {
    question: "What is concept-first learning?",
    answer:
      "Instead of organizing learning around random activities or worksheets, concept-first means every session is built around a meaningful concept that connects to what came before and what comes next. This builds real understanding, not just task completion.",
  },
  {
    question: "Can I try it before paying?",
    answer:
      "Yes. Start with a 15-day free trial with full access to all features. No credit card required upfront. Choose monthly (₹1,000/child) or annual (₹10,000/child) after your trial.",
  },
  {
    question: "What if I have more than one child?",
    answer:
      "Each child gets their own learning path, progress record, and daily plan. Pricing is per child so each child receives a fully personalized experience.",
  },
];

export function FAQ() {
  return (
    <SectionShell bg="paper-alt" id="faq" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/abstract-2.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper-alt/70" aria-hidden="true" />
      <div className="relative z-10">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-display text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] text-ink tracking-tight text-center mb-10">
          Common questions
        </h2>
        <Accordion items={faqItems} />
      </div>
      </div>
    </SectionShell>
  );
}
