"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import { ArrowRight, Phone, Check, RotateCcw, Zap, Share2, Music } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const features = [
  { icon: RotateCcw, label: "360° Slow-Motion Video", desc: "Cinematic arm spins around guests for viral-worthy content" },
  { icon: Zap, label: "LED Ring Lighting", desc: "Professional illumination for flawless, glowing results" },
  { icon: Music, label: "Custom Music Overlays", desc: "Branded soundtrack synced perfectly to every video" },
  { icon: Share2, label: "Instant Social Sharing", desc: "Direct to phone in seconds — post-worthy every time" },
];

const pricing = [
  { hours: "2 Hour", price: "$500", features: ["360° Video Capture", "Slow-Motion Effect", "LED Platform Lighting", "Custom Music Overlay", "Instant Sharing", "On-Site Technician"] },
  { hours: "3 Hour", price: "$700", popular: true, features: ["360° Video Capture", "Slow-Motion Effect", "LED Platform Lighting", "Custom Music Overlay", "Instant Sharing", "On-Site Technician"] },
  { hours: "4 Hour", price: "$900", features: ["360° Video Capture", "Slow-Motion Effect", "LED Platform Lighting", "Custom Music Overlay", "Instant Sharing", "On-Site Technician"] },
];

function Scene1Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Film grain overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }}
      />

      {/* Background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div className="absolute inset-0 bg-black" />
        {/* Cinematic gradient lights */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(247,54,168,0.15) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-neon/30 z-5"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }}
        />
      ))}

      {/* Spotlight beams */}
      <div className="absolute bottom-0 left-1/3 w-px h-full bg-gradient-to-t from-brand-neon/20 to-transparent z-5" />
      <div className="absolute bottom-0 right-1/3 w-px h-full bg-gradient-to-t from-brand-neon/10 to-transparent z-5" />

      {/* Content */}
      <motion.div className="relative z-20 text-center px-6 max-w-5xl mx-auto" style={{ opacity, y }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4"
        >
          360° Photo Booth Rental
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">
              #1 Rated 360°
            </span>{" "}
            Photo Booth<br className="hidden md:block" />
            Rental Company!
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          The most viral moment at any event. Step onto the platform and let the 360° arm spin for breathtaking slow-motion video content.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="#contact" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_40px_rgba(247,54,168,0.5)] hover:shadow-[0_0_60px_rgba(247,54,168,0.7)] group">
            Book Your 360 Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="tel:1-800-709-8579" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all backdrop-blur-sm">
            <Phone className="w-4 h-4" /> +1-800-709-8579
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Scroll to Experience</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-brand-neon/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

function Scene2Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 0.5], [-80, 0]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const op = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden bg-black">
      {/* Cinematic horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: visual showcase */}
          <motion.div style={{ x: x1, opacity: op }} className="relative">
            {/* 360 arm animation mockup */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-brand-neon/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(247,54,168,0.3) 0%, transparent 70%)" }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">360°</span>
                  </div>
                </div>
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-brand-neon shadow-[0_0_10px_rgba(247,54,168,1)]"
                style={{ top: "50%", left: "50%", marginTop: -6, marginLeft: -6, transformOrigin: "6px -160px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right: story text */}
          <motion.div style={{ x: x2, opacity: op }}>
            <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">The Experience</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Step In.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Spin Around.</span><br />
              Go Viral.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              The 360° photo booth is the most talked-about activation at any event. Guests step onto the illuminated platform, the arm begins its cinematic spin, and slow-motion magic unfolds — creating content they&apos;ll share immediately.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Weddings", "Corporate Events", "Birthday Parties", "Brand Activations"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-neon shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Scene3Features() {
  return (
    <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #f736a8 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">What&apos;s Included</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Everything You Need
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            A full-service 360° experience from setup to the final share
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(({ icon: Icon, label, desc }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group relative p-8 rounded-[2rem] border border-white/8 bg-white/2 hover:border-brand-neon/40 hover:bg-brand-neon/5 transition-all duration-500 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(247,54,168,0.08) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center mb-6 group-hover:bg-brand-neon/20 group-hover:border-brand-neon/50 transition-all">
                  <Icon className="w-6 h-6 text-brand-neon" />
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{label}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Scene4Countdown() {
  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          {[
            { num: "3", label: "Step onto the platform", delay: 0 },
            { num: "2", label: "The arm begins its spin", delay: 0.2 },
            { num: "1", label: "Lights, camera, 360!", delay: 0.4 },
          ].map(({ num, label, delay }) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="relative inline-flex items-center justify-center w-32 h-32 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-brand-neon/30"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: parseFloat(num) * 0.3 }}
                />
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">{num}</span>
              </div>
              <p className="text-white/60 text-sm tracking-wide">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Flash / capture moment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative rounded-[3rem] overflow-hidden border border-brand-neon/20 shadow-[0_0_80px_rgba(247,54,168,0.1)]"
        >
          <div className="bg-gradient-to-br from-[#0a0a0a] to-black p-14 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-brand-neon/5 pointer-events-none" />
            <motion.div
              animate={{ textShadow: ["0 0 20px rgba(247,54,168,0)", "0 0 60px rgba(247,54,168,0.8)", "0 0 20px rgba(247,54,168,0)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-black text-brand-neon mb-4"
            >
              ✦ CLICK ✦
            </motion.div>
            <p className="text-white/50 text-base md:text-lg font-light">The moment is captured. Forever.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Scene5Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Packages</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            360° Rental Pricing
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-base max-w-lg mx-auto">All packages include setup, teardown, and a dedicated on-site technician</motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricing.map((plan) => (
            <motion.div
              key={plan.hours}
              variants={fadeUp}
              className={`relative rounded-[2rem] p-8 border transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-brand-neon/10 to-transparent border-brand-neon shadow-[0_0_60px_rgba(247,54,168,0.2)]"
                  : "bg-[#0a0a0a] border-white/8 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-white text-[10px] font-extrabold tracking-widest uppercase px-5 py-2 rounded-full shadow-[0_0_20px_rgba(247,54,168,0.6)]">
                  Most Popular
                </div>
              )}
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">{plan.hours} Rental</p>
              <p className={`text-6xl font-black mb-8 ${plan.popular ? "text-brand-neon" : "text-white"}`}>{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-brand-neon/20 border border-brand-neon/60" : "bg-white/8 border border-white/15"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-brand-neon" : "text-white/50"}`} />
                    </div>
                    <span className="text-white/70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-brand-neon hover:bg-brand-glow text-white shadow-[0_0_30px_rgba(247,54,168,0.4)]"
                    : "bg-white/8 hover:bg-white/15 border border-white/15 text-white"
                }`}
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Scene6CTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-black border-t border-white/5">
      {/* Cinematic atmosphere */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(247,54,168,0.12) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.5em] uppercase mb-6">The Final Scene</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            Make Your Event
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-brand-glow to-brand-neon">
              Unforgettable.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
            One moment on the platform. A lifetime of memories shared.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-5 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-brand-neon hover:bg-brand-glow text-white px-10 py-5 rounded-full font-extrabold text-base transition-all shadow-[0_0_50px_rgba(247,54,168,0.5)] hover:shadow-[0_0_80px_rgba(247,54,168,0.8)] group"
            >
              Book Your Booth <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:1-800-709-8579"
              className="inline-flex items-center gap-3 border border-white/20 hover:border-brand-neon/50 text-white px-10 py-5 rounded-full font-bold text-base transition-all hover:bg-brand-neon/10"
            >
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ThreeSixtyClient() {
  return (
    <div className="bg-black text-white">
      <Scene1Hero />
      <Scene2Story />
      <Scene3Features />
      <Scene4Countdown />
      <Scene5Pricing />
      <Scene6CTA />
      <Contact />
    </div>
  );
}
