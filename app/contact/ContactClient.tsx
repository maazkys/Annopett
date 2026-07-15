"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useLenis } from "lenis/react";
import { FadeIn } from "../../components/sections/Shared";

const inputCls =
  "w-full rounded-[12px] bg-black/5 border border-transparent px-5 py-4 text-[15px] text-dark font-sans transition focus:outline-none focus:border-orange/50 focus:ring-1 focus:ring-orange/50 placeholder-dark/40 disabled:opacity-50 disabled:cursor-not-allowed";

const serviceOptions = [
  "Data & AI",
  "Real Estate Media",
  "BPO & Creative",
];

const shootTypes = [
  { id: "standard", label: "Standard" },
  { id: "advanced", label: "Advanced" },
  { id: "luxury", label: "Luxury" },
];

function ContactContent() {
  const searchParams = useSearchParams();
  
  // Extract URL parameters if they exist
  const initialService = searchParams.get("service") || "";
  const initialShootType = searchParams.get("shootType")?.toLowerCase() || "";
  const initialShoots = searchParams.get("shoots") || "";

  // Parse the incoming ?shoots= param ("20%2B" / "20+" / a number) into a 1-20 slider value
  const parseInitialShoots = (val: string) => {
    if (!val) return 5;
    if (val.toLowerCase().includes("20+")) return 20;
    const n = parseInt(val, 10);
    if (Number.isNaN(n)) return 5;
    return Math.min(20, Math.max(1, n));
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedShootType, setSelectedShootType] = useState(initialShootType);
  const [shootsCount, setShootsCount] = useState(parseInitialShoots(initialShoots));
  const isMaxShoots = shootsCount >= 20;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const reduce = useReducedMotion();
  const lenis = useLenis();

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
      setShootsCount(5);
    }
  }, [selectedService]);

  // Scroll to the form when arriving via a #contact-form link.
  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash !== "#contact-form") return;

    let attempts = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById("contact-form");
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -100 });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }
      attempts++;
      if (attempts < 20) setTimeout(tryScroll, 100);
    };

    const initial = setTimeout(tryScroll, 100);
    return () => { cancelled = true; clearTimeout(initial); };
  }, [lenis]);

  return (
    <>
      {/* ── HERO (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden flex flex-col items-center justify-center text-center z-0">
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
      </section>

      {/* ── BODY ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative scroll-mt-20">
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
              ref={formRef}
              id="contact-form"
              className="rounded-[32px] bg-white border border-black/5 p-10 md:p-14 shadow-2xl shadow-black/[0.02] scroll-mt-24 relative"
              onSubmit={async (e) => { 
                e.preventDefault(); 
                setError(""); 

                if (!selectedService) {
                  setError("Please select a service before submitting.");
                  return;
                }

                if (selectedService === "Real Estate Media" && !selectedShootType) {
                  setError("Please select a Shoot Type for Real Estate Media.");
                  return;
                }

                setFormState("submitting");
                const formData = new FormData(e.currentTarget);
                
                const payload = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  company: formData.get("company"),
                  service: selectedService,
                  shoots: selectedService === "Real Estate Media" ? (isMaxShoots ? "20+" : shootsCount) : "N/A",
                  shootType: selectedService === "Real Estate Media" ? selectedShootType : "N/A",
                  message: formData.get("message"),
                };

                try {
                  const APP_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

                  if (!APP_SCRIPT_URL) {
                    console.error("Missing Google Apps Script URL in environment variables");
                    setError("Configuration error. Please try again later.");
                    setFormState("idle");
                    return;
                  }

                  await fetch(APP_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors", // Crucial to prevent Google Apps Script CORS redirect throwing an error
                    headers: {
                      "Content-Type": "text/plain;charset=utf-8", 
                    },
                    body: JSON.stringify(payload),
                  });

                  // If fetch doesn't throw a network error, we assume success
                  setFormState("success");
                  
                  // Auto-reset form after animation completes
                  setTimeout(() => {
                    setFormState("idle");
                    formRef.current?.reset();
                    setSelectedService("");
                    setSelectedShootType("");
                    setShootsCount(5);
                  }, 3500);

                } catch (err) {
                  setError("Network error. Please try again.");
                  setFormState("idle");
                }
              }}
            >
              
              {/* ── SUCCESS OVERLAY ── */}
              <AnimatePresence>
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white rounded-[32px]"
                  >
                    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="mb-6">
                      <motion.circle 
                        cx="50" cy="50" r="45" 
                        stroke="#F97316" strokeWidth="4" 
                        initial={{ pathLength: 0, opacity: 0 }} 
                        animate={{ pathLength: 1, opacity: 1 }} 
                        transition={{ duration: 0.6, ease: "easeInOut" }} 
                      />
                      <motion.path 
                        d="M30 50L45 65L70 35" 
                        stroke="#F97316" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" 
                        initial={{ pathLength: 0 }} 
                        animate={{ pathLength: 1 }} 
                        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }} 
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1 }}
                      className="font-antonio uppercase tracking-widest text-[28px] text-orange"
                    >
                      Message Sent
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── ORIGINAL FORM FIELDS ── */}
              <div className={`transition-opacity duration-500 ${formState === "success" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <h2
                  className="font-antonio uppercase tracking-tight text-dark leading-[0.95] mb-10"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
                >
                  Send a message
                </h2>

                <div className="flex flex-col">

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <input name="name" disabled={formState === "submitting"} className={inputCls} placeholder="Name" required />
                    <input name="email" disabled={formState === "submitting"} className={inputCls} type="email" placeholder="Email" required />
                  </div>

                  {/* Company */}
                  <input name="company" disabled={formState === "submitting"} className={`${inputCls} mb-5`} placeholder="Company" required />

                  {/* Service dropdown */}
                  <div className="relative mb-5" ref={dropdownRef}>
                    <div
                      onClick={() => {
                        if(formState === "submitting") return;
                        setDropdownOpen(!dropdownOpen);
                        setError("");
                      }}
                      className={`${inputCls} flex justify-between items-center select-none ${
                        formState === "submitting" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      } ${!selectedService ? "text-dark/40" : "text-dark"}`}
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
                        <div className={`flex flex-col gap-5 pb-5 ${formState === "submitting" ? "opacity-50 pointer-events-none" : ""}`}>

                          {/* Shoots per day (slider) */}
                          <div className="rounded-[14px] bg-black/[0.03] px-5 py-5">
                            <div className="flex justify-between font-sans font-medium text-sm mb-4">
                              <span className="text-dark/50">Estimated shoots per day</span>
                              <span className="text-orange font-bold">{isMaxShoots ? "20+" : shootsCount}</span>
                            </div>

                            <div className="relative h-2 bg-black/10 rounded-full">
                              <div
                                className="absolute top-0 left-0 h-full bg-orange rounded-full pointer-events-none"
                                style={{ width: `${(shootsCount / 20) * 100}%` }}
                              />
                              <input
                                type="range"
                                min="1"
                                max="20"
                                step="1"
                                value={shootsCount}
                                onChange={(e) => setShootsCount(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                aria-label="Estimated shoots per day"
                              />
                              <div
                                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-orange rounded-full pointer-events-none shadow-md"
                                style={{ left: `calc(${(shootsCount / 20) * 100}% - 10px)` }}
                              />
                            </div>

                            <input type="hidden" name="shoots" value={isMaxShoots ? "20+" : shootsCount} />
                          </div>

                          {/* Shoot type selector */}
                          <div>
                            <p className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-3">
                              Shoot Type
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {shootTypes.map((type) => {
                                const active = selectedShootType === type.id;
                                return (
                                  <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => {
                                      setSelectedShootType(type.id);
                                      setError("");
                                    }}
                                    className="relative text-left rounded-[14px] p-3.5 border transition-all duration-300 ease-in-out focus:outline-none"
                                    style={{
                                      background: active ? "rgba(249,115,22,0.06)" : "rgba(0,0,0,0.03)",
                                      borderColor: active ? "rgba(249,115,22,0.45)" : "transparent",
                                      boxShadow: active ? "0 0 0 1px rgba(249,115,22,0.2)" : "none",
                                    }}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div
                                        className="w-2 h-2 rounded-full shrink-0 transition-all duration-300"
                                        style={{
                                          background: active ? "#F97316" : "rgba(26,18,9,0.2)",
                                          transform: active ? "scale(1.3)" : "scale(1)",
                                        }}
                                      />
                                      <span
                                        className="font-antonio uppercase tracking-wide transition-colors duration-300 truncate"
                                        style={{
                                          fontSize: "13px",
                                          fontWeight: 400,
                                          color: active ? "#F97316" : "rgba(26,18,9,0.75)",
                                        }}
                                      >
                                        {type.label}
                                      </span>
                                    </div>
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
                    name="message"
                    disabled={formState === "submitting"}
                    className={`${inputCls} min-h-[160px] resize-y mb-8`}
                    placeholder="Tell us about your project"
                    required
                  />

                  {/* Validation Error Message */}
                  {error && (
                    <div className="mb-4 text-[#ef4444] font-sans text-[14px] text-center font-medium bg-red-50 py-3 rounded-[12px] border border-red-100">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={formState === "submitting"}
                    className={`group flex items-center gap-2 w-full transition-opacity duration-300 ${formState === "submitting" ? "opacity-90 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div
                      className={`flex-1 flex items-center justify-center h-[56px] px-7 text-white transition-all duration-500 ease-in-out ${formState === "submitting" ? "bg-[#1a1209]" : "bg-[#1a1209] group-hover:bg-[#F97316]"}`}
                      style={{
                        fontFamily: "var(--font-antonio), sans-serif",
                        textTransform: "uppercase",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {formState === "submitting" ? "Sending..." : "Send Message"}
                    </div>
                    <div
                      className={`flex items-center justify-center w-[56px] h-[56px] shrink-0 transition-all duration-500 ease-in-out ${formState === "submitting" ? "bg-[#F97316]" : "bg-[#F97316] group-hover:bg-[#1a1209]"}`}
                      style={{ borderRadius: "12px" }}
                    >
                      {formState === "submitting" ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-white">
                          <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </button>

                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

// Next.js Suspense boundary wrapper required when utilizing useSearchParams()
export function ContactClient() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-[#FAFAF8]" />}>
      <ContactContent />
    </Suspense>
  );
}