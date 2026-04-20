"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing orb behind logo */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-brand-neon/30 rounded-full blur-[60px] md:blur-[80px]"
            ></motion.div>
            
            <Image 
              src="/PeekABooth-LOGO-2025-600x212.png" 
              alt="Peekabooth USA Loading"
              width={300}
              height={106}
              className="relative z-10 w-48 md:w-64 drop-shadow-[0_0_15px_rgba(247,54,168,0.5)]"
              priority
            />
          </motion.div>
          
          {/* Animated loading bar */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-brand-neon mt-10 rounded-full shadow-[0_0_10px_rgba(247,54,168,0.8)]"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
