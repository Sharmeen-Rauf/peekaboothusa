"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Service Overview",
      content: "PeekABooth PK provides professional photo booth rental services for weddings, corporate events, birthdays, and other occasions. We aim to deliver a high-quality and enjoyable experience through our equipment, staff, and digital content."
    },
    {
      title: "2. Booking & Payments",
      content: [
        "A non-refundable booking advance is required to confirm your event date.",
        "The remaining balance must be paid at least 3–5 days before the event (unless otherwise agreed).",
        "Payments can be made via: Bank transfer (Pakistan), EasyPaisa / JazzCash, or Cash (if approved)."
      ]
    },
    {
      title: "3. Cancellation Policy",
      content: [
        "All cancellations must be submitted in writing (WhatsApp/email).",
        "The booking advance is non-refundable.",
        "In certain cases, event rescheduling may be allowed based on availability.",
        "Any credit issued must be used within 12 months."
      ]
    },
    {
      title: "4. Refund Policy",
      content: [
        "All bookings are final and non-refundable.",
        "Once our team has arrived at the venue or setup has started, no refunds will be issued.",
        "In rare cases of service disruption, PeekABooth PK may offer partial compensation or future service credit (at our discretion)."
      ]
    },
    {
      title: "5. Event Requirements",
      content: [
        "The client is responsible for providing adequate space (Minimum 5×5 ft for standard, up to 10×10 ft for premium).",
        "Ensuring electricity access (within 6–8 feet).",
        "Arranging venue permissions and providing a safe, accessible setup area.",
        "Failure to meet these requirements may affect service quality."
      ]
    },
    {
      title: "6. Guest Conduct & Equipment Safety",
      content: [
        "Guests must treat all equipment and staff with respect.",
        "Any damage caused due to negligence or misconduct will be charged to the client.",
        "Children must be supervised at all times.",
        "We reserve the right to stop services without refund in case of unsafe behavior."
      ]
    },
    {
      title: "7. Technical Issues",
      content: "While rare, technical interruptions may occur. Our team will make every effort to resolve issues promptly. Temporary disruptions do not qualify for refunds if resolved during the event."
    },
    {
      title: "8. Delivery of Photos & Videos",
      content: "Digital content (photos, videos, galleries) will be delivered within 3–10 working days. Delivery timelines may vary depending on event size. Delays do not entitle the client to refunds."
    },
    {
      title: "9. Use of Content",
      content: [
        "PeekABooth PK retains the right to use event photos/videos for marketing, social media, and portfolio.",
        "Clients may request content privacy in writing before the event.",
        "Guests are free to use content for personal use only. Commercial use requires prior written approval."
      ]
    },
    {
      title: "10. Privacy Policy",
      content: "We collect only necessary information for booking and service delivery. Client data is never sold or shared with third parties without consent."
    },
    {
      title: "11. Liability Disclaimer",
      content: [
        "PeekABooth PK is not responsible for venue restrictions, power failures, or delays caused by event organizers.",
        "Our liability is limited to the total booking amount paid."
      ]
    },
    {
      title: "12. Changes to Terms",
      content: "PeekABooth PK reserves the right to update or modify these Terms & Conditions at any time. Continued use of our services implies acceptance of updated terms."
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Terms & <span className="text-brand-neon">Conditions</span>
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
              By accessing our website, booking services, or using any offerings provided by PeekABooth PK, 
              you agree to the following Terms & Conditions. These terms apply to all clients, event hosts, 
              and users engaging with our services in Pakistan.
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
            <p>By booking or using our services, you confirm that you have read, understood, and agreed to these Terms & Conditions.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
