"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, CheckCircle2, Sparkles } from "lucide-react";
import { careerRoles } from "@/lib/careerRoles";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  },
};

export default function CareerPage() {
  return (
    <main className="font-sans selection:bg-[#51C4D3]/30 selection:text-[#6d519d] bg-[#eff8fb] text-gray-900 overflow-hidden">
      <section className="relative pt-32 pb-24 min-h-[90vh] flex flex-col justify-center">
        {/* Background Decorative Elements */}
        <div className="absolute left-[-10%] top-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#51C4D3]/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#6d519d]/10 blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#51C4D3]/30 bg-white/60 backdrop-blur-md px-5 py-2.5 text-sm font-bold uppercase tracking-[0.3em] text-[#51C4D3] shadow-sm mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Careers at TenderBliss
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]"
              >
                Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d519d] to-[#51C4D3]">Purpose</span>.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
              >
                Join a team of compassionate professionals dedicated to providing warm hospitality and evidence-based postpartum care. Your expertise makes a difference.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link href="#open-roles" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-gray-900/20 transition-all hover:bg-gray-800 hover:scale-105 active:scale-95">
                  View Open Roles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6d519d]/20 to-[#51C4D3]/20 rounded-[3rem] blur-2xl transform -rotate-6"></div>
              <div className="relative rounded-[3rem] border border-white/50 bg-white/60 backdrop-blur-xl p-10 shadow-2xl shadow-[#51C4D3]/10 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#6d519d] via-[#51C4D3] to-[#6d519d]" />
                <div className="grid gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2rem] bg-white p-6 shadow-sm border border-gray-100 flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-[#51C4D3]/10 flex items-center justify-center text-[#51C4D3] font-black text-2xl">
                      {careerRoles.length}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Open Positions</p>
                      <p className="text-xl font-bold text-gray-900">Ready for you</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2rem] bg-white p-6 shadow-sm border border-gray-100">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#6d519d] font-bold mb-3">Culture</p>
                    <p className="text-gray-600 leading-relaxed font-medium">Flexible schedules, supportive teammates, and an environment centered on genuine care.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Open Roles</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Find where your skills meet our mission. We are constantly looking for bright minds.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {careerRoles.map((role) => (
              <Link href={`/career/${role.slug}`} key={role.slug} className="group block outline-none">
                <motion.article
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="relative flex flex-col h-full rounded-[2.5rem] border border-white bg-white/40 backdrop-blur-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(81,196,211,0.15)] hover:bg-white/80 hover:border-[#51C4D3]/30"
                >
                  {/* Animated Background Gradients on Hover */}
                  <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-[#51C4D3]/20 via-transparent to-[#6d519d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#51C4D3]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#6d519d]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex justify-between items-start mb-8">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-[#6d519d] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#51C4D3] group-hover:to-[#6d519d] group-hover:text-white group-hover:border-transparent transition-all duration-500 group-hover:shadow-[0_10px_25px_rgba(81,196,211,0.4)] group-hover:-rotate-3 group-hover:scale-110">
                      <role.icon className="w-7 h-7" />
                    </div>
                    
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 transition-all duration-500 group-hover:bg-[#6d519d] group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_8px_15px_rgba(109,81,157,0.3)]">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6d519d] group-hover:to-[#51C4D3] transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#51C4D3] font-bold mb-5 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </p>
                    <p className="text-gray-500 leading-relaxed font-medium line-clamp-3 group-hover:text-gray-700 transition-colors duration-500">
                      {role.summary}
                    </p>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between pt-8 mt-6 border-t border-gray-200/50">
                    <span className="text-sm font-bold text-gray-400 group-hover:text-[#6d519d] transition-colors duration-300">
                      View Details
                    </span>
                    <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:bg-[#51C4D3] group-hover:border-transparent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_15px_rgba(81,196,211,0.3)]">
                      Apply Now
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6d519d]/30 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#51C4D3]/20 via-transparent to-transparent opacity-60" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#51C4D3] mb-6 backdrop-blur-md">
                Why TenderBliss?
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                A nurturing workplace <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51C4D3] to-white">with purpose.</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "Flexible schedules with empathy for family life.",
                  "Ayurvedic training, hands-on support, and clear growth paths.",
                  "Respectful, calm, and service-driven team culture.",
                  "Meaningful work supporting postpartum recovery with real care."
                ].map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#51C4D3] to-[#6d519d] text-white">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-lg text-gray-300 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#51C4D3] to-[#6d519d]" />
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Start your journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  Submit your application through our dedicated portal. We review applications daily.
                </p>
              </div>

              <Link 
                href="/career/apply" 
                className="group relative flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-5 font-bold text-gray-900 transition-all hover:bg-[#51C4D3] hover:text-white"
              >
                Go to Application
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 text-gray-400 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                    <MapPin className="w-5 h-5 text-[#51C4D3]" />
                  </div>
                  <span className="font-medium">Mampad, Nilambur</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                    <Phone className="w-5 h-5 text-[#51C4D3]" />
                  </div>
                  <span className="font-medium">+91 99462 23233</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
