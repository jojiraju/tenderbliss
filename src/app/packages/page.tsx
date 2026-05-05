"use client";

import { motion } from "framer-motion";
import { Check, Tv, Wind, Users, Coffee, BedDouble, Star } from "lucide-react";

const packages = [
  {
    name: "Bliss Cozy Stay",
    type: "1 BHK",
    description: "Essential living with calm interiors, designed for peaceful recovery.",
    features: ["Stay for 1 bystander", "Optional AC", "Daily housekeeping", "Standard meal plan"],
    icon: Coffee,
    color: "from-gray-100 to-gray-200"
  },
  {
    name: "Bliss Comfort Suite",
    type: "1 BHK",
    description: "Signature comfort with warm interiors and cozy bedding.",
    features: ["Stay for 1 bystander", "Air Conditioned", "Premium bedding", "Custom meal plan"],
    icon: BedDouble,
    color: "from-[#51C4D3]/10 to-[#51C4D3]/30",
    popular: true
  },
  {
    name: "Bliss Divine Care Suite",
    type: "2 BHK",
    description: "Family suite with wellness interiors and spacious layout.",
    features: ["Stay for 2 bystanders", "Fully AC", "Smart TV", "Holistic wellness interiors"],
    icon: Users,
    color: "from-[#6d519d]/10 to-[#6d519d]/30"
  },
  {
    name: "Bliss Royale Suite",
    type: "2 BHK",
    description: "The ultimate luxury experience for mother and family.",
    features: ["Stay for 2 bystanders", "XL Smart TV + OTT", "Premium Interiors", "Personalized support 24/7"],
    icon: Tv,
    color: "from-gray-900 to-black",
    dark: true
  }
];

const easePremium = [0.16, 1, 0.3, 1] as any;

export default function Packages() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#faf9f8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[#6d519d] font-bold mb-4"
          >
            Luxury Accommodation
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">
            Sanctuary Packages
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-light">
            Choose the perfect environment for your healing journey. Every suite is designed for ultimate comfort and tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: easePremium }}
              className={`relative rounded-[2.5rem] p-7 md:p-8 flex flex-col h-full shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${pkg.dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-gray-100'}`}
            >
              {pkg.popular && (
                <div className="absolute top-6 right-6 z-20">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-gradient-to-r from-[#51C4D3] to-[#3aa2b1] text-white shadow-lg shadow-[#51C4D3]/30"
                  >
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Most Popular</span>
                  </motion.div>
                </div>
              )}

              <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 bg-gradient-to-br ${pkg.color} ${pkg.dark ? 'text-[#51C4D3]' : 'text-[#6d519d]'} shadow-inner`}>
                <pkg.icon className="w-10 h-10" />
              </div>

              <span className={`text-[10px] font-black uppercase tracking-[0.25em] mb-3 ${pkg.dark ? 'text-gray-400' : 'text-[#6d519d]/60'}`}>
                {pkg.type}
              </span>
              <h3 className="text-xl xl:text-2xl font-bold mb-4 tracking-tight leading-tight">{pkg.name}</h3>
              <p className={`text-sm mb-8 leading-relaxed font-light ${pkg.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {pkg.description}
              </p>

              <div className="space-y-5 mb-12">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4 group/feature">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${pkg.dark ? 'bg-white/10' : 'bg-[#51C4D3]/10'} group-hover/feature:scale-110 transition-transform`}>
                      <Check className={`w-3.5 h-3.5 ${pkg.dark ? 'text-[#51C4D3]' : 'text-[#51C4D3]'}`} />
                    </div>
                    <span className="text-sm font-medium opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`mt-auto w-full py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 ${pkg.dark ? 'bg-[#51C4D3] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(81,196,211,0.4)]' : 'bg-gray-900 text-white hover:bg-[#6d519d] hover:shadow-[0_0_30px_rgba(109,81,157,0.3)]'}`}>
                Enquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
