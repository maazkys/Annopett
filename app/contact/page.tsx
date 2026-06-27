"use client";

import { useState } from "react";
import { FadeIn } from "../../components/sections/Shared";

const inputCls =
  "w-full rounded-[10px] bg-surface border border-transparent px-4 py-3.5 text-[15px] text-dark font-sans transition focus:outline-none focus:border-orange focus:ring-[3px] focus:ring-orange/15";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  
  return (
    <>
      <section className="h-[70vh] min-h-[480px] grid place-items-center px-6 lg:px-[8vw] text-center" style={{ background: "#F97316" }}>
        <div>
          <FadeIn>
            <h1 className="font-display font-bold text-[clamp(52px,7vw,96px)] text-white leading-[0.92]">
              Let's Work<br />Together.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg font-light text-white/80 max-w-md mx-auto">
              We respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-6 lg:px-[8vw] py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="rounded-[20px] bg-white border border-border p-10">
              <h2 className="font-display font-semibold text-2xl text-dark">Get in touch</h2>
              <div className="mt-8 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">Email</div>
                  <a href="mailto:hello@annopett.com" className="mt-1 block text-[15px] font-medium text-orange">hello@annopett.com</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">Phone</div>
                  <div className="mt-1 text-sm font-light text-muted">+1 (415) 555 0142</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">Hours</div>
                  <div className="mt-1 text-sm font-light text-muted">24/7 async, sync calls 9-6 PT</div>
                </div>
              </div>
              <div className="mt-8 rounded-xl bg-orange-light border border-orange/20 px-5 py-4 text-sm font-light text-[#EA580C]">
                Real estate clients: mention a free sample edit in your message.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              className="rounded-[20px] bg-white border border-border p-10 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <h2 className="font-display font-semibold text-2xl text-dark">Send a message</h2>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <input className={inputCls} placeholder="Name" required />
                <input className={inputCls} type="email" placeholder="Email" required />
              </div>
              <input className={inputCls} placeholder="Company" />
              <select className={inputCls} defaultValue="">
                <option value="" disabled>Service</option>
                <option>Data & AI</option>
                <option>Real Estate Media</option>
                <option>BPO & VA</option>
                <option>Creative & Media</option>
              </select>
              <textarea className={`${inputCls} min-h-[140px] resize-y`} placeholder="Tell us about your project" required />
              <button
                type="submit"
                className="w-full h-13 py-3.5 rounded-xl text-white font-semibold text-[15px] transition hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg,#F97316,#EA580C)", boxShadow: "0 8px 24px rgba(249,115,22,0.28)" }}
              >
                {sent ? "Message sent" : "Send Message"}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}