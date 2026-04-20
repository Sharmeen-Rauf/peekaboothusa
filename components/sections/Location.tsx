"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Serving the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-glow">
              Greater Los Angeles
            </span> Area
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-8"
          >
            Based in LA, we bring our premium photo booth experiences to weddings, corporate events, and parties across Southern California, including Orange County, San Diego, and Santa Barbara.
          </motion.p>
          
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {["Los Angeles County", "Orange County", "Ventura County", "Destination Events Available"].map((area, i) => (
              <li key={i} className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-neon" />
                <span className="text-white/80 font-medium">{area}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden glass-panel aspect-square md:aspect-auto md:h-[500px]"
          >
            {/* Minimal abstract map representation */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTIgMkgwdjJWMkgyem0wIDRIMHYyVjZIMnptMCA0SDB2MlYxMEgyem00LTRIMHYyVjZINnptMCA0SDB2MlYxMEg2em0wIDRIMHYyVjE0SDZ6IiBmaWxsPSIjRkFGQUY5IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')"}}></div>
            
            {/* Glowing marker for LA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-6 h-6 bg-brand-neon rounded-full relative z-10 shadow-[0_0_20px_rgba(247,54,168,1)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-neon/30 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-neon/10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 glass px-4 py-2 rounded-lg text-sm font-semibold">
              Los Angeles HQ
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
