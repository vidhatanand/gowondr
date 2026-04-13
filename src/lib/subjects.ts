export type SubjectKey =
  | "reading"
  | "math"
  | "science"
  | "world"
  | "personal"
  | "arts"
  | "digital"
  | "inquiry";

export interface Subject {
  key: SubjectKey;
  name: string;
  shortName: string;
  description: string;
  inkClass: string;
  softClass: string;
}

export const subjects: Subject[] = [
  {
    key: "reading",
    name: "Reading, Language & Expression",
    shortName: "Reading",
    description:
      "Listening, phonics, vocabulary, comprehension, writing, expression.",
    inkClass: "text-reading-ink",
    softClass: "bg-reading-soft",
  },
  {
    key: "math",
    name: "Math, Logic & Patterns",
    shortName: "Math",
    description:
      "Number sense, operations, geometry, measurement, data, reasoning.",
    inkClass: "text-math-ink",
    softClass: "bg-math-soft",
  },
  {
    key: "science",
    name: "Science, Nature & Inquiry",
    shortName: "Science",
    description:
      "Observation, living things, materials, forces, weather, building, asking how and why.",
    inkClass: "text-science-ink",
    softClass: "bg-science-soft",
  },
  {
    key: "world",
    name: "World Learning, Society & Life Systems",
    shortName: "World",
    description:
      "Self, family, money, community, geography, culture, responsibility, everyday systems.",
    inkClass: "text-world-ink",
    softClass: "bg-world-soft",
  },
  {
    key: "personal",
    name: "Personal Development, Health & Life Skills",
    shortName: "Personal Dev",
    description:
      "Emotions, relationships, values, safety, hygiene, movement, self-awareness.",
    inkClass: "text-personal-ink",
    softClass: "bg-personal-soft",
  },
  {
    key: "arts",
    name: "Arts, Design & Creative Expression",
    shortName: "Arts",
    description:
      "Visual art, craft, music, dance, drama, making, aesthetic response.",
    inkClass: "text-arts-ink",
    softClass: "bg-arts-soft",
  },
  {
    key: "digital",
    name: "Digital Literacy & Computational Thinking",
    shortName: "Digital",
    description:
      "Technology, information, safety, creation, logic, patterns, mostly taught in age-appropriate unplugged ways.",
    inkClass: "text-digital-ink",
    softClass: "bg-digital-soft",
  },
  {
    key: "inquiry",
    name: "Inquiry, Learning & Life Skills",
    shortName: "Inquiry",
    description:
      "Thinking, communication, collaboration, dispositions, projects, participation.",
    inkClass: "text-inquiry-ink",
    softClass: "bg-inquiry-soft",
  },
];
