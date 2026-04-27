"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials, { TestimonialItem } from "@/components/sections/Testimonials";
import { ArrowRight, Play, Check, ShieldCheck, Star, Sparkles, Truck, Image as ImageIcon, Video, MonitorSmartphone, Camera, Plus, Minus } from "lucide-react";

/* ΓöÇΓöÇΓöÇ DATA ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const boothOptions = [
  {
    title: "OPEN AIR BOOTH",
    desc: "Classic birthday fun — perfect for large guest lists with custom themed backdrops.",
    features: ["Custom birthday backdrops", "Personalised print design", "Fun props & accessories", "Professional DSLR setup"],
    image: "/booth-setup-18.jpg",
    icon: Camera,
    link: "/open-air-photo-booth-rental"
  },
  {
    title: "360 PHOTO BOOTH",
    desc: "High-energy entertainment creating stunning slow-motion videos for Instagram & TikTok.",
    features: ["Slow-motion video capture", "Custom birthday overlays", "Instant WhatsApp sharing", "Perfect for milestone bashes"],
    image: "/booth-setup-20.jpg",
    icon: Video,
    link: "/360-photo-booth-rental"
  },
  {
    title: "VOGUE MAGAZINE BOOTH",
    desc: "Make the birthday person a cover star with personalised magazine cover photos.",
    features: ["Life-sized magazine box", "Custom birthday cover design", "High-quality instant prints", "Glamorous selfie experience"],
    image: "/booth-setup-13.jpg",
    icon: Sparkles,
    link: "/vogue-magazine-photo-booth-rental"
  },
  {
    title: "DIGITAL PHOTO BOOTH",
    desc: "Modern selfie fun with boomerangs and GIFs sent directly to guests' phones.",
    features: ["GIFs & Boomerangs", "Instant WhatsApp sharing", "Custom birthday frames", "Simple & universally loved"],
    image: "/booth-setup-19.jpg",
    icon: MonitorSmartphone,
    link: "/digital-photo-booth-rental"
  }
];

const reasons = [
  { icon: Star, title: "On-site, Rockstar Attendants", desc: "We go through a pretty extensive process of vetting & training our attendants." },
  { icon: Truck, title: "Free Delivery, Setup & Breakdown", desc: "We roll in an hour early, set up the magic, and once the party—s over, we pack up without a trace." },
  { icon: ShieldCheck, title: "Insured & Secured", desc: "Our Selfie Booths come with a ΓÇ£No OopsΓÇ¥ guarantee. If there—s a mishap, we—ve got it covered 100%." },
  { icon: ImageIcon, title: "Options Galore!", desc: "From snazzy prints to funky Boomerangs and GIFs, we—ve got all the tools to keep the fun rolling." }
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

const customTestimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sana H.",
    avatar: "https://i.pravatar.cc/150?u=sana",
    text: "The open air photo booth at my daughter's 7th birthday was a dream. All the kids loved the princess theme and the parents took home the cutest printed photos. Peek-A-Booth PK is amazing!"
  },
  {
    id: 2,
    name: "Hassan A.",
    avatar: "https://i.pravatar.cc/150?u=hassan",
    text: "The 360 booth at my 21st was INSANE. Everyone was fighting to use it. The slow-mo videos were incredible and I still watch them every week! Highly recommend for any milestone birthday."
  }
];

const faqs = [
  { q: "Which photo booth is best for a birthday party?", a: "It depends on the type of party! For high-energy milestone birthdays, the 360 booth is unbeatable. For large family gatherings, the open air booth is ideal. For glamorous ladies' events, the Vogue Magazine booth is perfect." },
  { q: "Can the birthday photo booth be customised with a specific theme?", a: "Absolutely! We customise every photo booth with the birthday person's name, age, theme colours, and preferred aesthetic ΓÇö from elegant black-and-white to vibrant and colourful." },
  { q: "Is your photo booth suitable for children's birthday parties?", a: "Yes! We have child-friendly setups with fun themes, appropriate props, and safe equipment. Our attendant ensures a smooth, safe experience for all young guests." }
];

/* ΓöÇΓöÇΓöÇ MAIN COMPONENT ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

export default function BirthdayClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-black text-white selection:bg-brand-neon/30">
      
      {/* ΓöÇΓöÇ HERO ΓöÇΓöÇ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/private-party.png" alt="Party Photo Booth Event" fill priority sizes="100vw" className="object-cover opacity-30" />
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
            Birthday Photo Booth<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">Rental in Pakistan</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Birthdays are meant to be celebrated ΓÇö and Peek-A-Booth PK makes sure every birthday is a party your guests will never forget! Bringing instant fun to celebrations across Karachi, Lahore, Islamabad, and Multan.
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

      {/* ΓöÇΓöÇ SNAP. PRINT. SHARE. ΓöÇΓöÇ */}
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
                Why a Photo Booth is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Best Addition</span> to Any Party
              </h2>
              <div className="w-20 h-1 bg-brand-neon rounded-full mb-8" />
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                From children's parties to adult milestone birthdays, our booths offer non-stop entertainment, custom themed prints, fun props, and instant WhatsApp sharing for the digital generation.
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

      {/* ΓöÇΓöÇ WHY CHOOSE US ΓöÇΓöÇ */}
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

      {/* ΓöÇΓöÇ BOOTH OPTIONS ΓöÇΓöÇ */}
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

      {/* ΓöÇΓöÇ HIGHLIGHTS GALLERY ΓöÇΓöÇ */}
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

      {/* ΓöÇΓöÇ TESTIMONIALS ΓöÇΓöÇ */}
      <Testimonials testimonialsData={customTestimonials} />

      {/* ΓöÇΓöÇ EXPLORE EVENTS ΓöÇΓöÇ */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Case Studies</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Explore all kinds of our events</motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Karachi", label: "Available for all events", icon: "🏙️" },
              { city: "Lahore", label: "Pakistan's party capital", icon: "✨" },
              { city: "Islamabad", label: "Corporate & private events", icon: "🏢" },
              { city: "Multan", label: "Now available!", icon: "🎉" }
            ].map((study, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative border border-white/10 hover:border-brand-neon/40 rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center h-48 transition-all shadow-[0_0_0_rgba(247,54,168,0)] hover:shadow-[0_0_30px_rgba(247,54,168,0.15)] cursor-pointer bg-[#0a0a0a]">
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 relative z-20 group-hover:scale-105 group-hover:text-brand-neon transition-all duration-300">{study.city}</h3>
                <p className="text-brand-neon text-[10px] md:text-xs font-bold tracking-widest uppercase relative z-20 bg-black/50 px-3 py-1 rounded-full border border-brand-neon/30 backdrop-blur-md">{study.label}</p>
                <div className="absolute top-4 right-4 text-2xl z-20 opacity-40 group-hover:opacity-100 transition-opacity">{study.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ΓöÇΓöÇ FAQ ΓöÇΓöÇ */}
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

      {/* ΓöÇΓöÇ CONTACT ΓöÇΓöÇ */}
      <Contact />

    </div>
  );
}

