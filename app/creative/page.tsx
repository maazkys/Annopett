// app/creative/page.tsx — SERVER COMPONENT (no "use client")

import type { Metadata } from "next";
import { CreativeClient } from "./CreativeClient";

export const metadata: Metadata = {
  title: "Creative & Media — Annopett",
  description: "Design that works hard. Brand systems, social content, and creative production.",
  openGraph: {
    title: "Creative & Media — Annopett",
    description: "Design that works hard.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&q=80",
      },
    ],
  },
};

export default function CreativePage() {
  return <CreativeClient />;
}