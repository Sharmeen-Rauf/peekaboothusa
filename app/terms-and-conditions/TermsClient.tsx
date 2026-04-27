"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function TermsClient() {
  const sections = [
    {
      title: "1. Booking & Confirmation",
      content: [
        "A booking is confirmed only upon receipt of a signed booking form and the required deposit.",
        "The deposit amount is specified in your custom quote and is non-refundable unless Peek-A-Booth PK cancels the booking.",
        "The remaining balance is due on or before the event date, as specified in your booking confirmation.",
        "Date changes are subject to availability and must be requested at least 14 days before the original event date."
      ]
    },
    {
      title: "2. Cancellation Policy",
      content: [
        "Cancellations made more than 14 days before the event: Full deposit is forfeited; no additional charge.",
        "Cancellations made within 7–14 days of the event: 50% of the total booking value is charged.",
        "Cancellations made within 7 days of the event: 100% of the total booking value is charged.",
        "In the event that Peek-A-Booth PK is unable to fulfil a booking due to unforeseen circumstances, a full refund of all payments made will be provided."
      ]
    },
    {
      title: "3. Client Responsibilities",
      content: [
        "The client is responsible for ensuring adequate space and power supply at the venue for the photo booth setup.",
        "The client must ensure a safe environment for our team and equipment throughout the event.",
        "Any damage to equipment caused by guests or third parties during the event is the client's financial responsibility.",
        "The client must provide accurate event details (date, time, venue address) at the time of booking."
      ]
    },
    {
      title: "4. Photo & Video Usage",
      content: [
        "By booking our services, the client grants Peek-A-Booth PK permission to use event photos and videos for marketing purposes (website, social media, promotional material) unless a written opt-out is provided before the event date.",
        "All photos and videos remain the intellectual property of Peek-A-Booth PK unless otherwise agreed in writing.",
        "Clients are granted a non-exclusive licence to use event media for personal purposes."
      ]
    },
    {
      title: "5. Liability",
      content: [
        "Peek-A-Booth PK is not liable for any indirect, incidental, or consequential loss arising from the use of our services.",
        "Our maximum liability in any claim is limited to the total amount paid for the specific booking.",
        "We are not responsible for delays or failures caused by circumstances beyond our reasonable control (force majeure)."
      ]
    },
    {
      title: "6. Service Delivery",
      content: [
        "Peek-A-Booth PK will make every effort to deliver services as agreed. In the unlikely event of equipment failure, we will implement backup solutions to minimise disruption.",
        "Our team will arrive at the venue at the agreed setup time. Any delays on the client's side that reduce setup time are not compensated by extended operation."
      ]
    },
    {
      title: "7. Governing Law",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Pakistan."
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
            <ShieldCheck className="w-8 h-8 text-brand-neon" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
            Terms & <span className="text-brand-neon">Conditions</span>
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
              These Terms and Conditions govern the use of Peek-A-Booth PK&apos;s photo booth rental services and website (peekaboothpk.com). By booking our services or using our website, you agree to these terms in full. Please read them carefully before proceeding with a booking.
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
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              For any questions or concerns regarding these Terms, please reach out to our team.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@peekaboothpk.com" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/10">
                <Mail className="w-4 h-4 text-brand-neon" />
                <span className="text-sm font-medium">hello@peekaboothpk.com</span>
              </a>
              <a href="https://wa.me/923260760786" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all border border-white/10">
                <Phone className="w-4 h-4 text-brand-neon" />
                <span className="text-sm font-medium">+92 326 0760786</span>
              </a>
            </div>
          </div>

          {/* Agreement Footer */}
          <div className="text-center pt-12 text-white/40 text-sm">
            <p>By booking or using our services, you confirm that you have read, understood, and agreed to these Terms & Conditions.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
