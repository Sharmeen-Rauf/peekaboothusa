"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, NotebookPen, Sparkles, DollarSign, Map, Clock } from "lucide-react";

export default function Contact() {
  const [eventType, setEventType] = useState("");
  const [service, setService] = useState("");
  const [duration, setDuration] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  const [showWeddingAI, setShowWeddingAI] = useState(false);
  const [showVenueSuggestions, setShowVenueSuggestions] = useState(false);
  const [appliedAI, setAppliedAI] = useState(false);

  // AI Logic for Wedding Auto-Suggest
  useEffect(() => {
    if (eventType === "wedding" && !appliedAI) {
      setShowWeddingAI(true);
    } else {
      setShowWeddingAI(false);
    }
  }, [eventType, appliedAI]);

  // AI Logic for Venue Auto-Complete
  useEffect(() => {
    if (venue.length > 2 && !venue.includes(",")) {
      setShowVenueSuggestions(true);
    } else {
      setShowVenueSuggestions(false);
    }
  }, [venue]);

  const applyWeddingAI = (e: React.MouseEvent) => {
    e.preventDefault();
    setService("magazine");
    setDuration("3-4 hours");
    setDetails("Theme: Romantic / Classic Elegance.");
    setTime("18:00");
    setShowWeddingAI(false);
    setAppliedAI(true);
  };

  const selectVenue = (selectedVenue: string) => {
    setVenue(selectedVenue);
    setShowVenueSuggestions(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative bg-black">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#0a0a0a] rounded-[2rem] p-10 lg:p-12 border border-brand-neon/20 shadow-[0_0_50px_rgba(247,54,168,0.05)] overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Subtle glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl border border-brand-neon/30 flex items-center justify-center mb-8 bg-brand-neon/5 shadow-[0_0_15px_rgba(247,54,168,0.2)]">
                <NotebookPen className="w-6 h-6 text-brand-neon" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
                Plan your event with <br className="hidden sm:block" /> AI-powered ease.
              </h2>
              
              <p className="text-white/60 text-sm md:text-base mb-12 max-w-md leading-relaxed">
                Experience our Smart Auto-Fill Form. Just tell us a bit about your event, and our AI will suggest the perfect premium photo booth experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                    <Phone className="w-4 h-4 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">+1-800-709-8579</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                    <Mail className="w-4 h-4 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">hello@peekaboothusa.com</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shrink-0 group-hover:border-brand-neon/50 transition-colors">
                    <MapPin className="w-4 h-4 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">Los Angeles, CA, United States</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Smart AI Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center py-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-brand-neon" />
              <span className="text-sm font-bold tracking-widest text-brand-neon uppercase">Smart Form Enabled</span>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                />
              </div>

              {/* Event Type & Auto Suggest Trigger */}
              <div className="relative">
                <select 
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors appearance-none cursor-pointer text-sm"
                >
                  <option value="" disabled hidden className="text-white/40">Event Type</option>
                  <option value="wedding" className="bg-[#111] text-white">Wedding</option>
                  <option value="corporate" className="bg-[#111] text-white">Corporate Gala</option>
                  <option value="birthday" className="bg-[#111] text-white">Birthday Party</option>
                  <option value="other" className="bg-[#111] text-white">Other</option>
                </select>
              </div>

              {/* Smart AI Bubble (Wedding) */}
              <AnimatePresence>
                {showWeddingAI && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-brand-neon/10 border border-brand-neon/30 rounded-xl p-4 my-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-[0_0_20px_rgba(247,54,168,0.15)] relative">
                      <div className="flex gap-3">
                        <Sparkles className="w-5 h-5 text-brand-neon shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <span className="text-white font-bold block mb-1">AI Smart Suggestion</span>
                          <span className="text-white/70 leading-relaxed">
                            For premium weddings, we recommend the <strong className="text-white">Magazine Booth</strong> for <strong className="text-white">3-4 hours</strong> with a <strong className="text-white">Romantic theme</strong>.
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={applyWeddingAI}
                        className="shrink-0 bg-brand-neon hover:bg-brand-glow text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(247,54,168,0.4)]"
                      >
                        <Sparkles className="w-3 h-3" /> Auto-Fill
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Budget Tip */}
              <AnimatePresence>
                {eventType === "wedding" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-white/50 flex items-center gap-2 -mt-4 mb-4"
                  >
                    <DollarSign className="w-3 h-3 text-brand-neon" />
                    <span className="italic">💡 AI Tip: Most luxury wedding bookings range between $300–$800.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Venue & Location Detection */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Venue Name or Address"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                />
                <AnimatePresence>
                  {showVenueSuggestions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 w-full mt-2 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20"
                    >
                      <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs text-brand-neon flex items-center gap-2 font-medium">
                        <Map className="w-3 h-3" /> AI Location Suggestions
                      </div>
                      <ul className="max-h-48 overflow-y-auto">
                        {[
                          `${venue} Grand Hotel, Beverly Hills, CA`,
                          `The ${venue} Plaza, Downtown LA`,
                          `${venue} Country Club, Calabasas, CA`
                        ].map((v, i) => (
                          <li key={i}>
                            <button 
                              type="button"
                              onClick={() => selectVenue(v)}
                              className="w-full text-left px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
                            >
                              {v}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors appearance-none cursor-pointer text-sm"
                >
                  <option value="" disabled hidden>Select Service</option>
                  <option value="glam" className="bg-[#111] text-white">The Glam Booth</option>
                  <option value="360" className="bg-[#111] text-white">The 360 Experience</option>
                  <option value="roamer" className="bg-[#111] text-white">The Digital Roamer</option>
                  <option value="magazine" className="bg-[#111] text-white">Magazine Photo Booth Box</option>
                </select>

                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors appearance-none cursor-pointer text-sm"
                >
                  <option value="" disabled hidden>Duration</option>
                  <option value="2 hours" className="bg-[#111] text-white">2 Hours</option>
                  <option value="3-4 hours" className="bg-[#111] text-white">3-4 Hours</option>
                  <option value="5+ hours" className="bg-[#111] text-white">5+ Hours</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm [color-scheme:dark]"
                />
                <div className="relative">
                  <input 
                    type="time" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className={`w-full bg-transparent border-b border-white/20 px-0 py-3 placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors text-sm [color-scheme:dark] ${appliedAI ? "text-brand-neon font-bold" : "text-white"}`}
                  />
                  <AnimatePresence>
                    {eventType === "wedding" && !time && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -top-5 left-0 text-[10px] text-brand-neon flex items-center gap-1"
                      >
                        <Clock className="w-3 h-3" /> Evening typical (6 PM - 10 PM)
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  rows={3}
                  placeholder="Additional Details or Theme"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={`w-full bg-transparent border-b border-white/20 px-0 py-3 placeholder-white/40 focus:outline-none focus:border-brand-neon transition-colors resize-none text-sm ${appliedAI ? "text-brand-neon" : "text-white"}`}
                ></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="inline-flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group">
                  Submit Request <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
