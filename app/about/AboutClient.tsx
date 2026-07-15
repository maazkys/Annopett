"use client";

// app/about/AboutClient.tsx

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const values = [
  { 
    t: "Precision", 
    desc: "Every workflow and deliverable is meticulously executed to meet the highest enterprise standards.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    desc: "We ensure consistent, round-the-clock outcomes you can depend on, no matter the scale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  { 
    t: "Transparency", 
    desc: "Clear communication and visible processes mean you always know exactly what is happening.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  { 
    t: "Growth", 
    desc: "We partner with you to build scalable operations that naturally adapt as your business expands.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* ── WHAT WE STAND FOR (2x2 Grid) ── */}
      <section className="bg-[#120d07] px-6 lg:px-[8vw] py-28 relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-antonio uppercase text-white leading-[0.95] tracking-tight" style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}>
                What we <span className="text-orange">stand for.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4 w-full">
            {values.map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.1}>
                <div className="bg-[#1a1209] border border-white/5 rounded-[24px] p-6 flex gap-4 items-start h-full transition-all duration-300 hover:border-orange/20">
                  <div className="w-14 h-14 rounded-full border border-orange/20 bg-orange/5 flex items-center justify-center shrink-0 text-orange">
                    {v.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[24px] font-antonio uppercase font-light tracking-tight mb-2 leading-none">{v.t}</span>
                    <span className="text-white/50 text-[14px] leading-relaxed font-light">{v.desc}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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