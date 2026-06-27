import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Annopett",
  description: "Let's work together. We respond within 24 hours.",
  openGraph: {
    title: "Contact — Annopett",
    description: "Let's work together.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}