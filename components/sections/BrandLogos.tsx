"use client";

import { motion } from "framer-motion";

const brandLogos = [
  "/cocacolaone.png",
  "/two.png",
  "/three.png",
  "/four.png",
  "/five.png",
  "/six.png",
  "/seven.png",
  "/eight.png",
  "/nine.png",
  "/tenth.png",
  "/eleven.png",
  "/twelve.png",
  "/thirteen.png"
];

export default function BrandLogos() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium tracking-widest text-white/40 uppercase">Proud Photo Booth Partner For Top Brands</p>
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex items-center gap-16 md:gap-24 px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {/* Double array to ensure seamless looping */}
          {[...brandLogos, ...brandLogos].map((src, i) => (
            <div 
              key={i}
              className="relative w-32 md:w-40 h-20 flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-500"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={`Brand partner ${i}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
