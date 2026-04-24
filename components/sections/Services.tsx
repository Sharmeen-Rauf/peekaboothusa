"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Open Air Photo Booth",
    description: "A spacious, elegant setup perfect for large groups. Ideal for wedding receptions, corporate dinners, and Eid gatherings.",
    image: "/booth-setup-13.jpg",
    features: ["DSLR Camera & Studio Lighting", "Custom Backdrop & Props", "Unlimited Instant Prints", "WhatsApp Sharing"],
    href: "/open-air-photo-booth-rental"
  },
  {
    title: "360 Photo Booth",
    description: "Experience Pakistan's most exciting trend! Captures slow-motion video from every angle — perfect for weddings and brand launches.",
    image: "/booth-setup-14.jpg",
    features: ["Slow-Mo Video Capture", "Branded Video Overlays", "Instant WhatsApp Sharing", "On-site Director"],
    href: "/360-photo-booth-rental"
  },
  {
    title: "Vogue Magazine Photo Booth",
    description: "Make your guests feel like they're on a magazine cover. Life-sized, custom magazine covers — a show-stopping addition to any event.",
    image: "/magazine-booth.png",
    features: ["Life-sized Custom Box", "Personalized Headings", "Red Carpet Experience", "High-Resolution Prints"],
    href: "/vogue-magazine-photo-booth-box"
  },
  {
    title: "Digital Photo Booth",
    description: "Sleek, modern, and incredibly fun. GIFs, boomerangs, and instant digital sharing — perfect for birthdays and corporate activations.",
    image: "/booth-setup-15.jpg",
    features: ["GIFs & Boomerangs", "Instant Digital Filters", "SMS & Email Delivery", "Modern Portable Setup"],
    href: "/digital-photo-booth-rental"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-neon/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Choose the Perfect Booth for Your Event" 
          subtitle="Every event is unique — and so is every Peek-A-Booth experience. Explore our premium options curated for Pakistan."
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
                
                <Link href={service.href}>
                  <Button variant={index === 0 ? "secondary" : "outline"}>
                    Explore {service.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
