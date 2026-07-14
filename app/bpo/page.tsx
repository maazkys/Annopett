// app/bpo/page.tsx SERVER COMPONENT (no "use client")

import type { Metadata } from "next";
import { BPOClient } from "./BPOClient";

export const metadata: Metadata = {
  title: "BPO & VA Annopett",
  description: "Skilled remote operations, support, lead gen, and bookkeeping.",
  openGraph: {
    title: "BPO & VA Annopett",
    description: "Your operations. Our team.",
    images: [
      {
        url: "/BPOmain.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/BPOmain.webp"],
  },
};

export default function BPOPage() {
  return <BPOClient />;
}