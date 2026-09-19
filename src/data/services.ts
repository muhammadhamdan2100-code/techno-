export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  slug: string;
  aliases?: string[];
  description: string;
  icon: string;
  image?: string;
  features?: string[];
  ctaText?: string;
  faqs?: FAQItem[];
}

export const services: Service[] = [
  {
    title: "Digital Marketing & Management",
    slug: "digital-marketing",
    aliases: ["digital-marketing-management", "digital-marketing-services"],
    description:
      "Data-driven multi-channel marketing, SEO, PPC advertising, and strategic brand management engineered to accelerate online presence and revenue growth.",
    icon: "TrendingUp",
    features: [
      "Digital Marketing Strategy & Brand Management",
      "SEO & Search Visibility Optimization",
      "PPC Advertising & Paid Growth Campaigns",
      "Social Media Management & Analytics Tracking",
    ],
    ctaText: "Explore Digital Marketing",
    faqs: [
      {
        question: "What is included in Digital Marketing & Management?",
        answer:
          "Our digital marketing management combines organic search (SEO), paid advertising (PPC), social media growth, content strategy, brand positioning, and analytics to drive scalable growth.",
      },
      {
        question: "How do you measure digital marketing campaign performance?",
        answer:
          "We track transparent KPIs including Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), organic ranking improvements, and conversion rates with detailed monthly analytics.",
      },
    ],
  },
  {
    title: "Web Development & Design",
    slug: "web-development",
    aliases: ["website-development", "web-development-and-design"],
    description:
      "High-performance custom web development and responsive UI/UX designs built with Next.js, React, and modern web architectures.",
    icon: "Code",
    features: [
      "Custom Next.js & React Web Applications",
      "Responsive UI/UX & Mobile-First Interface Design",
      "Core Web Vitals & Sub-Second Speed Optimization",
      "Headless CMS, API Integration & Modern Security",
    ],
    ctaText: "Explore Web Development",
    faqs: [
      {
        question: "What frameworks do you use for custom web development?",
        answer:
          "We specialize in Next.js, React, TypeScript, TailwindCSS, Node.js, and headless CMS integrations designed for performance, security, and SEO dominance.",
      },
      {
        question: "Will our website be fully mobile responsive and fast loading?",
        answer:
          "Yes. All websites are built mobile-first, targeting 90+ Core Web Vitals scores, optimized sub-second load speeds, and enterprise security standards.",
      },
    ],
  },
  {
    title: "App Development",
    slug: "app-development",
    aliases: ["mobile-app-development", "apps"],
    description:
      "Cross-platform iOS and Android mobile app development delivering native performance, intuitive user interfaces, and scalable backend cloud services.",
    icon: "Smartphone",
    features: [
      "Cross-Platform iOS & Android App Development",
      "Native UI/UX & Fluid Micro-Interactions",
      "Secure Cloud API & Real-Time Database Backend",
      "Apple App Store & Google Play Publishing",
    ],
    ctaText: "Explore App Development",
    faqs: [
      {
        question: "What platforms do you build mobile apps for?",
        answer:
          "We develop high-performance cross-platform mobile applications for iOS and Android using React Native and Flutter, as well as native mobile integrations.",
      },
      {
        question: "How long does a mobile app development project take?",
        answer:
          "Standard mobile app builds typically take 6 to 12 weeks depending on feature scope, third-party API integrations, and backend infrastructure.",
      },
    ],
  },
  {
    title: "Customizable Software",
    slug: "customizable-software",
    aliases: ["custom-software", "software-development"],
    description:
      "Tailor-made enterprise software solutions, automation platforms, and bespoke tools engineered to streamline your specific business operations.",
    icon: "Cpu",
    features: [
      "Bespoke Enterprise Software Architecture",
      "Workflow & Business Process Automation Engines",
      "Custom Operational Dashboards & Analytics",
      "API & Cloud Database System Integration",
    ],
    ctaText: "Explore Custom Software",
    faqs: [
      {
        question: "What is customizable software and how does it benefit my business?",
        answer:
          "Customizable software is engineered specifically around your unique business workflows, eliminating recurring per-user licensing fees and providing total operational flexibility.",
      },
      {
        question: "Can custom software integrate with our existing IT systems?",
        answer:
          "Yes, our software architectures are built with secure RESTful APIs and database connectors to seamlessly sync with your existing ERP, CRM, and cloud platforms.",
      },
    ],
  },
  {
    title: "CRM Solutions",
    slug: "crm-solutions",
    aliases: ["crm", "customer-relationship-management"],
    description:
      "Smart Customer Relationship Management platforms, automated lead nurturing funnels, and integrated customer data platforms to maximize retention.",
    icon: "Users",
    features: [
      "Custom CRM Implementation & Workflow Setup",
      "Automated Lead Capture & Multi-Channel Nurturing",
      "Sales Pipeline Tracking & Customer Analytics",
      "Third-Party Helpdesk & Communication Integration",
    ],
    ctaText: "Explore CRM Solutions",
    faqs: [
      {
        question: "Why should my business invest in a custom CRM solution?",
        answer:
          "A tailored CRM centralizes customer interactions, automates sales follow-ups, enhances team productivity, and delivers actionable insights to increase customer retention.",
      },
      {
        question: "Can you migrate data from our current spreadsheets or legacy CRM?",
        answer:
          "Yes, we execute seamless end-to-end data migration, clean up duplicate records, and set up user permissions with zero operational downtime.",
      },
    ],
  },
  {
    title: "Inbound Customer Support",
    slug: "inbound",
    aliases: ["inbound-customer-support"],
    description:
      "Professional 24/7 inbound customer service, omni-channel helpdesk management, live chat, and call support tailored for growing UK businesses.",
    icon: "Headphones",
    features: [
      "24/7 Live Chat & Inbound Phone Support",
      "Omni-channel Helpdesk Ticket Management",
      "Customer Resolution & CSAT Optimization",
      "Dedicated Account Support Leads",
    ],
    ctaText: "Explore Inbound Support",
    faqs: [
      {
        question: "What is included in Techno Trade's Inbound Customer Support service?",
        answer:
          "Our inbound support service includes 24/7 live agent phone coverage, multi-channel helpdesk ticket management (email, live chat, social DM), customer satisfaction (CSAT) optimization, dedicated account leads, and seamless CRM integrations.",
      },
      {
        question: "How quickly can your agents be onboarded for our UK business?",
        answer:
          "Onboarding typically takes 5 to 10 business days. We map your product workflows, create customized knowledge bases, and conduct rigorous scenario testing before going live.",
      },
    ],
  },
  {
    title: "Outbound Sales",
    slug: "outbound",
    aliases: ["outbound-sales"],
    description:
      "Results-focused outbound sales development, cold outreach campaigns, B2B appointment setting, and pipeline acceleration.",
    icon: "TrendingUp",
    features: [
      "Targeted B2B Prospecting & ICP Sourcing",
      "Multi-Touch Cold Email & Outreach Campaigns",
      "Qualified Appointment Setting & Pipeline Acceleration",
      "CRM & Sales Funnel Integration",
    ],
    ctaText: "Explore Outbound Sales",
    faqs: [
      {
        question: "What does your Outbound Sales Development service cover?",
        answer:
          "We provide end-to-end B2B sales development, including ideal customer profile (ICP) building, verified prospect sourcing, multi-touch cold email and phone outreach, appointment setting, and CRM pipeline synchronization.",
      },
      {
        question: "How are sales leads qualified before setting appointments?",
        answer:
          "We use strict qualification frameworks (BANT / CHAMP) based on your criteria—ensuring decision-makers possess budget, authority, clear business need, and urgency before booking meetings onto your calendar.",
      },
    ],
  },
  {
    title: "Content Writing",
    slug: "content-writing",
    aliases: ["content-creation-services"],
    description:
      "Our creative agency produces engaging, SEO-friendly blog posts, web copy, press releases, and creative storytelling that convert visitors into loyal clients.",
    icon: "FileText",
    features: [
      "SEO Blog & Article Writing",
      "Website & High-Converting Landing Page Copywriting",
      "Brand Messaging & Creative Storytelling",
      "Press Releases, Whitepapers & Case Studies",
    ],
    ctaText: "Explore Content Writing",
    faqs: [
      {
        question: "What types of content does your agency create?",
        answer:
          "We produce SEO-optimized blog articles, website copy, landing page sales text, technical whitepapers, case studies, press releases, social captions, and email marketing newsletters tailored to UK audiences.",
      },
      {
        question: "How do you ensure written content ranks on Google?",
        answer:
          "Every piece is built on keyword intent research, SERP competitor analysis, optimal heading structure (H1/H2/H3), semantic LSI keyword integration, and internal linking to high-value service pages.",
      },
    ],
  },
  {
    title: "E-Commerce Agency In Oxfordshire",
    slug: "e-commerce-agency-oxfordshire",
    aliases: ["ecommerce-agency"],
    description:
      "Full-service e-commerce store creation, custom Shopify & WooCommerce development, payment integration, and revenue scaling for Oxfordshire brands.",
    icon: "ShoppingBag",
    features: [
      "Custom Shopify & WooCommerce Store Development",
      "Conversion Rate Optimization (CRO)",
      "Secure Payment & Multi-Currency Checkout Setup",
      "Inventory & ERP System Sync",
    ],
    ctaText: "Explore E-Commerce Services",
    faqs: [
      {
        question: "Which e-commerce platforms do you specialize in building and optimizing?",
        answer:
          "We specialize in custom Shopify, Shopify Plus, WooCommerce, and headless Next.js e-commerce architectures tailored for Oxfordshire and UK retail brands.",
      },
      {
        question: "How do you optimize e-commerce stores for higher conversion rates (CRO)?",
        answer:
          "We analyze user recording sessions, implement high-converting checkout flows, optimize product page media, streamline navigation, and integrate trust signals to turn visitors into buyers.",
      },
    ],
  },
  {
    title: "PPC Advertising",
    slug: "ppc",
    aliases: ["ppc-advertising"],
    description:
      "Get instant, high-ROI results across Google Ads, Bing Ads, and Meta Ads with our data-driven pay-per-click management strategies.",
    icon: "Target",
    features: [
      "Google Search, Display & Shopping Ads",
      "Bing & Social Media Paid Campaigns",
      "High-Converting Landing Page Optimization",
      "Transparent ROI & Attribution Tracking",
    ],
    ctaText: "Explore PPC Advertising",
    faqs: [
      {
        question: "Which ad platforms do you manage for UK businesses?",
        answer:
          "We manage search, display, and shopping campaigns across Google Ads, Microsoft/Bing Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, and TikTok Paid Ads.",
      },
      {
        question: "How fast can PPC advertising drive qualified leads and sales?",
        answer:
          "Unlike organic SEO, PPC campaigns start driving targeted visitor traffic to your landing pages immediately upon ad approval—typically within 24 to 48 hours of campaign setup.",
      },
    ],
  },
  {
    title: "SEO",
    slug: "seo",
    aliases: ["seo-services"],
    description:
      "Data-driven search engine optimization encompassing on-page, off-page, technical, and local Oxford SEO to help your business dominate search rankings.",
    icon: "Search",
    features: [
      "Technical & On-Page SEO Audits",
      "Local Oxfordshire & UK SEO Strategy",
      "Authority Link Building & Outreach",
      "Keyword Strategy & SERP Ranking Growth",
    ],
    ctaText: "Explore SEO Services",
    faqs: [
      {
        question: "What is included in Techno Trade's SEO management package?",
        answer:
          "Our SEO services encompass technical site audits, on-page content optimization, Google Business Profile management, local citation building, high-authority UK link building, and monthly SERP performance tracking.",
      },
      {
        question: "How long does SEO take to achieve top organic rankings on Google?",
        answer:
          "SEO is a compounding growth strategy. Initial technical optimizations reflect in 4 to 8 weeks, with noticeable organic traffic and ranking jumps occurring between months 3 and 6.",
      },
    ],
  },
  {
    title: "SMM (Social Media Marketing)",
    slug: "social-media-marketing",
    aliases: ["smm"],
    description:
      "Engage your target audience across Facebook, Instagram, LinkedIn, TikTok, and X with custom social content, community management, and targeted ads.",
    icon: "Share2",
    features: [
      "Multi-Platform Social Strategy & Planning",
      "Creative Content & Video Reels Production",
      "Community Engagement & Brand Growth",
      "Paid Social Advertising & Audience Scaling",
    ],
    ctaText: "Explore Social Media Marketing",
    faqs: [
      {
        question: "Which social media channels do you manage?",
        answer:
          "We manage Instagram, Facebook, LinkedIn, TikTok, X (formerly Twitter), and Pinterest tailored to your B2B or B2C target audience.",
      },
      {
        question: "Do you handle paid social ads as well as organic content?",
        answer:
          "Yes, we build integrated social media strategies combining organic brand building with highly targeted paid social ad campaigns across Meta, LinkedIn, and TikTok.",
      },
    ],
  },
  {
    title: "TikTok Shop",
    slug: "tiktok-shop-agency",
    aliases: ["tiktok-shop"],
    description:
      "End-to-end TikTok Shop setup, creator outreach, live shopping management, viral content production, and e-commerce scaling.",
    icon: "Store",
    features: [
      "TikTok Store Onboarding & Product Sync",
      "Affiliate & Creator Outreach Campaigns",
      "Short-Form Viral Video Production",
      "Live Commerce & TikTok Paid Ad Scaling",
    ],
    ctaText: "Explore TikTok Shop Services",
    faqs: [
      {
        question: "What is involved in setting up a UK TikTok Shop?",
        answer:
          "We handle TikTok Seller Center verification, catalog integration, shipping policy setup, payment gateway binding, and creator affiliate portal configuration.",
      },
      {
        question: "How do creator outreach and affiliate campaigns work?",
        answer:
          "We connect your store with relevant UK creators who produce authentic product review videos and drive sales through commission-based affiliate links.",
      },
    ],
  },
  {
    title: "UI/UX Graphic Design",
    slug: "graphic-design",
    aliases: ["ui-ux-graphic-design"],
    description:
      "Creative UI/UX design, brand identity systems, web interface mockups, and marketing collateral engineered for maximum aesthetic appeal and usability.",
    icon: "Palette",
    features: [
      "UI/UX Web & Mobile App Interface Design",
      "Complete Brand Identity & Logo Systems",
      "Digital Marketing Collateral & Banners",
      "Packaging & Presentation Deck Design",
    ],
    ctaText: "Explore Graphic Design",
    faqs: [
      {
        question: "What graphic design and UI/UX services do you provide?",
        answer:
          "We offer custom UI/UX web and mobile app design, brand identity systems (logos, color palettes, typography), social media visual templates, marketing banners, and print collateral.",
      },
      {
        question: "Do you deliver raw vector and source files upon project completion?",
        answer:
          "Yes, you receive 100% ownership and all high-resolution source files (Figma, AI, SVG, PNG, PDF) ready for web and print production.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(
    (s) => s.slug === slug || (s.aliases && s.aliases.includes(slug))
  );
}

export function getAllServiceSlugs(): string[] {
  const slugs: string[] = [];
  services.forEach((s) => {
    slugs.push(s.slug);
    if (s.aliases) {
      slugs.push(...s.aliases);
    }
  });
  return slugs;
}
