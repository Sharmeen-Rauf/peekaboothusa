"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/wedding-photo-booth-rental-usa.png", alt: "Wedding Photo Booth Rental USA" },
  { src: "/gallery-1.png",                      alt: "Photo Booth Event 1" },
  { src: "/corporate-gala.png",                 alt: "Corporate Gala Photo Booth" },
  { src: "/gallery-2.png",                      alt: "Photo Booth Event 2" },
  { src: "/premium-photobooth.png",             alt: "Premium Photo Booth Setup" },
  { src: "/private-party.png",                  alt: "Private Party Photo Booth" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeader
            title="Caught on Camera"
            subtitle="Browse a glimpse of unforgettable moments from our photo booth events nationwide."
            align="left"
            className="mb-0"
          />
          <a
            href="https://instagram.com/peekaboothusa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-white/10 hover:border-brand-neon hover:bg-white/5 transition-all shrink-0"
          >
            <Instagram className="w-5 h-5" />
            <span>@peekaboothusa</span>
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-brand-neon/40 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.35)] group"
          >
            View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
