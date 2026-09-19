"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { blogs } from "@/data/blogs";

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

export default function BlogSection() {
  return (
    <section className="bg-white py-16 lg:py-24 text-[#111827] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-50/50 blur-3xl opacity-30 rounded-full pointer-events-none" />

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
            <span>Recent Posts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Latest Marketing Insights &amp; Oxfordshire Guides
          </h2>
        </motion.div>

        {/* 3 Blog Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogs.map((post) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between rounded-3xl bg-white border border-[#E5E7EB] overflow-hidden shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {post.category && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-[#E5E7EB] text-xs font-semibold text-[#2563EB] shadow-xs">
                      {post.category}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#64748B] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
