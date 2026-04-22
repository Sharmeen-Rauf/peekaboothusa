"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import { CheckCircle2, ArrowRight } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */

type Plan = {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

type BoothPricing = {
  id: string;
  name: string;
  plans: Plan[];
};

const pricingData: BoothPricing[] = [
  {
    id: "open-air",
    name: "Open Air Booth",
    plans: [
      {
        name: "2 Hour Rental",
        price: "400",
        features: [
          "Unlimited Pictures",
          "Instant 2x6 Prints",
          "Personalized Pictures",
          "Party Themed Props",
          "Standard Lighting Kit",
          "Standard Backdrop",
          "Friendly Attendant"
        ]
      },
      {
        name: "3 Hour Rental",
        price: "550",
        isPopular: true,
        features: [
          "Unlimited Pictures",
          "Instant 2x6 Prints",
          "Personalized Pictures",
          "Party Themed Props",
          "Standard Lighting Kit",
          "Standard Backdrop",
          "Friendly Attendant"
        ]
      },
      {
        name: "4 Hour Rental",
        price: "700",
        features: [
          "Unlimited Pictures",
          "Instant 2x6 Prints",
          "Personalized Pictures",
          "Party Themed Props",
          "Standard Lighting Kit",
          "Standard Backdrop",
          "Friendly Attendant"
        ]
      }
    ]
  },
  {
    id: "360-booth",
    name: "360 Photo Booth",
    plans: [
      {
        name: "2 Hour Rental",
        price: "500",
        features: [
          "Unlimited Videos",
          "Unlimited Spins",
          "Instant Sharing",
          "Custom Video Overlay",
          "Fun Party Props",
          "Standard Lighting Kit",
          "Standard Backdrop",
          "Friendly Attendant"
        ]
      },
      {
        name: "3 Hour Rental",
        price: "700",
        isPopular: true,
        features: [
          "Unlimited Videos",
          "Unlimited Spins",
          "Instant Sharing",
          "Custom Video Overlay",
          "Fun Party Props",
          "Standard Lighting Kit",
          "Standard Backdrop",
          "Friendly Attendant"
        ]
      },
      {
        name: "4 Hour Rental",
        price: "900",
        features: [
          "Unlimited Videos",
          "Unlimited Spins",
          "Instant Sharing",
          "Custom Video Overlay",
          "Fun Party Props",
          "Standard Lighting Kit",
          "Standard Backdrop",
          "Friendly Attendant"
        ]
      }
    ]
  },
  {
    id: "vogue-magazine",
    name: "Vogue Magazine Photo Booth",
    plans: [
      {
        name: "4 Hour Rental",
        price: "1200",
        features: [
          "Custom Cover Design",
          "Full-Size Frame",
          "LED Lighting",
          "Custom Headline",
          "Setup & Breakdown",
          "Spacious Interior",
          "Selfie-Ready",
          "High-Quality Build"
        ]
      },
      {
        name: "5 Hour Rental",
        price: "1500",
        features: [
          "Custom Cover Design",
          "Full-Size Frame",
          "LED Lighting",
          "Custom Headline",
          "Setup & Breakdown",
          "Spacious Interior",
          "Selfie-Ready",
          "High-Quality Build"
        ]
      },
      {
        name: "6 Hour Rental",
        price: "1800",
        isPopular: true,
        features: [
          "Custom Cover Design",
          "Full-Size Frame",
          "LED Lighting",
          "Custom Headline",
          "Setup & Breakdown",
          "Spacious Interior",
          "Selfie-Ready",
          "High-Quality Build"
        ]
      },
      {
        name: "8 Hour Rental",
        price: "2400",
        features: [
          "Custom Cover Design",
          "Full-Size Frame",
          "LED Lighting",
          "Custom Headline",
          "Setup & Breakdown",
          "Spacious Interior",
          "Selfie-Ready",
          "High-Quality Build"
        ]
      }
    ]
  },
  {
    id: "digital-booth",
    name: "Digital Photo Booth",
    plans: [
      {
        name: "2 Hour Rental",
        price: "300",
        features: [
          "Unlimited Pictures",
          "Instant Sharing",
          "Personalized Pictures",
          "Party Themed Props",
          "Standard Backdrop",
          "Standard Lighting Kit",
          "Friendly Attendant"
        ]
      },
      {
        name: "3 Hour Rental",
        price: "400",
        isPopular: true,
        features: [
          "Unlimited Pictures",
          "Instant Sharing",
          "Personalized Pictures",
          "Party Themed Props",
          "Standard Backdrop",
          "Standard Lighting Kit",
          "Friendly Attendant"
        ]
      },
      {
        name: "4 Hour Rental",
        price: "500",
        features: [
          "Unlimited Pictures",
          "Instant Sharing",
          "Personalized Pictures",
          "Party Themed Props",
          "Standard Backdrop",
          "Standard Lighting Kit",
          "Friendly Attendant"
        ]
      }
    ]
  }
];

/* ─── MAIN COMPONENT ──────────────────────────────────────────────────────── */

export default function PricingClient() {
  const [activeTab, setActiveTab] = useState(pricingData[0].id);

  const activeData = pricingData.find(d => d.id === activeTab);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-brand-neon/30 pt-32">
      
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden pb-12 pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-brand-neon font-bold tracking-widest text-sm md:text-base mb-4"
          >
            Pricing
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            The Perfect plans for Your Needs
          </motion.h1>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="relative z-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
          >
            {pricingData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeTab === tab.id 
                    ? "bg-black/80 border-brand-neon text-brand-neon shadow-[0_0_20px_rgba(247,54,168,0.3)]" 
                    : "bg-transparent border-white/20 text-white/70 hover:border-brand-neon/50 hover:text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`grid grid-cols-1 md:grid-cols-2 ${activeData?.plans.length === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3"} gap-6 max-w-7xl mx-auto items-stretch`}
            >
              {activeData?.plans.map((plan, i) => (
                <div 
                  key={plan.name}
                  className={`relative flex flex-col bg-[#0a0a0a] rounded-3xl overflow-hidden transition-all duration-300 border ${plan.isPopular ? "border-brand-neon shadow-[0_0_30px_rgba(247,54,168,0.15)]" : "border-white/5 hover:border-white/20"}`}
                >
                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-neon text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 md:p-10 flex flex-col flex-grow ${plan.isPopular ? "pt-12" : ""}`}>
                    <h3 className={`text-xl font-bold mb-4 ${plan.isPopular ? "text-brand-neon" : "text-white"}`}>
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-end gap-1 mb-8">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                        ${plan.price}
                      </span>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-8" />

                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-white/90 mb-4">Includes:</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0" strokeWidth={1.5} />
                            <span className="text-white/80 text-sm leading-tight pt-0.5">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href="#contact" 
                      className="inline-flex items-center justify-center w-full gap-2 py-4 rounded-full font-bold text-sm tracking-widest transition-all bg-transparent border border-white/20 text-white hover:bg-white/5 mt-auto group"
                    >
                      Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── CONTACT ── */}
      <Contact />

    </div>
  );
}
