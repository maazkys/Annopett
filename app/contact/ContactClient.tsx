"use client";

// app/contact/ContactClient.tsx

import { useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "../../components/sections/Shared";

const inputCls =
  "w-full rounded-[12px] bg-black/5 border border-transparent px-5 py-4 text-[15px] text-dark font-sans transition focus:outline-none focus:border-orange/50 focus:ring-1 focus:ring-orange/50 placeholder-dark/40";

export function ContactClient() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const sectionPadding = useTransform(scrollY, [0, 80], ["0.75rem", "0rem"]);
  const borderRadius   = useTransform(scrollY, [0, 80], ["16px", "0px"]);
  
  return (
    <>
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

      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <div className="grid lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-40 self-start">
            <FadeIn>
              <div className="rounded-[32px] bg-white border border-black/5 p-10 md:p-14 shadow-2xl shadow-black/[0.02]">
                <h2 className="font-antonio uppercase tracking-tight text-[clamp(32px,4vw,48px)] text-dark leading-[0.95] mb-10" style={{ fontWeight: 300 }}>
                  Get in touch
                </h2>
                <div className="space-y-8">
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-2">Email</div>
                    <a href="mailto:hello@annopett.com" className="block text-lg font-sans font-light text-dark hover:text-orange transition-colors">
                      hello@annopett.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-2">Phone</div>
                    <div className="text-lg font-sans font-light text-dark">
                      +1 (415) 555 0142
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium font-sans mb-2">Hours</div>
                    <div className="text-lg font-sans font-light text-dark">
                      24/7 async, sync calls 9-6 PT
                    </div>
                  </div>
                </div>
                <div className="mt-12 rounded-[16px] bg-orange/5 border border-orange/10 px-6 py-5 text-[15px] font-sans font-light text-orange leading-relaxed">
                  Real estate clients: mention a free sample edit in your message.
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <form
              className="rounded-[32px] bg-white border border-black/5 p-10 md:p-14 shadow-2xl shadow-black/[0.02]"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <h2 className="font-antonio uppercase tracking-tight text-[clamp(32px,4vw,48px)] text-dark leading-[0.95] mb-10" style={{ fontWeight: 300 }}>
                Send a message
              </h2>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input className={inputCls} placeholder="Name" required />
                  <input className={inputCls} type="email" placeholder="Email" required />
                </div>
                <input className={inputCls} placeholder="Company" />
                <div className="relative">
                  <select className={`${inputCls} appearance-none`} defaultValue="" required>
                    <option value="" disabled>Service</option>
                    <option>Data & AI</option>
                    <option>Real Estate Media</option>
                    <option>BPO & VA</option>
                    <option>Creative & Media</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-dark/40">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <textarea className={`${inputCls} min-h-[160px] resize-y`} placeholder="Tell us about your project" required />
                
                <button
                  type="submit"
                  className="group flex items-center gap-[2px] w-full pt-4 cursor-pointer"
                >
                  <div
                    className="flex-1 flex items-center justify-center h-[56px] px-7 text-white transition-colors duration-300 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                    style={{
                      fontFamily: "var(--font-antonio), sans-serif", textTransform: "uppercase",
                      borderRadius: "12px", fontSize: "16px", fontWeight: 400, letterSpacing: "0.08em",
                    }}
                  >
                    {sent ? "Message sent" : "Send Message"}
                  </div>
                  <div
                    className="flex items-center justify-center w-[56px] h-[56px] shrink-0 transition-colors duration-300 ease-in-out bg-[#F97316] group-hover:bg-[#1a1209]"
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