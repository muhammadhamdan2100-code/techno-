"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Award, CheckCircle2, TrendingUp, Users } from "lucide-react";

const fadeInSlideUp: Variants = {
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

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ResultsSection() {
  const stats = [
    {
      percentage: "95%",
      label: "Projects Completed",
      icon: <Award className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      percentage: "90%",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  return (
    <section className="bg-[#EFF6FF] py-16 lg:py-24 text-[#111827] relative overflow-hidden border-t border-b border-[#E5E7EB]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-100/60 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Subheading Tag */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInSlideUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Where Vision Meets Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-tight mb-2">
            Where Vision Meets Results Across the UK
          </h2>
          <p className="text-[#2563EB] font-medium text-base sm:text-lg">
            Strategic digital marketing powered by real-time data.
          </p>
        </motion.div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & Statistics */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#0B132B] leading-snug">
                Guide Your Brand Towards Digital Success
              </h3>
              <p className="text-[#64748B] text-base leading-relaxed">
                Grow your brand with a marketing agency trusted by businesses across the UK.
              </p>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB] w-fit">
                      {stat.icon}
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">
                      {stat.percentage}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-[#0B132B]">
                    {stat.label}
                  </div>
                  {/* Static Progress bar */}
                  <div className="w-full bg-slate-100 h-2.5 rounded-full mt-3 overflow-hidden">
                    <div
                      style={{ width: stat.percentage }}
                      className="bg-[#2563EB] h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Additional trust marker list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#64748B] border-t border-[#E5E7EB]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Real-Time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>UK Wide Reach</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Results Section Image */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={imageVariant}
              className="relative w-full max-w-lg lg:max-w-none aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-white"
            >
              <Image
                src="/images/results-presentation.jpg"
                alt="digital-marketing-analytics-presentation-in-an-oxfordshire-office-meeting."
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
