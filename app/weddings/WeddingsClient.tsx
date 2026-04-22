"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials, { TestimonialItem } from "@/components/sections/Testimonials";
import { ArrowRight, Play, Check, Sparkles, Heart, Video, MonitorSmartphone, Camera, Plus, Minus } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    icon: Camera,
    link: "/open-air-photo-booth-rental"
  },
  {
    title: "GLAM BOOTH",
    desc: "The modern photo booth experience – featuring the iconic Kardashian-style filter.",
    features: ["All original booth features", "Beauty filter + black and white effect", "Premium white backdrop"],
    image: "https://images.unsplash.com/photo-1505934333218-8fe21ff88269?q=80&w=800&auto=format&fit=crop",
    icon: Sparkles,
    link: "#contact" // Fallback since there isn't a dedicated glam booth page yet
  },
  {
    title: "360 BOOTH",
    desc: "Impress your guests with 360 unique video booth experience.",
    features: ["Unlimited 360 videos", "Music, effects and design overlays", "Instant digital sharing and more"],
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    icon: Video,
    link: "/360-photo-booth-rental"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", // Desi wedding hands/mehndi
  "https://images.unsplash.com/photo-1590076215667-876e5be30db6?q=80&w=800&auto=format&fit=crop", // Couple
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop", // Wedding setup
  "https://images.unsplash.com/photo-1622312674828-5ce43ab0f5d0?q=80&w=800&auto=format&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf4?q=80&w=800&auto=format&fit=crop", // Details
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", // Celebration
  "https://images.unsplash.com/photo-1616165510617-640a2cb705fa?q=80&w=800&auto=format&fit=crop", // Stage decor
  "https://images.unsplash.com/photo-1610174075510-410a514d0263?q=80&w=800&auto=format&fit=crop", // Bridal jewelry
  "https://images.unsplash.com/photo-1532712938730-4e1b0ed615c5?q=80&w=800&auto=format&fit=crop", // Mehndi
  "https://images.unsplash.com/photo-1563241527-3004b7be89db?q=80&w=800&auto=format&fit=crop"  // More details
];

const caseStudies = [
  { brand: "Rachelle & Michael", type: "Original Booth", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
  { brand: "HAPPILY EVER ASTE", type: "Glam Booth", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" },
  { brand: "Tamra & Kyle", type: "Original Booth", image: "https://images.unsplash.com/photo-1505934333218-8fe21ff88269?q=80&w=800&auto=format&fit=crop" },
  { brand: "Christian & Sharen", type: "Original Booth", image: "https://images.unsplash.com/photo-1532712938730-4e1b0ed615c5?q=80&w=800&auto=format&fit=crop" },
  { brand: "Kenthe & Chrlier", type: "Original Booth", image: "https://images.unsplash.com/photo-1622312674828-5ce43ab0f5d0?q=80&w=800&auto=format&fit=crop" },
  { brand: "Ty & Bri", type: "Glam Booth", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" }
];

const customTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Erin Gilmore",
    avatar: "https://i.pravatar.cc/150?u=erin",
    text: "I hired Selfie Booth for a firm holiday party and couldn’t be more pleased with the whole experience... I loved all the customization options we could add to make our event special."
  },
  {
    id: 2,
    name: "Yosepha Greenfield",
    avatar: "https://i.pravatar.cc/150?u=yosepha",
    text: "Highly recommend. We hired Selfie Booth Co for our wedding. They were professional and easy to work with from beginning to end... The booth itself was a HUGE hit at the wedding."
  },
  {
    id: 3,
    name: "Caroline",
    avatar: "https://i.pravatar.cc/150?u=caroline",
    text: "We rented a photo booth for our wedding reception from Selfie Booth, and we loved it. Our guests had a bunch of fun taking pictures and now we have some more fun memories!"
  },
  {
    id: 4,
    name: "Maria Flores",
    avatar: "https://i.pravatar.cc/150?u=maria",
    text: "WOW WOW!!! The selfie booth was an absolute hit at our bash! Our guests loved the fun props, the high-quality photos, and the overall experience. Your staff was incredibly friendly."
  }
];

const faqs = [
  { q: "What photo booths do we offer?", a: "We offer Original Print Booths, Digital Selfie Stations, 360 Video Booths, Glam Booths, and the Vogue Magazine Box to fit your wedding style." },
  { q: "What is included in the Original Selfie Booth package?", a: "High-quality photos, unlimited prints, instant digital sharing, a live gallery, and a choice of 50+ backdrops." },
  { q: "What is included in the Glam Selfie Booth package?", a: "The classic Kardashian-style black & white smoothing beauty filter, premium white backdrop, and unlimited prints. It's the ultimate luxury choice for weddings." },
  { q: "How much space do you need to set up?", a: "We typically request an 8x8 ft space, but we can accommodate smaller footprints depending on the specific booth you choose." },
  { q: "What are the backdrop options?", a: "We offer over 50 premium backdrop options ranging from solid colors, sequin walls, and custom-printed step-and-repeats." },
  { q: "What kind of props do you offer?", a: "We bring a carefully curated trunk of high-quality PVC signs, oversized glasses, stylish hats, and themed wedding props." }
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function WeddingsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ── HERO ── */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" alt="Desi Wedding Hands Mehndi" fill priority sizes="100vw" className="object-cover opacity-30" />
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
            Say 'I Do' to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Selfie Booth Memories</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Rent the original selfie booth for your wedding! With elegant backdrops, beautiful print designs, and high-quality photos, it adds extra fun for your guests to remember—making your special day even more special!
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

      {/* ── CREATE MEMORIES ── */}
      <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(247,54,168,0.1)]">
              <Image src="https://images.unsplash.com/photo-1622312674828-5ce43ab0f5d0?q=80&w=1000&auto=format&fit=crop" alt="Desi Wedding Reception" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                <p className="text-white/90 text-sm font-medium">"A one-of-a-kind interactive experience for cocktail hours and receptions."</p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Create memories with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">family and friends</span>
              </h2>
              <div className="w-20 h-1 bg-brand-neon rounded-full mb-8" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                Whether your party is in the city or at a vineyard, Selfie Booth Co. brings the celebration to life with a one-of-a-kind interactive experience. For cocktail hours, receptions, or any other special gathering, this luxury photo booth creates experiences guests will remember and cherish forever.
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 text-brand-neon font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group">
                Reserve your date <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOLLYWOOD MOMENT & CUSTOMIZE ── */}
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
              <Image src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" alt="Hollywood Style Photo Booth" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </motion.div>
          </div>

          {/* Customize your Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[350px] w-full rounded-[2rem] overflow-hidden border border-white/10">
              <Image src="https://images.unsplash.com/photo-1563241527-3004b7be89db?q=80&w=800&auto=format&fit=crop" alt="Customize Wedding Templates" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Customize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Experience</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                Design a template that fits with your wedding’s style. Choose from our pre-set templates, or create something entirely new. Either way, you’ll be able to create an instant print that guests will love from their experience with your photo booth!
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-white/10 text-white px-8 py-4 rounded-full font-bold text-sm transition-all group">
                Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── GLAM BOOTH HIGHLIGHT ── */}
      <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop" alt="Glam Booth" fill sizes="100vw" className="object-cover opacity-10 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(247,54,168,0.1)]">
            <span className="inline-flex items-center justify-center bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">2025 Bride's Choice!</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Kardashian Style <br/><span className="text-brand-neon">Photo Booth</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Introducing the one-of-a-kind ‘Kardashian-style’ photo booth, featuring a skin-smoothing effect available in B&W or Color. Indulge in our luxurious skin smooth filter, designed to reduce fine lines and wrinkles while enhancing your skin’s overall appearance. Experience a soft, airbrushed quality that ensures stunning photos from every angle.
            </p>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
              Explore Glam Booth <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BOOTH OPTIONS ── */}
      <section className="py-16 md:py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Services</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight">Choose your Photo Booth Experience</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

      {/* ── HIGHLIGHTS GALLERY ── */}
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

      {/* ── TESTIMONIALS ── */}
      <Testimonials testimonialsData={customTestimonials} />

      {/* ── EXPLORE WEDDINGS ── */}
      <section className="py-16 md:py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Case Studies</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Explore our last weddings</motion.h2>
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

      {/* ── CONTACT ── */}
      <Contact />

    </div>
  );
}
