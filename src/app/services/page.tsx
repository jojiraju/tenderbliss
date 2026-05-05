"use client";

import { motion } from "framer-motion";
import { Baby, Heart, Leaf, Utensils, Sparkles, UserCheck, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    title: "General Packages",
    description: "Traditional Ayurvedic recovery essentials for every new mother.",
    icon: Heart,
    services: ["Abyangam", "Mukhabhyangam", "Abdominal Bandage", "Podi Kizhi"],
    color: "bg-[#6d519d]"
  },
  {
    title: "Special Packages",
    description: "Targeted treatments for specific wellness needs and relaxation.",
    icon: Sparkles,
    services: ["Padhabyangam (Foot Massage)", "Special Herbal Baths", "Stress Relief Therapy"],
    color: "bg-[#51C4D3]"
  },
  {
    title: "Our Specialities",
    description: "Expert medical and holistic guidance for complex journeys.",
    icon: UserCheck,
    services: ["Fertility Management", "Pre-conceptive Care", "Lactation Consulting"],
    color: "bg-[#6d519d]"
  },
  {
    title: "Exclusive Packages",
    description: "Comprehensive wellness solutions for long-term health.",
    icon: ShieldCheck,
    services: ["Women Wellness", "Menopausal Care", "Post-Surgical Recovery"],
    color: "bg-[#51C4D3]"
  }
];

const easePremium = [0.16, 1, 0.3, 1] as any;

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#faf9f8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[#6d519d] font-bold mb-4"
          >
            Healing & Wellness
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">
            Our Care Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A comprehensive suite of traditional and modern care services designed for the well-being of mother and child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: easePremium }}
              className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl shadow-gray-200/50 border border-gray-100 group hover:border-[#6d519d]/20 transition-all duration-500"
            >
              <div className={`w-20 h-20 rounded-3xl ${cat.color} flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <cat.icon className="w-10 h-10" />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{cat.title}</h2>
              <p className="text-gray-500 text-lg mb-10 font-light leading-relaxed">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.services.map((service, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 group-hover:bg-white border border-transparent group-hover:border-gray-100 transition-all">
                    <Zap className="w-4 h-4 text-[#51C4D3]" />
                    <span className="font-bold text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/contact" className="inline-flex items-center gap-2 font-black text-[#6d519d] group/link">
                  Learn more about these services
                  <motion.span 
                    animate={{ x: [0, 5, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
