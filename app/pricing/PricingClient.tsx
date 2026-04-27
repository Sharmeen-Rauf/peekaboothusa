"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import { CheckCircle2, ArrowRight, Plus, Minus } from "lucide-react";

/* ΓöÇΓöÇΓöÇ DATA ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

const packages = [
  {
    name: "Starter Package",
    desc: "Great for Small Events & Parties",
    features: [
      "2 Hours of Booth Operation",
      "Open Air or Digital Setup",
      "Custom backdrop selection",
      "Unlimited photo sessions",
      "Instant WhatsApp sharing",
      "Professional attendant",
      "Basic print template"
    ],
    isPopular: false
  },
  {
    name: "Standard Package",
    desc: "Our Most Popular Choice",
    features: [
      "3ΓÇö4 Hours of Operation",
      "Choice of Open Air, Digital, or 360",
      "Custom backdrop range",
      "Unlimited photo sessions",
      "Custom branded overlay",
      "Fun props kit included",
      "Instant WhatsApp & email",
      "Professional attendant",
      "Digital event gallery"
    ],
    isPopular: true
  },
  {
    name: "Premium Package",
    desc: "The Ultimate Event Experience",
    features: [
      "5+ Hours of Operation",
      "Choice of any booth type (inc. Vogue)",
      "Fully custom themed backdrop",
      "Unlimited photo sessions",
      "Fully custom branded template",
      "Premium props kit",
      "WhatsApp, Email, AirDrop sharing",
      "Dedicated coordinator + attendant",
      "Digital event gallery",
      "Priority booking"
    ],
    isPopular: false
  }
];

const faqs = [
  { q: "How much does a photo booth rental cost in Pakistan?", a: "Our photo booth rental packages in Pakistan start at competitive rates and vary based on the booth type, rental duration, event city, and customisation requirements. Fill out our quote form to receive a custom price tailored to your event." },
  { q: "Are there any hidden charges?", a: "No. Our quotes are fully transparent. Any add-ons or optional extras are communicated upfront before booking confirmation." },
  { q: "Do you offer discounts for multi-function bookings?", a: "Yes! If you're booking a photo booth for multiple functions (e.g., mehndi, baraat, and walima), we offer special bundled pricing. Get in touch to discuss your requirements." },
  { q: "How do we pay?", a: "We accept bank transfers, Easypaisa, JazzCash, and cash payments. A deposit is required to confirm your booking." }
];

/* ΓöÇΓöÇΓöÇ MAIN COMPONENT ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

export default function PricingClient() {

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-brand-neon/30 pt-32">
      
      {/* ΓöÇΓöÇ HEADER ΓöÇΓöÇ */}
      <section className="relative overflow-hidden pb-12 pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-brand-neon font-bold tracking-[0.4em] uppercase text-xs mb-4"
          >
            Pricing Guide
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            Photo Booth Rental<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Pricing in Pakistan</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/70 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-10">
            At Peek-A-Booth PK, we believe premium photo booth experiences should be accessible for every type of event and budget. Explore our range of flexible packages designed for Karachi, Lahore, Islamabad, and Multan.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
              Get a Free Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* ΓöÇΓöÇ PRICING CARDS ΓöÇΓöÇ */}
      <section className="relative z-10 pb-24 pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
            {packages.map((plan, i) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col bg-[#0a0a0a] rounded-3xl overflow-hidden transition-all duration-300 border ${plan.isPopular ? "border-brand-neon shadow-[0_0_30px_rgba(247,54,168,0.15)] scale-105 z-10" : "border-white/5 hover:border-white/20"}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-neon text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 md:p-10 flex flex-col h-full ${plan.isPopular ? "pt-12" : ""}`}>
                  <h3 className={`text-2xl font-extrabold mb-2 ${plan.isPopular ? "text-brand-neon" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-8">{plan.desc}</p>
                  
                  <div className="w-full h-px bg-white/10 mb-8" />

                  <div className="flex-grow mb-10">
                    <p className="text-sm font-semibold text-white/90 mb-4 tracking-wider uppercase">Features Include:</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-brand-neon" : "text-white/60"}`} strokeWidth={1.5} />
                          <span className="text-white/80 text-sm leading-tight pt-0.5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/get-a-quote" 
                    className={`inline-flex items-center justify-center w-full gap-2 py-4 rounded-full font-bold text-sm tracking-widest transition-all group ${
                      plan.isPopular 
                        ? "bg-brand-neon text-white shadow-[0_0_20px_rgba(247,54,168,0.4)]" 
                        : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    }`}
                  >
                    Select Plan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ ADD-ONS & LOCATIONS ΓöÇΓöÇ */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Add-ons */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-black/40 border border-white/10 rounded-[2.5rem] p-10">
              <h2 className="text-3xl font-extrabold mb-8">Optional <span className="text-brand-neon">Add-Ons</span></h2>
              <ul className="space-y-4 mb-10">
                {[
                  "Additional hours of booth operation",
                  "Custom designed backdrop (bespoke)",
                  "Premium prop kit upgrade",
                  "Red carpet, stanchions & velvet ropes",
                  "LED or floral photo station backdrop",
                  "Custom event hashtag & social integration",
                  "Post-event photo album or USB delivery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 text-brand-neon font-bold text-sm tracking-widest uppercase hover:text-brand-glow transition-colors">
                Customise Your Package <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* City-wise */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-black/40 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold mb-6">Service Areas</h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Our pricing may vary slightly based on your event location. We serve all major cities across Pakistan with dedicated teams.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { name: "Karachi", href: "/karachi-photo-booth-rental" },
                  { name: "Lahore", href: "/lahore-photo-booth-rental" },
                  { name: "Islamabad", href: "/islamabad-photo-booth-rental" },
                  { name: "Multan", href: "#" }
                ].map((city) => (
                  <Link key={city.name} href={city.href} className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-neon/40 transition-all group">
                    <div className="w-2 h-2 rounded-full bg-brand-neon" />
                    <span className="font-bold text-sm tracking-wide uppercase group-hover:text-white transition-colors">{city.name}</span>
                  </Link>
                ))}
              </div>
              <Link href="/contact-us" className="inline-flex items-center gap-2 text-white/60 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">
                Check City Availability <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ WHY CHOOSE US ΓöÇΓöÇ */}
      <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Best Value in Pakistan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Premium Gear", d: "Professional setup at every price point" },
              { t: "Custom Branded", d: "Personalisation included in all packages" },
              { t: "No Hidden Fees", d: "Fully transparent upfront pricing" },
              { t: "Flexible Plans", d: "Packages to fit any budget" },
              { t: "100% Satisfaction", d: "Trusted by hundreds of clients" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl text-center">
                <h3 className="text-sm font-extrabold mb-2 text-brand-neon uppercase tracking-wider">{item.t}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ FAQ ΓöÇΓöÇ */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Pricing FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const [open, setOpen] = useState(i === 0);
              return (
                <div key={i} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-brand-neon/40 bg-brand-neon/5" : "border-white/10 bg-[#0a0a0a] hover:border-white/20"}`}>
                  <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left group">
                    <span className={`font-semibold text-sm md:text-base transition-colors ${open ? "text-brand-neon" : "text-white group-hover:text-brand-neon"}`}>{faq.q}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all ${open ? "bg-brand-neon text-white" : "bg-white/10 text-white/60"}`}>
                      {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ TESTIMONIALS ΓöÇΓöÇ */}
      <Testimonials />

      {/* ΓöÇΓöÇ CONTACT ΓöÇΓöÇ */}
      <Contact />

    </div>
  );
}

