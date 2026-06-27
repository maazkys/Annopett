import type { Metadata } from "next";
import { 
  ImageHero, ServiceCardItem, ClientLogos, Testimonials, CTAStrip, FadeIn, type ServiceCard 
} from "../../components/sections/Shared";
import { img } from "../../lib/utils";

export const metadata: Metadata = {
  title: "BPO & VA — Annopett",
  description: "Skilled remote operations, support, lead gen, and bookkeeping.",
  openGraph: {
    title: "BPO & VA — Annopett",
    description: "Your operations. Our team.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&auto=format&q=80",
      },
    ],
  },
};

const cards: ServiceCard[] = [
  { name: "Virtual Assistants", desc: "Inbox, calendar, research, ops support.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800" },
  { name: "Customer Support", desc: "Chat, email, ticket triage with SLA.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800" },
  { name: "Lead Generation", desc: "Sourcing, enrichment, outbound sequencing.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { name: "Bookkeeping", desc: "Reconciliations, AR/AP, monthly close.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800" },
];

const stats = [
  { v: "60%", l: "Cost saved vs in-house" },
  { v: "48hr", l: "Full team onboarded" },
  { v: "100%", l: "Async-ready" },
];

export default function BPOPage() {
  return (
    <>
      <ImageHero
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000"
        title={"Your Operations.\nOur Team."}
        sub="Skilled VAs, support, and ops talent. Async-ready from day one."
        primary="Hire Your Team"
        overlay="rgba(26,18,9,0.82)"
      />

      <section className="bg-white px-6 lg:px-[8vw] py-24">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-dark">What We Cover</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
          {cards.map((s) => <ServiceCardItem key={s.name} s={s} />)}
        </div>
      </section>

      <section className="px-6 lg:px-[8vw] py-28" style={{ background: "linear-gradient(135deg,#F97316,#EA580C)" }}>
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-white">Why Outsource</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-10 mt-12">
          {stats.map((s, i) => (
            <FadeIn key={s.v} delay={i * 0.08}>
              <div>
                <div className="font-mono font-bold text-[clamp(48px,6vw,80px)] text-white leading-none">{s.v}</div>
                <div className="mt-3 text-base font-light text-white/80">{s.l}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="h-[460px] overflow-hidden">
        <img src={img("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2000")} alt="" loading="lazy" className="size-full object-cover" />
      </div>

      <ClientLogos />
      <Testimonials />
      <CTAStrip heading="Build your remote team." sub="48 hours from kickoff to onboarded talent." cta="Hire Your Team" />
    </>
  );
}