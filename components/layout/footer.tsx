import Link from "next/link";

const cream = "text-[rgba(250,250,248,0.5)] hover:text-orange transition";

export function Footer() {
  return (
    <footer className="bg-dark text-[#FAFAF8] relative">
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#F97316,#EA580C)" }} />
      <div className="px-6 lg:px-[8vw] py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg">
            <span
              className="inline-block size-7 rounded-full"
              style={{ background: "linear-gradient(135deg,#F97316,#EA580C)" }}
            />
            Annopett
          </div>
          <p className="mt-4 text-[13px] font-light text-[rgba(250,250,248,0.45)] max-w-xs">
            Precision Work. Remote Power. Real Results.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-[rgba(250,250,248,0.3)] mb-4">Services</div>
          <ul className="space-y-2.5 text-[13px]">
            <li><Link href="/data-ai" className={cream}>Data & AI</Link></li>
            <li><Link href="/real-estate" className={cream}>Real Estate Media</Link></li>
            <li><Link href="/bpo" className={cream}>BPO & VA</Link></li>
            <li><Link href="/creative" className={cream}>Creative & Media</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-[rgba(250,250,248,0.3)] mb-4">Company</div>
          <ul className="space-y-2.5 text-[13px]">
            <li><Link href="/about" className={cream}>About</Link></li>
            <li><Link href="/contact" className={cream}>Contact</Link></li>
            <li><Link href="/" className={cream}>Home</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-[rgba(250,250,248,0.3)] mb-4">Contact</div>
          <ul className="space-y-2.5 text-[13px] text-[rgba(250,250,248,0.5)]">
            <li>hello@annopett.com</li>
            <li>Remote-first, globally</li>
            <li>24hr response</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 lg:px-[8vw] py-6 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[rgba(250,250,248,0.25)]">
        <span>© 2025 Annopett</span>
        <span>Remote-first. Quality-obsessed.</span>
      </div>
    </footer>
  );
}