"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { img } from "../../lib/utils";

export function GradientCTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      href={to}
      className="inline-flex items-center justify-center h-[52px] px-7 rounded-[14px] text-white text-sm font-semibold transition will-change-transform hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97]"
      style={{
        background: "linear-gradient(135deg,#F97316,#EA580C)",
        boxShadow: "0 8px 24px rgba(249,115,22,0.28)",
      }}
    >
      {children}
    </Link>
  );
}

export function OutlineCTA({ to, children, dark = true }: { to: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={to}
      className={`inline-flex items-center justify-center h-[52px] px-7 rounded-[14px] text-sm font-semibold transition hover:-translate-y-0.5 ${
        dark
          ? "bg-white/10 border border-white/20 text-white hover:border-orange/60"
          : "bg-transparent border border-border text-dark hover:border-orange"
      }`}
    >
      {children}
    </Link>
  );
}

export function FadeIn({ children, delay = 0, y = 40 }: { children: ReactNode; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 65, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}

function CountNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reduce) { setN(value); return; }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);
  const display = Number.isInteger(value) ? Math.round(n).toString() : n.toFixed(1);
  return <span ref={ref}>{display}{suffix}</span>;
}

export function StatStrip() {
  const stats: Array<{ label: string; render: ReactNode }> = [
    { label: "Skilled Professionals", render: <><CountNumber value={50} />+</> },
    { label: "Turnaround", render: <><CountNumber value={24} />hr</> },
    { label: "Client Rating", render: <CountNumber value={4.9} /> },
    { label: "Onboarding", render: <><CountNumber value={3} /> Days</> },
  ];
  return (
    <section className="bg-white border-y border-border px-6 lg:px-[8vw] py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
        {stats.map((s, i) => (
          <div key={i} className="px-6 first:pl-0 text-center lg:text-left">
            <div className="font-mono font-bold text-[clamp(36px,4vw,52px)] text-gradient-orange leading-none">
              {s.render}
            </div>
            <div className="mt-3 text-[13px] text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export type ServiceCard = { name: string; desc: string; image: string };

export function ServiceCardItem({ s }: { s: ServiceCard }) {
  return (
    <article
      className="group flex-shrink-0 w-[320px] rounded-3xl overflow-hidden bg-white border border-border transition duration-300 hover:-translate-y-2 hover:border-orange/30 snap-start-item"
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
    >
      <div className="h-[200px] overflow-hidden">
        <img
          src={img(s.image)}
          alt={s.name}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-dark">{s.name}</h3>
        <p className="mt-2 text-sm font-light text-muted leading-relaxed">{s.desc}</p>
        <span className="mt-4 inline-block size-3 rounded-full bg-orange" />
      </div>
    </article>
  );
}

export function ClientLogos() {
  const logos = ["Northwind", "Acme Realty", "Stellar Labs", "Vertex AI", "Casa Group", "Bright Co", "Helix", "Mosaic"];
  return (
    <section className="bg-white border-t border-border py-14 px-6 lg:px-[8vw] overflow-hidden">
      <p className="text-center text-[13px] font-light text-muted mb-8">Trusted by teams around the world</p>
      <div className="relative">
        <div className="flex gap-4 animate-[marquee_30s_linear_infinite] w-max">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="px-6 py-2.5 rounded-xl bg-surface border border-border text-sm font-medium text-muted whitespace-nowrap"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from {transform:translateX(0)} to {transform:translateX(-33.333%)} }`}</style>
    </section>
  );
}

export function Testimonials({
  heading = "Clients. Results.",
  items,
}: {
  heading?: string;
  items?: Array<{ quote: string; name: string; company: string }>;
}) {
  const data = items ?? [
    { quote: "Annopett rebuilt our content pipeline. Turnaround dropped from a week to a day.", name: "Maya Okafor", company: "Stellar Labs" },
    { quote: "The team feels like an in-house extension. Quality is consistent and the comms are sharp.", name: "Daniel Reyes", company: "Casa Group" },
    { quote: "Best partner we've worked with for AI data labelling. Precise, fast, transparent.", name: "Ines Vermeer", company: "Vertex AI" },
  ];
  return (
    <section className="bg-surface px-6 lg:px-[8vw] py-24">
      <FadeIn>
        <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-dark text-center leading-tight">
          {heading}
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {data.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-3xl bg-white border border-border p-9 h-full transition hover:-translate-y-1.5 hover:border-orange/30">
              <div className="flex gap-0.5 mb-5 text-orange text-base">{"★★★★★"}</div>
              <p className="font-light italic text-base text-dark/80 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6">
                <div className="font-semibold text-sm text-dark">{t.name}</div>
                <div className="text-xs font-light text-muted">{t.company}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function CTAStrip({
  heading,
  sub,
  cta,
  to = "/contact",
}: {
  heading: string;
  sub: string;
  cta: string;
  to?: string;
}) {
  return (
    <section className="bg-dark px-6 lg:px-[8vw] py-24 text-center">
      <FadeIn>
        <h2 className="font-display font-bold text-[clamp(40px,5vw,72px)] text-white leading-[0.95]">
          {heading}
        </h2>
        <p className="mt-5 text-lg font-light text-[rgba(250,250,248,0.55)] max-w-xl mx-auto">{sub}</p>
        <div className="mt-9 inline-flex">
          <GradientCTA to={to}>{cta}</GradientCTA>
        </div>
      </FadeIn>
    </section>
  );
}

export function ImageHero({
  image,
  title,
  sub,
  primary,
  primaryTo = "/contact",
  secondary,
  secondaryTo,
  overlay = "linear-gradient(to bottom right, rgba(26,18,9,0.85) 40%, rgba(249,115,22,0.3) 100%)",
  transitionName,
}: {
  image: string;
  title: ReactNode;
  sub: string;
  primary: string;
  primaryTo?: string;
  secondary?: string;
  secondaryTo?: string;
  overlay?: string;
  transitionName?: string;
}) {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={img(image)}
        alt=""
        className="absolute inset-0 size-full object-cover"
        style={transitionName ? { viewTransitionName: transitionName } : undefined}
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-[8vw] max-w-5xl">
        <FadeIn>
          <h1 className="font-display font-bold text-[clamp(52px,8vw,110px)] text-[#FAFAF8] leading-[0.92] whitespace-pre-line">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg font-light text-white/65 max-w-md">{sub}</p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-3">
            <GradientCTA to={primaryTo}>{primary}</GradientCTA>
            {secondary && secondaryTo && <OutlineCTA to={secondaryTo}>{secondary}</OutlineCTA>}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function HoverSphere() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 18 });
  const sy = useSpring(y, { stiffness: 80, damping: 18 });
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 24);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 24);
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative size-[320px] sm:size-[400px] lg:size-[500px] grid place-items-center"
    >
      <div
        className="absolute size-full rounded-full"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18), transparent 70%)" }}
      />
      <motion.div
        style={{ x: sx, y: sy }}
        className="relative"
      >
        <motion.div
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="size-[260px] sm:size-[320px] rounded-full"
          style={{
            background: "conic-gradient(from 180deg, #F97316, #EA580C, #FED7AA, #F97316)",
            boxShadow: "0 0 120px rgba(249,115,22,0.45), inset 0 -30px 80px rgba(0,0,0,0.25)",
          }}
        />
      </motion.div>
    </div>
  );
}