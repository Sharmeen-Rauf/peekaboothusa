"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, NotebookPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface ContactProps {
  hideHeader?: boolean;
}

export default function Contact({ hideHeader = false }: ContactProps) {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form data here
    router.push("/thankyou");
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`grid grid-cols-1 ${hideHeader ? "" : "lg:grid-cols-2"} gap-16 lg:gap-24`}>
          
          {/* Left Column: Contact Info Card */}
          {!hideHeader && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-card rounded-[2rem] p-10 lg:p-12 border border-brand-neon/20 shadow-[0_0_50px_rgba(247,54,168,0.05)] overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Subtle glow inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl border border-brand-neon/30 flex items-center justify-center mb-8 bg-brand-neon/5">
                  <NotebookPen className="w-6 h-6 text-brand-neon" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-[1.15]">
                  Tell Us About <br className="hidden sm:block" /> Your Event.
                </h2>
                
                <p className="text-foreground/60 text-sm md:text-base mb-12 max-w-md leading-relaxed">
                  Ready to make your event unforgettable? Fill in your details and we&apos;ll get back to you within 24 hours with a custom quote.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-foreground/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                      <Phone className="w-4 h-4 text-foreground group-hover:text-brand-neon transition-colors" />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base tracking-wide">+92 326 0760786</span>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-foreground/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                      <Mail className="w-4 h-4 text-foreground group-hover:text-brand-neon transition-colors" />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base tracking-wide">hello@peekaboothpk.com</span>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-foreground/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                      <MapPin className="w-4 h-4 text-foreground group-hover:text-brand-neon transition-colors" />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base tracking-wide">Karachi, Lahore, Islamabad, Multan</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right Column: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col justify-center py-6 ${hideHeader ? "max-w-3xl mx-auto w-full" : ""}`}
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Event Type (e.g. Wedding)"
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="date" 
                    placeholder="Event Date"
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground/40 focus:text-foreground focus:outline-none focus:border-brand-neon transition-colors appearance-none cursor-pointer text-sm">
                    <option value="" disabled selected hidden>City</option>
                    <option value="karachi" className="bg-card text-foreground">Karachi</option>
                    <option value="lahore" className="bg-card text-foreground">Lahore</option>
                    <option value="islamabad" className="bg-card text-foreground">Islamabad</option>
                    <option value="multan" className="bg-card text-foreground">Multan</option>
                    <option value="other" className="bg-card text-foreground">Other</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  rows={3}
                  placeholder="Message / Event Details"
                  className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder-foreground/40 focus:outline-none focus:border-brand-neon transition-colors resize-none text-sm"
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow px-10 py-4 rounded-full text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(247,54,168,0.3)] group">
                  Get My Free Quote <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
