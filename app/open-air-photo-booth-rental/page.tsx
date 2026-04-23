import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, Calendar, MapPin, ChevronDown } from "lucide-react";
import Contact from "@/components/sections/Contact";
import OpenAirPageClient from "./OpenAirPageClient";

export const metadata: Metadata = {
  title: "Open Air Photo Booth Rental With Prints | Peekabooth USA",
  description: "Premium open air photo booth rental with instant prints, customizable backdrops, unlimited photos, and a friendly attendant. Perfect for weddings, parties & corporate events.",
};

const pricingPlans = [
  {
    hours: "2 Hour",
    price: "$400",
    features: [
      "Unlimited Pictures",
      "Instant 2x6 Prints",
      "Personalized Pictures",
      "Party Themed Props",
      "Standard Lighting Kit",
      "Standard Backdrop",
      "Friendly Attendant",
    ],
  },
  {
    hours: "3 Hour",
    price: "$550",
    popular: true,
    features: [
      "Unlimited Pictures",
      "Instant 2x6 Prints",
      "Personalized Pictures",
      "Party Themed Props",
      "Standard Lighting Kit",
      "Standard Backdrop",
      "Friendly Attendant",
    ],
  },
  {
    hours: "4 Hour",
    price: "$700",
    features: [
      "Unlimited Pictures",
      "Instant 2x6 Prints",
      "Personalized Pictures",
      "Party Themed Props",
      "Standard Lighting Kit",
      "Standard Backdrop",
      "Friendly Attendant",
    ],
  },
];

const highlights = [
  "/booth-setup-12.jpg",
  "/booth-setup-13.jpg",
  "/booth-setup-14.jpg",
  "/booth-setup-15.jpg",
];

export default function OpenAirPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium-photobooth.png"
            alt="Open Air Photo Booth Rental With Prints"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10 pt-32 pb-20 text-center">
          <p className="text-brand-neon text-xs font-bold tracking-[0.4em] uppercase mb-4">Open Air Photo Booth</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">
            Open Air Photo Booth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Rental With Prints</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed font-light">
            The perfect open air photo booth rental to add with instant prints, and much more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
            >
              Get A Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+923260760786"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" /> +92 326 0760786
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT / CLASSIC FUN ── */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/booth-setup-17.jpg"
                  alt="Open Air Photo Booth"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-neon px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(247,54,168,0.5)]">
                <p className="text-white text-3xl font-extrabold leading-none">500+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase mt-1">Events Covered</p>
              </div>
            </div>
            {/* Text side */}
            <div>
              <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Why Open Air</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight leading-tight">
                Classic Fun with Our Open Air Photo Booth Rentals
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                An open air photo booth rental offers a spacious setup that's perfect for group shots and striking poses. With a high-quality camera, fun props, customizable backdrops, and instant prints, guests can take home lasting memories. It's ideal for weddings, parties, and corporate events where style meets classic photo booth charm.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Instant 2x6 Prints", "Customizable Backdrops", "Fun Party Props", "Friendly Attendant", "Unlimited Photos", "Nationwide Coverage"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-neon" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-16 md:py-20 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">All Inclusive</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Open Air Photo Booth Rental</h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Peek-A-Booth's open air photo booths come packed with features like instant sharing, customizable templates, filters, virtual props, and green screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.hours}
                className={`relative rounded-[2rem] p-8 border transition-all group ${
                  plan.popular
                    ? "bg-brand-neon/10 border-brand-neon shadow-[0_0_40px_rgba(247,54,168,0.2)]"
                    : "bg-[#0a0a0a] border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-neon text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(247,54,168,0.5)]">
                    Most Popular
                  </div>
                )}
                <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-2">{plan.hours} Rental</p>
                <div className="flex items-end gap-1 mb-8">
                  <span className={`text-5xl font-extrabold ${plan.popular ? "text-brand-neon" : "text-white"}`}>{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-brand-neon/30 border border-brand-neon" : "bg-white/10 border border-white/20"}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-brand-neon" : "text-white/60"}`} />
                      </div>
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-a-quote"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-brand-neon hover:bg-brand-glow text-white shadow-[0_0_20px_rgba(247,54,168,0.4)]"
                      : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                  }`}
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEED MORE HOURS BANNER ── */}
      <section className="py-10 md:py-12 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] px-8 md:px-14 py-10 md:py-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 h-full w-1 bg-brand-neon rounded-l-[2rem]" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">Need More Hours?</h3>
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Peek-A-Booth can add more hours and more fun for you! Contact us today to customize your package.
              </p>
            </div>
            <a
              href="tel:+923260760786"
              className="relative z-10 shrink-0 flex items-center gap-3 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] whitespace-nowrap"
            >
              <Phone className="w-4 h-4" /> +92 326 0760786
            </a>
          </div>
        </div>
      </section>

      {/* ── RESERVE YOUR DATE ── */}
      <section id="reserve" className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Book Your Event</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 leading-tight">Reserve Your Date</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Choose Peek-A-Booth for open air photo booth rentals, exceptional service, and nationwide coverage. With customizable backdrops, unlimited prints, and fun props, our booths create unforgettable memories for any event!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] group"
                >
                  Check Availability <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Link>
                <a
                  href="tel:+923260760786"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-neon/50 text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:bg-brand-neon/10"
                >
                  <Phone className="w-4 h-4" /> Call to Reserve
                </a>
              </div>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "500+", label: "Events Completed", icon: "🎉" },
                { val: "50+", label: "Cities Served", icon: "📍" },
                { val: "100%", label: "Satisfaction Rate", icon: "⭐" },
                { val: "24/7", label: "Customer Support", icon: "💬" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 rounded-2xl p-6 text-center transition-all group">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-2xl font-extrabold text-white group-hover:text-brand-neon transition-colors mb-1">{stat.val}</p>
                  <p className="text-white/40 text-xs tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS GALLERY ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Event Clips</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Photo Booth Rental With Prints Highlights</h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Take a look at past event clips to see how our open air photo booth brings guests together with fun props, instant prints, and picture-perfect memories everyone loves.
            </p>
          </div>

          {/* Asymmetric image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {highlights.map((src, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}
              >
                <Image
                  src={src}
                  alt={`Event highlight ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 border border-white/0 group-hover:border-brand-neon/40 rounded-2xl transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-brand-neon hover:text-white px-10 py-4 rounded-full font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(247,54,168,0.4)] group"
            >
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Support</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
              Find quick answers to the most common questions about our open air photo booth rentals.
            </p>
          </div>
          <OpenAirPageClient />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact />
    </main>
  );
}
