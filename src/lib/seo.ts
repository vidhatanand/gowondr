import type { Metadata } from "next";

interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
}: PageSEO): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | goPondr`,
      description,
      url: path,
      type: path === "/" ? "website" : "article",
      siteName: "goPondr",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function articleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: path,
    publisher: {
      "@type": "Organization",
      name: "goPondr",
    },
  });
}

export function organizationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "goPondr",
    description:
      "A calm, parent-led home learning curriculum for ages 4 to Grade 4.",
    knowsAbout: [
      "Parent-led learning",
      "Home education",
      "Concept-based curriculum",
      "Early childhood education",
      "Screen-light learning",
      "Adaptive learning plans",
    ],
  });
}
