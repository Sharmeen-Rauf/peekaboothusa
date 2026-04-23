"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import { ArrowRight, Play, Check, ShieldCheck, Star, Sparkles, Truck, Image as ImageIcon, Video, MonitorSmartphone, Camera, Plus, Minus } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const boothOptions = [
  {
    title: "ORIGINAL BOOTH",
    desc: "The original selfie booth experience — perfect for capturing groups of all sizes!",
    features: ["High-quality photos & unlimited prints", "Instant digital sharing & live gallery", "A choice of 50+ backdrops and more"],
    image: "/booth-setup-18.jpg",
    icon: Camera,
    link: "/open-air-photo-booth-rental"
  },
  {
    title: "Selfie Station",
    desc: "Self-operated digital photobooth with fully customized experience.",
    features: ["Unlimited digital experience", "Data collection, analytics", "Instant Digital Sharing and more"],
    image: "/booth-setup-19.jpg",
    icon: MonitorSmartphone,
    link: "/digital-photo-booth-rental"
  },
  {
    title: "360 BOOTH",
    desc: "Impress your guests with 360 unique video booth experience.",
    features: ["Unlimited 360 videos", "Music, effects and design overlays", "Instant digital sharing and more"],
    image: "/booth-setup-20.jpg",
    icon: Video,
    link: "/360-photo-booth-rental"
  },
  {
    title: "GLAM BOOTH",
    desc: "The modern photo booth experience – featuring the iconic Kardashian-style filter.",
    features: ["All original booth features", "Beauty filter + black and white effect", "Premium white backdrop"],
    image: "/booth-setup-21.jpg",
    icon: Sparkles,
    link: "#contact" // Fallback since there isn't a dedicated glam booth page yet
  }
];

const reasons = [
  { icon: Star, title: "On-site, Rockstar Attendants", desc: "We go through a pretty extensive process of vetting & training our attendants." },
  { icon: Truck, title: "Free Delivery, Setup & Breakdown", desc: "We roll in an hour early, set up the magic, and once the party’s over, we pack up without a trace." },
  { icon: ShieldCheck, title: "Insured & Secured", desc: "Our Selfie Booths come with a “No Oops” guarantee. If there’s a mishap, we’ve got it covered 100%." },
  { icon: ImageIcon, title: "Options Galore!", desc: "From snazzy prints to funky Boomerangs and GIFs, we’ve got all the tools to keep the fun rolling." }
];

const galleryImages = [
  "/booth-setup-22.jpg",
  "/booth-setup-19.jpg",
  "/booth-setup-1.jpg",
  "/booth-setup-2.jpg",
  "/booth-setup-3.jpg",
  "/booth-setup-4.jpg",
  "/booth-setup-5.jpg"
];

const caseStudies = [
  { brand: "GRAND OPENING", type: "Original Booth", image: "/booth-setup-20.jpg" },
  { brand: "Holiday Party", type: "Glam Booth", image: "/booth-setup-7.jpg" },
  { brand: "Baby Shower", type: "Original Booth", image: "/booth-setup-8.jpg" },
  { brand: "Party", type: "Selfie Station", image: "/booth-setup-9.jpg" },
  { brand: "Crew Party", type: "Original Booth", image: "/booth-setup-10.jpg" },
  { brand: "Lauren Tetef’s Camp", type: "Selfie Station", image: "/booth-setup-11.jpg" },
  { brand: "Graduation Party", type: "Original Booth", image: "/booth-setup-12.jpg" },
  { brand: "Eva Longoria Foundation", type: "Original Booth", image: "/booth-setup-13.jpg" },
  { brand: "Montalban Party", type: "Glam Booth", image: "/booth-setup-14.jpg" }
];

const faqs = [
  { q: "What photo booths do we offer?", a: "We offer Original Print Booths, Digital Selfie Stations, 360 Video Booths, Glam Booths, and the Vogue Magazine Box to fit any party vibe." },
  { q: "What events are suitable for these booths?", a: "Our booths are perfect for birthdays, weddings, baby showers, graduations, holiday parties, and any social gathering." },
  { q: "What is included in the Original Selfie Booth package?", a: "High-quality photos, unlimited prints, instant digital sharing, a live gallery, and a choice of 50+ backdrops." },
  { q: "What is included in the Digital Selfie Station package?", a: "Unlimited digital photos, GIFs, and boomerangs, plus instant sharing via text or email." },
  { q: "What is included in the Glam Selfie Booth package?", a: "The classic Kardashian-style black & white smoothing beauty filter, premium white backdrop, and unlimited prints." },
  { q: "How much space do you need to set up?", a: "We typically request an 8x8 ft space, but we can accommodate smaller footprints depending on the specific booth you choose." },
  { q: "What are the backdrop options?", a: "We offer over 50 premium backdrop options ranging from solid colors, sequin walls, and custom-printed step-and-repeats." },
  { q: "What kind of props do you offer?", a: "We bring a carefully curated trunk of high-quality PVC signs, oversized glasses, stylish hats, and themed props." }
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function PartiesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/booth-setup-15.jpg" alt="Party Photo Booth Event" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(247,54,168,0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Film grain */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center pt-10 pb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">
            WOW YOUR GUESTS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Photo Booth for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Party or Event</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            We have you covered for any event with a variety of photo booth options: print, digital, or 360 video booths. Each solution is perfect for capturing unforgettable moments. Reach out to learn more.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
              Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#video" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all backdrop-blur-sm group">
              <Play className="w-4 h-4 text-brand-neon group-hover:scale-110 transition-transform" /> Watch a Video
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Scroll</span>
          <motion.div className="w-px h-10 bg-gradient-to-b from-brand-neon/60 to-transparent" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </section>

      {/* ── SNAP. PRINT. SHARE. ── */}
      <section className="py-16 md:py-20 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-[10px] font-bold tracking-widest uppercase mb-6">
                <Sparkles className="w-3 h-3" /> Party Magic
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Snap. Print.</span> Share.
              </h2>
              <div className="w-20 h-1 bg-brand-neon rounded-full mb-8" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                Our state-of-the-art photo booths are the life of every party and event! Create joyful memories with customizable photo frames, unlimited prints, and instant sharing options.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[500px] w-full">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(247,54,168,0.1)] z-10">
                <Image src="/booth-setup-20.jpg" alt="Party Photo Booth" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay" />
              </div>
              
              {/* Overlapping Image */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-[2rem] overflow-hidden border-4 border-[#050505] shadow-2xl z-20 transform -translate-y-4 translate-x-4">
                <Image src="/booth-setup-19.jpg" alt="Guests Having Fun" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
              </div>
              
              {/* Floating Stat card */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-6 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex">
                <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center border border-brand-neon/30">
                  <Star className="w-6 h-6 text-brand-neon" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">5 Star</p>
                  <p className="text-[10px] text-white/50 tracking-widest uppercase">Experience</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Guarantee</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight">Why choose us?</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 relative group hover:border-brand-neon/40 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-neon/10 group-hover:border-brand-neon/40 group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-brand-neon" />
                </div>
                <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOTH OPTIONS ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight">Choose your Photo Booth Experience</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boothOptions.map((booth, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group rounded-[2rem] bg-black border border-white/10 hover:border-brand-neon/40 transition-all overflow-hidden flex flex-col shadow-[0_0_0_rgba(247,54,168,0)] hover:shadow-[0_0_30px_rgba(247,54,168,0.15)] h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={booth.image} alt={booth.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center backdrop-blur-md">
                    <booth.icon className="w-7 h-7 text-brand-neon" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{booth.title}</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">{booth.desc}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {booth.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-neon mt-1 shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={booth.link} className="inline-flex items-center justify-center w-full gap-2 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all border border-brand-neon/30 text-brand-neon hover:bg-brand-neon hover:text-white group/link">
                    Explore More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GALLERY ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Portfolio</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight">View Latest Events Highlights</motion.h2>
          </motion.div>
          
          {/* Bento-style gallery for visual interest */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((src, i) => {
              // Create dynamic spanning for a bento feel
              let spanClass = "col-span-1 row-span-1";
              if (i === 0) spanClass = "col-span-2 row-span-2";
              if (i === 4) spanClass = "col-span-2 row-span-2";
              
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`relative rounded-2xl overflow-hidden group cursor-pointer aspect-square ${spanClass}`}>
                  <Image src={src} alt={`Event Highlight ${i+1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-neon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-brand-neon/40 rounded-2xl transition-colors duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── EXPLORE EVENTS ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Case Studies</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Explore all kinds of our events</motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudies.map((study, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative border border-white/10 hover:border-brand-neon/40 rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center h-48 transition-all shadow-[0_0_0_rgba(247,54,168,0)] hover:shadow-[0_0_30px_rgba(247,54,168,0.15)] cursor-pointer">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <Image src={study.image} alt={study.brand} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 z-0 opacity-50 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 relative z-20 group-hover:scale-105 group-hover:text-brand-neon transition-all duration-300">{study.brand}</h3>
                <p className="text-brand-neon text-[10px] md:text-xs font-bold tracking-widest uppercase relative z-20 bg-black/50 px-3 py-1 rounded-full border border-brand-neon/30 backdrop-blur-md">{study.type}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <ArrowRight className="w-5 h-5 text-brand-neon" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</motion.h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-brand-neon/40 bg-brand-neon/5" : "border-white/10 bg-[#0a0a0a] hover:border-white/20"}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left group">
                    <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? "text-brand-neon" : "text-white group-hover:text-brand-neon"}`}>{faq.q}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all ${isOpen ? "bg-brand-neon text-white shadow-[0_0_10px_rgba(247,54,168,0.4)]" : "bg-white/10 text-white/60 group-hover:bg-white/20"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div key="c" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact />

    </div>
  );
}
