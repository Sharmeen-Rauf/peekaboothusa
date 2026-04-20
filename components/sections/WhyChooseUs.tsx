"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative bg-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <h3 className="text-xl md:text-2xl font-bold text-brand-neon mb-2">
              Why Choose Us
            </h3>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
              For Your Photo Booth <br className="hidden md:block"/> Experience
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
              <p>
                We go beyond just taking pictures — we deliver unforgettable moments. With modern booth options, high-quality prints, instant digital sharing, fun props, and unbeatable customer service, we make every event stand out.
              </p>
              <p>
                Our competitive pricing, custom branding, and seamless setup make us the top choice for photo booth rentals. <span className="text-white font-medium">Rent a Photo Booth Now!</span>
              </p>
            </div>
            
            <div className="mt-10">
              <Button size="md" variant="glass" className="px-8 py-6 text-base rounded-full border-white/20 hover:border-brand-neon/50 group">
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 aspect-[4/3] md:aspect-auto md:h-[600px] w-full group">
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-brand-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/premium-photobooth.png" 
                alt="Premium Photo Booth Experience" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
