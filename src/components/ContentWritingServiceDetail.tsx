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
  FileText,
  Sparkles,
  Search,
  PenTool,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
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
    question: "What types of content does your agency create?",
    answer:
      "We produce SEO-optimized blog articles, website copy, landing page sales text, technical whitepapers, case studies, press releases, product descriptions, and email marketing newsletters.",
  },
  {
    question: "How do you ensure written content ranks on Google?",
    answer:
      "Every piece is built on search intent research, SERP competitor analysis, optimal heading structure (H1/H2/H3), semantic keyword integration, and internal linking to high-value service pages.",
  },
  {
    question: "Do you match our company's tone of voice and brand guidelines?",
    answer:
      "Yes. Before writing, we establish a comprehensive Brand Voice Brief covering tone, target persona, industry terminology, and formatting preferences to ensure 100% brand alignment.",
  },
  {
    question: "How many revisions are included with content orders?",
    answer:
      "Every content deliverable includes 2 rounds of complimentary revisions to ensure complete satisfaction with tone, messaging, and formatting.",
  },
  {
    question: "What is the typical turnaround time for blog posts and web copy?",
    answer:
      "Standard turnaround is 3 to 5 business days per article or page script. Express delivery options are available for time-sensitive marketing campaigns.",
  },
];

export default function ContentWritingServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* 1. Hero / Intro */}
      <section className="pt-36 sm:pt-40 pb-16 bg-white relative border-b border-[#E5E7EB] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInSlideUp}>
            <Link
              href="/services"
              className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] mb-4 inline-flex items-center gap-1 transition-colors"
            >
              ← Back to All Services
            </Link>

            <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Copywriting</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Professional Content Writing Services
            </h1>

            <p className="mt-5 text-[#64748B] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Our creative agency produces engaging, SEO-friendly blog posts, web copy, press releases, and brand storytelling that convert visitors into loyal clients for UK businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview / Offerings */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight leading-snug">
                What We Offer: Powerful, Engaging Content That Converts
              </h2>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                Words shape perceptions and drive sales. Whether you need compelling landing page copy, high-converting product descriptions, or authority-building industry articles, our writers craft clear, persuasive copy tailored to your target audience.
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#0B132B] mb-2">
                  Product Descriptions That Sell, Not Just Inform
                </h3>
                <p className="text-[#64748B] text-base leading-relaxed">
                  We turn generic technical features into emotional benefits that resonate with buyers, dramatically boosting e-commerce checkout completion rates.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInSlideUp}
              className="lg:col-span-5"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-md bg-slate-50">
                <Image
                  src="/images/blog-2.webp"
                  alt="Professional Content Writing Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Strategic Service */}
      <section className="py-16 lg:py-24 bg-[#EFF6FF]/50 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <PenTool className="w-3.5 h-3.5" />
              <span>Strategic Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              SEO-Optimized Content That Feels Natural
            </h2>
            <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
              We seamlessly weave high-value keywords into natural, engaging prose that delights human readers while signaling deep topical authority to Google algorithms.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3">
                In-Depth Keyword Research
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We uncover user search intent, long-tail commercial queries, and competitive gaps to target high-conversion phrases.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3">
                Natural SEO Writing
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                No awkward keyword stuffing. Our copy flows naturally while optimizing search headings, meta descriptions, and alt tags.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInSlideUp}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 transition-all duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3">
                Humanized Brand Messaging
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We establish a distinctive brand voice that builds immediate trust, authority, and emotional connection with your buyers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Contact Block */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/10 text-[#3B82F6] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                  Make a Call
                </div>
                <a href="tel:+447354820513" className="text-lg sm:text-xl font-bold text-white hover:text-[#3B82F6]">
                  +44 7354 820513
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/10 text-[#3B82F6] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                  Contact Us
                </div>
                <a href="mailto:info@technotsl.co.uk" className="text-lg sm:text-xl font-bold text-white hover:text-[#3B82F6]">
                  info@technotsl.co.uk
                </a>
              </div>
            </div>

            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Why Choose Our Content Writing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xl flex items-center justify-center mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3">100% Original, Research-Backed Copy</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Every line is written from scratch by skilled copywriters, backed by industry statistics and audience psychology.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xl flex items-center justify-center mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3">Engineered for Lead Conversion</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We combine engaging storytelling with strategic call-to-actions that guide readers seamlessly down your sales funnel.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xl flex items-center justify-center mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3">Fast Turnaround &amp; Revision Guarantee</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We meet strict editorial deadlines and include 2 free revision rounds to guarantee complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#2563EB] text-white" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#64748B] border-t border-slate-100 mt-1">
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

      <Footer />
    </main>
  );
}
