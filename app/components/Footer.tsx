'use client';

import React from 'react';
import Link from 'next/link';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Shield,
    Wrench,
    Home,
    MessageSquare,
    ChevronRight,
    Award,
    Users,
    Heart
} from 'lucide-react';

export default function Footer() {
    // Quick Links
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
    ];

    // Services Links
    const serviceLinks = [
        { name: 'Refrigerator Repair', href: '/refrigerator' },
        { name: 'Washing Machine Repair', href: '/washing-machine' },
        { name: 'Microwave Repair', href: '/microwave' },
    ];

    // Service Areas
    const serviceAreas = [
        'Chandigarh',
        'Panchkula',
        'Mohali',
        'Zirakpur',
        'Kharar',
        'Derabassi',
        'New Chandigarh'
    ];

    // Certifications
    const certifications = [
        { icon: <Shield size={20} />, text: 'ISO Certified' },
        { icon: <Award size={20} />, text: 'Best Service Award 2024' },
        { icon: <Users size={20} />, text: '5000+ Happy Customers' },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-3xl"></div>
            </div>

            {/* Top Wave Decoration */}
            <div className="relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                    <path
                        fill="#111827"
                        fillOpacity="1"
                        d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 relative z-10">

                {/* Top Section - Contact Info */}
                <div className="grid lg:grid-cols-1 gap-8 mb-12">
                    {/* Brand & Contact Info */}
                    <div className="space-y-6 text-center lg:text-left">
                        <Link href="/" className="inline-flex items-center space-x-3 group mx-auto lg:mx-0">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                                <Wrench size={30} className="text-white" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Home
                                </div>
                                <div className="text-blue-300 text-sm font-medium mt-1"> Appliance Clinic</div>
                            </div>
                        </Link>

                        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-lg">
                            Your trusted partner for all home appliance repairs .
                            Professional, reliable, and affordable solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            <a
                                href="tel:+9107206904101"
                                className="flex items-center space-x-3 text-lg hover:text-blue-300 transition-all duration-300 group bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 max-w-md"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform group-hover:shadow-lg">
                                    <Phone size={22} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 font-medium">call now</div>
                                    <div className="font-bold text-xl tracking-tight">+91 07206904101</div>
                                </div>
                            </a>

                          
                        </div>
                    </div>
                </div>

                {/* Middle Section - Links & Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Quick Links */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-blue-800/30 flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                                <Home size={18} className="text-white" />
                            </div>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group relative overflow-hidden"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <ChevronRight size={18} className="text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-blue-800/30 flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                                <Wrench size={18} className="text-white" />
                            </div>
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="flex items-center text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group relative overflow-hidden"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <ChevronRight size={18} className="text-green-500 mr-3 group-hover:translate-x-1 transition-transform" />
                                        <span>{service.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-blue-800/30 flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                                <MapPin size={18} className="text-white" />
                            </div>
                            Service Areas
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {serviceAreas.map((area, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/70 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-pointer border border-gray-600 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* WhatsApp Support */}
                    <div className="bg-gradient-to-br from-green-900/40 via-green-800/30 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-800/30 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                                {/* WhatsApp Logo - Official Colors */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
                                        fill="white"
                                    />
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12c0 2.126.56 4.125 1.544 5.858L0 24l6.335-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
                                        fill="#25D366"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-green-300 font-medium">Instant WhatsApp Support</div>
                                <div className="text-xl font-bold text-white">Quick Response</div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/9107206904101?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-green-500/20 group"
                        >
                            {/* WhatsApp Logo */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
                                    fill="white"
                                />
                                <path
                                    d="M12 0C5.373 0 0 5.373 0 12c0 2.126.56 4.125 1.544 5.858L0 24l6.335-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
                                    fill="white"
                                    className="opacity-20"
                                />
                            </svg>
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Certifications */}
                <div className="border-t border-blue-800/30 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 px-5 py-3 bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                                        {cert.icon}
                                    </div>
                                    <span className="text-sm font-medium">{cert.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-blue-800/30 pt-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="text-gray-400 text-sm flex items-center justify-center md:justify-start bg-gray-800/30 backdrop-blur-sm rounded-xl px-4 py-3">
                                <Clock size={18} className="mr-3 text-blue-400" />
                                <span>Working Hours: <span className="text-white font-medium">Mon-Sun </span></span>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-8 pt-8 border-t border-blue-800/20 text-center">
                            <div className="flex flex-col md:flex-row md:items-center justify-center gap-3 text-gray-400 text-sm">
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl px-4 py-2">
                                    © {new Date().getFullYear()} FixIt Appliance Repair Services. All rights reserved.
                                </div>
                                <div className="hidden md:block text-blue-400">•</div>
                                <div className="flex items-center justify-center bg-gray-800/30 backdrop-blur-sm rounded-xl px-4 py-2">
                                    Made with <Heart size={14} className="mx-2 text-red-400 fill-red-400 animate-pulse" /> for our customers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/9107206904101?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow group"
                target="_blank"
                rel="noopener noreferrer"
            >
                {/* Official WhatsApp Logo */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.967-.94 1.165-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
                        fill="white"
                    />
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12c0 2.126.56 4.125 1.544 5.858L0 24l6.335-1.651A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
                        fill="white"
                        className="opacity-20"
                    />
                </svg>
           
            </a>

            {/* Floating Call Button */}
            <a
                href="tel:+9107206904101"
                className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
            >
                <Phone size={28} className="group-hover:rotate-12 transition-transform" />
            </a>

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
        </footer>
    );
}