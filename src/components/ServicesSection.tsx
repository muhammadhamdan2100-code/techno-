"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  TrendingUp,
  Code,
  Smartphone,
  Cpu,
  Users,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface MainServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
}

const mainServices: MainServiceItem[] = [
  {
    title: "Digital Marketing & Management",
    slug: "digital-marketing",
    description:
      "Data-driven multi-channel marketing, SEO, PPC advertising, and strategic brand management engineered to accelerate online presence and revenue growth.",
    icon: <TrendingUp className="w-6 h-6" />,
    ctaText: "Explore Service",
  },
  {
    title: "Web Development & Design",
    slug: "web-development",
    description:
      "High-performance custom web development and responsive UI/UX designs built with Next.js, React, and modern web architectures.",
    icon: <Code className="w-6 h-6" />,
    ctaText: "Explore Service",
  },
  {
    title: "App Development",
    slug: "app-development",
    description:
      "Cross-platform iOS and Android mobile app development delivering native performance, intuitive user interfaces, and scalable backend cloud services.",
    icon: <Smartphone className="w-6 h-6" />,
    ctaText: "Explore Service",
  },
  {
    title: "Customizable Software",
    slug: "customizable-software",
    description:
      "Tailor-made enterprise software solutions, automation platforms, and bespoke tools engineered to streamline your specific business operations.",
    icon: <Cpu className="w-6 h-6" />,
    ctaText: "Explore Service",
  },
  {
    title: "CRM Solutions",
    slug: "crm-solutions",
    description:
      "Smart Customer Relationship Management platforms, automated lead nurturing funnels, and integrated customer data platforms to maximize retention.",
    icon: <Users className="w-6 h-6" />,
    ctaText: "Explore Service",
  },
  {
    title: "E-commerce",
    slug: "e-commerce-agency-oxfordshire",
    description:
      "Full-service e-commerce store creation, custom Shopify & WooCommerce development, secure payment integrations, and online sales growth.",
    icon: <ShoppingBag className="w-6 h-6" />,
    ctaText: "Explore Service",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
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

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 lg:py-24 text-[#111827] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50/50 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Main Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            High-Impact Technology &amp; Digital Solutions
          </h2>
          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
            Empowering modern enterprises with cutting-edge software development, mobile apps, CRM systems, and data-driven marketing strategies.
          </p>
        </motion.div>

        {/* 6 Main Services Grid (3 Desktop, 2 Tablet, 1 Mobile) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: 1000 }}
        >
          {mainServices.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                scale: 1.01,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div>
                {/* Lucide Icon Badge */}
                <div className="p-4 rounded-2xl bg-[#EFF6FF] text-[#2563EB] w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-[#0B132B] mb-3 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>

                {/* Service Short Description */}
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <motion.div
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-block"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
