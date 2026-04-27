"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import { ArrowRight, Sparkles, Heart, Star, Cake, Building2, PartyPopper } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const eventTypes = [
  {
    id: "weddings",
    title: "Weddings",
    subtitle: "Say 'I Do' to Selfie Booth Memories",
    desc: "Rent the original selfie booth or Glam Booth for your wedding! With elegant backdrops, beautiful print designs, and high-quality photos, it adds extra fun for your guests.",
    link: "/wedding-photo-booth-rental",
    image: "/booth-setup-22.jpg",
    icon: Heart,
    features: ["Kardashian Glam Booth", "Custom Wedding Templates", "Guestbook Prints"]
  },
  {
    id: "parties",
    title: "Private Parties",
    subtitle: "Snap. Print. Share.",
    desc: "Our state-of-the-art photo booths are the life of every party! Create joyful memories with customizable photo frames, unlimited prints, and instant sharing options.",
    link: "/parties",
    image: "/booth-setup-23.jpg",
    icon: PartyPopper,
    features: ["Digital Selfie Station", "Boomerangs & GIFs", "Fun Props & Neon Signs"]
  },
  {
    id: "corporate",
    title: "Corporate & Brand",
    subtitle: "Enhance Brand Engagement",
    desc: "Elevate your brand activations with our original booth, digital selfie station, or 360 video booth. Each option offers customizable branding features to showcase your brand.",
    link: "/brand-corporate",
    image: "/booth-setup-1.jpg",
    icon: Building2,
    features: ["Data Capture & Analytics", "Custom Branded Booth Wraps", "Lead Generation"]
  },
  {
    id: "birthdays",
    title: "Birthdays & Milestones",
    subtitle: "Celebrate in Style",
    desc: "Whether it's a Sweet 16, a 30th bash, or a milestone anniversary, our booths capture the fun and excitement of your special day with custom themes and unlimited prints.",
    link: "#contact", // Contact anchor since we don't have a specific page yet
    image: "/booth-setup-2.jpg",
    icon: Cake,
    features: ["Themed Props", "Custom Birthday Overlays", "360 Video Booth"]
  }
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function EventsClient() {
  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/booth-setup-3.jpg" alt="Unforgettable Events Crowd" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(247,54,168,0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Film grain */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

        <div className="container mx-auto px-6 max-w-4xl relative z-20 flex flex-col items-center justify-center text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-neon" /> MEMORIES FOR EVERY OCCASION
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Events</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            From luxury weddings and private parties to high-impact corporate activations, we provide premium photo booth experiences tailored to your specific event needs.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Scroll</span>
          <motion.div className="w-px h-8 bg-gradient-to-b from-brand-neon/60 to-transparent" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </section>

      {/* ── EVENT CATEGORIES DIRECTORY ── */}
      <section className="py-16 md:py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col gap-16 md:gap-32">
            {eventTypes.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 0.8 }} 
                    className="w-full lg:w-1/2"
                  >
                    <Link href={event.link} className="block relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(247,54,168,0.05)] hover:shadow-[0_0_50px_rgba(247,54,168,0.2)] transition-shadow duration-500">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 50vw" 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-neon shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <event.icon className="w-6 h-6" />
                      </div>
                    </Link>
                  </motion.div>
                  
                  {/* Content Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }} 
                    transition={{ duration: 0.8, delay: 0.2 }} 
                    className="w-full lg:w-1/2"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-[10px] font-bold tracking-widest uppercase mb-6">
                      <Star className="w-3 h-3" /> Event Spotlight
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                      {event.title}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-6">
                      {event.subtitle}
                    </h3>
                    
                    <div className="w-16 h-1 bg-brand-neon rounded-full mb-6" />
                    
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                      {event.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-10">
                      {event.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <Star className="w-3 h-3 text-brand-neon" />
                          </div>
                          <span className="text-white/80 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={event.link} className="inline-flex items-center gap-3 bg-white text-black hover:bg-brand-neon hover:text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
                      Explore {event.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── CONTACT ── */}
      <Contact />

    </div>
  );
}
