"use client";

import { motion } from "framer-motion";
import { Eye, Mail, Phone, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal Details: Name, phone number, email address.",
        "Booking Information: Event details (date, location, type of event).",
        "Payment Information: Transaction details (processed securely via third-party providers).",
        "Technical Data: IP address, browser type, device information, cookies.",
        "We only collect information that is necessary to provide our services effectively."
      ]
    },
    {
      title: "2. How We Collect Information",
      content: [
        "Fill out a contact or booking form.",
        "Communicate with us via WhatsApp, phone, or email.",
        "Make a booking or payment.",
        "Browse our website."
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "Process bookings and manage events.",
        "Communicate with you regarding your event.",
        "Improve our services and customer experience.",
        "Send updates, promotions, or offers (if you opt-in).",
        "Comply with legal and regulatory requirements."
      ]
    },
    {
      title: "4. Sharing of Information",
      content: [
        "We do not sell or rent your personal data.",
        "We may share your information with payment service providers and event partners if required.",
        "Under Pakistani regulations, information may be disclosed if required by courts or government authorities."
      ]
    },
    {
      title: "5. Data Protection & Security",
      content: [
        "We take reasonable measures to protect your data, including secure storage and limited access.",
        "However, no online system is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "6. Cookies & Tracking Technologies",
      content: [
        "Our website may use cookies to improve performance, analyze behavior, and enhance experience.",
        "You can disable cookies through your browser settings."
      ]
    },
    {
      title: "7. Data Retention",
      content: "We retain your information only as long as necessary to fulfill service obligations, comply with legal requirements, or resolve disputes."
    },
    {
      title: "8. Your Rights",
      content: [
        "Request access to your personal data.",
        "Request correction or deletion of your data.",
        "Opt-out of marketing communications."
      ]
    },
    {
      title: "9. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content."
    },
    {
      title: "10. Children’s Privacy",
      content: "Our services are not directed toward individuals under the age of 13. We do not knowingly collect personal data from children."
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 mb-6">
            <Lock className="w-8 h-8 text-brand-neon" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy <span className="text-brand-neon">Policy</span>
          </h1>
          <p className="text-white/50">Last updated: April 23, 2026 • PeekABooth PK</p>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/70 leading-relaxed bg-white/5 border border-white/10 p-6 rounded-2xl">
              PeekABooth PK (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, store, and protect your data when you use our website or book our services.
            </p>
          </div>

          <div className="grid gap-8">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-brand-neon/30 transition-colors group"
              >
                <h2 className="text-xl font-bold mb-4 group-hover:text-brand-neon transition-colors">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-neon mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/60 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-brand-neon/5 border border-brand-neon/20 p-8 rounded-3xl text-center">
            <h2 className="text-2xl font-bold mb-6">Privacy Concerns?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              If you have any questions about your data or wish to exercise your rights, please contact us.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:info@peekaboothpk.com" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/10">
                <Mail className="w-4 h-4 text-brand-neon" />
                <span className="text-sm font-medium">info@peekaboothpk.com</span>
              </a>
              <a href="https://wa.me/923260760786" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/10">
                <Phone className="w-4 h-4 text-brand-neon" />
                <span className="text-sm font-medium">+92 326 0760786</span>
              </a>
            </div>
          </div>

          {/* Agreement Footer */}
          <div className="text-center pt-12 text-white/40 text-sm">
            <p>By using our website or booking our services, you consent to this Privacy Policy.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
