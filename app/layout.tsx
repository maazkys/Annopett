// app/layout.tsx
//
// Root layout. ScrollToTop is mounted here once and handles every page
// navigation automatically — no per-page useEffect needed anywhere else.

import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { ScrollToTop } from "../components/ScrollToTop";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-antonio",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Annopett — Precision Work. Remote Power.",
  description:
    "Annopett delivers Data & AI, Real Estate Media, BPO, and Creative services at scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ViewTransitions wrapper enables the shared-element page transitions
    <ViewTransitions>
      <html lang="en" className={antonio.variable} suppressHydrationWarning>
        <body className="bg-[#fafaf8] antialiased">
          {/*
            ScrollToTop fires on every pathname change.
            It must be inside <body> so it has access to the window object,
            and inside ViewTransitions so it runs after the transition completes.
          */}
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}