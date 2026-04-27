"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationsMap() {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden border-t border-border">
      {/* Background Map Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen pointer-events-none bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/world-map.png')", backgroundSize: 'contain', backgroundPosition: 'center' }}
      ></div>
      
      {/* Dark overlay gradients for fading into the background seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 tracking-tight max-w-4xl leading-tight drop-shadow-2xl">
            Premium Photo Booth Rentals <br className="hidden md:block" /> Across Pakistan
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-foreground/90 font-medium text-[11px] md:text-sm leading-loose md:leading-relaxed tracking-wide drop-shadow-md">
              Photo Booth Rental For Wedding <span className="text-brand-neon mx-1">|</span> Corporate Event <span className="text-brand-neon mx-1">|</span> Birthday <span className="text-brand-neon mx-1">|</span> Mehndi <span className="text-brand-neon mx-1">|</span> Walima <span className="text-brand-neon mx-1">|</span> Graduation <span className="text-brand-neon mx-1">|</span> Brand Activation <span className="text-brand-neon mx-1">|</span> University Events <span className="text-brand-neon mx-1">|</span> &amp; Much More
            </p>
            
            <p className="text-foreground/50 text-xs md:text-sm leading-loose md:leading-relaxed max-w-3xl mx-auto font-medium">
              <Link href="/karachi-photo-booth-rental" className="hover:text-brand-neon transition-colors">Photo Booth Rental Karachi</Link> <span className="text-brand-neon mx-1">|</span> 
              <Link href="/lahore-photo-booth-rental" className="hover:text-brand-neon transition-colors">Photo Booth Rental Lahore</Link> <span className="text-brand-neon mx-1">|</span> 
              <Link href="/islamabad-photo-booth-rental" className="hover:text-brand-neon transition-colors">Photo Booth Rental Islamabad</Link> <span className="text-brand-neon mx-1">|</span> 
              Photo Booth Rental Multan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
