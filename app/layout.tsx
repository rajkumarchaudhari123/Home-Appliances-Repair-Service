import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SchemaMarkup from "./components/ServiceSchema";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://home-appliances-repair-service.vercel.app/'
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Home Appliances clinic Service | AC, Fridge, Washing Machine Repair",
  description: "Professional home appliances clinic service. AC repair, fridge repair, washing machine repair, microwave repair, and more. Fast, affordable & reliable technicians.",
  keywords: [
    "home appliances clinic service",
    "fridge repair",
    "washing machine repair",
    "microwave repair",
    "technician near me",
    "refrigerator service",
  ],
  authors: [{ name: "Home Appliances clinic Experts" }],

  openGraph: {
    title: "Home Appliances clinic Service – Fast & Trusted Technicians",
    description: "Get expert AC, fridge, and washing machine repair service at your doorstep. Quick, reliable, and affordable service.",
    url: baseUrl,
    siteName: "Home Appliances clinic Service",
    images: [
      {
        // 🔥 BEST OPTION - Technician repairing appliance
        url: "https://images.unsplash.com/photo-1597418048367-7dd01e4404ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "Professional appliance repair technician fixing home appliances",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Appliances clinic Service | AC, Fridge, Washing Machine",
    description: "Top-rated home appliance repair — AC, fridge, washing machine & more.",
    images: [
      // Same image or different for Twitter
      "https://images.unsplash.com/photo-1597418048367-7dd01e4404ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGFwcGxpYW5jZXN8ZW58MHx8MHx8fDA%3D",
    ],
  },

  icons: {
    icon: "/favicon.ico",
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
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
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