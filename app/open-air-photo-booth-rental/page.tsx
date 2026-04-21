import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Air Photo Booth Rental | Peekabooth USA",
  description: "Rent our premium Open Air Photo Booth for weddings, corporate events, birthdays and more. Stylish, modern, and fully customizable. Book today!",
};

const features = [
  "High-resolution DSLR camera & studio lighting",
  "Unlimited prints with custom design",
  "Live digital gallery for instant sharing",
  "Professional attendant on-site",
  "Custom branded overlays & backdrops",
  "Available nationwide across the US",
];

export default function OpenAirPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 md:pt-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Open Air Photo Booth"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Photo Booths</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Open Air<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            The modern, open-concept photo booth experience. Elegant, versatile, and perfect for any event.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] hover:shadow-[0_0_40px_rgba(247,54,168,0.6)]">
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:1-800-709-8579" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Why Choose the Open Air Booth?</h2>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Our Open Air Photo Booth is sleek, modern, and incredibly versatile. It fits any venue, any aesthetic, and any event size. No cumbersome enclosures — just pure, beautiful photos with full-view fun for everyone.
              </p>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-neon" />
                    </div>
                    <span className="text-white/80 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/#contact" className="inline-flex items-center gap-2 mt-10 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-all">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
                alt="Open Air Photo Booth at Event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
