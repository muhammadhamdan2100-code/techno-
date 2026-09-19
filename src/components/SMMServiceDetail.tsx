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
  Share2,
  Sparkles,
  Users,
  BarChart2,
  Target,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  MessageSquare,
  Video,
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
    question: "Which social media channels do you manage?",
    answer:
      "We manage Instagram, Facebook, LinkedIn, TikTok, X (formerly Twitter), and Pinterest tailored to your B2B or B2C target audience.",
  },
  {
    question: "What does your monthly social media management service include?",
    answer:
      "Services include monthly content calendar planning, custom graphic design, short-form video reels, caption copywriting, hashtag strategy, scheduled publishing, community interaction, and performance analytics.",
  },
  {
    question: "Will you create custom graphic assets and video reels for our brand?",
    answer:
      "Yes. Our in-house creative studio designs custom static graphics, animated carousels, and short-form video reels aligned with your visual brand identity.",
  },
  {
    question: "Do you manage organic social content and paid social advertising together?",
    answer:
      "Yes. Combining organic brand storytelling with targeted paid social ad campaigns across Meta, LinkedIn, and TikTok creates a complete full-funnel customer acquisition engine.",
  },
  {
    question: "How do we review and approve social posts before publishing?",
    answer:
      "All graphics, video reels, and copy are uploaded to an interactive preview content calendar for your review and approval prior to publication.",
  },
];

const smmModules = [
  {
    title: "Social Media Strategy",
    description:
      "Custom brand positioning, audience demographic profiling, competitive analysis, and multi-channel content blueprints.",
    icon: <Share2 className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Content Planning & Creation",
    description:
      "Monthly editorial calendars, graphic design, motion carousels, and engaging caption copy tailored to each platform.",
    icon: <Sparkles className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Short-Form Video Production",
    description:
      "Creating viral TikToks, Instagram Reels, and YouTube Shorts that capture attention and drive organic algorithm reach.",
    icon: <Video className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Social Media Management",
    description:
      "Scheduled multi-platform publishing, profile optimization, bio link trees, and active social listening.",
    icon: <Globe className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Community Engagement",
    description:
      "Active comment moderation, direct message response management, and proactive customer relationship building.",
    icon: <MessageSquare className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Paid Social Advertising",
    description:
      "Laser-targeted paid ad campaigns on Meta (Facebook/Instagram), LinkedIn, and TikTok engineered for lead conversion and sales.",
    icon: <Target className="w-6 h-6 text-[#2563EB]" />,
  },
  {
    title: "Performance Analytics & ROI",
    description:
      "Monthly reporting tracking engagement rates, follower growth, website click-throughs, and paid ad attribution.",
    icon: <BarChart2 className="w-6 h-6 text-[#2563EB]" />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brand Audit & Strategy",
    description: "Analyzing current social channels, defining target buyer personas, and setting engagement KPIs.",
  },
  {
    step: "02",
    title: "Content Calendar Creation",
    description: "Designing monthly graphics, writing captions, filming reels, and organizing the publishing schedule.",
  },
  {
    step: "03",
    title: "Client Approval",
    description: "Reviewing all creative assets and copy with your team in an interactive preview dashboard.",
  },
  {
    step: "04",
    title: "Publishing & Community Care",
    description: "Publishing posts at peak audience times and actively moderating comments and DMs.",
  },
  {
    step: "05",
    title: "Paid Social Scaling",
    description: "Launching targeted ad sets to amplify top-performing organic posts and drive website conversions.",
  },
  {
    step: "06",
    title: "Reporting & Refinement",
    description: "Monthly analytics reviews to double down on highest-performing content formats and channels.",
  },
];

export default function SMMServiceDetail() {
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
                <span>Multi-Platform Social Growth</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-[1.15]">
                SMM (Social Media Marketing)
              </h1>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">
                Engage your target audience across Facebook, Instagram, LinkedIn, TikTok, and X with custom social content, community management, and targeted ads.
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
                  <span>Meta, LinkedIn &amp; TikTok</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Reels &amp; Graphic Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Paid Social Retargeting</span>
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
                  src="/images/blog-1.webp"
                  alt="Social Media Marketing Agency Oxfordshire"
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
              <Share2 className="w-3.5 h-3.5" />
              <span>Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Build Brand Authority Across Every Social Channel
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              Social media is the digital storefront of your business reputation. Today&apos;s buyers research brands on Instagram, LinkedIn, Facebook, and TikTok before making purchasing decisions. At Techno Trade Solutions, we deliver end-to-end social media management that builds active communities, elevates brand credibility, and drives consistent website traffic.
            </p>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
              We combine eye-catching graphic design, short-form video reels, strategic caption copywriting, and community management with high-ROI paid social advertising to transform your social presence into a reliable customer acquisition channel.
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
              <span>Social Media Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Social Media Marketing Capabilities
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardStaggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {smmModules.map((item, idx) => (
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
              <span>Social Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Our Social Media Management Process
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
                Ready to Grow Your Brand Across Social Media?
              </h2>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                Contact our social media team to request a customized content plan and audience growth strategy.
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
              Why Choose Techno Trade for Social Media Marketing?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">01</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Custom Creative Assets</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                High-quality graphic designs, video reels, and carousels crafted specifically for your brand identity.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">02</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Integrated Paid Social Scaling</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Combining organic community management with targeted paid ads to convert followers into paying customers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="text-2xl font-black text-[#2563EB]">03</div>
              <h3 className="text-xl font-bold text-[#0B132B]">Full Approval Workflow</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                You review and approve every post, graphic, and video before it goes live on your accounts.
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
