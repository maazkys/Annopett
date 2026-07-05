"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "next-view-transitions";
import {
  StatStrip, Testimonials, FadeIn, type ServiceCard,
} from "../components/sections/Shared"; 
import { img } from "../lib/utils";

const services = [
  { name: "Data & AI", href: "/data-ai", desc: "Annotation, datasets, model QA, and research support.", image: "/AI.webp" },
  { name: "Real Estate Media", href: "/real-estate", desc: "Photo and video editing, virtual staging.", image: "/Real Estate.webp" },
  { name: "BPO & Creative", href: "/bpo", desc: "Virtual assistants, support teams, and high-volume creative production.", image: "/BPO.webp" },
];

const clientLogos = [
  { name: "Hat Fella Productions", src: "/HFP.webp" },
  { name: "RIPTIDE MEDIA", src: "/Riptide.webp" },
  { name: "KILN Media", src: "/kiln.webp" },
  { name: "CD HOME", src: "/cdhome.webp" },
  { name: "ONE27 Media", src: "/one27.webp" },
  { name: "ARTHOME PHOTO", src: "/arthome.webp" },
  { name: "Next Creative", src: "/nextcreative.webp" },
  { name: "Proviz Real Estate Media", src: "/proviz.webp" },
  { name: "V1 Real Estate Photography and Video", src: "/bpo3.webp" },
  { name: "DeWulf", src: "/bpo1.webp" },
  { name: "Claru AI", src: "/bpo2.webp" },
  { name: "Moonvalley", src: "/ai10.webp" },
  { name: "AutoHDR", src: "/ai2.webp" },
  { name: "Sahara AI", src: "/ai4.webp" },
  { name: "Christ Wash Systems", src: "/ai3.webp" },
  { name: "Trutec", src: "/ai5.webp" },
  { name: "Ultiself", src: "/ai1.webp" },
  { name: "Foneme App", src: "/ai6.webp" },
  { name: "Annosuppo", src: "/ai7.webp" },
  { name: "Dent Reality", src: "/ai8.webp" },
  { name: "Gro Health App", src: "/ai9.webp" },
];

// Lives for the lifetime of the JS module in memory: reset to false on a genuine
// browser load/refresh, but stays true across client-side (next/link) navigation,
// so the intro only plays on first visit or a hard refresh — never on in-site nav.
let hasShownIntro = false;

export default function Home() {
  const reduce = useReducedMotion();

  // ── Intro video gate: only plays on first visit / hard refresh,
  // not when navigating here from elsewhere on the site.
  const [introDone, setIntroDone] = useState(() => hasShownIntro);
  const introVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hasShownIntro) return;
    hasShownIntro = true;

    const fallback = setTimeout(() => setIntroDone(true), 4500);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (!introDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow || "";
    }
    return () => {
      document.body.style.overflow = prevOverflow || "";
    };
  }, [introDone]);
  
  // Custom, slow, buttery-smooth scroll function
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      {/* ── INTRO VIDEO GATE ── */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[100] bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <video
              ref={introVideoRef}
              autoPlay
              muted
              playsInline
              onEnded={() => setIntroDone(true)}
              className="w-full h-full object-cover md:object-[75%_50%] lg:object-right"
            >
              <source src="/9 16.webm" media="(max-width: 767px)" />
              <source src="/Pc Intro New.webm" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col z-0">
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
            style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.72) 20%, rgba(18,13,7,0.45) 100%)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col h-full w-full px-6 lg:px-[8vw] pt-32 pb-12">
          
          <div className="max-w-5xl">
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: introDone ? 0 : 4.0 }}
              className="font-antonio uppercase text-orange tracking-[0.2em] text-sm mb-6"
            >
              Bringing Life to AI
            </motion.p>

            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: introDone ? 0 : 4.2 }}
              className="font-display uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(52px, 8.5vw, 118px)", fontWeight: 300 }}
            >
              Delivering Human &<br />
              Artificial Intelligence
            </motion.h1>
          </div>

          <div className="mt-auto flex flex-col md:flex-row justify-between md:items-end gap-8 mb-8 md:mb-0">
            
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: introDone ? 0.2 : 4.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-white max-w-md leading-relaxed tracking-tight"
              style={{ fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 300 }}
            >
              Annopett delivers Data, AI, Real Estate Media, BPO, and Creative services at scale.
            </motion.p>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: introDone ? 0.35 : 4.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#capabilities" onClick={scrollToServices} className="group flex items-center gap-2 cursor-pointer">
                <div
                  className="flex items-center h-[56px] px-7 text-white transition-all duration-500 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                  style={{
                    fontFamily: "var(--font-display), sans-serif", textTransform: "uppercase",
                    borderRadius: "12px", fontSize: "16px", fontWeight: 400, letterSpacing: "0.08em",
                  }}
                >
                  Discover our services
                </div>
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

                  <div className="absolute bottom-5 right-5 flex items-center justify-center w-11 h-11 rounded-full bg-white text-dark opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-in-out shadow-lg lg:shadow-none">
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

      {/* ── BUILT FOR SCALE SECTION ── */}
      <section className="px-6 lg:px-[8vw] py-28 bg-[#120d07] text-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-display uppercase tracking-tight text-[clamp(40px,4.5vw,60px)] leading-[0.95] text-white">
                Built for <span className="text-orange">Scale.</span>
              </h2>
              <p className="mt-6 text-[16px] font-light text-white/60 font-sans leading-relaxed max-w-md mx-auto">
                People, processes, and technology working together to deliver exceptional results at every scale.
              </p>
            </div>
          </FadeIn>
          
          <div className="mt-16 grid sm:grid-cols-2 gap-4 w-full">
            
            {/* Card 1: Team Members */}
            <FadeIn delay={0.1}>
              <div className="bg-[#1a1209] border border-white/5 rounded-[24px] p-6 flex gap-4 items-start h-full">
                <div className="w-14 h-14 rounded-full border border-orange/20 bg-orange/5 flex items-center justify-center shrink-0 text-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-orange text-[32px] font-sans font-semibold leading-none tracking-tighter mb-1.5">200+</span>
                  <span className="text-white text-[15px] font-medium mb-1.5 leading-snug">Team Members</span>
                  <span className="text-white/50 text-[13px] leading-relaxed font-light">Skilled professionals across multiple domains.</span>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Service Specialties */}
            <FadeIn delay={0.2}>
              <div className="bg-[#1a1209] border border-white/5 rounded-[24px] p-6 flex gap-4 items-start h-full">
                <div className="w-14 h-14 rounded-full border border-orange/20 bg-orange/5 flex items-center justify-center shrink-0 text-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-orange text-[32px] font-sans font-semibold leading-none tracking-tighter mb-1.5">15+</span>
                  <span className="text-white text-[15px] font-medium mb-1.5 leading-snug">Service Specialties</span>
                  <span className="text-white/50 text-[13px] leading-relaxed font-light">A wide range of services to meet diverse business needs.</span>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Production Capacity */}
            <FadeIn delay={0.3}>
              <div className="bg-[#1a1209] border border-white/5 rounded-[24px] p-6 flex gap-4 items-start h-full">
                <div className="w-14 h-14 rounded-full border border-orange/20 bg-orange/5 flex items-center justify-center shrink-0 text-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-orange text-[32px] font-sans font-semibold leading-none tracking-tighter mb-1.5">24/7</span>
                  <span className="text-white text-[15px] font-medium mb-1.5 leading-snug">Production Capacity</span>
                  <span className="text-white/50 text-[13px] leading-relaxed font-light">Round-the-clock operations to keep your business moving.</span>
                </div>
              </div>
            </FadeIn>

            {/* Card 4: On-Time Delivery */}
            <FadeIn delay={0.4}>
              <div className="bg-[#1a1209] border border-white/5 rounded-[24px] p-6 flex gap-4 items-start h-full">
                <div className="w-14 h-14 rounded-full border border-orange/20 bg-orange/5 flex items-center justify-center shrink-0 text-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-orange text-[32px] font-sans font-semibold leading-none tracking-tighter mb-1.5">99%</span>
                  <span className="text-white text-[15px] font-medium mb-1.5 leading-snug">On-Time Delivery</span>
                  <span className="text-white/50 text-[13px] leading-relaxed font-light">Committed to deadlines with consistency you can trust.</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
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