"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Inline SVG Social Icons for clean rendering
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const serviceLinks = [
    { name: "Digital Marketing & Management", href: "/services/digital-marketing" },
    { name: "Web Development & Design", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Customizable Software", href: "/services/customizable-software" },
    { name: "CRM Solutions", href: "/services/crm-solutions" },
    { name: "Inbound Customer Support", href: "/services/inbound" },
    { name: "Outbound Sales", href: "/services/outbound" },
    { name: "Content Writing", href: "/services/content-writing" },
    { name: "E-Commerce Agency In Oxfordshire", href: "/services/e-commerce-agency-oxfordshire" },
    { name: "PPC Advertising", href: "/services/ppc" },
    { name: "SEO", href: "/services/seo" },
    { name: "SMM (Social Media Marketing)", href: "/services/social-media-marketing" },
    { name: "TikTok Shop", href: "/services/tiktok-shop-agency" },
    { name: "UI/UX Graphic Design", href: "/services/graphic-design" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0B132B] text-[#CBD5E1] border-t border-white/10 pt-16 pb-12 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info & Social Links */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative w-10 h-10 bg-white/5 rounded-lg p-1 border border-white/10 group-hover:border-blue-400 transition-colors">
                <Image
                  src="/images/cropped-technotsl-e1753895887743.png"
                  alt="Techno Trade Solutions Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base leading-tight group-hover:text-[#3B82F6] transition-colors">
                  Techno Trade
                </span>
                <span className="text-[#3B82F6] text-xs font-medium uppercase tracking-wider">
                  Solutions Limited
                </span>
              </div>
            </Link>

            <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed max-w-sm">
              Techno Trade Solutions Limited - Your Trusted Digital Marketing Partner in Oxfordshire.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61572668621352"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#2563EB] text-[#CBD5E1] hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/techno-trade-solutions-limited/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#2563EB] text-[#CBD5E1] hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/techno.tsl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#2563EB] text-[#CBD5E1] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@technotradesolutionslimited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#2563EB] text-[#CBD5E1] hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[#CBD5E1] hover:text-[#3B82F6] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#CBD5E1] hover:text-[#3B82F6] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide uppercase">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span>
                  309 Hollow Way, Headington, Oxford OX3 7JD, United Kingdom
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <a
                  href="mailto:info@technotsl.co.uk"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  info@technotsl.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <a
                  href="tel:+447354820513"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  +44 7354 820513
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-[#CBD5E1]/70">
          <p>© 2026 TECHNO TRADE SOLUTIONS LIMITED. All Rights Reserved.</p>
        </div>

      </div>
    </motion.footer>
  );
}
