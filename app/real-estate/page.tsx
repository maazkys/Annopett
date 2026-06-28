// app/real-estate/page.tsx  — SERVER COMPONENT (no "use client")
// Keeps metadata here, delegates all client logic to RealEstateClient

import type { Metadata } from "next";
import { RealEstateClient } from "./RealEstateClient";

export const metadata: Metadata = {
  title: "Real Estate Media — Annopett",
  description: "We perfect what AI starts. Photo QA, video editing, and virtual assistant support for real estate teams.",
  openGraph: {
    title: "Real Estate Media — Annopett",
    description: "AutoHDR cleanup, photo and video editing, and VA support for real estate.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&q=80",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&q=80"],
  },
};

export default function RealEstatePage() {
  return <RealEstateClient />;
}