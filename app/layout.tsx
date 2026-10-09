import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileBookBar } from "@/components/mobile-book-bar";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurel-dental.demo"),
  title: {
    default:
      "AUREL DENTAL — Premium Dental & Cosmetic Clinic in Noida (Concept Demo)",
    template: "%s — AUREL DENTAL",
  },
  description:
    "A concept website for AUREL DENTAL, a fictional premium dental and cosmetic clinic in Noida. Explore treatments, meet the demo team and try the demo appointment form.",
  keywords: [
    "dental clinic Noida",
    "cosmetic dentistry",
    "teeth cleaning",
    "clear aligners",
    "teeth whitening",
    "premium dental clinic",
    "demo website",
  ],
  openGraph: {
    type: "website",
    title: "AUREL DENTAL — Confidence Begins With Your Smile.",
    description:
      "A premium dental and cosmetic clinic concept site built by Agentiva. Treatments, team profiles and a demo booking flow.",
    siteName: "AUREL DENTAL",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-patient.jpg",
        width: 1500,
        height: 1000,
        alt: "A smiling patient in a bright, modern dental clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREL DENTAL — Confidence Begins With Your Smile.",
    description:
      "A premium dental and cosmetic clinic concept site built by Agentiva.",
  },
};

export const viewport: Viewport = {
  themeColor: "#183d35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSerif.variable} ${manrope.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-[0.75rem] focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-ivory"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <div className="pb-[4.5rem] lg:pb-0">
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        <MobileBookBar />
        <div className="grain" aria-hidden="true" />
        <Analytics />
      </body>
    </html>
  );
}
