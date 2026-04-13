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
  title: {
    default: "Parent-led home learning for ages 4 to Grade 4 | goWondr",
    template: "%s | goWondr",
  },
  description:
    "A calm, concept-first learning guide for parents. Full curriculum across 8 subjects, adaptive daily plans, screen-light activities, printables, and progress you can actually understand.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "goWondr",
    title: "Parent-led home learning for ages 4 to Grade 4 | goWondr",
    description:
      "A calm, concept-first learning guide for parents. Full curriculum across 8 subjects, adaptive daily plans, screen-light activities, printables, and progress you can actually understand.",
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
        <div className="h-8 bg-paper" aria-hidden="true" />
        <Footer />
      </body>
    </html>
  );
}
