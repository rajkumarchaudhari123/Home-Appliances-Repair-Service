// app/services/page.tsx
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
    Zap,
    Thermometer,
    RotateCw,
    Settings,
    Home,
    ArrowRight,
    Calendar,
    Users,
    Star,
    ChevronRight,
    ArrowLeft,
    Microwave,
    Power,
    Sparkles,
    AlertTriangle,
    Battery,
    Search,
    MapPin,
    Mail,
    Droplets,
    Tv,
    Wind,
    Refrigerator,
    WashingMachine,
    Droplet,
    Fan,
    Snowflake,
    Volume2,
    Monitor,
    Gamepad2,
    Cable,
    Flame,
    Filter,
    RefreshCw,
    ThermometerSun,
    Package,
    Smartphone,
    Gamepad2 as Remote,
    Smartphone as SmartphoneIcon,
    Info,
    MessageCircle,
    Award,
    Truck
} from 'lucide-react';

export default function AllServicesPage() {
    const [activeService, setActiveService] = useState('washing-machine');
    const [activeTab, setActiveTab] = useState('problems');

    // All Services Data
    const services = [
        {
            id: 'washing-machine',
            name: 'Washing Machine',
            icon: <WashingMachine size={24} />,
            color: 'from-blue-500 to-cyan-500',
            heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1170&auto=format&fit=crop',
            description: 'Professional washing machine repair for all brands and models',
            commonProblems: [
                'Not spinning',
                'Water leakage',
                'Not draining',
                'No power',
                'Noisy operation',
                'Control panel issues'
            ]
        },
        {
            id: 'refrigerator',
            name: 'Refrigerator',
            icon: <Refrigerator size={24} />,
            color: 'from-cyan-500 to-teal-500',
            heroImage: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=1170&auto=format&fit=crop',
            description: 'Refrigerator and freezer repair services',
            commonProblems: [
                'Not cooling',
                'Water leakage',
                'Ice maker issues',
                'Compressor problems',
                'Temperature issues',
                'Door seal problems'
            ]
        },
        {
            id: 'microwave',
            name: 'Microwave Oven',
            icon: <Microwave size={24} />,
            color: 'from-orange-500 to-red-500',
            heroImage: 'https://images.unsplash.com/photo-1616569078186-1e3c1b97a4ee?q=80&w=1170&auto=format&fit=crop',
            description: 'Safe microwave oven repair with leakage testing',
            commonProblems: [
                'Not heating',
                'No power',
                'Sparks inside',
                'Turntable issues',
                'Control panel faults',
                'Door problems'
            ]
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: 'Rohit Verma',
            location: 'Chandigarh, Sector 35',
            rating: 5,
            comment: 'Excellent washing machine repair service. Fixed my LG washing machine motor issue in just 2 hours. Highly professional!',
            date: '15 Nov 2024',
            service: 'Washing Machine Repair'
        },
        {
            name: 'Priya Sharma',
            location: 'Mohali, Phase 7',
            rating: 5,
            comment: 'My Samsung refrigerator stopped cooling. They arrived within 30 minutes and fixed the compressor issue. Great service!',
            date: '10 Nov 2024',
            service: 'Refrigerator Repair'
        },
        {
            name: 'Amit Patel',
            location: 'Panchkula, Sector 5',
            rating: 5,
            comment: 'Quick and professional microwave repair. The technician was knowledgeable and did proper safety testing. Recommended!',
            date: '5 Nov 2024',
            service: 'Microwave Oven Repair'
        },
        {
            name: 'Sunita Mehta',
            location: 'Zirakpur',
            rating: 5,
            comment: 'Very satisfied with the washing machine repair service. The team was punctual and did quality work .',
            date: '28 Oct 2024',
            service: 'Washing Machine Repair'
        },
    ];

    // Stats
    const stats = [
        { value: '5000+', label: 'Appliances Repaired', icon: <Wrench size={20} />, color: 'text-blue-400' },
        { value: '4.9/5', label: 'Customer Rating', icon: <Star size={20} />, color: 'text-yellow-400' },
        { value: '30 Min', label: 'Avg Response Time', icon: <Clock size={20} />, color: 'text-green-400' },
    ];

    // Service-specific data (simplified version for this page)
    const serviceData = {
        'washing-machine': {
            problems: [
                {
                    icon: <RotateCw size={24} />,
                    title: 'Not Spinning',
                    description: 'Washing machine runs but drum doesn\'t spin',
                    symptoms: ['Water drains', 'Motor hums', 'No spin', 'Clothes stay wet'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Motor coupler or belt issue'
                },
                {
                    icon: <Droplets size={24} />,
                    title: 'Water Leakage',
                    description: 'Water leaking from washing machine',
                    symptoms: ['Puddles under machine', 'Damp floor', 'Leaking during cycle', 'Visible drips'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Hose or pump seal failure'
                },
            ],
            brands: ['LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Panasonic', 'Haier', 'Godrej'],
        },
        'refrigerator': {
            problems: [
                {
                    icon: <Snowflake size={24} />,
                    title: 'Not Cooling',
                    description: 'Refrigerator not maintaining temperature',
                    symptoms: ['Food spoiling', 'Warm interior', 'Compressor running', 'No cold air'],
                    fixTime: '2-3 hours',
                    severity: 'High',
                    commonCause: 'Gas leakage or compressor issue'
                },
                {
                    icon: <Droplet size={24} />,
                    title: 'Water Leakage',
                    description: 'Water leaking inside or outside',
                    symptoms: ['Puddles under fridge', 'Ice buildup', 'Drain hole clogged', 'Defrost issue'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Defrost system or drain blocked'
                },
            ],
            brands: ['LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 'Panasonic', 'Voltas', 'Hitachi'],
        },
        'microwave': {
            problems: [
                {
                    icon: <Power size={24} />,
                    title: 'Not Heating',
                    description: 'Microwave runs but doesn\'t heat food',
                    symptoms: ['Turntable works', 'Light turns on', 'No heating', 'Cold food'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Magnetron failure'
                },
                {
                    icon: <Zap size={24} />,
                    title: 'No Power',
                    description: 'Microwave won\'t turn on at all',
                    symptoms: ['No display', 'No light', 'Dead controls', 'Complete failure'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Power supply or fuse issue'
                },
            ],
            brands: ['Samsung', 'LG', 'Whirlpool', 'IFB', 'Panasonic', 'Godrej', 'Haier', 'Bajaj'],
        }
    };

    // Get current service data
    const currentService = services.find(s => s.id === activeService);
    const currentData = serviceData[activeService as keyof typeof serviceData];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4 py-12 md:py-20">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} className="mr-2" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                            <Wrench size={18} className="mr-2" />
                            <span>Complete Appliance Repair Services</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Professional <span className="text-yellow-300">Appliance Repair</span> Services
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                            One-stop solution for all your appliance repairs. Expert technicians, genuine parts, and same-day service
                            for washing machines, refrigerators, and microwave ovens.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919810878908"
                                className="group bg-white text-blue-600 px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Phone size={22} />
                                <span>Call Appliance Expert</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </a>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 px-6 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-sm">Visit Charge</div>
                                    <div className="text-2xl font-bold text-yellow-300">₹299</div>
                                    <div className="text-xs text-blue-200">Visit charge applicable</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <div className={stat.color}>
                                        {stat.icon}
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold text-yellow-300">
                                        {stat.value}
                                    </div>
                                </div>
                                <div className="text-blue-200 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
                        <path fill="#eff6ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-20 -mt-4">

                {/* Service Selection */}
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Select Your <span className="text-blue-600">Appliance</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    setActiveService(service.id);
                                    setActiveTab('problems');
                                }}
                                className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-[1.02] ${activeService === service.id
                                    ? `bg-gradient-to-r ${service.color} text-white shadow-2xl ring-4 ring-white/20`
                                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${activeService === service.id ? 'bg-white/20' : 'bg-blue-50'
                                        }`}>
                                        <div className={activeService === service.id ? 'text-white' : 'text-blue-600'}>
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                                        <p className={`text-sm mb-4 ${activeService === service.id ? 'text-blue-100' : 'text-gray-600'
                                            }`}>
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.commonProblems.slice(0, 3).map((problem, index) => (
                                                <span key={index} className={`px-3 py-1 rounded-full text-xs ${activeService === service.id
                                                    ? 'bg-white/20'
                                                    : 'bg-blue-50 text-blue-700'
                                                    }`}>
                                                    {problem}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {activeService === service.id && (
                                    <div className="absolute top-4 right-4">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                )}

                                <div className="mt-6 flex items-center justify-between">
                                    <div className={`text-sm ${activeService === service.id ? 'text-blue-200' : 'text-gray-500'}`}>
                                        {service.commonProblems.length}+ common issues
                                    </div>
                                    <div className={`${activeService === service.id ? 'text-white' : 'text-blue-600'}`}>
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>


                </div>

                {/* Service Details */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${currentService?.color} text-white p-6 md:p-8`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                                        {currentService?.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold">{currentService?.name} Repair</h2>
                                        <p className="text-blue-100 mt-2">{currentService?.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {currentService?.commonProblems.map((problem, index) => (
                                        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                                            {problem}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-shrink-0">
                                <a
                                    href="tel:+919810878908"
                                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                                >
                                    <Phone size={20} />
                                    Book {currentService?.name} Repair
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6 md:p-8">
                        {/* Tabs */}
                        <div className="flex overflow-x-auto mb-8 scrollbar-hide">
                            <div className="flex space-x-1 bg-blue-50 rounded-2xl p-1">
                                {[
                                    { id: 'problems', label: 'Common Problems', icon: '⚠️' },
                                    // { id: 'brands', label: 'Brands We Service', icon: '🏷️' },
                                    { id: 'testimonials', label: 'Reviews', icon: '⭐' },
                                    { id: 'why-us', label: 'Why Choose Us', icon: '🏆' },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 md:px-6 py-3 rounded-xl font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                            ? 'bg-blue-600 text-white shadow-md'
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
                        <div className="mt-6">

                            {/* Problems Tab */}
                            {activeTab === 'problems' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Common {currentService?.name} Problems
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {currentData?.problems.map((problem: any, index: number) => (
                                            <div
                                                key={index}
                                                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <div className="text-blue-600">
                                                            {problem.icon}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h4 className="text-lg font-bold text-gray-900">{problem.title}</h4>
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
                                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Symptoms:</h5>
                                                            <div className="flex flex-wrap gap-2">
                                                                {problem.symptoms.map((symptom: string, i: number) => (
                                                                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                                                        {symptom}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <h5 className="text-sm font-semibold text-gray-700 mb-1">Common Cause:</h5>
                                                            <p className="text-gray-600 text-sm">{problem.commonCause}</p>
                                                        </div>

                                                        <div className="flex items-center justify-between pt-3 border-t border-blue-100">
                                                            <div className="flex items-center text-sm text-gray-600">
                                                                <Clock size={16} className="mr-2" />
                                                                Fix time: {problem.fixTime}
                                                            </div>
                                                            <span className="text-blue-600 text-sm font-medium hover:underline">

                                                                <a

                                                                    href="tel:+919810878908"
                                                                    className="text-blue-800 font-semibold ml-1 hover:underline"
                                                                >
                                                                    Call for expert solution                                                                </a>
                                                            </span>



                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* View More Link */}
                                    <div className="text-center mt-8">
                                        <Link
                                            href={`/services/${currentService?.id}`}
                                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                                        >
                                            <span>View all {currentService?.name} problems and solutions</span>
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Brands Tab */}
                            {activeTab === 'brands' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Brands We Repair
                                    </h3>

                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {currentData?.brands.map((brand: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-blue-100"
                                                >
                                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                                        {currentService?.icon}
                                                    </div>
                                                    <div className="font-semibold text-gray-900">{brand}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 p-6 bg-white rounded-2xl border border-blue-200">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle size={24} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-2">All Brands Covered</h4>
                                                    <p className="text-gray-600">
                                                        We repair all brands, models, and types of {currentService?.name.toLowerCase()}s.
                                                        From latest smart models to older units, our technicians have the expertise.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Testimonials Tab */}
                            {activeTab === 'testimonials' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Customer Reviews
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                                                    </div>
                                                    <div className="text-sm text-gray-500">{testimonial.date}</div>
                                                </div>

                                                <div className="flex mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={18}
                                                            className={`${i < testimonial.rating
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'fill-gray-200 text-gray-200'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>

                                                <blockquote className="text-gray-700 italic mb-6">
                                                    "{testimonial.comment}"
                                                </blockquote>

                                                <div className="flex items-center pt-4 border-t border-blue-100">
                                                    <Wrench size={16} className="text-blue-600 mr-2" />
                                                    <span className="text-sm text-gray-600">{testimonial.service}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Overall Rating */}
                                    <div className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-3xl p-8">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold mb-2">4.9/5</div>
                                            <div className="flex justify-center mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={24} className="fill-yellow-300 text-yellow-300" />
                                                ))}
                                            </div>
                                            <p className="text-lg mb-4">Based on 500+ customer reviews</p>
                                            <div className="flex justify-center space-x-4">
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold">98%</div>
                                                    <div className="text-blue-200">Satisfaction Rate</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold">95%</div>
                                                    <div className="text-blue-200">On-Time Service</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-bold">99%</div>
                                                    <div className="text-blue-200">First Fix Success</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Why Choose Us Tab */}
                            {activeTab === 'why-us' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Why Choose Our {currentService?.name} Repair Service?
                                    </h3>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Users size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3">Expert Technicians</h4>
                                            <p className="text-gray-600">
                                                Certified technicians with 5+ years of experience in {currentService?.name.toLowerCase()} repair.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Clock size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3">Same Day Service</h4>
                                            <p className="text-gray-600">
                                                Most repairs completed within hours. Emergency services available 24/7.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <CheckCircle size={24} className="text-blue-600" />
                                            </div>

                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Shield size={24} className="text-blue-600" />
                                            </div>

                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Wrench size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3">Genuine Parts</h4>
                                            <p className="text-gray-600">
                                                We use only OEM or high-quality spare parts for all repairs.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Truck size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3"> Home Service</h4>
                                            <p className="text-gray-600">
                                                Doorstep service across Chandigarh, Panchkula, and Mohali.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Pricing Info */}
                                    <div className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-3xl p-8">
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold mb-2">₹299</div>
                                                <div className="text-blue-200">Visit Charge</div>
                                                <div className="text-sm text-blue-100 mt-1">(Adjustable in repair)</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Need Another Appliance Repair?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            We repair all major home appliances with expert technicians and genuine parts.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center mb-8">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service.id)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all ${activeService === service.id
                                        ? 'bg-white text-blue-600 shadow-lg'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                        }`}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919810878908"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                            >
                                <Phone size={24} />
                                Call Now: +91 98108 78908
                            </a>
                            <a
                                href="https://wa.me/919810878908?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add some custom styles for animations */}
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
          animation: fade-in 0.5s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}