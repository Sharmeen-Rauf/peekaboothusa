"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

const initialTestimonials = [
  {
    id: 1,
    name: "Olivia James",
    avatar: "https://i.pravatar.cc/150?u=olivia",
    text: "The Glam Booth was an absolute hit at our wedding! The black and white filter made everyone look flawless, and our guests haven't stopped talking about it.",
  },
  {
    id: 2,
    name: "Daniel Lee",
    avatar: "https://i.pravatar.cc/150?u=daniel",
    text: "Peekabooth elevated our annual corporate gala. The 360 booth was the centerpiece of the night, and their team was professional and energetic.",
  },
  {
    id: 3,
    name: "Emily Tran",
    avatar: "https://i.pravatar.cc/150?u=emily",
    text: "I hired them for my 30th birthday and it was the best decision. The custom props matched my theme perfectly and the attendant was so much fun!",
  },
];

export default function Testimonials() {
  const [items, setItems] = useState(initialTestimonials);

  const next = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const first = newItems.shift();
      if (first) newItems.push(first);
      return newItems;
    });
  };

  const prev = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const last = newItems.pop();
      if (last) newItems.unshift(last);
      return newItems;
    });
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 relative bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-brand-neon font-bold tracking-wide mb-4 text-sm md:text-base">Our Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Our success, echoed <br /> by <span className="text-white/50">our Clients</span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold text-white">5.00</span>
            <span className="text-white/50 text-sm">57 reviews</span>
            <div className="flex gap-1 text-brand-neon">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto h-[450px] mb-12">
          
          {/* Left Arrow */}
          <button 
            onClick={prev} 
            className="absolute left-0 md:left-4 z-30 w-12 h-12 rounded-full border border-brand-neon flex items-center justify-center text-brand-neon hover:bg-brand-neon/10 transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Right Arrow */}
          <button 
            onClick={next} 
            className="absolute right-0 md:right-4 z-30 w-12 h-12 rounded-full border border-brand-neon flex items-center justify-center text-brand-neon hover:bg-brand-neon/10 transition-colors hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence>
              {items.map((item, index) => {
                const isCenter = index === 1;
                const isLeft = index === 0;
                const isRight = index === 2;

                let xOffset = 0;
                if (isLeft) xOffset = -300;
                if (isRight) xOffset = 300;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={false}
                    animate={{
                      x: xOffset,
                      scale: isCenter ? 1 : 0.85,
                      opacity: isCenter ? 1 : 0.4,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute w-full max-w-[340px] md:max-w-[400px] p-8 md:p-10 rounded-2xl flex flex-col items-center text-center ${
                      isCenter 
                        ? "bg-white/5 border border-white/20 backdrop-blur-xl shadow-2xl" 
                        : "bg-[#111] border border-white/5"
                    }`}
                  >
                    <Image src={item.avatar} alt={item.name} width={64} height={64} className="rounded-full mb-4 object-cover border border-white/20" />
                    <h4 className="text-white font-bold mb-4">{item.name}</h4>
                    <p className="text-sm text-white/70 mb-8 leading-relaxed h-[100px] overflow-hidden">
                      {item.text}
                    </p>
                    <div className="flex gap-1 text-brand-neon mt-auto">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-white/10 px-6 py-3 rounded-full text-white text-sm font-medium transition-colors group">
            See more testimonials <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
