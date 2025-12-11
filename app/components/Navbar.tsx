'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    Phone,
    Menu,
    X,
    Search,
    Home,
    Wrench,
    User,
    MessageSquare,
    MapPin,
    ChevronDown,
    ShoppingCart
} from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Array<{ name: string, href: string, description: string }>>([]);
    const pathname = usePathname();
    const router = useRouter();

    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation links
    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={18} /> },
        {
            name: 'Services',
            href: '#',
            icon: <Wrench size={18} />,
            submenu: [
                { name: 'Refrigerator Repair', href: '/refrigerator' },
                { name: 'Washing Machine Repair', href: '/washing-machine' },
                { name: 'Microwave Oven Repair', href: '/microwave' },
                { name: 'All Services', href: '/services' },
            ]
        },
        { name: 'About Us', href: '/about', icon: <User size={18} /> },
        { name: 'Contact', href: '/contact', icon: <MessageSquare size={18} /> },
    ];

    // Searchable services
    const searchableServices = [
        {
            name: 'Refrigerator Repair',
            href: '/refrigerator',
            description: 'Fix cooling issues, gas leakage, compressor problems'
        },
        {
            name: 'Washing Machine Repair',
            href: '/washing-machine',
            description: 'Fix spinning, drainage, water leakage issues'
        },
        {
            name: 'Microwave Oven Repair',
            href: '/microwave',
            description: 'Fix heating issues, sparking, power problems'
        },
        {
            name: 'All Services',
            href: '/services',
            description: 'View all appliance repair services'
        },
        {
            name: 'Contact Us',
            href: '/contact',
            description: 'Schedule service appointment'
        },
        {
            name: 'About Us',
            href: '/about',
            description: 'Learn about our repair services'
        }
    ];

    // Handle search
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const results = searchableServices.filter(service =>
                service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    // Handle search result click
    const handleResultClick = (href: string) => {
        router.push(href);
        setSearchQuery('');
        setSearchResults([]);
        setIsSearchOpen(false);
    };

    // Clear search when clicked outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const searchContainer = document.getElementById('search-container');
            if (searchContainer && !searchContainer.contains(e.target as Node)) {
                setIsSearchOpen(false);
                setSearchQuery('');
                setSearchResults([]);
            }
        };

        if (isSearchOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSearchOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <a href="tel:+91 98108 78908" className="hover:text-yellow-300 transition-colors">
                                +91 9810878908
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Chandigarh & Nearby Areas</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href="#emergency" className="text-yellow-300 font-semibold hover:text-yellow-400 transition-colors">
                            🔴 24/7 Emergency Service
                        </a>
                        <a href="#quote" className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors">
                            Get Quote
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-white py-4'
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                                <Wrench size={24} className="text-white" />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900">FixIt</div>
                                <div className="text-xs text-blue-600 font-medium">Appliance Repair</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.submenu ? (
                                        <>
                                            <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                                <span>{link.icon}</span>
                                                <span>{link.name}</span>
                                                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                                                <div className="py-2">
                                                    {link.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/submenu"
                                                        >
                                                            <Wrench size={16} className="mr-3 text-blue-500" />
                                                            <span>{subItem.name}</span>
                                                            <ChevronDown size={16} className="ml-auto -rotate-90 text-gray-400 group-hover/submenu:text-blue-600" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all font-medium ${pathname === link.href
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                                }`}
                                        >
                                            <span>{link.icon}</span>
                                            <span>{link.name}</span>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4">
                            {/* Search Button and Container */}
                            <div className="relative" id="search-container">
                                <button
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <Search size={20} />
                                </button>

                                {/* Search Dropdown */}
                                {isSearchOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 animate-fadeIn z-50">
                                        <form onSubmit={handleSearch} className="p-4">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={searchQuery}
                                                    onChange={(e) => {
                                                        setSearchQuery(e.target.value);
                                                        if (e.target.value.trim()) {
                                                            const results = searchableServices.filter(service =>
                                                                service.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                                                service.description.toLowerCase().includes(e.target.value.toLowerCase())
                                                            );
                                                            setSearchResults(results);
                                                        } else {
                                                            setSearchResults([]);
                                                        }
                                                    }}
                                                    placeholder="Search for services..."
                                                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    autoFocus
                                                />
                                                <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
                                            </div>
                                        </form>

                                        {/* Search Results */}
                                        {searchResults.length > 0 && (
                                            <div className="max-h-96 overflow-y-auto border-t border-gray-100">
                                                <div className="p-2">
                                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                        Search Results
                                                    </div>
                                                    {searchResults.map((result, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleResultClick(result.href)}
                                                            className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-start gap-3 rounded-lg"
                                                        >
                                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                <Wrench size={16} className="text-blue-600" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900">{result.name}</div>
                                                                <div className="text-sm text-gray-600">{result.description}</div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Popular Searches */}
                                        {searchResults.length === 0 && (
                                            <div className="p-4 border-t border-gray-100">
                                                <div className="text-sm font-semibold text-gray-700 mb-3">Popular Searches:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Refrigerator', 'Washing Machine', 'Microwave', 'Emergency'].map((term, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                setSearchQuery(term);
                                                                const results = searchableServices.filter(service =>
                                                                    service.name.toLowerCase().includes(term.toLowerCase()) ||
                                                                    service.description.toLowerCase().includes(term.toLowerCase())
                                                                );
                                                                setSearchResults(results);
                                                            }}
                                                            className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                                                        >
                                                            {term}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919810878908?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                                className="hidden md:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageSquare size={18} />
                                <span className="font-medium">WhatsApp</span>
                            </a>

                            {/* Call Now Button */}
                            <a
                                href="tel:+919810878908"
                                className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                            >
                                <Phone size={18} />
                                <div>
                                    <div className="text-xs">Call Now</div>
                                    <div className="font-bold text-sm">+91 9810878908</div>
                                </div>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl animate-slideDown z-40">
                        <div className="container mx-auto px-4 py-6">
                            {/* Search in Mobile Menu */}
                            <div className="mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search services..."
                                        className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
                                </div>
                            </div>

                            {/* Emergency Call Button for Mobile */}
                            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-red-700 font-bold">🔴 Emergency Service</div>
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                </div>
                                <a
                                    href="tel:+91 98108 78908"
                                    className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
                                >
                                    <Phone size={20} className="inline mr-2" />
                                    Emergency Call Now
                                </a>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.submenu ? (
                                            <div className="border-b border-gray-100">
                                                <div className="flex items-center justify-between py-4 px-2 text-gray-700 font-medium">
                                                    <div className="flex items-center space-x-3">
                                                        {link.icon}
                                                        <span>{link.name}</span>
                                                    </div>
                                                    <ChevronDown size={18} />
                                                </div>

                                                {/* Mobile Submenu */}
                                                <div className="ml-8 mb-4 space-y-3">
                                                    {link.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="flex items-center py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={`flex items-center space-x-3 py-4 px-2 border-b border-gray-100 transition-colors ${pathname === link.href
                                                    ? 'text-blue-600 bg-blue-50 rounded-lg -mx-2 px-2'
                                                    : 'text-gray-700 hover:text-blue-600'
                                                    }`}
                                            >
                                                {link.icon}
                                                <span className="font-medium">{link.name}</span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Action Buttons */}
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <a
                                    href="https://wa.me/919810878908?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                                    className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    <MessageSquare size={18} />
                                    <span className="font-medium">WhatsApp</span>
                                </a>

                                <a
                                    href="tel:+919810878908"
                                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <Phone size={18} />
                                    <span className="font-medium">Call Now</span>
                                </a>
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                                <h3 className="font-bold text-gray-900 mb-3">Quick Contact</h3>
                                <div className="space-y-2">
                                    <a href="tel:+919810878908" className="flex items-center text-gray-700 hover:text-blue-600">
                                        <Phone size={16} className="mr-3" />
                                        +91 9810878908
                                    </a>
                                    <div className="flex items-center text-gray-700">
                                        <MapPin size={16} className="mr-3" />
                                        Serving Chandigarh & Nearby Areas
                                    </div>
                                    <div className="text-sm text-gray-500 mt-4">
                                        Mon-Sun: 24/7 Emergency Service Available
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* CSS for Animations */}
            <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
        </>
    );
}