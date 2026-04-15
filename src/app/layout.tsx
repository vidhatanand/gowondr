import type { Metadata } from "next";
import { Newsreader, Atkinson_Hyperlegible } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Newsreader is used for headings (LCP element on the home hero), so preload
// is on by default — but we only need the normal style. No heading uses italic
// Newsreader anywhere; the `italic` utility on body paragraphs applies to the
// Atkinson family, which has no italic variant so the browser synthesizes one.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

// Atkinson Hyperlegible is the body font. Skipping preload keeps it off the
// critical request path — with font-display: swap the browser renders body
// copy in the system fallback first, then swaps once the font arrives. This
// is the standard perf trade-off: a brief FOUT on body text in exchange for
// ~300 ms off the LCP critical path (fonts were the terminal nodes).
const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gopondr.com"),
  title: {
    default: "Parent-led home learning for ages 4 to Grade 4 | goPondr",
    template: "%s | goPondr",
  },
  description:
    "A calm, concept-first learning guide for parents. Full curriculum across 8 subjects, adaptive daily plans, screen-light activities, printables, and progress you can actually understand.",
  keywords: [
    "parent-led learning",
    "home learning curriculum",
    "concept-first learning",
    "screen-light learning",
    "ages 4 to Grade 4",
    "8-subject curriculum",
    "adaptive learning plan",
  ],
  authors: [{ name: "goPondr" }],
  creator: "goPondr",
  publisher: "goPondr",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "goPondr",
    title: "Parent-led home learning for ages 4 to Grade 4 | goPondr",
    description:
      "A calm, concept-first learning guide for parents. Full curriculum across 8 subjects, adaptive daily plans, screen-light activities, printables, and progress you can actually understand.",
    images: [
      {
        url: "/images/hero-1.webp",
        width: 2534,
        height: 1351,
        alt: "goPondr — calm, concept-first learning for parents and children",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parent-led home learning for ages 4 to Grade 4 | goPondr",
    description:
      "A calm, concept-first learning guide for parents. Full curriculum across 8 subjects.",
    images: ["/images/hero-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${atkinson.variable} antialiased`}
    >
      <head />
      {/* Hero image preload is injected per-page by <RandomHeroBg> so the
          specific image the inline script picks gets fetchpriority=high
          during HTML parsing, not a wrong one. */}
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
