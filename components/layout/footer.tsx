"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const linkStyle = {
  fontFamily: "'Antonio', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const services = [
  { label: "Data & AI", href: "/data-ai" },
  { label: "Real Estate Media", href: "/real-estate" },
  { label: "BPO & Creative", href: "/bpo" }, // Unified service link
];

const company = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Home", href: "/" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/annopett/" },
  { label: "Instagram", href: "https://instagram.com/annopett" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center font-sans text-[14px] font-light text-[rgba(250,250,248,0.5)] transition-colors duration-300 hover:text-white"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#120d07] text-[#FAFAF8]">
      {/* top gradient hairline, matches navbar/CTA accent */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#F97316,#EA580C)" }} />

      {/* ambient glow, consistent with hero/CTA sections */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[80%] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.16) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 px-6 lg:px-[8vw] pt-24 pb-10">
        {/* ── Top: big CTA line ── */}
        <motion.div {...fadeUp} className="flex flex-col gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="leading-[0.95] text-white"
            style={{ ...linkStyle, fontSize: "clamp(40px,6vw,84px)", fontWeight: 300 }}
          >
            Let&apos;s build<br />something great.
          </h2>

          <Link href="/contact" className="group flex w-fit items-center gap-2 cursor-pointer">
            <div
              className="flex items-center h-[56px] px-7 text-white transition-all duration-500 ease-in-out bg-[#F97316] group-hover:bg-[#1a1209]"
              style={{ ...linkStyle, borderRadius: "12px", fontSize: "16px", fontWeight: 400 }}
            >
              Work With Us
            </div>
            <div
              className="flex items-center justify-center w-[56px] h-[56px] transition-all duration-500 ease-in-out bg-[#1a1209] text-white group-hover:bg-[#F97316]"
              style={{ borderRadius: "12px" }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </motion.div>

        {/* ── Middle: brand + link columns ── */}
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <motion.div {...fadeUp}>
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/logo.webp" alt="Annopett" style={{ height: "28px", width: "auto" }} />
              <span style={{ ...linkStyle, fontSize: "22px", fontWeight: 400, color: "#fff" }}>
                Annopett
              </span>
            </Link>
            <p className="mt-5 max-w-xs font-sans text-[14px] font-light leading-relaxed text-[rgba(250,250,248,0.45)]">
              Precision work, remote power. Data &amp; AI, Real Estate Media, BPO, and Creative services — delivered at scale.
            </p>
            <div className="mt-7 flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[rgba(250,250,248,0.4)] transition-colors duration-300 hover:text-orange"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="mb-5 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(250,250,248,0.3)]">
              Services
            </div>
            <ul className="flex flex-col gap-3.5">
              {services.map((s) => (
                <li key={s.href}><FooterLink href={s.href}>{s.label}</FooterLink></li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="mb-5 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(250,250,248,0.3)]">
              Company
            </div>
            <ul className="flex flex-col gap-3.5">
              {company.map((c) => (
                <li key={c.href}><FooterLink href={c.href}>{c.label}</FooterLink></li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <div className="mb-5 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(250,250,248,0.3)]">
              Contact
            </div>
            <ul className="flex flex-col gap-3.5 font-sans text-[14px] font-light text-[rgba(250,250,248,0.5)]">
              <li>max@annopett.com</li>
              <li>+92 318 1950895</li>
              <li>24hr response</li>
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 font-sans text-[11px] text-[rgba(250,250,248,0.3)] mt-8">
          <span>© {new Date().getFullYear()} Annopett. All rights reserved.</span>
          <span>Remote-first. Quality-obsessed.</span>
        </div>
      </div>
    </footer>
  );
}