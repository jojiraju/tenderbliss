"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Premium easing
const easePremium = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".stagger-element", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#faf9f8] pt-32 md:pt-40 pb-20 relative overflow-hidden">
      {/* Background Animated Gradient Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#6d519d]/15 to-transparent blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, -90, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#51C4D3]/15 to-transparent blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16 stagger-element">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: easePremium }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/80 backdrop-blur-md border border-[#51C4D3]/20 text-[#51C4D3] font-bold text-sm mb-6 shadow-sm cursor-default"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#51C4D3] animate-pulse"></span>
            We're here for you
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d519d] to-[#51C4D3]">Connect</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Have questions about our postnatal care? Want to schedule a visit? Reach out and our dedicated team will be delighted to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side: Contact Info Cards */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 stagger-element">
            <motion.a 
              whileHover={{ scale: 1.02, y: -5 }}
              href="tel:+919946223233"
              className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 flex items-start gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#51C4D3]/10 flex items-center justify-center group-hover:bg-[#51C4D3] transition-colors duration-300">
                <Phone className="w-7 h-7 text-[#51C4D3] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-500 font-light mb-3">Available 24/7 for urgent inquiries.</p>
                <p className="text-2xl font-black text-[#51C4D3]">+91 99462 23233</p>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02, y: -5 }}
              href="https://wa.me/919946223233"
              target="_blank"
              rel="noreferrer"
              className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 flex items-start gap-6 group cursor-pointer hover:border-green-300 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-[#25D366] transition-colors duration-300">
                <svg className="w-7 h-7 text-[#25D366] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Us</h3>
                <p className="text-gray-500 font-light mb-3">Chat with us instantly.</p>
                <p className="text-2xl font-black text-[#25D366]">+91 99462 23233</p>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02, y: -5 }}
              href="mailto:tenderblissgroup@gmail.com"
              className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 flex items-start gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#6d519d]/10 flex items-center justify-center group-hover:bg-[#6d519d] transition-colors duration-300">
                <Mail className="w-7 h-7 text-[#6d519d] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-500 font-light mb-3">Drop us a line anytime.</p>
                <p className="text-xl font-bold text-[#6d519d]">tenderblissgroup@gmail.com</p>
              </div>
            </motion.a>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 flex items-start gap-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                <MapPin className="w-7 h-7 text-gray-900 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-500 font-light mb-3">Our luxurious postnatal sanctuary.</p>
                <p className="text-lg font-bold text-gray-900 leading-tight">Near Nayara Petrol Station,<br/>Tanah Mampad, Nilambur,<br/>Kerala 676542</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Trendy Glass Form */}
          <div className="w-full lg:w-7/12 stagger-element relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6d519d] to-[#51C4D3] rounded-[3rem] transform rotate-2 opacity-10 blur-xl"></div>
            <form className="bg-white/90 backdrop-blur-2xl border border-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Send a Message</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 pl-4">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#faf9f8] border-none px-6 py-5 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-[#51C4D3] outline-none transition-all placeholder:text-gray-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 pl-4">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#faf9f8] border-none px-6 py-5 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-[#51C4D3] outline-none transition-all placeholder:text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label className="text-sm font-bold text-gray-600 pl-4">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-[#faf9f8] border-none px-6 py-5 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-[#51C4D3] outline-none transition-all placeholder:text-gray-400" />
              </div>
              
              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-gray-600 pl-4">Your Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-[#faf9f8] border-none px-6 py-5 rounded-2xl text-gray-900 font-medium focus:ring-2 focus:ring-[#51C4D3] outline-none transition-all resize-none placeholder:text-gray-400"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-5 rounded-2xl bg-[#6d519d] text-white font-black text-lg shadow-xl shadow-[#6d519d]/30 hover:bg-[#5b4382] hover:shadow-[#6d519d]/40 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
