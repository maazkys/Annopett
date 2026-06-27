import type { Metadata } from "next";
import { ImageHero, ClientLogos, Testimonials, CTAStrip, FadeIn } from "../../components/sections/Shared";
import { img } from "../../lib/utils";

export const metadata: Metadata = {
  title: "Creative & Media — Annopett",
  description: "Design that works hard. Brand systems, social content, and creative production.",
  openGraph: {
    title: "Creative & Media — Annopett",
    description: "Design that works hard.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&q=80",
      },
    ],
  },
};

const bigs = [
  { name: "Graphic Design", desc: "Brand systems, pitch decks, ads, packaging.", image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800" },
  { name: "Social Media", desc: "Reels, carousels, content calendars at pace.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800" },
];

export default function CreativePage() {
  return (
    <>
      <ImageHero
        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=2000"
        title={"Design That\nWorks Hard."}
        sub="Brand systems, social content, and high-volume creative production."
        primary="Get Creative With Us"
        overlay="rgba(26,18,9,0.8)"
      />

      <section className="bg-white px-6 lg:px-[8vw] py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {bigs.map((b) => (
            <FadeIn key={b.name}>
              <div className="relative group rounded-3xl overflow-hidden h-[400px]">
                <img src={img(b.image)} alt={b.name} loading="lazy" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent transition group-hover:from-dark/70" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-display font-bold text-3xl text-white">{b.name}</h3>
                  <p className="mt-2 text-sm font-light text-white/70 max-w-xs">{b.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 lg:px-[8vw] py-24">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-dark">Our Work</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-[20px] bg-[#E8E5DF] h-56 grid place-items-center text-[13px] font-light text-muted">
              Portfolio coming soon
            </div>
          ))}
        </div>
      </section>

      <ClientLogos />
      <Testimonials />
      <CTAStrip heading="Bring your brand to life." sub="From one-off assets to a fully-managed creative team." cta="Get Creative With Us" />
    </>
  );
}