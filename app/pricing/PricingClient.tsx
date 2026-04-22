"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import { CheckCircle2, ArrowRight, MapPin, Clock } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const booths = [
  {
    name: "Party Box",
    desc: "Birthday & weddings",
    hours: "4 hours",
    prices: [
      { loc: "Lahore & Multan", price: "40,000" },
      { loc: "Islamabad", price: "45,000" }
    ],
    extraHour: "5,000",
    features: ["Unlimited Printouts", "Custom frame design"]
  },
  {
    name: "Vintage Booth",
    desc: "Birthday & weddings",
    hours: "4 hours",
    prices: [
      { loc: "Lahore & Multan", price: "40,000" },
      { loc: "Islamabad", price: "45,000" }
    ],
    extraHour: "5,000",
    features: ["Unlimited Printouts", "Custom frame design"]
  },
  {
    name: "Classic Booth",
    desc: "Corporate events & office activities",
    hours: "4 hours",
    prices: [
      { loc: "Lahore & Multan", price: "50,000" },
      { loc: "Islamabad", price: "55,000" }
    ],
    extraHour: "5,000",
    features: ["Booth Branding & designing", "Unlimited Printouts", "Custom frame design"]
  },
  {
    name: "Mirror Booth",
    desc: "Premium events & celebrations",
    hours: "4 hours",
    prices: [
      { loc: "Lahore", price: "60,000" },
      { loc: "Islamabad", price: "65,000" },
      { loc: "Multan", price: "70,000" }
    ],
    extraHour: "5,000",
    features: ["Booth Branding & designing", "Unlimited Printouts", "Custom frame design"]
  },
  {
    name: "360 Video Booth",
    desc: "Corporate events & office activities",
    hours: "4 hours",
    prices: [
      { loc: "Lahore & Multan", price: "45,000" },
      { loc: "Islamabad", price: "50,000" }
    ],
    extraHour: "5,000",
    features: ["Custom video filters (overlay & music)", "Unlimited video shoots", "QR based video delivery"]
  },
  {
    name: "Registration Booth",
    desc: "Corporate events & office activities",
    hours: "8 hours",
    prices: [
      { loc: "Lahore & Multan", price: "45,000" },
      { loc: "Islamabad", price: "55,000" }
    ],
    extraHour: null,
    features: ["Booth Branding & designing", "Pre-event online registration (QR based)", "Onspot registration (QR based & manual)", "Onspot verification (QR scanning)", "Realtime data tracking & reporting"]
  }
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function PricingClient() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-brand-neon/30 pt-32">
      
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden pb-12 pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-brand-neon font-bold tracking-widest text-sm md:text-base mb-4 uppercase"
          >
            Pakistan Pricing
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Photo Booth Rental Plans
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/60 max-w-2xl mx-auto">
            Choose the perfect photo booth experience for your event. Rates apply to Lahore, Multan, Islamabad, and Karachi. All prices are exclusive of GST.
          </motion.p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
            {booths.map((booth, i) => (
              <motion.div 
                key={booth.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col bg-[#0a0a0a] rounded-[2rem] overflow-hidden transition-all duration-300 border border-white/5 hover:border-brand-neon/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(247,54,168,0.1)] group"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-brand-neon transition-colors">
                      {booth.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-neon">{booth.desc}</p>
                  </div>
                  
                  {/* Base Hours */}
                  <div className="flex items-center gap-2 text-white/50 text-sm font-bold uppercase tracking-wider mb-6">
                    <Clock className="w-4 h-4" /> {booth.hours} Base Package
                  </div>

                  {/* Location Prices */}
                  <div className="bg-white/5 rounded-2xl p-5 mb-8 space-y-3 border border-white/5">
                    {booth.prices.map((p, idx) => (
                      <div key={idx} className="flex items-end justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                        <span className="text-white/70 text-sm font-medium flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-neon" /> {p.loc}</span>
                        <div className="text-right">
                          <span className="text-xs font-bold text-brand-neon">PKR</span>
                          <span className="text-xl font-extrabold ml-1">{p.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-px bg-white/10 mb-8" />

                  <div className="flex-grow">
                    <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">Included Features</p>
                    <ul className="space-y-4 mb-10">
                      {booth.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-neon shrink-0" strokeWidth={2} />
                          <span className="text-white/80 text-sm leading-tight pt-0.5">{feature}</span>
                        </li>
                      ))}
                      {booth.extraHour && (
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 shrink-0 flex items-center justify-center font-bold text-brand-neon">+</div>
                          <span className="text-white/60 text-sm leading-tight pt-0.5">Extra Hour: <strong className="text-white">PKR {booth.extraHour}</strong></span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <Link 
                    href="/get-a-quote" 
                    className="inline-flex items-center justify-center w-full gap-2 py-4 rounded-full font-bold text-sm tracking-widest transition-all bg-brand-neon hover:bg-white text-white hover:text-brand-neon mt-auto group/btn shadow-[0_0_20px_rgba(247,54,168,0.3)]"
                  >
                    Book Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 text-white/40 text-sm">
            * All prices are exclusive of GST. Rates apply to Lahore, Multan, and Islamabad.
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── CONTACT ── */}
      <Contact />

    </div>
  );
}
