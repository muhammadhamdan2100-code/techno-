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
  Code,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  Smartphone,
  Server,
  Palette,
  Search,
  Wrench,
  BarChart3,
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
    question: "What frameworks and technologies do you use for web development?",
    answer:
      "We specialize in modern React, Next.js, TypeScript, TailwindCSS, Node.js, headless CMS platforms, and high-performance web architectures tailored for scale.",
  },
  {
    question: "Will our website be fully mobile-responsive and fast-loading?",
    answer:
      "Yes. All websites are built mobile-first, achieving 90+ Core Web Vitals scores, sub-second load speeds, and clean accessibility markup.",
  },
  {
    question: "How long does a custom web development project take?",
    answer:
      "Standard corporate websites typically take 3 to 5 weeks from discovery to launch. Complex web applications or bespoke e-commerce platforms take 6 to 10 weeks depending on integration requirements.",
  },
  {
    question: "Do you build SEO-friendly web architectures?",
    answer:
      "Yes. On-page and technical SEO is built directly into our Next.js architecture—including server-side rendering (SSR), dynamic metadata, schema markup, clean sitemaps, and optimized site speed.",
  },
  {
    question: "Do you provide post-launch maintenance and updates?",
    answer:
      "Yes. We offer structured monthly maintenance and support retainers covering security updates, server monitoring, performance tuning, and technical updates.",
  },
];

const webCapabilities = [
  {
    title: "Professional Web Development",
    description:
      "Custom business websites built from scratch engineered for brand credibility, user engagement, and measurable ROI.",
    icon: <Code className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Front-End Development",
    description:
      "Interactive, ultra-responsive user interfaces created using React, Next.js, and TailwindCSS for smooth performance across all devices.",
    icon: <Globe className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Back-End Development",
    description:
      "Robust server logic, secure RESTful & GraphQL APIs, and cloud database architectures designed for maximum stability.",
    icon: <Server className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web software integrating seamless front-end design with enterprise back-end cloud platforms.",
    icon: <Layers className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "UI/UX Web Design",
    description:
      "Intuitive wireframes, visual prototypes, and conversion-focused user journeys that guide visitors toward purchase.",
    icon: <Palette className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Performance & Security",
    description:
      "Sub-second load times, 90+ Core Web Vitals performance, SSL encryption, DDOS protection, and regular security audits.",
    icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Modern Web Architecture",
    description:
      "Jamstack, Headless CMS (Sanity/Strapi), Server-Side Rendering (SSR), and serverless cloud deployment on Vercel & AWS.",
    icon: <Cpu className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Web Maintenance & Support",
    description:
      "Continuous server monitoring, regular security patches, performance tuning, and technical enhancements post-launch.",
    icon: <Wrench className="w-6 h-6 text-[#2563EB]" />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description:
      "Understanding business goals, target audience, brand positioning, and technical requirements.",
  },
  {
    step: "02",
    title: "UI/UX Wireframing & Design",
    description:
      "Creating interactive Figma prototypes, design systems, and responsive layouts tailored to your brand.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "Building clean, scalable Next.js & React codebases synced with APIs, CMS platforms, and databases.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "Rigorously testing speed, cross-device responsiveness, security, and deploying to high-speed cloud servers.",
  },
];

const techStack = [
  { name: "Next.js & React", desc: "Server-Side Rendering & Speed", icon: <Code className="w-5 h-5 text-[#2563EB]" /> },
  { name: "TypeScript", desc: "Type-Safe Robust Codebase", icon: <Layers className="w-5 h-5 text-[#2563EB]" /> },
  { name: "Tailwind CSS", desc: "Modern Responsive Styling", icon: <Palette className="w-5 h-5 text-[#2563EB]" /> },
  { name: "Node.js & APIs", desc: "High-Performance Backend", icon: <Server className="w-5 h-5 text-[#2563EB]" /> },
  { name: "Headless CMS", desc: "Sanity, Strapi & Contentful", icon: <Globe className="w-5 h-5 text-[#2563EB]" /> },
  { name: "Vercel & AWS", desc: "Global Cloud Infrastructure", icon: <Cpu className="w-5 h-5 text-[#2563EB]" /> },
  { name: "Core Web Vitals", desc: "Sub-Second Load Speeds", icon: <Zap className="w-5 h-5 text-[#2563EB]" /> },
  { name: "SEO Architecture", desc: "Rank Ready Code Markup", icon: <Search className="w-5 h-5 text-[#2563EB]" /> },
];

const businessBenefits = [
  {
    title: "Higher Conversion Rates",
    description:
      "Speed and clear UI/UX journeys turn casual website visitors into paying clients and qualified leads.",
    icon: <BarChart3 className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    title: "Top Google Rankings",
    description:
      "SEO-friendly HTML5 markup, fast rendering, and clean site structures boost organic search visibility.",
    icon: <Search className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    title: "Mobile-First Usability",
    description:
      "Flawless display across smartphones, tablets, laptops, and 4K desktop screens.",
    icon: <Smartphone className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Modern SSL protocols, encrypted databases, and secure headers protect client data.",
    icon: <Lock className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Modular code architectures designed to grow alongside your expanding business operations.",
    icon: <Zap className="w-5 h-5 text-[#2563EB]" />,
  },
  {
    title: "Zero Technical Debt",
    description:
      "Built with modern Next.js and TypeScript standards that eliminate clunky legacy software issues.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />,
  },
];

export default function WebDevServiceDetail() {
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
                <span>Next.js &amp; React Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                Web Development &amp; Design
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                High-performance custom web development, responsive UI/UX design, modern architecture, speed, security and conversion-focused experiences.
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
                  <span>Next.js &amp; React</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Responsive UI/UX</span>
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
                  alt="Web Development and Design Agency Oxfordshire"
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
              <Code className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              High-Performance Custom Web Development &amp; Design
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              At Techno Trade Solutions, we design and engineer custom, high-performance websites built with modern React, Next.js, and TypeScript architectures. In a digital market where user attention is fleeting, your website must load instantaneously, look stunning across all mobile screens, and guide visitors seamlessly toward conversion.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              From bespoke corporate web applications and custom e-commerce stores to headless CMS implementations, our Oxford web engineering team delivers fast, secure, and SEO-optimized web experiences tailored specifically to your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SERVICES / CAPABILITIES */}
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
              Our Web Development Capabilities
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {webCapabilities.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardItemVariant}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B132B] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
                    {item.description}
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
              <span>Structured Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Web Development Process
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

      {/* 5. TECH STACK */}
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
              Modern Web Architecture &amp; Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech, idx) => (
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
              <Zap className="w-3.5 h-3.5" />
              <span>Key Advantages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Business Benefits of Custom Next.js Web Engineering
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
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B132B] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold">
                Consultation &amp; Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Build Your Custom Website?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Let&apos;s discuss your web development requirements and create a high-performance site built for growth.
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
              Why Choose Techno Trade for Web Development?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Cutting-Edge Next.js Architecture</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We don&apos;t use bloated templates; we build custom Next.js websites engineered for sub-second speeds and 90+ Core Web Vitals scores.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Built-In SEO &amp; Conversion UI</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Every page is designed to rank high on Google search results and guide visitors toward clear call-to-action touchpoints.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">End-to-End Ownership &amp; Support</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                From initial wireframes to post-launch cloud maintenance, we provide full support and complete code ownership.
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
