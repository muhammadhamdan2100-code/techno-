import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Techno Trade Solutions Limited",
  description:
    "Get in touch with Techno Trade Solutions in Headington, Oxford. Phone: +44 7354 820513, Email: info@technotsl.co.uk, Address: 309 Hollow Way, Headington, Oxford OX3 7JD, United Kingdom.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-x-hidden">
      <Navbar />
      <ContactFormSection />
      <Footer />
    </main>
  );
}

