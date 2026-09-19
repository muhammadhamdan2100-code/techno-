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
  Palette,
  Sparkles,
  Layers,
  Layout,
  FileText,
  Monitor,
  Package,
  Presentation,
  CheckCircle2,
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

const faqs = [
  {
    question: "How does a professional graphic design agency like Technotsl work?",
    answer:
      "Technotsl works closely with your business to understand your brand vision, target market, and design goals. We follow a collaborative process starting with discovery and concept drafting, followed by feedback iterations and final delivery of high-resolution print- and web-ready assets.",
  },
  {
    question: "What are the main types of graphic design services you offer?",
    answer:
      "We offer comprehensive graphic design services including brand identity design, logo creation, social media graphics, print marketing collateral, product packaging, presentation pitch decks, and website UI/UX design.",
  },
  {
    question: "What is UI/UX design and why is it important for businesses?",
    answer:
      "UI (User Interface) design focuses on the visual aesthetic of digital products, while UX (User Experience) design optimizes how users interact with them. Good UI/UX design ensures intuitive navigation, higher conversion rates, and a satisfying user experience.",
  },
  {
    question: "Can you design visuals for social media ads and marketing campaigns?",
    answer:
      "Yes. We create tailored visual assets for paid and organic campaigns on Meta (Facebook/Instagram), LinkedIn, TikTok, Google Display Network, and email marketing software.",
  },
  {
    question: "Why choose Technotsl for graphic design services in Oxfordshire?",
    answer:
      "Technotsl combines local Oxfordshire market understanding with creative design expertise, fast turnaround times, multiple revision rounds, and full ownership rights of all final high-resolution vector and source files.",
  },
];

export default function GraphicDesignServiceDetail() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* 1. Hero / Intro */}
      <section className="pt-36 sm:pt-40 pb-16 bg-white relative border-b border-[#E5E7EB] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInSlideUp}>
            <Link
              href="/services"
              className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] mb-4 inline-flex items-center gap-1 transition-colors"
            >
              ← Back to All Services
            </Link>

            <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Design Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Graphic Design Services In Oxfordshire
            </h1>

            <p className="mt-5 text-[#64748B] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              At Techno Trade Solutions, we craft compelling, high-impact visual identities and graphic designs that help businesses in Oxfordshire stand out in competitive markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview & What We Offer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInSlideUp} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                <Palette className="w-3.5 h-3.5" />
                <span>Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B]">
                Graphic Design Services In Oxfordshire
              </h2>

              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                Visual communication is key to establishing brand credibility and attracting loyal customers. Our Oxfordshire graphic design studio offers comprehensive design services engineered to give your brand a modern, memorable edge across digital and traditional media.
              </p>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-[#0B132B] mb-2">
                  What We Offer –
                </h3>
                <p className="text-[#64748B] text-base leading-relaxed mb-4">
                  Our team of creative designers provides end-to-end graphic design solutions tailored to your brand's unique goals, ensuring visual consistency across print, digital, and social platforms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Logo Design",
                    "High-Resolution Files (JPEG, PNG, SVG, AI)",
                    "Unique & Creative Concepts",
                    "Multiple Revisions",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#EFF6FF] border border-blue-100">
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                      <span className="text-sm font-semibold text-[#0B132B]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInSlideUp} className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-md bg-slate-50">
                <Image
                  src="/images/digital-marketing-about.webp"
                  alt="Graphic Design Services In Oxfordshire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Strategic Service: Branding & Identity Design */}
      <section className="py-16 lg:py-24 bg-[#EFF6FF]/50 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Strategic Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
              Branding &amp; Identity Design
            </h2>
            <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
              Your visual identity is the bedrock of your business reputation. We build full-spectrum branding identity packages that establish credibility, resonance, and brand recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Brand Style Guides",
              "Color Palettes & Typography",
              "Business Cards & Stationery Design",
              "Corporate Identity Kits",
            ].map((point, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div className="p-3 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-4">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B132B]">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Design Categories: Social Media, Marketing, UI/UX */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media Graphics */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B]">Social Media Graphics</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Engage your target audience across Instagram, Facebook, LinkedIn, and TikTok with eye-catching, custom-designed post templates, story graphics, banner ads, and social campaign assets.
              </p>
            </div>

            {/* Marketing & Advertising Materials */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B]">Marketing &amp; Advertising Materials</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Turn prospects into customers with professionally engineered print and digital promotional collateral including brochures, flyers, banners, posters, and email headers.
              </p>
            </div>

            {/* Website & App UI/UX Design */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B]">Website &amp; App UI/UX Design</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Deliver seamless digital experiences with clean, modern UI/UX design. We design responsive web layouts, app interfaces, wireframes, and interactive prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Consultation Block */}
      <section className="py-12 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#3B82F6] font-bold mb-1">
                Make Consultation About This Service
              </div>
              <div className="text-xl font-extrabold text-white">
                Make a Call to Transform Your Brand Visuals
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3B82F6]" />
                <a href="tel:+447354820513" className="text-base font-bold text-white hover:text-[#3B82F6]">
                  +44 7354820513
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#3B82F6]" />
                <a href="mailto:info@technotsl.co.uk" className="text-base font-bold text-white hover:text-[#3B82F6]">
                  Contact Us
                </a>
              </div>
              <Link
                href="/contact-us"
                className="px-7 py-3 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Packaging & Presentation Design */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Packaging Design */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
            <div className="max-w-3xl space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit">
                <Package className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                Packaging Design
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Stand out on the shelf with bespoke product packaging and box design tailored to your product lines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Custom Box & Label Design",
                  "Product Mockups & 3D Renders",
                  "Print-Ready Vector Files",
                  "Eco-Friendly & Retail Packaging Standards",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EFF6FF] border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                    <span className="text-sm font-semibold text-[#0B132B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Presentation Design */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm">
            <div className="max-w-3xl space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit">
                <Presentation className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
                Presentation Design
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Impress investors and clients with clean, professional, high-converting pitch decks and sales presentations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  "PowerPoint & Google Slides",
                  "Corporate & Sales Presentations",
                  "Custom Templates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EFF6FF] border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0" />
                    <span className="text-sm font-semibold text-[#0B132B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Get a Quotation */}
      <section className="py-16 bg-white text-center border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B]">
            Ready to Upgrade Your Visual Identity?
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Get in touch with our Oxfordshire graphic design team today to discuss your project requirements and receive a customized quote.
          </p>
          <div>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-9 py-4 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md"
            >
              <span>Get a Quotation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
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
                  <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer">
                    <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4">{faq.question}</span>
                    <div className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#2563EB] text-white" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#64748B] border-t border-slate-100 mt-1">{faq.answer}</div>
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
