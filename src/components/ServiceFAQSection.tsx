"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQItem } from "@/data/services";

interface ServiceFAQSectionProps {
  faqs: FAQItem[];
  serviceTitle: string;
}

export default function ServiceFAQSection({
  faqs,
  serviceTitle,
}: ServiceFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (FAQPage Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-[#E5E7EB] relative overflow-hidden">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Got Questions About Our {serviceTitle} Services?
          </h2>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto">
            Find clear answers to common questions about our deliverables, timeline, and strategy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-xs hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B132B] pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-blue-50 text-[#2563EB] shrink-0 transition-transform duration-200 ${
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-slate-100 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-[#0B132B]">
              Have a custom question not answered here?
            </div>
            <div className="text-xs text-[#64748B] mt-0.5">
              Speak directly with a UK strategist to discuss your specific requirements.
            </div>
          </div>
          <a
            href="tel:+447354820513"
            className="px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors shrink-0"
          >
            Call +44 7354 820513
          </a>
        </div>

      </div>
    </section>
  );
}
