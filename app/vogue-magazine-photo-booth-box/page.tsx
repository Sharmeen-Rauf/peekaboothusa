import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import Contact from "@/components/sections/Contact";
import AvailabilityChecker from "@/components/sections/AvailabilityChecker";

export const metadata: Metadata = {
  title: "Vogue Magazine Photo Booth Box Rental | Peekabooth USA",
  description: "Our iconic life-size Vogue Magazine Photo Booth Box creates stunning magazine-style portraits for your guests. Perfect for weddings & galas.",
};

const features = [
  "Life-size magazine cover experience",
  "Professional studio lighting & DSLR setup",
  "Custom magazine title & personalized date",
  "High-gloss premium print output",
  "Instant digital delivery to guests",
  "Fully customizable for any event theme",
];

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 md:pt-32">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
            alt="Vogue Magazine Photo Booth"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10 py-20">
          <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Photo Booths</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Vogue Magazine<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth Box</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Make your guests feel like A-list celebrities. Step inside the iconic life-size magazine cover and strike your best pose.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)]">
              Get A Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:1-800-709-8579" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              <Phone className="w-4 h-4" /> +1-800-709-8579
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">The Showstopper at Any Event</h2>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Our Vogue Magazine Photo Booth Box is the most unique and premium booth experience we offer. Guests step into a giant, beautifully crafted magazine cover frame — perfect for weddings, galas, quinceaneras, and high-end brand activations.
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
            </div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                alt="Magazine Booth at Wedding"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Availability Checker */}
      <AvailabilityChecker />

      {/* Contact Form */}
      <Contact />
    </main>
  );
}
