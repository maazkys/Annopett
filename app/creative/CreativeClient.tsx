"use client";

// app/creative/CreativeClient.tsx

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeIn, Testimonials } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const capabilities = [
  { name: "Graphic Design", desc: "Comprehensive brand systems, compelling pitch decks, performance ads, and premium packaging.", image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800" },
  { name: "Social Media", desc: "High-retention reels, carousel designs, and full-scale content calendars delivered at pace.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800" },
];

export function CreativeClient() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const sectionPadding = useTransform(scrollY, [0, 80], ["0.75rem", "0rem"]);
  const borderRadius   = useTransform(scrollY, [0, 80], ["16px", "0px"]);

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
      {/* ── HERO ── */}
      <motion.section className="bg-white" style={{ padding: sectionPadding }}>
        <motion.div
          className="relative h-[calc(100vh-1.5rem)] min-h-[640px] overflow-hidden flex flex-col z-0"
          style={{ borderRadius }}
        >
          <div className="absolute inset-0 overflow-hidden -z-10">
            {/* View Transition Image */}
            <img
              src={img("https://images.unsplash.com/photo-1561070791-2526d30994b5?w=2000")}
              alt="Creative design workspace"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ viewTransitionName: "service-image-creative" }}
            />
            {/* Dark overlay fading in smoothly */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.85) 30%, rgba(249,115,22,0.2) 100%)" }}
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
              Creative & Media
            </motion.p>

            <div className="max-w-4xl">
              <motion.h1
                initial={reduce ? {} : { opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
              >
                Design That<br />
                Works Hard.
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
                Brand systems, social content, and high-volume creative production.
              </motion.p>

              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <a href="#capabilities" onClick={scrollToCapabilities} className="group flex items-center gap-[2px] cursor-pointer">
                  <div
                    className="flex items-center h-[56px] px-7 text-white transition-colors duration-300 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                    style={{
                      fontFamily: "var(--font-antonio), sans-serif", textTransform: "uppercase",
                      borderRadius: "12px", fontSize: "16px", fontWeight: 400, letterSpacing: "0.08em",
                    }}
                  >
                    Get Creative With Us
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
        </motion.div>
      </motion.section>

      {/* ── CAPABILITIES — Large 2-Column Grid ── */}
      <section id="capabilities" className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <FadeIn>
          <div className="mb-16">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
            >
              What we create.
            </h2>
            <p className="mt-6 text-[17px] font-light text-dark/70 max-w-lg font-sans leading-relaxed">
              From one-off assets to a fully-managed creative team, we design to convert.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.1}>
              <div className="group relative rounded-[32px] overflow-hidden h-[480px] bg-black/5 border border-black/5">
                <img 
                  src={img(c.image)} 
                  alt={c.name} 
                  loading="lazy" 
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d07]/90 via-[#120d07]/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <h3 
                    className="font-antonio uppercase tracking-tight text-white group-hover:text-orange transition-colors duration-500"
                    style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 300 }}
                  >
                    {c.name}
                  </h3>
                  <p className="mt-3 text-[16px] font-light font-sans text-white/70 max-w-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── OUR WORK / PORTFOLIO GRID ── */}
      <section className="bg-[#120d07] px-6 lg:px-[8vw] py-28 text-white">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2
                className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
              >
                Our Work.
              </h2>
              <p className="mt-6 text-[16px] font-light text-white/50 max-w-xs font-sans leading-relaxed">
                A selection of our recent projects.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeIn key={i} delay={0.06 * i}>
              <div className="rounded-[24px] bg-white/5 border border-white/10 h-64 flex items-center justify-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <span className="font-antonio uppercase text-[15px] tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                  Portfolio coming soon
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <div className="h-[480px] overflow-hidden">
        <img
          src={img("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2000")}
          alt="Creative team workspace"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />
    </>
  );
}