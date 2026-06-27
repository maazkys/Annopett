import type { Metadata } from "next";
import { FadeIn } from "../../components/sections/Shared"; // Adjusted relative path
import { img } from "../../lib/utils";

export const metadata: Metadata = {
  title: "About — Annopett",
  description: "Remote team. Real impact. Annopett is a remote-first services company.",
  openGraph: {
    title: "About — Annopett",
    description: "Remote team. Real impact.",
  },
};

const values = [
  { t: "Precision", i: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600" },
  { t: "Reliability", i: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600" },
  { t: "Transparency", i: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600" },
  { t: "Growth", i: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark min-h-screen flex items-center justify-center px-6 lg:px-[8vw] py-32 text-center">
        <div>
          <FadeIn>
            <h1 className="font-display font-bold text-[clamp(64px,9vw,120px)] text-[#FAFAF8] leading-[0.92]">
              <span className="block">Remote Team.</span>
              <span className="block">Real <span className="text-gradient-orange">Impact.</span></span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-7 text-lg font-light text-[rgba(250,250,248,0.5)] max-w-xl mx-auto leading-relaxed">
              Founded to give growing businesses access to enterprise-grade talent, without the overhead.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-6 lg:px-[8vw] py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <h2 className="font-display font-semibold text-4xl text-dark">Our Story</h2>
            <div className="mt-8 space-y-5 text-base font-light text-muted leading-relaxed max-w-lg">
              <p>Annopett started with a simple observation. Talented people are everywhere. Great companies struggle to reach them.</p>
              <p>We built a remote-first team trained on enterprise standards. Real workflows. Real accountability. No middle layers.</p>
              <p>Today we work with companies in real estate, AI, ops, and creative. Every engagement starts with one principle. Precision over volume.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img
              src={img("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900")}
              alt="Our team"
              loading="lazy"
              className="rounded-3xl h-[480px] w-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="relative h-[520px] overflow-hidden grid place-items-center text-center px-6">
        <img src={img("https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1800")} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative">
          <div className="font-mono font-bold text-[clamp(80px,12vw,160px)] text-gradient-orange leading-none">50+</div>
          <div className="mt-2 font-display font-bold text-2xl lg:text-3xl text-white">Skilled Remote Professionals</div>
        </div>
      </section>

      <section className="bg-background px-6 lg:px-[8vw] py-24">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-dark">What We Stand For</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {values.map((v, i) => (
            <FadeIn key={v.t} delay={i * 0.08}>
              <div className="group relative rounded-3xl overflow-hidden h-80">
                <img src={img(v.i)} alt={v.t} loading="lazy" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-dark/60 transition duration-500 group-hover:bg-[rgba(249,115,22,0.55)]" />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-2 group-hover:translate-y-0 transition duration-500">
                  <h3 className="font-display font-bold text-3xl text-white">{v.t}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 lg:px-[8vw] pb-24">
        <FadeIn>
          <div
            className="rounded-3xl bg-white border border-orange/15 p-12 lg:p-16 text-center max-w-3xl mx-auto"
            style={{ boxShadow: "0 8px 48px rgba(249,115,22,0.08)" }}
          >
            <p className="font-display font-semibold italic text-2xl lg:text-[26px] text-dark leading-snug">
              "We don't sell hours. We sell outcomes you can stake your week on."
            </p>
            <div className="mt-6 text-sm font-medium text-muted">Annopett Founders</div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}