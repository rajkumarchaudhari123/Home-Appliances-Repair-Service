import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Full SEO Metadata Added
export const metadata: Metadata = {
  title: "Home Appliances Repair Service | AC, Fridge, Washing Machine Repair",
  description:
    "Professional home appliances repair service. AC repair, fridge repair, washing machine repair, microwave repair, and more. Fast, affordable & reliable technicians.",

  keywords: [
    "home appliances repair",
    "AC repair",
    "fridge repair",
    "washing machine repair",
    "microwave repair",
    "technician near me",
    "AC service",
    "refrigerator service",
  ],

  authors: [{ name: "Home Appliances Repair Experts" }],

  openGraph: {
    title: "Home Appliances Repair Service – Fast & Trusted Technicians",
    description:
      "Get expert AC, fridge, and washing machine repair service at your doorstep. Quick, reliable, and affordable service.",
    url: "https://your-domain.com",
    siteName: "Home Appliances Repair Service",
    images: [
      {
        url: "https://images.unsplash.com/photo-1597418048367-7dd01e4404ee",
        width: 1200,
        height: 630,
        alt: "Appliance Repair Technician",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Appliances Repair Service | AC, Fridge, Washing Machine",
    description:
      "Top-rated home appliance repair — AC, fridge, washing machine & more.",
    images: [
      "https://images.unsplash.com/photo-1597418048367-7dd01e4404ee",
    ],
  },

  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
