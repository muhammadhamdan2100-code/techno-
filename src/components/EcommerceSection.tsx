"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ShoppingBag, ArrowRight, TrendingUp } from "lucide-react";

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

export default function EcommerceSection() {
  return (
    <section className="bg-[#EFF6FF] py-16 lg:py-24 text-[#111827] relative overflow-hidden border-t border-b border-[#E5E7EB]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Subheading Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInSlideUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-3 shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>E-Commerce Agency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-snug">
            Discover TechnoTSL Digital Marketing Services — Built to Grow Your Business
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={imageVariant}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/4] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-white group"
            >
              <Image
                src="/images/e-commerce-stores.jpg"
                alt="e-commerce-online-digital-stores"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B132B]">TikTok Shop &amp; E-Commerce</div>
                    <div className="text-xs text-[#64748B]">Turnkey Store Setup &amp; Scaling</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title & 4 Paragraphs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight leading-tight"
            >
              E-Commerce Simplified: Build, Earn &amp; Grow With Us
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="space-y-4 text-[#64748B] text-sm sm:text-base leading-relaxed"
            >
              <p>
                Looking to build a reliable source of income? Our team helps you set up and manage online stores on platforms like TikTok Shop, eBay, and Amazon, using our proven strategies and online marketing to drive sales. With the right approach, you can optimise your store across multiple social platforms and generate consistent revenue, creating a passive income stream of up to £3,000 per month within a year.
              </p>
              <p>
                Discover the advantages of an online store — flexibility, global reach, and 24/7 availability — all of which can transform the way you do business. The advantages of e commerce go beyond convenience; it&apos;s about scaling your brand efficiently and building long-term profit.
              </p>
              <p>
                From store creation and product listings to complete management, ecommerce marketing, and paid media campaigns, we handle everything—so you can focus on growing your business while we ensure your store performs at its best.
              </p>
              <p className="font-semibold text-[#2563EB]">
                Start your journey towards financial freedom with our professional e-commerce services today.
              </p>
            </motion.div>

            {/* CTA Button & Highlights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services/tiktok-shop-agency"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
                >
                  <span>Explore E-Commerce Services</span>
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
