"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James",
    role: "Wedding Client",
    text: "The Glam Booth was an absolute hit at our wedding! The black and white filter made everyone look flawless, and our guests haven't stopped talking about it.",
  },
  {
    name: "Michael Chen",
    role: "Corporate Event Planner",
    text: "Peekabooth elevated our annual gala. The 360 booth was the centerpiece of the night, and their team was professional, prompt, and energetic.",
  },
  {
    name: "Jessica Alba",
    role: "Birthday Party",
    text: "I hired them for my 30th birthday and it was the best decision. The custom props matched my theme perfectly and the attendant was so much fun!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-surface">
      {/* Decorative blurred background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-neon/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Client Love" 
          subtitle="Don't just take our word for it. Here's what our clients have to say."
        />

        <div className="flex overflow-x-auto pb-12 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="min-w-[85vw] md:min-w-[400px] snap-center"
            >
              <GlassCard className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-brand-neon text-brand-neon" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-white/90 italic mb-8 leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-neon to-brand-glow flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
