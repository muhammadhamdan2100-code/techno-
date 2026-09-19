import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogs";
import { Calendar, ArrowRight, Tag, User, CheckCircle2 } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Techno Trade Solutions",
    };
  }

  return {
    title: `${post.title} | Techno Trade Solutions`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-12 bg-white relative border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] mb-6 inline-flex items-center gap-1.5 transition-colors"
          >
            ← Back to All Articles
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B] mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold uppercase tracking-wider">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-[#64748B]">
              <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-[#0B132B] font-semibold">
              <User className="w-3.5 h-3.5 text-[#2563EB]" />
              Author: {post.author || "TECHNO_Admin"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image & Article Body */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Main Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-slate-50">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Structured Article Sections */}
          <div className="space-y-8 text-[#334155] leading-relaxed">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B132B] tracking-tight">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-[#334155] leading-relaxed">
                    {para}
                  </p>
                ))}
                {section.listItems && section.listItems.length > 0 && (
                  <ul className="space-y-2.5 my-4 pl-1">
                    {section.listItems.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-base text-[#1E293B]">
                        <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Article Author Footer Bar */}
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#2563EB] text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Article Author
                </div>
                <div className="text-sm font-bold text-[#0B132B]">
                  {post.author || "TECHNO_Admin"}
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-all"
            >
              <span>Discuss Your Marketing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
