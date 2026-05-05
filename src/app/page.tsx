"use client";

import { motion, useScroll, useTransform, AnimatePresence, useInView, animate } from "framer-motion";
import { Leaf, Heart, Baby, Utensils, ChefHat, User, Briefcase, GraduationCap, ArrowRight, Play, Mail, Menu, X, CheckCircle2, BedDouble, Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MotionLink = motion(Link);

// Brand Colors from Logo
const BRAND = {
  purple: "#6d519d",
  purpleLight: "#8c6ec3",
  cyan: "#51C4D3",
  cyanLight: "#7ce0ed"
};

// Premium custom easing for all animations
const easePremium = [0.16, 1, 0.3, 1] as any;

// Reusable component for character/word staggered reveal
export const RevealText = ({ children, className }: { children: string, className?: string }) => {
  const words = children.split(" ");
  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {}
      }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.span 
            variants={{
              hidden: { y: "120%", rotate: 5, opacity: 0 },
              visible: { y: 0, rotate: 0, opacity: 1, transition: { duration: 1, ease: easePremium } }
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf9f8] pt-32 md:pt-40 pb-20">
      {/* Background Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#6d519d]/10 to-transparent blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#51C4D3]/15 to-transparent blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content (Parallax Down) */}
          <div ref={textRef} className="lg:w-3/5 text-center lg:text-left origin-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easePremium }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: easePremium }}
                className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border border-[#6d519d]/20 text-[#6d519d] font-bold text-sm mb-8 shadow-sm hover:scale-105 transition-transform cursor-default"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#51C4D3] animate-pulse"></span>
                Premium Postnatal Care
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-gray-900 mb-8 tracking-tight leading-[1.05]">
                <RevealText className="justify-center lg:justify-start">Complete</RevealText>
                <span className="relative inline-block mt-2 md:mt-1">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6d519d] to-[#8c6ec3]">Postnatal Care</span>
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: easePremium }}
                    className="absolute bottom-2 md:bottom-3 left-0 w-full h-3 md:h-5 bg-[#51C4D3]/30 -z-10 origin-left rounded-full"
                  />
                </span>
                <br />
                <RevealText className="justify-center lg:justify-start">Solution</RevealText>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: easePremium }}
                className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Experience the perfect blend of traditional Ayurvedic healing and modern wellness in a luxurious, peaceful environment for you and your baby.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: easePremium }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 stagger-element">
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    href="#services"
                    className="px-10 py-3 md:px-12 md:py-3.5 rounded-full bg-gray-900 text-white font-bold text-lg shadow-2xl shadow-gray-900/20 hover:bg-black transition-all flex items-center gap-3 group cursor-pointer relative overflow-hidden"
                  >
                    <span className="relative z-10">Discover Services</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6d519d] to-[#51C4D3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.a>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsVideoOpen(true)}
                    className="px-8 py-3 md:px-10 md:py-3.5 rounded-full bg-white/80 backdrop-blur-xl border border-gray-100 text-gray-900 font-bold text-lg shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="relative">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-[#6d519d] to-[#51C4D3] flex items-center justify-center text-white shadow-lg shadow-[#6d519d]/30 group-hover:scale-110 transition-transform relative z-10">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#51C4D3] animate-ping opacity-25"></div>
                    </div>
                    Watch Video
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side floating elements (Parallax Up) */}
          <div ref={cardsRef} className="lg:w-2/5 w-full relative h-[500px] md:h-[600px] hidden sm:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: easePremium }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Main glowing center */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#6d519d] to-[#51C4D3] opacity-20 blur-3xl animate-pulse"></div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: [-15, 15, -15] }}
              transition={{ 
                opacity: { duration: 1, delay: 0.5 },
                x: { duration: 1, delay: 0.5, ease: easePremium },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 } 
              }}
              className="absolute top-10 right-4 md:right-16 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 w-64 z-20 group hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#51C4D3] to-[#3aa2b1] rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-[#51C4D3]/30 group-hover:rotate-6 transition-transform">
                <Baby className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Newborn Care</h3>
              <p className="text-gray-500 text-sm leading-relaxed">24/7 expert guidance and support for your little one.</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: [15, -15, 15] }}
              transition={{ 
                opacity: { duration: 1, delay: 0.7 },
                x: { duration: 1, delay: 0.7, ease: easePremium },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.7 } 
              }}
              className="absolute bottom-10 left-4 md:left-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 w-64 z-10 group hover:scale-105 transition-transform"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#6d519d] to-[#5b4382] rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-[#6d519d]/30 group-hover:-rotate-6 transition-transform">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Ayurvedic Healing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Traditional therapies for fast and healthy recovery.</p>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ 
                opacity: { duration: 1, delay: 0.9 },
                scale: { duration: 1, delay: 0.9, type: "spring" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.9 },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.9 }
              }}
              className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 bg-gradient-to-r from-[#6d519d] to-[#51C4D3] p-1 rounded-full shadow-2xl z-30 hover:scale-110 cursor-pointer"
            >
              <div className="bg-white px-5 py-3 rounded-full flex items-center gap-3">
                <div className="flex -space-x-3">
                  <motion.div whileHover={{ y: -5 }} className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center"><User className="w-5 h-5 text-purple-500"/></motion.div>
                  <motion.div whileHover={{ y: -5 }} className="w-10 h-10 rounded-full bg-cyan-100 border-2 border-white flex items-center justify-center"><User className="w-5 h-5 text-cyan-500"/></motion.div>
                  <motion.div whileHover={{ y: -5 }} className="w-10 h-10 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-xs font-bold text-white">5k+</motion.div>
                </div>
                <div className="text-sm font-bold text-gray-900 leading-tight">Happy<br/>Mothers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isMounted && (
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-xl" onClick={() => setIsVideoOpen(false)}></div>
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-[#6d519d]/20 border border-white/10 z-10"
              >
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#6d519d] backdrop-blur-md flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                {/* YouTube Embed - Mobile compatible (Safari safe) */}
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allow="fullscreen; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full object-cover rounded-3xl"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
};

// Reusable Counter Animation Component
const Counter = ({ from = 0, to, suffix = "", prefix = "", duration = 2.5, className = "" }: { from?: number, to: number, suffix?: string, prefix?: string, duration?: number, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    
    const obj = { value: from };
    
    gsap.to(obj, {
      value: to,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%", // Starts animating when it comes 85% into the viewport
        once: true
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = prefix + Math.round(obj.value) + suffix;
        }
      }
    });
  }, { scope: ref });

  return <span ref={ref} className={className}>{prefix}{from}{suffix}</span>;
};

// Stats Section instead of Marquee
const Stats = () => {
  return (
    <section className="py-20 bg-white relative z-20 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-100">
          
          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <h4 className="text-5xl md:text-6xl font-black text-[#6d519d] mb-2 group-hover:scale-110 transition-transform duration-300">
              <Counter to={10} suffix="+" />
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">Years Experience</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <h4 className="text-5xl md:text-6xl font-black text-[#51C4D3] mb-2 group-hover:scale-110 transition-transform duration-300">
              <Counter to={5} suffix="k+" />
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">Happy Mothers</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <h4 className="text-5xl md:text-6xl font-black text-[#6d519d] mb-2 group-hover:scale-110 transition-transform duration-300">
              <Counter to={24} suffix="/7" />
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">Expert Care</p>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <h4 className="text-5xl md:text-6xl font-black text-[#51C4D3] mb-2 group-hover:scale-110 transition-transform duration-300">
              <Counter to={100} suffix="%" />
            </h4>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">Natural Healing</p>
          </div>

        </div>
      </div>
    </section>
  );
};

const MedicalGuidance = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="lg:w-1/2 relative"
          >
            <div className="w-full aspect-[4/5] md:aspect-square rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br from-[#6d519d]/10 to-[#51C4D3]/10 overflow-hidden relative border border-gray-100 shadow-2xl group">
              <img 
                src="/Dr-Aparna-Nath.jpeg" 
                alt="Dr. Aparna Nath" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6d519d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 bg-white/90 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border border-white/50 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-0">Dr. Aparna Nath</h3>
                <p className="text-[#6d519d] font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2">Lead Medical Consultant</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">Expert guidance ensuring the highest medical standards for you and your baby.</p>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:w-1/2">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-[#51C4D3] font-bold mb-4"
            >
              Medical Excellence
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">Expert Medical Guidance</h2>
            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              At TenderBliss, we combine traditional Ayurvedic wisdom with modern medical expertise. Under the guidance of Dr. Aparna Nath, our team ensures that every mother and baby receives personalized, safe, and compassionate care.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Comprehensive health monitoring for mothers",
                "Newborn health assessment and tracking",
                "Evidence-based postnatal protocols",
                "24/7 medical support team"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#51C4D3]/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#51C4D3]" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-10 py-4 rounded-full bg-gray-900 text-white font-bold text-lg shadow-xl shadow-gray-900/20 hover:bg-[#6d519d] transition-all inline-block"
            >
              Book a Consultation
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // 1. Stunning Staggered Entrance
    tl.fromTo(".feature-card",
      { y: 150, opacity: 0, rotateY: 15, scale: 0.85 },
      { 
        y: 0, opacity: 1, rotateY: 0, scale: 1, 
        stagger: 0.15, 
        duration: 1.2, 
        ease: "back.out(1.4)" 
      }
    )
    // 2. Continuous Floating Effect after entrance
    .to(".feature-card", {
      y: -15,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 0.4,
        from: "random"
      }
    });

    // 3. Continuous slow pulsing/rotating of background numbers
    gsap.to(".feature-number", {
      scale: 1.1,
      rotate: 5,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: containerRef });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#faf9f8] relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#6d519d]/10 to-transparent blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-[#51C4D3]/10 to-transparent blur-[100px]"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[50px]"></div>
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-24">
          <RevealText className="text-4xl md:text-5xl font-black text-gray-900 mb-6 justify-center">
            Premium Postnatal Care
          </RevealText>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 1, ease: easePremium }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
          >
            A holistic, luxurious sanctuary designed for your seamless recovery and your baby's perfect start.
          </motion.p>
        </div>
        
        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[300px]">
          
          {/* Newborn Care - Large Left (span 2 rows) */}
          <Link href="/services/newborn-care" className="feature-card md:row-span-2 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#6d519d] to-[#4b3573] text-white shadow-2xl shadow-[#6d519d]/20 relative overflow-hidden group block cursor-pointer">
            <div className="feature-number absolute top-6 right-8 text-white/20 font-black text-6xl md:text-8xl font-serif z-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">01</div>
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000 z-0"></div>
            
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-10 backdrop-blur-md border border-white/20 group-hover:rotate-12 transition-transform shadow-lg relative z-10">
              <Baby className="w-10 h-10" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight relative z-10">Newborn<br/>Care</h3>
            <p className="text-white/80 leading-relaxed text-lg max-w-sm font-light relative z-10">Expert 24/7 guidance on infant care, soothing, and sleep routines to help you and your baby thrive in your first days together.</p>
            
            <div className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#6d519d] transition-all duration-300 z-10">
              <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </Link>

          {/* Maternal Recovery - Top Middle */}
          <Link href="/services/maternal-recovery" className="feature-card p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#51C4D3]/50 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#51C4D3]/10 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between cursor-pointer">
            <div className="feature-number absolute top-4 right-6 text-[#51C4D3]/20 font-black text-6xl md:text-7xl font-serif z-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">02</div>
            <div className="flex justify-between items-start relative z-10">
              <div className="w-16 h-16 bg-[#faf9f8] border border-gray-100 rounded-2xl flex items-center justify-center text-[#51C4D3] group-hover:bg-[#51C4D3] group-hover:text-white transition-colors duration-500">
                <Heart className="w-8 h-8" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Maternal Recovery</h3>
              <p className="text-gray-500 leading-relaxed font-light">Personalized physical and emotional support ensuring the fastest, healthiest recovery.</p>
            </div>
          </Link>

          {/* Ayurvedic Therapy - Right Tall (span 2 rows) */}
          <Link href="/services/ayurvedic-therapy" className="feature-card md:row-span-2 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-tr from-[#51C4D3] to-[#3aa2b1] text-white shadow-2xl shadow-[#51C4D3]/20 relative overflow-hidden group block cursor-pointer">
            <div className="feature-number absolute top-6 right-8 text-white/30 font-black text-6xl md:text-8xl font-serif z-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">03</div>
            <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000 z-0"></div>
            
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center text-white mb-10 backdrop-blur-md border border-white/20 group-hover:-rotate-12 transition-transform shadow-lg relative z-10">
              <Leaf className="w-10 h-10" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight relative z-10">Ayurvedic<br/>Therapy</h3>
            <p className="text-white/90 leading-relaxed text-lg relative z-10 font-light">Traditional healing massages and therapeutic treatments exclusively designed for holistic postpartum wellness.</p>
            
            <div className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-[#51C4D3] transition-all duration-300 z-10">
              <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </Link>

          {/* Nutritious Diet - Bottom Middle */}
          <Link href="/services/nutritious-diet" className="feature-card p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#6d519d]/50 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#6d519d]/10 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between cursor-pointer">
            <div className="feature-number absolute top-4 right-6 text-[#6d519d]/20 font-black text-6xl md:text-7xl font-serif z-0 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">04</div>
            <div className="flex justify-between items-start relative z-10">
              <div className="w-16 h-16 bg-[#faf9f8] border border-gray-100 rounded-2xl flex items-center justify-center text-[#6d519d] group-hover:bg-[#6d519d] group-hover:text-white transition-colors duration-500">
                <Utensils className="w-8 h-8" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Nutritious Diet</h3>
              <p className="text-gray-500 leading-relaxed font-light">Specially curated, balanced Ayurvedic meals emphasizing vitality and healthy lactation.</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

const CareerCTA = () => {
  return (
    <section className="py-24 bg-[#faf9f8]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="rounded-[2.5rem] border border-gray-200 bg-white p-10 md:p-14 shadow-2xl shadow-gray-200/30">
          <div className="grid gap-10 lg:grid-cols-[1.7fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#51C4D3] font-bold mb-4">Career opportunities</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Build your career with TenderBliss.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Explore open roles in guest services, Ayurvedic therapy, kitchen support, and premium care operations. Apply through our dedicated careers page for full role details and a faster hiring process.
              </p>
            </div>
            <div className="flex items-center justify-start lg:justify-end">
              <Link href="/career" className="inline-flex items-center justify-center rounded-full bg-[#51C4D3] px-8 py-4 text-base font-bold text-black shadow-lg shadow-[#51C4D3]/20 hover:bg-[#6d519d] hover:text-white transition-colors">
                View open roles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="font-sans selection:bg-[#51C4D3]/30 selection:text-[#6d519d]">
      <Hero />
      <Stats />
      <MedicalGuidance />
      <Features />
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealText className="text-4xl md:text-6xl font-serif text-gray-900 mb-12 justify-center">Luxurious Sanctuaries</RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
            {[
              { name: "Bliss Cozy Stay", type: "Essential Comfort" },
              { name: "Bliss Comfort Suite", type: "Signature Wellness", popular: true },
              { name: "Bliss Divine Care", type: "Family Wellness" },
              { name: "Bliss Royale Suite", type: "Ultimate Luxury" }
            ].map((pkg, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-6 md:p-8 rounded-[2.5rem] border border-gray-100 bg-[#faf9f8] hover:bg-white hover:shadow-2xl transition-all duration-500 relative"
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 py-1 px-3 rounded-full bg-gradient-to-r from-[#51C4D3] to-[#3aa2b1] text-white shadow-lg shadow-[#51C4D3]/20">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Popular</span>
                    </div>
                  </div>
                )}
                <div className="w-12 h-12 rounded-2xl bg-[#6d519d]/10 flex items-center justify-center text-[#6d519d] mb-6 mx-auto">
                  <BedDouble className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{pkg.type}</p>
                <Link href="/packages" className="text-[#51C4D3] font-bold text-sm uppercase tracking-widest hover:text-[#6d519d] transition-colors">Details →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CareerCTA />
    </main>
  );
}
