import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Techno Trade Solutions Limited",
  description:
    "Learn why Techno Trade is the leading digital marketing agency in Oxfordshire. Discover our data-driven SEO, PPC, and social media marketing solutions.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden text-[#111827]">
      <Navbar />
      
      {/* Inner Page Hero Header */}
      <section className="pt-36 pb-16 bg-white text-center relative border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-3">
            Techno Trade Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            About Us
          </h1>
          <p className="mt-3 text-[#64748B] text-sm sm:text-base max-w-2xl mx-auto">
            Oxfordshire&apos;s trusted digital marketing partner delivering performance-driven SEO, paid media, and web development solutions.
          </p>
        </div>
      </section>

      <AboutSection />
      <ProcessSection />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
