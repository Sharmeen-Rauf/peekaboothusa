"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import { X, ChevronLeft, ChevronRight, ArrowRight, Star, MapPin, Phone } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

type Category = "All" | "Weddings" | "Birthdays" | "Corporate" | "Parties";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  location: string;
  span?: string; // tailwind col/row span
}

const items: GalleryItem[] = [
  { id: 1,  src: "/booth-setup-1.jpg", alt: "Wedding Photo Booth Rental USA",       category: "Weddings",  location: "Philadelphia, PA", span: "md:col-span-2 md:row-span-2" },
  { id: 2,  src: "/booth-setup-2.jpg",                      alt: "Photo Booth Event Gallery 1",          category: "Parties",   location: "Chicago, IL" },
  { id: 3,  src: "/booth-setup-3.jpg",                 alt: "Vogue Magazine Box Rental",            category: "Corporate", location: "Houston, TX" },
  { id: 4,  src: "/booth-setup-4.jpg",                      alt: "Photo Booth Event Gallery 2",          category: "Birthdays", location: "Atlanta, GA" },
  { id: 5,  src: "/booth-setup-5.jpg",                 alt: "Corporate Gala Photo Booth",           category: "Corporate", location: "Los Angeles, CA",  span: "md:col-span-2" },
  { id: 6,  src: "/booth-setup-6.jpg",             alt: "Premium Photo Booth Setup",            category: "Weddings",  location: "New York, NY" },
  { id: 7,  src: "/booth-setup-7.jpg",                  alt: "Private Party Photo Booth",            category: "Parties",   location: "Newark, NJ",       span: "md:row-span-2" },
  { id: 8,  src: "/booth-setup-8.jpg",                      alt: "Photo Booth Event Gallery 3",          category: "Birthdays", location: "Washington, DC" },
  { id: 9,  src: "/booth-setup-9.jpg",             alt: "Magazine Photo Booth Event",           category: "Corporate", location: "Philadelphia, PA" },
  { id: 10, src: "/booth-setup-10.jpg",                  alt: "Magazine Photo Box Chicago",           category: "Parties",   location: "Chicago, IL",      span: "md:col-span-2" },
  { id: 11, src: "/booth-setup-11.jpg",                   alt: "Magazine Photo Box Atlanta",           category: "Weddings",  location: "Atlanta, GA" },
  { id: 12, src: "/booth-setup-12.jpg",                      alt: "Birthday Celebration Photo Booth",     category: "Birthdays", location: "Houston, TX" },
];

const TABS: Category[] = ["All", "Weddings", "Birthdays", "Corporate", "Parties"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

/* ─── MODAL ───────────────────────────────────────────────────────────────── */

function Modal({ items, index, onClose, onPrev, onNext }: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

      {/* Panel */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_80px_rgba(247,54,168,0.15)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] w-full">
          <Image src={item.src} alt={item.alt} fill sizes="(max-width:768px) 100vw, 80vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block bg-brand-neon/20 border border-brand-neon/40 text-brand-neon text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2">{item.category}</span>
            <p className="text-white font-bold text-lg leading-tight">{item.alt}</p>
            <p className="flex items-center gap-1.5 text-white/50 text-xs mt-1"><MapPin className="w-3 h-3" />{item.location}</p>
          </div>
        </div>

        {/* Navigation */}
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-brand-neon hover:border-brand-neon transition-all z-20">
          <X className="w-4 h-4" />
        </button>
        <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-brand-neon hover:border-brand-neon transition-all z-20">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-brand-neon hover:border-brand-neon transition-all z-20">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 right-6 text-white/30 text-xs font-medium z-20">{index + 1} / {items.length}</div>
      </motion.div>
    </motion.div>
  );
}

/* ─── GALLERY ITEM ────────────────────────────────────────────────────────── */

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span ?? ""} ${
        item.span?.includes("row-span-2") ? "aspect-auto min-h-[400px]" :
        item.span?.includes("col-span-2") ? "aspect-[16/8]" : "aspect-square"
      }`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ boxShadow: "inset 0 0 0 1px rgba(247,54,168,0.4), 0 0 40px rgba(247,54,168,0.12)" }} />

      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10" />

      {/* Hover content */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
      >
        <span className="inline-block bg-brand-neon/20 border border-brand-neon/40 text-brand-neon text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2">{item.category}</span>
        <p className="text-white font-semibold text-sm leading-snug">{item.alt}</p>
        <p className="flex items-center gap-1 text-white/50 text-[11px] mt-1"><MapPin className="w-3 h-3" />{item.location}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN ────────────────────────────────────────────────────────────────── */

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filtered = activeTab === "All" ? items : items.filter(i => i.category === activeTab);

  const openModal  = useCallback((idx: number) => setModalIndex(idx), []);
  const closeModal = useCallback(() => setModalIndex(null), []);
  const prevModal  = useCallback(() => setModalIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const nextModal  = useCallback(() => setModalIndex(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  return (
    <div className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/booth-setup-4.jpg" alt="Photo Booth Gallery" fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
          <motion.div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(247,54,168,0.12) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Film grain */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-brand-neon/20 pointer-events-none z-5"
            style={{ width: Math.random() * 5 + 2, height: Math.random() * 5 + 2, left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }} />
        ))}

        <div className="container mx-auto px-6 max-w-3xl relative z-20 text-center pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/30 text-brand-neon text-xs font-bold tracking-[0.4em] uppercase px-5 py-2 rounded-full mb-6">
              <Star className="w-3 h-3" /> Top Rated Photo Booth Rentals
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
            View Peek A Booth&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Browse our gallery to see photo booths in action at weddings, birthdays, and events — creating unforgettable memories nationwide.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center">
            <Link href="#gallery" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
              View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              Get A Quote
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Explore</span>
          <motion.div className="w-px h-10 bg-gradient-to-b from-brand-neon/60 to-transparent" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </section>

      {/* ── SPOTLIGHT STATS ── */}
      <section className="py-10 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "16,500+", label: "Events Completed" },
              { val: "50+",     label: "Cities Nationwide" },
              { val: "2014",    label: "Established" },
              { val: "100%",    label: "Satisfaction Rate" },
            ].map(s => (
              <motion.div key={s.label} variants={fadeUp}>
                <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow mb-1">{s.val}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Our Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
              Discover Our Photo Booth Gallery
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              Showcasing photo booth rentals at weddings, parties, and events nationwide. See how we create unforgettable memories!
            </motion.p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-2 mb-10">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-neon text-white shadow-[0_0_20px_rgba(247,54,168,0.5)]"
                    : "bg-white/8 text-white/60 border border-white/10 hover:border-brand-neon/40 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Bento grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3"
            >
              {filtered.map((item, idx) => (
                <GalleryCard key={item.id} item={item} onClick={() => openModal(idx)} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── FEATURED CTA BAND ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative rounded-[2rem] overflow-hidden border border-brand-neon/20 shadow-[0_0_60px_rgba(247,54,168,0.08)]">
            <div className="absolute inset-0">
              <Image src="/booth-setup-5.jpg" alt="Premium Photo Booth" fill sizes="100vw" className="object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Top Rated Nationwide</p>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
                  Get Your Photo Booth Rental<br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow"> With No Regrets</span>
                </h2>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  Peek-A-Booth is the #1 choice for customers across America. 16,500+ events completed. Established 2014. Nationwide service.
                </p>
              </div>
              <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
                <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
                  Get A Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+923260760786" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-neon/50 text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-brand-neon/10 backdrop-blur-sm">
                  <Phone className="w-4 h-4" /> +92 326 0760786
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact />

      {/* ── MODAL ── */}
      <AnimatePresence>
        {modalIndex !== null && (
          <Modal
            items={filtered}
            index={modalIndex}
            onClose={closeModal}
            onPrev={prevModal}
            onNext={nextModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
