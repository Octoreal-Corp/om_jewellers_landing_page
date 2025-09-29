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
  title: "Om Jewellers",
  description: "Best Jewellers in Jagdalpur, Chattisgarh",
  metadataBase: new URL("https://www.omjewellersjdp.com/"),
  openGraph: {
    title: "Om Jewellers - Best Jewelry in Jagdalpur",
    description:
      "Discover exquisite jewelry collections, from traditional to contemporary designs. 23 years of crafting timeless elegance in Jagdalpur, Chattisgarh.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Jewellers - Best Jewelry in Jagdalpur",
    description:
      "Discover exquisite jewelry collections, from traditional to contemporary designs. 23 years of crafting timeless elegance in Jagdalpur, Chattisgarh.",
    images: [PreviewImage.src],
    creator: "@omjewellers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        {children}
      </body>
    </html>
  );
}
