"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, CheckCircle2, Download, Image as ImageIcon, Clock, ArrowRight, LogOut, Star } from "lucide-react";

export default function ClientDashboard() {
  const daysUntil = 12;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-neon to-transparent" />

      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-neon flex items-center justify-center font-black text-white">P</div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight">Client Portal</h1>
            <p className="text-[10px] text-white/40 uppercase tracking-wider">Peekabooth</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="font-bold text-sm">Ayesha Malik</p>
            <p className="text-[10px] text-white/40">BKG-001 • Wedding</p>
          </div>
          <Link href="/portal" className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5 text-sm">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">Welcome back, Ayesha! 👋</h2>
          <p className="text-white/50">Your big day is coming up. Here&apos;s everything you need in one place.</p>
        </motion.div>

        {/* Event Countdown Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="relative rounded-[2.5rem] overflow-hidden border border-brand-neon/30 shadow-[0_0_60px_rgba(247,54,168,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0a0a0a] to-black" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-neon/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-brand-neon text-xs font-bold tracking-widest uppercase mb-3">Your Event</p>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Ayesha & Bilal Wedding</h3>
              <div className="flex flex-wrap gap-4 text-sm text-white/70 mt-3">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-neon" /> Nov 03, 2024</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-neon" /> 7:00 PM Start</span>
                <span className="text-brand-neon font-bold">Mirror Booth • 4 Hours</span>
              </div>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl px-8 py-6 min-w-[140px]">
              <div className="text-5xl font-black text-brand-neon mb-1">{daysUntil}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">Days Away</div>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="relative z-10 px-8 md:px-12 pb-8">
            <div className="flex gap-0 overflow-x-auto">
              {[
                { label: "Inquiry Received", done: true },
                { label: "Deposit Paid", done: true },
                { label: "Design Approved", done: true },
                { label: "Event Day", done: false, current: true },
                { label: "Gallery Ready", done: false },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${step.done ? "bg-brand-neon border-brand-neon" : step.current ? "border-brand-neon bg-brand-neon/20" : "border-white/20 bg-transparent"}`}>
                      {step.done ? <CheckCircle2 className="w-4 h-4 text-white" /> : <span className={`w-2 h-2 rounded-full ${step.current ? "bg-brand-neon" : "bg-white/20"}`} />}
                    </div>
                    <p className={`text-[10px] mt-2 whitespace-nowrap font-bold ${step.done ? "text-brand-neon" : step.current ? "text-white" : "text-white/30"}`}>{step.label}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={`h-[2px] w-10 md:w-16 mb-5 mx-1 transition-colors ${step.done ? "bg-brand-neon" : "bg-white/10"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Invoice Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-bold mb-1">Invoice</h3>
            <p className="text-white/50 text-xs mb-4">PKR 65,000 total</p>
            <div className="space-y-2 text-sm mb-5">
              <div className="flex justify-between"><span className="text-white/60">Deposit (Paid)</span><span className="text-emerald-400 font-bold">PKR 10,000</span></div>
              <div className="flex justify-between"><span className="text-white/60">Balance Due</span><span className="text-yellow-400 font-bold">PKR 55,000</span></div>
            </div>
            <button className="flex items-center gap-2 text-xs text-brand-neon hover:underline">
              <Download className="w-3.5 h-3.5" /> Download Invoice PDF
            </button>
          </motion.div>

          {/* Booth Preview Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-neon/10 flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-brand-neon" />
            </div>
            <h3 className="font-bold mb-1">Your Package</h3>
            <p className="text-white/50 text-xs mb-4">Mirror Booth — Premium</p>
            <ul className="space-y-1.5 text-xs text-white/60">
              {["Booth Branding & Design", "Unlimited Printouts", "Custom Frame Design", "4 Hours Included"].map(f => (
                <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-neon" />{f}</li>
              ))}
            </ul>
          </motion.div>

          {/* Gallery Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <ImageIcon className="w-5 h-5 text-white/50" />
            </div>
            <h3 className="font-bold mb-1">Photo Gallery</h3>
            <p className="text-white/50 text-xs mb-4">Available after your event</p>
            <div className="grid grid-cols-3 gap-1.5 mb-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="w-3 h-3 text-white/20" />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 text-center">Gallery unlocks on Nov 04</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center">
          <p className="text-white/40 text-sm mb-3">Have questions? We&apos;re here to help.</p>
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-brand-neon/40 text-white px-6 py-3 rounded-full text-sm font-bold transition-all">
            Contact Your Coordinator <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
