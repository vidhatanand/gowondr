import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fully static export. All 34 routes are prerendered, so we ship pure
  // HTML/CSS/JS out of `out/` and host it on Cloudflare Pages — no Next
  // runtime, no Worker, no opennext adapter, no 1102 CPU-limit errors.
  output: "export",

  // `next/image` optimization isn't available in export mode. We use plain
  // <img> throughout, but this flag silences the build error if anyone ever
  // imports next/image by mistake and keeps it working (served unoptimized).
  images: {
    unoptimized: true,
  },

  // Inline CSS into prerendered HTML — eliminates the render-blocking CSS
  // request (~680 ms mobile Lighthouse benefit). Safe on Pages since pages
  // are static files, no runtime cost.
  experimental: {
    inlineCss: true,
  },

  // Skip Next's polyfill-module.js — our browserslist targets only modern
  // browsers (Chrome/Edge 91+, Firefox 90+, Safari/iOS 15+) that already
  // implement Array.at/flat/flatMap, Object.fromEntries/hasOwn,
  // String.prototype.trimStart/trimEnd, URL.canParse, Symbol.description, and
  // Promise.finally. Saves ~11 KiB of legacy JS from the client bundle.
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string | false>),
      [path.resolve(
        process.cwd(),
        "node_modules/next/dist/build/polyfills/polyfill-module.js",
      )]: false,
    };
    return config;
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Strict mode for catching issues early
  reactStrictMode: true,

  // Note: headers() doesn't apply to `output: 'export'`. Cache-Control and
  // security headers live in `public/_headers` instead (Cloudflare Pages
  // format, copied into the export output at build).
};

export default nextConfig;
