// app/about/page.tsx — SERVER COMPONENT (no "use client")

import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Annopett",
  description: "Remote team. Real impact. Annopett is a remote-first services company.",
  openGraph: {
    title: "About — Annopett",
    description: "Remote team. Real impact.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}