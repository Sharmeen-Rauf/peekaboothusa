"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 relative bg-surface overflow-hidden">
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
              Why Choose Peek-A-Booth PK
            </h3>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Pakistan's Most Loved <br className="hidden md:block"/> Photo Booth Experience
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
              <p>
                At Peek-A-Booth PK, we don't just set up a camera — we create memories that last a lifetime. Whether it's a grand baraat, a milestone birthday, a mehndi night, or a brand activation, our photo booths are designed to be the highlight of your event.
              </p>
              <p>
                We combine premium technology, creative setups, and on-the-ground professional attendants to deliver an experience your guests will talk about for years.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                {[
                  "Premium DSLR setups",
                  "Custom branded overlays",
                  "Professional attendants",
                  "Instant digital sharing",
                  "Available in 4 major cities",
                  "100% satisfaction guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10">
              <Link href="/pricing" className="inline-block">
                <Button size="md" variant="glass" className="px-8 py-6 text-base rounded-full border-white/20 hover:border-brand-neon/50 group">
                  See All Packages
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
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
              
              <Image 
                src="/premium-photobooth.png" 
                alt="Premium Photo Booth Experience" 
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
