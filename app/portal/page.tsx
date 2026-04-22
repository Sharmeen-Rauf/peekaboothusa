"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function PortalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/portal/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-neon to-transparent" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(247,54,168,0.12) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-neon/60"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-neon/10 border border-brand-neon/30 mb-4 shadow-[0_0_30px_rgba(247,54,168,0.2)]">
            <span className="text-3xl font-black text-brand-neon">P</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Client Portal</h1>
          <p className="text-white/50 text-sm">Access your bookings, invoices & gallery</p>
        </div>

        {/* Card */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-white/50 block mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-neon focus:bg-white/8 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-white/50 block mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pr-12 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-neon focus:bg-white/8 transition-colors"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <label className="flex items-center gap-2 text-white/50 cursor-pointer">
                <input type="checkbox" className="accent-brand-neon" /> Remember me
              </label>
              <button type="button" className="text-brand-neon hover:underline">Forgot password?</button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-neon hover:bg-brand-glow text-white py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(247,54,168,0.4)] flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-white/40 text-xs">Don&apos;t have a portal account? Contact your event coordinator.</p>
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          For demo, enter any email and password. <a href="/admin" className="text-brand-neon hover:underline">Admin Login →</a>
        </p>
      </motion.div>
    </div>
  );
}
