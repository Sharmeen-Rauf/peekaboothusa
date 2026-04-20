"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles, Zap, Camera, Users, Share2, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Camera,
    title: "Studio-Quality Lighting",
    description: "Professional DSLR cameras and beauty-dish lighting ensure every shot looks like a magazine cover.",
  },
  {
    icon: Sparkles,
    title: "Premium Props & Backdrops",
    description: "Curated collections of high-end props and custom-designed tension fabric backdrops.",
  },
  {
    icon: Zap,
    title: "Instant Digital Sharing",
    description: "AirDrop, SMS, and Email sharing right from the booth. Guests get their photos instantly.",
  },
  {
    icon: Award,
    title: "Sleek, Modern Design",
    description: "Our booths are designed to complement luxury event decor, not detract from it.",
  },
  {
    icon: Users,
    title: "Engaging Attendants",
    description: "Professional, sharply dressed attendants who hype up your guests and ensure smooth operation.",
  },
  {
    icon: Share2,
    title: "Live Gallery & Analytics",
    description: "A custom branded live gallery for your event, plus post-event engagement analytics for corporate clients.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Not Your Average Photo Booth"
          subtitle="We blend cutting-edge technology with high-end aesthetics to deliver an unmatched experience."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <GlassCard glowOnHover className="h-full group">
                <div className="w-12 h-12 rounded-full bg-brand-neon/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-neon/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-brand-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
