import JsonLd from "@/components/JsonLd";
import PreviewImage from "@/public/link-preview.jpg";
import type { Metadata } from "next";
import { Gilda_Display, Lato, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const gildaDisplay = Gilda_Display({
  variable: "--font-gilda-display",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omjewellersjdp.com/"),

  // Basic metadata
  title: {
    default: "Om Jewellers - Premium Jewelry Store in Jagdalpur, Chattisgarh",
    template: "%s | Om Jewellers",
  },
  description:
    "Discover exquisite jewelry at Om Jewellers, Jagdalpur's premier jewelry store since 2000. Traditional and contemporary designs in gold, diamond, and precious stones. Visit our showroom for expert craftsmanship and personalized service.",
  keywords: [
    "jewelry store jagdalpur",
    "gold jewelry chattisgarh",
    "diamond jewellery jagdalpur",
    "wedding jewelry jagdalpur",
    "om jewellers",
    "traditional indian jewelry",
  ],

  // Open Graph
  openGraph: {
    title: "Om Jewellers - Premium Jewelry Store in Jagdalpur",
    description:
      "Discover exquisite jewelry collections crafted with precision. Traditional to contemporary designs in gold, diamond & precious stones. 23+ years of trust in Jagdalpur, Chattisgarh.",
    url: "https://www.omjewellersjdp.com",
    images: [
      {
        url: PreviewImage.src,
        width: 1200,
        height: 630,
        alt: "Om Jewellers showcase featuring elegant jewelry pieces",
      },
    ],
    locale: "en_IN",
    type: "website",
    siteName: "Om Jewellers",
    countryName: "India",
    emails: ["omjewellersjdp@gmail.com"],
    phoneNumbers: ["+91-9753392000"],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Om Jewellers - Premium Jewelry in Jagdalpur",
    description:
      "Discover exquisite jewelry collections crafted with precision. Traditional to contemporary designs in gold, diamond & precious stones. Visit us in Jagdalpur.",
    images: [PreviewImage.src],
    creator: "@omjewellers",
    site: "@omjewellers",
  },

  // Robots & Crawlers
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },

  // Alternative languages
  alternates: {
    canonical: "https://www.omjewellersjdp.com",
    languages: {
      "en-IN": "https://www.omjewellersjdp.com/",
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // Additional metadata
  category: "Jewelry Store",
  classification: "Business > Retail > Jewelry",
  creator: "Om Jewellers",
  publisher: "Om Jewellers",
  applicationName: "Om Jewellers Website",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Om Jewellers" }],
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gildaDisplay.variable} ${lato.variable} ${notoSansDevanagari.variable}`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
