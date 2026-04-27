"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is the difference between an open air photo booth and an enclosed photo booth?",
    a: "An open air photo booth has no walls or enclosure — it's a freestanding camera and lighting setup with a backdrop. This allows larger groups to participate and creates a more social, visible experience at your event.",
  },
  {
    q: "How many people can use the open air photo booth at once?",
    a: "Our open air setup comfortably accommodates groups of 2 to 15+ people, depending on the backdrop width and space available at your venue.",
  },
  {
    q: "Can I customise the backdrop and prints?",
    a: "Absolutely! You can choose from our range of backdrops or provide your own. Print templates are fully customised with your event name, date, and branding.",
  },
  {
    q: "How long is the rental period?",
    a: "Our standard rental packages include 3 to 5 hours of active booth operation. Extended hours are available — contact us for custom packages.",
  },
  {
    q: "Do you offer open air photo booth rental near me?",
    a: "Yes! We serve Karachi, Lahore, Islamabad, and Multan. Check availability for your city by filling out our quote form.",
  },
];

export default function OpenAirPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen ? "border-brand-neon/40 bg-brand-neon/5" : "border-white/10 bg-[#0a0a0a] hover:border-white/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
            >
              <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? "text-brand-neon" : "text-white group-hover:text-brand-neon"}`}>
                {faq.q}
              </span>
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all ${isOpen ? "bg-brand-neon text-white shadow-[0_0_10px_rgba(247,54,168,0.4)]" : "bg-white/10 text-white/60 group-hover:bg-white/20"}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
