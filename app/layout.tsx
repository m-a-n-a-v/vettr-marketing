import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VETTR - Vet Your Stocks Before You Invest",
  description:
    "AI-powered due diligence for the stocks you care about. VETTR Scores, Red Flag Detection, Executive Pedigree tracking, and real-time alerts — all in one app.",
  keywords: [
    "stock research",
    "stock analysis",
    "due diligence",
    "VETTR score",
    "red flag detection",
    "executive pedigree",
    "investment research",
  ],
  openGraph: {
    title: "VETTR - Vet Your Stocks Before You Invest",
    description:
      "AI-powered due diligence for the stocks you care about. VETTR Scores, Red Flag Detection, Executive Pedigree tracking, and real-time alerts.",
    type: "website",
    locale: "en_US",
    siteName: "VETTR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VETTR - Vet Your Stocks Before You Invest",
    description:
      "AI-powered due diligence for the stocks you care about.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-vettr-navy text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
