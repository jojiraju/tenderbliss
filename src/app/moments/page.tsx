"use client";

import { motion } from "framer-motion";
import { Quote, Star, Camera, Heart } from "lucide-react";
import { RevealText } from "../page";

const testimonials = [
  {
    name: "Priya & Arun",
    role: "Happy Parents",
    content: "The care we received at TenderBliss was exceptional. From the moment we arrived until we left with our baby, we felt supported and nurtured. The traditional Ayurvedic treatments made a huge difference in my recovery.",
    rating: 5
  },
  {
    name: "Dr. Sophia Lee",
    role: "Medical Professional",
    content: "As a doctor, I have high standards for postnatal care. TenderBliss exceeded them all. Their integration of medical safety with traditional wellness is truly state-of-the-art.",
    rating: 5
  },
  {
    name: "Ayesha Khan",
    role: "New Mother",
    content: "The lactation consultants were amazing. I was struggling at first, but their patient guidance helped me build confidence. The environment is so peaceful, it's a true sanctuary.",
    rating: 5
  }
];

const galleryImages = [
  { title: "Premium Care Suite", category: "Accommodation", image: "/moments/suite.png" },
  { title: "Ayurvedic Therapy Room", category: "Wellness", image: "/moments/therapy.png" },
  { title: "Newborn Nursery", category: "Care", image: "/moments/nursery.png" },
  { title: "Nutritious Dining", category: "Nutrition", image: "/moments/dining.png" },
  { title: "Sanctuary Gardens", category: "Environment", image: "/moments/gardens.png" },
  { title: "Lactation Support", category: "Services", image: "/moments/support.png" }
];

const easePremium = [0.16, 1, 0.3, 1] as any;

export default function Moments() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#faf9f8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[#6d519d] font-bold mb-4"
          >
            Memories of Love & Care
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">
            Tender Moments
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Glimpses into the peaceful sanctuary we've created for mothers and their newborns.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: easePremium }}
              className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-200 shadow-2xl cursor-pointer"
            >
              {/* Real images */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>

              {/* Refined Overlay & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                <motion.span 
                  className="text-xs uppercase tracking-[0.3em] text-[#51C4D3] font-black mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700"
                >
                  {item.category}
                </motion.span>
                <h3 className="text-3xl md:text-4xl font-serif leading-tight transform group-hover:-translate-y-2 transition-transform duration-700">
                  {item.title}
                </h3>
                
                {/* Decorative line on hover */}
                <div className="w-0 group-hover:w-16 h-0.5 bg-[#51C4D3] mt-4 transition-all duration-700 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6d519d]/5 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#6d519d] flex items-center justify-center text-white shadow-lg shadow-[#6d519d]/20">
                <Quote className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Voices of Comfort</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.8, ease: easePremium }}
                  className="flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#51C4D3] text-[#51C4D3]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                    "{t.content}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-[#6d519d] uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
