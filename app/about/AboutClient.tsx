"use client";

// app/about/AboutClient.tsx

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const values = [
  { t: "Precision", i: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
  { t: "Reliability", i: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800" },
  { t: "Transparency", i: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800" },
  { t: "Growth", i: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800" },
];

export function AboutClient() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ── HERO (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col items-center justify-center text-center z-0">
        <div className="absolute inset-0 overflow-hidden -z-10" style={{ background: "#120d07" }}>
          <video
            src="/0703.webm"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.82) 30%, rgba(18,13,7,0.55) 100%)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 lg:px-[8vw] pt-32 pb-12 w-full max-w-5xl">
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-antonio uppercase text-orange tracking-[0.2em] text-sm mb-6"
          >
            Who We Are
          </motion.p>

          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
          >
            Bringing Life<br />
            To AI.
          </motion.h1>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-sans text-white/70 max-w-2xl leading-relaxed mx-auto"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 300 }}
          >
            Founded to give growing businesses access to enterprise-grade talent, without the overhead.
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
          <div className="mb-10">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
            >
              What we stand for.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
          {values.map((v, i) => (
            <FadeIn key={v.t} delay={i * 0.06}>
              <div className="group relative rounded-[20px] overflow-hidden h-[180px] sm:h-[220px] bg-black/5 border border-black/5">
                <img
                  src={img(v.i)}
                  alt={v.t}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d07]/85 via-[#120d07]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <h3
                    className="font-antonio uppercase tracking-tight text-white group-hover:text-orange transition-colors duration-500"
                    style={{ fontSize: "clamp(17px, 1.6vw, 22px)", fontWeight: 300 }}
                  >
                    {v.t}
                  </h3>
                </div>
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