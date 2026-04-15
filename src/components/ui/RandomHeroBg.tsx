"use client";

import { useEffect, useId, useRef } from "react";

interface RandomHeroBgProps {
  /**
   * Full webp paths, e.g. `"/images/hero-1.webp"`. Mobile variant is
   * expected at `/images/hero-1-800.webp`.
   */
  images: string[];
}

function toMobileSrc(src: string): string {
  return src.replace(/\.webp$/, "-800.webp");
}

/**
 * Random hero background that works well in BOTH render paths:
 *
 *   1. Full page load / refresh
 *      The inline `<script>` runs synchronously during HTML parsing,
 *      BEFORE React hydrates. It picks a random image, injects a
 *      `<link rel="preload" imagesrcset fetchpriority="high">` so the
 *      browser starts fetching the LCP image immediately (preload scanner
 *      sees it during head parse), then sets `srcset`/`sizes`/`src` on
 *      the <img> in place. No flash-and-swap, no wasted preload.
 *
 *   2. Client-side Next router navigation (Link click)
 *      React inserts the new page's markup via innerHTML-based operations
 *      which do NOT execute `<script>` tags. So on nav the `<img>` mounts
 *      with no src. The `useEffect` below catches that case and picks a
 *      random image, just like the inline script would have.
 *
 * The guard `img.getAttribute("src")` is what coordinates the two: on
 * full load the inline script set the src already, so useEffect no-ops;
 * on nav the src is empty, so useEffect takes over.
 *
 * `suppressHydrationWarning` on the <img> silences the (expected) diff
 * between server-rendered empty src and the DOM's post-script populated
 * src.
 */
export function RandomHeroBg({ images }: RandomHeroBgProps) {
  // useId gives a stable id that's identical on server and client, so the
  // inline script (which references the img by id via getElementById)
  // doesn't cause a hydration mismatch.
  const id = useId();
  const imgRef = useRef<HTMLImageElement>(null);

  // Fallback for client-side navigation: if the inline script didn't run
  // (React inserted this tree via innerHTML, not via HTML parse), the img
  // has no src. Pick one here.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || img.getAttribute("src")) return;
    const desktopSrc = images[Math.floor(Math.random() * images.length)];
    const mobileSrc = toMobileSrc(desktopSrc);
    img.srcset = `${mobileSrc} 800w, ${desktopSrc} 1600w`;
    img.sizes = "100vw";
    img.src = desktopSrc;
  }, [images]);

  // Pre-pair on the server so the inline script stays tiny.
  const pairsJson = JSON.stringify(images.map((src) => [toMobileSrc(src), src]));

  return (
    <>
      <img
        ref={imgRef}
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
