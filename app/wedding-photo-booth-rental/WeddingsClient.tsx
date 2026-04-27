"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials, { TestimonialItem } from "@/components/sections/Testimonials";
import { ArrowRight, Play, Check, Sparkles, Heart, Video, MonitorSmartphone, Camera, Plus, Minus } from "lucide-react";

/* ΓöÇΓöÇΓöÇ DATA ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const boothOptions = [
  {
    title: "360 PHOTO BOOTH",
    desc: "The most sought-after addition to Pakistani weddings — cinematic slow-motion videos.",
    features: ["Slow-motion video capture", "Custom wedding overlays", "Instant WhatsApp sharing", "Dedicated on-site director"],
    image: "/booth-setup-4.jpg",
    icon: Video,
    link: "/360-photo-booth-rental"
  },
  {
    title: "VOGUE MAGAZINE BOOTH",
    desc: "Create full-length magazine cover photos — the dream addition to any mehndi night.",
    features: ["Life-sized magazine box", "Custom bridal cover design", "High-quality instant prints", "Instagram-worthy experience"],
    image: "/booth-setup-13.jpg",
    icon: Sparkles,
    link: "/vogue-magazine-photo-booth-rental"
  },
  {
    title: "OPEN AIR BOOTH",
    desc: "A timeless choice for walima celebrations — spacious enough for large family groups.",
    features: ["Custom wedding backdrops", "Personalised wedding monogram", "Unlimited instant prints", "Professional DSLR setup"],
    image: "/booth-setup-2.jpg",
    icon: Camera,
    link: "/open-air-photo-booth-rental"
  },
  {
    title: "DIGITAL PHOTO BOOTH",
    desc: "A sleek, modern, and print-free digital experience delivered directly to phones.",
    features: ["GIFs, boomerangs & photos", "Instant WhatsApp delivery", "Custom digital overlays", "Modern & sleek setup"],
    image: "/booth-setup-3.jpg",
    icon: MonitorSmartphone,
    link: "/digital-photo-booth-rental"
  }
];

const galleryImages = [
  "/booth-setup-5.jpg", // Desi wedding hands/mehndi
  "/booth-setup-6.jpg", // Couple
  "/booth-setup-7.jpg", // Wedding setup
  "/booth-setup-8.jpg", // Portrait
  "/booth-setup-9.jpg", // Details
  "/booth-setup-10.jpg", // Celebration
  "/booth-setup-11.jpg", // Stage decor
  "/booth-setup-12.jpg", // Bridal jewelry
  "/booth-setup-13.jpg", // Mehndi
  "/booth-setup-14.jpg"  // More details
];

const caseStudies = [
  { brand: "Rachelle & Michael", type: "Original Booth", image: "/booth-setup-15.jpg" },
  { brand: "HAPPILY EVER ASTE", type: "Glam Booth", image: "/booth-setup-4.jpg" },
  { brand: "Tamra & Kyle", type: "Original Booth", image: "/booth-setup-3.jpg" },
  { brand: "Christian & Sharen", type: "Original Booth", image: "/booth-setup-13.jpg" },
  { brand: "Kenthe & Chrlier", type: "Original Booth", image: "/booth-setup-8.jpg" },
  { brand: "Ty & Bri", type: "Glam Booth", image: "/booth-setup-10.jpg" }
];

const customTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Anum & Faisal",
    avatar: "https://i.pravatar.cc/150?u=anum",
    text: "The 360 booth was the star of our baraat! Every single guest used it and the slow-motion videos were absolutely stunning. Best wedding decision we made!"
  },
  {
    id: 2,
    name: "Rabia M.",
    avatar: "https://i.pravatar.cc/150?u=rabia",
    text: "The Vogue Magazine booth at my mehndi night was breathtaking. Every girl wanted to be on the cover and the prints were so beautiful. 100% recommend!"
  }
];

const faqs = [
  { q: "What is the cost of a wedding photo booth rental in Pakistan?", a: "Wedding photo booth rental pricing varies based on your chosen booth type, number of hours, location, and customisation requirements. Contact us for a custom wedding quote tailored to your budget and vision." },
  { q: "Can you cover multiple wedding functions?", a: "Yes! We offer multi-function packages for couples who want a photo booth at their mehndi, baraat, and walima. Contact us for bundled pricing." },
  { q: "How early should I book for my wedding?", a: "We recommend booking at least 4—6 weeks before your wedding, especially during peak wedding seasons. Popular dates book out fast ΓÇö get in touch as early as possible!" },
  { q: "Do you travel for destination weddings?", a: "Yes! We travel across Pakistan and can arrange coverage for events in cities beyond our standard service areas. Contact us for travel arrangements." }
];

/* ΓöÇΓöÇΓöÇ MAIN COMPONENT ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

export default function WeddingsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ΓöÇΓöÇ HERO ΓöÇΓöÇ */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/wedding-photo-booth-rental-usa.png" alt="Desi Wedding Hands Mehndi" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(247,54,168,0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Film grain */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

        <div className="container mx-auto px-6 max-w-4xl relative z-20 text-center pt-10 pb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4 flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 fill-brand-neon" /> WOW YOUR GUESTS
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Wedding Photo Booth<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Rental in Pakistan</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Your wedding is the most important event of your life ΓÇö and every moment deserves to be captured beautifully. At Peek-A-Booth PK, we specialise in wedding photo booth rental for Pakistani weddings.
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

      {/* ΓöÇΓöÇ CREATE MEMORIES ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(247,54,168,0.1)]">
              <Image src="/booth-setup-22.jpg" alt="Desi Wedding Reception" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                <p className="text-white/90 text-sm font-medium">"A one-of-a-kind interactive experience for cocktail hours and receptions."</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Why Every Pakistani <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Wedding Needs</span> a Photo Booth
              </h2>
              <div className="w-20 h-1 bg-brand-neon rounded-full mb-8" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                From intimate mehndi nights to grand baraat receptions, our photo booths keep guests entertained, capture candid moments formal photography misses, and generate instant social media content. Fully customisable to match your shaadi theme and colour palette.
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 text-brand-neon font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group">
                Reserve your date <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ HOLLYWOOD MOMENT & CUSTOMIZE ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-24">
          
          {/* Hollywood Moment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Give your Guests a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-neon">Hollywood Moment</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                The perfect engagement to your wedding, our sleek photo booth equipment is the ultimate way to make your guests feel like VIPs. Send photos, gifs, or boomerangs instantly to your phone and pump up the fun with themed props perfect for all ages.
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-white/10 text-white px-8 py-4 rounded-full font-bold text-sm transition-all group">
                Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 lg:order-2 relative h-[350px] w-full rounded-[2rem] overflow-hidden border border-white/10">
              <Image src="/booth-setup-4.jpg" alt="Hollywood Style Photo Booth" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </motion.div>
          </div>

          {/* Customize your Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[350px] w-full rounded-[2rem] overflow-hidden border border-white/10">
              <Image src="/booth-setup-14.jpg" alt="Customize Wedding Templates" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Customize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Experience</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                Design a template that fits with your wedding—s style. Choose from our pre-set templates, or create something entirely new. Either way, you—ll be able to create an instant print that guests will love from their experience with your photo booth!
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-white/10 text-white px-8 py-4 rounded-full font-bold text-sm transition-all group">
                Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ΓöÇΓöÇ GLAM BOOTH HIGHLIGHT ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image src="/booth-setup-2.jpg" alt="Glam Booth" fill sizes="100vw" className="object-cover opacity-10 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(247,54,168,0.1)]">
            <span className="inline-flex items-center justify-center bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">2025 Bride's Choice!</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Kardashian Style <br/><span className="text-brand-neon">Photo Booth</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Introducing the one-of-a-kind ΓÇÿKardashian-style— photo booth, featuring a skin-smoothing effect available in B&W or Color. Indulge in our luxurious skin smooth filter, designed to reduce fine lines and wrinkles while enhancing your skin—s overall appearance. Experience a soft, airbrushed quality that ensures stunning photos from every angle.
            </p>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
              Explore Glam Booth <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ΓöÇΓöÇ BOOTH OPTIONS ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight">Choose your Photo Booth Experience</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {boothOptions.map((booth, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/40 transition-all overflow-hidden flex flex-col shadow-[0_0_0_rgba(247,54,168,0)] hover:shadow-[0_0_30px_rgba(247,54,168,0.15)] h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={booth.image} alt={booth.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90" />
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

      {/* ΓöÇΓöÇ HIGHLIGHTS GALLERY ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Portfolio</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight">View Latest Events Highlights</motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((src, i) => {
              let spanClass = "col-span-1 row-span-1";
              if (i === 0) spanClass = "col-span-2 row-span-2";
              if (i === 4) spanClass = "col-span-2 row-span-1";
              if (i === 7) spanClass = "col-span-2 row-span-2";
              
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`relative rounded-2xl overflow-hidden group cursor-pointer aspect-square ${spanClass}`}>
                  <Image src={src} alt={`Wedding Highlight ${i+1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-neon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-brand-neon/40 rounded-2xl transition-colors duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ TESTIMONIALS ΓöÇΓöÇ */}
      <Testimonials testimonialsData={customTestimonials} />

      {/* ΓöÇΓöÇ EXPLORE WEDDINGS ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Case Studies</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Explore our last weddings</motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Karachi", label: "Available for all events", icon: "🏙️", href: "/karachi-photo-booth-rental" },
              { city: "Lahore", label: "Pakistan's party capital", icon: "✨", href: "/lahore-photo-booth-rental" },
              { city: "Islamabad", label: "Corporate & private events", icon: "🏢", href: "/islamabad-photo-booth-rental" },
              { city: "Multan", label: "Now available!", icon: "🎉", href: "/photo-booth-rental-multan" }
            ].map((study, i) => (
              <Link key={i} href={study.href} className="group relative border border-white/10 hover:border-brand-neon/40 rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center h-48 transition-all shadow-[0_0_0_rgba(247,54,168,0)] hover:shadow-[0_0_30px_rgba(247,54,168,0.15)] cursor-pointer bg-[#0a0a0a]">
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 relative z-20 group-hover:scale-105 group-hover:text-brand-neon transition-all duration-300">{study.city}</h3>
                <p className="text-brand-neon text-[10px] md:text-xs font-bold tracking-widest uppercase relative z-20 bg-black/50 px-3 py-1 rounded-full border border-brand-neon/30 backdrop-blur-md">{study.label}</p>
                <div className="absolute top-4 right-4 text-2xl z-20 opacity-40 group-hover:opacity-100 transition-opacity">{study.icon}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ FAQ ΓöÇΓöÇ */}
      <section className="py-16 md:py-24 bg-black border-t border-white/5">
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

      {/* ΓöÇΓöÇ CONTACT ΓöÇΓöÇ */}
      <Contact />

    </div>
  );
}

