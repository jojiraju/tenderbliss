"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone } from "lucide-react";
import { careerRoles } from "@/lib/careerRoles";

const jobPositions = careerRoles.map((role) => role.title);

export default function CareerApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: jobPositions[0],
    message: ""
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const position = params.get("position");
    if (position && jobPositions.includes(position)) {
      setFormData((prev) => ({ ...prev, position }));
    }
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Thank you! Your application has been received. We will contact you soon.");
    setFormData({ ...formData, name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="font-sans selection:bg-[#51C4D3]/30 selection:text-[#6d519d] bg-[#faf9f8]">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#51C4D3]/15 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl">
          <Link href="/career" className="inline-flex items-center gap-2 text-[#6d519d] font-semibold hover:text-[#51C4D3]">
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] p-10 text-white shadow-2xl shadow-[#51C4D3]/15"
            >
              <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#51C4D3]/10 blur-3xl" />
              <div className="absolute left-0 bottom-0 h-60 w-60 rounded-full bg-[#6d519d]/10 blur-3xl" />

              <span className="inline-flex items-center gap-2 rounded-full border border-[#51C4D3]/20 bg-[#51C4D3]/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-[#51C4D3] shadow-sm">
                Apply Now
              </span>
              <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
                Apply to a role that fits your care skills.
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
                We make applying fast, clear and personal. Select your role, tell us about your experience, and we'll get back to you quickly.
              </p>

              <div className="mt-12 grid gap-5">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#51C4D3] font-bold mb-3">Selected role</p>
                  <p className="text-xl font-semibold text-white">{formData.position}</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#51C4D3] font-bold mb-3">What to expect</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li>1. Fill in your details with confidence.</li>
                    <li>2. Submit your application instantly.</li>
                    <li>3. Our hiring team responds within one business day.</li>
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#51C4D3] font-bold mb-3">Why apply here</p>
                  <p className="text-gray-300 leading-relaxed">
                    Join an empathetic team delivering premium postnatal care in a warm, supportive environment.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-gray-200/40"
            >
              <div className="mb-10 flex flex-col gap-2 rounded-[2rem] border border-[#e5e7eb] bg-[#f8fafc] p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-[#6d519d] font-bold">Application form</span>
                <h2 className="text-3xl font-black text-gray-900">Ready to get started?</h2>
                <p className="text-gray-500 leading-relaxed">
                  Complete the form below and attach your CV if you have one ready. We’ll be in touch as soon as we review your profile.
                </p>
              </div>

              <div className="grid gap-5">
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-3 w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow duration-200 focus:border-[#51C4D3] focus:ring-2 focus:ring-[#51C4D3]/20"
                  />
                </label>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-3 w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow duration-200 focus:border-[#51C4D3] focus:ring-2 focus:ring-[#51C4D3]/20"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-3 w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow duration-200 focus:border-[#51C4D3] focus:ring-2 focus:ring-[#51C4D3]/20"
                    />
                  </label>
                </div>
                <label className="block text-sm font-semibold text-gray-700">
                  Desired Position
                  <select
                    value={formData.position}
                    onChange={(e) => handleChange("position", e.target.value)}
                    className="mt-3 w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow duration-200 focus:border-[#51C4D3] focus:ring-2 focus:ring-[#51C4D3]/20"
                  >
                    {jobPositions.map((position) => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className="mt-3 w-full rounded-[1.75rem] border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-shadow duration-200 focus:border-[#51C4D3] focus:ring-2 focus:ring-[#51C4D3]/20"
                    placeholder="A short note on your experience or availability"
                  />
                </label>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-3xl bg-[#51C4D3] px-6 py-4 text-base font-bold text-black shadow-lg shadow-[#51C4D3]/20 transition-colors duration-200 hover:bg-[#6d519d] hover:text-white"
                >
                  Submit application
                </motion.button>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-3xl bg-[#e6fffa] p-4 text-sm text-[#065f46] border border-[#6ee7b7]"
                  >
                    {status}
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
