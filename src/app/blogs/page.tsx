"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { blogs, BlogPost } from "@/data/blogs";
import { Calendar, ArrowRight, Search, Sparkles, Tag } from "lucide-react";

const categories = [
  "All",
  "Local SEO",
  "Instagram Marketing",
  "Digital Marketing",
  "E-Commerce",
  "TikTok Shop",
  "PPC & Paid Media",
  "SEO",
  "Social Media",
  "Content Writing",
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((post: BlogPost) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-36 pb-16 bg-white text-center relative border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Oxfordshire Marketing Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            Latest Marketing Guides &amp; Insights
          </h1>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto">
            Actionable SEO, PPC, social media, and e-commerce strategies designed to help Oxfordshire businesses grow online.
          </p>

          {/* Search & Category Filter */}
          <div className="mt-8 max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by topic or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-[#E5E7EB] bg-white text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 shadow-xs"
              />
            </div>

            {/* Category Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#2563EB] text-white shadow-xs"
                      : "bg-slate-100 text-[#64748B] hover:bg-slate-200 border border-[#E5E7EB]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 text-[#64748B]">
              <p className="text-lg font-semibold">No articles found matching your query.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2 bg-[#2563EB] text-white text-xs font-bold rounded-full"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <div
                  key={post.slug}
                  className="flex flex-col justify-between rounded-3xl bg-white border border-[#E5E7EB] overflow-hidden shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-50">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-[#E5E7EB] text-xs font-semibold text-[#2563EB] shadow-xs flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>{post.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-[#64748B] mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{post.date}</span>
                      </div>

                      <h2 className="text-lg font-bold text-[#0B132B] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-[#64748B] text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="px-6 pb-6 pt-0">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
