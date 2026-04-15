"use client";

import { useEffect, useRef } from "react";

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
 * Picks a random hero background and renders it as a responsive `<img>`.
 *
 * Runs on mount via `useEffect`, so it picks on BOTH:
 *   - full page loads / refresh
 *   - client-side Next router navigations
 *
 * That's a deliberate reversal from the previous inline-script approach,
 * which only fired on full loads — on app-internal nav the hero stayed
 * blank, which felt broken. With useEffect the image is consistent
 * everywhere at the cost of LCP preload (the preload link is injected
 * after hydration instead of during HTML parse).
 *
 * The `<img>` renders server-side with no `src`, so there's no SSR pick
 * to mismatch the client pick — no hydration warning, no flash of one
 * image being swapped for another.
 */
export function RandomHeroBg({ images }: RandomHeroBgProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const desktopSrc = images[Math.floor(Math.random() * images.length)];
    const mobileSrc = toMobileSrc(desktopSrc);
    const srcset = `${mobileSrc} 800w, ${desktopSrc} 1600w`;
    const sizes = "100vw";

    // Preload hint so the browser knows this is high-priority LCP content.
    // Injected at mount — too late for the preload scanner but still helps
    // prioritization against other network work.
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.setAttribute("imagesrcset", srcset);
    link.setAttribute("imagesizes", sizes);
    link.fetchPriority = "high";
    document.head.appendChild(link);

    img.srcset = srcset;
    img.sizes = sizes;
    img.src = desktopSrc;

    return () => {
      link.remove();
    };
  }, [images]);

  return (
    <>
      <img
        ref={imgRef}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
    </>
  );
}
