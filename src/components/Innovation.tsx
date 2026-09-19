"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Compass, Handshake } from "lucide-react";

const partnerLogos = [
  {
    src: "/images/partner-logo-1.webp",
    alt: "digital marketing company in oxfordshire",
    name: "Pink Beauty",
  },
  {
    src: "/images/partner-logo-2.webp",
    alt: "saul's-plumbing-agency",
    name: "Saul's Plumbing Agency",
  },
  {
    src: "/images/partner-logo-3.webp",
    alt: "royalty-removal-solutions",
    name: "Royalty Removal Solutions",
  },
  {
    src: "/images/partner-logo-4.webp",
    alt: "quality-construction-group",
    name: "Quality Construction Group",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function Innovation() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-b border-[#E5E7EB] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50 blur-3xl opacity-30 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-50 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Core Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {/* Digital Innovation */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <div className="p-3.5 rounded-xl bg-blue-50 text-[#2563EB] w-fit mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-3">
              Digital Innovation
            </h3>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              The Digital Innovation you can trust on with Techno Trade Solutions.
            </p>
          </motion.div>

          {/* Trusted Partner */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <div className="p-3.5 rounded-xl bg-blue-50 text-[#2563EB] w-fit mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
              <Handshake className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] mb-3">
              Trusted Partner
            </h3>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              The Digital Agency in Oxfordshire, the trusted partner of many businesses.
            </p>
          </motion.div>
        </motion.div>

        {/* Partner Logos Banner / Grid */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <span className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              Trusted By Growing Businesses
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center"
          >
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-blue-300 transition-all duration-300 group min-h-[95px] sm:min-h-[115px] aspect-[16/9] relative overflow-hidden"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-300 ${
                    index === 2
                      ? "max-h-24 sm:max-h-28 scale-150 sm:scale-165"
                      : "max-h-20 sm:max-h-24 scale-120 sm:scale-130"
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain filter grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
