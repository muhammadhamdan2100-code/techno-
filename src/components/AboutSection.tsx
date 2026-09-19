"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

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
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const bulletContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const bulletItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  const bulletPoints = [
    "Advanced techniques",
    "SEO mastery",
    "Engaging content",
  ];

  return (
    <section className="bg-white py-16 lg:py-24 text-[#111827] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image & Highlights */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col space-y-6">
            <div style={{ perspective: 1000 }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={imageVariant}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-slate-50"
              >
                <Image
                  src="/images/digital-marketing-about.webp"
                  alt="digital-marketing-agency-in-oxfordshire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Bullet Points */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={bulletContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              {bulletPoints.map((bullet, idx) => (
                <motion.div
                  key={idx}
                  variants={bulletItem}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#EFF6FF] border border-blue-100 text-sm font-semibold text-[#0B132B]"
                >
                  <div className="p-1 rounded-full bg-blue-100 text-[#2563EB] shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{bullet}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start space-y-6">
            
            {/* Top Tag */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase"
            >
              About Us
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B132B] leading-tight"
            >
              Why Techno Trade is the Best Digital Marketing Agency in Oxfordshire
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="space-y-4 text-[#64748B] text-sm sm:text-base leading-relaxed"
            >
              <p className="font-medium text-[#2563EB]">
                Want to know the power of <strong className="text-[#0B132B]">technotsl Digital Marketing agency</strong>? Yes, I&apos;m talking to your business!
              </p>
              <p>
                Have you ever noticed businesses from industries like textiles, furniture, healthcare, wellness, and many more growing rapidly on platforms like Instagram, Facebook, or at the top of Google search results? That&apos;s the impact of smart content marketing and marketing campaigns — and that&apos;s exactly what you get with <strong className="text-[#0B132B] font-semibold">Technotsl Digital Marketing Agency in Oxfordshire</strong> to grow your business online.
              </p>
              <p>
                Just think about this: You&apos;ve started your business and want to rank your website on the first page of Google with a professional online presence — but no one knows about it. How will you showcase your business to the world? In 2025, it&apos;s not about printing flyers — it&apos;s about building your brand with a <strong className="text-[#0B132B] font-semibold">social media and conversion rate optimisation agency</strong>, running targeted Facebook and Instagram ads, collaborating with a skilled marketing team, and even improving your web design.
              </p>
              <p>
                If you&apos;re searching for a <strong className="text-[#0B132B] font-semibold">full service marketing agency Oxford</strong> businesses can rely on, or a <strong className="text-[#0B132B] font-semibold">full service affordable marketing agency in Oxfordshire</strong>, or a specialist <strong className="text-[#0B132B] font-semibold">lead generation agency Oxford</strong> businesses trust — Techno Trade brings together SEO, paid media, and conversion rate optimisation to grow your business. As a top-rated <strong className="text-[#0B132B] font-semibold">internet marketing agency in Oxford</strong>, we understand the local market and deliver campaigns that convert.
              </p>
            </motion.div>

            {/* Learn More Link / CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="pt-2"
            >
              <motion.div
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
