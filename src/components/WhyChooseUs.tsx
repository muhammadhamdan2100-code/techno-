"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Lightbulb, Users, Target, Sparkles } from "lucide-react";

const points = [
  {
    title: "Strategic Expertise Brand's",
    description: "Tailored marketing strategies engineered to elevate your brand's market position and drive sustained commercial success.",
    icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Innovation in Oxfordshire",
    description: "Cutting-edge digital tools and techniques rooted in Oxfordshire's thriving innovation technology ecosystem.",
    icon: <Lightbulb className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Manchester, Oxford Marketing Minds",
    description: "Combined creative talent and analytical insights from marketing professionals across Oxford and Manchester.",
    icon: <Users className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Marketing-Driven Results",
    description: "Performance-focused campaigns focused on clear metrics, high ROI, and measurable business growth.",
    icon: <Target className="w-6 h-6 text-[#2563EB]" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
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

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EFF6FF] py-16 lg:py-24 text-[#111827] relative overflow-hidden border-t border-b border-[#E5E7EB]">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-100/60 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Why Techno Trade is Your Trusted Digital Partner
          </h2>
        </motion.div>

        {/* 4 Points Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4 sm:gap-5"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B132B] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {point.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
