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
