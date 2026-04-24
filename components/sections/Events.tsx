"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const allEvents = [
  { 
    id: "wedding",
    title: "Weddings & Shaadi", 
    desc: "From Mehndi to Walima, our photo booths are the most popular addition to Pakistani weddings.", 
    alt: "Pakistani Wedding Photo Booth Rental",
    image: "/booth-setup-8.jpg" 
  },
  { 
    id: "birthday",
    title: "Birthday Parties", 
    desc: "Add a splash of fun to any birthday. From kids' parties to glamorous adult celebrations.", 
    alt: "Birthday Party Photo Booth Pakistan",
    image: "/booth-setup-12.jpg" 
  },
  { 
    id: "corporate",
    title: "Corporate & Brand", 
    desc: "Elevate your next brand activation, product launch, or office party with branded experiences.", 
    alt: "Corporate Photo Booth Rental Karachi Lahore",
    image: "/booth-setup-7.jpg" 
  },
  { 
    id: "parties",
    title: "Parties & Gatherings", 
    desc: "Eid, farewell parties, university events, house parties — instant entertainment for all gatherings.", 
    alt: "Party Photo Booth Rental Pakistan",
    image: "/booth-setup-10.jpg" 
  },
];

export default function Events() {
  const [activeItem, setActiveItem] = useState(allEvents[0].id); // Default to Wedding

  return (
    <section className="py-20 md:py-28 relative bg-background overflow-hidden border-y border-border">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="The Perfect Photo Booth for Every Pakistani Event" 
          subtitle="From intimate family gatherings to large-scale corporate events, Peek-A-Booth PK brings professional experiences to every celebration."
        />

        {/* Desktop Flex Accordion */}
        <div className="hidden lg:flex w-full h-[600px] gap-3">
          {allEvents.map((event) => {
            const isActive = activeItem === event.id;
            return (
              <motion.div
                key={event.id}
                onMouseEnter={() => setActiveItem(event.id)}
                layout
                initial={false}
                animate={{
                  flex: isActive ? 6 : 1,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full rounded-3xl overflow-hidden cursor-pointer group border border-border ${isActive ? 'shadow-2xl shadow-brand-neon/20' : ''}`}
              >
                {/* Background Image */}
                <Image 
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes={isActive ? "60vw" : "15vw"}
                  className={`object-cover transition-transform duration-[1.5s] ease-out ${isActive ? 'scale-105' : 'scale-100 grayscale-[50%]'}`}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/90 via-black/20 to-transparent' : 'bg-black/80 group-hover:bg-black/60'}`}></div>

                {/* Vertical Text (When inactive) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.h3 
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1, y: isActive ? 20 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/80 text-xl font-bold tracking-[0.3em] whitespace-nowrap -rotate-90 origin-center absolute uppercase"
                  >
                    {event.title}
                  </motion.h3>
                </div>

                {/* Expanded Content (When active) */}
                <motion.div 
                  initial={false}
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 30
                  }}
                  transition={{ duration: 0.5, delay: isActive ? 0.2 : 0, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 w-full p-10 xl:p-14 pointer-events-none"
                >
                  <div className="flex flex-col h-full justify-end max-w-xl">
                    <h3 className="text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                      {event.title}
                    </h3>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed drop-shadow-md">
                      {event.desc}
                    </p>
                    <button className="pointer-events-auto inline-flex items-center justify-center gap-2 bg-brand-neon hover:bg-white text-white hover:text-brand-neon px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(247,54,168,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] w-fit group/btn">
                      Book Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Stack */}
        <div className="flex flex-col lg:hidden gap-4 md:gap-6 mt-8">
          {allEvents.map((event) => (
            <div 
              key={event.id}
              className="relative h-[280px] md:h-[350px] w-full rounded-2xl md:rounded-3xl overflow-hidden group border border-white/10"
            >
              <Image 
                src={event.image}
                alt={event.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 md:mb-3 tracking-tight drop-shadow-lg">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 mb-5 line-clamp-2 md:line-clamp-none max-w-lg">
                  {event.desc}
                </p>
                <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-brand-neon border border-white/20 hover:border-brand-neon text-white px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all">
                  Book Event <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
