"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, ArrowRight, Sparkles } from "lucide-react";

const fadeInSlideUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTA() {
  return (
    <section className="bg-[#0B132B] py-16 lg:py-20 text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Optimized Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInSlideUp}
          className="relative p-6 sm:p-12 lg:p-16 rounded-3xl bg-[#0B132B] border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden group"
        >
          {/* Left Column: CTA Heading & Contact Methods */}
          <div className="flex flex-col items-start space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Start Consultation With Us
            </h2>

            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              Transform your business online with Oxford&apos;s trusted digital agency. Reach out today for a personalized growth consultation.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm text-[#CBD5E1]">
              <a
                href="tel:+447354820513"
                className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>+44 7354 820513</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="mailto:info@technotsl.co.uk"
                className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>info@technotsl.co.uk</span>
              </a>
            </div>
          </div>

          {/* Right Column: CTA Button */}
          <div className="shrink-0 w-full sm:w-auto relative z-10">
            <motion.div
              whileHover={{ y: -1, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
