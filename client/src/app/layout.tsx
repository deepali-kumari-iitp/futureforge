import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/shared/ThemeProvider";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FutureForge",
  description: "Empowering futures through skills and opportunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
      <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
      </ThemeProvider>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}