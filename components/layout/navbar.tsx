"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GradientCTA } from "../sections/Shared";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to toggle the white background and text colors
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared classes for nav links
  const linkBase = "transition-colors font-medium";
  const linkScrolled = "text-dark/70 hover:text-orange";
  const linkTop = "text-white/80 hover:text-white";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 px-6 lg:px-[8vw] h-20 md:h-24 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className={`flex items-center gap-2 font-display font-semibold text-xl transition-colors duration-300 ${
          scrolled ? "text-dark" : "text-white"
        }`}
      >
        <span
          className="inline-block size-6 md:size-7 rounded-full shrink-0"
          style={{ background: "linear-gradient(135deg,#F97316,#EA580C)" }}
        />
        Annopett
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 text-sm">
        <Link href="/" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <button className={`flex items-center gap-1.5 ${linkBase} ${scrolled ? linkScrolled : linkTop}`}>
            Services
            <svg 
              className="w-3.5 h-3.5 opacity-70 transition-transform duration-300 group-hover:-rotate-180" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu (Hidden by default, shows on hover) */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="w-56 bg-white rounded-2xl shadow-xl border border-border p-2 flex flex-col gap-1 relative before:absolute before:-top-2 before:inset-x-0 before:h-4">
              <Link href="/data-ai" className="px-4 py-2.5 text-[13px] font-medium text-dark/80 hover:text-orange hover:bg-orange/5 rounded-xl transition-colors">
                Data & AI
              </Link>
              <Link href="/real-estate" className="px-4 py-2.5 text-[13px] font-medium text-dark/80 hover:text-orange hover:bg-orange/5 rounded-xl transition-colors">
                Real Estate Media
              </Link>
              <Link href="/bpo" className="px-4 py-2.5 text-[13px] font-medium text-dark/80 hover:text-orange hover:bg-orange/5 rounded-xl transition-colors">
                BPO & VA
              </Link>
              <Link href="/creative" className="px-4 py-2.5 text-[13px] font-medium text-dark/80 hover:text-orange hover:bg-orange/5 rounded-xl transition-colors">
                Creative & Media
              </Link>
            </div>
          </div>
        </div>

        <Link href="/about" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>
          About
        </Link>
        <Link href="/contact" className={`${linkBase} ${scrolled ? linkScrolled : linkTop}`}>
          Contact
        </Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        <GradientCTA to="/contact">Get Started</GradientCTA>
      </div>
    </nav>
  );
}