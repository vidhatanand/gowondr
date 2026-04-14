import type { Metadata } from "next";
import { Newsreader, Atkinson_Hyperlegible } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
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
        url: "/images/hero-1.jpg",
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
    images: ["/images/hero-1.jpg"],
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
      className={`${newsreader.variable} ${atkinson.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
