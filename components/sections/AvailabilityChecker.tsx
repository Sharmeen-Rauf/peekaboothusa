"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function AvailabilityChecker() {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl"
        >
          {/* Subtle background glow inside the card */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-96 h-96 bg-brand-neon/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-between">
            
            {/* Left Side: Text */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight text-white leading-[1.1]">
                Check<br className="hidden lg:block"/> Availability
              </h3>
              <p className="text-white/50 text-sm md:text-base max-w-[280px]">
                Dates fill up quickly. Secure your premium experience today.
              </p>
            </div>
            
            {/* Right Side: Inputs */}
            <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-4 items-center justify-end">
              
              {/* Date Input */}
              <div className="relative w-full sm:w-auto flex-1 max-w-[260px]">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
                  <Calendar size={18} />
                </div>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 hover:border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white/80 placeholder-white/40 focus:outline-none focus:border-brand-neon/50 focus:ring-1 focus:ring-brand-neon/50 transition-all [color-scheme:dark] text-sm font-medium"
                />
              </div>
              
              {/* Location Input */}
              <div className="relative w-full sm:w-auto flex-1 max-w-[260px]">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="Event City"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 hover:border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white/80 placeholder-white/40 focus:outline-none focus:border-brand-neon/50 focus:ring-1 focus:ring-brand-neon/50 transition-all text-sm font-medium"
                />
              </div>
              
              {/* Button */}
              <button className="w-full sm:w-auto bg-brand-neon text-white font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center whitespace-nowrap hover:bg-brand-glow transition-all shadow-[0_0_30px_rgba(247,54,168,0.4)] hover:shadow-[0_0_40px_rgba(247,54,168,0.6)]">
                Check Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
