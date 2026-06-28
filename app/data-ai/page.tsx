// app/data-ai/page.tsx — SERVER COMPONENT (no "use client")

import type { Metadata } from "next";
import { DataAIClient } from "./DataAiClient";

export const metadata: Metadata = {
  title: "Data & AI — Annopett",
  description: "Annotation, datasets, research support, and model QA at scale.",
  openGraph: {
    title: "Data & AI — Annopett",
    description: "Powering AI with precision data.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&q=80",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&q=80"],
  },
};

export default function DataAIPage() {
  return <DataAIClient />;
}