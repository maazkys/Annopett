"use client";

// app/about/AboutClient.tsx

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const values = [
  { 
    t: "Precision", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    )
  },
  { 
    t: "Reliability", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  { 
    t: "Transparency", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  { 
    t: "Growth", 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
];

export function AboutClient() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ── HERO (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col items-center justify-center text-center z-0">
        <div className="absolute inset-0 overflow-hidden -z-10" style={{ background: "#120d07" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover md:object-[75%_50%] lg:object-right"
          >
            <source src="/Loop.webm" media="(max-width: 767px)" />
            <source src="/0703.webm" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.82) 30%, rgba(18,13,7,0.55) 100%)" }}
          />
        </div>

        {/* Added mb-24 md:mb-0 to push the container up on mobile */}
        <div className="relative z-10 flex flex-col items-center px-6 lg:px-[8vw] pt-32 pb-12 w-full max-w-5xl mb-24 md:mb-0">
          
          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
          >
            WHERE PEOPLE & AI<br />
            WORK TOGETHER
          </motion.h1>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-sans text-white/70 max-w-2xl leading-relaxed mx-auto"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 300 }}
          >
            We build high-performing remote teams and AI solutions that help businesses scale efficiently
          </motion.p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
            >
              Our Story.
            </h2>
            <p className="mt-6 text-[17px] font-light text-dark/60 font-sans leading-relaxed">
              Precision over volume, from day one.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="w-full aspect-[16/9] rounded-[28px] overflow-hidden bg-black/5 mb-12">
              <img
                src={img("/globe.webp")}
                alt="Our team"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-lg font-light text-dark/70 font-sans leading-relaxed">
              <p>
                Annopett started with a simple observation. Talented people are everywhere. Great companies struggle to reach them.
              </p>
              <p>
                We built a remote-first team trained on enterprise standards. Real workflows. Real accountability. No middle layers.
              </p>
              <p>
                Today we work with companies in real estate, AI, ops, and creative. Every engagement starts with one principle. Precision over volume.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VALUES (compact single-row strip) ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-24 relative">
        <FadeIn>
          <div className="mb-10 text-center sm:text-left">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
            >
              What we stand for.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.t} delay={i * 0.06}>
              <div className="group flex flex-col justify-between rounded-[20px] p-6 sm:p-8 h-[160px] sm:h-[200px] bg-white border border-black/5 hover:border-orange/30 hover:shadow-[0_10px_40px_rgba(249,115,22,0.06)] transition-all duration-500">
                <div className="text-dark/30 group-hover:text-orange transition-colors duration-500">
                  {v.icon}
                </div>
                <h3
                  className="font-antonio uppercase tracking-tight text-dark group-hover:text-orange transition-colors duration-500"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 300 }}
                >
                  {v.t}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="bg-[#120d07] px-6 lg:px-[8vw] py-32 text-center text-white border-t border-white/10">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <p
              className="font-antonio uppercase tracking-tight text-white leading-tight mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300 }}
            >
              "We don't sell hours.<br />
              <span className="text-orange">We sell outcomes you can stake your week on.</span>"
            </p>
            <div className="font-sans font-medium tracking-widest text-sm uppercase text-white/40">
              — Annopett Founders
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}