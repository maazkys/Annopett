"use client";

import { useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "next-view-transitions";
import { FadeIn, Testimonials } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

const editingTiers = [
  {
    name: "Standard",
    price: 1.25,
    features: [
      "Perspective Correction",
      "Colour Correction (Furniture, Floor, Walls)",
      "TV Screen Blackout/Replacement",
      "Basic Removal (Photographer/Tripod Reflection)",
      "Virtual Twilight with AutoHDR",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms"
    ]
  },
  {
    name: "Advanced",
    price: 1.75,
    features: [
      "Perspective Correction",
      "Colour Correction (Furniture, Floor, Walls)",
      "TV Screen Blackout/Replacement",
      "Realistic Fireplace Fire addition",
      "Removal of Unwanted Objects (Reflections, Wires, Vehicles, Trash Cans)",
      "Virtual Twilight with AutoHDR",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms"
    ]
  },
  {
    name: "Luxury",
    price: 2.50,
    features: [
      "Image sorting for AutoHDR Credit Optimization",
      "Perspective Correction",
      "Customised Lighting & Colour Enhancement",
      "Colour Correction (Furniture, Floor, Walls)",
      "Deep Window Pull",
      "TV Screen Blackout/Replacement",
      "Realistic Fireplace Fire addition",
      "Removal of Unwanted Objects (Reflections, Wires, Vehicles, Trash Cans)",
      "Virtual Twilight with AutoHDR",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms"
    ]
  }
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

const portfolioImages = [
  {
    name: "Luxury Exterior",
    before: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1600&auto=format&fit=crop&q=100",
  },
  {
    name: "Interior Twilight",
    before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=100",
  },
  {
    name: "Color Correction",
    before: "https://images.unsplash.com/photo-1600607687920-4e2a09cf15b4?w=1600&auto=format&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1600&auto=format&fit=crop&q=100",
  }
];

// Isolated component so each stacked image has its own independent slider state
function BeforeAfterSlider({ data }: { data: typeof portfolioImages[0] }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-black border border-white/10 select-none group">
      {/* AFTER (Base) */}
      <img src={data.after} alt="Final Edit" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      
      {/* BEFORE (Overlay with clip-path) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)` }}
      >
        <img src={data.before} alt="Raw AutoHDR" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-orange shadow-[0_0_20px_rgba(249,115,22,0.8)] pointer-events-none z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange rounded-full flex items-center justify-center shadow-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M15 18L21 12L15 6M9 6L3 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg font-antonio uppercase tracking-widest text-sm text-white/90 pointer-events-none">
        Raw HDR
      </div>
      <div className="absolute top-6 right-6 bg-orange/90 backdrop-blur-md px-4 py-2 rounded-lg font-antonio uppercase tracking-widest text-sm text-white pointer-events-none">
        {data.name}
      </div>

      {/* Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
    </div>
  );
}

export function RealEstateClient() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Volume Estimator State
  const [volume, setVolume] = useState(30);
  const [selectedTier, setSelectedTier] = useState(0);

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
            <img
              src={img("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000")}
              alt="Real estate interior"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ viewTransitionName: "service-image-real-estate" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom right, rgba(18,13,7,0.88) 40%, rgba(249,115,22,0.25) 100%)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, 60, -40, 20, 0], y: [0, 40, -30, 60, 0], scale: [1, 1.15, 0.95, 1.1, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[15%] -left-[5%] w-[60%] h-[70%] rounded-full"
              style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, transparent 70%)", filter: "blur(80px)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, -80, 40, -20, 0], y: [0, -50, 70, -30, 0], scale: [1, 1.2, 0.9, 1.05, 1] }}
              transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
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
                Your HDR images deserve a human eye. We QA, correct, and complete every shot.
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

      {/* ── PROBLEM / SOLUTION ── */}
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

      {/* ── BEFORE / AFTER STICKY PORTFOLIO ── */}
      <section className="bg-[#120d07] px-6 lg:px-[8vw] pt-28 pb-12 relative text-white">
        <div className="grid lg:grid-cols-[36%_1fr] gap-12 lg:gap-16 items-start">
          
          <div className="lg:sticky lg:top-40 self-start pb-12">
            <FadeIn>
              <h2
                className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
              >
                See the<br />Difference.
              </h2>
              <p className="mt-6 text-[17px] font-light text-white/60 max-w-xs font-sans leading-relaxed">
                Scroll to view our recent work. Drag the sliders to compare the raw AutoHDR with our final delivery.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-16 pb-20">
            {portfolioImages.map((imgData, i) => (
              <FadeIn key={imgData.name} delay={0.05}>
                <BeforeAfterSlider data={imgData} />
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── EDITING TIERS ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-28 relative">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
            >
              Our Editing Standards.
            </h2>
            <p className="mt-6 text-[17px] font-light text-dark/60 font-sans leading-relaxed">
              Choose the level of precision that matches your brand and market.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {editingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div 
                className={`relative flex flex-col h-full rounded-[32px] p-8 md:p-10 transition-all duration-300
                  ${tier.name === 'Luxury' 
                    ? 'bg-[#120d07] text-white shadow-2xl shadow-orange/10 border border-orange/20' 
                    : 'bg-white text-dark border border-black/5 hover:border-orange/30 hover:shadow-xl'
                  }`}
              >
                {tier.name === 'Luxury' && (
                  <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-[#F97316] to-[#EA580C]" />
                )}
                
                <h3 
                  className={`font-antonio uppercase tracking-tight text-3xl mb-8 ${tier.name === 'Luxury' ? 'text-orange' : 'text-dark'}`}
                  style={{ fontWeight: 300 }}
                >
                  {tier.name}
                </h3>
                
                <ul className="flex flex-col gap-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex gap-4 items-start">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`mt-0.5 shrink-0 ${tier.name === 'Luxury' ? 'text-orange' : 'text-orange'}`}>
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={`font-sans font-light text-[15px] leading-relaxed ${tier.name === 'Luxury' ? 'text-white/80' : 'text-dark/70'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── DYNAMIC VOLUME ESTIMATOR ── */}
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-white rounded-[32px] border border-black/5 shadow-2xl shadow-black/5 p-8 md:p-12">
            <h3 className="font-antonio uppercase text-dark tracking-tight text-3xl mb-2" style={{ fontWeight: 300 }}>
              Volume Estimator
            </h3>
            <p className="font-sans font-light text-dark/60 mb-8">Slide to see how pricing scales with your shoot volume.</p>
            
            <div className="grid md:grid-cols-[1fr_250px] gap-12 items-center">
              {/* Controls */}
              <div className="flex flex-col gap-8">
                {/* Tier Selector */}
                <div className="flex bg-black/5 rounded-xl p-1">
                  {editingTiers.map((tier, idx) => (
                    <button
                      key={tier.name}
                      onClick={() => setSelectedTier(idx)}
                      className={`flex-1 py-3 px-4 rounded-lg font-antonio uppercase tracking-widest text-sm transition-all duration-300 ${
                        selectedTier === idx ? 'bg-white text-orange shadow-md' : 'text-dark/40 hover:text-dark'
                      }`}
                    >
                      {tier.name}
                    </button>
                  ))}
                </div>

                {/* Slider */}
                <div>
                  <div className="flex justify-between font-sans font-medium text-dark/60 text-sm mb-4">
                    <span>10 Photos</span>
                    <span className="text-orange font-bold">{volume} Photos</span>
                    <span>100+ Photos</span>
                  </div>
                  <div className="relative h-3 bg-black/5 rounded-full">
                    {/* Active Track */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-orange rounded-full pointer-events-none" 
                      style={{ width: `${(volume / 100) * 100}%` }} 
                    />
                    {/* The Input */}
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      step="5"
                      value={volume} 
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {/* Thumb visual */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-orange rounded-full pointer-events-none shadow-md"
                      style={{ left: `calc(${(volume / 100) * 100}% - 12px)` }}
                    />
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-[#120d07] rounded-[24px] p-8 text-center flex flex-col justify-center h-full">
                <div className="font-sans font-light text-white/50 text-sm uppercase tracking-widest mb-2">Estimated Total</div>
                <div className="font-antonio text-white leading-none tracking-tight text-6xl">
                  ${(volume * editingTiers[selectedTier].price).toFixed(2)}
                </div>
                <div className="font-sans font-light text-orange mt-3 text-sm">
                  @ ${editingTiers[selectedTier].price.toFixed(2)} / photo
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
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