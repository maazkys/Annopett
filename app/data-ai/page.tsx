import type { Metadata } from "next";
import { 
  ImageHero, ClientLogos, Testimonials, CTAStrip, FadeIn
} from "../../components/sections/Shared"; // Adjusted relative path
import { img } from "../../lib/utils";

export const metadata: Metadata = {
  title: "Data & AI — Annopett",
  description: "Annotation, datasets, research support, and model QA at scale.",
  openGraph: {
    title: "Data & AI — Annopett",
    description: "Powering AI with precision data.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&q=80",
      },
    ],
  },
};

const caps = [
  { name: "Image Annotation", desc: "Bounding boxes, polygons, segmentation masks.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800" },
  { name: "Text Labelling", desc: "NER, intent classification, sentiment.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { name: "LLM Evaluation", desc: "Human-in-the-loop ranking and rubric scoring.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800" },
  { name: "Dataset Curation", desc: "Sourcing, cleaning, deduplication.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
  { name: "Model QA", desc: "Regression suites, edge case probing.", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800" },
  { name: "Research Support", desc: "Literature reviews, summarisation, data prep.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800" },
  { name: "Audio Transcription", desc: "Timestamped transcripts, speaker labels.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
  { name: "Video Annotation", desc: "Frame-level tagging, action recognition.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800" },
];

const steps = ["Send Requirements", "Team Assigned", "Work Delivered", "You Approve"];

export default function DataAIPage() {
  return (
    <>
      <ImageHero
        image="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=2000"
        title={"Powering AI\nWith Precision\nData."}
        sub="Annotation, datasets, research support, and model QA."
        primary="Start a Project"
        overlay="rgba(26,18,9,0.85)"
      />

      <section className="bg-background px-6 lg:px-[8vw] py-24">
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] text-dark">Our Capabilities</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {caps.map((c, i) => (
            <FadeIn key={c.name + i} delay={(i % 4) * 0.06}>
              <article className="rounded-[20px] bg-white border border-border overflow-hidden h-full transition hover:-translate-y-2 hover:border-orange/30">
                <div className="h-40 overflow-hidden">
                  <img src={img(c.image)} alt={c.name} loading="lazy" className="size-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-[17px] text-dark">{c.name}</h3>
                  <p className="mt-1.5 text-[13px] font-light text-muted leading-relaxed">{c.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-[8vw] py-24" style={{ background: "linear-gradient(135deg,#F97316,#EA580C)" }}>
        <FadeIn>
          <h2 className="font-display font-bold text-[clamp(36px,4vw,52px)] text-white">How It Works</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {steps.map((t, i) => (
            <FadeIn key={t} delay={i * 0.08}>
              <div className="rounded-[20px] bg-white/10 border border-white/20 p-6 h-full">
                <div className="font-mono font-bold text-3xl text-white/40">0{i + 1}</div>
                <div className="mt-3 font-display font-semibold text-base text-white">{t}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="h-[420px] overflow-hidden">
        <img src={img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000")} alt="" loading="lazy" className="size-full object-cover" />
      </div>

      <ClientLogos />
      <Testimonials />
      <CTAStrip heading="Start a project." sub="Tell us about your data, models, and timelines." cta="Start a Project" />
    </>
  );
}