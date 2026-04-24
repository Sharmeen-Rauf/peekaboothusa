"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { prefix: "", value: 500, suffix: "+", label: "Events Hosted" },
  { prefix: "", value: 50, suffix: "k+", label: "Pictures Taken" },
  { prefix: "", value: 4, suffix: "", label: "Cities Covered" },
  { prefix: "", value: 5, suffix: "-Star", label: "Rated Service" },
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  // Add comma formatting for thousands
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return <span ref={ref}>{formattedCount}</span>;
}

export default function Stats() {
  return (
    <section className="relative z-20 pb-16 pt-12 md:-mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden py-10 px-8 shadow-2xl border border-white/5"
        >
          {/* Bottom Neon Glow Line */}
          <div className="absolute bottom-0 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-brand-neon to-transparent shadow-[0_-5px_30px_rgba(247,54,168,0.6)]"></div>
          
          {/* Top Subtle Highlight */}
          <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  {stat.prefix}<Counter from={0} to={stat.value} />{stat.suffix}
                </div>
                <div className="text-foreground/70 font-medium text-xs md:text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
