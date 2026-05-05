"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Show button if page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            className="relative w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 text-[#6d519d] flex items-center justify-center shadow-2xl shadow-[#6d519d]/20 cursor-pointer group"
            aria-label="Scroll to top"
          >
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
              {/* Background Track */}
              <circle 
                cx="50" cy="50" r="46" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                className="text-gray-200/50"
              />
              {/* Animated Progress Indicator */}
              <motion.circle 
                cx="50" cy="50" r="46" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6d519d" />
                  <stop offset="100%" stopColor="#51C4D3" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing background on hover */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#6d519d] to-[#51C4D3] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            <ArrowUp className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
