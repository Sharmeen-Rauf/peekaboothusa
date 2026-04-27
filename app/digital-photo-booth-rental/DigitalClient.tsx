"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import { ArrowRight, Phone, Check, Plus, Minus, Wifi, Sparkles, Image as ImgIcon, Share2 } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const highlights = [
  { icon: ImgIcon, label: "GIFs & Boomerangs", desc: "Short videos and GIFs delivered instantly" },
  { icon: Sparkles, label: "DSLR or iPad Setup", desc: "Choose between professional DSLR or sleek iPad" },
  { icon: Share2, label: "Instant WhatsApp Sharing", desc: "Delivered via WhatsApp, email, or AirDrop in seconds" },
  { icon: Wifi, label: "Eco-Friendly", desc: "100% digital media, no paper waste or printing required" },
];

const planFeatures = ["Unlimited Pictures", "Instant Sharing", "Personalized Pictures", "Party Themed Props", "Standard Backdrop", "Standard Lighting Kit", "Friendly Attendant"];

const pricing = [
  { hours: "2 Hour", price: "25,000 PKR" },
  { hours: "3 Hour", price: "35,000 PKR", popular: true },
  { hours: "4 Hour", price: "45,000 PKR" },
];

const videos = [
  "/gif-photo-booth-rental-philadelphia.mp4",
  "/gif-photo-booth-rental-los-angeles.mp4",
  "/gif-photo-booth-rental-houston.mp4",
  "/GIF-photo-booth-rental-chicago.mp4",
];

const gallery = [
  { src: "/gallery-1.png", alt: "Digital Photo Booth Event 1" },
  { src: "/gallery-2.png", alt: "Digital Photo Booth Event 2" },
  { src: "/gallery-3.png", alt: "Digital Photo Booth Event 3" },
  { src: "/premium-photobooth.png", alt: "Premium Digital Booth" },
];

const faqs = [
  { q: "What is the difference between a digital photo booth and a traditional photo booth?", a: "A traditional photo booth prints photos on the spot, while a digital photo booth delivers all media digitally to guests' phones via WhatsApp, email, or AirDrop. Digital booths offer more versatility — including GIFs, boomerangs, and filters — and are more flexible and portable." },
  { q: "Does the digital photo booth include an attendant?", a: "Yes! Every rental includes a dedicated professional attendant who manages the booth, assists guests, and ensures smooth operation throughout your event." },
  { q: "Can the digital booth be customised with our branding?", a: "Absolutely. We create custom digital overlays, frames, and templates for every client. Corporate clients can add logos, brand colours, and event messaging to every photo." },
  { q: "What is an iPad photo booth rental?", a: "An iPad photo booth uses a tablet-based setup that allows guests to interact directly with the screen, choose filters, and receive their photos instantly. It's portable, sleek, and ideal for events where a minimal-footprint setup is preferred." },
  { q: "Is a digital photo booth cheaper than a traditional booth?", a: "In many cases, yes — because there are no print costs. Contact us for a custom quote based on your event requirements." },
];

export default function DigitalClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/booth-setup-20.jpg" alt="Digital Photo Booth Rental" fill priority sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          {/* Neon ambient glow */}
          <motion.div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(247,54,168,0.12) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full bg-brand-neon/20 z-5 pointer-events-none"
            style={{ width: Math.random() * 5 + 2, height: Math.random() * 5 + 2, left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }} />
        ))}

        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center pt-32 pb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Digital Photo Booth Rental</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon"> Digital Photo Booth</span>{" "}
            <br className="hidden md:block" /> Rental in Pakistan
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Welcome to the future of photo booth entertainment! Our Digital Photo Booth Rental is the most modern, versatile, and tech-forward photo booth experience available in Pakistan.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] group">
              Get A Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+923260760786" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              <Phone className="w-4 h-4" /> +92 326 0760786
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Scroll</span>
          <motion.div className="w-px h-10 bg-gradient-to-b from-brand-neon/60 to-transparent" animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Modern Fun</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
                What is a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Digital Photo Booth?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                A digital photo booth is a modern photo station that captures high-resolution photos, GIFs, boomerangs, and short video clips — all delivered instantly to your guests digitally. Unlike traditional photo booths that print photos on the spot, our digital booth delivers all media directly to guests' phones via WhatsApp, email, or AirDrop. We offer two configurations: a professional DSLR photo booth setup for premium image quality, and a sleek, portable iPad photo booth perfectly suited for social media sharing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Instant WhatsApp Sharing", "Custom Branded Overlays", "GIFs & Boomerangs", "DSLR or iPad Setup", "Fully Portable", "Eco-Friendly"].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-neon" />
                    </div>
                    <span className="text-white/80 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image src="/booth-setup-21.jpg" alt="Digital Photo Booth Experience" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute -bottom-4 -right-4 md:-right-6 bg-brand-neon px-5 py-4 rounded-2xl shadow-[0_0_30px_rgba(247,54,168,0.5)]">
                <p className="text-white text-2xl font-extrabold leading-none">500+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase mt-1">Events Covered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">All Inclusive</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Digital Photo Booth Rental</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Peek-A-Booth&apos;s digital photo booths come packed with features like instant sharing, customizable templates, filters, virtual props, and green screens. Perfect for any event!
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <motion.div key={label} variants={fadeUp} className="group relative p-7 rounded-[2rem] border border-white/8 bg-white/2 hover:border-brand-neon/40 hover:bg-brand-neon/5 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(247,54,168,0.08) 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center mb-5 group-hover:bg-brand-neon/20 transition-all">
                    <Icon className="w-5 h-5 text-brand-neon" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{label}</h3>
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">All Inclusive</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Digital Photo Booth Rental Pricing</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto">Every package includes setup, breakdown, and a friendly attendant for the full duration.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map(plan => (
              <motion.div key={plan.hours} variants={fadeUp} className={`relative rounded-[2rem] p-8 border transition-all ${plan.popular ? "bg-brand-neon/10 border-brand-neon shadow-[0_0_40px_rgba(247,54,168,0.2)]" : "bg-[#0a0a0a] border-white/10 hover:border-white/20"}`}>
                {plan.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-neon text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(247,54,168,0.5)]">Most Popular</div>}
                <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">{plan.hours} Rental</p>
                <p className={`text-5xl font-extrabold mb-7 ${plan.popular ? "text-brand-neon" : "text-white"}`}>{plan.price}</p>
                <ul className="space-y-3 mb-7">
                  {planFeatures.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-brand-neon/30 border border-brand-neon" : "bg-white/10 border border-white/20"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-brand-neon" : "text-white/60"}`} />
                      </div>
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/get-a-quote" className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all ${plan.popular ? "bg-brand-neon hover:bg-brand-glow text-white shadow-[0_0_20px_rgba(247,54,168,0.4)]" : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"}`}>
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Need More Hours banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="relative mt-8 bg-[#0a0a0a] border border-white/10 rounded-[2rem] px-8 md:px-14 py-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 h-full w-1 bg-brand-neon rounded-l-[2rem]" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">Need More Hours?</h3>
              <p className="text-white/60 text-sm max-w-lg">Peek-A-Booth can add more hours and more fun for you! Contact us today!</p>
            </div>
            <a href="tel:+923260760786" className="relative z-10 shrink-0 flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] whitespace-nowrap">
              <Phone className="w-4 h-4" /> +92 326 0760786
            </a>
          </motion.div>
        </div>
      </section>

      {/* RESERVE */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Availability</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight">Digital Photo Booth Rental Near Me</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Need a digital photo booth in your city? We're available across all major cities in Pakistan including Karachi, Lahore, Islamabad, and Multan. Check availability for your event date today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
                  Check Availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+923260760786" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-neon/50 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-brand-neon/10">
                  <Phone className="w-4 h-4" /> Call to Reserve
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="grid grid-cols-2 gap-4">
              {[{ val: "Karachi", label: "Available for all events", icon: "🏙️", href: "/karachi-photo-booth-rental" }, { val: "Lahore", label: "Pakistan's party capital", icon: "✨", href: "/lahore-photo-booth-rental" }, { val: "Islamabad", label: "Corporate & private events", icon: "🏢", href: "/islamabad-photo-booth-rental" }, { val: "Multan", label: "Now available!", icon: "🎉", href: "#" }].map(s => (
                <Link key={s.val} href={s.href} className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 rounded-2xl p-6 text-center transition-all group">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="text-2xl font-extrabold text-white group-hover:text-brand-neon transition-colors mb-1">{s.val}</p>
                  <p className="text-white/40 text-xs tracking-wide">{s.label}</p>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Event Clips</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Digital Photo Booth Moments in Motion</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              Watch real event clips showcasing how our digital photo booth adds excitement and fun to any occasion. See guests strike poses, create GIFs, and instantly share their memories!
            </motion.p>
          </motion.div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-brand-neon/40 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Videos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {videos.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative rounded-2xl overflow-hidden group aspect-[9/16] bg-[#0a0a0a] border border-white/8 hover:border-brand-neon/40 transition-all">
                <video src={src} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-2 h-2 rounded-full bg-brand-neon shadow-[0_0_6px_rgba(247,54,168,1)] animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Frequently Asked Questions</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">Find quick answers to the most common questions about our digital photo booth rentals.</motion.p>
          </motion.div>
          <div className="space-y-3">
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
                  <AnimatePresence initial={false}>
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

      <Contact />
    </div>
  );
}

