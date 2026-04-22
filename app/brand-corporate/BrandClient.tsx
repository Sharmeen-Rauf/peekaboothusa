"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import BrandLogos from "@/components/sections/BrandLogos";
import { ArrowRight, Play, Check, ShieldCheck, MapPin, Award, Star, Quote, Plus, Minus, Camera, Video, MonitorSmartphone } from "lucide-react";

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
    image: "/wedding-photo-booth-rental-usa.png",
    icon: Camera,
    link: "/open-air-photo-booth-rental"
  },
  {
    title: "Selfie Station",
    desc: "Self-operated digital photobooth with fully customized experience.",
    features: ["Unlimited digital experience", "Data collection, analytics, sharing", "Full vinyl wrapping"],
    image: "/gallery-1.png",
    icon: MonitorSmartphone,
    link: "/digital-photo-booth-rental"
  },
  {
    title: "360 BOOTH",
    desc: "Impress your guests with 360 unique video booth experience.",
    features: ["Unlimited 360 videos", "Music, effects and design overlays", "Instant digital sharing and more"],
    image: "/premium-photobooth.png",
    icon: Video,
    link: "/360-photo-booth-rental"
  }
];

const reasons = [
  { icon: MonitorSmartphone, title: "Fully Customizable Selfie Booths", desc: "Our photo booths are fully customizable to align with your brand identity." },
  { icon: MapPin, title: "Multi-Event & Location Coverage", desc: "Whether you have multiple events in a day or a single event spanning multiple locations, we’ve got you covered." },
  { icon: ShieldCheck, title: "Insured & Secured", desc: "Our Selfie Booths come with a “No Oops” guarantee. If there’s a mishap, we’ve got it covered 100%." },
  { icon: Award, title: "7+ years of experience", desc: "We partner with leading brands to guarantee the highest quality of services." }
];

const testimonials = [
  {
    name: "Mellisa Watson",
    role: "Brand Manager",
    text: "We recently featured the Selfie Station at our brand activation event, and it was a massive success! The Selfie Station became the go-to attraction, giving our guests a high-quality, interactive experience that showcased our brand in a fresh, engaging way. Perfect for creating a memorable, interactive experience!"
  },
  {
    name: "Olivia Mendson",
    role: "Brand Manager",
    text: "Using the Selfie Station at our event was a total game-changer! Our guests couldn’t get enough of it. It felt like having our own little glam station, with photos that capture every detail beautifully. It brought a stylish, high-energy vibe that had everyone lining up for their turn! It added an unforgettable, luxe touch to our event!"
  }
];

const caseStudies = [
  { brand: "Tik-Tok", type: "Original Booth" },
  { brand: "Hugo Boss", type: "Selfie Station" },
  { brand: "Fortunata Cuomos", type: "360 Booth" },
  { brand: "Kylie Cosmetics", type: "Selfie Station" },
  { brand: "Ali El Wardanis", type: "360 Booth" },
  { brand: "Lacoste", type: "Original Booth" },
  { brand: "Crew Party", type: "Selfie Station" },
  { brand: "Dyson", type: "Selfie Station" },
  { brand: "Nancy Trans", type: "360 Booth" }
];

const faqs = [
  { q: "What photo booths do we offer?", a: "We offer Original Print Booths, Digital Selfie Stations, 360 Video Booths, and the Vogue Magazine Box. All can be customized for brand activations." },
  { q: "What is included in the Original Selfie Booth package?", a: "It includes high-quality photos, unlimited prints, instant digital sharing, a live gallery, and a choice from 50+ premium backdrops." },
  { q: "What is included in the Digital Selfie Station package?", a: "Unlimited digital captures (GIFs, Boomerangs, Photos), custom overlays, instant sharing via text/email, and full data collection & analytics capabilities." },
  { q: "How much space do you need to set up?", a: "Our setups typically require an 8x8 ft space, but we can accommodate smaller footprints depending on the specific booth chosen." },
  { q: "Can It collect phone numbers and emails?", a: "Yes! Our digital stations and sharing kiosks are equipped with data capture features, perfect for lead generation and marketing lists." }
];

const galleryImages = [
  "/corporate-gala.png",
  "/gallery-1.png",
  "/gallery-2.png",
  "/premium-photobooth.png",
  "/afterlogofourimage.png",
  "/private-party.png",
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function BrandClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/corporate-gala.png" alt="Corporate Photo Booth Event" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <motion.div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(247,54,168,0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Film grain */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center pt-10 pb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">
            WOW YOUR GUESTS!
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Enhance Brand Engagement</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Elevate your brand activations with our original booth, digital selfie station, or 360 video booth. Each option offers customizable branding features to showcase your brand and engage your audience.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center">
            <Link href="#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
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

      {/* ── LOGOS ── */}
      <BrandLogos />

      {/* ── INTRO / ENGAGE ── */}
      <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-[10px] font-bold tracking-widest uppercase mb-6">
                <Star className="w-3 h-3" /> Brand Activations
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Engage your audience with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">branded photo booth</span> experience
              </h2>
              <div className="w-20 h-1 bg-brand-neon rounded-full mb-8" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                With our branded booth options, your attendees will be able to engage with your company while creating lasting memories. We offer <strong className="text-white">Digital Selfie Booths</strong>, which are fully customizable to your brand, as well as our <strong className="text-white">Print Selfie Booths</strong>, which have customizable back panels, backdrops, and prints.
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Learn more below on which booth is right for your event. In terms of corporate event photography pricing, we are the best value.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[500px] w-full">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(247,54,168,0.1)] z-10">
                <Image src="/afterlogofourimage.png" alt="Corporate Activation" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay" />
              </div>
              
              {/* Overlapping Image */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-[2rem] overflow-hidden border-4 border-[#050505] shadow-2xl z-20 transform -translate-y-4 translate-x-4">
                <Image src="/gallery-1.png" alt="Engaged Guests" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
              </div>
              
              {/* Floating Stat card */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-6 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex">
                <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-brand-neon" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">100%</p>
                  <p className="text-[10px] text-white/50 tracking-widest uppercase">Customizable</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOOTH OPTIONS ── */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight">Choose your Photo Booth Experience</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boothOptions.map((booth, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/40 transition-all overflow-hidden flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={booth.image} alt={booth.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center backdrop-blur-md">
                    <booth.icon className="w-7 h-7 text-brand-neon" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 uppercase tracking-wide">{booth.title}</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">{booth.desc}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {booth.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-neon mt-1 shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={booth.link} className="inline-flex items-center gap-2 text-brand-neon font-bold text-sm tracking-widest uppercase hover:text-white transition-colors group/link">
                    Explore More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">The Peek-A-Booth Advantage</p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">Why choose us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {reasons.map((reason, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-brand-neon/10 group-hover:border-brand-neon/40 transition-all">
                      <reason.icon className="w-5 h-5 text-brand-neon" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
              <Image src="/corporate-gala.png" alt="Corporate Event Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-neon/20 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GALLERY ── */}
      <section className="py-20 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">View Latest Events Highlights</motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <Image src={src} alt={`Event Highlight ${i+1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    View Event
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-neon/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Client Love</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight">With Love from Our Clients</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative group hover:border-brand-neon/30 transition-all">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-brand-neon/10 transition-colors" />
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-brand-neon text-brand-neon" />)}
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 relative z-10 italic">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center font-bold text-brand-neon border border-brand-neon/30">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{test.name}</h4>
                    <p className="text-white/50 text-xs tracking-widest uppercase">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE EVENTS ── */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Explore our events</motion.h2>
          </motion.div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {caseStudies.map((study, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center gap-2 hover:bg-brand-neon/10 hover:border-brand-neon/30 transition-all cursor-pointer">
                <span className="font-bold text-sm">{study.brand}</span>
                <span className="text-white/30 text-xs">|</span>
                <span className="text-brand-neon text-xs tracking-widest uppercase">{study.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-32 bg-black border-t border-white/5">
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
