"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock } from "lucide-react";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white text-[#111827]">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-white text-center relative border-b border-[#E5E7EB] overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50/60 blur-3xl opacity-30 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInSlideUp}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B132B] tracking-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-[#64748B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to scale your business? Speak with Techno Trade&apos;s digital marketing and technology strategists in Oxford, UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-3xl opacity-30 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Contact Info Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {/* Phone Card */}
            <motion.div
              variants={fadeInSlideUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                  Make a Call
                </div>
                <a
                  href="tel:+447354820513"
                  className="text-base sm:text-lg font-bold text-[#0B132B] hover:text-[#2563EB] transition-colors block truncate"
                >
                  +44 7354 820513
                </a>
                <div className="text-xs text-[#64748B] mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2563EB] shrink-0" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={fadeInSlideUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                  Contact Us via Email
                </div>
                <a
                  href="mailto:info@technotsl.co.uk"
                  className="text-base sm:text-lg font-bold text-[#0B132B] hover:text-[#2563EB] transition-colors block truncate"
                >
                  info@technotsl.co.uk
                </a>
                <div className="text-xs text-[#64748B] mt-1">
                  Fast Response Within 24h
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              variants={fadeInSlideUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mb-1">
                  Company Address
                </div>
                <div className="text-sm font-semibold text-[#0B132B] leading-relaxed">
                  309 Hollow Way, Headington, Oxford OX3 7JD, United Kingdom
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Grid: Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Side: Contact Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-sm"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Send a Message</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] tracking-tight">
                  How Can We Help Your Business?
                </h2>
                <p className="text-[#64748B] text-sm mt-1">
                  Fill out the form below and an Oxfordshire marketing expert will get back to you shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#2563EB] mx-auto" />
                  <h3 className="text-xl font-bold text-[#0B132B]">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-[#64748B] text-sm max-w-md mx-auto leading-relaxed">
                    Your message has been received. Our team will review your inquiry and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 placeholder:text-[#94A3B8]"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 placeholder:text-[#94A3B8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7000 000000"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 placeholder:text-[#94A3B8]"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-2"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Digital Marketing Consultation"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 placeholder:text-[#94A3B8]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B132B] mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals and marketing requirements..."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all duration-200 placeholder:text-[#94A3B8] resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Side: Map + Location Container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-slate-50 relative min-h-[260px] sm:min-h-[420px] lg:min-h-[480px]">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Hollow%20way%2C%20Oxford%2C%20United%20Kingdom&t=m&z=12&output=embed&iwloc=near"
                  title="Hollow way, Oxford, United Kingdom Location Map"
                  aria-label="Hollow way, Oxford, United Kingdom Location Map"
                  className="w-full h-full min-h-[260px] sm:min-h-[420px] lg:min-h-[480px] border-0"
                />
              </div>

              {/* Quick Location Note */}
              <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-blue-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="text-xs text-[#0B132B] leading-relaxed">
                  <strong className="font-bold block mb-0.5">Visit Our Oxford Office</strong>
                  Conveniently situated on Hollow Way in Headington, Oxford. Contact us to schedule an in-person digital consultation with our UK marketing strategists.
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
