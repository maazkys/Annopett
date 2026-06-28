"use client";

// app/real-estate/RealEstateClient.tsx

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "next-view-transitions";
import { FadeIn, Testimonials } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const services = [
  {
    name: "Photo Editing",
    href: "/contact",
    desc: "AutoHDR QA, color correction, sky replacement, and exposure cleanup on every frame.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
  },
  {
    name: "Video Editing",
    href: "/contact",
    desc: "Walkthroughs, drone reels, and cinematic listing edits delivered fast.",
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800",
  },
  {
    name: "VA Services",
    href: "/contact",
    desc: "MLS uploads, CRM updates, and listing coordination handled remotely.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
  },
];

const problems = [
  "Blown highlights from AutoHDR",
  "Crooked verticals and warped lines",
  "Inconsistent color across shots",
  "Missing finishing touches",
];

const solutions = [
  "Manual exposure recovery on every shot",
  "Vertical and lens correction by hand",
  "Color matched across the full set",
  "Final QA before delivery",
];

const sop = [
  { num: "01", t: "Intake",       d: "Receive RAW or AutoHDR set with shot notes" },
  { num: "02", t: "Sort & Cull",  d: "Pick the strongest frame per room" },
  { num: "03", t: "Correct",      d: "Exposure, white balance, verticals" },
  { num: "04", t: "Enhance",      d: "Sky, lawn, windows, ambient pulls" },
  { num: "05", t: "QA Pass",      d: "Senior editor reviews every image" },
  { num: "06", t: "Deliver",      d: "Web-ready and print-ready exports" },
];

const clients = ["Casa Group", "Pacific Realty", "Aurora Listings", "Northwind", "Acme Realty", "Mosaic"];

export function RealEstateClient() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const sectionPadding = useTransform(scrollY, [0, 80], ["0.75rem", "0rem"]);
  const borderRadius   = useTransform(scrollY, [0, 80], ["16px", "0px"]);

  return (
    <>
      {/* ── HERO ── */}
      <motion.section className="bg-white" style={{ padding: sectionPadding }}>
        <motion.div
          className="relative h-[calc(100vh-1.5rem)] min-h-[640px] overflow-hidden flex flex-col z-0"
          style={{ borderRadius }}
        >
          <div className="absolute inset-0 overflow-hidden -z-10">
            {/* Hero image with View Transition */}
            <img
              src={img("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000")}
              alt="Real estate interior"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ viewTransitionName: "service-image-real-estate" }}
            />
            {/* Dark overlay — Now fades in smoothly to allow the image transition to shine first */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.88) 40%, rgba(249,115,22,0.25) 100%)" }}
            />
            {/* Blob 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, 60, -40, 20, 0], y: [0, 40, -30, 60, 0], scale: [1, 1.15, 0.95, 1.1, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[15%] -left-[5%] w-[60%] h-[70%] rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, transparent 70%)", filter: "blur(80px)" }}
            />
            {/* Blob 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, -80, 40, -20, 0], y: [0, -50, 70, -30, 0], scale: [1, 1.2, 0.9, 1.05, 1] }}
              transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[40%] -right-[10%] w-[55%] h-[80%] rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.18) 0%, transparent 70%)", filter: "blur(90px)" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full w-full px-6 lg:px-[8vw] pt-32 pb-12">

            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-antonio uppercase text-orange tracking-[0.2em] text-sm mb-6"
            >
              Real Estate Media
            </motion.p>

            <div className="max-w-4xl">
              <motion.h1
                initial={reduce ? {} : { opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(52px, 8.5vw, 110px)", fontWeight: 300 }}
              >
                We Perfect<br />
                What AI<br />
                Starts.
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
                Your AutoHDR images deserve a human eye. We QA, correct, and complete every shot.
              </motion.p>

              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/contact" className="group flex items-center gap-[2px] cursor-pointer">
                  <div
                    className="flex items-center h-[56px] px-7 text-white transition-all duration-300 ease-in-out bg-[#1a1209] group-hover:bg-[#F97316]"
                    style={{
                      fontFamily: "var(--font-antonio), sans-serif",
                      textTransform: "uppercase",
                      borderRadius: "12px",
                      fontSize: "16px",
                      fontWeight: 400,
                      letterSpacing: "0.08em",
                    }}
                  >
                    Get a Free Sample Edit
                  </div>
                  <div
                    className="flex items-center justify-center w-[56px] h-[56px] transition-all duration-300 ease-in-out bg-[#F97316] group-hover:bg-[#1a1209]"
                    style={{ borderRadius: "12px" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-white">
                      <path d="M5 2.5L9.5 7L5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── PROBLEM / SOLUTION — Realined to match Hero Padding ── */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#fafaf8] px-6 lg:pl-[8vw] lg:pr-16 py-20 lg:py-28">
          <FadeIn>
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 300 }}
            >
              AI leaves gaps.
            </h2>
            <div className="mt-10 flex flex-col gap-5">
              {problems.map((p) => (
                <div key={p} className="flex gap-4 items-start">
                  <span className="mt-0.5 shrink-0 font-antonio text-orange text-lg" style={{ fontWeight: 300 }}>×</span>
                  <span className="font-sans font-light text-dark/65 text-[15px] leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="px-6 lg:pr-[8vw] lg:pl-16 py-20 lg:py-28" style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}>
          <FadeIn>
            <h2
              className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 300 }}
            >
              We fill them.
            </h2>
            <div className="mt-10 flex flex-col gap-5">
              {solutions.map((s) => (
                <div key={s} className="flex gap-4 items-start">
                  <span className="mt-0.5 shrink-0 font-antonio text-white text-lg" style={{ fontWeight: 300 }}>✓</span>
                  <span className="font-sans font-light text-white/80 text-[15px] leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES — sticky left layout ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] pt-28 pb-12">
        <div className="grid lg:grid-cols-[36%_1fr] gap-12 lg:gap-16 items-start">

          <div className="lg:sticky lg:top-40 self-start pb-12">
            <FadeIn>
              <h2
                className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
              >
                What we<br />handle.
              </h2>
              <p className="mt-6 text-[17px] font-light text-dark/60 max-w-xs font-sans leading-relaxed">
                Three services. One remote team. Consistent quality on every delivery.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-16 pb-20">
            {services.map((s, i) => (
              <FadeIn key={s.name} delay={0.08 * i}>
                <Link href={s.href} className="group flex flex-col w-full">
                  <div className="w-full aspect-[16/10] rounded-[28px] overflow-hidden bg-black/5 mb-6 relative">
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
                  <h3
                    className="font-antonio uppercase text-dark group-hover:text-orange transition-colors duration-500 ease-in-out tracking-tight"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 300 }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-sans font-light text-dark/60 mt-3 text-base sm:text-lg leading-relaxed max-w-lg">
                    {s.desc}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOP — Redesigned as a sleek 3-column grid ── */}
      <section className="px-6 lg:px-[8vw] py-28 bg-[#120d07] text-white">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2
              className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
            >
              Our editing standard.
            </h2>
            <p className="mt-6 text-[17px] font-light text-white/50 font-sans leading-relaxed">
              Every image goes through the same six steps. No shortcuts.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {sop.map((s, i) => (
            <FadeIn key={s.t} delay={0.06 * i}>
              <div className="flex flex-col border-t border-white/10 pt-8 relative group cursor-default">
                {/* Hover line effect */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-orange transition-all duration-500 ease-out group-hover:w-full" />
                
                <span
                  className="font-antonio text-orange mb-6 leading-none"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300 }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-antonio uppercase text-white tracking-tight leading-none mb-3"
                  style={{ fontSize: "24px", fontWeight: 300 }}
                >
                  {s.t}
                </h3>
                <p className="font-sans font-light text-white/50 text-base leading-relaxed">
                  {s.d}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <div className="h-[480px] overflow-hidden">
        <img
          src={img("https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=2000")}
          alt="Interior architecture"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials
        heading="Clients. Results."
        items={[
          {
            quote: "Our listing turnaround went from 3 days to overnight. The image quality is consistently excellent.",
            name: "Sara Mendes",
            company: "Casa Group",
          },
          {
            quote: "Annopett caught issues our in-house editors missed for months. Pure quality.",
            name: "Tom Whitaker",
            company: "Pacific Realty",
          },
          {
            quote: "Free sample edit sold us in 24 hours. Been a client for two years.",
            name: "Lena Park",
            company: "Aurora Listings",
          },
        ]}
      />
    </>
  );
}