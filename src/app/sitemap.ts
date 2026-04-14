import type { MetadataRoute } from "next";

const BASE_URL = "https://gopondr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages
  const corePages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/how-it-works", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/for-parents", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/subjects", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/curriculum-coverage", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/playful-screen-light-learning", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/adaptive-planner", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/future-ready-learning", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/research", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Subject pages
  const subjectPages = [
    "/subjects/reading-language-expression",
    "/subjects/math-logic-patterns",
    "/subjects/science-nature-inquiry",
    "/subjects/world-learning-society-life",
    "/subjects/personal-development-health-life-skills",
    "/subjects/arts-design-creative-expression",
    "/subjects/digital-literacy-computational-thinking",
    "/subjects/inquiry-learning-life-skills",
  ].map((url) => ({
    url,
    priority: 0.7 as const,
    changeFrequency: "monthly" as const,
  }));

  // Research pages
  const researchPages = [
    "/research/parent-child-connection-learning",
    "/research/concept-first-coverage",
    "/research/playful-screen-light-learning",
    "/research/thinking-routines-visible-understanding",
    "/research/adaptive-planning-spaced-revisit",
    "/research/breadth-future-ready-ai-world",
    "/research/digital-literacy-with-judgment",
  ].map((url) => ({
    url,
    priority: 0.6 as const,
    changeFrequency: "monthly" as const,
  }));

  return [...corePages, ...subjectPages, ...researchPages].map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
