import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TenderBliss Postnatal Wellness",
  description: "Premium Postnatal Care for you and your baby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
