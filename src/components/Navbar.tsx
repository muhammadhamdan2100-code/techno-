"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  Code,
  Smartphone,
  Cpu,
  Users,
  ShoppingBag,
  Search,
  Headphones,
  FileText,
  Target,
  Share2,
  Store,
  Palette,
} from "lucide-react";

// SVG Social Icon Helpers with authentic brand URLs
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

interface DropdownServiceItem {
  title: string;
  slug: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

// All 14 Canonical Services
const dropdownServices: DropdownServiceItem[] = [
  {
    title: "Digital Marketing & Management",
    slug: "digital-marketing",
    href: "/services/digital-marketing",
    description: "Data-driven SEO, PPC, social media & brand growth strategies.",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    title: "Web Development & Design",
    slug: "web-development",
    href: "/services/web-development",
    description: "High-performance custom Next.js & React web applications.",
    icon: <Code className="w-4 h-4" />,
  },
  {
    title: "App Development",
    slug: "app-development",
    href: "/services/app-development",
    description: "Cross-platform iOS and Android mobile app solutions.",
    icon: <Smartphone className="w-4 h-4" />,
  },
  {
    title: "Customizable Software",
    slug: "customizable-software",
    href: "/services/customizable-software",
    description: "Bespoke enterprise software & workflow automation platforms.",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    title: "CRM Solutions",
    slug: "crm-solutions",
    href: "/services/crm-solutions",
    description: "Smart CRM implementation, lead funnels & sales analytics.",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "Inbound Customer Support",
    slug: "inbound",
    href: "/services/inbound",
    description: "24/7 omnichannel helpdesk, live chat & call support.",
    icon: <Headphones className="w-4 h-4" />,
  },
  {
    title: "Outbound Sales",
    slug: "outbound",
    href: "/services/outbound",
    description: "B2B lead generation & appointment setting outreach.",
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    title: "Content Writing",
    slug: "content-writing",
    href: "/services/content-writing",
    description: "SEO blog writing, website copywriting & brand storytelling.",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    title: "E-Commerce Agency In Oxfordshire",
    slug: "e-commerce-agency-oxfordshire",
    href: "/services/e-commerce-agency-oxfordshire",
    description: "Custom Shopify & WooCommerce stores built for conversion.",
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    title: "PPC Advertising",
    slug: "ppc",
    href: "/services/ppc",
    description: "High-ROI Google Ads, Bing Ads & Meta paid campaign management.",
    icon: <Target className="w-4 h-4" />,
  },
  {
    title: "SEO",
    slug: "seo",
    href: "/services/seo",
    description: "Technical, on-page, local Oxford SEO & SERP rank growth.",
    icon: <Search className="w-4 h-4" />,
  },
  {
    title: "SMM (Social Media Marketing)",
    slug: "social-media-marketing",
    href: "/services/social-media-marketing",
    description: "Social media strategy, content creation & community growth.",
    icon: <Share2 className="w-4 h-4" />,
  },
  {
    title: "TikTok Shop",
    slug: "tiktok-shop-agency",
    href: "/services/tiktok-shop-agency",
    description: "End-to-end TikTok store setup, creator outreach & viral sales.",
    icon: <Store className="w-4 h-4" />,
  },
  {
    title: "UI/UX Graphic Design",
    slug: "graphic-design",
    href: "/services/graphic-design",
    description: "Brand identity systems, UI/UX mockups & marketing graphics.",
    icon: <Palette className="w-4 h-4" />,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll Detection
  useEffect(() => {
    let lastScrolled = window.scrollY > 20;
    const handleScroll = () => {
      const isScrolledNow = window.scrollY > 20;
      if (isScrolledNow !== lastScrolled) {
        lastScrolled = isScrolledNow;
        setIsScrolled(isScrolledNow);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Click Outside Detection for Desktop Dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Desktop Hover Bridge Timers
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* TOP INFORMATION BAR (#0B132B) */}
      <div className="bg-[#0B132B] text-white text-xs py-2.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href="mailto:info@technotsl.co.uk"
              className="flex items-center gap-1.5 hover:text-[#3B82F6] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
              <span>info@technotsl.co.uk</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a
              href="tel:+447354820513"
              className="flex items-center gap-1.5 hover:text-[#3B82F6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
              <span>+44 7354 820513</span>
            </a>
          </div>

          {/* Authentic Social Links */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-slate-300 text-[11px]">Follow Us:</span>
            <a
              href="https://www.facebook.com/profile.php?id=61572668621352"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors p-1"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/techno-trade-solutions-limited/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/techno.tsl/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors p-1"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/@technotradesolutionslimited"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors p-1"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR (#FFFFFF) */}
      <nav
        className={`w-full bg-white border-b border-[#E5E7EB] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 bg-slate-50 rounded-xl p-1 border border-[#E5E7EB] group-hover:border-blue-500/50 transition-colors overflow-hidden shrink-0">
              <Image
                src="/images/cropped-technotsl-e1753895887743.png"
                alt="Techno Trade Solutions Logo"
                fill
                sizes="56px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#0B132B] font-extrabold text-base sm:text-xl tracking-tight leading-none group-hover:text-[#2563EB] transition-colors">
                Techno Trade
              </span>
              <span className="text-[#2563EB] text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-0.5 sm:mt-1">
                Solutions Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1 ${
                          active
                            ? "text-[#2563EB] bg-blue-50 font-bold"
                            : "text-[#111827] hover:text-[#2563EB] hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                      <button
                        onClick={() => setServicesDropdownOpen((prev) => !prev)}
                        className="p-1 rounded-full text-[#111827] hover:text-[#2563EB] transition-colors -ml-1 focus:outline-none"
                        aria-label="Toggle Services Dropdown"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-[#2563EB]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Desktop Services Dropdown Card */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] max-w-[95vw] z-50"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-4 flex flex-col backdrop-blur-xl">
                            <div className="grid grid-cols-2 gap-2 max-h-[480px] overflow-y-auto pr-1">
                              {dropdownServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={service.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all group"
                                >
                                  <div className="p-2 rounded-lg bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors shrink-0 mt-0.5">
                                    {service.icon}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-sm font-bold text-[#0B132B] group-hover:text-[#2563EB] transition-colors leading-tight">
                                      {service.title}
                                    </div>
                                    <div className="text-xs text-[#64748B] line-clamp-1 mt-1">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="pt-3 border-t border-[#E5E7EB] flex justify-between items-center px-2 mt-2">
                              <span className="text-xs text-[#64748B]">
                                Looking for custom IT &amp; software solutions?
                              </span>
                              <Link
                                href="/services"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1"
                              >
                                View All Services
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    active
                      ? "text-[#2563EB] bg-blue-50 font-bold"
                      : "text-[#111827] hover:text-[#2563EB] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md transition-colors duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-[#111827] hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Submenu Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-[#E5E7EB] overflow-hidden max-h-[calc(100vh-90px)] overflow-y-auto"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.href);

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="space-y-1">
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                            active
                              ? "text-[#2563EB] bg-blue-50 font-bold"
                              : "text-[#111827] hover:bg-slate-50"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180 text-[#2563EB]" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pr-2 space-y-1 border-l-2 border-[#2563EB]/40 my-1 overflow-hidden"
                            >
                              <Link
                                href="/services"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="block px-3 py-2 text-sm font-bold text-[#2563EB]"
                              >
                                View All Services
                              </Link>
                              {dropdownServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={service.href}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-[#64748B] hover:text-[#0B132B] hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                  <span className="text-[#2563EB]">{service.icon}</span>
                                  <span className="font-medium text-[#0B132B]">{service.title}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                        active
                          ? "text-[#2563EB] bg-blue-50 font-bold"
                          : "text-[#111827] hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-md transition-all"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
