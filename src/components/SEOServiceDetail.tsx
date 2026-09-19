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
  Search,
  Sparkles,
  TrendingUp,
  MapPin,
  CheckCircle2,
  HelpCircle,
  BarChart,
  FileCode,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  FileText,
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

const cardStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItemVariant: Variants = {
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

const faqs = [
  {
    question: "What is included in Techno Trade's SEO management package?",
    answer:
      "Our SEO services encompass technical site audits, on-page content optimization, Google Business Profile management, local citation building, high-authority UK link building, and monthly SERP performance tracking.",
  },
  {
    question: "How long does SEO take to achieve top organic rankings on Google?",
    answer:
      "SEO is a compounding growth strategy. Initial technical optimizations reflect in 4 to 8 weeks, with noticeable organic traffic and ranking jumps occurring between months 3 and 6.",
  },
  {
    question: "Can you target specific local areas like Oxford, Headington, and Oxfordshire?",
    answer:
      "Yes. We specialize in hyper-local SEO, creating geo-targeted landing pages, localized schema markup, and Google Map 3-Pack optimization for Oxfordshire businesses.",
  },
  {
    question: "Do you use white-hat, Google-compliant SEO methods?",
    answer:
      "100%. We strictly follow Google Search Essentials guidelines. We never use spammy link schemes, PBNs, or automated black-hat tactics that risk penalty.",
  },
  {
    question: "How do we track keyword rankings and organic traffic growth?",
    answer:
      "We provide customized Google Looker Studio reports showing keyword position updates, organic traffic growth, domain authority, and leads generated directly from organic search.",
  },
];

const seoPillars = [
  {
    title: "Technical SEO",
    description:
      "Crawl error resolution, Core Web Vitals speed optimization, XML sitemap indexing, canonical tags, and mobile usability audits.",
    icon: <FileCode className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "On-Page SEO",
    description:
      "Optimizing page title tags, meta descriptions, H1-H3 heading structures, internal linking silos, and image alt text.",
    icon: <Search className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile optimization, local Oxfordshire NAP citations, Google Maps 3-Pack ranking, and geo-targeted landing pages.",
    icon: <MapPin className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Off-Page SEO & Authority",
    description:
      "White-hat link building, brand mention outreach, high-domain-authority UK directory submissions, and digital PR outreach.",
    icon: <Globe className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Keyword Strategy",
    description:
      "In-depth keyword intent research, competitor SERP gap analysis, long-tail commercial query targeting, and keyword mapping.",
    icon: <TrendingUp className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "SEO Content Optimization",
    description:
      "Creating search-optimized blog posts, service copy, and semantic LSI content that satisfies user intent and boosts topical authority.",
    icon: <FileText className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "SEO Reporting & Analytics",
    description:
      "Monthly Looker Studio dashboards, Google Search Console tracking, organic lead attribution, and transparent rank tracking.",
    icon: <BarChart className="w-6 h-6 text-[#2563EB]" />,
  },
];

const seoProcess = [
  {
    step: "01",
    title: "SEO Audit",
    description: "Full technical audit, site health analysis, backlink profile review, and competitor benchmark assessment.",
  },
  {
    step: "02",
    title: "Keyword Research",
    description: "Identifying high-intent commercial keywords, search volume trends, and competitor SERP position gaps.",
  },
  {
    step: "03",
    title: "On-Page Optimization",
    description: "Optimizing page content, meta titles, heading structures, internal links, and keyword density.",
  },
  {
    step: "04",
    title: "Technical Improvements",
    description: "Fixing crawl errors, page speed bottlenecks, mobile layout bugs, schema markup, and sitemaps.",
  },
  {
    step: "05",
    title: "Authority Building",
    description: "Earning high-quality UK backlinks, local citation building, and Google Business Profile optimization.",
  },
  {
    step: "06",
    title: "Monitoring & Reporting",
    description: "Tracking daily keyword rankings, organic traffic volume, conversion rates, and monthly ROI reports.",
  },
];

export default function SEOServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative border-b border-[#E5E7EB] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/60 blur-3xl opacity-30 rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInSlideUp}
              className="lg:col-span-7 flex flex-col items-start space-y-6"
            >
              <Link
                href="/services"
                className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors"
              >
                ← Back to All Services
              </Link>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Organic Search Dominance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                SEO Services in Oxfordshire
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Data-driven search engine optimization encompassing on-page, off-page, technical, and local Oxford SEO to help your business dominate search rankings.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <motion.div whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
                  >
                    <span>Get Free SEO Audit</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B132B] hover:text-[#2563EB] bg-slate-100 hover:bg-slate-200 border border-[#E5E7EB] rounded-full transition-all duration-200 w-full sm:w-auto"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E5E7EB] w-full text-xs sm:text-sm text-[#64748B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Technical &amp; On-Page</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Local Oxford Map Pack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>White-Hat Link Building</span>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-slate-50"
              >
                <Image
                  src="/images/digital-marketing-about.webp"
                  alt="Search Engine Optimization SEO Services Oxfordshire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Dominating Organic Search Rankings in Oxfordshire &amp; Beyond
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              When prospective clients search for your services on Google, appearing on page one is critical. At Techno Trade Solutions, we deliver comprehensive search engine optimization (SEO) strategies designed to increase organic visibility, drive qualified search traffic, and convert visitors into long-term clients.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Our SEO specialists optimize every aspect of your online presence—from technical crawl audits and Core Web Vitals site speed to hyper-local Oxford map pack rankings and high-authority link building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE PILLARS */}
      <section className="py-16 lg:py-24 bg-[#EFF6FF]/40 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>SEO Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Search Engine Optimization Services
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {seoPillars.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardItemVariant}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B132B] mb-3">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>SEO Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our 6-Step SEO Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoProcess.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm relative">
                <div className="text-2xl font-black text-[#2563EB] mb-3">{step.step}</div>
                <h3 className="text-base font-bold text-[#0B132B] mb-2">{step.title}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC SERVICE CTA */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold">
                Free SEO Audit
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Claim Your Free Technical SEO Audit Today
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Discover why your site isn&apos;t ranking #1 on Google and receive a step-by-step organic growth roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+447354820513"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-colors w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 mr-2 text-[#3B82F6]" />
                Make a Call
              </a>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md transition-colors w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Why Techno Trade</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Why Choose Techno Trade for SEO?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">100% White-Hat Practices</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Strict adherence to Google Search Essentials ensuring long-term ranking growth without penalty risks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Oxfordshire Local Expertise</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Targeted local SEO strategies to conquer Google Maps 3-Pack and regional Oxford commercial queries.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Transparent Reporting</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Real-time Looker Studio dashboards tracking keyword movement, organic session growth, and lead metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4">{faq.question}</span>
                    <div className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#2563EB] text-white" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
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
