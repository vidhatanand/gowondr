"use client";

import { useEffect, useId, useRef } from "react";

interface RandomHeroBgProps {
  /**
   * Full webp paths, e.g. `"/images/hero-1.webp"`. Mobile variant is
   * expected at `/images/hero-1-800.webp`.
   */
  images: string[];
}

// Tailwind's `md` breakpoint (same value used by the Tailwind classes
// `hidden md:block` below). Viewports narrower than this get no hero image
// at all — LCP becomes the H1 text, which is much faster on mobile 4G.
const DESKTOP_MQ = "(min-width: 768px)";

function toMobileSrc(src: string): string {
  return src.replace(/\.webp$/, "-800.webp");
}

/**
 * Random hero background — desktop only.
 *
 * On mobile viewports (< md, 768px) the component renders nothing visible:
 * the `<img>` and overlay are `hidden md:block`, and the inline bootstrap
 * script bails early via `matchMedia`. Result: no image fetch on mobile,
 * LCP element falls back to the H1 text (Newsreader, already preloaded),
 * cutting ~15-45 KB and ~200-500 ms off mobile LCP.
 *
 * On desktop the component behaves as before:
 *   - Full page load: inline script picks random, injects preload link for
 *     the preload scanner, sets srcset/sizes/src before React hydrates.
 *   - Client-side Next router nav: useEffect fallback picks when the img
 *     has no src (script didn't run because React's innerHTML insertion
 *     doesn't execute <script>).
 *
 * `suppressHydrationWarning` silences the expected diff between the
 * server-rendered empty src and the DOM's post-script populated src.
 */
export function RandomHeroBg({ images }: RandomHeroBgProps) {
  // Stable id shared by server and client renders — needed because the
  // inline script references the <img> by getElementById.
  const id = useId();
  const imgRef = useRef<HTMLImageElement>(null);

  // Client-nav fallback: if the inline script didn't run (React inserted
  // the subtree via innerHTML, not via HTML parse), pick here — but still
  // only on desktop, matching the mobile-skip policy.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || img.getAttribute("src")) return;
    if (!window.matchMedia(DESKTOP_MQ).matches) return;
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
        className="absolute inset-0 w-full h-full object-cover opacity-50 hidden md:block"
        suppressHydrationWarning
      />
      <div
        className="absolute inset-0 bg-paper/60 hidden md:block"
        aria-hidden="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){if(!window.matchMedia(${JSON.stringify(
            DESKTOP_MQ,
          )}).matches)return;var a=${pairsJson},p=a[Math.floor(Math.random()*a.length)],s=p[0]+" 800w, "+p[1]+" 1600w",z="100vw",l=document.createElement("link");l.rel="preload";l.as="image";l.setAttribute("imagesrcset",s);l.setAttribute("imagesizes",z);l.fetchPriority="high";document.head.appendChild(l);var e=document.getElementById(${JSON.stringify(
            id,
          )});if(e){e.srcset=s;e.sizes=z;e.src=p[1];}})();`,
        }}
      />
    </>
  );
}
