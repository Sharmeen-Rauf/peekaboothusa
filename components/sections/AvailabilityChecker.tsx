"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AvailabilityChecker() {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Subtle background glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl font-bold mb-2">Check<br/>Availability</h3>
              <p className="text-white/60 text-sm">Dates fill up quickly. Secure your premium experience today.</p>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
                  <Calendar size={18} />
                </div>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon/50 focus:ring-1 focus:ring-brand-neon/50 transition-all [color-scheme:dark]"
                />
              </div>
              
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="Event City/Zip"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-neon/50 focus:ring-1 focus:ring-brand-neon/50 transition-all"
                />
              </div>
              
              <Button variant="secondary" className="px-8 whitespace-nowrap">
                Check Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
