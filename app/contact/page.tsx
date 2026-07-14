// app/contact/page.tsx

import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Annopett",
  description: "Let's work together. We respond within 24 hours.",
  openGraph: {
    title: "Contact Annopett",
    description: "Let's work together.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}