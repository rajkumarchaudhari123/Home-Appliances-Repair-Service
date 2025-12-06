// app/services/washing-machine/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Phone,
    Wrench,
    Clock,
    Shield,
    CheckCircle,
    AlertCircle,
    Droplets,
    Zap,
    RotateCw,
    Settings,
    Home,
    ArrowRight,
    Calendar,
    Users,
    Star,
    ChevronRight,
    ArrowLeft,
    RefreshCw,
    Volume2,
    AlertTriangle,
    Battery,
    Filter,
    Thermometer,
    Smartphone,
    ShieldCheck,
    Award,
    TrendingUp,
    Heart,
    Sparkles,
    BatteryCharging,
    Cpu,
    Wind,
    Droplet,
    Power,
    VolumeX,
    Vibrate,
    Loader,
    Gauge,
    Zap as Bolt,
    Shield as ShieldIcon,
    Home as HomeIcon,
    Truck
} from 'lucide-react';

export default function WashingMachinePage() {
    const [activeTab, setActiveTab] = useState('problems');
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check mobile on mount
    useEffect(() => {
        setIsVisible(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Common Problems
    const problems = [
        {
            icon: <RotateCw size={20} />,
            title: 'Not Spinning',
            description: 'Drum not rotating, clothes remain wet after cycle',
            symptoms: ['No spinning action', 'Clothes soaking wet', 'Motor humming', 'Error codes E4/E5'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Motor issues, broken belt, faulty lid switch',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: <Droplets size={20} />,
            title: 'Water Leakage',
            description: 'Water leaking from machine during wash',
            symptoms: ['Puddles under machine', 'Water dripping from sides', 'Floor damage', 'Mold smell'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Damaged hoses, pump seal, door gasket',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Zap size={20} />,
            title: 'Not Draining',
            description: 'Water stays in drum after wash cycle',
            symptoms: ['Water in drum', 'Drainage error', 'Musty smell', 'Water overflow'],
            fixTime: '1-1.5 hours',
            severity: 'Medium',
            commonCause: 'Clogged drain pump, blocked filter, hose issues',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Power size={20} />,
            title: 'Not Starting',
            description: 'Machine won\'t power on or start cycle',
            symptoms: ['No power', 'No response to buttons', 'Error lights blinking', 'Dead display'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Power supply issues, faulty PCB, door lock failure',
            gradient: 'from-red-500 to-rose-500'
        },
        {
            icon: <Volume2 size={20} />,
            title: 'Loud Noises',
            description: 'Unusual sounds during wash/spin cycle',
            symptoms: ['Grinding noise', 'Banging sounds', 'Squeaking/screeching', 'Vibration'],
            fixTime: '1.5-2.5 hours',
            severity: 'Medium',
            commonCause: 'Worn bearings, foreign objects, unbalanced drum',
            gradient: 'from-yellow-500 to-amber-500'
        },
        {
            icon: <Vibrate size={20} />,
            title: 'Excessive Vibration',
            description: 'Machine shakes violently during spin',
            symptoms: ['Machine "walking"', 'Loud vibrations', 'Floor damage', 'Unbalanced loads'],
            fixTime: '30-60 mins',
            severity: 'Low',
            commonCause: 'Unlevel machine, suspension springs, worn dampers',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Thermometer size={20} />,
            title: 'Not Heating Water',
            description: 'Water remains cold in hot wash cycles',
            symptoms: ['Cold washes', 'Heater error codes', 'Long cycle times', 'Poor cleaning'],
            fixTime: '1.5-2 hours',
            severity: 'Medium',
            commonCause: 'Faulty heater element, thermostat, wiring issues',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: <Loader size={20} />,
            title: 'Stuck on Cycle',
            description: 'Machine stops mid-cycle or won\'t progress',
            symptoms: ['Cycle doesn\'t advance', 'Stuck timer', 'Error codes', 'Infinite loop'],
            fixTime: '1-2 hours',
            severity: 'Medium',
            commonCause: 'Faulty timer, control board, sensor issues',
            gradient: 'from-indigo-500 to-purple-500'
        },
    ];

    // Types of Washing Machines with detailed info
    const machineTypes = [
        {
            type: 'Front Load Washing Machine',
            image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1170&auto=format&fit=crop',
            features: [
                'Superior cleaning with tumble action',
                'Energy efficient (A+++ rating)',
                'Gentle on clothes',
                'High spin speed (1200-1600 RPM)',
                'Steam wash option available'
            ],
            commonIssues: ['Door seal leakage', 'Drum bearing failure', 'Heater problems', 'PCB faults'],
            pros: ['Better cleaning', 'Water efficient', 'Quieter operation', 'More programs'],
            cons: ['Higher cost', 'Bending required', 'Mold risk if not maintained'],
            maintenanceTips: [
                'Clean door gasket weekly',
                'Use HE detergent only',
                'Leave door open after wash',
                'Monthly drum clean cycle'
            ],
            brands: ['LG', 'Samsung', 'Bosch', 'IFB', 'Whirlpool'],
            gradient: 'from-blue-500 to-indigo-500',
            icon: <RefreshCw size={20} />
        },
        {
            type: 'Top Load Washing Machine',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1170&auto=format&fit=crop',
            features: [
                'Easy loading (no bending)',
                'Faster wash cycles',
                'Affordable pricing',
                'Less maintenance required',
                'Agitator/impeller options'
            ],
            commonIssues: ['Agitator problems', 'Lid switch failure', 'Timer issues', 'Motor belt wear'],
            pros: ['Easy to use', 'Lower cost', 'Quick washes', 'Less mold risk'],
            cons: ['More water usage', 'Harsher on clothes', 'Less efficient'],
            maintenanceTips: [
                'Clean filter monthly',
                'Balance loads properly',
                'Check belt tension',
                'Avoid overloading'
            ],
            brands: ['Whirlpool', 'LG', 'Samsung', 'Haier', 'Onida'],
            gradient: 'from-green-500 to-emerald-500',
            icon: <Loader size={20} />
        },
        {
            type: 'Semi-Automatic Washing Machine',
            image: 'https://images.unsplash.com/photo-1532916697008-5bc24f95592a?q=80&w=1090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: [
                'Manual water filling',
                'Separate wash & dry tubs',
                'No permanent plumbing needed',
                'Very affordable',
                'Portable design'
            ],
            commonIssues: ['Timer problems', 'Motor failure', 'Drainage issues', 'Pulley/belt wear'],
            pros: ['Very economical', 'Water saving', 'Portable', 'Simple operation'],
            cons: ['Manual effort needed', 'Basic features', 'Longer wash time'],
            maintenanceTips: [
                'Manual water level control',
                'Regular pulley lubrication',
                'Clean both tubs',
                'Check drain pump'
            ],
            brands: ['Godrej', 'Videocon', 'Lloyd', 'Kenstar', 'Candy'],
            gradient: 'from-orange-500 to-amber-500',
            icon: <Settings size={20} />
        },
        {
            type: 'Fully Automatic Washing Machine',
            image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            features: [
                'Completely automated',
                'Smart features & WiFi',
                'Multiple specialized programs',
                'Auto detergent dispenser',
                'Child lock & delay start'
            ],
            commonIssues: ['PCB/sensor faults', 'Display problems', 'Motor control issues', 'Software glitches'],
            pros: ['Fully automatic', 'Smart features', 'Energy efficient', 'Multiple programs'],
            cons: ['Expensive repairs', 'Complex electronics', 'Power dependent'],
            maintenanceTips: [
                'Regular software updates',
                'Clean detergent dispenser',
                'Check sensors',
                'Professional servicing'
            ],
            brands: ['LG ThinQ', 'Samsung Smart Care', 'Whirlpool 6th Sense', 'IFB Neptune', 'Bosch Home Connect'],
            gradient: 'from-purple-500 to-pink-500',
            icon: <Smartphone size={20} />
        },
    ];

    // Repair Process Steps
    const repairSteps = [
        {
            step: 1,
            title: 'Diagnosis & Inspection',
            description: 'Our expert technician performs comprehensive diagnosis using specialized tools to identify the exact issue.',
            time: '20-30 mins',
            icon: '🔍',
            color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
            details: ['Visual inspection', 'Error code analysis', 'Electrical testing', 'Performance check']
        },
        {
            step: 2,
            title: 'Cost Estimation',
            description: 'Transparent pricing with free diagnosis. Get detailed quote with part-wise breakdown.',
            time: '10-15 mins',
            icon: '💰',
            color: 'bg-gradient-to-r from-green-500 to-emerald-500',
            details: ['Part cost breakdown', 'Labor charges', 'Warranty details', 'Time estimation']
        },
        {
            step: 3,
            title: 'Expert Repair',
            description: 'Professional repair using genuine/OEM parts with manufacturer-approved techniques.',
            time: '1-3 hours',
            icon: '🔧',
            color: 'bg-gradient-to-r from-orange-500 to-red-500',
            details: ['Genuine spare parts', 'Specialized tools', 'Manufacturer methods', 'Quality workmanship']
        },
        {
            step: 4,
            title: 'Testing & Handover',
            description: 'Complete test run with performance verification. Handover with maintenance tips.',
            time: '20-30 mins',
            icon: '✅',
            color: 'bg-gradient-to-r from-purple-500 to-pink-500',
            details: ['Full cycle test', 'Performance verification', 'Customer demo', 'Warranty certificate']
        },
    ];

    // Brands We Service
    const brands = [
        { name: 'LG', logo: '🎯', color: 'from-red-500 to-pink-500' },
        { name: 'Samsung', logo: '⚡', color: 'from-blue-500 to-cyan-500' },
        { name: 'Whirlpool', logo: '🌀', color: 'from-green-500 to-teal-500' },
        { name: 'IFB', logo: '🏆', color: 'from-purple-500 to-indigo-500' },
        { name: 'Bosch', logo: '🔧', color: 'from-gray-600 to-gray-800' },
        { name: 'Haier', logo: '🌊', color: 'from-blue-600 to-blue-800' },
        { name: 'Panasonic', logo: '🎵', color: 'from-blue-400 to-blue-600' },
        { name: 'Godrej', logo: '🏠', color: 'from-green-600 to-green-800' },
        { name: 'Onida', logo: '👁️', color: 'from-red-600 to-orange-500' },
        { name: 'Videocon', logo: '📺', color: 'from-yellow-500 to-orange-500' },
        { name: 'Lloyd', logo: '⚙️', color: 'from-gray-500 to-gray-700' },
        { name: 'Kenstar', logo: '⭐', color: 'from-yellow-400 to-yellow-600' },
    ];

    // Pricing
    const pricing = [
        {
            service: 'Motor Repair/Replacement',
            price: '₹2,500 - ₹5,000',
            includes: ['Motor testing & diagnosis', 'Repair/replacement', 'Installation & alignment', 'Performance testing'],
            time: '2-3 hours',
            warranty: '90 days',
            popular: true,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            service: 'Drain Pump Repair',
            price: '₹1,200 - ₹2,800',
            includes: ['Pump inspection', 'Cleaning/repair', 'Seal replacement', 'Testing'],
            time: '1-1.5 hours',
            warranty: '90 days',
            popular: false,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            service: 'PCB/Control Board',
            price: '₹3,000 - ₹6,500',
            includes: ['Circuit diagnosis', 'Component repair/replacement', 'Programming', 'Testing'],
            time: '2-3 hours',
            warranty: '90 days',
            popular: true,
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            service: 'Complete Service',
            price: '₹600 - ₹1,500',
            includes: ['Deep cleaning', 'Lubrication', 'Performance optimization', 'Safety check'],
            time: '1-1.5 hours',
            warranty: '30 days',
            popular: false,
            gradient: 'from-green-500 to-emerald-500'
        },
    ];

    // Stats
    const stats = [
        { value: '2000+', label: 'Machines Repaired', icon: <Wrench size={20} />, color: 'text-blue-400' },
        { value: '4.8/5', label: 'Customer Rating', icon: <Star size={20} />, color: 'text-yellow-400' },
        { value: '45 Min', label: 'Avg Response Time', icon: <Clock size={20} />, color: 'text-green-400' },
        { value: '90 Days', label: 'Warranty Period', icon: <ShieldCheck size={20} />, color: 'text-purple-400' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
            {/* Floating WhatsApp Button - Mobile Only */}
            <a
                href="https://wa.me/917678134697"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 md:hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
            >
                <span className="text-xl">💬</span>
            </a>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow delay-500"></div>
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 py-8 md:py-16 lg:py-20">
                    {/* Back Button */}
                    <div className="mb-4 sm:mb-6">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-blue-100 hover:text-white transition-colors group text-sm sm:text-base"
                        >
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to All Services
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-4 sm:space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full animate-pulse-once">
                                <Sparkles size={14} className="mr-2" />
                                <span className="text-xs sm:text-sm font-medium">Expert Washing Machine Repair</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Professional <span className="text-yellow-300 drop-shadow-lg">Washing Machine</span> Repair
                            </h1>

                            {/* Description */}
                            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
                                Expert repair services for all washing machine types - Front Load, Top Load, Semi-Automatic & Fully Automatic.
                                Same-day service with 90-day warranty on all repairs.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <a
                                    href="tel:+917678134697"
                                    className="group bg-white text-blue-700 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg active:scale-95"
                                >
                                    <Phone size={20} />
                                    <span>Emergency Call Now</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </a>

                                <a
                                    href="#booking"
                                    className="group bg-transparent border-2 border-white text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 active:scale-95"
                                >
                                    <Calendar size={20} />
                                    <span>Book Service</span>
                                </a>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center hover:bg-white/20 transition-colors animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <div className={stat.color}>
                                                {stat.icon}
                                            </div>
                                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300">
                                                {stat.value}
                                            </div>
                                        </div>
                                        <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative mt-6 lg:mt-0">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-2 shadow-2xl transform hover:scale-[1.01] transition-transform duration-700">
                                    <Image
                                        src="https://images.unsplash.com/photo-1632923565835-6582b54f2105?q=80&w=688&auto=format&fit=crop"
                                        alt="Washing Machine Repair"
                                        width={600}
                                        height={400}
                                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover rounded-xl sm:rounded-2xl"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                                </div>

                                {/* Emergency Badge */}
                                <div className="absolute -top-2 right-2 sm:-top-3 sm:right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg animate-pulse text-xs sm:text-sm">
                                    <AlertCircle size={14} className="inline mr-1 sm:mr-2" />
                                    24/7 Emergency
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 sm:p-4 rounded-xl shadow-lg animate-float-left hidden sm:block">
                                    <ShieldCheck size={20} className="mb-1" />
                                    <div className="text-xs sm:text-sm font-bold">90 Days<br />Warranty</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 md:h-20">
                        <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1392,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 -mt-4">

                {/* Tabs Navigation - Mobile Optimized */}
                <div className="relative mb-6 sm:mb-8 md:mb-12">
                    <div className="flex overflow-x-auto pb-4 scrollbar-hide md:justify-center">
                        <div className="flex space-x-1 bg-white/50 backdrop-blur-sm rounded-2xl p-1">
                            {[
                                { id: 'problems', label: 'Problems', icon: '⚠️', color: 'from-red-500 to-orange-500' },
                                { id: 'types', label: 'Types', icon: '🧺', color: 'from-blue-500 to-cyan-500' },
                                { id: 'process', label: 'Process', icon: '🔧', color: 'from-green-500 to-emerald-500' },
                                { id: 'pricing', label: 'Pricing', icon: '💰', color: 'from-yellow-500 to-amber-500' },
                                { id: 'brands', label: 'Brands', icon: '🏷️', color: 'from-purple-500 to-pink-500' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-[1.02]`
                                        : 'text-gray-700 hover:bg-white hover:text-blue-600'
                                        }`}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Scroll hint for mobile */}
                    <div className="md:hidden text-center text-gray-500 text-xs mt-2 animate-pulse">
                        ← Scroll for more tabs →
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-6 sm:mt-8">

                    {/* Common Problems Tab */}
                    {activeTab === 'problems' && (
                        <div className="animate-fade-in">
                            <div className="text-center sm:text-left mb-6 sm:mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Problems & Solutions</span>
                                </h2>
                                <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                                    These are the most frequent washing machine issues we fix daily. Our experts can diagnose and repair any problem quickly and efficiently.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {problems.map((problem, index) => (
                                    <div
                                        key={index}
                                        className={`bg-gradient-to-br ${problem.gradient} text-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                                {problem.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg sm:text-xl font-bold">{problem.title}</h3>
                                                    <span className="px-2 py-1 rounded text-xs font-bold bg-white/20 backdrop-blur-sm">
                                                        {problem.severity}
                                                    </span>
                                                </div>
                                                <p className="text-white/90 mb-3 text-sm sm:text-base">{problem.description}</p>

                                                <div className="mb-3">
                                                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Symptoms:</h4>
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                        {problem.symptoms.map((symptom, i) => (
                                                            <span key={i} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                                                                {symptom}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Common Cause:</h4>
                                                    <p className="text-white/80 text-sm">{problem.commonCause}</p>
                                                </div>

                                                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                                                    <div className="flex items-center text-sm">
                                                        <Clock size={14} className="mr-2" />
                                                        {problem.fixTime}
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            setActiveTab('booking');
                                                            setTimeout(() => {
                                                                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                                                            }, 100);
                                                        }}
                                                        className="text-white font-medium hover:text-yellow-200 text-sm flex items-center gap-1"
                                                    >
                                                        Book Repair
                                                        <ChevronRight size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Tips */}
                            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">⚡ Quick Maintenance Tips</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {[
                                        {
                                            title: 'Clean Filter Monthly',
                                            desc: 'Remove lint and debris from filter to prevent drainage issues',
                                            icon: <Filter size={20} />,
                                            color: 'from-blue-500 to-cyan-500'
                                        },
                                        {
                                            title: 'Balance Load Properly',
                                            desc: 'Distribute clothes evenly to reduce vibration and noise',
                                            icon: <Loader size={20} />,
                                            color: 'from-green-500 to-emerald-500'
                                        },
                                        {
                                            title: 'Use Right Detergent',
                                            desc: 'Use HE detergent for front load machines to prevent suds overflow',
                                            icon: <Droplet size={20} />,
                                            color: 'from-purple-500 to-pink-500'
                                        },
                                        {
                                            title: 'Leave Door Open',
                                            desc: 'Prevent mold and mildew by keeping door open between washes',
                                            icon: <Wind size={20} />,
                                            color: 'from-orange-500 to-red-500'
                                        },
                                    ].map((tip, index) => (
                                        <div
                                            key={index}
                                            className={`bg-gradient-to-br ${tip.color} text-white rounded-xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in`}
                                            style={{ animationDelay: `${300 + index * 100}ms` }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                    {tip.icon}
                                                </div>
                                                <h4 className="font-bold text-lg">{tip.title}</h4>
                                            </div>
                                            <p className="text-white/90 text-sm">{tip.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Machine Types Tab */}
                    {activeTab === 'types' && (
                        <div className="animate-fade-in">
                            <div className="text-center sm:text-left mb-6 sm:mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Washing Machines</span>
                                </h2>
                                <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                                    We service all types of washing machines. Each type has unique features, common issues, and specific repair methods.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8 sm:mb-12">
                                {machineTypes.map((machine, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                                    >
                                        {/* Image Header */}
                                        <div className="relative h-48 sm:h-56 overflow-hidden">
                                            <Image
                                                src={machine.image}
                                                alt={machine.type}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${machine.gradient} opacity-80`}></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                                        {machine.icon}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">{machine.type}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 sm:p-6">
                                            {/* Features */}
                                            <div className="mb-4">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                    <CheckCircle size={16} className="text-green-500" />
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-2">
                                                    {machine.features.slice(0, 3).map((feature, i) => (
                                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Common Issues */}
                                            <div className="mb-4">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                    <AlertTriangle size={16} className="text-red-500" />
                                                    Common Issues
                                                </h4>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {machine.commonIssues.map((issue, i) => (
                                                        <span key={i} className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">
                                                            {issue}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Brands */}
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                    <Award size={16} className="text-blue-500" />
                                                    Popular Brands
                                                </h4>
                                                <p className="text-gray-600 text-sm">{machine.brands.join(', ')}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Parts We Repair */}
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-6">🔧 Parts We Repair & Replace</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                                    {[
                                        { part: 'Motor', icon: <RotateCw size={24} />, issues: 'Brushes, bearings, windings' },
                                        { part: 'Pump', icon: <Droplets size={24} />, issues: 'Drain & inlet pumps' },
                                        { part: 'PCB', icon: <Cpu size={24} />, issues: 'Control boards & displays' },
                                        { part: 'Heater', icon: <Thermometer size={24} />, issues: 'Heating element' },
                                        { part: 'Bearings', icon: <Settings size={24} />, issues: 'Drum & motor bearings' },
                                        { part: 'Belts', icon: <RefreshCw size={24} />, issues: 'Drive belts & pulleys' },
                                        { part: 'Sensors', icon: <Zap size={24} />, issues: 'Water level, temperature' },
                                        { part: 'Door Lock', icon: <ShieldIcon size={24} />, issues: 'Lock mechanism' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors animate-fade-in"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                                {item.icon}
                                            </div>
                                            <h4 className="font-bold text-lg mb-1">{item.part}</h4>
                                            <p className="text-blue-100 text-xs">{item.issues}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Repair Process Tab */}
                    {activeTab === 'process' && (
                        <div className="animate-fade-in">
                            <div className="text-center sm:text-left mb-6 sm:mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Repair Process</span>
                                </h2>
                                <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                                    From diagnosis to delivery, we follow a systematic 4-step process to ensure quality repairs every time.
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="relative mb-8 sm:mb-12">
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {repairSteps.map((step) => (
                                        <div key={step.step} className="relative">
                                            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg h-full hover:shadow-xl transition-all duration-300 group">
                                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${step.color} rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl`}>
                                                        {step.icon}
                                                    </div>
                                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">0{step.step}</div>
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                                                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{step.description}</p>
                                                <div className="mb-3 sm:mb-4">
                                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Includes:</h4>
                                                    <ul className="space-y-1">
                                                        {step.details.map((detail, i) => (
                                                            <li key={i} className="flex items-center text-gray-600 text-xs sm:text-sm">
                                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex items-center text-sm text-blue-600 font-medium">
                                                    <Clock size={14} className="mr-2" />
                                                    Time: {step.time}
                                                </div>
                                            </div>
                                            {step.step < 4 && (
                                                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                                    <ArrowRight size={20} className="text-gray-300" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">⭐ Why Choose Our Washing Machine Repair?</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {[
                                        {
                                            title: 'Expert Technicians',
                                            desc: 'Certified with 5+ years washing machine repair experience',
                                            icon: <Users size={20} />,
                                            color: 'from-blue-500 to-cyan-500'
                                        },

                                        {
                                            title: 'Same Day Service',
                                            desc: 'Most repairs completed in single visit',
                                            icon: <Clock size={20} />,
                                            color: 'from-orange-500 to-red-500'
                                        },
                                        {
                                            title: 'Free Diagnosis',
                                            desc: 'On first visit, no obligation to proceed',
                                            icon: <CheckCircle size={20} />,
                                            color: 'from-purple-500 to-pink-500'
                                        },
                                        {
                                            title: 'Genuine Parts',
                                            desc: 'We use only OEM or high-quality spare parts',
                                            icon: <Wrench size={20} />,
                                            color: 'from-yellow-500 to-amber-500'
                                        },
                                        {
                                            title: '24/7 Support',
                                            desc: 'Emergency service available round the clock',
                                            icon: <Phone size={20} />,
                                            color: 'from-indigo-500 to-purple-500'
                                        },
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`bg-gradient-to-br ${feature.color} text-white rounded-xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                                                    <p className="text-white/90 text-sm">{feature.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 'pricing' && (
                        <div className="animate-fade-in">
                            <div className="text-center sm:text-left mb-6 sm:mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Pricing</span>
                                </h2>
                                <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                                    Transparent pricing with no hidden charges. Diagnostic fee is waived if you proceed with repair.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-6">
                                {/* Pricing Cards */}
                                <div className="lg:col-span-2">
                                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                                        {pricing.map((service, index) => (
                                            <div
                                                key={index}
                                                className={`bg-gradient-to-br ${service.gradient} text-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] animate-fade-in`}
                                                style={{ animationDelay: `${index * 100}ms` }}
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-lg sm:text-xl font-bold">{service.service}</h3>
                                                        {service.popular && (
                                                            <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mt-1">
                                                                ⭐ MOST POPULAR
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-xl sm:text-2xl font-bold">{service.price}</div>
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Includes:</h4>
                                                    <ul className="space-y-2">
                                                        {service.includes.map((item, i) => (
                                                            <li key={i} className="flex items-center text-white/90">
                                                                <CheckCircle size={14} className="mr-2 text-green-300" />
                                                                <span className="text-sm">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center text-sm">
                                                            <Clock size={14} className="mr-1" />
                                                            {service.time}
                                                        </div>
                                                        <div className="flex items-center text-sm">
                                                            <ShieldCheck size={14} className="mr-1" />
                                                            {service.warranty}
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="tel:+917678134697"
                                                        className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Services */}
                                <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-2xl">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">✨ Additional Services</h3>

                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5">
                                            <h4 className="font-bold text-lg mb-3">Installation Service</h4>
                                            <ul className="space-y-2 text-blue-100 mb-4">
                                                <li className="flex items-center text-sm">
                                                    <CheckCircle size={14} className="text-green-300 mr-2" />
                                                    New machine installation
                                                </li>
                                                <li className="flex items-center text-sm">
                                                    <CheckCircle size={14} className="text-green-300 mr-2" />
                                                    Leveling & plumbing
                                                </li>
                                                <li className="flex items-center text-sm">
                                                    <CheckCircle size={14} className="text-green-300 mr-2" />
                                                    Demo & testing
                                                </li>
                                            </ul>
                                            <div className="text-xl font-bold">₹500 - ₹1,500</div>
                                        </div>

                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5">
                                            <h4 className="font-bold text-lg mb-3">Annual Maintenance</h4>
                                            <ul className="space-y-2 text-blue-100 mb-4">
                                                <li className="flex items-center text-sm">
                                                    <CheckCircle size={14} className="text-green-300 mr-2" />
                                                    Deep cleaning service
                                                </li>
                                                <li className="flex items-center text-sm">
                                                    <CheckCircle size={14} className="text-green-300 mr-2" />
                                                    Performance optimization
                                                </li>
                                                <li className="flex items-center text-sm">
                                                    <CheckCircle size={14} className="text-green-300 mr-2" />
                                                    Parts inspection
                                                </li>
                                            </ul>
                                            <div className="text-xl font-bold">₹999/year</div>
                                        </div>

                                        <a
                                            href="tel:+917678134697"
                                            className="block bg-white text-purple-700 py-3 sm:py-4 rounded-xl text-center font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-lg"
                                        >
                                            📞 Get Custom Quote
                                        </a>

                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Truck size={20} />
                                                <h5 className="font-bold">Free Home Service</h5>
                                            </div>
                                            <p className="text-blue-100 text-sm">
                                                In Chandigarh, Panchkula & Mohali areas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Brands Tab */}
                    {activeTab === 'brands' && (
                        <div className="animate-fade-in">
                            <div className="text-center sm:text-left mb-6 sm:mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    Brands We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Service</span>
                                </h2>
                                <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                                    We repair all major washing machine brands with genuine spare parts and manufacturer-approved techniques.
                                </p>
                            </div>

                            {/* Brands Grid */}
                            <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className={`bg-gradient-to-br ${brand.color} text-white rounded-xl p-3 sm:p-4 text-center transition-all duration-300 transform hover:scale-[1.05] hover:shadow-xl animate-fade-in`}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <div className="text-2xl sm:text-3xl mb-2">{brand.logo}</div>
                                            <span className="font-bold text-sm sm:text-base">{brand.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8">
                                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">📍 Service Areas</h3>
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            {['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Derabassi', 'New Chandigarh', 'Banur'].map((city, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    <HomeIcon size={18} className="text-blue-600 mr-2 sm:mr-3" />
                                                    <span className="font-medium text-gray-900 text-sm sm:text-base">{city}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">🚨 Need Urgent Repair?</h3>
                                        <a
                                            href="tel:+917678134697"
                                            className="block bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 sm:py-4 rounded-xl text-center font-bold text-base sm:text-lg mb-4 hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] shadow-lg"
                                        >
                                            Emergency Call Now
                                        </a>
                                        <div className="text-center text-gray-600">
                                            <Clock size={16} className="inline mr-2" />
                                            <span className="text-sm sm:text-base">Average response time: 30-45 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Booking Section */}
                <div id="booking" className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Ready to Fix Your Washing Machine?</h2>
                        <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                            Get instant service booking with our 24/7 customer support. Free diagnosis on first visit.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+917678134697"
                            className="bg-white text-blue-700 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-3"
                        >
                            <Phone size={20} />
                            Call Now: +91 76781 34697
                        </a>
                        <a
                            href="https://wa.me/917678134697"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-3"
                        >
                            <span>💬</span>
                            WhatsApp Now
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold mb-2 text-yellow-300">✓ Free</div>
                            <div className="text-blue-100 text-sm">Diagnosis</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold mb-2 text-yellow-300">Same Day</div>
                            <div className="text-blue-100 text-sm">Service</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-xl sm:text-2xl font-bold mb-2 text-yellow-300">90 Days</div>
                            <div className="text-blue-100 text-sm">Warranty</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx global>{`
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
        
        @keyframes pulse-once {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-left {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-8px) translateX(-4px);
          }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-pulse-once {
          animation: pulse-once 2s ease-in-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-float-left {
          animation: float-left 3s ease-in-out infinite;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Touch optimization */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          .active\:scale-95:active {
            transform: scale(0.95);
          }
        }
      `}</style>
        </div>
    );
}