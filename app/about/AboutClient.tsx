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
          {/* Fast Background Blobs */}
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
            Remote Team.<br />
            Real Impact.
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
                src={img("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600")}
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

      {/* ── BIG STAT SECTION ── */}
      {/* <section className="relative h-[600px] overflow-hidden flex items-center justify-center text-center px-6 border-t border-black/5">
        <img
          src={img("https://images.unsplash.com/photo-1531482615713-2afd69097998?w=2000")}
          alt="Collaborative workspace"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#120d07]/85" />
        <div className="relative z-10">
          <FadeIn>
            <div className="font-antonio text-orange leading-none tracking-tight" style={{ fontSize: "clamp(100px, 15vw, 200px)", fontWeight: 300 }}>
              50+
            </div>
            <div className="mt-4 font-antonio uppercase tracking-widest text-xl sm:text-2xl text-white">
              Skilled Remote Professionals
            </div>
          </FadeIn>
        </div>
      </section> */}

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