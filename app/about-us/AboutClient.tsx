"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Target, MapPin, Phone, CheckCircle2 } from "lucide-react";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function AboutClient() {
  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ΓöÇΓöÇ HERO ΓöÇΓöÇ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/booth-setup-17.jpg" alt="About Peek-A-Booth" fill priority className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center pt-20 pb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">
            OUR STORY
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">
            About Peek-A-Booth PK ΓÇö <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Pakistan&apos;s Most Trusted</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to Peek-A-Booth PK ΓÇö where every event becomes an unforgettable experience. We are Pakistan&apos;s leading photo booth rental company, dedicated to delivering premium, innovative, and personalised experiences.
          </motion.p>
        </div>
      </section>

      {/* ΓöÇΓöÇ OUR STORY ΓöÇΓöÇ */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 uppercase tracking-tight">How It <span className="text-brand-neon">Started</span></h2>
              <div className="w-20 h-1 bg-brand-neon rounded-full mb-8" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                Peek-A-Booth PK was born from a simple belief: every event ΓÇö no matter how big or small ΓÇö deserves a memorable, high-quality entertainment experience. We saw a gap in Pakistan&apos;s events industry for a professional, reliable, and truly premium photo booth service.
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                What started as a small team with a big vision has grown into Pakistan&apos;s most loved photo booth company ΓÇö serving hundreds of events every year across Karachi, Lahore, Islamabad, and Multan.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10">
              <Image src="/booth-setup-9.jpg" alt="Event Joy" fill className="object-cover" />
              <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ MISSION ΓöÇΓöÇ */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Our <span className="text-brand-neon">Mission</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Premium Quality", d: "Studio-grade lighting and high-res DSLR cameras at every single event.", icon: Star },
              { t: "Fully Custom", d: "Tailored experiences designed to match each client&apos;s unique vision.", icon: Target },
              { t: "Unmatched Joy", d: "Creating genuine, lasting memories and smiles for every single guest.", icon: Heart }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-brand-neon/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-neon/20 border border-brand-neon/40 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-brand-neon" />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">{item.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* ΓöÇΓöÇ LOCATIONS ΓöÇΓöÇ */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Where We <span className="text-brand-neon">Operate</span></h2>
            <p className="text-white/50 mt-4">Serving events across major cities in Pakistan</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { c: "Karachi", d: "Business capital & hub" },
              { c: "Lahore", d: "City of celebrations" },
              { c: "Islamabad", d: "Corporate & government" },
              { c: "Multan", d: "The City of Saints" }
            ].map((city, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center group hover:border-brand-neon/30 transition-all">
                <MapPin className="w-8 h-8 text-brand-neon mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{city.c}</h3>
                <p className="text-white/40 text-xs tracking-wider uppercase">{city.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ CTA ΓöÇΓöÇ */}
      <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 uppercase tracking-tight">Ready to work <span className="text-brand-neon">with us?</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote" className="bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] flex items-center gap-2 group">
              Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact-us" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-sm border border-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
