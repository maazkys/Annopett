"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GradientCTA, OutlineCTA, StatStrip, ServiceCardItem, ClientLogos, Testimonials, CTAStrip,
  FadeIn, HoverSphere, type ServiceCard,
} from "../components/sections/Shared"; // Update this path if your components folder is located elsewhere
import { img } from "../lib/utils";

const services: ServiceCard[] = [
  { name: "Data & AI", desc: "Annotation, datasets, model QA, and research support.", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800" },
  { name: "Real Estate Media", desc: "AutoHDR cleanup, photo and video editing, virtual staging.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" },
  { name: "BPO & VA", desc: "Virtual assistants, support, bookkeeping, lead generation.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" },
  { name: "Creative & Media", desc: "Graphic design, social content, brand systems.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" },
];

const trust = [
  { t: "Turnaround in 24 hours", d: "Most tasks completed next business day" },
  { t: "50+ skilled professionals", d: "Specialists across every service category" },
  { t: "Remote-ready workflow", d: "Fully async, transparent, and documented" },
  { t: "Quality guaranteed", d: "Every deliverable reviewed before it reaches you" },
];

export default function Home() {
  const reduce = useReducedMotion();
  const heroLines = ["Precision", "Work.", "Remote Power."];
  
  return (
    <>
      <section className="relative bg-dark min-h-screen flex items-center overflow-hidden">
        <div className="grid lg:grid-cols-[60%_40%] items-center w-full px-6 lg:px-[8vw] pt-28 pb-16 gap-12">
          <div>
            <h1 className="font-display font-bold text-[clamp(64px,9vw,120px)] leading-[0.92] text-[#FAFAF8]">
              {heroLines.map((line, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? {} : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 60, damping: 20, delay: i * 0.1 }}
                  className="block"
                >
                  {line === "Work." ? <span className="text-gradient-orange">Work.</span> : line}
                </motion.span>
              ))}
            </h1>
            <FadeIn delay={0.4} y={20}>
              <p className="mt-7 text-lg font-light text-[rgba(250,250,248,0.55)] max-w-md leading-relaxed">
                Annopett delivers Data, AI, Real Estate Media, BPO, and Creative services at scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <GradientCTA to="/contact">Explore Services</GradientCTA>
                <OutlineCTA to="/real-estate">Real Estate Solutions</OutlineCTA>
              </div>
            </FadeIn>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HoverSphere />
          </div>
        </div>
      </section>

      <StatStrip />

      <section className="bg-background px-6 lg:px-[8vw] py-28">
        <div className="grid lg:grid-cols-[40%_60%] gap-12">
          <div className="lg:sticky lg:top-32 self-start">
            <FadeIn>
              <h2 className="font-display font-bold text-[clamp(40px,5vw,64px)] text-dark leading-[0.95] whitespace-pre-line">
                {"One team.\nEvery capability."}
              </h2>
              <p className="mt-6 text-base font-light text-muted max-w-md">
                From AI pipelines to real estate media. Remote, skilled, and ready.
              </p>
            </FadeIn>
          </div>
          <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 cursor-grab active:cursor-grabbing">
            {services.map((s) => <ServiceCardItem key={s.name} s={s} />)}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-[8vw] py-28" style={{ background: "linear-gradient(135deg,#F97316 0%,#EA580C 100%)" }}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <FadeIn>
              <h2 className="font-display font-bold text-[clamp(40px,4.5vw,60px)] text-white leading-[0.95]">
                Why Annopett?
              </h2>
            </FadeIn>
            <div className="mt-10 space-y-7">
              {trust.map((p, i) => (
                <FadeIn key={p.t} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="mt-1 size-6 rounded-full bg-white grid place-items-center shrink-0">
                      <span className="size-2.5 rounded-full bg-orange" />
                    </span>
                    <div>
                      <div className="font-medium text-base text-white">{p.t}</div>
                      <div className="font-light text-sm text-white/70">{p.d}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn delay={0.15}>
            <img
              src={img("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900")}
              alt="Team collaborating remotely"
              loading="lazy"
              className="rounded-3xl h-[480px] w-full object-cover"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}
            />
          </FadeIn>
        </div>
      </section>

      <ClientLogos />
      <Testimonials />
      <CTAStrip heading="Ready to scale?" sub="Let's talk about what we can handle for you." cta="Let's Work Together" />
    </>
  );
}