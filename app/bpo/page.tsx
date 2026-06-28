// app/bpo/page.tsx — SERVER COMPONENT (no "use client")

import type { Metadata } from "next";
import { BPOClient } from "./BPOClient";

export const metadata: Metadata = {
  title: "BPO & VA — Annopett",
  description: "Skilled remote operations, support, lead gen, and bookkeeping.",
  openGraph: {
    title: "BPO & VA — Annopett",
    description: "Your operations. Our team.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&q=80",
      },
    ],
  },
};

export default function BPOPage() {
  return <BPOClient />;
}