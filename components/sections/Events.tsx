"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

const eventTypes = [
  { name: "Luxury Weddings", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { name: "Corporate Galas", image: "/corporate-gala.png", span: "md:col-span-1 md:row-span-1" },
  { name: "Brand Activations", image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { name: "Private Parties", image: "/private-party.png", span: "md:col-span-2 md:row-span-1" },
];

export default function Events() {
  return (
    <section className="py-16 md:py-20 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Perfect For Every Occasion" 
          subtitle="From intimate gatherings to massive scale brand activations, our booths adapt to your vision."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
          {eventTypes.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${event.span}`}
            >
              <Image 
                src={event.image} 
                alt={event.name} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {event.name}
                </h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">
                  <span className="text-brand-neon text-sm font-semibold flex items-center gap-1">
                    View Gallery <span className="text-lg leading-none">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
