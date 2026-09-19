import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import {
  Search,
  FileText,
  Share2,
  Target,
  Headphones,
  Palette,
  Code,
  ShoppingBag,
  TrendingUp,
  Store,
  Smartphone,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Oxfordshire | Techno Trade Solutions",
  description:
    "Explore full-service digital marketing solutions in Oxford: SEO, PPC advertising, social media marketing, content creation, web development, and TikTok Shop management.",
};

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Store: <Store className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-36 pb-16 bg-white text-center relative border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            Services We Offer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            Our Digital Marketing Services
          </h1>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto">
            From organic SEO and PPC management to e-commerce and social growth, we deliver tailored campaigns that generate real ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-blue-50 text-[#2563EB] w-fit mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    {iconMap[service.icon] || <Search className="w-6 h-6" />}
                  </div>
                  <h2 className="text-xl font-bold text-[#0B132B] mb-3 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
