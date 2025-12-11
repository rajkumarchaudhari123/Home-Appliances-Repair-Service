// app/services/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
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
    const [stats, setStats] = useState({
        appliances: 0,
        rating: 0,
        response: 0
    });

    // Count up animation for stats
    useEffect(() => {
        const timer = setTimeout(() => {
            setStats({
                appliances: 5000,
                rating: 4.9,
                response: 30
            });
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    // All Services Data
    const services = [
        {
            id: 'washing-machine',
            name: 'Washing Machine',
            icon: <WashingMachine size={24} />,
            color: 'from-blue-500 to-cyan-500',
            heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1170&auto=format&fit=crop',
            description: 'Professional washing machine repair for all brands',
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
            description: 'Safe microwave oven repair with testing',
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
            location: 'Chandigarh',
            rating: 5,
            comment: 'Excellent washing machine repair. Fixed my LG washing machine motor issue in just 2 hours.',
            date: '15 Nov 2024',
            service: 'Washing Machine'
        },
        {
            name: 'Priya Sharma',
            location: 'Mohali',
            rating: 5,
            comment: 'My Samsung refrigerator stopped cooling. They arrived in 30 minutes and fixed compressor issue.',
            date: '10 Nov 2024',
            service: 'Refrigerator'
        },
        {
            name: 'Amit Patel',
            location: 'Panchkula',
            rating: 5,
            comment: 'Quick microwave repair. Technician was knowledgeable and did proper safety testing.',
            date: '5 Nov 2024',
            service: 'Microwave Oven'
        },
        {
            name: 'Sunita Mehta',
            location: 'Zirakpur',
            rating: 5,
            comment: 'Very satisfied with washing machine repair. Team was punctual and did quality work.',
            date: '28 Oct 2024',
            service: 'Washing Machine'
        },
    ];

    // Stats display
    const statsDisplay = [
        {
            value: stats.appliances,
            label: 'Appliances Repaired',
            icon: <Wrench size={20} />,
            color: 'text-blue-400',
            suffix: '+'
        },
        {
            value: stats.rating,
            label: 'Customer Rating',
            icon: <Star size={20} />,
            color: 'text-yellow-400',
            suffix: '/5'
        },
        {
            value: stats.response,
            label: 'Avg Response Time',
            icon: <Clock size={20} />,
            color: 'text-green-400',
            suffix: ' Min'
        },
    ];

    // Service-specific data
    const serviceData = {
        'washing-machine': {
            problems: [
                {
                    icon: <RotateCw size={24} />,
                    title: 'Not Spinning',
                    description: 'Washing machine runs but drum doesn\'t spin',
                    symptoms: ['Water drains', 'Motor hums', 'No spin', 'Clothes wet'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Motor coupler or belt issue'
                },
                {
                    icon: <Droplets size={24} />,
                    title: 'Water Leakage',
                    description: 'Water leaking from washing machine',
                    symptoms: ['Puddles under machine', 'Damp floor', 'Leaking during cycle'],
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
                    symptoms: ['Food spoiling', 'Warm interior', 'Compressor running'],
                    fixTime: '2-3 hours',
                    severity: 'High',
                    commonCause: 'Gas leakage or compressor issue'
                },
                {
                    icon: <Droplet size={24} />,
                    title: 'Water Leakage',
                    description: 'Water leaking inside or outside',
                    symptoms: ['Puddles under fridge', 'Ice buildup', 'Drain hole clogged'],
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
                    symptoms: ['Turntable works', 'Light turns on', 'No heating'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Magnetron failure'
                },
                {
                    icon: <Zap size={24} />,
                    title: 'No Power',
                    description: 'Microwave won\'t turn on',
                    symptoms: ['No display', 'No light', 'Dead controls'],
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
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-20">
                    {/* Back Button */}
                    <div className="mb-4 md:mb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-100 hover:text-white transition-colors text-sm md:text-base"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white/20 rounded-full mb-4 md:mb-6 backdrop-blur-sm text-sm md:text-base">
                            <Wrench size={14} className="mr-1.5 md:mr-2" />
                            <span>Complete Appliance Repair Services</span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
                            Professional <span className="text-yellow-300">Appliance Repair</span> Services
                        </h1>

                        <p className="text-sm md:text-base lg:text-lg text-blue-100 mb-6 md:mb-8 leading-relaxed px-2">
                            One-stop solution for all appliance repairs. Expert technicians, genuine parts, and same-day service.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <a
                                href="tel:+919810878908"
                                className="group bg-white text-blue-600 px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Phone size={18} />
                                <span>Call Appliance Expert</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 px-4 md:px-6 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-xs md:text-sm">Visit Charge</div>
                                    <div className="text-xl md:text-2xl font-bold text-yellow-300">₹299</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12 max-w-4xl mx-auto">
                        {statsDisplay.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:bg-white/20 transition-colors animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-center gap-1 md:gap-2 mb-1">
                                    <div className={stat.color}>
                                        {stat.icon}
                                    </div>
                                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-300">
                                        {stat.value}{stat.suffix}
                                    </div>
                                </div>
                                <div className="text-blue-200 text-xs md:text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-12 md:h-16 lg:h-24">
                        <path fill="#eff6ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-20 -mt-2 md:-mt-4">

                {/* Service Selection */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-2">
                        Select Your <span className="text-blue-600">Appliance</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    setActiveService(service.id);
                                    setActiveTab('problems');
                                }}
                                className={`relative overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-6 text-left transition-all duration-300 transform hover:scale-[1.02] ${activeService === service.id
                                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg md:shadow-2xl ring-2 md:ring-4 ring-white/20`
                                    : 'bg-white text-gray-700 shadow-sm md:shadow-lg hover:shadow-md md:hover:shadow-xl'
                                    }`}
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${activeService === service.id ? 'bg-white/20' : 'bg-blue-50'
                                        }`}>
                                        <div className={activeService === service.id ? 'text-white' : 'text-blue-600'}>
                                            {React.cloneElement(service.icon, { size: 20 })}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-base md:text-lg lg:text-xl mb-1 md:mb-2 truncate">{service.name}</h3>
                                        <p className={`text-xs md:text-sm mb-2 md:mb-4 ${activeService === service.id ? 'text-blue-100' : 'text-gray-600'
                                            } line-clamp-2`}>
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 md:gap-2">
                                            {service.commonProblems.slice(0, 2).map((problem, index) => (
                                                <span key={index} className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs ${activeService === service.id
                                                    ? 'bg-white/20'
                                                    : 'bg-blue-50 text-blue-700'
                                                    } truncate max-w-[120px]`}>
                                                    {problem}
                                                </span>
                                            ))}
                                            {service.commonProblems.length > 2 && (
                                                <span className={`px-2 py-0.5 rounded-full text-xs ${activeService === service.id
                                                    ? 'bg-white/20'
                                                    : 'bg-blue-50 text-blue-700'
                                                    }`}>
                                                    +{service.commonProblems.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {activeService === service.id && (
                                    <div className="absolute top-2 right-2 md:top-4 md:right-4">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                )}


                            </button>
                        ))}
                    </div>
                </div>

                {/* Service Details */}
                <div className="bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden border border-blue-100">
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${currentService?.color} text-white p-4 md:p-6 lg:p-8`}>
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
                            <div className="flex-1">
                                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                        {React.cloneElement(currentService?.icon || <div />, { size: 20 })}
                                    </div>
                                    <div>
                                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{currentService?.name} Repair</h2>
                                        <p className="text-blue-100 mt-1 md:mt-2 text-sm md:text-base">{currentService?.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 md:gap-2 mt-3 md:mt-4">
                                    {currentService?.commonProblems.slice(0, 4).map((problem, index) => (
                                        <span key={index} className="px-2 py-1 md:px-3 md:py-1 bg-white/20 rounded-full text-xs md:text-sm backdrop-blur-sm truncate max-w-[150px]">
                                            {problem}
                                        </span>
                                    ))}
                                    {currentService && currentService.commonProblems.length > 4 && (
                                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs md:text-sm backdrop-blur-sm">
                                            +{currentService.commonProblems.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex-shrink-0 mt-4 md:mt-0">
                                <a
                                    href="tel:+919810878908"
                                    className="inline-flex items-center gap-1.5 md:gap-2 bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg text-sm md:text-base whitespace-nowrap"
                                >
                                    <Phone size={16} className="md:size-5" />
                                    Book {currentService?.name} Repair
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-4 md:p-6 lg:p-8">
                        {/* Tabs - Scrollable for mobile */}
                        <div className="mb-6 md:mb-8">
                            <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                                <div className="flex space-x-3 bg-blue-50 rounded-xl md:rounded-2xl p-1 min-w-max">
                                    {[
                                        { id: 'problems', label: 'Common Problems', icon: '⚠️' },
                                        { id: 'testimonials', label: 'Reviews', icon: '⭐' },
                                        { id: 'why-us', label: 'Why Choose Us', icon: '🏆' },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl font-medium text-xs md:text-sm lg:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-1 md:gap-2 ${activeTab === tab.id
                                                ? 'bg-blue-600 text-white shadow-sm md:shadow-md'
                                                : 'text-gray-700 hover:bg-white hover:text-blue-600'
                                                }`}
                                        >
                                            <span>{tab.icon}</span>
                                            <span>{tab.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-4 md:mt-6">

                            {/* Problems Tab */}
                            {activeTab === 'problems' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                        Common {currentService?.name} Problems
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {currentData?.problems.map((problem: any, index: number) => (
                                            <div
                                                key={index}
                                                className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-100"
                                            >
                                                <div className="flex items-start gap-3 md:gap-4">
                                                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <div className="text-blue-600">
                                                            {React.cloneElement(problem.icon, { size: 16 })}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex justify-between items-start mb-1 md:mb-2">
                                                            <h4 className="text-base md:text-lg font-bold text-gray-900 truncate">{problem.title}</h4>
                                                            <span className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs font-semibold ${problem.severity === 'High'
                                                                ? 'bg-red-100 text-red-700'
                                                                : problem.severity === 'Medium'
                                                                    ? 'bg-yellow-100 text-yellow-700'
                                                                    : 'bg-green-100 text-green-700'
                                                                }`}>
                                                                {problem.severity}
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm">{problem.description}</p>

                                                        <div className="mb-2 md:mb-3">
                                                            <h5 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Symptoms:</h5>
                                                            <div className="flex flex-wrap gap-1 md:gap-2">
                                                                {problem.symptoms.slice(0, 3).map((symptom: string, i: number) => (
                                                                    <span key={i} className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-blue-700 rounded-full text-xs truncate max-w-[100px]">
                                                                        {symptom}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="mb-3 md:mb-4">
                                                            <h5 className="text-xs md:text-sm font-semibold text-gray-700 mb-0.5">Common Cause:</h5>
                                                            <p className="text-gray-600 text-xs md:text-sm line-clamp-2">{problem.commonCause}</p>
                                                        </div>

                                                        <div className="flex items-center justify-between pt-2 md:pt-3 border-t border-blue-100">
                                                            <div className="flex items-center text-xs md:text-sm text-gray-600">
                                                                <Clock size={12} className="mr-1 md:mr-2" />
                                                                Fix time: {problem.fixTime}
                                                            </div>
                                                            <a
                                                                href="tel:+919810878908"
                                                                className="text-blue-600 text-xs md:text-sm font-medium hover:underline flex items-center"
                                                            >
                                                                Expert Solution
                                                                <ArrowRight size={12} className="ml-1" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    <div className="text-center mt-6 md:mt-8">
                                        <a
                                            href="tel:+919810878908"
                                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
                                        >
                                            <Phone size={16} className="md:size-5" />
                                            Get Expert Diagnosis Now
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Testimonials Tab */}
                            {activeTab === 'testimonials' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                        Customer Reviews
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                                        {testimonials.slice(0, 4).map((testimonial, index) => (
                                            <div key={index} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md border border-blue-100">
                                                <div className="flex items-start justify-between mb-3 md:mb-4">
                                                    <div className="min-w-0">
                                                        <h4 className="text-base md:text-lg font-bold text-gray-900 truncate">{testimonial.name}</h4>
                                                        <p className="text-gray-600 text-xs md:text-sm truncate">{testimonial.location}</p>
                                                    </div>
                                                    <div className="text-xs md:text-sm text-gray-500 flex-shrink-0">{testimonial.date}</div>
                                                </div>

                                                <div className="flex mb-3 md:mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={14}
                                                            className={`md:size-5 mr-0.5 ${i < testimonial.rating
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'fill-gray-200 text-gray-200'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>

                                                <blockquote className="text-gray-700 italic mb-4 md:mb-6 text-xs md:text-sm line-clamp-3">
                                                    "{testimonial.comment}"
                                                </blockquote>

                                                <div className="flex items-center pt-3 md:pt-4 border-t border-blue-100">
                                                    <Wrench size={12} className="text-blue-600 mr-1.5 md:mr-2" />
                                                    <span className="text-xs md:text-sm text-gray-600 truncate">{testimonial.service}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Overall Rating */}
                                    <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl md:rounded-3xl p-6 md:p-8">
                                        <div className="text-center">
                                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">4.9/5</div>
                                            <div className="flex justify-center mb-3 md:mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={20} className="md:size-6 fill-yellow-300 text-yellow-300 mx-0.5" />
                                                ))}
                                            </div>
                                            <p className="text-sm md:text-lg mb-4 md:mb-6">Based on 500+ customer reviews</p>
                                            <div className="grid grid-cols-3 gap-2 md:gap-4">
                                                <div className="text-center">
                                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold">98%</div>
                                                    <div className="text-blue-200 text-xs md:text-sm">Satisfaction</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold">95%</div>
                                                    <div className="text-blue-200 text-xs md:text-sm">On-Time</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold">99%</div>
                                                    <div className="text-blue-200 text-xs md:text-sm">First Fix</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Why Choose Us Tab */}
                            {activeTab === 'why-us' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                                        Why Choose Our Service?
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                                <Users size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Expert Technicians</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                Certified technicians with 5+ years experience.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                                <Clock size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Same Day Service</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                Most repairs completed within hours.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                                <CheckCircle size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Quality Service</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                We ensure complete customer satisfaction.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                                <Shield size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Service Warranty</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                Warranty on service and spare parts.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                                <Wrench size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Genuine Parts</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                We use only OEM or high-quality spare parts.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-200">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                                                <Truck size={18} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">Home Service</h4>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                Doorstep service across Chandigarh region.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Pricing Info */}
                                    <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl md:rounded-3xl p-6 md:p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                            <div className="text-center">
                                                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">₹299</div>
                                                <div className="text-blue-200 text-sm md:text-base">Visit Charge</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">20% OFF</div>
                                                <div className="text-blue-200 text-sm md:text-base">First Time Customers</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Same Day</div>
                                                <div className="text-blue-200 text-sm md:text-base">Service Available</div>
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
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
                    <div className="text-center">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 px-2">
                            Need Professional Repair?
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                            We repair all major home appliances with expert technicians and genuine parts.
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-6 md:mb-8">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service.id)}
                                    className={`px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl font-medium text-xs md:text-sm transition-all ${activeService === service.id
                                        ? 'bg-white text-blue-600 shadow-md'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                        }`}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <a
                                href="tel:+919810878908"
                                className="bg-white text-blue-600 px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 md:gap-3"
                            >
                                <Phone size={18} className="md:size-6" />
                                Call Now: +91 98108 78908
                            </a>
                            <a
                                href="https://wa.me/919810878908?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-green-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 md:gap-3"
                            >
                                <MessageCircle size={18} className="md:size-6" />
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom styles */}
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
                .line-clamp-2 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                .line-clamp-3 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }
            `}</style>
        </div>
    );
}