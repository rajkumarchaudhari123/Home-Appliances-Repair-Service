import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamic base URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://yourappliancerepair.com' 
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Home Appliances Repair - |  Fridge, Washing Machine Repair",
    template: "%s | Appliance Repair -"
  },
  description: "Professional home appliances repair -.  fridge repair, washing machine repair, microwave repair, and more. Fast, affordable & reliable technicians.",
  keywords: [
    "home appliances repair",
    "fridge repair",
    "washing machine repair",
    "microwave repair",
    "technician near me",
    "refrigerator -",
  ],
  authors: [{ name: "Home Appliances Repair Experts" }],
  creator: "Home Appliances Repair -",
  publisher: "Home Appliances Repair -",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Home Appliances Repair - – Fast & Trusted Technicians",
    description: "Get expert , fridge, and washing machine repair - at your doorstep. Quick, reliable, and affordable -.",
    siteName: "Home Appliances Repair -",
    images: [
      {
        url: "/og-image.jpg", // Resolved to full URL
        width: 1200,
        height: 630,
        alt: "Appliance Repair Technician fixing washing machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Appliances Repair - |  Fridge, Washing Machine",
    description: "Top-rated home appliance repair — fridge, washing machine & more.",
    creator: "@appliancerepair",
    images: ["/og-image.jpg"], // Resolved to full URL
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
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
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {children}
        </div>
      </body>
    </html>
  );
}