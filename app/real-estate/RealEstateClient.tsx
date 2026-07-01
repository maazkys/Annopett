"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { FadeIn } from "../../components/sections/Shared";
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
      "Virtual Twilight",
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
      "Virtual Twilight",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms"
    ]
  },
  {
    name: "Luxury",
    price: 2.50,
    features: [
      "Image sorting for Credit Optimization",
      "Perspective Correction",
      "Customised Lighting & Colour Enhancement",
      "Colour Correction (Furniture, Floor, Walls)",
      "Deep Window Pull",
      "TV Screen Blackout/Replacement",
      "Realistic Fireplace Fire addition",
      "Removal of Unwanted Objects (Reflections, Wires, Vehicles, Trash Cans)",
      "Virtual Twilight",
      "Image Sequencing for Delivery",
      "Uploading & Scheduling on Delivery Platforms"
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
  { name: "Hat Fella Productions", src: "/HFP.png" },
  { name: "RIPTIDE MEDIA", src: "/riptide.png" },
  { name: "KILN Media", src: "/kiln.jpg" },
  { name: "CD HOME", src: "/cdhome.png" },
  { name: "ONE27 Media", src: "/one27.png" },
  { name: "ARTHOME PHOTO", src: "/arthome.png" },
  { name: "Next Creative", src: "/nextcreative.png" },
  { name: "Proviz Real Estate Media", src: "/proviz.png" },
];

function TierCard({ tier }: { tier: typeof editingTiers[0] }) {
  const [shoots, setShoots] = useState(5);
  const isMax = shoots >= 20;

  // URL formatting for the contact form pre-fill, targeting the #contact-form anchor
  const href = `/contact?service=Real+Estate+Media&shootType=${tier.name}&shoots=${isMax ? "20%2B" : shoots}#contact-form`;

  return (
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
      
      <h3 className={`font-antonio uppercase tracking-tight text-3xl mb-8 ${tier.name === 'Luxury' ? 'text-orange' : 'text-dark'}`} style={{ fontWeight: 300 }}>
        {tier.name}
      </h3>
      
      <ul className="flex flex-col gap-4 mb-10 flex-grow">
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

      {/* Embedded Dynamic Pricing Slider */}
      <div className={`mt-auto pt-8 border-t ${tier.name === 'Luxury' ? 'border-white/10' : 'border-black/5'}`}>
        <div className="flex justify-between font-sans font-medium text-sm mb-4">
          <span className={tier.name === 'Luxury' ? 'text-white/50' : 'text-dark/50'}>Number of shoots per day</span>
          <span className="text-orange font-bold">{isMax ? '20+' : shoots}</span>
        </div>
        
        <div className="relative h-2 bg-black/10 rounded-full mb-8">
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
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-orange rounded-full pointer-events-none shadow-md"
            style={{ left: `calc(${(shoots / 20) * 100}% - 10px)` }}
          />
        </div>

        {isMax ? (
          <div className="flex flex-col items-center">
             <div className="h-14 flex items-center justify-center font-antonio text-3xl tracking-tight mb-4 text-orange">Custom Volume</div>
             <Link href={href} className="w-full text-center py-4 rounded-xl bg-orange text-white font-antonio uppercase tracking-widest hover:bg-[#1a1209] transition-colors">
               Enquire
             </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex items-end gap-2 mb-4 h-14">
              <span className="font-antonio text-5xl leading-none tracking-tight text-orange">${(shoots * tier.price).toFixed(2)}</span>
              <span className={`font-sans text-sm pb-1 ${tier.name === 'Luxury' ? 'text-white/50' : 'text-dark/50'}`}>/ day</span>
            </div>
            <Link href={href} className="w-full text-center py-4 rounded-xl bg-[#1a1209] text-white font-antonio uppercase tracking-widest hover:bg-orange transition-colors">
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
  const [activeIdx, setActiveIdx] = useState(0);

  const nextImage = () => setActiveIdx((prev) => (prev + 1) % portfolioImages.length);
  const prevImage = () => setActiveIdx((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);

  return (
    <>
      {/* ── HERO (Edge-to-Edge Full Bleed) ── */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex flex-col z-0">
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
              We Perfect<br />
              What AI<br />
              Starts.
            </motion.h1>
          </div>

          <div className="mt-auto flex flex-col md:flex-row justify-between md:items-end gap-8">
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
              <Link href="/contact#contact-form" className="group flex items-center gap-[2px] cursor-pointer">
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
              Choose the level of precision that matches your brand and market. Drag the slider to estimate daily volume pricing.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
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

      {/* ── FULL-WIDTH IMAGE BREAK ── */}
      <div className="h-[480px] overflow-hidden">
        <img
          src={img("https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=2000")}
          alt="Interior architecture"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── OUR CLIENTS (Logos light up automatically) ── */}
      <section className="bg-[#fafaf8] px-6 lg:px-[8vw] py-32 border-t border-black/5">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="font-antonio uppercase text-dark leading-[0.95] tracking-tight text-[clamp(40px,5vw,64px)]" style={{ fontWeight: 300 }}>
              Our Clients
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ filter: "grayscale(100%)", opacity: 0.4 }}
                whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                whileHover={{ filter: "grayscale(0%)", opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
                // Padding here (instead of on the <img>) enlarges the area the
                // cursor can be in to keep the logo lit up on hover.
                className="p-6 -m-6"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 md:h-24 object-contain max-w-[220px]"
                />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>
    </>
  );
}