"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, NotebookPen } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 relative bg-black">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#0a0a0a] rounded-[2rem] p-10 lg:p-12 border border-brand-neon/20 shadow-[0_0_50px_rgba(247,54,168,0.05)] overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Subtle glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl border border-brand-neon/30 flex items-center justify-center mb-8 bg-brand-neon/5">
                <NotebookPen className="w-6 h-6 text-brand-neon" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
                We&apos;d love to hear <br className="hidden sm:block" /> about your event.
              </h2>
              
              <p className="text-white/60 text-sm md:text-base mb-12 max-w-md leading-relaxed">
                Tell us about your event, and we&apos;ll map out the perfect premium photo booth experience for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                    <Phone className="w-4 h-4 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">+1-800-709-8579</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                    <Mail className="w-4 h-4 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">hello@peekaboothusa.com</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                    <MapPin className="w-4 h-4 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">Los Angeles, CA, United States</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center py-6"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white/40 focus:text-white focus:outline-none focus:border-brand-neon transition-colors appearance-none cursor-pointer text-sm">
                  <option value="" disabled selected hidden>Select services</option>
                  <option value="glam" className="bg-[#111] text-white">The Glam Booth</option>
                  <option value="360" className="bg-[#111] text-white">The 360 Experience</option>
                  <option value="roamer" className="bg-[#111] text-white">The Digital Roamer</option>
                  <option value="magazine" className="bg-[#111] text-white">Magazine Photo Booth Box</option>
                  <option value="other" className="bg-[#111] text-white">Other</option>
                </select>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                />
              </div>

              <div className="relative">
                <textarea 
                  rows={3}
                  placeholder="Details"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors resize-none text-sm"
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-white/10 px-8 py-3 rounded-full text-white text-sm font-medium transition-colors shadow-lg group">
                  Submit <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-white/70" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
