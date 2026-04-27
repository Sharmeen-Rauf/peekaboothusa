"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/sections/Contact";
import { ArrowRight, Phone, Check, RotateCcw, Zap, Share2, Music, Plus, Minus, MapPin, Star, Users, Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function Scene1Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }}
      />
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <Image
          src="/photo-booth-rental-360-cover.png"
          alt="360 Photo Booth Rental in Pakistan"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(247,54,168,0.15) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="absolute bottom-0 left-1/3 w-px h-full bg-gradient-to-t from-brand-neon/20 to-transparent z-5" />
      <div className="absolute bottom-0 right-1/3 w-px h-full bg-gradient-to-t from-brand-neon/10 to-transparent z-5" />

      <motion.div className="relative z-20 text-center px-6 max-w-5xl mx-auto" style={{ opacity, y }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4"
        >
          The Ultimate Event Experience
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">
              360 Photo Booth Rental
            </span>{" "}
            in Pakistan
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          <p className="mb-4">Make your next event go viral! The 360 Photo Booth is the most exciting, shareable, and talked-about photo booth experience in Pakistan. A professional-grade rotating arm sweeps 360 degrees around your guests, capturing jaw-dropping slow-motion video from every angle — creating cinematic, social-media-ready content in seconds.</p>
          <p>Whether it's a grand baraat, a corporate brand launch, a birthday celebration, or a VIP gala — our 360 photo booth rental will be the centrepiece of your event. Guests line up for their turn, and the footage is instantly shared to their phones.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_40px_rgba(247,54,168,0.5)] hover:shadow-[0_0_60px_rgba(247,54,168,0.7)] group">
            Book Your 360 Booth Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

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

function SceneHowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">The Process</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">How Does the 360 Photo Booth Work?</h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Our 360 photo booth is simple to use and endlessly fun:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-neon/10 via-brand-neon/40 to-brand-neon/10 z-0" />
          {[
            "Your guests step onto the platform",
            "A rotating arm with a mounted camera sweeps around them at high speed",
            "The result is a stunning slow-motion 360-degree video",
            "The video is instantly processed with music, overlays, and custom branding",
            "Guests receive their video instantly via WhatsApp, AirDrop, or email"
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#0a0a0a] border border-brand-neon/30 flex items-center justify-center shadow-[0_0_30px_rgba(247,54,168,0.15)]">
                <span className="text-3xl font-black text-brand-neon">{i + 1}</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            The entire experience takes under 3 minutes — and the results look absolutely incredible. Perfect for social media reels, Instagram stories, and TikTok content.
          </p>
          <a href="#videos" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm transition-all group">
            See How It Looks <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

const featuresList = [
  "Professional 360-degree rotating camera arm with high-speed video capture",
  "Slow-motion video effects (240fps+ slow-mo)",
  "Custom branded video overlays and motion templates",
  "Custom intro/outro animations with your event name, date, or logo",
  "LED-lit platform suitable for up to 6 guests at once",
  "Background music selection to match your event theme",
  "Instant video delivery via WhatsApp, AirDrop, and email",
  "Dedicated on-site director and attendant",
  "Full setup and teardown by our professional team",
  "Post-event digital gallery of all 360 videos",
];

function Scene3Features() {
  return (
    <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #f736a8 0%, transparent 60%)" }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Features</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            What's Included in Our 360 Photo Booth Rental?
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {featuresList.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-[#0a0a0a] hover:border-brand-neon/30 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-4 h-4 text-brand-neon" />
              </div>
              <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
          >
            View Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SceneWhyChoose() {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Benefits</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Why Rent a 360 Photo Booth for Your Event?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Share2 className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">It's the Most Viral Event Experience in Pakistan</h3>
            <p className="text-white/60 text-sm leading-relaxed">360 booth videos are incredibly shareable. Your guests will post their 360 videos on Instagram, TikTok, and WhatsApp immediately — giving your event organic social media coverage that no other entertainment option can match.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Users className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">Perfect for All Ages</h3>
            <p className="text-white/60 text-sm leading-relaxed">From kids to grandparents, everyone loves the 360 booth. It's interactive, easy to use, and the results are universally impressive. It's a crowd-pleaser at every event — from intimate family gatherings to large-scale corporate events.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Briefcase className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">Premium Branding for Corporate Events</h3>
            <p className="text-white/60 text-sm leading-relaxed">For brand activations and corporate events, the 360 booth is a powerful marketing tool. Custom overlays, logo placements, and branded templates ensure maximum brand visibility. Every video shared by your guests is a piece of branded content.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Zap className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">Elevates the Look and Feel of Your Event</h3>
            <p className="text-white/60 text-sm leading-relaxed">The glowing LED platform and high-energy 360 experience creates a visually stunning focal point at any venue. It signals a premium event experience and leaves a lasting impression on every guest.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneEvents() {
  return (
    <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Occasions</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">360 Photo Booth Rental for Every Occasion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">360 Photo Booth for Weddings</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Make your baraat, mehndi, or walima unforgettable. Pakistani weddings are grand celebrations, and the 360 booth adds that extra magic. Imagine a stunning slow-motion video of the bride and groom — it's the ultimate wedding keepsake. Also known as the 360 booth wedding experience, our setup can accommodate multiple guests and creates breathtaking group videos.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Wedding <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">Corporate Events &amp; Brand Activations</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Whether it's a product launch, annual dinner, brand activation, or company milestone event — the 360 booth drives maximum engagement. Branded overlays, custom templates, and instant social sharing make it the most powerful corporate entertainment tool available in Pakistan.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Corporate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">360 Photo Booth for Birthday Parties</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Turn your next birthday party into a red carpet experience! From milestone 18th and 21st birthdays to lavish adult celebrations, the 360 booth creates unforgettable moments and gives every guest a personalised video to take home.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Birthday <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">Parties and Private Events</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Eid celebrations, university events, farewells, award ceremonies, and VIP gatherings — our 360 camera booth rental brings high-energy fun to any occasion. It's the most talked-about addition to any event in Pakistan.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Party <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const videos = [
  "/360-photo-booth-rental-edison-nj.mp4",
  "/360-photo-booth-rental-los-angeles.mp4",
  "/360-photo-booth-rental-houston-sugar-land-tx.mp4",
  "/360-photo-booth-rental-neward-de.mp4",
];

function SceneVideos() {
  return (
    <section id="videos" className="py-16 md:py-20 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          className="text-center mb-10"
        >
          <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Real Events</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">See the 360° Experience in Action</motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            Watch real 360° booth moments from events we've powered.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {videos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group aspect-[9/16] bg-[#0a0a0a] border border-white/8 hover:border-brand-neon/40 transition-all"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-brand-neon/30 rounded-2xl transition-colors duration-300" />
              <div className="absolute bottom-3 left-3">
                <div className="w-2 h-2 rounded-full bg-brand-neon shadow-[0_0_6px_rgba(247,54,168,1)] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SceneLocations() {
  return (
    <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-brand-neon/10 border border-brand-neon/30 rounded-[2.5rem] p-10 md:p-16 text-center">
          <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Availability</p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">360 Photo Booth Rental Near Me — Serving Pakistan-Wide</h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
            We offer 360 photo booth rental services across Pakistan:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Karachi — Available for all events",
              "Lahore — Pakistan's party capital",
              "Islamabad — Corporate & private events",
              "Multan — Now available!"
            ].map((city) => (
              <span key={city} className="bg-black border border-white/10 px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-brand-neon" /> 360 Photo Booth Rental {city}
              </span>
            ))}
          </div>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-8">
            Need a 360 photo booth in another city? We travel! Reach out and let's plan your event.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)]"
          >
            Check Availability <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ScenePricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent" />
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Pricing</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            360 Photo Booth Rental Price in Pakistan
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Our 360 photo booth rental pricing depends on your event type, duration, location, and customisation requirements. We offer flexible packages for private events, weddings, and corporate clients.
            <br /><br />
            Contact us today for a custom quote tailored to your event — we'll work within your budget to deliver a premium 360 experience.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_40px_rgba(247,54,168,0.5)] group"
            >
              Get a Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SceneTestimonials() {
  return (
    <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Reviews</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">What Our Clients Say About Our 360 Booth</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem]">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-brand-neon fill-brand-neon" />)}
            </div>
            <h3 className="text-lg font-bold text-white mb-4">"Best thing at our wedding!"</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"The 360 booth was the absolute highlight of our baraat night. Every single guest used it and all the videos were stunning. Peek-A-Booth PK's team was so professional!"</p>
            <p className="text-brand-neon font-bold text-sm">— Mariam K., Lahore</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem]">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-brand-neon fill-brand-neon" />)}
            </div>
            <h3 className="text-lg font-bold text-white mb-4">"Took our brand launch to another level!"</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"We used the 360 booth at our product launch event in Karachi and it was incredible. The branded overlay was perfectly done and our guests shared videos all night. Truly unforgettable!"</p>
            <p className="text-brand-neon font-bold text-sm">— Tariq M., Brand Manager, Karachi</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-brand-neon hover:text-white px-8 py-4 rounded-full font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(247,54,168,0.4)] group"
          >
            Rent Your 360 Booth Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const faqs360 = [
  {
    q: "What is a 360 photo booth?",
    a: "A 360 photo booth is a rotating camera setup that captures slow-motion video of guests from every angle, creating a cinematic 360-degree effect. The videos are instantly shared via WhatsApp, AirDrop, or email.",
  },
  {
    q: "How many people can use the 360 booth at one time?",
    a: "Our LED platform comfortably fits 1 to 6 guests per rotation, depending on your choice of platform size.",
  },
  {
    q: "Can the 360 booth be customised for our event?",
    a: "Yes! We offer fully custom branded video overlays, intro animations, music, and templates. Corporate clients can add logos and brand colours to every video.",
  },
  {
    q: "Is the 360 booth suitable for outdoor events?",
    a: "Yes, with appropriate weather conditions. Our team will advise on venue suitability during the booking process.",
  },
  {
    q: "How much does a 360 photo booth rental cost in Pakistan?",
    a: "Pricing varies by event duration, location, and customisation. Contact us for a free custom quote.",
  },
];

function SceneFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Frequently Asked Questions — 360 Photo Booth Rental</h2>
        </div>
        <div className="space-y-3 mb-10">
          {faqs360.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-brand-neon/40 bg-brand-neon/5" : "border-white/10 bg-[#0a0a0a] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className={`font-semibold text-sm md:text-base transition-colors ${
                    isOpen ? "text-brand-neon" : "text-white group-hover:text-brand-neon"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all ${
                    isOpen ? "bg-brand-neon text-white shadow-[0_0_10px_rgba(247,54,168,0.4)]" : "bg-white/10 text-white/60 group-hover:bg-white/20"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
          >
            Book 360 Photo Booth Rental Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SceneFooterSEO() {
  return (
    <section className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-white/40 text-xs leading-relaxed">
          Peek-A-Booth PK offers professional 360 photo booth rental services across Pakistan. Our 360 video booth rental is available for weddings, birthdays, corporate events, brand activations, and private parties in Karachi, Lahore, Islamabad, and Multan. With slow-motion video capture, custom branded overlays, and instant WhatsApp sharing, our 360 selfie booth rental delivers the most exciting photo booth experience in Pakistan. Rent a 360 photo booth today and give your guests an experience they'll never forget.
        </p>
      </div>
    </section>
  );
}

export default function ThreeSixtyClient() {
  return (
    <div className="bg-black text-white">
      <Scene1Hero />
      <SceneHowItWorks />
      <Scene3Features />
      <SceneWhyChoose />
      <SceneEvents />
      <SceneVideos />
      <SceneLocations />
      <ScenePricing />
      <SceneTestimonials />
      <SceneFAQ />
      <Contact />
      <SceneFooterSEO />
    </div>
  );
}
