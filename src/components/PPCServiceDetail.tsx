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
  Target,
  Sparkles,
  BarChart,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  Layers,
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
    question: "Which ad platforms do you manage for UK businesses?",
    answer:
      "We manage search, display, and shopping campaigns across Google Ads, Microsoft/Bing Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, and TikTok Paid Ads.",
  },
  {
    question: "How fast can PPC advertising drive qualified leads and sales?",
    answer:
      "Unlike organic SEO, PPC campaigns start driving targeted visitor traffic to your landing pages immediately upon ad approval—typically within 24 to 48 hours of campaign setup.",
  },
  {
    question: "How do you prevent wasted ad spend on irrelevant search terms?",
    answer:
      "We implement comprehensive negative keyword lists, tight match type strategies, continuous search query audits, location radius geofencing, and audience demographic filters.",
  },
  {
    question: "Do you build dedicated landing pages for PPC campaigns?",
    answer:
      "Yes. High-converting campaigns require alignment between ad copy and landing pages. We design custom, high-speed landing pages optimized specifically for PPC conversions.",
  },
  {
    question: "How do you measure and report PPC performance?",
    answer:
      "We track Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), conversion rate, and quality scores. You receive real-time dashboard access and transparent monthly strategy calls.",
  },
];

const industries = [
  "E-Commerce & Retail",
  "Local Services & Trades",
  "Professional & Legal Services",
  "Healthcare & Wellness",
  "Technology & SaaS",
];

const workflowSteps = [
  { step: "01", title: "Account Audit & Strategy", desc: "Analyzing historic performance, competitor ad copies, and setting CPA targets." },
  { step: "02", title: "Keyword & Audience Research", desc: "Identifying high-intent transactional keywords and custom audience segments." },
  { step: "03", title: "Landing Page Optimization", desc: "Building fast, high-converting landing pages aligned with ad copy intent." },
  { step: "04", title: "Campaign Setup & Bidding", desc: "Structuring campaign groups, negative lists, and automated bid strategies." },
  { step: "05", title: "Continuous Testing & Scaling", desc: "A/B testing ad variations, optimizing Quality Scores, and scaling profitable keywords." },
];

export default function PPCServiceDetail() {
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
              <span>Key Advertising Platforms We Specialize In</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              PPC Advertising Services
            </h1>

            <p className="mt-5 text-[#64748B] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Get instant, high-ROI results across Google Ads, Bing Ads, and Meta Ads with our data-driven pay-per-click management strategies in Oxford, UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview & Platforms */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInSlideUp} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B]">
                PPC Advertising Services In Oxford, UK
              </h2>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                Pay-Per-Click advertising gives your business immediate visibility at the exact moment customers are actively searching for your products or services online.
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#0B132B] mb-3">Platforms We Excel At</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#0B132B] text-center">Google Ads</div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#0B132B] text-center">LinkedIn Ads</div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#0B132B] text-center">Facebook &amp; Instagram</div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#0B132B] text-center">YouTube Ads</div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#0B132B] text-center">Bing Search Ads</div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#0B132B] text-center">TikTok Paid Ads</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInSlideUp} className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-md bg-slate-50">
                <Image
                  src="/images/results-presentation.jpg"
                  alt="PPC Advertising Management Services"
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Strategic Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Data-Driven Campaign Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3">Smart Keyword Targeting</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Focusing strictly on high-intent transactional search queries while filtering out non-converting traffic.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3">Impactful Ad Copy &amp; Creatives</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Writing compelling ad copy and designing eye-catching banners that drive high click-through rates (CTR).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B] mb-3">Precision Audience Targeting</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Leveraging geographic radius targeting, demographic filters, and remarketing lists to maximize conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation Block */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold mb-1">
                Make Consultation About This Service
              </div>
              <div className="text-xl font-extrabold text-white">
                Ready to Scale Your Ad ROI?
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3B82F6]" />
                <a href="tel:+447354820513" className="text-base font-bold text-white hover:text-[#3B82F6]">
                  +44 7354 820513
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3B82F6]" />
                <a href="mailto:info@technotsl.co.uk" className="text-base font-bold text-white hover:text-[#3B82F6]">
                  info@technotsl.co.uk
                </a>
              </div>
              <Link
                href="/contact-us"
                className="px-7 py-3 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-Step Workflow */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our End-to-End PPC Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
                <div className="text-xs font-bold text-[#2563EB] bg-blue-50 w-fit px-2.5 py-1 rounded-full">{step.step}</div>
                <h3 className="text-base font-bold text-[#0B132B] leading-tight">{step.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B132B]">Industries We Serve</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <div key={ind} className="px-6 py-3.5 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-[#2563EB]" />
                <span className="text-sm font-bold text-[#0B132B]">{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA & FAQs */}
      <section className="py-16 bg-[#0B132B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl font-extrabold">Ready to Boost Your Ad Campaigns?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">Get a free campaign audit or quote today from our PPC strategists.</p>
          <Link href="/contact-us" className="inline-flex items-center px-8 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md">
            Get a Quotation
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-xs">
                  <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer">
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4">{faq.question}</span>
                    <div className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#2563EB] text-white" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#64748B] border-t border-slate-100 mt-1">{faq.answer}</div>
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
