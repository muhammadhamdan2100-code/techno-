"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Layers,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const faqs = [
  {
    question: "What is an eCommerce Agency?",
    answer:
      "An e-commerce agency is a specialized digital agency that helps businesses build, design, manage, and scale online stores. Services typically include web development, user experience design, payment gateway setup, platform integration, and digital marketing.",
  },
  {
    question: "How Does an eCommerce Agency Work?",
    answer:
      "An e-commerce agency collaborates with your business to analyze your target audience, select the right platform (such as Shopify or WooCommerce), design a user-friendly store, integrate payment and inventory systems, and implement marketing strategies to drive traffic and sales.",
  },
  {
    question: "How Much Can You Make with eCommerce?",
    answer:
      "E-commerce revenue potential varies depending on your product demand, pricing strategy, customer acquisition channels, and store conversion rates. With an optimized online store and effective marketing, businesses can achieve scalable, long-term revenue growth.",
  },
  {
    question: "What Are the 4 Types of eCommerce?",
    answer:
      "The four primary B2C and B2B e-commerce models are Business-to-Consumer (B2C), Business-to-Business (B2B), Consumer-to-Consumer (C2C), and Consumer-to-Business (C2B).",
  },
  {
    question: "Digital eCommerce Agency: How Does It Work?",
    answer:
      "A digital e-commerce agency combines web engineering, design aesthetics, data analytics, and digital marketing (such as SEO and paid search) to create an end-to-end online sales engine that consistently acquires and converts customers.",
  },
];

export default function EcommerceServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* Structured FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero / Intro */}
      <section className="pt-36 sm:pt-40 pb-16 bg-white relative border-b border-[#E5E7EB] overflow-hidden">
        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50/60 blur-3xl opacity-30 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInSlideUp}
          >
            <Link
              href="/services"
              className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] mb-4 inline-flex items-center gap-1 transition-colors"
            >
              ← Back to All Services
            </Link>

            <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              E-commerce Agency Oxfordshire — Build, Sell &amp; Scale Online
            </h1>

            <p className="mt-5 text-[#64748B] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Looking for an e-commerce agency Oxfordshire business owners trust? At Techno Trade Solutions, we design, build, and scale online stores that turn visitors into paying customers. Whether you need a brand-new website or want to improve an existing store, our team is here to help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview section */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-snug">
                E-commerce Services in Oxfordshire — Smart Stores, Smarter Growth
              </h2>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                An effective e-commerce store is more than a digital catalog. It is a complete sales system. From initial strategy and user experience design to secure checkout setup and performance marketing, we cover every aspect of online selling. We work with local Oxfordshire brands, independent shops, and expanding businesses looking for reliable results.
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#0B132B] mb-2">
                  What We Deliver as Your E-commerce Agency Oxfordshire
                </h3>
                <p className="text-[#64748B] text-base leading-relaxed">
                  We combine modern design with practical functionality so your store performs well on desktop, tablet, and mobile devices.
                </p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="lg:col-span-5"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-md bg-slate-50">
                <Image
                  src="/images/retail-online.jpg"
                  alt="E-commerce Agency Oxfordshire Retail Online Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Strategic Service section */}
      <section className="py-16 lg:py-24 bg-[#EFF6FF]/50 border-y border-[#E5E7EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Strategic Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Shopify &amp; WooCommerce Development Oxfordshire
            </h2>
            <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
              Choosing the right e-commerce platform depends on your business goals, product catalog, and operational needs. We build on leading platforms like Shopify and WooCommerce, creating fast, secure, and user-friendly stores tailored to your brand.
            </p>
          </motion.div>

          {/* Three Feature Blocks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3 leading-snug">
                We design stores that guide customers to purchase.
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Clean visual hierarchy, intuitive navigation, and clear product displays help customers find what they need quickly.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3 leading-snug">
                We create checkouts that are simple, secure, and fast.
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Frictionless payment options and streamlined checkout flows reduce abandoned carts and increase completed orders.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3 leading-snug">
                We build systems that scale as your business expands.
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                From inventory management to marketing integration, your store will be ready for long-term growth.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 4. Contact mini-section */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            
            {/* Phone Block */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/10 text-[#3B82F6] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                  Make a Call
                </div>
                <a
                  href="tel:+447354820513"
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#3B82F6] transition-colors"
                >
                  +44 7354 820513
                </a>
              </div>
            </div>

            {/* Email Block */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/10 text-[#3B82F6] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                  Contact Us
                </div>
                <a
                  href="mailto:info@technotsl.co.uk"
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#3B82F6] transition-colors"
                >
                  info@technotsl.co.uk
                </a>
              </div>
            </div>

            {/* Button */}
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-colors shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Brand / CTA section */}
      <section className="py-16 lg:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Your E-commerce Brand Speaks — Customers Listen and Buy
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Your online store reflects your business reputation. We make sure your e-commerce site delivers a smooth, professional experience that builds customer trust from the first click.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-9 py-4 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-98"
              >
                <span>Get a Quotation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Why Choose section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Why Choose Our E-commerce Agency Oxfordshire
            </h2>
            <p className="mt-3 text-[#2563EB] font-bold text-lg">
              Turning Your Vision Into Everyday Success
            </p>
          </motion.div>

          {/* Three Numbered Blocks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Block 1 */}
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xl flex items-center justify-center mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 leading-snug">
                E-commerce Stores Built to Sell, Not Just Shine
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Beautiful design matters, but sales matter more. Every layout decision we make is focused on conversion rate optimization, helping you get the highest return on your investment.
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xl flex items-center justify-center mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 leading-snug">
                We Turn Clicks Into Customers for Oxfordshire Businesses
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Through targeted user experience improvements and integrated digital marketing, we help bring qualified traffic to your store and convert those visitors into buyers.
              </p>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xl flex items-center justify-center mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 leading-snug">
                Design That Drives Revenue
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                From mobile responsiveness to fast page loading speeds, we handle the technical details so you can focus on running your business.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 7. FAQ section */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-xs hover:border-blue-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#2563EB] text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-slate-100 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
