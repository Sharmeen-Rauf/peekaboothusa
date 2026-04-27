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
  { hours: "4 Hour", price: "55,000 PKR" },
  { hours: "5 Hour", price: "70,000 PKR", popular: true },
  { hours: "6 Hour", price: "85,000 PKR" },
  { hours: "8 Hour", price: "110,000 PKR" },
];
const planFeatures = ["Illuminated Magazine Box", "Custom Cover Design", "High-Def DSLR Photos", "Instant Prints", "Digital Sharing", "Props & Attendant", "Setup & Breakdown"];

const cities = [
  { label: "Karachi", slug: "karachi-magazine-photo-booth-rental" },
  { label: "Lahore",      slug: "lahore-magazine-photo-booth-rental" },
  { label: "Islamabad",      slug: "islamabad-magazine-photo-booth-rental" },
  { label: "Multan",      slug: "multan-magazine-photo-booth-rental" },
];

const galleryImages = [
  { src: "/booth-setup-18.jpg",       alt: "Magazine Booth Karachi" },
  { src: "/booth-setup-19.jpg",        alt: "Magazine Photo Box Lahore" },
  { src: "/booth-setup-20.jpg",         alt: "Magazine Photo Box Islamabad" },
  { src: "/booth-setup-21.jpg",   alt: "Magazine Photo Box Multan" },
];

const galleryVideos = [
  "/2-20230924-200635.mp4",
  "/2-20230924-203326.mp4",
  "/18-20231212-205121.mp4",
  "/5-20240426-215944.mp4",
];

const faqs = [
  { q: "What is the difference between a Vogue Magazine Booth and a Mirror Photo Booth?", a: "The terms are often used interchangeably. The Vogue Magazine Booth refers to the magazine-cover aesthetic and format, while a magic mirror or selfie mirror photo booth refers to the interactive, touch-screen mirror design. Our Vogue Magazine Booth combines both — offering an interactive experience with a glamorous magazine-cover output." },
  { q: "Can the magazine cover design be fully customised?", a: "Yes! We fully customise every magazine cover with your event name, date, personalised headings, colour scheme, and branding. For corporate events, we incorporate your company logo and brand identity." },
  { q: "What size are the printed magazine covers?", a: "Our prints are produced in a striking large format — perfect for display or as a framed keepsake. Contact us for specific size options." },
  { q: "How long does setup take?", a: "Our team typically requires 60–90 minutes for setup. We arrive early and have everything ready before your event begins." },
  { q: "Is the magazine photo booth available near me?", a: "We serve Karachi, Lahore, Islamabad, and Multan. Fill out our quote form to check availability for your city and event date." },
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
          <motion.p initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.3 }} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Be the Cover Star</motion.p>
          <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:1,delay:0.5,ease:[0.16,1,0.3,1] }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
            Vogue Magazine{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth Rental</span> in Pakistan
          </motion.h1>
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:1,delay:0.7 }} className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-light">
            <p className="mb-2">Imagine walking up to a life-sized magazine box and seeing your name on the cover of Vogue. That's exactly the experience our Vogue Magazine Photo Booth delivers — and it's available for your next event in Pakistan!</p>
            <p>The Vogue Magazine Photo Booth is one of the most unique, glamorous, and Instagram-worthy additions to any event.</p>
          </motion.div>
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.8,delay:0.9 }} className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
              Book Your Magazine Booth Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+923260760786" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
              <Phone className="w-4 h-4" /> +92 326 0760786
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">What Is It</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
                What is a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Vogue Magazine Photo Booth?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                The Vogue Magazine Photo Booth is a life-sized, illuminated box designed to look exactly like a magazine cover — with your guests as the featured stars. The box features customisable headings, your event name or branding, and a full-length photo printed in a professional magazine-cover format.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                It combines the elegance of a magic mirror photo booth with the glamour of a high-fashion editorial — and your guests absolutely love it. Often referred to as the selfie mirror photo booth or magazine photo booth, this setup creates one-of-a-kind keepsakes that your guests will treasure and share on social media.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Weddings & Mehndi","Birthday Parties","Corporate Events","Brand Activations","Private Parties","Milestone Celebrations"].map(e => (
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
                    <span className="text-white/70 text-xs font-medium group-hover:text-white transition-colors">Magazine Booth Rental {c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8,delay:0.15 }} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image src="/booth-setup-23.jpg" alt="Vogue Magazine Photo Booth Experience" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
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
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Why Rent</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-5">
                The Most Unique{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Photo Booth Experience</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                The Vogue Magazine Photo Booth is unlike anything else available in Pakistan's event market. While traditional booths are popular, the magazine booth is a true showstopper — guests queue up for their chance to be on the cover, and the results are absolutely stunning.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                In today's digital world, every event needs a wow moment that guests can share. The Vogue Magazine booth creates the perfect Instagram story, TikTok video, and WhatsApp share — making your event go viral organically. It produces a beautiful, high-quality printed magazine cover that every guest takes home.
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
                Check Availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[{val:"Viral",label:"Social Sharing",icon:"📱"},{val:"Custom",label:"Event Branding",icon:"🎨"},{val:"100%",label:"Satisfaction",icon:"⭐"},{val:"Instant",label:"Photo Prints",icon:"📸"}].map(s => (
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
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Features Included</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Vogue Magazine Photo Booth Rental Packages</motion.h2>
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
                <Link href="/get-a-quote" className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${plan.popular ? "bg-brand-neon hover:bg-brand-glow text-white shadow-[0_0_20px_rgba(247,54,168,0.4)]" : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"}`}>
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
              <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">Looking for a custom package?</h3>
              <p className="text-white/60 text-sm max-w-lg">We can fully customize our setup for your specific wedding or corporate event in Pakistan! Contact us today to get your booking started!</p>
            </div>
            <a href="tel:+923260760786" className="relative z-10 shrink-0 flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] whitespace-nowrap">
              <Phone className="w-4 h-4" /> +92 326 0760786
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── RESERVE ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
              <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Available Locations</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight">Vogue Magazine Photo Booth Rental Near Me — Across Pakistan</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Looking for a magazine photo booth rental near you? We serve Karachi, Lahore, Islamabad, and Multan. Ready to book the Vogue Magazine Box Photo Booth for your upcoming event? Peek-A-Booth delivers a one-of-a-kind photo experience that turns guests into cover stars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group">
                  Check Your City's Availability <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+923260760786" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-neon/50 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-brand-neon/10">
                  <Phone className="w-4 h-4" /> Call to Reserve
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.8,delay:0.15 }} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image src="/booth-setup-1.jpg" alt="Reserve Vogue Magazine Photo Booth" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem]">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-brand-neon fill-brand-neon" />)}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">"The magazine booth was the highlight of our mehndi!"</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"I had the Vogue Magazine Photo Booth at my sister's mehndi night and it was absolutely magical. Every single guest had their photo taken and the prints were so beautiful. Peek-A-Booth PK is incredible!"</p>
              <p className="text-brand-neon font-bold text-sm">— Zara T., Karachi</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem]">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-brand-neon fill-brand-neon" />)}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">"Our clients were blown away!"</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"We used the magazine photo booth at our brand launch event in Lahore. The custom branding on the magazine cover was perfect and our guests were sharing the photos immediately. Outstanding quality!"</p>
              <p className="text-brand-neon font-bold text-sm">— Kamran A., Marketing Director, Lahore</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once:true }} variants={stagger} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Frequently Asked Questions</motion.h2>
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

      {/* FOOTER SEO TEXT */}
      <section className="py-12 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-white/40 text-xs leading-relaxed">
            Peek-A-Booth PK offers premium Vogue Magazine Photo Booth rental services across Pakistan. Our magic mirror photo booth and selfie mirror photo booth experiences are available for weddings, mehndi nights, birthday parties, corporate events, and private gatherings in Karachi, Lahore, Islamabad, and Multan. With custom magazine cover designs, instant high-quality prints, and a truly glamorous experience, our magazine photo booth rental is the most unique and memorable addition to any event in Pakistan. Book your magazine photo booth rental today!
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact />
    </div>
  );
}
