import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EcommerceServiceDetail from "@/components/EcommerceServiceDetail";
import ContentWritingServiceDetail from "@/components/ContentWritingServiceDetail";
import SMMServiceDetail from "@/components/SMMServiceDetail";
import PPCServiceDetail from "@/components/PPCServiceDetail";
import TikTokShopServiceDetail from "@/components/TikTokShopServiceDetail";
import SEOServiceDetail from "@/components/SEOServiceDetail";
import WebDevServiceDetail from "@/components/WebDevServiceDetail";
import GraphicDesignServiceDetail from "@/components/GraphicDesignServiceDetail";
import AppDevServiceDetail from "@/components/AppDevServiceDetail";
import DigitalMarketingServiceDetail from "@/components/DigitalMarketingServiceDetail";
import CustomSoftwareServiceDetail from "@/components/CustomSoftwareServiceDetail";
import CRMServiceDetail from "@/components/CRMServiceDetail";
import InboundSupportServiceDetail from "@/components/InboundSupportServiceDetail";
import OutboundSalesServiceDetail from "@/components/OutboundSalesServiceDetail";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Techno Trade Solutions",
    };
  }

  if (slug === "digital-marketing" || slug === "digital-marketing-management" || slug === "digital-marketing-services") {
    return {
      title: "Digital Marketing & Management Services | Techno Trade Solutions",
      description:
        "Data-driven multi-channel marketing, SEO, PPC advertising, and strategic brand management engineered to accelerate online presence and revenue growth.",
    };
  }

  if (slug === "web-development" || slug === "website-development" || slug === "web-development-and-design") {
    return {
      title: "Web Development & Design Agency Oxford | Techno Trade Solutions",
      description:
        "High-performance custom web development and responsive UI/UX designs built with Next.js, React, and modern web architectures.",
    };
  }

  if (slug === "app-development" || slug === "mobile-app-development" || slug === "apps") {
    return {
      title: "App Development Services | Techno Trade Solutions",
      description:
        "Professional app development services for businesses, including Android, iOS, cross-platform applications, UI/UX, API integration and ongoing support.",
    };
  }

  if (slug === "customizable-software" || slug === "custom-software" || slug === "software-development") {
    return {
      title: "Customizable Software Solutions | Techno Trade Solutions",
      description:
        "Tailor-made enterprise software solutions, automation platforms, and bespoke tools engineered to streamline your specific business operations.",
    };
  }

  if (slug === "crm-solutions" || slug === "crm" || slug === "customer-relationship-management") {
    return {
      title: "Smart CRM Solutions | Techno Trade Solutions",
      description:
        "Smart Customer Relationship Management platforms, automated lead nurturing funnels, and integrated customer data platforms to maximize retention.",
    };
  }

  if (slug === "inbound" || slug === "inbound-customer-support") {
    return {
      title: "Inbound Customer Support Services | Techno Trade Solutions",
      description:
        "Professional 24/7 inbound customer service, omni-channel helpdesk management, live chat, and call support tailored for growing UK businesses.",
    };
  }

  if (slug === "outbound" || slug === "outbound-sales") {
    return {
      title: "Outbound Sales Development Services | Techno Trade Solutions",
      description:
        "Results-focused outbound sales development, cold outreach campaigns, B2B appointment setting, and pipeline acceleration.",
    };
  }

  if (slug === "content-writing" || slug === "content-creation-services") {
    return {
      title: "Content Writing Services | Techno Trade Solutions",
      description:
        "Our creative agency produces engaging, SEO-friendly blog posts, web copy, press releases, and creative storytelling that convert visitors into loyal clients.",
    };
  }

  if (slug === "e-commerce-agency-oxfordshire" || slug === "ecommerce-agency") {
    return {
      title: "E-commerce Agency Oxfordshire — Build, Sell & Scale Online | Techno Trade Solutions",
      description:
        "Full-service e-commerce store creation, custom Shopify & WooCommerce development, payment integration, and revenue scaling for Oxfordshire brands.",
    };
  }

  if (slug === "ppc" || slug === "ppc-advertising") {
    return {
      title: "PPC Advertising Services | Techno Trade Solutions",
      description:
        "Get instant, high-ROI results across Google Ads, Bing Ads, and Meta Ads with our data-driven pay-per-click management strategies.",
    };
  }

  if (slug === "seo" || slug === "seo-services") {
    return {
      title: "SEO Services in Oxfordshire | Techno Trade Solutions",
      description:
        "Data-driven search engine optimization encompassing on-page, off-page, technical, and local Oxford SEO to help your business dominate search rankings.",
    };
  }

  if (slug === "social-media-marketing" || slug === "smm") {
    return {
      title: "Social Media Marketing Oxford | Techno Trade Solutions",
      description:
        "Engage your target audience across Facebook, Instagram, LinkedIn, TikTok, and X with custom social content, community management, and targeted ads.",
    };
  }

  if (slug === "tiktok-shop-agency" || slug === "tiktok-shop") {
    return {
      title: "TikTok Shop Agency Services | Techno Trade Solutions",
      description:
        "End-to-end TikTok Shop setup, creator outreach, live shopping management, viral content production, and e-commerce scaling.",
    };
  }

  if (slug === "graphic-design" || slug === "ui-ux-graphic-design") {
    return {
      title: "UI/UX Graphic Design Services Oxfordshire | Techno Trade Solutions",
      description:
        "Creative UI/UX design, brand identity systems, web interface mockups, and marketing collateral engineered for maximum aesthetic appeal and usability.",
    };
  }

  return {
    title: `${service.title} Services | Techno Trade Solutions`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (slug === "digital-marketing" || slug === "digital-marketing-management" || slug === "digital-marketing-services") {
    return <DigitalMarketingServiceDetail />;
  }

  if (slug === "web-development" || slug === "website-development" || slug === "web-development-and-design") {
    return <WebDevServiceDetail />;
  }

  if (slug === "app-development" || slug === "mobile-app-development" || slug === "apps") {
    return <AppDevServiceDetail />;
  }

  if (slug === "customizable-software" || slug === "custom-software" || slug === "software-development") {
    return <CustomSoftwareServiceDetail />;
  }

  if (slug === "crm-solutions" || slug === "crm" || slug === "customer-relationship-management") {
    return <CRMServiceDetail />;
  }

  if (slug === "inbound" || slug === "inbound-customer-support") {
    return <InboundSupportServiceDetail />;
  }

  if (slug === "outbound" || slug === "outbound-sales") {
    return <OutboundSalesServiceDetail />;
  }

  if (slug === "content-writing" || slug === "content-creation-services") {
    return <ContentWritingServiceDetail />;
  }

  if (slug === "e-commerce-agency-oxfordshire" || slug === "ecommerce-agency") {
    return <EcommerceServiceDetail />;
  }

  if (slug === "ppc" || slug === "ppc-advertising") {
    return <PPCServiceDetail />;
  }

  if (slug === "seo" || slug === "seo-services") {
    return <SEOServiceDetail />;
  }

  if (slug === "social-media-marketing" || slug === "smm") {
    return <SMMServiceDetail />;
  }

  if (slug === "tiktok-shop-agency" || slug === "tiktok-shop") {
    return <TikTokShopServiceDetail />;
  }

  if (slug === "graphic-design" || slug === "ui-ux-graphic-design") {
    return <GraphicDesignServiceDetail />;
  }

  notFound();
}
