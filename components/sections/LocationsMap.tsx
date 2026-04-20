"use client";

import { motion } from "framer-motion";

export default function LocationsMap() {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden border-t border-white/5">
      {/* Background Map Image */}
      <div 
        className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/world-map.png')", backgroundSize: 'contain', backgroundPosition: 'center' }}
      ></div>
      
      {/* Dark overlay gradients for fading into the black background seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[rgba(0,0,0,0.4)] to-black pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight max-w-4xl leading-tight drop-shadow-2xl">
            Premium Photo Booth Rentals <br className="hidden md:block" /> Across the United States
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-white/90 font-medium text-[11px] md:text-sm leading-loose md:leading-relaxed tracking-wide drop-shadow-md">
              Photo Booth Rental For Wedding <span className="text-brand-neon mx-1">|</span> Corporate Event <span className="text-brand-neon mx-1">|</span> Birthday <span className="text-brand-neon mx-1">|</span> Baby Shower <span className="text-brand-neon mx-1">|</span> Bridal Shower <span className="text-brand-neon mx-1">|</span> Graduation <span className="text-brand-neon mx-1">|</span> Bar Mitzvah <span className="text-brand-neon mx-1">|</span> Bat Mitzvah <span className="text-brand-neon mx-1">|</span> Quince <span className="text-brand-neon mx-1">|</span> &amp; Much More
            </p>
            
            <p className="text-white/50 text-[10px] md:text-xs leading-loose md:leading-relaxed max-w-3xl mx-auto font-medium">
              Photo Booth Rental Service Atlanta GA | Baltimore MD | Chicago IL | Columbus OH | Dallas TX | Delaware DE | Detroit MI (Coming Soon) | Houston TX | Indianapolis IN | Los Angeles CA | Milwaukee WI | New Jersey NJ | New York NY | Philadelphia PA | Phoenix AZ | Rockford IL | San Antonio TX | San Diego CA | Seattle WA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
