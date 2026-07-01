"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const capabilities = [
  { name: "Image Annotation", desc: "Bounding boxes, polygons, and high-precision segmentation masks.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800" },
  { name: "Text Labelling", desc: "NER, intent classification, sentiment analysis, and context tagging.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { name: "Video Annotation", desc: "Frame-level tracking, action recognition, and temporal tagging.", image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800" },
  { name: "Audio Transcription", desc: "Timestamped multi-speaker transcripts and linguistic tagging.", image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800" },
  { name: "Dataset Creation", desc: "Sourcing, cleaning, deduplication, and balancing at scale.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
  { name: "AI Research Support", desc: "Literature reviews, structured summarisation, and data prep.", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800" },
  { name: "AI Model Testing", desc: "Regression test suites, edge case probing, and hallucination checks.", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800" },
  { name: "Website Testing", desc: "End-to-end QA, functional validation, and cross-browser performance testing.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { name: "Website & Full-Stack Development", desc: "Custom front-end builds and full-stack engineering, from database to deployment.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800" },
];

const clientLogos = [
  { name: "Hat Fella Productions", src: "/HFP.png" },
  { name: "RIPTIDE MEDIA", src: "/riptide.png" },
  { name: "KILN Media", src: "/kiln.jpg" },
  { name: "CD HOME", src: "/cdhome.png" },
  { name: "ONE27 Media", src: "/one27.png" },
  { name: "ARTHOME PHOTO", src: "/arthome.png" },
  { name: "Next Creative", src: "/nextcreative.png" },
  { name: "Proviz Real Estate Media", src: "/proviz.png" },
];

const steps = [
  { num: "01", t: "Send Requirements", d: "Share your taxonomy, edge cases, and volume expectations." },
  { num: "02", t: "Team Assigned",     d: "We spin up a dedicated, trained pod specific to your data." },
  { num: "03", t: "Work Delivered",    d: "Batches are annotated, reviewed, and exported to your format." },
  { num: "04", t: "You Approve",       d: "Feedback loops are integrated directly into our QA process." }
];

export function DataAIClient() {
  const reduce = useReducedMotion();

  // Custom smooth scroll function
  const scrollToCapabilities = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("capabilities");
    if (!target) return;
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200; 
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = progress < duration / 2 
        ? 4 * Math.pow(progress / duration, 3) 
        : 1 - Math.pow(-2 * progress / duration + 2, 3) / 2;
        
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <>
      {/* ── HERO (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col z-0">
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* View Transition Image */}
          <img
            src={img("https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=2000")}
            alt="Data and AI abstraction"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ viewTransitionName: "service-image-data-ai" }}
          />
          {/* Dark overlay fading in smoothly */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.92) 30%, rgba(249,115,22,0.15) 100%)" }}
          />
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

        <div className="relative z-10 flex flex-col h-full w-full px-6 lg:px-[8vw] pt-32 pb-12">
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-antonio uppercase text-orange tracking-[0.2em] text-sm mb-6"
          >
            Data & AI Operations
          </motion.p>

          <div className="max-w-4xl">
            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
            >
              Powering AI<br />
              And The Web<br />
              With Precision.
            </motion.h1>
          </div>

          <div className="mt-auto flex flex-col md:flex-row justify-between md:items-end gap-8">
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-white/70 max-w-md leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 300 }}
            >
              Annotation, datasets, research support, and model QA handled by specialized human teams.
            </motion.p>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#capabilities" onClick={scrollToCapabilities} className="group flex items-center  gap-2 cursor-pointer">
                <div
                  className="flex items-center h-[56px] px-7 text-white transition-colors duration-300 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                  style={{
                    fontFamily: "var(--font-antonio), sans-serif", textTransform: "uppercase",
                    borderRadius: "12px", fontSize: "16px", fontWeight: 400, letterSpacing: "0.08em",
                  }}
                >
                  Start a Project
                </div>
                <div
                  className="flex items-center justify-center w-[56px] h-[56px] transition-colors duration-300 ease-in-out bg-[#F97316] group-hover:bg-[#1a1209]"
                  style={{ borderRadius: "12px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-white">
                    <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES — Grid Layout matching the modern aesthetic ── */}
      <section id="capabilities" className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <FadeIn>
          <div className="mb-16">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
            >
              Our Capabilities.
            </h2>
            <p className="mt-6 text-[17px] font-light text-dark/70 max-w-lg font-sans leading-relaxed">
              Complex pipelines require precise human intervention. We handle the heavy lifting.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <FadeIn key={c.name} delay={(i % 3) * 0.08}>
              <div className="group flex flex-col h-full p-4 rounded-[28px] bg-white border border-black/5 hover:border-orange/30 hover:shadow-2xl hover:shadow-orange/10 transition-all duration-300">
                <div className="w-full h-44 rounded-[20px] overflow-hidden bg-black/5 mb-5 relative">
                  <img src={img(c.image)} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="flex flex-col flex-grow px-2 pb-2">
                  <h3 className="font-antonio uppercase tracking-tight text-2xl text-dark group-hover:text-orange transition-colors">
                    {c.name}
                  </h3>
                  <p className="font-sans font-light text-dark/60 mt-2 text-[15px] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS — Numbered Card Grid ── */}
      <section className="px-6 lg:px-[8vw] py-28 bg-[#120d07] text-white">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2
              className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
            >
              How it works.
            </h2>
            <p className="mt-6 text-[17px] font-light text-white/50 font-sans leading-relaxed">
              A streamlined process designed to integrate directly into your workflow.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={s.t} delay={0.08 * i}>
              <div className="relative flex flex-col h-full rounded-[28px] p-8 bg-white/[0.03] border border-white/[0.08] hover:border-orange/30 hover:bg-white/[0.05] transition-all duration-300">
                <span
                  className="font-antonio text-orange leading-none mb-6"
                  style={{ fontSize: "clamp(32px, 3.5vw, 44px)", fontWeight: 300 }}
                >
                  {s.num}
                </span>
                <div
                  className="font-antonio uppercase text-white tracking-tight leading-none mb-3"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 300 }}
                >
                  {s.t}
                </div>
                <p className="font-sans font-light text-white/45 text-[15px] leading-relaxed">
                  {s.d}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-[1px] bg-white/10" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <div className="h-[480px] overflow-hidden">
        <img
          src={img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000")}
          alt="Data and statistics"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── OUR CLIENTS ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-32 border-t border-black/5">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-dark/40 font-medium mb-4">Trusted By</p>
            <h2 className="font-antonio uppercase text-dark leading-[0.95] tracking-tight text-[clamp(40px,5vw,64px)]" style={{ fontWeight: 300 }}>
              Our Clients
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-36 h-36 md:w-44 md:h-44 bg-white border border-black/5 rounded-[24px] flex items-center justify-center p-6 transition-all duration-300 ease-out hover:border-orange/40 hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}