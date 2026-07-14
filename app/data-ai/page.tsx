// app/data ai/page.tsx SERVER COMPONENT (no "use client")

import type { Metadata } from "next";
import { DataAIClient } from "./DataAiClient";

export const metadata: Metadata = {
  title: "Data & AI Annopett",
  description: "Annotation, datasets, research support, and model QA at scale.",
  openGraph: {
    title: "Data & AI Annopett",
    description: "Powering AI with precision data.",
    images: [
      {
        url: "/AImain.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/AImain.webp"],
  },
};

export default function DataAIPage() {
  return <DataAIClient />;
}