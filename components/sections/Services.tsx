"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    title: "The Glam Booth",
    description: "Our signature black and white experience with skin-smoothing beauty filters. Perfect for luxury weddings and high-end galas.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    features: ["Studio lighting", "B&W Beauty Filter", "Instant Prints", "Live Gallery"],
  },
  {
    title: "The 360 Experience",
    description: "Capture every angle with our premium 360 video booth. Slow-motion, reverse, and custom overlays included.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    features: ["Slow-Mo Video", "Custom Overlays", "Instant AirDrop", "Dedicated Director"],
  },
  {
    title: "The Digital Roamer",
    description: "We bring the booth to the dance floor. A fully mobile, ring-light ring capturing candid moments all night.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    features: ["Mobile Setup", "GIFs & Boomerangs", "Text to Phone", "High Energy"],
  },
  {
    title: "Magazine Photo Booth Box",
    description: "Book our magazine photo booth for your next event. Includes custom frame, personalized headings, and much more.",
    image: "/magazine-booth.png",
    features: ["Life-Sized Box", "Custom Headings", "Instant Prints", "Red Carpet Vibe"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-neon/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Curated Experiences" 
          subtitle="Choose the perfect setup for your event. All packages include a professional attendant and custom branding."
        />

        <div className="flex flex-col gap-12 lg:gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-brand-neon rounded-2xl rotate-2 group-hover:rotate-3 transition-transform duration-500 opacity-20 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 glass-panel">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-glow text-xs font-bold tracking-widest uppercase mb-6">
                  Collection 0{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-neon mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant={index === 0 ? "secondary" : "outline"}>
                  Explore Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
