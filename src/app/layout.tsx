import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://technotsl.co.uk"),
  title: {
    default: "Techno Trade Solutions | Best Digital Marketing Agency in Oxfordshire",
    template: "%s | Techno Trade Solutions",
  },
  description:
    "Techno Trade Solutions is Oxford's trusted digital marketing agency. We offer performance-driven SEO, Google Ads management, social media marketing, and web development for businesses in Oxfordshire.",
  keywords: [
    "digital marketing agency Oxfordshire",
    "digital marketing agency Oxford",
    "SEO services Oxford",
    "PPC advertising Oxfordshire",
    "web development Oxford",
    "social media marketing Oxford",
    "Techno Trade Solutions",
  ],
  authors: [{ name: "Techno Trade Solutions Limited" }],
  openGraph: {
    title: "Techno Trade Solutions | Best Digital Marketing Agency in Oxfordshire",
    description:
      "Techno Trade Solutions offers performance-driven SEO, PPC, social media marketing, and web development in Oxfordshire, UK.",
    url: "https://technotsl.co.uk",
    siteName: "Techno Trade Solutions Limited",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Trade Solutions | Best Digital Marketing Agency in Oxfordshire",
    description:
      "Performance-driven SEO, PPC, and social media marketing agency based in Oxford, UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-[#111827] selection:bg-[#2563EB] selection:text-white">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
