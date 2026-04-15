import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Skip Next's polyfill-module.js — our browserslist targets only modern
  // browsers (Chrome/Edge 91+, Firefox 90+, Safari/iOS 15+) that already
  // implement Array.at/flat/flatMap, Object.fromEntries/hasOwn,
  // String.prototype.trimStart/trimEnd, URL.canParse, Symbol.description, and
  // Promise.finally. Dropping this saves ~11 KiB of legacy JS from the main
  // client bundle (Lighthouse "Avoid legacy JavaScript" audit).
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
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // inlineCss intentionally OFF. Although it eliminates the render-blocking
  // CSS request (~680 ms Lighthouse benefit), on the Cloudflare Workers Free
  // plan (10 ms CPU/request) the extra per-response streaming was pushing
  // some cold-start requests past the CPU limit (error 1102). Re-enable once
  // on the Paid plan ($5/mo, 50 ms CPU).

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Strict mode for catching issues early
  reactStrictMode: true,

  // Headers for caching and security
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/footer-bg.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
