import { notFound } from "next/navigation";

/**
 * Gate the whole `/design-system/*` subtree behind `next dev`. In any build
 * (prod or staging) `process.env.NODE_ENV === "production"`, so the pages
 * statically prerender to a 404. This used to live in middleware.ts, but
 * doing the gate at page level lets us drop middleware entirely from the
 * Cloudflare Worker on prod — the pages become pure static 404s served from
 * the asset cache, no Worker CPU needed.
 */
export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  return <>{children}</>;
}
