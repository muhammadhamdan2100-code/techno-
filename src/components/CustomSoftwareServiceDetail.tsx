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
  Cpu,
  Layers,
  Database,
  Cloud,
  Plug,
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle2,
  Settings,
  Workflow,
  LayoutDashboard,
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
    question: "What is customizable software and how does it benefit my business?",
    answer:
      "Customizable software is engineered specifically around your unique operational workflows. Unlike rigid off-the-shelf software with recurring per-seat fees, bespoke software provides total flexibility, ownership, and seamless alignment with your business processes.",
  },
  {
    question: "Can custom software integrate with our existing IT tools?",
    answer:
      "Yes. Our software solutions are built with secure RESTful APIs and database connectors to seamlessly synchronize with your existing ERP, CRM, accounting software, and cloud platforms.",
  },
  {
    question: "How do you ensure data security and compliance in custom software?",
    answer:
      "Security is engineered into every layer—including role-based access control (RBAC), end-to-end data encryption, automated backup routines, and compliance with UK GDPR and data protection standards.",
  },
  {
    question: "What is the typical development timeline for custom enterprise software?",
    answer:
      "Development timelines vary by system complexity. MVP automation engines take 4 to 8 weeks, while full enterprise web platforms and ERP custom tools take 8 to 16 weeks including testing.",
  },
  {
    question: "Do you provide ongoing technical support and updates after deployment?",
    answer:
      "Yes. We offer continuous software maintenance, cloud infrastructure monitoring, bug resolution, and feature expansion retainers to keep your systems running smoothly.",
  },
];

export default function CustomSoftwareServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const softwareCapabilities = [
    {
      title: "Custom Software Development",
      description:
        "Bespoke web applications, internal tools, and enterprise platforms built specifically for your unique operational requirements.",
      icon: <Cpu className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Business Process Automation",
      description:
        "Automate repetitive manual tasks, data entry, approval workflows, and inter-departmental communications.",
      icon: <Workflow className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Enterprise Software",
      description:
        "Scalable enterprise platforms engineered to handle large volume data management, multi-user permissions, and complex logic.",
      icon: <Settings className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Custom Dashboards",
      description:
        "Real-time executive analytics dashboards providing visual reporting, KPI tracking, and operational visibility.",
      icon: <LayoutDashboard className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "API & System Integration",
      description:
        "Connect disparate legacy tools, databases, and third-party SaaS platforms through custom REST and GraphQL APIs.",
      icon: <Plug className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: "Cloud-Based Solutions",
      description:
        "High-availability cloud architectures built on AWS/Azure, providing secure 24/7 access from any location.",
      icon: <Cloud className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Map existing business workflows, identify pain points, and define system specifications.",
    },
    {
      step: "02",
      title: "System Architecture",
      description: "Design database schemas, user roles, security protocols, and integration pathways.",
    },
    {
      step: "03",
      title: "Development",
      description: "Agile software development with regular sprint demos and iterative code reviews.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous QA testing, user acceptance testing (UAT), data migration, and cloud launch.",
    },
    {
      step: "05",
      title: "Support & Optimization",
      description: "Post-launch training, SLA support, server health monitoring, and feature upgrades.",
    },
  ];

  const businessBenefits = [
    {
      title: "Increased Efficiency",
      description: "Automate manual tasks and streamline cross-team handoffs to boost operational productivity.",
      icon: <Zap className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Reduced Manual Work",
      description: "Eliminate repetitive data entry errors and spreadsheet dependencies.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Better Data Management",
      description: "Centralize business records in a secure, structured database with audit logs.",
      icon: <Database className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Improved Operational Visibility",
      description: "Access real-time business performance analytics and customizable reporting tools.",
      icon: <BarChart3 className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      title: "Scalable Infrastructure",
      description: "Software that easily scales as your business volume and user headcount expand.",
      icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
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
                <span>Bespoke Enterprise Software</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                Customizable Software Solutions
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Tailor-made enterprise software solutions, automation platforms, and bespoke tools engineered to streamline your specific business operations.
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
                  <span>Workflow Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Cloud Storage</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white w-full max-w-md space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-blue-400">Software Architecture</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Custom Workflows</span>
                    <span className="text-emerald-400 font-mono">Automated</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">API Sync Engine</span>
                    <span className="text-blue-400 font-mono">REST / GraphQL</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Database Security</span>
                    <span className="text-sky-400 font-mono">RBAC Encrypted</span>
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
              <Cpu className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Bespoke Software Engineered Around Your Business
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Off-the-shelf software often forces businesses to compromise their unique operational processes to fit rigid templates. At Techno Trade Solutions, we design and develop customizable software solutions engineered specifically around your workflow requirements.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              From enterprise automation engines and custom analytics dashboards to legacy database migrations and multi-platform API integrations, our software development team delivers secure, scalable applications that boost productivity and eliminate operational friction.
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
              <span>Software Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Custom Software Capabilities
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {softwareCapabilities.map((item, idx) => (
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
              <Workflow className="w-3.5 h-3.5" />
              <span>Development Lifecycle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Software Development Process
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

      {/* 5. BENEFITS */}
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
              <Zap className="w-3.5 h-3.5" />
              <span>Business ROI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Why Choose Custom Software Over Off-The-Shelf?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-50 w-fit mb-2">{benefit.icon}</div>
                <h3 className="text-base font-bold text-[#0B132B]">{benefit.title}</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC SERVICE CTA */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold">
                Consultation &amp; Architecture
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Automate Your Business Operations?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Contact our software engineering team to schedule a technical discovery call and explore custom software tailored for your business.
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

      {/* 7. WHY CHOOSE US */}
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
              Why Choose Techno Trade for Software Development?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Workflow-First Engineering</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We study your actual operational workflows to write software that fits seamlessly into your daily business.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Zero Recurring License Fees</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Own your software architecture without being trapped in per-user monthly SaaS subscription costs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Enterprise Security &amp; SLA</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Bank-grade encryption, automated cloud backups, GDPR compliance, and dedicated technical SLAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
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
