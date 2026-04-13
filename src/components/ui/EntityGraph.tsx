interface EntityNode {
  name: string;
  type: string;
  description?: string;
  url?: string;
  isPartOf?: string;
  sameAs?: string[];
}

interface EntityGraphProps {
  mainEntity: EntityNode;
  relatedEntities?: EntityNode[];
}

export function EntityGraph({
  mainEntity,
  relatedEntities,
}: EntityGraphProps) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": mainEntity.type,
        name: mainEntity.name,
        description: mainEntity.description,
        url: mainEntity.url,
        ...(mainEntity.isPartOf && {
          isPartOf: { "@type": "WebSite", name: mainEntity.isPartOf },
        }),
        ...(mainEntity.sameAs && { sameAs: mainEntity.sameAs }),
      },
      ...(relatedEntities || []).map((e) => ({
        "@type": e.type,
        name: e.name,
        description: e.description,
        url: e.url,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
