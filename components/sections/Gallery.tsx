"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Instagram } from "lucide-react";

const images = [
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeader 
            title="Caught on Camera" 
            subtitle="Follow us on Instagram for the latest events and behind-the-scenes."
            align="left"
            className="mb-0"
          />
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-white/10 hover:border-brand-neon hover:bg-white/5 transition-all"
          >
            <Instagram className="w-5 h-5" />
            <span>@peekaboothusa</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden group aspect-square md:aspect-auto md:h-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-neon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
