// app/services/refrigerator/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Phone,
    Wrench,
    Clock,
    Shield,
    CheckCircle,
    AlertCircle,
    Thermometer,
    Zap,
    Droplets,
    Settings,
    Home,
    ArrowRight,
    Calendar,
    Users,
    Star,
    ChevronRight,
    ArrowLeft
} from 'lucide-react';

export default function RefrigeratorPage() {
    const [activeTab, setActiveTab] = useState('problems');

    // Common Problems
    const problems = [
        {
            icon: <Thermometer size={24} />,
            title: 'Not Cooling Properly',
            description: 'Weak cooling, food spoiling quickly',
            symptoms: ['Warm interior', 'Ice melting', 'Food spoiling fast'],
            fixTime: '1-2 hours',
            severity: 'High'
        },
        {
            icon: <Zap size={24} />,
            title: 'Compressor Issues',
            description: 'Loud noise, frequent cycling',
            symptoms: ['Clicking sound', 'Continuous running', 'Tripping breaker'],
            fixTime: '2-3 hours',
            severity: 'High'
        },
        {
            icon: <Droplets size={24} />,
            title: 'Water Leakage',
            description: 'Water pooling under or inside fridge',
            symptoms: ['Water on floor', 'Ice buildup', 'Dripping sounds'],
            fixTime: '1 hour',
            severity: 'Medium'
        },
        {
            icon: <Settings size={24} />,
            title: 'Defrost System Failure',
            description: 'Ice buildup in freezer',
            symptoms: ['Thick ice layer', 'Poor cooling', 'Fan noise'],
            fixTime: '1-2 hours',
            severity: 'Medium'
        },
        {
            icon: <AlertCircle size={24} />,
            title: 'Thermostat Problems',
            description: 'Inconsistent temperature',
            symptoms: ['Temperature fluctuations', 'Over cooling', 'Under cooling'],
            fixTime: '1 hour',
            severity: 'Low'
        },
        {
            icon: <Wrench size={24} />,
            title: 'Door Seal Issues',
            description: 'Cold air escaping',
            symptoms: ['Warm air entering', 'Condensation', 'Frost on edges'],
            fixTime: '1-2 hours',
            severity: 'Low'
        },
    ];

    // Repair Process Steps
    const repairSteps = [
        {
            step: 1,
            title: 'Diagnosis',
            description: 'Our technician will inspect your refrigerator thoroughly to identify the exact problem.',
            time: '15-30 mins',
            icon: '🔍'
        },
        {
            step: 2,
            title: 'Cost Estimation',
            description: 'We provide transparent pricing with no hidden charges. Free diagnosis included.',
            time: '5-10 mins',
            icon: '💰'
        },
        {
            step: 3,
            title: 'Repair Work',
            description: 'Our expert will fix the issue using genuine parts and professional tools.',
            time: '1-3 hours',
            icon: '🔧'
        },
        {
            step: 4,
            title: 'Testing & "',
            description: 'We test the repair thoroughly and provide best  service ".',
            time: '15-20 mins',
            icon: '✅'
        },
    ];

    // Brands We Service
    const brands = [
        'LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 'Voltas',
        'Panasonic', 'Hitachi', 'Daikin', 'Blue Star', 'Carrier', 'IFB'
    ];

    // Pricing
    const pricing = [
        {
            service: 'Gas Charging',
            price: '₹1,500 - ₹2,500',
            includes: ['Gas refill', 'Leak testing', 'Pressure check'],
        },
        {
            service: 'Compressor Repair',
            price: '₹3,000 - ₹6,000',
            includes: ['Diagnosis', 'Repair/Replacement', 'Testing'],
        },
        {
            service: 'PCB Repair',
            price: '₹2,000 - ₹4,000',
            includes: ['Circuit testing', 'Component replacement', 'Calibration'],
        },
        {
            service: 'General Service',
            price: '₹800 - ₹1,500',
            includes: ['Cleaning', 'Basic maintenance', 'Performance check'],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4 py-12 md:py-20">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} className="mr-2" />
                            Back to All Services
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                                <Wrench size={18} className="mr-2" />
                                <span>Expert Repair Service</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Professional <span className="text-yellow-300">Refrigerator</span> Repair Service
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                                Fast, reliable, and affordable refrigerator repair services by certified technicians.
                                Serving all major brands .
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+917678134697"
                                    className="group bg-white text-blue-700 px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <Phone size={22} />
                                    <span>Call Expert Now</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </a>

                                <a
                                    href="#booking"
                                    className="group bg-transparent border-2 border-white text-white px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                                >
                                    <Calendar size={20} />
                                    <span>Book Service</span>
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1716193696093-9c54b6a290e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Refrigerator Repair"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-2xl"
                                    priority
                                />
                            </div>

                            {/* Stats Overlay */}
                            <div className="absolute -bottom-4 left-4 right-4 bg-white text-blue-800 rounded-xl p-4 shadow-lg">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">30 Min</div>
                                        <div className="text-xs md:text-sm">Response Time</div>
                                    </div>
                                    <div className="text-center border-x border-gray-200">
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                                        <div className="text-xs md:text-sm">Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
                        <path fill="#f0f9ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,128C960,128,1056,96,1152,80C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-20 -mt-4">

                {/* Tabs Navigation */}
                <div className="flex overflow-x-auto mb-8 md:mb-12 scrollbar-hide">
                    <div className="flex space-x-1 bg-white/50 backdrop-blur-sm rounded-2xl p-1">
                        {[
                            { id: 'problems', label: 'Common Problems', icon: '⚠️' },
                            { id: 'process', label: 'Repair Process', icon: '🛠️' },
                            { id: 'pricing', label: 'Service Pricing', icon: '💰' },
                            { id: 'brands', label: 'Brands We Service', icon: '🏷️' },
                            // { id: 'booking', label: 'Book Service', icon: '📅' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 md:px-6 py-3 rounded-xl font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 hover:bg-white hover:text-blue-600'
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-8">

                    {/* Common Problems Tab */}
                    {activeTab === 'problems' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Common <span className="text-blue-600">Refrigerator Problems</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                Here are the most common refrigerator issues we fix regularly.
                                If you're experiencing any of these problems, our experts can help.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {problems.map((problem, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <div className="text-blue-600">
                                                    {problem.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900">{problem.title}</h3>
                                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${problem.severity === 'High'
                                                        ? 'bg-red-100 text-red-700'
                                                        : problem.severity === 'Medium'
                                                            ? 'bg-yellow-100 text-yellow-700'
                                                            : 'bg-green-100 text-green-700'
                                                        }`}>
                                                        {problem.severity}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 mb-3">{problem.description}</p>

                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Symptoms:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {problem.symptoms.map((symptom, i) => (
                                                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                                                {symptom}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <Clock size={16} className="mr-2" />
                                                        Fix time: {problem.fixTime}
                                                    </div>
                                                    <a
                                                        href="#booking"
                                                        className="text-blue-600 font-medium hover:text-blue-700 text-sm flex items-center gap-1"
                                                    >
                                                        Book Repair
                                                        <ArrowRight size={16} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Repair Process Tab */}
                    {activeTab === 'process' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Repair Process</span>
                            </h2>

                            <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-6 md:p-8 mb-8">
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {repairSteps.map((step) => (
                                        <div key={step.step} className="relative">
                                            <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                                                        {step.icon}
                                                    </div>
                                                    <div className="text-3xl font-bold text-blue-600">0{step.step}</div>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                                <p className="text-gray-600 mb-4">{step.description}</p>
                                                <div className="flex items-center text-sm text-blue-600 font-medium">
                                                    <Clock size={16} className="mr-2" />
                                                    Time: {step.time}
                                                </div>
                                            </div>
                                            {step.step < 4 && (
                                                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                                    <ArrowRight size={24} className="text-gray-300" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Service?</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
                                        <p className="text-gray-600 text-sm">Certified with 5+ years experience</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Shield size={28} className="text-blue-600" />
                                        </div>
                                        <p className="text-gray-600 text-sm">On all repairs and spare parts</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Clock size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Same Day Service</h4>
                                        <p className="text-gray-600 text-sm">Most repairs completed in single visit</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Free Diagnosis</h4>
                                        <p className="text-gray-600 text-sm">On first visit, no hidden charges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 'pricing' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Service <span className="text-blue-600">Pricing</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                Transparent pricing with no hidden charges. Prices may vary based on model and severity of issue.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Pricing Cards */}
                                <div className="space-y-6">
                                    {pricing.map((service, index) => (
                                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-gray-900">{service.service}</h3>
                                                <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                                            </div>

                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                                                <ul className="space-y-2">
                                                    {service.includes.map((item, i) => (
                                                        <li key={i} className="flex items-center text-gray-600">
                                                            <CheckCircle size={16} className="text-green-500 mr-3" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex items-center text-sm">
                                                    <Shield size={16} className="text-green-500 mr-2" />
                                                </div>
                                                <a
                                                    href="tel:+917678134697"
                                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                                >
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Emergency Service Card */}
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-2xl">
                                    <div className="text-center mb-8">
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <AlertCircle size={36} className="text-yellow-300" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Emergency Service</h3>
                                        <p className="text-blue-100">Available 24/7 for urgent repairs</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-lg mb-3">Free Diagnosis</h4>
                                            <ul className="space-y-2 text-blue-100">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="mr-3 text-green-300" />
                                                    Thorough inspection
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="mr-3 text-green-300" />
                                                    No charge if you don't proceed
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="mr-3 text-green-300" />
                                                    Transparent cost estimate
                                                </li>
                                            </ul>
                                        </div>

                                        <a
                                            href="tel:+917678134697"
                                            className="block bg-white text-blue-700 py-4 rounded-xl text-center font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                                        >
                                            Emergency Call: +91 76781 34697
                                        </a>

                                        <div className="text-center text-sm text-blue-200">
                                            <Clock size={16} className="inline mr-2" />
                                            30 minutes average response time
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Brands Tab */}
                    {activeTab === 'brands' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Brands We <span className="text-blue-600">Service</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                We repair all major refrigerator brands with genuine spare parts and manufacturer-approved techniques.
                            </p>

                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg mb-8">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 hover:bg-blue-50 rounded-xl p-4 text-center transition-colors border border-gray-100 hover:border-blue-200"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                                                <Wrench size={20} className="text-blue-600" />
                                            </div>
                                            <span className="font-semibold text-gray-900">{brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Derabassi', 'New Chandigarh'].map((city, index) => (
                                        <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                                            <Home size={20} className="text-blue-600 mr-3" />
                                            <span className="font-medium text-gray-900">{city}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <a
                                        href="tel:+917678134697"
                                        className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700"
                                    >
                                        <Phone size={20} className="mr-2" />
                                        Call to check service in your area
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Booking Tab */}
                    {activeTab === 'booking' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Book <span className="text-blue-600">Service Now</span>
                            </h2>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Contact Info */}
                                <div className="lg:col-span-2">
                                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>

                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                            <a
                                                href="tel:+917678134697"
                                                className="bg-blue-600 text-white p-6 rounded-2xl hover:bg-blue-700 transition-colors text-center"
                                            >
                                                <Phone size={32} className="mx-auto mb-4" />
                                                <div className="text-2xl font-bold">+91 76781 34697</div>
                                                <div className="text-blue-100 mt-2">Call for Appointment</div>
                                            </a>

                                            <a
                                                href="https://wa.me/917678134697"
                                                className="bg-green-600 text-white p-6 rounded-2xl hover:bg-green-700 transition-colors text-center"
                                            >
                                                <div className="text-4xl mb-4">💬</div>
                                                <div className="text-2xl font-bold">WhatsApp</div>
                                                <div className="text-green-100 mt-2">Chat with Expert</div>
                                            </a>
                                        </div>

                                        <div className="bg-blue-50 rounded-2xl p-6">
                                            <h4 className="font-bold text-gray-900 mb-4">Service Hours</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">Monday - Friday</span>
                                                    <span className="font-semibold text-gray-900">8:00 AM - 10:00 PM</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">Saturday - Sunday</span>
                                                    <span className="font-semibold text-gray-900">9:00 AM - 9:00 PM</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-3 border-t border-blue-100">
                                                    <span className="text-blue-600 font-bold">Emergency Service</span>
                                                    <span className="font-bold text-blue-600">24/7 Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl p-6 md:p-8 shadow-lg">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                                                <Star size={24} className="text-yellow-300" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold">Customer Review</h4>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <blockquote className="text-lg italic mb-4">
                                            "My LG refrigerator stopped cooling suddenly. Called these guys and they arrived within 45 minutes.
                                            Technician was professional, diagnosed the compressor issue, and fixed it in 2 hours.
                                            Great service and reasonable pricing!"
                                        </blockquote>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-300 rounded-full mr-3"></div>
                                            <div>
                                                <div className="font-bold">Rohit Verma</div>
                                                <div className="text-blue-200 text-sm">Chandigarh, Sector 35</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Form */}
                                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule Service</h3>

                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Your Name *</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="+91 98765 43210"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Refrigerator Brand</label>
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Brand</option>
                                                {brands.map((brand) => (
                                                    <option key={brand}>{brand}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Describe the Problem</label>
                                            <textarea
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="e.g., Not cooling, making noise, leaking water..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Preferred Date</label>
                                            <input
                                                type="date"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                                        >
                                            Book Service Now
                                        </button>

                                        <p className="text-gray-500 text-sm text-center">
                                            Our team will call you within 30 minutes to confirm
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        /* Hide scrollbar for tabs */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}