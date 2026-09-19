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
  TrendingUp,
  Target,
  Users,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BarChart3,
  Calendar,
  Layers,
  Search,
  Filter,
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
    question: "What does your Outbound Sales Development service cover?",
    answer:
      "We provide end-to-end B2B sales development, including Ideal Customer Profile (ICP) definition, verified prospect sourcing, multi-touch cold email and phone outreach, lead qualification, and booking pre-qualified meetings directly onto your sales team's calendar.",
  },
  {
    question: "How are sales leads qualified before setting appointments for our team?",
    answer:
      "We apply strict BANT/CHAMP qualification criteria based on your standards—ensuring decision-makers possess budget, authority, explicit business need, and purchase timeline before scheduling appointments.",
  },
  {
    question: "How long does it take to see qualified sales meetings booked?",
    answer:
      "Prospect research and campaign setup begin during week 1. Most clients start receiving qualified B2B appointment bookings by week 2 to 3 after campaign launch and inbox warming.",
  },
  {
    question: "What tools and tech stack do you use for outbound campaigns?",
    answer:
      "We utilize verified prospect databases, custom email deliverability infrastructure, sequence automation engines, and CRM synchronization tools integrated with HubSpot, Salesforce, or Pipedrive.",
  },
  {
    question: "What is required from our internal team during the outbound campaign?",
    answer:
      "Your team simply approves target ICP criteria and email scripts, then attends the pre-qualified meetings booked directly onto your sales reps' calendars.",
  },
];

export default function OutboundSalesServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const salesModules = [
    {
      title: "Outbound Sales Development",
      description:
        "Dedicated SDR teams and automated outreach pipelines designed to generate high-intent B2B sales leads.",
      icon: <TrendingUp className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "B2B Lead Generation",
      description:
        "Verified decision-maker contact data sourcing across UK target industries, job titles, and company sizes.",
      icon: <Search className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Cold Outreach Campaigns",
      description:
        "Multi-touch cold email and phone sequence engineering built on deliverability best practices and personalized messaging.",
      icon: <Mail className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Appointment Setting",
      description:
        "Booking qualified B2B discovery meetings directly onto your account executives' Google or Outlook calendars.",
      icon: <Calendar className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Lead Qualification",
      description:
        "Rigorous BANT qualification criteria ensuring decision-makers possess budget, need, authority, and urgency.",
      icon: <Filter className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Sales Follow-Up & Nurturing",
      description:
        "Multi-channel follow-up sequences that keep prospects engaged until they are ready to buy.",
      icon: <Target className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Pipeline Acceleration",
      description:
        "CRM synchronization and real-time deal stage tracking to compress your B2B sales cycle.",
      icon: <BarChart3 className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Target Market Research",
      description: "Define Ideal Customer Profiles (ICP), target verticals, decision-maker personas, and value propositions.",
    },
    {
      step: "02",
      title: "Prospect Identification",
      description: "Source and verify decision-maker contact details, company sizes, and tech stacks.",
    },
    {
      step: "03",
      title: "Outreach Execution",
      description: "Launch multi-channel email and phone sequences with personalized messaging hooks.",
    },
    {
      step: "04",
      title: "Qualification",
      description: "Engage prospects, answer initial questions, and verify budget, authority, and timeline criteria.",
    },
    {
      step: "05",
      title: "Appointment Setting",
      description: "Schedule qualified discovery calls directly onto your internal sales reps' calendars.",
    },
    {
      step: "06",
      title: "Pipeline Follow-Up",
      description: "Track call outcomes, optimize copy performance, and nurture deferred prospects.",
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
                <span>B2B Sales Growth</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                Outbound Sales Development Services
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Results-focused outbound sales development, cold outreach campaigns, B2B appointment setting, and pipeline acceleration.
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
                  <span>B2B Lead Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Verified Prospects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Calendar Bookings</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white w-full max-w-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-blue-400">Outbound Sales Funnel</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Active SDR Engine
                  </span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Target ICP Prospects</div>
                      <div className="text-[10px] text-slate-400">Verified B2B Decision-Makers</div>
                    </div>
                    <span className="text-blue-400 font-mono">Verified List</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">BANT Lead Qualification</div>
                      <div className="text-[10px] text-slate-400">Budget, Need &amp; Authority Verified</div>
                    </div>
                    <span className="text-emerald-400 font-mono">Pre-Qualified</span>
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
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Scale B2B Revenue With Data-Driven Outbound Sales
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Waiting for inbound leads is not enough to hit aggressive revenue targets. At Techno Trade Solutions, our outbound sales development team executes targeted B2B prospect sourcing, cold outreach campaigns, and lead qualification to book qualified meetings directly onto your sales reps&apos; calendars.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              We build custom outreach sequences utilizing verified business contact data, deliverability protection infrastructure, and personalized value messaging to ensure your company connects with real decision-makers.
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
              <span>Sales Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Outbound Sales Capabilities
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {salesModules.map((item, idx) => (
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
              <span>Outbound Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Outbound Sales Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Consultation &amp; Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Fill Your Sales Calendar With B2B Prospects?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Speak with our outbound sales leads to build a predictable B2B sales pipeline for your business.
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
              Why Choose Techno Trade for Outbound Sales?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Verified B2B Prospect Data</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We source and verify active decision-maker contact details to eliminate bounced emails and wrong numbers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Strict BANT Qualification</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Only prospects with budget, need, authority, and timeline are booked onto your sales team&apos;s calendar.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Predictable Sales Pipeline</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Consistent monthly appointment volumes that keep your sales reps focused on closing deals.
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
