"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const boothOptions = [
  { id: "photo-booth", name: "Photo Booth", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop" },
  { id: "360-booth", name: "360 Photo Booth", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop" },
  { id: "corporate-booth", name: "Corporate Booth", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop" },
  { id: "wedding-booth", name: "Wedding Booth", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop" },
  { id: "glam-booth", name: "Glam Booth", image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=400&auto=format&fit=crop" },
  { id: "digital-booth", name: "Digital Booth", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop" },
];

const eventTypes = [
  "Baby Shower", "Wedding", "Corporate Event", "Birthday Party", "Sweet 16 / Quinceañera", "Graduation", "Brand Activation", "Other"
];

// Generate time slots (every 30 mins)
const generateTimeSlots = () => {
  const times = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const h = i % 12 === 0 ? 12 : i % 12;
      const ampm = i < 12 ? "AM" : "PM";
      const m = j === 0 ? "00" : "30";
      times.push(`${h}:${m} ${ampm}`);
    }
  }
  return times;
};
const timeSlots = generateTimeSlots();

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function QuoteClient() {
  const [selectedBooths, setSelectedBooths] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleBooth = (id: string) => {
    setSelectedBooths(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center pt-24 px-6 text-white text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md">
          <div className="w-20 h-20 rounded-full bg-brand-neon/20 border border-brand-neon flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-brand-neon" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Quote Requested!</h1>
          <p className="text-white/60 mb-8">Thank you for choosing Peek-A-Booth. Our team will review your details and send over a personalized proposal shortly.</p>
          <button onClick={() => window.location.href = '/'} className="bg-brand-neon text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-neon transition-colors">
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-neon/30 pt-32 pb-24">
      
      {/* ── HEADER ── */}
      <section className="relative text-center mb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get a Quote Today!</h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Our photo booth rental process is easy. Just fill out the form below for a personalized quote and we will send over a proposal you will love!
          </p>
        </motion.div>
      </section>

      {/* ── FORM ── */}
      <section className="relative z-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(247,54,168,0.05)]"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Personal Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10 mb-6">
                  <span className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon text-xs font-bold">1</span>
                  <h3 className="text-lg font-bold tracking-wide">Personal Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">First Name *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Last Name *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Email *</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Telephone *</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Interested Services */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10 mb-6">
                  <span className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon text-xs font-bold">2</span>
                  <h3 className="text-lg font-bold tracking-wide">Interested Services *</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {boothOptions.map((booth) => {
                    const isSelected = selectedBooths.includes(booth.id);
                    return (
                      <div 
                        key={booth.id}
                        onClick={() => toggleBooth(booth.id)}
                        className={`relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 group ${isSelected ? "border-brand-neon shadow-[0_0_20px_rgba(247,54,168,0.4)]" : "border-white/10 hover:border-white/30"}`}
                      >
                        <Image src={booth.image} alt={booth.name} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                        <div className={`absolute inset-0 bg-gradient-to-t transition-colors ${isSelected ? "from-brand-neon/80 via-black/50" : "from-black/90 via-black/20"}`} />
                        
                        {/* Radio indicator */}
                        <div className={`absolute top-3 left-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? "border-brand-neon bg-black" : "border-white/50 bg-black/40"}`}>
                          {isSelected && <div className="w-2.5 h-2.5 bg-brand-neon rounded-full" />}
                        </div>

                        <div className="absolute bottom-3 left-0 w-full text-center px-2">
                          <p className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">{booth.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-white/10 mb-6">
                  <span className="w-6 h-6 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon text-xs font-bold">3</span>
                  <h3 className="text-lg font-bold tracking-wide">Event Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1"><Calendar className="w-3 h-3" /> Event Date *</label>
                    <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1"><Clock className="w-3 h-3" /> Event Time</label>
                    <div className="grid grid-cols-2 gap-3">
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 appearance-none">
                        <option value="" disabled selected>Start Time</option>
                        {timeSlots.map(t => <option key={`start-${t}`} value={t} className="bg-[#0a0a0a]">{t}</option>)}
                      </select>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 appearance-none">
                        <option value="" disabled selected>End Time</option>
                        {timeSlots.map(t => <option key={`end-${t}`} value={t} className="bg-[#0a0a0a]">{t}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Event Type *</label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 appearance-none">
                      <option value="" disabled selected>Select an event type...</option>
                      {eventTypes.map(t => <option key={t} value={t} className="bg-[#0a0a0a]">{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Event Name *</label>
                    <input required type="text" placeholder="e.g. Sarah & John's Wedding" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> Venue Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Venue Address *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-2">Additional Notes</label>
                  <textarea rows={4} placeholder="Tell us anything else we should know about your event..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors resize-y" />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting || selectedBooths.length === 0}
                  className="w-full md:w-auto min-w-[200px] bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-10 py-4 rounded-full font-extrabold tracking-widest uppercase text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(247,54,168,0.4)]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </button>
                {selectedBooths.length === 0 && (
                  <p className="text-brand-neon text-xs mt-3 flex items-center justify-center gap-1"><Sparkles className="w-3 h-3"/> Please select at least one booth service above.</p>
                )}
              </div>

            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
