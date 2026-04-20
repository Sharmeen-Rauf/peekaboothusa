"use client";

import { motion } from "framer-motion";

const brands = [
  "VOGUE", "FORBES", "GQ", "VANITY FAIR", "ELLE", "HARPER'S BAZAAR", "WIRED",
];

export default function BrandLogos() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium tracking-widest text-white/40 uppercase">Trusted by industry leaders</p>
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex items-center gap-24 px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Double array to ensure seamless looping */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div 
              key={i}
              className="text-2xl md:text-4xl font-black tracking-tighter text-white/20 hover:text-white transition-colors duration-500 cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
