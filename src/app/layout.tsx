import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "Pretty Tips by Sandali | Professional Nail Spa Services",
  description:
    "Professional nail spa services including manicures, pedicures, gel nails, nail art, and extensions. Book your appointment today!",
  keywords: [
    "nail spa",
    "manicure",
    "pedicure",
    "gel nails",
    "nail art",
    "nail extensions",
  ],
  openGraph: {
    title: "Pretty Tips by Sandali | Professional Nail Spa Services",
    description:
      "Professional nail spa services including manicures, pedicures, gel nails, nail art, and extensions. Book your appointment today!",
    images: [
      {
        url: "https://prittytips.s3.ap-southeast-1.amazonaws.com/Logo/White+Pink+Simple+Nail+Art+Studio+Logo.png",
        width: 800,
        height: 600,
        alt: "Pretty Tips by Sandali Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pretty Tips by Sandali | Professional Nail Spa Services",
    description:
      "Professional nail spa services including manicures, pedicures, gel nails, nail art, and extensions. Book your appointment today!",
    images: [
      "https://prittytips.s3.ap-southeast-1.amazonaws.com/Logo/White+Pink+Simple+Nail+Art+Studio+Logo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
