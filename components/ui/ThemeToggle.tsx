"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("peekabooth_theme");
    if (saved === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("peekabooth_theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("peekabooth_theme", "light");
      setIsLight(true);
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="relative p-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 dark:bg-white/5 hover:border-brand-neon/50 transition-all flex items-center justify-center overflow-hidden w-10 h-10 group"
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <motion.div
          animate={{ y: isLight ? -20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex flex-col items-center gap-5"
        >
          <Sun className="w-5 h-5 text-brand-neon" />
          <Moon className="w-5 h-5 text-brand-neon" />
        </motion.div>
      </div>
      
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-brand-neon/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.button>
  );
}
