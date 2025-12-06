'use client';

import React, { useState } from 'react';
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
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    ChevronRight,
    Send,
    CheckCircle,
    Award,
    Users,
    Heart
} from 'lucide-react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Here you would typically call your API
            console.log('Subscribed:', email);
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    // Quick Links
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    // Services Links
    const serviceLinks = [
        { name: 'Refrigerator Repair', href: '/services/refrigerator' },
        { name: 'Washing Machine Repair', href: '/services/washing-machine' },
        { name: 'Microwave Repair', href: '/services/microwave' },
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

    // Social Media
    const socialLinks = [
        { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
        { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
        { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
        { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    ];

    // Certifications
    const certifications = [
        { icon: <Shield size={20} />, text: 'ISO Certified' },
        { icon: <Award size={20} />, text: 'Best Service Award 2024' },
        { icon: <Users size={20} />, text: '5000+ Happy Customers' },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
            {/* Top Wave Decoration */}
            <div className="overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                    <path fill="#111827" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">

                {/* Top Section - Contact & Newsletter */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">

                    {/* Brand & Contact Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Wrench size={28} className="text-white" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold tracking-tight">FixIt Repair</div>
                                <div className="text-blue-300 text-sm">Professional Appliance Services</div>
                            </div>
                        </Link>

                        <p className="text-gray-300 leading-relaxed">
                            Your trusted partner for all home appliance repairs.
                            24/7 emergency .
                        </p>

                        <div className="space-y-4">
                            <a href="tel:+919876543210" className="flex items-center space-x-3 text-lg hover:text-blue-300 transition-colors group">
                                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Call Us Anytime</div>
                                    <div className="font-bold">+91 7678134697  </div>
                                </div>
                            </a>

                            <a href="mailto:service@fixit.com" className="flex items-center space-x-3 text-lg hover:text-blue-300 transition-colors group">
                                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Email Us</div>
                                    <div className="font-bold">service@fixit.com</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="lg:col-span-2 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-2xl p-8 border border-blue-800/30 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                                <p className="text-gray-300">
                                    Subscribe to get maintenance tips, special offers, and appliance care guides.
                                </p>
                            </div>

                            <form onSubmit={handleSubscribe} className="flex-1">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative flex-1">
                                        <Mail size={20} className="absolute left-4 top-3.5 text-gray-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className="w-full pl-12 pr-4 py-3.5 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        {subscribed ? (
                                            <>
                                                <CheckCircle size={20} />
                                                Subscribed!
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Subscribe
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="text-gray-400 text-sm mt-3">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Links & Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-3 border-b border-blue-800/30 flex items-center">
                            <ChevronRight className="text-blue-400 mr-2" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 mr-2 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-3 border-b border-blue-800/30 flex items-center">
                            <Wrench className="text-blue-400 mr-2" />
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                                    >
                                        <ChevronRight size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 mr-2 transition-opacity" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-3 border-b border-blue-800/30 flex items-center">
                            <MapPin className="text-blue-400 mr-2" />
                            Service Areas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {serviceAreas.map((area, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-blue-900/30 hover:bg-blue-800/50 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300 cursor-pointer border border-blue-800/20 hover:border-blue-700/40"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-6 border border-blue-800/30">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">
                                <Phone size={20} className="text-red-400" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Emergency Service</div>
                                <div className="text-xl font-bold">24/7 Available</div>
                            </div>
                        </div>

                        <a
                            href="tel:+917678134697"
                            className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center py-3 rounded-xl font-bold text-lg mb-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Emergency Call Now
                        </a>

                        <a
                            href="https://wa.me/917678134697  "
                            className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                        >
                            <MessageSquare size={20} />
                            WhatsApp Support
                        </a>
                    </div>
                </div>

                {/* Certifications & Social */}
                <div className="border-t border-blue-800/30 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-4">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 px-4 py-2 bg-blue-900/20 rounded-lg border border-blue-800/30"
                                >
                                    {cert.icon}
                                    <span className="text-sm">{cert.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400">Follow Us:</span>
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-blue-800/30 pt-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="text-gray-400 text-sm">
                                <Clock size={16} className="inline mr-2" />
                                Working Hours: Mon-Sun • 24/7 Emergency Service Available
                            </div>

                            <div className="flex items-center space-x-6 text-sm">
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                                <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
                                    Refund Policy
                                </Link>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-8 pt-6 border-t border-blue-800/20 text-center">
                            <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 text-gray-400 text-sm">
                                <div>© {new Date().getFullYear()} FixIt Appliance Repair Services. All rights reserved.</div>
                                <div className="hidden md:block">•</div>
                                <div className="flex items-center justify-center">
                                    Made with <Heart size={14} className="mx-1 text-red-400 fill-red-400" /> for our customers
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/917678134697"
                className="fixed bottom-6 right-6 z-40 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MessageSquare size={28} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    Live
                </span>
            </a>

            {/* Floating Call Button */}
            <a
                href="tel:+917678134697  "
                className="fixed bottom-24 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            >
                <Phone size={28} />
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
          animation: bounce-slow 2s infinite;
        }
      `}</style>
        </footer>
    );
}