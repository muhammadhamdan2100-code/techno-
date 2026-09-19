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
  Users,
  Layers,
  Database,
  Plug,
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle2,
  GitBranch,
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
    question: "Why should my business invest in a custom CRM solution?",
    answer:
      "A custom CRM centralizes customer interactions, automates sales follow-up sequences, enhances sales team productivity, and provides real-time pipeline reporting tailored specifically to your sales model.",
  },
  {
    question: "Can you migrate data from our current spreadsheets or legacy CRM?",
    answer:
      "Yes. We execute seamless end-to-end data migration, clean up duplicate records, establish data relationships, and set up user permission roles with zero downtime.",
  },
  {
    question: "Which CRM platforms do you specialize in implementing and customizing?",
    answer:
      "We implement and customize leading CRM platforms like HubSpot, Salesforce, Pipedrive, and Zoho, as well as building custom bespoke CRM architectures for specialized industry requirements.",
  },
  {
    question: "How long does CRM implementation and team onboarding take?",
    answer:
      "Standard CRM configuration and workflow automation setup takes 2 to 4 weeks. Custom enterprise implementations with deep API integrations take 4 to 8 weeks including staff training.",
  },
  {
    question: "Can CRM platforms integrate with our website and email marketing?",
    answer:
      "Yes. We automatically sync incoming web form leads, live chat conversations, phone call logs, and email marketing software directly into your CRM database.",
  },
];

export default function CRMServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const crmFeatures = [
    {
      title: "Smart CRM Solutions",
      description:
        "Centralized Customer Relationship Management platforms tailored to your business model, customer journey, and sales operations.",
      icon: <Users className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Lead Management",
      description:
        "Automated lead capture, source attribution, lead scoring, and instant notification routing for your sales reps.",
      icon: <TrendingUp className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Sales Pipeline Automation",
      description:
        "Visual deal stages, automated task creation, deal probability tracking, and automated quote generation.",
      icon: <GitBranch className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Customer Data Management",
      description:
        "Unified customer profiles, interaction history, document attachments, and GDPR-compliant permission management.",
      icon: <Database className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Automated Lead Nurturing",
      description:
        "Multi-step automated email & SMS nurturing sequences designed to move prospects through the sales funnel.",
      icon: <Zap className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "CRM Analytics & Reporting",
      description:
        "Real-time sales velocity metrics, sales rep performance leaderboards, and revenue forecasting dashboards.",
      icon: <BarChart3 className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Third-Party Integrations",
      description:
        "Connect your CRM with email providers (Outlook/Gmail), VoIP phones, accounting software (Xero/QuickBooks), and website forms.",
      icon: <Plug className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Audit existing sales processes, lead sources, customer touchpoints, and software requirements.",
    },
    {
      step: "02",
      title: "CRM Configuration",
      description: "Setup custom deal stages, pipeline rules, lead scoring formulas, and user permission groups.",
    },
    {
      step: "03",
      title: "Data Integration",
      description: "Migrate legacy customer data, clean duplicate records, and connect website forms & email gateways.",
    },
    {
      step: "04",
      title: "Automation",
      description: "Configure automated email sequences, task reminders, escalation alerts, and analytics reports.",
    },
    {
      step: "05",
      title: "Testing & Training",
      description: "Conduct thorough workflow testing and train your sales and support teams for maximum adoption.",
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
                <span>Sales Automation Platforms</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                Smart CRM Solutions
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Smart Customer Relationship Management platforms, automated lead nurturing funnels, and integrated customer data platforms to maximize retention.
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
                  <span>Pipeline Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Data Migration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Lead Nurturing</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white w-full max-w-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-blue-400">CRM Sales Pipeline</span>
                  <span className="text-xs font-bold text-emerald-400">Live Funnel</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Lead Capture</div>
                      <div className="text-[10px] text-slate-400">Website &amp; Ad Forms</div>
                    </div>
                    <span className="text-blue-400 font-mono">100% Auto-Sync</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Nurture Sequence</div>
                      <div className="text-[10px] text-slate-400">Multi-Touch Email &amp; SMS</div>
                    </div>
                    <span className="text-emerald-400 font-mono">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Deal Closure Analytics</div>
                      <div className="text-[10px] text-slate-400">Revenue Forecasting</div>
                    </div>
                    <span className="text-sky-400 font-mono">Real-Time</span>
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
              <Users className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Accelerate Sales Growth With Tailored CRM Platforms
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Without a centralized CRM system, valuable sales leads slip through the cracks, follow-up times slow down, and customer communication becomes fragmented. At Techno Trade Solutions, we design, implement, and automate smart CRM platforms built around your sales pipeline.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Our CRM engineering team integrates lead capture forms, email marketing automation, customer support helpdesks, and sales forecasting analytics so your team can focus on closing deals and retaining long-term clients.
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
              <span>CRM Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our CRM Solution Offerings
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {crmFeatures.map((item, idx) => (
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
              <span>Implementation Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our CRM Implementation Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
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
                Consultation &amp; Setup
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Streamline Your Sales Pipeline?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Contact our CRM specialists today to design an automated lead capture and sales pipeline system for your business.
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
              Why Choose Techno Trade for CRM Solutions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Tailored Sales Funnels</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We build deal stages and lead scoring rules aligned with your real-world sales model.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Seamless Data Migration</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Clean migration from legacy spreadsheets, email inboxes, or outdated databases with zero data loss.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Full Team Training</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Hands-on staff training and documentation to guarantee 100% internal adoption.
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
