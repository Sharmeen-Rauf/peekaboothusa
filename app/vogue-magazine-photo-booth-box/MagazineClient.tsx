"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import { ArrowRight, Phone, Check, Plus, Minus, MapPin, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const pricing = [
  { hours: "4 Hour", price: "$1,200" },
  { hours: "5 Hour", price: "$1,500", popular: true },
  { hours: "6 Hour", price: "$1,800" },
  { hours: "8 Hour", price: "$2,400" },
];
const planFeatures = ["Custom Cover Design","Full-Size Frame","LED Lighting","Custom Headline","Setup & Breakdown","Spacious Interior","Selfie-Ready","High-Quality Build"];

const cities = [
  { label: "Philadelphia", slug: "philadelphia-magazine-photo-booth-rental" },
  { label: "Houston",      slug: "houston-magazine-photo-booth-rental" },
  { label: "Chicago",      slug: "chicago-magazine-photo-booth-rental" },
  { label: "Atlanta",      slug: "atlanta-magazine-photo-booth-rental" },
];

const galleryImages = [
  { src: "/magazine-booth.png",       alt: "Magazine Booth Chicago" },
  { src: "/chicago-three.png",        alt: "Magazine Photo Box Chicago" },
  { src: "/atlanta-four.png",         alt: "Magazine Photo Box Atlanta" },
  { src: "/afterlogofourimage.png",   alt: "Magazine Photo Box Los Angeles" },
];

const galleryVideos = [
  "/2-20230924-200635.mp4",
  "/2-20230924-203326.mp4",
  "/18-20231212-205121.mp4",
  "/5-20240426-215944.mp4",
];

const faqs = [
  { q: "How much deposit is needed?", a: "We require a $150 deposit to secure your booking. The remaining balance is due 7 days before your event. We accept all major credit cards and PayPal." },
  { q: "How much space is needed for setup?", a: "The Vogue Magazine Photo Booth Box requires a minimum of 10ft x 10ft of floor space with at least 9ft of ceiling clearance. We recommend a flat, hard surface indoors." },
  { q: "Does Peek-A-Booth have insurance?", a: "Yes! We are fully insured with general liability coverage. A Certificate of Insurance (COI) can be provided upon request — many venues require this." },
  { q: "Can I book online?", a: "Absolutely! Fill out our contact form below or call 1-800-709-8579. We'll confirm your date and send a booking agreement within 24 hours." },
  { q: "How do I customize my magazine cover?", a: "After booking, our design team contacts you to discuss your event theme, colors, headline text, and any personalization. You'll receive a digital proof for approval before your event." },
  { q: "Can I use this magazine box outdoors?", a: "The Magazine Photo Booth Box is designed for indoor use. Outdoor setups may be possible under a tent or covered patio — contact us to discuss your venue details." },
];

export default function MagazineClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/magazine-booth.png" alt="Vogue Magazine Photo Booth Rental" fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10 pt-32 pb-20 text-center mx-auto">
          <motion.p initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Vogue Magazine Photo Booth</motion.p>
          <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:1,delay:0.5,ease:[0.16,1,0.3,1] }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
            Vogue Magazine{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth Rental</span>
          </motion.h1>
          <motion.p initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:1,delay:0.7 }} className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-light">
            Ever dreamed of being on the cover of a magazine? Now you can. Our life-size Vogue-style booth is fully customized with your event name, theme, and fun headlines.
          </motion.p>
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.9 }} className="flex flex-wrap gap-4 justify-center">
            <Link href="#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
              Get A Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:1-800-709-8579" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              <Phone className="w-4 h-4" /> +1-800-709-8579
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">What It Is</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
                Experience Glam With Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Vogue Magazine Photo Booth</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Ditch the ordinary and give your guests something they&apos;ll talk about. The Magazine Photo Booth is perfect for weddings, birthdays, red carpet events, brand launches, corporate parties, and sweet 16s. We design a custom magazine layout that fits your celebration. Guests step into the booth, strike a pose, and walk away with a cover-worthy photo.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Weddings","Birthdays","Corporate Events","Red Carpet","Brand Launches","Sweet 16s"].map(e => (
                  <div key={e} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon shrink-0" />
                    <span className="text-white/70 text-sm">{e}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cities.map(c => (
                  <div key={c.label} className="flex items-center gap-2 bg-white/4 border border-white/10 hover:border-brand-neon/40 rounded-xl px-4 py-3 transition-all group cursor-default">
                    <MapPin className="w-3.5 h-3.5 text-brand-neon shrink-0" />
                    <span className="text-white/70 text-xs font-medium group-hover:text-white transition-colors">{c.label} Magazine Photo Booth Rental</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8,delay:0.15 }} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image src="/afterlogofourimage.png" alt="Vogue Magazine Photo Booth Experience" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute -bottom-4 -right-4 md:-right-6 bg-brand-neon px-5 py-4 rounded-2xl shadow-[0_0_30px_rgba(247,54,168,0.5)]">
                <p className="text-white text-2xl font-extrabold leading-none">500+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase mt-1">Events Covered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COVER STAR / CITIES SERVED ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Nationwide Coverage</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
                Be the Cover Star with Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Magazine Photo Booth Rental</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                We serve Chicago, Los Angeles, Houston, Atlanta, New York City, Philadelphia, New Jersey, Delaware, Baltimore and more. Now booking Vogue Magazine Photo Booth Rentals for all event types.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
                Check Availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[{val:"500+",label:"Events Covered",icon:"🎉"},{val:"10+",label:"Cities Served",icon:"📍"},{val:"100%",label:"Satisfaction",icon:"⭐"},{val:"24/7",label:"Support",icon:"💬"}].map(s => (
                <div key={s.label} className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 rounded-2xl p-6 text-center transition-all group">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="text-2xl font-extrabold text-white group-hover:text-brand-neon transition-colors mb-1">{s.val}</p>
                  <p className="text-white/40 text-xs tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">All Inclusive</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Vogue Magazine Photo Booth Rental</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">Every package includes a fully custom magazine cover design, LED lighting, setup &amp; breakdown, and a dedicated attendant.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricing.map(plan => (
              <motion.div key={plan.hours} variants={fadeUp} className={`relative rounded-[2rem] p-7 border transition-all ${plan.popular ? "bg-brand-neon/10 border-brand-neon shadow-[0_0_40px_rgba(247,54,168,0.2)]" : "bg-[#0a0a0a] border-white/10 hover:border-white/20"}`}>
                {plan.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-neon text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(247,54,168,0.5)]">Most Popular</div>}
                <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">{plan.hours} Rental</p>
                <p className={`text-4xl font-extrabold mb-7 ${plan.popular ? "text-brand-neon" : "text-white"}`}>{plan.price}</p>
                <ul className="space-y-2.5 mb-7">
                  {planFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-brand-neon/30 border border-brand-neon" : "bg-white/10 border border-white/20"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-brand-neon" : "text-white/60"}`} />
                      </div>
                      <span className="text-white/70 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${plan.popular ? "bg-brand-neon hover:bg-brand-glow text-white shadow-[0_0_20px_rgba(247,54,168,0.4)]" : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"}`}>
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Need More Hours banner */}
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7,delay:0.2 }} className="relative mt-8 bg-[#0a0a0a] border border-white/10 rounded-[2rem] px-8 md:px-14 py-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 h-full w-1 bg-brand-neon rounded-l-[2rem]" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">Need More Hours?</h3>
              <p className="text-white/60 text-sm max-w-lg">Peek-A-Booth can add more hours and more fun for you! Contact us today to get your booking started!</p>
            </div>
            <a href="tel:1-800-709-8579" className="relative z-10 shrink-0 flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] whitespace-nowrap">
              <Phone className="w-4 h-4" /> 1-800-709-8579
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── RESERVE ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Book Your Event</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight">Reserve Your Vogue Magazine Box Photo Booth</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Ready to book the Vogue Magazine Box Photo Booth for your upcoming event? Peek-A-Booth delivers a one-of-a-kind photo experience that turns guests into cover stars. Whether it&apos;s a wedding, birthday party, or branded event, our booth adds instant energy and personality. Check availability now and let&apos;s make your event unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
                  Check Availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:1-800-709-8579" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-neon/50 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-brand-neon/10">
                  <Phone className="w-4 h-4" /> Call to Reserve
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8,delay:0.15 }} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image src="/chicago-three.png" alt="Reserve Vogue Magazine Photo Booth" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Event Clips</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">See the Vogue Magazine Photo Booth in Action</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Watch real moments from past celebrations using our Magazine Photo Booth. From luxury weddings and corporate galas to sweet 16s — guests love stepping into their own custom magazine cover.
            </motion.p>
          </motion.div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity:0,scale:0.95 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i===0?"md:col-span-2 md:row-span-2 aspect-square":"aspect-square"}`}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-brand-neon/40 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryVideos.map((src, i) => (
              <motion.div key={i} initial={{ opacity:0,scale:0.95 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }} className="relative rounded-2xl overflow-hidden group aspect-[9/16] bg-[#0a0a0a] border border-white/8 hover:border-brand-neon/40 transition-all">
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

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Vogue Magazine Photo Booth Rental – FAQ&apos;s</motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">Find quick answers to the most common questions about our Magazine Photo Booth rentals, from setup details to customization options and everything in between.</motion.p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div key={i} initial={{ opacity:0,y:10 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.4,delay:i*0.07 }} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen?"border-brand-neon/40 bg-brand-neon/5":"border-white/10 bg-[#0a0a0a] hover:border-white/20"}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left group">
                    <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen?"text-brand-neon":"text-white group-hover:text-brand-neon"}`}>{faq.q}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all ${isOpen?"bg-brand-neon text-white shadow-[0_0_10px_rgba(247,54,168,0.4)]":"bg-white/10 text-white/60 group-hover:bg-white/20"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div key="c" initial={{ height:0,opacity:0 }} animate={{ height:"auto",opacity:1 }} exit={{ height:0,opacity:0 }} transition={{ duration:0.3,ease:"easeInOut" }} className="overflow-hidden">
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
