"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

const headerVariants: Variants = {
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

const mapVariants: Variants = {
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

const infoContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const infoCardVariants: Variants = {
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

export default function ContactSection() {
  return (
    <section className="bg-white py-16 lg:py-24 text-[#111827] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Connect With Our Oxfordshire Digital Team
          </h2>
        </motion.div>

        {/* Contact Grid: Map + Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Google Maps Embed */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={mapVariants}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-slate-50 min-h-[350px] relative"
          >
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Hollow%20way%2C%20Oxford%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
              title="Hollow way, Oxford, United Kingdom"
              aria-label="Hollow way, Oxford, United Kingdom"
              className="w-full h-full min-h-[380px] border-0"
            />
          </motion.div>

          {/* Right Column: Contact Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={infoContainerVariants}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Phone Card */}
            <motion.div 
              variants={infoCardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                  Make a Call
                </div>
                <a
                  href="tel:+447354820513"
                  className="text-lg font-bold text-[#0B132B] hover:text-[#2563EB] transition-colors"
                >
                  +44 7354 820513
                </a>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              variants={infoCardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                  Contact Us via Email
                </div>
                <a
                  href="mailto:info@technotsl.co.uk"
                  className="text-lg font-bold text-[#0B132B] hover:text-[#2563EB] transition-colors"
                >
                  info@technotsl.co.uk
                </a>
              </div>
            </motion.div>

            {/* Location Address Card */}
            <motion.div 
              variants={infoCardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                  Company Address
                </div>
                <div className="text-sm font-semibold text-[#0B132B] leading-relaxed">
                  309 Hollow Way, Headington, Oxford OX3 7JD, United Kingdom
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
