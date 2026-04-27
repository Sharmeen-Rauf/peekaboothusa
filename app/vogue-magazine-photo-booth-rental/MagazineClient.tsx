"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/sections/Contact";
import { ArrowRight, Phone, Check, Camera, Image as ImageIcon, MapPin, Star, Sparkles, Smartphone, Award, Plus, Minus } from "lucide-react";

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
          src="/vogue-photo-booth.png"
          alt="Vogue Magazine Photo Booth Rental in Pakistan"
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

      <motion.div className="relative z-20 text-center px-6 max-w-5xl mx-auto" style={{ opacity, y }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4"
        >
          Be the Cover Star
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">
              Vogue Magazine Photo Booth Rental
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
          <p className="mb-4">Imagine walking up to a life-sized magazine box and seeing your name on the cover of Vogue. That's exactly the experience our Vogue Magazine Photo Booth delivers — and it's available for your next event in Pakistan!</p>
          <p>The Vogue Magazine Photo Booth (also known as the mirror photo booth or magic mirror photo booth) is one of the most unique, glamorous, and Instagram-worthy additions to any event. From grand Pakistani weddings and mehndi nights to corporate product launches and birthday galas — this booth guarantees that every guest feels like a star.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_40px_rgba(247,54,168,0.5)] hover:shadow-[0_0_60px_rgba(247,54,168,0.7)] group">
            Book Your Magazine Booth Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SceneWhatIsIt() {
  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <Image
                src="/magazine-photo-booth.jpg"
                alt="What is a Vogue Magazine Photo Booth"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          </div>
          <div>
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">About The Booth</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">What is a Vogue Magazine Photo Booth?</h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              The Vogue Magazine Photo Booth is a life-sized, illuminated box designed to look exactly like a magazine cover — with your guests as the featured stars. The box features customisable headings, your event name or branding, and a full-length photo printed in a professional magazine-cover format.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              It combines the elegance of a magic mirror photo booth with the glamour of a high-fashion editorial — and your guests absolutely love it. Often referred to as the selfie mirror photo booth or magazine photo booth, this setup creates one-of-a-kind keepsakes that your guests will treasure and share on social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const featuresList = [
  "Life-sized illuminated magazine box with high-definition display",
  "Fully customisable magazine cover headings and event branding",
  "Custom cover design matching your event theme, colours, and aesthetic",
  "High-resolution DSLR camera for stunning full-length photos",
  "Instant photo prints — guests walk away with their personalised magazine cover",
  "Digital sharing via WhatsApp and email",
  "Animated on-screen prompts and a fun, interactive experience",
  "Professional on-site attendant throughout the event",
  "Fun props to match the magazine/editorial theme",
  "Full setup and teardown by our team",
];

function SceneFeatures() {
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
            What's Included in Our Vogue Magazine Photo Booth Rental?
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
            href="/pricing"
            className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
          >
            View Package Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Why Rent a Vogue Magazine Photo Booth?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Sparkles className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">The Most Unique Photo Booth Experience in Pakistan</h3>
            <p className="text-white/60 text-sm leading-relaxed">The Vogue Magazine Photo Booth is unlike anything else available in Pakistan's event market. While traditional booths are popular, the magazine booth is a true showstopper — guests queue up for their chance to be on the cover, and the results are absolutely stunning.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Smartphone className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">Perfect for Social Media Moments</h3>
            <p className="text-white/60 text-sm leading-relaxed">In today's digital world, every event needs a wow moment that guests can share. The Vogue Magazine booth creates the perfect Instagram story, TikTok video, and WhatsApp share — making your event go viral organically.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <ImageIcon className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">Glamorous Keepsake for Every Guest</h3>
            <p className="text-white/60 text-sm leading-relaxed">Unlike digital-only options, the magazine photo booth produces a beautiful, high-quality printed magazine cover that every guest takes home. It's the most memorable event favour you can offer — personal, premium, and unlike anything else.</p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
            <Award className="w-8 h-8 text-brand-neon mb-4" />
            <h3 className="text-xl font-bold mb-3">Fully Customisable for Any Event</h3>
            <p className="text-white/60 text-sm leading-relaxed">Whether you want a classic Vogue-style cover for a bridal event, a branded corporate magazine for a product launch, or a birthday-themed magazine cover — we customise every detail to match your vision.</p>
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
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Vogue Magazine Photo Booth for Every Occasion</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">Wedding &amp; Mehndi Night</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Add a touch of Hollywood glamour to your wedding celebrations. The Vogue Magazine Photo Booth is especially popular at mehndi nights, bridal showers, and walima receptions. Imagine a customised magazine cover with the bride's name and wedding date — a keepsake that every guest will cherish. Pair it with our selfie mirror photo booth experience for maximum impact.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Wedding <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">Birthday Parties &amp; Milestone Celebrations</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">For 18th birthdays, 21st celebrations, and any milestone occasion — the magazine photo booth turns your party into a glamorous affair. Fully customisable with your birthday theme, it's the most talked-about addition to any birthday event.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Birthday <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">Corporate Events &amp; Brand Activations</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Replace ordinary corporate entertainment with something truly premium. Our branded magazine photo booth creates editorial-style content with your company logo and event branding — a powerful marketing tool that drives social media sharing and elevates your brand image.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Corporate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all group">
            <h3 className="text-xl font-bold mb-3 text-white">Parties &amp; Private Events</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Baby showers, engagement parties, farewell dinners, university events — the magazine booth adds instant luxury and personality to any gathering. It's the addition that makes guests say 'wow'.</p>
            <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Party <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
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
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">Vogue Magazine Photo Booth Rental Near Me — Available Across Pakistan</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8">
            {[
              "Magazine Photo Booth Rental Karachi",
              "Magazine Photo Booth Rental Lahore",
              "Magazine Photo Booth Rental Islamabad",
              "Magazine Photo Booth Rental Multan"
            ].map((city) => (
              <span key={city} className="bg-black border border-white/10 px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-brand-neon" /> {city}
              </span>
            ))}
          </div>
          <p className="text-white/80 text-sm max-w-2xl mx-auto mb-8">
            Looking for a magazine photo booth rental near you? We serve all major cities in Pakistan and travel for special events. Get in touch to check availability.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)]"
          >
            Check Your City's Availability <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
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
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">What Our Clients Say</h2>
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
        <div className="flex justify-center">
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-brand-neon hover:text-white px-8 py-4 rounded-full font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(247,54,168,0.4)] group"
          >
            Get a Free Quote Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const faqsVogue = [
  {
    q: "What is the difference between a Vogue Magazine Booth and a Mirror Photo Booth?",
    a: "The terms are often used interchangeably. The Vogue Magazine Booth refers to the magazine-cover aesthetic and format, while a magic mirror or selfie mirror photo booth refers to the interactive, touch-screen mirror design. Our Vogue Magazine Booth combines both — offering an interactive experience with a glamorous magazine-cover output.",
  },
  {
    q: "Can the magazine cover design be fully customised?",
    a: "Yes! We fully customise every magazine cover with your event name, date, personalised headings, colour scheme, and branding. For corporate events, we incorporate your company logo and brand identity.",
  },
  {
    q: "What size are the printed magazine covers?",
    a: "Our prints are produced in a striking large format — perfect for display or as a framed keepsake. Contact us for specific size options.",
  },
  {
    q: "How long does setup take?",
    a: "Our team typically requires 60–90 minutes for setup. We arrive early and have everything ready before your event begins.",
  },
  {
    q: "Is the magazine photo booth available near me?",
    a: "We serve Karachi, Lahore, Islamabad, and Multan. Fill out our quote form to check availability for your city and event date.",
  },
];

function SceneFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-3">Support</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3 mb-10">
          {faqsVogue.map((faq, i) => {
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
            Book Vogue Magazine Booth Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          Peek-A-Booth PK offers premium Vogue Magazine Photo Booth rental services across Pakistan. Our magic mirror photo booth and selfie mirror photo booth experiences are available for weddings, mehndi nights, birthday parties, corporate events, and private gatherings in Karachi, Lahore, Islamabad, and Multan. With custom magazine cover designs, instant high-quality prints, and a truly glamorous experience, our magazine photo booth rental is the most unique and memorable addition to any event in Pakistan. Book your magazine photo booth rental today!
        </p>
      </div>
    </section>
  );
}

export default function MagazineClient() {
  return (
    <div className="bg-black text-white">
      <Scene1Hero />
      <SceneWhatIsIt />
      <SceneFeatures />
      <SceneWhyChoose />
      <SceneEvents />
      <SceneLocations />
      <SceneTestimonials />
      <SceneFAQ />
      <Contact />
      <SceneFooterSEO />
    </div>
  );
}
