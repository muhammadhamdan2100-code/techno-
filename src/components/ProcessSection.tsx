"use client";

import { motion, Variants } from "framer-motion";
import { MessageSquare, CalendarCheck, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Talk With Team Influencer",
    icon: <MessageSquare className="w-6 h-6 text-[#2563EB]" />,
    description: "Initial consultation to understand your brand goals and target audience in depth.",
  },
  {
    number: "02",
    title: "Make a Plan Agile",
    icon: <CalendarCheck className="w-6 h-6 text-[#2563EB]" />,
    description: "Developing a tailored, data-backed strategy designed for rapid execution and ROI.",
  },
  {
    number: "03",
    title: "Digital Strategies Marketing Landscape",
    icon: <Rocket className="w-6 h-6 text-[#2563EB]" />,
    description: "Executing campaigns across SEO, PPC, and social media to scale your business growth.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 lg:py-24 text-[#111827] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-50/50 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Our Proven 3-Step Growth Process
          </h2>
        </motion.div>

        {/* 3-Step Process Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#2563EB] transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#0B132B] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Accent Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#2563EB]/40 font-bold">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
