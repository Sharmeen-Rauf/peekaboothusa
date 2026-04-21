import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import Contact from "@/components/sections/Contact";
import AvailabilityChecker from "@/components/sections/AvailabilityChecker";

export const metadata: Metadata = {
  title: "360 Photo Booth Rental | Peekabooth USA",
  description: "Experience the viral 360 video photo booth! Stunning slow-motion videos for weddings, corporate events and more. Book Peekabooth USA today.",
};

const features = [
  "Stunning 360° slow-motion video captures",
  "Custom music overlays & branded watermarks",
  "Instant social media sharing",
  "LED light arm platform with ring lighting",
  "Professional on-site technician",
  "Available for all event sizes nationwide",
];

export default function BoothPage360() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 md:pt-32">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop"
            alt="360 Photo Booth"
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
            360°<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            The most viral moment at any event. Step onto the platform and let the 360° arm spin around you for breathtaking slow-motion video content.
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">The Most Viral Booth Experience</h2>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                Our 360 Photo Booth creates stunning, shareable slow-motion videos that guests will post immediately. It's the most talked-about activation at any event — generating organic social media reach for you and your brand.
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
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=800&auto=format&fit=crop"
                alt="360 Booth at Event"
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
