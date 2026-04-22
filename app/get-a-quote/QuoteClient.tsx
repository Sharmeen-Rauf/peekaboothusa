"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, ChevronLeft, Sparkles, Star, Plus, Minus, Send, Phone } from "lucide-react";

/* ─── DATA & CONFIG ───────────────────────────────────────────────────────── */

const eventTypes = [
  { id: "wedding", name: "Wedding", icon: "💍", theme: "from-purple-900/60 via-[#050505] to-black" },
  { id: "birthday", name: "Birthday", icon: "🎉", theme: "from-pink-900/60 via-[#050505] to-black" },
  { id: "corporate", name: "Corporate", icon: "🏢", theme: "from-blue-900/60 via-[#050505] to-black" },
  { id: "graduation", name: "Graduation", icon: "🎓", theme: "from-yellow-900/60 via-[#050505] to-black" },
  { id: "baby-shower", name: "Baby Shower", icon: "👶", theme: "from-teal-900/60 via-[#050505] to-black" },
  { id: "luxury", name: "Luxury Event", icon: "✨", theme: "from-emerald-900/60 via-[#050505] to-black" },
];

const booths = [
  { id: "360", name: "360 Video Booth", basePrice: 400, img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", desc: "Viral slow-motion 360° videos." },
  { id: "glam", name: "Glam Booth", basePrice: 350, img: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop", desc: "Kardashian style skin-smoothing." },
  { id: "digital", name: "Digital Booth", basePrice: 250, img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", desc: "Instant GIFs & Boomerangs." },
  { id: "magazine", name: "Magazine Box", basePrice: 600, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", desc: "Life-size Vogue cover experience." },
  { id: "openair", name: "Open Air Booth", basePrice: 300, img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", desc: "Classic high-quality prints." },
];

const addonsList = [
  { id: "prints", name: "Instant Prints", price: 100, icon: "🖨️" },
  { id: "backdrop", name: "Premium Backdrop", price: 50, icon: "✨" },
  { id: "props", name: "Neon/Custom Props", price: 40, icon: "🎭" },
  { id: "guestbook", name: "Guest Book", price: 75, icon: "📖" },
  { id: "branding", name: "Custom Branding", price: 150, icon: "🏢" },
  { id: "redcarpet", name: "Red Carpet Setup", price: 120, icon: "📸" },
];

const steps = [
  { id: 1, title: "Event Type" },
  { id: 2, title: "Choose Booth" },
  { id: 3, title: "Customize" },
  { id: 4, title: "Event Details" },
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function QuoteClient() {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<string | null>(null);
  const [selectedBooth, setSelectedBooth] = useState<string | null>(null);
  const [hours, setHours] = useState(2);
  const [addons, setAddons] = useState<string[]>([]);
  
  const [details, setDetails] = useState({
    firstName: "", lastName: "", email: "", phone: "", date: "", startTime: "", venue: "", notes: ""
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Derived State
  const currentEvent = eventTypes.find(e => e.id === eventType);
  const currentBooth = booths.find(b => b.id === selectedBooth);
  
  const estimatedTotal = useMemo(() => {
    let total = 0;
    if (currentBooth) total += currentBooth.basePrice * hours;
    addons.forEach(addId => {
      const a = addonsList.find(x => x.id === addId);
      if (a) total += a.price;
    });
    return total;
  }, [currentBooth, hours, addons]);

  const aiRecommendation = useMemo(() => {
    if (!eventType) return null;
    if (eventType === "wedding" && !addons.includes("guestbook")) return "Most wedding clients add a Guest Book for lifelong memories!";
    if (eventType === "corporate" && !addons.includes("branding")) return "Custom Branding is highly recommended for corporate activations.";
    if (eventType === "birthday" && !addons.includes("props")) return "Level up the fun with Custom Neon Props!";
    if (hours < 3) return "Did you know? 3+ hours is recommended to ensure all guests get a turn.";
    return "Your package looks amazing! ✨";
  }, [eventType, addons, hours]);

  // Handlers
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const generateWhatsAppLink = () => {
    const text = `Hi Peekabooth 👋\n\nI'd like a quote for:\nEvent: ${currentEvent?.name}\nBooth: ${currentBooth?.name}\nHours: ${hours}\nAdd-ons: ${addons.length > 0 ? addons.map(a => addonsList.find(x => x.id === a)?.name).join(", ") : "None"}\nVenue: ${details.venue}\nDate: ${details.date}\n\nEstimated Budget: $${estimatedTotal}\n\nMy name is ${details.firstName} ${details.lastName}. Please contact me with more details!`;
    return `https://wa.me/18007098579?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─── VIEWS ─── //

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center pt-24 px-6 text-white text-center relative overflow-hidden">
        {/* Confetti / Particle effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-brand-neon z-0"
            initial={{ top: "50%", left: "50%", opacity: 1, scale: 0 }}
            animate={{ 
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, 
              opacity: [1, 1, 0], scale: [0, Math.random() * 2 + 1, 0] 
            }}
            transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
          />
        ))}

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md relative z-10">
          <div className="w-24 h-24 rounded-full bg-brand-neon/20 border-2 border-brand-neon flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(247,54,168,0.5)]">
            <Check className="w-12 h-12 text-brand-neon" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">You&apos;re All Set!</h1>
          <p className="text-white/70 mb-10 text-lg">Your cinematic photo booth experience is being prepared. We&apos;ll be in touch shortly.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={generateWhatsAppLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-105">
              <Phone className="w-5 h-5" /> Send via WhatsApp
            </a>
            <button onClick={() => window.location.href = '/'} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm">
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-white selection:bg-brand-neon/30 pt-28 pb-32 transition-colors duration-1000 bg-gradient-to-br ${currentEvent?.theme || "from-[#0a0a0a] via-black to-[#050505]"}`}>
      
      {/* Film Grain */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* ── LEFT: FORM WIZARD ── */}
        <div className="w-full lg:w-2/3">
          
          {/* Progress Bar */}
          <div className="mb-10 flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 rounded-full z-0" />
            <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-neon rounded-full z-0" initial={{ width: "0%" }} animate={{ width: `${((step - 1) / 3) * 100}%` }} transition={{ duration: 0.5, ease: "easeInOut" }} />
            
            {steps.map((s, i) => (
              <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step >= s.id ? "bg-brand-neon text-white shadow-[0_0_15px_rgba(247,54,168,0.5)]" : "bg-[#111] border border-white/20 text-white/50"}`}>
                  {step > s.id ? <Check className="w-4 h-4" /> : s.id}
                </div>
                <span className={`absolute top-10 text-[10px] tracking-widest uppercase whitespace-nowrap transition-colors ${step >= s.id ? "text-brand-neon font-bold" : "text-white/30"}`}>{s.title}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="mt-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative min-h-[500px]">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: EVENT SELECTION */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">What are we celebrating?</h2>
                    <p className="text-white/50">Select your event type to customize the vibe.</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {eventTypes.map(ev => (
                      <motion.div 
                        key={ev.id} whileHover={{ scale: 1.03, y: -5 }} whileTap={{ scale: 0.98 }}
                        onClick={() => { setEventType(ev.id); setTimeout(nextStep, 400); }}
                        className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 ${eventType === ev.id ? "border-brand-neon bg-brand-neon/10 shadow-[0_0_30px_rgba(247,54,168,0.3)]" : "border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10"}`}
                      >
                        <span className="text-4xl drop-shadow-lg">{ev.icon}</span>
                        <span className="font-bold tracking-wide">{ev.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: BOOTH SELECTION */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Choose your experience.</h2>
                      <p className="text-white/50">Select the perfect photo booth for your {currentEvent?.name.toLowerCase()}.</p>
                    </div>
                    <button onClick={prevStep} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {booths.map(booth => (
                      <div 
                        key={booth.id} onClick={() => setSelectedBooth(booth.id)}
                        className={`relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-500 transform ${selectedBooth === booth.id ? "ring-2 ring-brand-neon ring-offset-4 ring-offset-black scale-[1.02]" : "hover:scale-[1.02]"}`}
                      >
                        <Image src={booth.img} alt={booth.name} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 ${selectedBooth === booth.id ? "from-brand-neon/90 via-black/40 to-transparent" : "from-black/90 via-black/40 to-transparent group-hover:from-brand-neon/60"}`} />
                        
                        <div className="absolute bottom-5 left-5 right-5">
                          <h3 className="text-xl font-extrabold text-white mb-1 drop-shadow-md">{booth.name}</h3>
                          <p className="text-white/70 text-sm font-medium">{booth.desc}</p>
                        </div>
                        {selectedBooth === booth.id && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-neon flex items-center justify-center shadow-[0_0_15px_rgba(247,54,168,0.8)]">
                            <Check className="w-4 h-4 text-white font-bold" />
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button onClick={nextStep} disabled={!selectedBooth} className="bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(247,54,168,0.4)] disabled:opacity-50 flex items-center gap-2 group">
                      Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CUSTOMIZATION */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Make it yours.</h2>
                    <button onClick={prevStep} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                  </div>

                  {/* AI Recommendation */}
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-brand-neon/10 border border-brand-neon/30 rounded-2xl p-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-brand-neon shrink-0 mt-0.5" />
                    <p className="text-sm text-brand-neon font-medium leading-relaxed">{aiRecommendation}</p>
                  </motion.div>

                  {/* Hours Slider/Counter */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold">Rental Duration</h3>
                        <p className="text-white/50 text-xs">How long do you need the booth?</p>
                      </div>
                      <div className="text-3xl font-extrabold text-brand-neon">{hours} <span className="text-lg text-white/50 font-medium">hrs</span></div>
                    </div>
                    <div className="flex items-center gap-6">
                      <button onClick={() => hours > 2 && setHours(h => h - 1)} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-brand-neon text-white transition-all disabled:opacity-30"><Minus className="w-5 h-5" /></button>
                      <input type="range" min="2" max="8" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} className="w-full accent-brand-neon h-2 bg-white/10 rounded-full appearance-none cursor-pointer" />
                      <button onClick={() => hours < 8 && setHours(h => h + 1)} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-brand-neon text-white transition-all"><Plus className="w-5 h-5" /></button>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <h3 className="text-lg font-bold mb-4">Premium Add-ons</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {addonsList.map(addon => {
                        const isSelected = addons.includes(addon.id);
                        return (
                          <div 
                            key={addon.id} onClick={() => toggleAddon(addon.id)}
                            className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group ${isSelected ? "border-brand-neon bg-brand-neon/10 shadow-[0_0_15px_rgba(247,54,168,0.2)]" : "border-white/10 bg-[#111] hover:bg-white/5 hover:border-white/30"}`}
                          >
                            <span className="text-2xl mb-1">{addon.icon}</span>
                            <span className="text-xs font-bold leading-tight">{addon.name}</span>
                            <span className={`text-[10px] font-bold ${isSelected ? "text-brand-neon" : "text-white/40"}`}>+${addon.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button onClick={nextStep} className="bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(247,54,168,0.4)] flex items-center gap-2 group">
                      Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: DETAILS */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Final Details.</h2>
                      <p className="text-white/50">Where and when is the magic happening?</p>
                    </div>
                    <button onClick={prevStep} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                  </div>

                  <form id="quote-form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input required type="text" name="firstName" value={details.firstName} onChange={handleDetailChange} placeholder="First Name *" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                      </div>
                      <div className="relative group">
                        <input required type="text" name="lastName" value={details.lastName} onChange={handleDetailChange} placeholder="Last Name *" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input required type="email" name="email" value={details.email} onChange={handleDetailChange} placeholder="Email Address *" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                      </div>
                      <div className="relative group">
                        <input required type="tel" name="phone" value={details.phone} onChange={handleDetailChange} placeholder="Phone Number *" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input required type="date" name="date" value={details.date} onChange={handleDetailChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors [color-scheme:dark]" />
                      </div>
                      <div className="relative group">
                        <input type="time" name="startTime" value={details.startTime} onChange={handleDetailChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors [color-scheme:dark]" />
                      </div>
                    </div>
                    <div className="relative group">
                      <input required type="text" name="venue" value={details.venue} onChange={handleDetailChange} placeholder="Venue Name & City *" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                    </div>
                    <div className="relative group">
                      <textarea name="notes" rows={3} value={details.notes} onChange={handleDetailChange} placeholder="Any special requests or details..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors resize-y" />
                    </div>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

        {/* ── RIGHT: LIVE ESTIMATE PANEL ── */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Ambient glow inside panel */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-neon mb-6 flex items-center gap-2"><Star className="w-3 h-3" /> Live Estimate</h3>
              
              <div className="space-y-4 mb-8">
                {/* Event Type */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-white/60 text-sm">Event Type</span>
                  <span className="font-bold text-sm text-right">{currentEvent ? currentEvent.name : "Not selected"}</span>
                </div>
                
                {/* Booth Selection */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-white/60 text-sm">Booth</span>
                  <div className="text-right">
                    <div className="font-bold text-sm">{currentBooth ? currentBooth.name : "Not selected"}</div>
                    {currentBooth && <div className="text-xs text-brand-neon mt-0.5">${currentBooth.basePrice} / hr</div>}
                  </div>
                </div>

                {/* Duration */}
                {currentBooth && (
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-white/60 text-sm">Duration</span>
                    <span className="font-bold text-sm">{hours} Hours</span>
                  </div>
                )}

                {/* Add-ons */}
                {addons.length > 0 && (
                  <div className="pb-4 border-b border-white/5">
                    <span className="text-white/60 text-sm block mb-2">Add-ons</span>
                    <div className="space-y-2">
                      {addons.map(id => {
                        const a = addonsList.find(x => x.id === id);
                        return a ? (
                          <div key={id} className="flex justify-between items-center text-sm">
                            <span className="text-white/80 flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-neon" /> {a.name}</span>
                            <span className="font-medium">+${a.price}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/0 via-brand-neon/5 to-brand-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-1">Estimated Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl text-brand-neon font-bold">$</span>
                  <motion.span 
                    key={estimatedTotal}
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-extrabold text-white"
                  >
                    {estimatedTotal}
                  </motion.span>
                </div>
                <p className="text-[10px] text-white/30 mt-2">*Final quote may vary based on travel & date.</p>
              </div>

              {/* Submit Button */}
              {step === 4 ? (
                <button form="quote-form" type="submit" className="w-full bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] flex items-center justify-center gap-2 group">
                  Submit Request <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button onClick={nextStep} className="w-full bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all backdrop-blur-sm">
                  Continue Form
                </button>
              )}

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
