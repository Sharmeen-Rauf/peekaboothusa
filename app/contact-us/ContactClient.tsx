"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, MessageCircle, ArrowRight } from "lucide-react";
import Contact from "@/components/sections/Contact";
import Link from "next/link";

export default function ContactClient() {
  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ΓöÇΓöÇ HERO ΓöÇΓöÇ */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-neon/10 via-black/50 to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center pt-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 uppercase">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Peek-A-Booth PK</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ready to book a photo booth for your event? Have questions about our packages or availability? We&apos;re here to help! Reach out and let&apos;s plan your perfect event.
          </motion.p>
        </div>
      </section>

      {/* ΓöÇΓöÇ CONTACT INFO CARDS ΓöÇΓöÇ */}
      <section className="py-16 bg-black relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* WhatsApp */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-brand-neon/40 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-white/50 text-sm mb-4">Monday to Sunday, 9am ΓÇö 9pm</p>
              <a href="https://wa.me/923260760786" target="_blank" rel="noreferrer" className="text-brand-neon font-bold text-sm hover:text-brand-glow transition-colors">Chat Directly ΓåÆ</a>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl hover:border-brand-neon/40 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-brand-neon/20 border border-brand-neon/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-brand-neon" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-white/50 text-sm mb-4">hello@peekaboothpk.com</p>
              <a href="mailto:hello@peekaboothpk.com" className="text-brand-neon font-bold text-sm hover:text-brand-glow transition-colors">Send Email ΓåÆ</a>
            </motion.div>

            {/* Service Areas */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl lg:col-span-2 hover:border-brand-neon/40 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Service Areas</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
                {["Karachi", "Lahore", "Islamabad", "Multan"].map(city => (
                  <span key={city} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase">{city}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ CONTACT FORM ΓöÇΓöÇ */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Send us a <span className="text-brand-neon">Message</span></h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">Fill in the form below and we&apos;ll get back to you with all the information you need, typically within a few hours.</p>
          </div>
          
          {/* We reuse the Contact section component here as it already has the form and state handling */}
          <div className="max-w-4xl mx-auto">
             <Contact hideHeader />
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ FAQ TEASER ΓöÇΓöÇ */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">Looking for <span className="text-brand-neon">Answers?</span></h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Before reaching out, you might find your answer in our Frequently Asked Questions section. We&apos;ve covered everything about services, pricing, and bookings.
          </p>
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10 group">
            View Pricing & FAQs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
