"use client";

import { useState, useRef, useEffect, ReactElement } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
      "Virtual Twilight",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms",
      "Basic Removal (Photographer/Tripod Reflection)"
    ]
  },
  {
    name: "Advanced",
    price: 1.75,
    features: [
      "Perspective Correction",
      "Colour Correction (Furniture, Floor, Walls)",
      "TV Screen Blackout/Replacement",
      "Virtual Twilight",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms",
      "Removal of Unwanted Objects (Reflections, Wires, Vehicles, Trash Cans)",
      "Realistic Fireplace Fire addition"
    ]
  },
  {
    name: "Luxury",
    price: 2.50,
    features: [
      "Perspective Correction",
      "Colour Correction (Furniture, Floor, Walls)",
      "TV Screen Blackout/Replacement",
      "Virtual Twilight",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms",
      "Removal of Unwanted Objects (Reflections, Wires, Vehicles, Trash Cans)",
      "Realistic Fireplace Fire addition",
      "Image sorting for Credit Optimization",
      "Customised Lighting & Colour Enhancement",
      "Deep Window Pull"
    ]
  }
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

const clientLogos = [
  { name: "Hat Fella Productions", src: "/HFP.webp" },
  { name: "RIPTIDE MEDIA", src: "/Riptide.webp" },
  { name: "KILN Media", src: "/kiln.webp" },
  { name: "CD HOME", src: "/cdhome.webp" },
  { name: "ONE27 Media", src: "/one27.webp" },
  { name: "ARTHOME PHOTO", src: "/arthome.webp" },
  { name: "Next Creative", src: "/nextcreative.webp" },
  { name: "Proviz Real Estate Media", src: "/proviz.webp" },
];

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5L14.9 9.1L22 9.9L16.7 14.6L18.3 21.6L12 17.9L5.7 21.6L7.3 14.6L2 9.9L9.1 9.1L12 2.5Z" />
    </svg>
  );
}

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 8L7 11L12 4L17 11L21 8L19.5 18H4.5L3 8Z" />
      <rect x="4.5" y="19" width="15" height="1.8" rx="0.9" />
    </svg>
  );
}

function FeatureIcon({ feature, className }: { feature: string; className?: string }) {
  const isLuxury = feature.includes("Credit Optimization") || feature.includes("Customised Lighting") || feature.includes("Deep Window Pull");
  const isAdvanced = feature.includes("Removal of Unwanted") || feature.includes("Realistic Fireplace");

  if (isLuxury) return <CrownIcon className={className} />;
  if (isAdvanced) return <StarIcon className={className} />;
  return <CheckCircleIcon className={className} />; 
}

const tierTheme: Record<string, { box: string; heading: string; sub: string; body: string; divider: string; icon: ReactElement }> = {
  Standard: {
    box: "bg-[#FFF7F0] text-dark border border-orange/10 hover:shadow-[0_0_45px_rgba(249,115,22,0.18)]",
    heading: "text-dark",
    sub: "text-dark/50",
    body: "text-dark/70",
    divider: "border-black/5",
    icon: <CheckCircleIcon className="text-orange w-7 h-7" />,
  },
  Advanced: {
    box: "bg-[#FDE9D7] text-dark border border-orange/20 hover:shadow-[0_0_45px_rgba(249,115,22,0.25)]",
    heading: "text-dark",
    sub: "text-dark/55",
    body: "text-dark/70",
    divider: "border-black/10",
    icon: <StarIcon className="text-orange w-7 h-7" />,
  },
  Luxury: {
    box: "bg-[#120d07] text-white border border-orange/20 hover:border-orange/60 shadow-[0_10px_40px_rgba(249,115,22,0.08)] hover:shadow-[0_0_50px_rgba(249,115,22,0.45)]",
    heading: "text-orange",
    sub: "text-white/50",
    body: "text-white/80",
    divider: "border-white/10",
    icon: <CrownIcon className="text-orange w-7 h-7" />,
  },
};

function TierCard({ tier }: { tier: typeof editingTiers[0] }) {
  const [shoots, setShoots] = useState(5);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMax = shoots >= 20;
  const theme = tierTheme[tier.name];
  const isLuxury = tier.name === "Luxury";

  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const monthlyCost = shoots * tier.price * daysPerWeek * 4.33;
  const href = `/contact?service=Real+Estate+Media&shootType=${tier.name}&shoots=${isMax ? "20%2B" : shoots}&daysPerWeek=${daysPerWeek}#contact-form`;

  return (
    <div className={`relative flex flex-col h-full rounded-[28px] p-7 md:p-8 transition-all duration-500 ${theme.box}`}>
      <div className="flex items-center gap-3.5 mb-6">
        {theme.icon}
        <h3 className={`font-antonio uppercase tracking-tight text-[26px] ${theme.heading}`} style={{ fontWeight: 300, paddingTop: '3px' }}>
          {tier.name}
        </h3>
      </div>

      <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
        {tier.features.map((feature, j) => (
          <li key={j} className="flex gap-3.5 items-start">
            <FeatureIcon feature={feature} className={`mt-0.5 shrink-0 w-5 h-5 ${tier.name === 'Luxury' ? 'text-orange' : 'text-orange'}`} />
            <span className={`font-sans font-light text-[14px] leading-relaxed ${theme.body}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className={`mt-auto pt-6 border-t ${theme.divider}`}>
        <div className="flex justify-between font-sans font-medium text-sm mb-3.5">
          <span className={theme.sub}>Number of shoots per day</span>
          <span className="text-orange font-bold">{isMax ? '20+' : shoots}</span>
        </div>

        <div className="relative h-1.5 bg-black/10 rounded-full mb-5">
          <div
            className="absolute top-0 left-0 h-full bg-orange rounded-full pointer-events-none"
            style={{ width: `${(shoots / 20) * 100}%` }}
          />
          <input
            type="range" min="1" max="20" step="1"
            value={shoots}
            onChange={(e) => setShoots(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-2 border-orange rounded-full pointer-events-none shadow-md"
            style={{ left: `calc(${(shoots / 20) * 100}% - 9px)` }}
          />
        </div>

        <div className="flex justify-between items-center font-sans font-medium text-sm mb-6">
          <span className={theme.sub}>Days per week</span>

          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center justify-between gap-2.5 rounded-lg pl-3.5 pr-2.5 py-1.5 font-sans text-sm font-medium cursor-pointer select-none border transition-colors
                ${isLuxury
                  ? 'bg-white/10 border-white/15 text-white'
                  : 'bg-white border-black/10 text-dark'
                }`}
              style={dropdownOpen ? { borderColor: "rgba(249,115,22,0.5)" } : {}}
            >
              <span>{daysPerWeek} day{daysPerWeek > 1 ? "s" : ""}/week</span>
              <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute right-0 z-50 mt-2 w-32 bg-white border border-black/5 rounded-[13px] shadow-[0_20px_60px_rgba(0,0,0,0.16)] overflow-hidden"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <div
                      key={d}
                      onClick={() => { setDaysPerWeek(d); setDropdownOpen(false); }}
                      className={`px-3.5 py-2 cursor-pointer font-sans text-sm transition-colors ${
                        daysPerWeek === d ? "bg-orange/10 text-orange" : "text-dark hover:bg-black/5"
                      }`}
                    >
                      {d} day{d > 1 ? "s" : ""}/week
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {isMax ? (
          <div className="flex flex-col items-center">
             <div className="h-12 flex items-center justify-center font-antonio text-[28px] tracking-tight mb-3.5 text-orange">Custom Volume</div>
             <Link href={href} className="w-full text-center py-3.5 rounded-xl bg-orange text-white font-antonio uppercase tracking-widest text-[15px] hover:bg-[#1a1209] transition-colors">
               Enquire
             </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex items-end gap-2 mb-3.5 h-12">
              <span className="font-antonio text-4xl leading-none tracking-tight text-orange">${monthlyCost.toFixed(2)}</span>
              <span className={`font-sans text-sm pb-0.5 ${theme.sub}`}>/ month</span>
            </div>
            <Link href={href} className="w-full text-center py-3.5 rounded-xl bg-[#1a1209] text-white font-antonio uppercase tracking-widest text-[15px] hover:bg-orange transition-colors">
              Submit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function BeforeAfterSlider({ data }: { data: typeof portfolioImages[0] }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[24px] overflow-hidden bg-black border border-white/10 select-none group">
      <img src={data.after} alt="Final Edit" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: `inset(0 calc(100% - ${sliderPos}%) 0 0)` }}
      >
        <img src={data.before} alt="RAW Image" className="absolute inset-0 w-full h-full object-cover" />
      </div>

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

      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg font-antonio uppercase tracking-widest text-sm text-white/90 pointer-events-none">
        RAW
      </div>
      <div className="absolute top-6 right-6 bg-orange/90 backdrop-blur-md px-4 py-2 rounded-lg font-antonio uppercase tracking-widest text-sm text-white pointer-events-none">
        {data.name}
      </div>

      <input
        type="range" min="0" max="100" value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />
    </div>
  );
}

export function RealEstateClient() {
  const reduce = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);

  const nextImage = () => setActiveIdx((prev) => (prev + 1) % portfolioImages.length);
  const prevImage = () => setActiveIdx((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);

  return (
    <>
      {/* ── HERO (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col z-0">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <img
            src={img("/Real Estatemain.webp")}
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
        </div>

        <div className="relative z-10 flex flex-col h-full w-full px-6 lg:px-[8vw] pt-32 pb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-antonio uppercase text-orange tracking-[0.2em] text-sm mb-6"
          >
            Real Estate Media
          </motion.p>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-antonio uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(52px, 8.5vw, 110px)", fontWeight: 300 }}
            >
              From AutoHDR to Client<br />
              No Gaps, No Delays.
            </motion.h1>
          </div>

          <div className="mt-auto flex flex-col md:flex-row justify-between md:items-end gap-8 mb-8 md:mb-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-white/70 max-w-md leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 300 }}
            >
              Your RAW images deserve a human eye. We QA, correct, and complete every shot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Added gap-2 right here to space out the text pill and the icon square */}
              <Link href="/contact#contact-form" className="group flex items-center gap-2 cursor-pointer">
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
      </section>

      {/* ── EDITING TIERS ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-24 relative">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="font-antonio uppercase text-dark leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(38px, 4.6vw, 60px)", fontWeight: 300 }}
            >
              Our Editing Standards.
            </h2>
            <p className="mt-5 text-base font-light text-dark/60 font-sans leading-relaxed">
              Choose the level of precision that matches your brand and market. Drag the slider to estimate daily volume pricing.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {editingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <TierCard tier={tier} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── BEFORE / AFTER INTERACTIVE SLIDER ── */}
      <section className="bg-[#120d07] px-6 lg:px-[8vw] py-28 text-white text-center border-t border-white/5">
        <FadeIn>
          <h2
            className="font-antonio uppercase text-white leading-[0.95] tracking-tight mb-4"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}
          >
            See the Difference.
          </h2>
          <p className="text-[17px] font-light text-white/50 font-sans leading-relaxed mb-16 max-w-lg mx-auto">
            Drag the slider to compare the RAW images with our final delivery.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative max-w-5xl mx-auto">
            {/* The Image Container */}
            <BeforeAfterSlider data={portfolioImages[activeIdx]} key={portfolioImages[activeIdx].name} />

            {/* Controls Below the Image */}
            <div className="flex items-center justify-between mt-8 px-4">
              <button 
                onClick={prevImage}
                className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-orange transition-colors shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Indicator Dots */}
              <div className="flex justify-center gap-4">
                {portfolioImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIdx === idx ? 'bg-orange w-8' : 'bg-white/30 w-2 hover:bg-white/50'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextImage}
                className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-orange transition-colors shadow-lg"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── OUR CLIENTS (always in color, glow on hover only) ── */}
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