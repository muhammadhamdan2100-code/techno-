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
  Smartphone,
  CheckCircle2,
  Code2,
  Layers,
  Palette,
  Plug,
  ShieldCheck,
  Wrench,
  Cpu,
  Database,
  Cloud,
  CreditCard,
  BarChart3,
  Globe,
  Zap,
  Users,
  TrendingUp,
  Lock,
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
    question: "How long does it take to develop a mobile application?",
    answer:
      "Timelines depend on application complexity, feature set, and integration scope. Standard custom business applications typically take 6 to 12 weeks from initial discovery through design, development, testing, and deployment.",
  },
  {
    question: "Can you develop apps for both Android and iOS?",
    answer:
      "Yes. We develop mobile applications for both Android and iOS operating systems, using modern cross-platform development approaches to deliver native-grade performance across both platforms efficiently.",
  },
  {
    question: "Can you integrate APIs and third-party services into my app?",
    answer:
      "Yes. We specialize in connecting mobile applications with external APIs, CRM systems, cloud databases, secure payment gateways, notification engines, and existing enterprise software.",
  },
  {
    question: "Can you redesign or improve an existing mobile application?",
    answer:
      "Yes. We can evaluate your existing mobile app to upgrade its UI/UX design, resolve technical issues, optimize load speeds, and integrate modern feature enhancements.",
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer:
      "Yes. We offer structured post-launch maintenance and technical support packages to keep your mobile application updated, secure, and compatible with the latest OS versions.",
  },
];

export default function AppDevServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const servicesOfferings = [
    {
      number: "01",
      title: "Android App Development",
      description:
        "Custom Android applications designed for performance, usability and scalability.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "iOS App Development",
      description:
        "Modern iOS applications with polished interfaces and reliable performance.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Cross-Platform App Development",
      description:
        "Build applications that work across Android and iOS while reducing development complexity.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Custom Business Applications",
      description:
        "Applications designed around specific business processes, internal operations and customer requirements.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      number: "05",
      title: "UI/UX Design",
      description:
        "User-focused mobile interfaces that make applications simple, intuitive and engaging.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      number: "06",
      title: "API & Third-Party Integration",
      description:
        "Connect mobile applications with APIs, CRMs, payment systems, databases and other business platforms.",
      icon: <Plug className="w-6 h-6" />,
    },
    {
      number: "07",
      title: "App Testing & Quality Assurance",
      description:
        "Test applications for functionality, performance, usability and compatibility before deployment.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      number: "08",
      title: "App Maintenance & Support",
      description:
        "Ongoing updates, improvements, bug fixes and technical support after launch.",
      icon: <Wrench className="w-6 h-6" />,
    },
  ];

  const developmentSteps = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description:
        "Understand the business, target users, goals and application requirements.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Create the application structure, user flows and interface design.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "Develop the application and integrate required APIs, databases and third-party services.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Test the application, fix issues and prepare it for deployment.",
    },
  ];

  const techStackCategories = [
    { name: "Android", desc: "Native & Modern SDKs", icon: <Smartphone className="w-5 h-5 text-[#2563EB]" /> },
    { name: "iOS", desc: "Apple Ecosystem Builds", icon: <Globe className="w-5 h-5 text-[#2563EB]" /> },
    { name: "Cross-Platform", desc: "Unified Codebases", icon: <Layers className="w-5 h-5 text-[#2563EB]" /> },
    { name: "APIs", desc: "RESTful & GraphQL Sync", icon: <Plug className="w-5 h-5 text-[#2563EB]" /> },
    { name: "Cloud Services", desc: "Scalable Infrastructure", icon: <Cloud className="w-5 h-5 text-[#2563EB]" /> },
    { name: "Databases", desc: "Secure Data Storage", icon: <Database className="w-5 h-5 text-[#2563EB]" /> },
    { name: "Payment Integration", desc: "Stripe, Apple & Google Pay", icon: <CreditCard className="w-5 h-5 text-[#2563EB]" /> },
    { name: "Analytics", desc: "Performance & Usage Metrics", icon: <BarChart3 className="w-5 h-5 text-[#2563EB]" /> },
  ];

  const businessBenefits = [
    {
      title: "Better Customer Engagement",
      description:
        "Deliver personalized, interactive experiences that keep customers connected to your brand directly on their smartphones.",
      icon: <Users className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Improved Business Operations",
      description:
        "Automate internal workflows, track data in real time, and streamline team productivity with custom operational tools.",
      icon: <Zap className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Direct Customer Communication",
      description:
        "Reach customers instantly with push notifications, account updates, and real-time messaging alerts.",
      icon: <Phone className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Better Brand Experience",
      description:
        "Build brand trust with a sleek, responsive mobile application tailored specifically to your corporate identity.",
      icon: <Sparkles className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Increased Accessibility",
      description:
        "Offer customers 24/7 access to your services, product catalogs, and support channels anytime, anywhere.",
      icon: <Lock className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Scalable Digital Growth",
      description:
        "Expand your business digital footprint with a scalable software solution designed to grow as user volume increases.",
      icon: <TrendingUp className="w-5 h-5 text-[#2563EB]" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative border-b border-[#E5E7EB] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/60 blur-3xl opacity-30 rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy Column */}
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
                <span>Mobile Software Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                App Development Services
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                Build powerful, scalable and user-friendly mobile applications that help your business connect with customers, streamline operations and grow in the digital world.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <motion.div
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
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
                  <span>iOS &amp; Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Full QA &amp; Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column: Mobile App Layered Visual Mockup */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end" style={{ perspective: 1000 }}>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white"
              >
                {/* Phone Header Bar Mockup */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Mobile App UI Architecture</span>
                </div>

                {/* Central App Card UI Layers */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">iOS &amp; Android Apps</div>
                        <div className="text-xs text-slate-400">Native Performance &amp; UI</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold">
                      Cross-Platform
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
                        <Plug className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">API &amp; Backend Sync</div>
                        <div className="text-xs text-slate-400">RESTful / Database Cloud</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      Connected
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">QA Testing &amp; Store Launch</div>
                        <div className="text-xs text-slate-400">Apple App Store &amp; Google Play</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[10px] font-bold">
                      Deploy Ready
                    </span>
                  </div>
                </div>

                {/* Micro Badge */}
                <div
                  className="mt-6 p-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 border border-blue-400/40 text-center text-xs font-bold text-white shadow-lg"
                >
                  🚀 Tailored Mobile Applications for Enterprise Growth
                </div>
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
              <Cpu className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Professional App Development Services
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              At Techno Trade Solutions, we develop modern mobile applications tailored to business requirements, customer needs and operational workflows. In today&apos;s mobile-first ecosystem, a well-engineered application is more than just software—it is a direct bridge between your brand and your users.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Our development methodology prioritizes intuitive usability, robust performance, high scalability, enterprise-grade security, and responsive UI design across all device screen sizes. Whether you are seeking a customer-facing iOS and Android application or a bespoke internal business management app, we build custom solutions engineered to drive measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
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
              <span>What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our App Development Services
            </h2>
          </motion.div>

          {/* 8 Cards Grid (3 Desktop, 2 Tablet, 1 Mobile) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ perspective: 1000 }}
          >
            {servicesOfferings.map((item) => (
              <motion.div
                key={item.number}
                variants={cardItemVariant}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#2563EB] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B132B] mb-3 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DEVELOPMENT PROCESS */}
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
              <Code2 className="w-3.5 h-3.5" />
              <span>Structured Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our App Development Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-200 transition-colors relative"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY SECTION */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInSlideUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Modern Technology for Powerful Mobile Applications
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {techStackCategories.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex flex-col items-start space-y-2 hover:border-blue-200 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 mb-1">
                  {tech.icon}
                </div>
                <div className="text-sm font-bold text-[#0B132B]">{tech.name}</div>
                <div className="text-xs text-[#64748B]">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS BENEFITS */}
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
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Key Advantages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Why Invest in a Professional Mobile Application?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-3 hover:border-blue-200 transition-colors"
              >
                <div className="p-3 rounded-2xl bg-blue-50 w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B132B]">{benefit.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STRATEGIC SERVICE CTA */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-12 rounded-3xl bg-[#0B132B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold">
                Consultation &amp; Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Build Your Mobile Application?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Let&apos;s discuss your requirements and create a mobile application designed around your business goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10 shrink-0 w-full sm:w-auto">
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

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-[#0B132B] bg-white hover:bg-slate-100 rounded-full transition-colors w-full sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
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
              Why Choose Techno Trade for App Development?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Business-Focused Development</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Applications designed around real business requirements and customer needs.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">User-Centred Experience</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Clean and intuitive interfaces designed to make applications easy to use.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Scalable Solutions</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Build applications that can evolve as your business and user base grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
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
