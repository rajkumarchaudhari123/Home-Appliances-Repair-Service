// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import SchemaMarkup from "./components/SchemaMarkup";
import SchemaMarkup from "./components/ServiceSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://home-appliances-repair-service.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Home Appliances Clinic Service |  Fridge, Washing Machine Repair",
    template: "%s | Appliance Repair Service"
  },
  description: "Professional home appliances clinic service. AC repair, fridge repair, washing machine repair, microwave repair. Fast, affordable & reliable technicians.",
  keywords: [
    "home appliances repair",  "fridge repair", "washing machine repair", 
    "microwave repair", "technician near me",  "refrigerator service",
  ],
  authors: [{ name: "Home Appliances Repair Experts" }],
  openGraph: {
    title: "Home Appliances Clinic Service – Fast & Trusted Technicians",
    description: "Get expert  fridge, and washing machine repair service at your doorstep.",
    url: baseUrl,
    siteName: "Home Appliances Clinic Service",
    images: [
      {
        url: "/og-image.png",
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
    title: "Home Appliances Repair Service",
    description: "Top-rated home appliance repair service",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
};

// ✅ Add caching headers middleware
export function generateStaticParams() {
  return [];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Navbar />
          <main className="min-h-[calc(100vh-140px)]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}