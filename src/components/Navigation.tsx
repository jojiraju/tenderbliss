"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const MotionLink = motion(Link);
const easePremium = [0.16, 1, 0.3, 1] as const;

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Only track active sections if we are on the homepage
      if (pathname === "/") {
        const sections = ["home", "services", "careers", "about"];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 200 && rect.bottom >= 200;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "100vh",
      transition: {
        duration: 0.4, 
        ease: easePremium,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3, 
        ease: easePremium
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: easePremium }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.4, ease: easePremium }
    }
  };

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        animate={{ 
          height: scrolled ? "80px" : "100px",
          backgroundColor: scrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
          borderBottom: scrolled || isMobileMenuOpen ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(0,0,0,0)",
          boxShadow: scrolled || isMobileMenuOpen ? "0 10px 40px -10px rgba(0,0,0,0.08)" : "0 0px 0px 0px rgba(0,0,0,0)"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-[100] backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl transition-colors"
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between relative z-50">
          <Logo />
          
          <div className="hidden lg:flex gap-10 font-bold text-gray-500 text-sm tracking-wide">
            <Link href="/#home" className={`${activeSection === 'home' && pathname === "/" ? 'text-[#6d519d]' : 'hover:text-[#6d519d]'} transition-colors relative group`}>
              Home
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#6d519d] ${activeSection === 'home' && pathname === "/" ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left transition-transform`}></span>
            </Link>
            <Link href="/services" className={`${pathname === "/services" ? 'text-[#6d519d]' : 'hover:text-[#6d519d]'} transition-colors relative group`}>
              Services
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#6d519d] ${pathname === "/services" ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left transition-transform`}></span>
            </Link>
            <Link href="/moments" className={`${pathname === "/moments" ? 'text-[#6d519d]' : 'hover:text-[#6d519d]'} transition-colors relative group`}>
              Moments
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#6d519d] ${pathname === "/moments" ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left transition-transform`}></span>
            </Link>
            <Link href="/packages" className={`${pathname === "/packages" ? 'text-[#6d519d]' : 'hover:text-[#6d519d]'} transition-colors relative group`}>
              Packages
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#6d519d] ${pathname === "/packages" ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left transition-transform`}></span>
            </Link>
            <Link href="/career" className={`${pathname.startsWith("/career") ? 'text-[#51C4D3]' : 'hover:text-[#51C4D3]'} transition-colors relative group`}>
              Careers
              <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#51C4D3] ${pathname.startsWith("/career") ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left transition-transform`}></span>
            </Link>
          </div>
          
          <MotionLink 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-gray-900 text-white font-bold hover:bg-[#6d519d] transition-colors hidden lg:block shadow-lg shadow-gray-900/20 cursor-pointer text-sm tracking-wide"
          >
            Contact Us
          </MotionLink>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-gray-900 p-2 -mr-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div 
              animate={{ rotate: isMobileMenuOpen ? 90 : 0, scale: isMobileMenuOpen ? 1.1 : 1 }} 
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8 text-[#6d519d]" /> : <Menu className="w-8 h-8" />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full z-[90] bg-[#faf9f8]/95 backdrop-blur-3xl lg:hidden overflow-hidden flex flex-col pt-28 px-8"
          >
            {/* Background Orbs inside Menu */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-[#6d519d]/20 to-transparent rounded-full blur-3xl pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#51C4D3]/20 to-transparent rounded-full blur-3xl pointer-events-none"
            />

            <div className="flex flex-col gap-5 text-3xl md:text-4xl font-black text-gray-400 pt-4 tracking-tight relative z-10">
              <motion.div variants={itemVariants}>
                <Link href="/#home" onClick={closeMenu} className={`group flex items-center justify-between border-b border-gray-200/50 pb-4 ${pathname === "/" ? 'text-gray-900' : ''} hover:text-gray-900 transition-colors w-full`}>
                   <span>Home</span>
                   <span className={`text-sm font-bold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${pathname === "/" ? 'opacity-100 translate-x-0 text-[#6d519d]' : 'text-[#51C4D3]'}`}>01</span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/services" onClick={closeMenu} className={`group flex items-center justify-between border-b border-gray-200/50 pb-4 ${pathname === "/services" ? 'text-gray-900' : ''} hover:text-gray-900 transition-colors w-full`}>
                   <span>Services</span>
                   <span className={`text-sm font-bold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${pathname === "/services" ? 'opacity-100 translate-x-0 text-[#6d519d]' : 'text-[#51C4D3]'}`}>02</span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/moments" onClick={closeMenu} className={`group flex items-center justify-between border-b border-gray-200/50 pb-4 ${pathname === "/moments" ? 'text-gray-900' : ''} hover:text-gray-900 transition-colors w-full`}>
                   <span>Moments</span>
                   <span className={`text-sm font-bold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${pathname === "/moments" ? 'opacity-100 translate-x-0 text-[#6d519d]' : 'text-[#51C4D3]'}`}>03</span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/packages" onClick={closeMenu} className={`group flex items-center justify-between border-b border-gray-200/50 pb-4 ${pathname === "/packages" ? 'text-gray-900' : ''} hover:text-gray-900 transition-colors w-full`}>
                   <span>Packages</span>
                   <span className={`text-sm font-bold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${pathname === "/packages" ? 'opacity-100 translate-x-0 text-[#6d519d]' : 'text-[#51C4D3]'}`}>04</span>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/career" onClick={closeMenu} className={`group flex items-center justify-between pb-4 ${pathname.startsWith("/career") ? 'text-gray-900' : ''} hover:text-gray-900 transition-colors w-full`}>
                  <span>Careers</span>
                  <span className={`text-sm font-bold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${pathname.startsWith("/career") ? 'opacity-100 translate-x-0 text-[#6d519d]' : 'text-[#51C4D3]'}`}>05</span>
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={buttonVariants} className="mt-auto pb-12 w-full relative z-10">
              <Link href="/contact" onClick={closeMenu} className="group w-full p-2 pl-8 rounded-full bg-gray-900 text-white font-bold text-xl shadow-2xl hover:shadow-3xl active:scale-95 transition-all flex items-center justify-between">
                <span>Contact Us</span>
                <div className="w-14 h-14 rounded-full bg-[#6d519d] flex items-center justify-center group-hover:bg-[#51C4D3] transition-colors duration-500 shadow-inner">
                  <svg className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
