"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Link } from "next-view-transitions";
import {
  StatStrip, Testimonials, FadeIn, type ServiceCard,
} from "../components/sections/Shared"; 
import { img } from "../lib/utils";

const services = [
  { name: "Data & AI", href: "/data-ai", desc: "Annotation, datasets, model QA, and research support.", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800" },
  { name: "Real Estate Media", href: "/real-estate", desc: "Photo and video editing, virtual staging.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" },
  { name: "BPO & Creative", href: "/bpo", desc: "Virtual assistants, support teams, and high-volume creative production.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" },
];

export default function Home() {
  const reduce = useReducedMotion();
  
  // Custom, slow, buttery-smooth scroll function
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("capabilities");
    if (!target) return;
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1.2 seconds for a slow, premium glide
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // easeInOutCubic formula for smooth acceleration and deceleration
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
      {/* ── HERO SECTION (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col z-0">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden -z-10" style={{ background: "#120d07" }}>
          <motion.div
            animate={reduce ? {} : { x: [0, 60, -40, 20, 0], y: [0, 40, -30, 60, 0], scale: [1, 1.15, 0.95, 1.1, 1] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[15%] -left-[5%] w-[75%] h-[85%] rounded-full"
            style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.55) 0%, rgba(234,88,12,0.3) 40%, transparent 70%)", filter: "blur(80px)" }}
          />
          <motion.div
            animate={reduce ? {} : { x: [0, -80, 40, -20, 0], y: [0, -50, 70, -30, 0], scale: [1, 1.2, 0.9, 1.05, 1] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] -right-[10%] w-[65%] h-[90%] rounded-full"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.4) 0%, rgba(154,52,18,0.2) 40%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col h-full w-full px-6 lg:px-[8vw] pt-32 pb-12">
          
          <div className="max-w-5xl">
            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
            >
              Precision Work.<br />
              Remote Power.
            </motion.h1>
          </div>

          <div className="mt-auto flex flex-col md:flex-row justify-between md:items-end gap-8">
            
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-white max-w-md leading-relaxed tracking-tight"
              style={{ fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 300 }}
            >
              Annopett delivers Data, AI, Real Estate Media, BPO, and Creative services at scale.
            </motion.p>

            {/* Hover-Swap CTA with Custom Slow Scroll */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#capabilities" onClick={scrollToServices} className="group flex items-center gap-2 cursor-pointer">
                {/* Left Pill (Dark Base -> Orange Hover) */}
                <div
                  className="flex items-center h-[56px] px-7 text-white transition-all duration-500 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                  style={{
                    fontFamily: "var(--font-display), sans-serif", textTransform: "uppercase",
                    borderRadius: "12px", fontSize: "16px", fontWeight: 400, letterSpacing: "0.08em",
                  }}
                >
                  Discover our services
                </div>
                {/* Right Square (Orange Base -> Dark Hover) */}
                <div
                  className="flex items-center justify-center w-[56px] h-[56px] transition-all duration-500 ease-in-out bg-[#F97316] group-hover:bg-[#1a1209]"
                  style={{ borderRadius: "12px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-white">
                    <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES SECTION ── */}
      <section id="capabilities" className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display uppercase font-light tracking-tight text-[clamp(40px,5vw,64px)] text-dark leading-[0.95]">
              One team. Every capability.
            </h2>
            <p className="mt-6 text-[17px] font-light text-dark/70 font-sans leading-relaxed">
              From AI pipelines to real estate media. Remote, skilled, and ready.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.name} delay={0.08 * i}>
              <Link href={s.href} className="group flex flex-col h-full">
                <div
                  className="w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-black/5 mb-6 relative"
                  style={{ viewTransitionName: `service-image-${s.href.replace("/", "")}` }}
                >
                  <img
                    src={img(s.image)}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

                  <div className="absolute bottom-5 right-5 flex items-center justify-center w-11 h-11 rounded-full bg-white text-dark opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-in-out">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-display uppercase font-normal tracking-tight text-2xl text-dark group-hover:text-orange transition-colors duration-500 ease-in-out">
                  {s.name}
                </h3>
                <p className="font-sans font-light text-dark/60 mt-3 text-base leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── WHY ANNOPETT (Clean Sans-Serif Stats) ── */}
      <section className="px-6 lg:px-[8vw] py-28 bg-[#120d07] text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="font-display uppercase font-light tracking-tight text-[clamp(40px,4.5vw,60px)] leading-[0.95]">
                Built for scale.
              </h2>
            </FadeIn>
            
            <div className="mt-16 grid sm:grid-cols-2 gap-x-8 gap-y-14">
              <FadeIn delay={0.1}>
                <div className="font-sans font-semibold tracking-tighter text-[44px] text-orange mb-3 leading-none">50+</div>
                <div className="font-sans font-medium text-lg mb-1.5">Skilled Professionals</div>
                <div className="font-sans font-light text-white/60 text-sm leading-relaxed">Specialists across every service category.</div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="font-sans font-semibold tracking-tighter text-[44px] text-orange mb-3 leading-none">24hr</div>
                <div className="font-sans font-medium text-lg mb-1.5">Turnaround Time</div>
                <div className="font-sans font-light text-white/60 text-sm leading-relaxed">Most tasks completed next business day.</div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="font-sans font-semibold tracking-tighter text-[44px] text-orange mb-3 leading-none">4.9/5</div>
                <div className="font-sans font-medium text-lg mb-1.5">Client Rating</div>
                <div className="font-sans font-light text-white/60 text-sm leading-relaxed">Every deliverable reviewed for absolute quality.</div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="font-sans font-semibold tracking-tighter text-[44px] text-orange mb-3 leading-none">3 Days</div>
                <div className="font-sans font-medium text-lg mb-1.5">Rapid Onboarding</div>
                <div className="font-sans font-light text-white/60 text-sm leading-relaxed">Fully async, transparent, and documented workflow.</div>
              </FadeIn>
            </div>
          </div>
          
          <FadeIn delay={0.15}>
            <div className="relative rounded-[32px] overflow-hidden border border-white/10">
              <img
                src={img("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900")}
                alt="Team collaborating remotely"
                loading="lazy"
                className="h-[560px] w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d07] via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CLIENT LOGOS — static grid, no slideshow, sized up for visibility ── */}
      <section className="bg-white border-t border-b border-black/[0.06] px-6 lg:px-[8vw] py-24">
        <FadeIn>
          <p className="font-sans text-base sm:text-lg font-medium tracking-[0.1em] uppercase text-dark/45 text-center mb-14">
            Trusted by teams around the world
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
            {["AutoHDR","Sample Client","Client Co.","AI Startup","Media House","BPO Partner"].map((name) => (
              <span key={name} className="font-display uppercase text-xl sm:text-2xl tracking-tight text-dark/45 hover:text-dark/80 transition-colors duration-500">
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}