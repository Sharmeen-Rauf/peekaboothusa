"use client";

import { motion } from "framer-motion";
import { Eye, Mail, Phone, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal Information You Provide: Name, phone number, and email address (submitted via contact forms or quote requests).",
        "Event details including date, type, and location.",
        "Payment information (processed securely through our payment partners).",
        "Information Collected Automatically: Device type, browser, and IP address.",
        "Pages visited and time spent on our website.",
        "Referral source (how you found our website)."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "Process and manage your photo booth rental booking.",
        "Respond to your enquiries and provide customer support.",
        "Send you booking confirmations and event reminders.",
        "Improve our website and services based on user behaviour.",
        "Send marketing communications (only if you have opted in)."
      ]
    },
    {
      title: "3. Sharing Your Information",
      content: [
        "We do not sell, rent, or trade your personal information to third parties.",
        "We may share information with service providers who assist in delivering our services (e.g., payment processors).",
        "Legal authorities if required by law.",
        "All third parties are required to handle your information securely and only use it for the specified purpose."
      ]
    },
    {
      title: "4. Photo & Video Data",
      content: "Photos and videos captured at events using our photo booths are shared with event clients and their guests as agreed during the booking process. We may use select event photos for marketing purposes (website, social media) unless you explicitly request otherwise in writing."
    },
    {
      title: "5. Data Security",
      content: "We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, disclosure, or misuse. However, no internet transmission is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "6. Cookies",
      content: "Our website uses cookies to enhance user experience and analyse site traffic. You can control cookie settings through your browser. By continuing to use our website, you consent to our use of cookies."
    },
    {
      title: "7. Your Rights",
      content: [
        "Request access to the personal information we hold about you.",
        "Request correction of inaccurate information.",
        "Request deletion of your personal data (subject to legal obligations).",
        "Opt out of marketing communications at any time."
      ]
    },
    {
      title: "8. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date. We encourage you to review this policy periodically."
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
            Privacy <span className="text-brand-neon">Policy</span>
          </h1>
          <p className="text-white/50">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} ΓÇó Peek-A-Booth PK</p>
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
              Welcome to Peek-A-Booth PK. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (peekaboothpk.com) or use our services.
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
