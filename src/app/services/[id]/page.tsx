"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, Baby, Heart, Leaf, Utensils, Star, Sparkles, Clock, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const servicesData = {
  "newborn-care": {
    icon: <Baby className="w-20 h-20 md:w-32 md:h-32 text-white" />,
    title: "Newborn Care",
    subtitle: "The ultimate start for your baby.",
    desc: "Expert guidance on infant care, soothing, and sleep routines to help you and your baby. We pride ourselves on offering the most luxurious and effective treatments tailored perfectly for you.",
    benefits: ["24/7 expert neonatal support", "Sleep routine establishment", "Lactation consulting", "Soothing techniques for colic"],
    color: "#51C4D3",
    gradient: "from-[#51C4D3] to-[#3ca0b0]",
    bgMesh: "radial-gradient(at 0% 0%, hsla(188,60%,70%,0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(262,33%,60%,0.2) 0px, transparent 50%)"
  },
  "maternal-recovery": {
    icon: <Heart className="w-20 h-20 md:w-32 md:h-32 text-white" />,
    title: "Maternal Recovery",
    subtitle: "Heal, restore, and glow.",
    desc: "Personalized physical and emotional support for new mothers during the crucial postpartum phase. We pride ourselves on offering the most luxurious and effective treatments.",
    benefits: ["Postpartum body healing", "Emotional wellness counseling", "Pelvic floor rehabilitation", "Stress relief therapy"],
    color: "#6d519d",
    gradient: "from-[#6d519d] to-[#513b78]",
    bgMesh: "radial-gradient(at 0% 0%, hsla(262,33%,60%,0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(188,60%,70%,0.2) 0px, transparent 50%)"
  },
  "ayurvedic-therapy": {
    icon: <Leaf className="w-20 h-20 md:w-32 md:h-32 text-white" />,
    title: "Ayurvedic Therapy",
    subtitle: "Ancient wisdom for modern mothers.",
    desc: "Traditional healing massages and therapeutic treatments designed for holistic postpartum wellness. We pride ourselves on offering the most luxurious treatments.",
    benefits: ["Traditional Abhyanga massages", "Herbal steam baths (Swedana)", "Belly binding techniques", "Organic medicinal oils"],
    color: "#51C4D3",
    gradient: "from-[#51C4D3] to-[#3ca0b0]",
    bgMesh: "radial-gradient(at 100% 0%, hsla(188,60%,70%,0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(262,33%,60%,0.2) 0px, transparent 50%)"
  },
  "nutritious-diet": {
    icon: <Utensils className="w-20 h-20 md:w-32 md:h-32 text-white" />,
    title: "Nutritious Diet",
    subtitle: "Fuel your body, nourish your soul.",
    desc: "Specially curated, balanced meals emphasizing recovery, vitality, and healthy lactation. We pride ourselves on offering the most luxurious and effective treatments.",
    benefits: ["Customized Ayurvedic meal plans", "Lactation-boosting ingredients", "Organic and fresh produce", "Digestive health focus"],
    color: "#6d519d",
    gradient: "from-[#6d519d] to-[#513b78]",
    bgMesh: "radial-gradient(at 100% 100%, hsla(262,33%,60%,0.3) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(188,60%,70%,0.2) 0px, transparent 50%)"
  }
};

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const service = servicesData[id as keyof typeof servicesData];

  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const bentoRefs = useRef<(HTMLElement | null)[]>([]);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (service) setIsReady(true);
  }, [service]);

  useGSAP(() => {
    if (!isReady) return;

    const tl = gsap.timeline();

    // Floating animation for the main icon
    gsap.to(iconRef.current, {
      y: -20,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Staggered Bento Grid Entrance
    tl.fromTo(bentoRefs.current, 
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "expo.out" }
    );

  }, [isReady]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f8]">
        <div className="animate-spin w-12 h-12 border-4 border-[#6d519d] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <main 
      className="min-h-screen bg-[#faf9f8] overflow-hidden relative selection:bg-[#51C4D3]/30 selection:text-[#6d519d]"
      style={{ backgroundImage: service.bgMesh }}
    >
      <div ref={containerRef} className="container mx-auto px-6 pt-32 pb-20 max-w-7xl">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
          
          {/* Header Block (Spans 8 columns) */}
          <div ref={el => { bentoRefs.current[0] = el; }} className="md:col-span-8 bg-white/60 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 shadow-xl shadow-[#6d519d]/5 border border-white relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-3xl z-0"></div>
            <div className="relative z-10">
              <span className="inline-block py-2 px-5 rounded-full font-black tracking-widest text-sm uppercase mb-6 shadow-sm border border-white/40 bg-white/50" style={{ color: service.color }}>
                {service.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
                {service.desc}
              </p>
            </div>
          </div>

          {/* Icon/Hero Block (Spans 4 columns) */}
          <div ref={el => { bentoRefs.current[1] = el; }} className={`md:col-span-4 rounded-[3rem] p-10 shadow-2xl bg-gradient-to-br ${service.gradient} flex flex-col items-center justify-center relative overflow-hidden group min-h-[300px]`}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div ref={iconRef} className="relative z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)]">
              {service.icon}
            </div>
          </div>

          {/* Benefits Block (Spans 6 columns) */}
          <div ref={el => { bentoRefs.current[2] = el; }} className="md:col-span-6 bg-gray-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent z-0"></div>
            <h3 className="text-3xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#51C4D3]" /> What's Included
            </h3>
            <div className="space-y-6 relative z-10">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-5 group/item">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:bg-[#51C4D3] transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium text-lg group-hover/item:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Block (Spans 6 columns) */}
          <div ref={el => { bentoRefs.current[3] = el; }} className="md:col-span-6 flex flex-col gap-6">
            
            {/* Small Stat Cards inside CTA column */}
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-gray-100/50 hover:scale-[1.02] transition-transform cursor-default">
                <Clock className="w-10 h-10 text-gray-400 mb-4" />
                <h4 className="text-3xl font-black text-gray-900">24/7</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">Availability</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-lg shadow-gray-100/50 hover:scale-[1.02] transition-transform cursor-default">
                <ShieldCheck className="w-10 h-10 text-gray-400 mb-4" />
                <h4 className="text-3xl font-black text-gray-900">100%</h4>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">Certified Care</p>
              </div>
            </div>

            {/* Huge CTA Button */}
            <button className={`w-full h-full min-h-[120px] rounded-[2rem] bg-gradient-to-r ${service.gradient} text-white font-black text-2xl md:text-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10">Schedule Consultation</span>
              <ArrowLeft className="w-8 h-8 rotate-180 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
