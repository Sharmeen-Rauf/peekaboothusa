import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Brand & Corporate Photo Booth Rental | Peekabooth USA",
  description: "Elevate your brand activations with our corporate photo booth rental. Custom branding, digital selfie stations, and 360 video booths trusted by leading brands nationwide.",
};

export default function BrandCorporatePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <section className="py-20 container mx-auto px-6 max-w-4xl text-center">
        <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Brand & Corporate</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Wow Your Guests.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Amplify Your Brand.</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Corporate photo booth rentals trusted by leading brands nationwide. Custom overlays, branded backdrops, 360 video booths, and digital selfie stations built for high-impact events.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)]">
            Get a Quote
          </Link>
          <a href="tel:1-800-709-8579" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-white/20">
            1-800-709-8579
          </a>
        </div>
      </section>
      <Contact />
    </main>
  );
}
