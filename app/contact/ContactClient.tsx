"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FadeIn } from "../../components/sections/Shared";

const inputCls =
  "w-full rounded-[12px] bg-black/5 border border-transparent px-5 py-4 text-[15px] text-dark font-sans transition focus:outline-none focus:border-orange/50 focus:ring-1 focus:ring-orange/50 placeholder-dark/40";

const serviceOptions = [
  "Data & AI",
  "Real Estate Media",
  "BPO & Creative",
];

const shootTypes = [
  {
    id: "standard",
    label: "Standard",
    desc: "HDR cleanup, color correction, basic retouching",
  },
  {
    id: "advanced",
    label: "Advanced",
    desc: "Standard + sky replacement, lawn enhancement, window pulls",
  },
  {
    id: "luxury",
    label: "Luxury",
    desc: "Advanced + virtual staging, twilight conversion, full QA",
  },
];

export function ContactClient() {
  const [sent, setSent] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedShootType, setSelectedShootType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const sectionPadding = useTransform(scrollY, [0, 80], ["0.75rem", "0rem"]);
  const borderRadius   = useTransform(scrollY, [0, 80], ["16px", "0px"]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset RE-specific fields when switching away from Real Estate Media
  useEffect(() => {
    if (selectedService !== "Real Estate Media") {
      setSelectedShootType("");
    }
  }, [selectedService]);

  return (
    <>
      {/* ── HERO ── */}
      <motion.section className="bg-white" style={{ padding: sectionPadding }}>
        <motion.div
          className="relative h-[65vh] min-h-[500px] overflow-hidden flex flex-col items-center justify-center text-center z-0"
          style={{ borderRadius }}
        >
          <div className="absolute inset-0 overflow-hidden -z-10" style={{ background: "#120d07" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, 60, -40, 20, 0], y: [0, 40, -30, 60, 0], scale: [1, 1.15, 0.95, 1.1, 1] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[15%] -left-[5%] w-[60%] h-[70%] rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, transparent 70%)", filter: "blur(80px)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, -80, 40, -20, 0], y: [0, -50, 70, -30, 0], scale: [1, 1.2, 0.9, 1.05, 1] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[40%] -right-[10%] w-[55%] h-[80%] rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.18) 0%, transparent 70%)", filter: "blur(90px)" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 lg:px-[8vw] pt-20 w-full max-w-5xl">
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-antonio uppercase text-orange tracking-[0.2em] text-sm mb-6"
            >
              Reach Out
            </motion.p>

            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
            >
              Let's Work<br />
              Together.
            </motion.h1>

            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 font-sans text-white/70 max-w-2xl leading-relaxed mx-auto"
              style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 300 }}
            >
              We respond within 24 hours.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* ── BODY ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">

          {/* ── LEFT: CONTACT INFO ── */}
          <div className="lg:sticky lg:top-40 self-start">
            <FadeIn>
              <div className="rounded-[32px] bg-white border border-black/5 p-10 md:p-14 shadow-2xl shadow-black/[0.02]">
                <h2
                  className="font-antonio uppercase tracking-tight text-dark leading-[0.95] mb-10"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
                >
                  Get in touch
                </h2>
                <div className="space-y-8">
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-2">Email</div>
                    <a href="mailto:hello@annopett.com" className="block text-lg font-sans font-light text-dark hover:text-orange transition-colors duration-300">
                      hello@annopett.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-2">Phone</div>
                    <div className="text-lg font-sans font-light text-dark">+1 (415) 555 0142</div>
                  </div>
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-2">Hours</div>
                    <div className="text-lg font-sans font-light text-dark">24/7 async, sync calls 9-6 PT</div>
                  </div>
                </div>
                <div className="mt-12 rounded-[16px] bg-orange/5 border border-orange/10 px-6 py-5 text-[15px] font-sans font-light text-orange leading-relaxed">
                  Real estate clients: mention a free sample edit in your message.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: FORM ── */}
          <FadeIn delay={0.1}>
            <form
              className="rounded-[32px] bg-white border border-black/5 p-10 md:p-14 shadow-2xl shadow-black/[0.02]"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <h2
                className="font-antonio uppercase tracking-tight text-dark leading-[0.95] mb-10"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
              >
                Send a message
              </h2>

              <div className="flex flex-col">

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <input className={inputCls} placeholder="Name" required />
                  <input className={inputCls} type="email" placeholder="Email" required />
                </div>

                {/* Company */}
                <input className={`${inputCls} mb-5`} placeholder="Company" />

                {/* Service dropdown */}
                <div className="relative mb-5" ref={dropdownRef}>
                  <div
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`${inputCls} cursor-pointer flex justify-between items-center select-none ${
                      !selectedService ? "text-dark/40" : "text-dark"
                    }`}
                    style={dropdownOpen ? { borderColor: "rgba(249,115,22,0.5)" } : {}}
                  >
                    <span>{selectedService || "Select a Service"}</span>
                    <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute z-50 w-full mt-2 bg-white border border-black/5 rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden"
                      >
                        {serviceOptions.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => { setSelectedService(opt); setDropdownOpen(false); }}
                            className={`px-5 py-4 cursor-pointer font-sans text-[15px] transition-colors ${
                              selectedService === opt ? "bg-orange/10 text-orange" : "text-dark hover:bg-black/5"
                            }`}
                          >
                            {opt}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── REAL ESTATE ONLY FIELDS ── */}
                <AnimatePresence>
                  {selectedService === "Real Estate Media" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-5 pb-5">

                        {/* Shoots per month */}
                        <input
                          className={inputCls}
                          type="number"
                          min="1"
                          placeholder="Estimated shoots per month"
                          required
                        />

                        {/* Shoot type selector */}
                        <div>
                          <p className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-3">
                            Shoot Type
                          </p>
                          <div className="grid grid-cols-3 gap-3">
                            {shootTypes.map((type) => {
                              const active = selectedShootType === type.id;
                              return (
                                <button
                                  key={type.id}
                                  type="button"
                                  onClick={() => setSelectedShootType(type.id)}
                                  className="relative text-left rounded-[14px] p-4 border transition-all duration-300 ease-in-out focus:outline-none"
                                  style={{
                                    background: active ? "rgba(249,115,22,0.06)" : "rgba(0,0,0,0.03)",
                                    borderColor: active ? "rgba(249,115,22,0.45)" : "transparent",
                                    boxShadow: active ? "0 0 0 1px rgba(249,115,22,0.2)" : "none",
                                  }}
                                >
                                  {/* Active dot indicator */}
                                  <div className="flex items-center gap-2 mb-2">
                                    <div
                                      className="w-2 h-2 rounded-full transition-all duration-300"
                                      style={{
                                        background: active ? "#F97316" : "rgba(26,18,9,0.2)",
                                        transform: active ? "scale(1.3)" : "scale(1)",
                                      }}
                                    />
                                    <span
                                      className="font-antonio uppercase tracking-wide transition-colors duration-300"
                                      style={{
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        color: active ? "#F97316" : "rgba(26,18,9,0.75)",
                                      }}
                                    >
                                      {type.label}
                                    </span>
                                  </div>
                                  <p
                                    className="font-sans font-light leading-snug transition-colors duration-300"
                                    style={{
                                      fontSize: "12px",
                                      color: active ? "rgba(249,115,22,0.7)" : "rgba(26,18,9,0.4)",
                                    }}
                                  >
                                    {type.desc}
                                  </p>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message */}
                <textarea
                  className={`${inputCls} min-h-[160px] resize-y mb-8`}
                  placeholder="Tell us about your project"
                  required
                />

                {/* Submit */}
                <button type="submit" className="group flex items-center gap-2 w-full cursor-pointer">
                  <div
                    className="flex-1 flex items-center justify-center h-[56px] px-7 text-white transition-all duration-500 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                    style={{
                      fontFamily: "var(--font-antonio), sans-serif",
                      textTransform: "uppercase",
                      borderRadius: "12px",
                      fontSize: "16px",
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {sent ? "Message Sent" : "Send Message"}
                  </div>
                  <div
                    className="flex items-center justify-center w-[56px] h-[56px] shrink-0 transition-all duration-500 ease-in-out bg-[#F97316] group-hover:bg-[#1a1209]"
                    style={{ borderRadius: "12px" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-white">
                      <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}