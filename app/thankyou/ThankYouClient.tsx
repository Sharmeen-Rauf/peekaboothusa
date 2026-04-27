"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, MessageSquare, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";

export default function ThankYouClient() {
  const nextSteps = [
    { step: "Step 1", title: "Our team reviews your event details" },
    { step: "Step 2", title: "We prepare a customised photo booth package for your event" },
    { step: "Step 3", title: "We reach out via WhatsApp or phone within 24 hours" },
    { step: "Step 4", title: "You confirm your booking ΓÇö and the countdown to your unforgettable event begins!" },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-neon/20 border border-brand-neon/30 mb-8"
        >
          <CheckCircle2 className="w-10 h-10 text-brand-neon" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Thank You ΓÇö We&apos;ve <span className="text-brand-neon">Received Your Message!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
            Your enquiry has been successfully submitted. Our team will review your event details and get back to you within 24 hours with a custom quote and all the information you need.
          </p>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-16 text-left"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-brand-neon/20 flex items-center justify-center text-brand-neon text-sm">?</span>
            What Happens Next?
          </h2>
          <div className="grid gap-6">
            {nextSteps.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-brand-neon group-hover:bg-brand-neon group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <div className="pt-3">
                  <p className="text-white/80 font-medium leading-tight group-hover:text-white transition-colors">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Urgent Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold mb-4">Need a Faster Response?</h3>
          <p className="text-white/60 mb-8">
            For urgent enquiries or same-day responses, message us directly on WhatsApp. Our team is available 7 days a week to assist you.
          </p>
          <a 
            href="https://wa.me/923260760786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-extrabold text-lg transition-all shadow-[0_0_50px_rgba(247,54,168,0.5)] hover:shadow-[0_0_80px_rgba(247,54,168,0.8)] group"
          >
            <MessageSquare className="w-6 h-6" /> Chat With Us on WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Explore Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/10"
        >
          <h3 className="text-lg font-bold mb-8 uppercase tracking-widest text-white/40">While You Wait ΓÇö Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/gallery" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold">
              View Our Gallery <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold">
              Explore Our Packages <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about-us" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold">
              Read Our FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Socials */}
        <div className="mt-20 flex justify-center gap-6">
          <a href="https://instagram.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-neon transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-neon transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/40 hover:text-brand-neon transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
