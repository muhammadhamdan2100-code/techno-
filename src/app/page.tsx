import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import AboutSection from "@/components/AboutSection";
import EcommerceSection from "@/components/EcommerceSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Innovation />
      <AboutSection />
      <EcommerceSection />
      <ServicesSection />
      <ResultsSection />
      <ProcessSection />
      <WhyChooseUs />
      <FAQ />
      <ContactSection />
      <BlogSection />
      <CTA />
      <Footer />
    </main>
  );
}
