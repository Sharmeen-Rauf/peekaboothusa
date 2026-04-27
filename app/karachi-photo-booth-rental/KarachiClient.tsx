"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Phone, MapPin, Star, Camera, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Reuse existing sections
const Stats = dynamic(() => import("@/components/sections/Stats"));
const BrandLogos = dynamic(() => import("@/components/sections/BrandLogos"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function KarachiClient() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/karachi-hero.png" 
            alt="Photo Booth Rental Karachi"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/20 mb-6"
          >
            <MapPin className="w-4 h-4 text-brand-neon" />
            <span className="text-xs font-bold tracking-widest text-brand-neon uppercase">Karachi&apos;s Premium Photo Booth Rental</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Elevate Your Events in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">
              Karachi with Peek-A-Booth
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            From beachside weddings at French Beach to corporate galas in DHA and Clifton ΓÇö we bring the most advanced, high-end photo booth experiences to the City of Lights.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/get-a-quote">
              <Button size="lg" variant="primary" className="group">
                Book Your Karachi Event
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+923260760786">
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" /> Call Us Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Localized Content Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Why Karachi Chooses <span className="text-brand-neon">Peek-A-Booth</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Karachi is a city that never sleeps, and neither does our commitment to making your parties legendary. Whether it&apos;s a grand Mehndi in KDA, a corporate launch at PC Hotel, or an intimate birthday in North Nazimabad, we provide seamless, professional service that matches the energy of Karachi.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Camera, title: "Premium DSLR Quality", desc: "Studio-grade lighting and high-res cameras for the perfect shot." },
                  { icon: ShieldCheck, title: "Professional On-site Team", desc: "Our Karachi-based technicians ensure everything runs smoothly." },
                  { icon: Zap, title: "Instant Digital Delivery", desc: "Share your memories instantly via WhatsApp, AirDrop, or QR code." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-brand-neon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-brand-neon/10"
            >
              <Image 
                src="/booth-setup-16.jpg" 
                alt="Karachi Event Photo Booth"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-neon text-brand-neon" />)}
                </div>
                <p className="text-xl font-bold">#1 Rated in Karachi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
      <BrandLogos />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
