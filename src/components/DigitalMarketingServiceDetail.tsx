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
  TrendingUp,
  Sparkles,
  Search,
  Target,
  Share2,
  FileText,
  BarChart3,
  Users,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
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
    question: "What is included in Digital Marketing & Management?",
    answer:
      "Our digital marketing management services combine search engine optimization (SEO), paid search and social ads (PPC), strategic content creation, brand positioning, and conversion rate optimization (CRO) into a cohesive growth engine for your business.",
  },
  {
    question: "How do you measure campaign performance and ROI?",
    answer:
      "We track transparent KPIs including Cost Per Acquisition (CPA), conversion rates, organic rank growth, Return on Ad Spend (ROAS), and customer lifetime value via real-time analytics dashboards.",
  },
  {
    question: "Can you tailor a digital marketing strategy specifically for Oxford businesses?",
    answer:
      "Yes. We specialize in local Oxfordshire and UK-wide market dynamics, tailoring audience segmentation, local search visibility, and messaging to connect with your target demographic.",
  },
  {
    question: "How quickly will we see results from our digital marketing campaign?",
    answer:
      "Paid advertising (PPC) and social campaigns generate immediate traffic and conversions within 24 to 48 hours, while organic strategies like SEO and content marketing compound steadily over 3 to 6 months.",
  },
  {
    question: "Do we get a dedicated digital marketing account manager?",
    answer:
      "Yes. Every client is assigned a dedicated UK account lead who manages campaign execution, sends weekly updates, and conducts monthly strategic review calls.",
  },
];

export default function DigitalMarketingServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const marketingPillars = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Comprehensive market analysis, audience positioning, and multi-channel growth blueprints designed to maximize digital ROI.",
      icon: <TrendingUp className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "SEO & Organic Growth",
      description:
        "Technical search audits, strategic keyword targeting, on-page optimization, and authority link building to dominate SERP rankings.",
      icon: <Search className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "PPC Advertising",
      description:
        "Precision-targeted campaigns across Google Ads, Microsoft Bing, and Meta Ads engineered to drive instant high-intent traffic.",
      icon: <Target className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Social Media Management",
      description:
        "End-to-end social media strategy, visual asset design, community interaction, and paid social scaling across key social networks.",
      icon: <Share2 className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Content Marketing",
      description:
        "High-converting blog articles, landing page copy, press releases, and brand storytelling that engage prospects and boost SEO.",
      icon: <FileText className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Brand Management",
      description:
        "Consistent brand messaging, online reputation management, visual identity alignment, and customer trust building.",
      icon: <Globe className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Real-time Looker Studio dashboards, multi-touch attribution modelling, and data-driven insights to refine marketing spend.",
      icon: <BarChart3 className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Lead Generation",
      description:
        "High-converting lead magnets, landing page optimization, and lead capture funnels built to transform traffic into qualified prospects.",
      icon: <Users className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "In-depth analysis of your business goals, target audience, competitive landscape, and historical marketing data.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Crafting a customized multi-channel roadmap with clear KPIs, campaign budgets, content calendars, and channel tactics.",
    },
    {
      step: "03",
      title: "Campaign Execution",
      description:
        "Launching targeted search ads, organic SEO optimizations, social campaigns, and high-converting landing pages.",
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      description:
        "Continuous A/B testing, bid management, CRO tweaks, and transparent monthly performance reporting.",
    },
  ];

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
                <span>Full-Service Digital Agency</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                Digital Marketing &amp; Management
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Data-driven multi-channel marketing, SEO, PPC advertising, and strategic brand management engineered to accelerate online presence and revenue growth.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <motion.div whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
                  >
                    <span>Get Started</span>
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
                  <span>Multi-Channel Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Real-Time Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Oxfordshire Experts</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-slate-50"
              >
                <Image
                  src="/images/digital-marketing-about.webp"
                  alt="Digital Marketing & Management Agency Oxfordshire"
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
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Integrated Digital Marketing &amp; Management Solutions
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              At Techno Trade Solutions, we believe digital marketing is not about isolated tactics—it is about orchestrating a unified growth engine. Our Oxfordshire-based agency combines search engine optimization (SEO), paid search advertising (PPC), social media engagement, high-quality content creation, and conversion rate optimization to turn website visitors into loyal customers.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Whether you are a scaling startup or an established enterprise in Oxford, our dedicated marketing managers utilize data-driven insights to refine audience targeting, optimize ad spend, and build strong brand authority across every digital touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CAPABILITIES / CORE PILLARS */}
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
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Digital Marketing Capabilities
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {marketingPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={cardItemVariant}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B132B] mb-2">{pillar.title}</h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
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
              <span>Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Digital Marketing Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm relative hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl font-black text-[#2563EB] mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#0B132B] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
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
                Consultation &amp; Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Accelerate Your Digital Marketing?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Contact Techno Trade Solutions today to request a comprehensive digital marketing audit and strategic growth plan.
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
              Why Choose Techno Trade for Digital Marketing?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Data-Driven ROI Focus</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We engineer campaigns targeting measurable revenue growth, lead generation, and lower Cost Per Acquisition.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Oxford Market Expertise</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Deep understanding of local Oxfordshire demographics, localized search intent, and regional UK business markets.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Full-Spectrum Management</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Seamless alignment between SEO, paid search, social media, landing pages, and conversion rate optimization under one roof.
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
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform ${
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
