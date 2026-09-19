"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Headphones,
  MessageSquare,
  Ticket,
  Clock,
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle2,
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
    question: "What is included in Techno Trade's Inbound Customer Support service?",
    answer:
      "Our inbound support service includes 24/7 live agent phone coverage, multi-channel helpdesk ticket management (email, live chat, social DM), customer satisfaction (CSAT) optimization, dedicated account leads, and seamless CRM integrations.",
  },
  {
    question: "How quickly can your agents be onboarded for our UK business?",
    answer:
      "Onboarding typically takes 5 to 10 business days. We map your product workflows, create customized knowledge bases, and conduct rigorous scenario testing before going live.",
  },
  {
    question: "How do you measure support team performance and quality?",
    answer:
      "We track First Response Time (FRT), Average Handling Time (AHT), First Contact Resolution (FCR), and overall CSAT scores. Weekly and monthly analytics reports keep you fully informed.",
  },
  {
    question: "Can your agents handle technical or complex inquiries?",
    answer:
      "Yes. Our agents follow custom escalation protocols. Tier 1 and Tier 2 inquiries are resolved directly, while complex specialized issues are routed seamlessly to your internal technical team.",
  },
  {
    question: "Is your inbound support suitable for small and medium UK businesses?",
    answer:
      "Flexible coverage options range from after-hours coverage to full 24/7 dedicated support teams, allowing scaling UK businesses to deliver enterprise-grade customer service cost-effectively.",
  },
];

export default function InboundSupportServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const supportModules = [
    {
      title: "Professional Inbound Customer Support",
      description:
        "Dedicated inbound customer care engineered to represent your brand professionally across all touchpoints.",
      icon: <Headphones className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Live Chat Support",
      description:
        "Real-time website chat support that answers customer questions instantly and assists online sales checkouts.",
      icon: <MessageSquare className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Call Support",
      description:
        "Professional phone answering, toll-free lines, inbound call routing, and order taking handled by trained support specialists.",
      icon: <Phone className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Email & Helpdesk Management",
      description:
        "Ticket queue triage, email resolution, knowledge base management, and CRM ticketing software synchronization.",
      icon: <Ticket className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Omnichannel Customer Service",
      description:
        "Unified inbox management linking email, live chat, WhatsApp, and social media direct messages into one platform.",
      icon: <Layers className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Customer Query Management",
      description:
        "Structured escalation paths, Tier 1/2 query resolution, refund processing, and customer retention workflows.",
      icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Support Analytics & CSAT Tracking",
      description:
        "Real-time reporting on First Contact Resolution (FCR), handling times, ticket volumes, and CSAT ratings.",
      icon: <BarChart3 className="w-6 h-6 text-[#2563EB]" />,
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
                <span>Customer Care &amp; Helpdesk</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                Inbound Customer Support Services
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Professional 24/7 inbound customer service, omni-channel helpdesk management, live chat, and call support tailored for growing UK businesses.
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
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Multi-Channel Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>CSAT Optimization</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white w-full max-w-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-blue-400">Support Desk Queue</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Live Coverage
                  </span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Live Chat &amp; Phone</div>
                      <div className="text-[10px] text-slate-400">Sub-minute Response Time</div>
                    </div>
                    <span className="text-emerald-400 font-mono">98.5% FCR</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Helpdesk Ticketing</div>
                      <div className="text-[10px] text-slate-400">Email &amp; Social DMs</div>
                    </div>
                    <span className="text-blue-400 font-mono">CSAT 4.9/5</span>
                  </div>
                </div>
              </div>
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
              <Headphones className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Elevate Customer Loyalty With Enterprise-Grade Inbound Support
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Customer experience is the ultimate brand differentiator. Slow email responses, missed phone calls, or unmonitored live chats damage customer trust and reduce customer lifetime value. At Techno Trade Solutions, we provide dedicated inbound customer support services designed for growing UK businesses.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Our trained support teams handle incoming phone inquiries, website live chats, email tickets, and social media queries with rapid response times and strict SLA quality benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
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
              <span>Support Channels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Inbound Support Services
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {supportModules.map((item, idx) => (
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

      {/* 4. STRATEGIC SERVICE CTA */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold">
                Consultation &amp; Setup
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Upgrade Your Customer Service Experience?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Speak with our customer support leads to design a custom omnichannel helpdesk strategy for your business.
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

      {/* 5. WHY CHOOSE US */}
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
              Why Choose Techno Trade for Customer Support?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Fast Response Times</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Industry-leading SLA benchmarks ensuring sub-minute live chat and phone pick-up speeds.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">UK Quality Standards</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Trained native-level support specialists mapped directly to your brand voice and product workflows.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Omnichannel Intelligence</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Unified ticketing synced directly with your CRM and backend e-commerce databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
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
