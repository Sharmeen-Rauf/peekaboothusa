"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Phone, CheckCircle2, Camera, Video, Sparkles, Layout } from "lucide-react";
import Stats from "@/components/sections/Stats";
import BrandLogos from "@/components/sections/BrandLogos";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function MultanClient() {
  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/multan-hero.png" 
            alt="Photo Booth Rental Multan" 
            fill 
            priority 
            className="object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-neon/20 border border-brand-neon/40 text-brand-neon text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                Now Serving the City of Saints
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8"
            >
              Photo Booth Rental in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Multan</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Peek-A-Booth PK is proud to bring Pakistan&apos;s most premium photo booth rental services to Multan. From grand weddings to corporate galas, we make your Multan events unforgettable.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/get-a-quote" className="bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] flex items-center gap-2 group">
                Book Your Multan Photo Booth <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+923260760786" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Phone className="w-4 h-4" /> +92 326 0760786
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-brand-neon to-transparent mx-auto" />
        </motion.div>
      </section>

      <Stats />
      <BrandLogos />

      {/* ── WHY MULTAN ── */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-4 block">PREMIUM SERVICE</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
                Peek-A-Booth PK in Multan ΓÇö <br />
                <span className="text-brand-neon">What We Offer</span>
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  "Full range of premium photo booths available in Multan",
                  "Serving all major areas: Cantt, Gulgasht, Bosan Road & more",
                  "Professional team with studio-grade equipment",
                  "Customised setups for Multani weddings & celebrations",
                  "Competitive pricing with flexible packages"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-neon shrink-0 mt-0.5" />
                    <p className="text-white/70 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/30 hover:bg-brand-neon/20 text-brand-neon px-8 py-4 rounded-full font-bold transition-all group">
                Get a Multan Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <Image src="/booth-setup-14.jpg" alt="Multan Wedding Photo Booth" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOOTH OPTIONS ── */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Photo Booths Available in <span className="text-brand-neon">Multan</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">We bring our complete collection of world-class photo booths to the City of Saints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Open Air Photo Booth Multan", 
                desc: "Our most popular setup. Perfect for Multan's large wedding gatherings and family celebrations. Custom backdrops and branded prints.",
                icon: Camera,
                link: "/open-air-photo-booth-rental"
              },
              { 
                title: "360 Photo Booth Multan", 
                desc: "Experience the excitement of the 360 booth in Multan! Stunning slow-motion videos perfect for baraats and corporate events.",
                icon: Video,
                link: "/360-photo-booth-rental"
              },
              { 
                title: "Vogue Magazine Photo Booth Multan", 
                desc: "Bring the glamour of a magazine cover to your Multan event. Life-sized, custom covers that every guest will love.",
                icon: Sparkles,
                link: "/vogue-magazine-photo-booth-rental"
              },
              { 
                title: "Digital Photo Booth Multan", 
                desc: "Perfect for modern Multan events ΓÇö instant GIFs, boomerangs, and WhatsApp sharing. Great for university functions.",
                icon: Layout,
                link: "/digital-photo-booth-rental"
              }
            ].map((booth, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#0a0a0a] border border-white/5 hover:border-brand-neon/30 p-10 rounded-[2.5rem] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center mb-8 group-hover:bg-brand-neon/20 transition-all">
                  <booth.icon className="w-6 h-6 text-brand-neon" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{booth.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8">{booth.desc}</p>
                <Link href={booth.link} className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider hover:text-brand-neon transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/get-a-quote" className="bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] inline-flex items-center gap-2 group">
              Explore Multan Photo Booths <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AREAS WE COVER ── */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">Areas We Cover in <span className="text-brand-neon">Multan</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Multan Cantt",
                  "Gulgasht Colony",
                  "Shah Rukn-e-Alam Colony",
                  "New Multan & Model Town",
                  "Bosan Road Area",
                  "Chungi Amarsidhu Area"
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-neon/30 transition-all">
                    <MapPin className="w-5 h-5 text-brand-neon" />
                    <span className="font-bold text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <Link href="/get-a-quote" className="bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] inline-flex items-center gap-2 group">
                Check Multan Availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10"
            >
              <Image src="/multan-hero.png" alt="Multan Service Map" fill className="object-cover" />
              <div className="absolute inset-0 bg-brand-neon/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Testimonials />

      {/* ── FOOTER SEO ── */}
      <section className="py-16 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-white/40 text-xs leading-relaxed">
            Peek-A-Booth PK is proud to offer premium photo booth rental services in Multan. Our open air, 360, Vogue magazine, and digital photo booths are now available for weddings, birthdays, corporate events, and parties across Multan. Book your Multan photo booth rental today and give your guests the most memorable event experience in the City of Saints!
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
