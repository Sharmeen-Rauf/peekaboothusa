import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Star, Users, Layout, Image as ImageIcon, Camera } from "lucide-react";
import Contact from "@/components/sections/Contact";
import OpenAirPageClient from "./OpenAirPageClient";

export const metadata: Metadata = {
  title: "Open Air Photo Booth Rental in Pakistan | Peek-A-Booth PK",
  description: "Rent a premium open air photo booth in Pakistan for your wedding, birthday, or corporate event. Spacious setup, instant prints & custom backdrops. Available in Karachi, Lahore, Islamabad & Multan.",
};

export default function OpenAirPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/premium-photobooth.png"
            alt="Open Air Photo Booth Rental in Pakistan"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">Rental in Pakistan</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed font-light">
            Looking for a spacious, fun, and stylish photo booth for your next event? Our Open Air Photo Booth Rental is Pakistan's most popular choice for weddings, corporate events, birthday parties, and family gatherings. With no enclosed walls, the open air setup allows for large group shots, flexible backdrops, and a truly social experience that keeps your guests engaged all evening.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/booth-setup-17.jpg"
                  alt="What is an Open Air Photo Booth"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
            </div>
            <div>
              <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">About The Booth</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight leading-tight">
                What is an Open Air Photo Booth?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                An Open Air Photo Booth is a freestanding photo station — without an enclosed cabinet — that uses a professional-grade camera, studio lighting, and a custom backdrop to capture stunning photos of your guests. Unlike traditional enclosed booths, the open air design is spacious enough for large groups and feels more like a professional photoshoot.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Our open air photo booth rental in Pakistan comes fully equipped with everything your event needs: custom backdrops, fun props, branded print templates, and a professional attendant who ensures non-stop fun throughout your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Features</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">What's Included in Our Rental?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              "Professional DSLR camera with studio-grade lighting setup",
              "Custom backdrop — choose from our collection or provide your own theme",
              "Branded photo print templates personalised for your event",
              "Unlimited photo sessions for your guests during the rental period",
              "Instant photo prints — guests take home their keepsakes",
              "Fun props, signs, and accessories",
              "Professional on-site attendant to manage the booth and assist guests",
              "Digital gallery of all event photos shared after the event",
              "WhatsApp & email sharing for instant digital delivery",
              "Full setup and teardown by our team",
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-6 rounded-2xl transition-colors">
                <div className="w-8 h-8 rounded-full bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-4 h-4 text-brand-neon" />
                </div>
                <span className="text-white/80 text-sm leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
            >
              View Package Options <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Benefits</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Why Choose an Open Air Photo Booth for Your Event?</h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              The open air photo booth is the ideal choice when you want:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
              <Users className="w-8 h-8 text-brand-neon mb-4" />
              <h3 className="text-xl font-bold mb-3">More Space for Larger Groups</h3>
              <p className="text-white/60 text-sm leading-relaxed">Perfect for family group shots at weddings and corporate team photos — our open air setup accommodates 2 to 15+ guests in a single frame. No squeezing into a small box!</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
              <Layout className="w-8 h-8 text-brand-neon mb-4" />
              <h3 className="text-xl font-bold mb-3">A Flexible and Stylish Setup</h3>
              <p className="text-white/60 text-sm leading-relaxed">The open design makes it visually striking at your venue. We can position it anywhere — at the entrance, alongside your stage, or near the dance floor — turning it into a focal point of the event.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
              <ImageIcon className="w-8 h-8 text-brand-neon mb-4" />
              <h3 className="text-xl font-bold mb-3">Fully Customisable Backdrops</h3>
              <p className="text-white/60 text-sm leading-relaxed">From floral walls and LED balloon arches to branded corporate backdrops, we offer a wide range of backdrop options. You can also provide your own custom backdrop to perfectly match your event's colour palette and theme.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all">
              <Camera className="w-8 h-8 text-brand-neon mb-4" />
              <h3 className="text-xl font-bold mb-3">Instant Prints Your Guests Will Cherish</h3>
              <p className="text-white/60 text-sm leading-relaxed">Every guest walks away with a beautifully printed, branded photo as a keepsake. It's one of the most popular and personal party favours you can offer — and guests love it!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Occasions</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Open Air Photo Booth Rental for All Events</h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Our open air photo booth is perfect for every type of event in Pakistan:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all">
              <h3 className="text-lg font-bold mb-3 text-white">Wedding Photo Booth Rental</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">The most popular booth choice for Pakistani weddings! Whether it's your mehndi, baraat, or walima — the open air booth creates lasting memories and prints for all your guests. Completely customisable with your wedding colours, monogram, and theme.</p>
              <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Wedding <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all">
              <h3 className="text-lg font-bold mb-3 text-white">Birthday Party Photo Booth</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Add instant entertainment to any birthday party. From children's birthday parties to milestone adult celebrations, our open air booth keeps guests engaged and creates personalised birthday-themed prints.</p>
              <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Birthday <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all">
              <h3 className="text-lg font-bold mb-3 text-white">Corporate Event Photo Booth</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Looking for a branded open air photo booth for your next corporate event, product launch, or office party? We create custom print templates with your company logo, event branding, and colours — perfect for brand visibility and client engagement.</p>
              <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Corporate <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 hover:border-brand-neon/30 p-8 rounded-[2rem] flex flex-col transition-all">
              <h3 className="text-lg font-bold mb-3 text-white">Party &amp; Private Gatherings</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">Eid parties, farewell dinners, family reunions, university events — our portable open air photo booth is easy to set up anywhere and brings instant fun to any occasion.</p>
              <Link href="/get-a-quote" className="text-brand-neon text-sm font-bold flex items-center gap-2 hover:text-brand-glow">Book for Party <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITIES / AVAILABILITY ── */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-brand-neon/10 border border-brand-neon/30 rounded-[2.5rem] p-10 md:p-16 text-center">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Availability</p>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">Open Air Photo Booth Rental Near Me — Available Across Pakistan</h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              We offer open air photo booth rental services in the following cities:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Karachi", "Lahore", "Islamabad", "Multan"].map((city) => (
                <span key={city} className="bg-black border border-white/10 px-6 py-3 rounded-full text-white font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-neon" /> Open Air Photo Booth Rental {city}
                </span>
              ))}
            </div>
            <p className="text-white/60 text-sm max-w-2xl mx-auto mb-8">
              Can't find your city? We travel to events across Pakistan. Contact us to check availability in your area.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)]"
            >
              Check Availability in Your City <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW TO BOOK ── */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Process</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">How to Book Your Open Air Photo Booth Rental</h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
              Booking is simple and takes just a few minutes:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Step 1", desc: "Fill out our quick quote form with your event details" },
              { title: "Step 2", desc: "Receive a custom quote within 24 hours" },
              { title: "Step 3", desc: "Confirm your booking and customise your booth (backdrop, prints, props)" },
              { title: "Step 4", desc: "Relax — our team handles setup, operation, and teardown on the day" },
            ].map((step, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl relative overflow-hidden">
                <div className="text-brand-neon text-6xl font-extrabold opacity-[0.03] absolute -top-4 -right-2">0{i+1}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
            >
              Get My Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-brand-neon text-xs font-bold tracking-[0.3em] uppercase mb-3">Reviews</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem]">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-brand-neon fill-brand-neon" />)}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">"The open air booth was perfect for our baraat!"</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"We had 300 guests and the open air photo booth was the best investment we made. Everyone loved the instant prints with our wedding monogram. Highly recommend Peek-A-Booth PK!"</p>
              <p className="text-brand-neon font-bold text-sm">— Hina A., Lahore</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[2.5rem]">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-brand-neon fill-brand-neon" />)}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">"Amazing setup for our corporate dinner!"</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"The branded open air photo booth at our annual corporate dinner was a huge hit. The team was punctual, professional, and the quality of prints was excellent."</p>
              <p className="text-brand-neon font-bold text-sm">— Bilal S., Corporate Client, Karachi</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-brand-neon hover:text-white px-8 py-4 rounded-full font-extrabold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(247,54,168,0.4)] group"
            >
              Book Your Open Air Booth Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          </div>
          <OpenAirPageClient />
          <div className="flex justify-center mt-10">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] group"
            >
              Book Open Air Photo Booth Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <Contact />

      {/* ── FOOTER SEO TEXT ── */}
      <section className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-white/40 text-xs leading-relaxed">
            Peek-A-Booth PK offers professional open air photo booth rental services across Pakistan, including Karachi, Lahore, Islamabad, and Multan. Our portable open air photo booths are available for weddings, birthday parties, corporate events, and private gatherings. With custom backdrops, instant prints, and professional attendants, we deliver the best open air photo booth experience in Pakistan. Book your open air photo booth rental today!
          </p>
        </div>
      </section>

    </main>
  );
}
