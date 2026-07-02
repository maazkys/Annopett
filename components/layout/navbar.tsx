"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive         = (p: string) => pathname === p;
  const isServicesActive = ["/data-ai", "/real-estate", "/bpo"].includes(pathname ?? "");

  const linkStyle = {
    fontFamily: "'Antonio', sans-serif",
    fontSize: "17px", 
    fontWeight: 300,  
    textTransform: "uppercase",
    letterSpacing: "0.08em", 
  } as const;

  const allServices = [
    { label: "Data & AI",          href: "/data-ai",      img: "/AI.webp" },
    { label: "Real Estate Media",  href: "/real-estate",  img: "/Real Estate.webp" },
    { label: "BPO & Creative",     href: "/bpo",          img: "/BPO.webp" },
  ];

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav
        className="fixed inset-x-0 z-50 flex items-center justify-between pointer-events-none"
        style={{ top: "28px", padding: "0 8vw" }}
      >
        {/* Logo pill - Fixed Height to match Center Pill */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-3 transition-all duration-500"
          style={{
            height: "52px",
            padding: "0 20px",
            borderRadius: "14px",
            background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)" : "none",
          }}
        >
          <img src="/logo.webp" alt="Annopett Logo" style={{ height: "28px", width: "auto", display: "block" }} />
          <span
            style={{
              ...linkStyle,
              fontSize: "21px",
              fontWeight: 400,
              color: scrolled ? "#1A1209" : "#ffffff",
              letterSpacing: "0.1em",
              paddingTop: "2px", // Minor optical alignment
            }}
          >
            Annopett
          </span>
        </Link>

        {/* Center pill - Fixed Height to match Logo Pill */}
        <div
          className="pointer-events-auto hidden lg:flex items-center gap-1"
          style={{
            height: "52px",
            padding: "0 6px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {/* Home */}
          <Link href="/" style={{ ...linkStyle, padding: "8px 16px", borderRadius: "10px", color: isActive("/") ? "#1A1209" : "rgba(26,18,9,0.55)", background: isActive("/") ? "rgba(26,18,9,0.06)" : "transparent", transition: "all 0.2s", display: "block" }}
            onMouseEnter={e => { if (!isActive("/")) (e.currentTarget as HTMLElement).style.color = "#1A1209" }}
            onMouseLeave={e => { if (!isActive("/")) (e.currentTarget as HTMLElement).style.color = "rgba(26,18,9,0.55)" }}
          >
            Home
          </Link>

          {/* Services dropdown trigger */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              style={{
                ...linkStyle,
                padding: "8px 16px",
                borderRadius: "10px",
                color: isServicesActive ? "#1A1209" : "rgba(26,18,9,0.55)",
                background: isServicesActive ? "rgba(26,18,9,0.06)" : "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => { if (!isServicesActive) (e.currentTarget as HTMLElement).style.color = "#1A1209" }}
              onMouseLeave={e => { if (!isServicesActive) (e.currentTarget as HTMLElement).style.color = "rgba(26,18,9,0.55)" }}
            >
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 0.25s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Single dropdown panel */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 2, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute",
                    top: "calc(100% - 4px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "260px",
                    background: "rgba(255,255,255,0.96)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "16px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
                    padding: "8px",
                  }}
                >
                  {allServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        transition: "background 0.15s",
                        textDecoration: "none",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(26,18,9,0.05)" }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent" }}
                    >
                      <img src={s.img} alt="" style={{ width: "32px", height: "32px", borderRadius: "8px", objectFit: "cover" }} />
                      <span style={{ ...linkStyle, color: isActive(s.href) ? "#F97316" : "#1A1209", fontSize: "16px", fontWeight: 400 }}>
                        {s.label}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About */}
          <Link href="/about" style={{ ...linkStyle, padding: "8px 16px", borderRadius: "10px", color: isActive("/about") ? "#1A1209" : "rgba(26,18,9,0.55)", background: isActive("/about") ? "rgba(26,18,9,0.06)" : "transparent", transition: "all 0.2s", display: "block" }}
            onMouseEnter={e => { if (!isActive("/about")) (e.currentTarget as HTMLElement).style.color = "#1A1209" }}
            onMouseLeave={e => { if (!isActive("/about")) (e.currentTarget as HTMLElement).style.color = "rgba(26,18,9,0.55)" }}
          >
            About
          </Link>

          {/* Work With Us CTA */}
          <Link
            href="/contact"
            className="transition-all duration-250 group"
            style={{
              ...linkStyle,
              padding: "7px 20px",
              borderRadius: "10px",
              background: "#1A1209",
              color: "#ffffff",
              marginLeft: "4px",
              display: "block",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#ffffff";
              el.style.color = "#1A1209";
              el.style.boxShadow = "0 0 0 1px rgba(26,18,9,0.15)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1A1209";
              el.style.color = "#ffffff";
              el.style.boxShadow = "none";
            }}
          >
            Work With Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="pointer-events-auto flex lg:hidden items-center justify-center"
          style={{
            width: "44px", height: "44px",
            borderRadius: "10px",
            background: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            border: "none", cursor: "pointer",
          }}
        >
          <span style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} style={{ display: "block", width: "18px", height: "1.5px", background: scrolled ? "#1A1209" : "#fff", borderRadius: "2px" }} />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} style={{ display: "block", width: "18px", height: "1.5px", background: scrolled ? "#1A1209" : "#fff", borderRadius: "2px" }} />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} style={{ display: "block", width: "18px", height: "1.5px", background: scrolled ? "#1A1209" : "#fff", borderRadius: "2px" }} />
          </span>
        </button>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed", 
              top: "84px", 
              right: "8vw",
              left: "8vw",
              zIndex: 40,
              background: "rgba(26, 18, 9, 0.98)", 
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              display: "flex", 
              flexDirection: "column",
              padding: "24px 28px 32px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {/* Main Links */}
            <div className="flex flex-col gap-1 mb-6">
              {["Home", "About"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                >
                  <Link
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "'Antonio', sans-serif",
                      textTransform: "uppercase",
                      fontSize: "36px",
                      fontWeight: 300,
                      color: "#FAFAF8",
                      display: "block",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Services List */}
            <div className="flex flex-col gap-1 mb-8">
              {allServices.map((s, i) => (
                <motion.div
                  key={s.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.05 + 0.1, duration: 0.3 }}
                >
                  <Link
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: "'Antonio', sans-serif",
                      textTransform: "uppercase",
                      fontSize: "18px", 
                      fontWeight: 300,
                      color: "rgba(250,250,248,0.55)",
                      display: "block",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      textDecoration: "none",
                    }}
                  >
                    {s.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", textAlign: "center",
                  padding: "16px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  fontFamily: "'Antonio', sans-serif",
                  textTransform: "uppercase",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#ffffff",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                Work With Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}