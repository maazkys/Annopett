"use client";

// app/components/ScrollToTop.tsx
//
// Listens to pathname changes and instantly resets scroll to top on every
// navigation. Place this once inside your root layout — it handles ALL pages
// so you don't need per-page useEffect calls anywhere.
//
// IMPORTANT: this must reset scroll through Lenis, not the native
// window.scrollTo. Lenis keeps its own internal record of scroll position;
// if we move the real scroll behind its back, that internal position goes
// stale and corrupts any lenis.scrollTo() call made right after on the same
// page (e.g. the hash-based scroll on the contact page), landing far from
// the intended target.
//
// It also skips resetting when the destination URL has a hash (e.g.
// /contact#contact-form) — in that case another component owns scrolling to
// that specific target, and resetting to top here would just fight it.

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) return;

    // Defer by one frame so the new page's DOM is mounted
    // before we reset scroll, otherwise some browsers ignore it.
    const id = requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, lenis]); // re-runs every time the route changes

  return null; // renders nothing
}