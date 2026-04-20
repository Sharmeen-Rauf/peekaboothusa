"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles, Camera, Share2, Smile, Star, Palette, Zap } from "lucide-react";

const features = [
  { text: "Modern Booth Options", icon: Camera },
  { text: "High-Quality Prints", icon: Star },
  { text: "Instant Digital Sharing", icon: Share2 },
  { text: "Fun Props", icon: Smile },
  { text: "Unbeatable Service", icon: Sparkles },
  { text: "Custom Branding", icon: Palette },
  { text: "Seamless Setup", icon: Zap },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-surface">
      {/* Abstract Glowing Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-neon/10 via-brand-neon/5 to-transparent blur-2xl opacity-50"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-brand-neon/30 text-brand-glow text-xs uppercase tracking-widest font-bold mb-8 shadow-[0_0_20px_rgba(247,54,168,0.2)]"
          >
            <Sparkles size={14} className="text-brand-neon" />
            <span>The Premium Choice</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
          >
            Why Choose Us For Your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-glow to-brand-neon">
              Photo Booth Experience
            </span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Glass panel behind text for emphasis */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl"></div>
            <p className="relative text-lg md:text-xl text-white/70 leading-relaxed mb-12 p-6 md:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              We go beyond just taking pictures — we deliver unforgettable moments. With modern booth options, high-quality prints, instant digital sharing, fun props, and unbeatable customer service, we make every event stand out. Our competitive pricing, custom branding, and seamless setup make us the top choice for photo booth rentals. 
              <br/><br/>
              <span className="text-white font-semibold text-xl">Rent a Photo Booth Now!</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <Button size="lg" variant="secondary" className="px-12 py-6 text-xl tracking-wide font-bold group">
              View Pricing
              <Zap className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Floating Features Flex Wrap */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto relative z-20"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                scale: { duration: 0.2 }
              }}
              className="glass px-6 py-4 rounded-full flex items-center gap-3 border border-white/10 shadow-lg cursor-default bg-black/40 backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-full bg-brand-neon/20 flex items-center justify-center border border-brand-neon/30">
                <feature.icon size={18} className="text-brand-neon drop-shadow-[0_0_8px_rgba(247,54,168,0.8)]" />
              </div>
              <span className="font-semibold text-white/90 tracking-wide">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
