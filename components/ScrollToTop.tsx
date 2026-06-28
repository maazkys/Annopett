"use client";

// app/components/ScrollToTop.tsx
//
// Listens to pathname changes and instantly resets scroll to top on every
// navigation. Place this once inside your root layout — it handles ALL pages
// so you don't need per-page useEffect calls anywhere.
//
// Uses "instant" (not "smooth") so the view transition shared-element
// animation sees the destination page already at y=0 before it paints.

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Defer by one microtask so the new page's DOM is mounted
    // before we reset scroll, otherwise some browsers ignore it.
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]); // re-runs every time the route changes

  return null; // renders nothing
}