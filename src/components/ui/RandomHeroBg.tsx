import { randomBytes } from "crypto";

interface RandomHeroBgProps {
  /**
   * Full webp paths, e.g. `"/images/hero-1.webp"`. For each image the
   * component expects a matching mobile variant at
   * `/images/hero-1-800.webp` (800px wide). The default `.webp` is treated
   * as the 1600w desktop variant. Variants are generated offline by
   * `cwebp -resize`; see `public/images/original/` for sources.
   */
  images: string[];
}

function toMobileSrc(src: string): string {
  return src.replace(/\.webp$/, "-800.webp");
}

/**
 * Picks a random image from `images` and renders it as the hero background
 * using a responsive `<img srcset>`. Mobile fetches the 800w variant (~15-90
 * KB), desktop/retina the 1600w variant, instead of the 2534w source that
 * was previously sent to every viewport.
 *
 * How it stays flicker-free on refresh: the inline `<script>` runs
 * synchronously during HTML parsing (before first paint), injects a
 * `<link rel="preload" imagesrcset imagesizes fetchpriority="high">` so the
 * browser starts the LCP fetch immediately, then sets
 * `srcset`/`sizes`/`src` on the `<img>`. No state, no hydration, no
 * render-then-swap.
 *
 * Intentional side-effect: on client-side Next router navigations (Link
 * clicks), React inserts this component's markup via innerHTML, which
 * does NOT execute script tags. So the `<img>` is rendered with no src
 * and nothing loads — the hero image only appears on full page loads
 * (direct navigation, bookmark, reload). This is desired: no bandwidth
 * spent re-fetching a decorative image on every in-app nav.
 */
export function RandomHeroBg({ images }: RandomHeroBgProps) {
  const id = `hero-bg-${randomBytes(4).toString("hex")}`;
  // Pass an array of [mobile, desktop] pairs to the client script so it
  // doesn't need to do string mangling at runtime.
  const pairs = images.map((src) => [toMobileSrc(src), src]);
  const pairsJson = JSON.stringify(pairs);

  return (
    <>
      <img
        id={id}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        suppressHydrationWarning
      />
      <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var a=${pairsJson},p=a[Math.floor(Math.random()*a.length)],s=p[0]+" 800w, "+p[1]+" 1600w",z="100vw",l=document.createElement("link");l.rel="preload";l.as="image";l.setAttribute("imagesrcset",s);l.setAttribute("imagesizes",z);l.fetchPriority="high";document.head.appendChild(l);var e=document.getElementById(${JSON.stringify(
            id,
          )});if(e){e.srcset=s;e.sizes=z;e.src=p[1];}})();`,
        }}
      />
    </>
  );
}
