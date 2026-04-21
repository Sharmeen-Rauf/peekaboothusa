"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How Much Deposit is Needed?",
    a: "We require a 30% deposit at the time of booking to secure your event date. The remaining balance is due 7 days before your event. We accept all major credit cards and PayPal.",
  },
  {
    q: "How Much Space is Needed?",
    a: "Our open air photo booth typically requires a minimum of 10ft x 10ft of space with at least 8ft of ceiling height. We recommend a flat, hard surface for the best setup.",
  },
  {
    q: "Does Peek-A-Booth Have Insurance?",
    a: "Yes! Peek-A-Booth is fully insured with general liability coverage. We can provide a Certificate of Insurance (COI) upon request, which many venues require.",
  },
  {
    q: "Can I Book Online?",
    a: "Absolutely! You can submit a quote request directly through our website's contact form, or call us at 1-800-709-8579. We'll confirm your date and send you a booking agreement within 24 hours.",
  },
  {
    q: "How Do I Pick My Template?",
    a: "After booking, our design team will reach out to discuss your event theme, colors, and any text you'd like on your photo strips. We'll send you a proof for approval before your event date.",
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
