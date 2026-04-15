import { randomBytes } from "crypto";

interface RandomHeroBgProps {
  images: string[];
}

/**
 * Picks a random image from `images` and applies it as a background before the
 * browser's first paint, so a manual refresh does NOT flash the first image and
 * then swap. Works with static prerendering (RSC + inline script).
 *
 * How: we render an empty backdrop `<div>` and a tiny inline `<script>` that
 * runs synchronously during HTML parsing, picks the image, and writes the
 * background-image style on the div in-place. No client component, no
 * hydration, no useEffect — so there's no "render then swap" sequence.
 */
export function RandomHeroBg({ images }: RandomHeroBgProps) {
  // Unique id so pages with multiple heroes (or nested server renders) don't
  // collide. Using crypto.randomBytes keeps the id stable within one render.
  const id = `hero-bg-${randomBytes(4).toString("hex")}`;
  const imagesJson = JSON.stringify(images);

  return (
    <>
      <div
        id={id}
        className="absolute inset-0 bg-cover bg-center opacity-50"
        aria-hidden="true"
        suppressHydrationWarning
      />
      <div className="absolute inset-0 bg-paper/60" aria-hidden="true" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var i=${imagesJson},p=i[Math.floor(Math.random()*i.length)],e=document.getElementById(${JSON.stringify(
            id,
          )});if(e)e.style.backgroundImage="url('"+p+"')";})();`,
        }}
      />
    </>
  );
}
