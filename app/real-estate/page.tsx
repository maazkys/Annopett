import type { Metadata } from "next";
import {
  ImageHero, ServiceCardItem, ClientLogos, Testimonials, CTAStrip, FadeIn, type ServiceCard,
} from "../../components/sections/Shared"; // Adjusted relative path for being inside a subfolder
import { img } from "../../lib/utils";

export const metadata: Metadata = {
  title: "Real Estate Media — Annopett",
  description: "We perfect what AI starts. Photo QA, video editing, and virtual assistant support for real estate teams.",
  openGraph: {
    title: "Real Estate Media — Annopett",
    description: "AutoHDR cleanup, photo and video editing, and VA support for real estate.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&q=80",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&q=80"],
  },
};

const services: ServiceCard[] = [
  { name: "Photo Editing", desc: "AutoHDR QA, color correction, sky replacement, exposure cleanup.", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800" },
  { name: "Video Editing", desc: "Walkthroughs, drone reels, cinematic listing edits.", image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=800" },
  { name: "VA Services", desc: "MLS uploads, CRM updates, listing coordination.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800" },
];

const problems = ["Blown highlights from AutoHDR", "Crooked verticals and warped lines", "Inconsistent color across shots", "Missing finishing touches"];
const solutions = ["Manual exposure recovery on every shot", "Vertical and lens correction by hand", "Color matched across the full set", "Final QA before delivery"];

const sop = [
  { t: "Intake", d: "Receive RAW or AutoHDR set with shot notes" },
  { t: "Sort & Cull", d: "Pick the strongest frame per room" },
  { t: "Correct", d: "Exposure, white balance, verticals" },
  { t: "Enhance", d: "Sky, lawn, windows, ambient pulls" },
  { t: "QA Pass", d: "Senior editor reviews every image" },
  { t: "Deliver", d: "Web-ready and print-ready exports" },
];

export default function RealEstatePage() {
  return (
    <>
      <ImageHero
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000"
        title={"We Perfect\nWhat AI\nStarts."}
        sub="Your AutoHDR images deserve a human eye. We QA, correct, and complete every shot."
        primary="Get a Free Sample Edit"
        primaryTo="/contact"
        secondary="Partner With Us"
        secondaryTo="/contact"
      />

      <section className="grid md:grid-cols-2 min-h-[480px]">
        <div className="bg-surface p-12 lg:p-16">
          <FadeIn>
            <h3 className="font-display font-semibold text-2xl lg:text-3xl text-dark">AI leaves gaps.</h3>
            <ul className="mt-8 space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] font-light text-muted">
                  <span className="text-orange font-medium">×</span> {p}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <div className="p-12 lg:p-16" style={{ background: "#F97316" }}>
          <FadeIn>
            <h3 className="font-display font-semibold text-2xl lg:text-3xl text-white">We fill them.</h3>
            <ul className="mt-8 space-y-4">
              {solutions.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] font-light text-white/85">
                  <span className="text-white font-medium">✓</span> {p}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white px-6 lg:px-[8vw] py-24">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-dark">What We Handle</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 mt-12 justify-items-center">
          {services.map((s) => <ServiceCardItem key={s.name} s={s} />)}
        </div>
      </section>

      <section className="px-6 lg:px-[8vw] py-24" style={{ background: "linear-gradient(135deg,#F97316,#EA580C)" }}>
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,52px)] text-white">Our Editing Standard</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-12">
          {sop.map((s, i) => (
            <FadeIn key={s.t} delay={i * 0.06}>
              <div className="rounded-[20px] bg-white/10 border border-white/20 p-6 h-full">
                <div className="font-mono font-bold text-3xl text-white/40">0{i + 1}</div>
                <div className="mt-3 font-display font-semibold text-base text-white">{s.t}</div>
                <div className="mt-2 text-[13px] font-light text-white/70">{s.d}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="h-[500px] overflow-hidden">
        <img
          src={img("https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=2000")}
          alt="Interior architecture"
          loading="lazy"
          className="size-full object-cover"
        />
      </div>

      <ClientLogos />
      <Testimonials
        items={[
          { quote: "Our listing turnaround went from 3 days to overnight. The image quality is consistently excellent.", name: "Sara Mendes", company: "Casa Group" },
          { quote: "Annopett caught issues our in-house editors missed for months. Pure quality.", name: "Tom Whitaker", company: "Pacific Realty" },
          { quote: "Free sample edit sold us in 24 hours. Been a client for two years.", name: "Lena Park", company: "Aurora Listings" },
        ]}
      />
      <CTAStrip heading="Ready for a free sample?" sub="Send us one set. We'll edit it on the house." cta="Get Your Free Edit" />
    </>
  );
}