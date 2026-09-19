"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  TrendingUp,
  Code,
  BarChart3,
} from "lucide-react";

// Clean, lightweight motion variants
const fadeInSlideUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: custom * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hero3DCardContainer: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const floatingCardChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroHeadingText = "Technotsl, best digital Marketing Agency in Oxfordshire UK";
const heroHeadingWords = heroHeadingText.split(" ");

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const currentTarget = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = currentTarget.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      const rotateX = -y * 4; // Max ±2deg
      const rotateY = x * 6;  // Max ±3deg
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      }
    });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden text-[#111827] flex items-center">
      {/* Optimized Background Decorative Elements without heavy filters */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/30 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-40 right-0 w-[450px] h-[450px] bg-sky-100/20 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInSlideUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs sm:text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <span>Welcome To Techno Trade</span>
            </motion.div>

            {/* Main Heading with Word Stagger Reveal */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={headingContainerVariants}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0B132B]"
            >
              {heroHeadingWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Three Exact Paragraphs */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInSlideUp}
              className="space-y-4 text-[#64748B] text-sm sm:text-base leading-relaxed"
            >
              <p>
                As a leading affordable <strong className="text-[#0B132B] font-semibold">digital marketing agency in Oxfordshire</strong>, <strong className="text-[#2563EB] font-semibold">Technotsl</strong> offers performance-driven SEO services designed to elevate your online presence. Our tailored digital strategies combine expert Google Ads management, advanced SEO optimization, and impactful social media marketing to help you reach your goals.
              </p>
              <p>
                As a trusted <strong className="text-[#0B132B] font-semibold">digital marketing agency Oxford</strong> businesses rely on, <strong className="text-[#2563EB] font-semibold">Technotsl</strong> blends creativity with data to craft campaigns that truly convert. Whether you need a results-focused <strong className="text-[#0B132B] font-semibold">Oxford web agency</strong> or a reliable <strong className="text-[#0B132B] font-semibold">digital marketing company in Oxfordshire</strong> to scale your brand online, we&apos;re here to help your business thrive.
              </p>
              <p>
                Whether you&apos;re a startup or an established brand, our <strong className="text-[#0B132B] font-semibold">digital marketing services in Oxford, UK,</strong> are designed to deliver real, measurable results. From SEO and PPC to social media and content creation, Techno Trade offers a full suite of digital marketing services tailored specifically for Oxford and Oxfordshire businesses.
              </p>
            </motion.div>

            {/* Hero CTA & Quick Highlights */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInSlideUp}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 group w-full sm:w-auto"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B132B] hover:text-[#2563EB] bg-slate-100 hover:bg-slate-200 border border-[#E5E7EB] rounded-full transition-all duration-200 w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInSlideUp}
              className="pt-4 flex flex-wrap sm:grid sm:grid-cols-3 gap-2.5 sm:gap-4 border-t border-[#E5E7EB] w-full text-xs sm:text-sm text-[#64748B]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Oxfordshire Based</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Tailored Strategy</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Optimized Layered 3D Visual Cards */}
          <div
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={cardRef}
              initial="hidden"
              animate="visible"
              variants={hero3DCardContainer}
              className="relative w-full max-w-lg lg:max-w-none min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] aspect-[4/3] rounded-3xl border border-[#E5E7EB] shadow-xl bg-white p-4 sm:p-6 transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Layer 0: Main Showcase Image Card */}
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E5E7EB] bg-slate-50 shadow-md"
              >
                <Image
                  src="/images/hero-handshake.jpg"
                  alt="Techno Trade Solutions Digital Marketing Agency Oxfordshire Professionals Handshake"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Layer 1: Badge Card - AI & Automation */}
              <motion.div
                variants={floatingCardChild}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-lg flex items-center gap-2.5 text-xs font-bold text-[#0B132B] pointer-events-none z-30"
              >
                <div className="p-1.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0B132B]">AI &amp; Automation</div>
                  <div className="text-[9px] text-[#64748B] font-medium">Smart Workflows</div>
                </div>
              </motion.div>

              {/* Layer 2: Badge Card - Digital Marketing */}
              <motion.div
                variants={floatingCardChild}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-lg flex items-center gap-2.5 text-xs font-bold text-[#0B132B] pointer-events-none z-30"
              >
                <div className="p-1.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0B132B]">Digital Marketing</div>
                  <div className="text-[9px] text-[#2563EB] font-bold">+140% ROAS Growth</div>
                </div>
              </motion.div>

              {/* Layer 3: Badge Card - Web Development */}
              <motion.div
                variants={floatingCardChild}
                className="absolute bottom-20 left-4 sm:bottom-24 sm:left-6 px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-lg flex items-center gap-2.5 text-xs font-bold text-[#0B132B] pointer-events-none z-30"
              >
                <div className="p-1.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0B132B]">Web Development</div>
                  <div className="text-[9px] text-[#64748B] font-medium">Next.js &amp; React</div>
                </div>
              </motion.div>

              {/* Layer 4: Badge Card - Analytics */}
              <motion.div
                variants={floatingCardChild}
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-xl text-[#0B132B] pointer-events-none z-30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 shrink-0">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#0B132B]">
                        Real-Time Analytics &amp; Insights
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#64748B] mt-0.5">
                        Data-driven strategy for Oxford businesses
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                      Live Results
                    </span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
