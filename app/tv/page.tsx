// app/services/tv/page.tsx
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
    Tv,
    Zap,
    Volume2,
    Settings,
    Home,
    ArrowRight,
    Calendar,
    Users,
    Star,
    ChevronRight,
    ArrowLeft,
    Power,
    Monitor,
    Battery,
    Wifi
} from 'lucide-react';

export default function TVPage() {
    const [activeTab, setActiveTab] = useState('problems');

    // Common Problems
    const problems = [
        {
            icon: <Power size={24} />,
            title: 'No Power',
            description: 'TV not turning on, no LED indicator',
            symptoms: ['Black screen', 'No sound', 'No standby light', 'Remote not working'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Power supply board failure'
        },
        {
            icon: <Monitor size={24} />,
            title: 'No Display',
            description: 'Screen black but sound works',
            symptoms: ['Black screen', 'Backlight issues', 'Flickering', 'Sound working'],
            fixTime: '2-3 hours',
            severity: 'High',
            commonCause: 'LED backlight or T-con board issue'
        },
        {
            icon: <Volume2 size={24} />,
            title: 'No Sound',
            description: 'Picture works but no audio',
            symptoms: ['Muted sound', 'Crackling audio', 'No speaker output', 'Volume issues'],
            fixTime: '1 hour',
            severity: 'Medium',
            commonCause: 'Audio board or speaker failure'
        },
        {
            icon: <Zap size={24} />,
            title: 'Lines on Screen',
            description: 'Vertical/horizontal lines or dead pixels',
            symptoms: ['Colored lines', 'Pixel issues', 'Screen tearing', 'Flickering'],
            fixTime: '2-3 hours',
            severity: 'High',
            commonCause: 'Panel or connection issues'
        },
        {
            icon: <Wifi size={24} />,
            title: 'Smart TV Issues',
            description: 'Internet, apps, or software problems',
            symptoms: ['No Wi-Fi', 'Apps crashing', 'Slow performance', 'Update failures'],
            fixTime: '1-2 hours',
            severity: 'Medium',
            commonCause: 'Software or motherboard issues'
        },
        {
            icon: <Settings size={24} />,
            title: 'Remote/Input Issues',
            description: 'Remote not working or input problems',
            symptoms: ['Remote unresponsive', 'HDMI issues', 'USB not working', 'Source errors'],
            fixTime: '30-60 mins',
            severity: 'Low',
            commonCause: 'IR sensor or input board failure'
        },
    ];

    // TV Types
    const tvTypes = [
        {
            type: 'LED TV',
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1170&auto=format&fit=crop',
            features: ['Energy efficient', 'Slim design', 'Good picture quality'],
            commonIssues: ['Backlight failure', 'Power supply', 'Panel issues']
        },
        {
            type: 'OLED TV',
            image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1170&auto=format&fit=crop',
            features: ['Perfect blacks', 'Wide viewing angles', 'Thin design'],
            commonIssues: ['Burn-in', 'Panel degradation', 'Power issues']
        },
        {
            type: 'QLED TV',
            image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&w=1170&auto=format&fit=crop',
            features: ['Bright display', 'Quantum dots', 'Vivid colors'],
            commonIssues: ['Backlight issues', 'Color uniformity', 'Smart features']
        },
        {
            type: 'Smart TV',
            image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1333&auto=format&fit=crop',
            features: ['Built-in apps', 'Voice control', 'Screen mirroring'],
            commonIssues: ['Wi-Fi problems', 'App crashes', 'Software updates']
        },
    ];

    // Repair Process Steps
    const repairSteps = [
        {
            step: 1,
            title: 'Diagnosis',
            description: 'Thorough testing to identify exact problem using professional tools.',
            time: '20-30 mins',
            icon: '🔍'
        },
        {
            step: 2,
            title: 'Cost Estimation',
            description: 'Transparent pricing with no hidden charges. Visit charges Rs 299 included.',
            time: '5-10 mins',
            icon: '💰'
        },
        {
            step: 3,
            title: 'Component Repair',
            description: 'Professional repair using genuine parts and advanced techniques.',
            time: '1-4 hours',
            icon: '🔧'
        },
        {
            step: 4,
            title: 'Testing & Calibration',
            description: 'Complete testing, picture calibration, and 90 days warranty.',
            time: '20-30 mins',
            icon: '✅'
        },
    ];

    // Brands We Service
    const brands = [
        'Samsung', 'LG', 'Sony', 'OnePlus', 'Xiaomi', 'Panasonic',
        'Vu', 'TCL', 'Hisense', 'Realme', 'Motorola', 'iFFALCON'
    ];

    // Pricing
    const pricing = [
        {
            service: 'Power Board Repair',
            price: '₹1,500 - ₹3,500',
            includes: ['Board testing', 'Component replacement', 'Soldering'],
            warranty: '90 days'
        },
        {
            service: 'LED Backlight Repair',
            price: '₹2,000 - ₹6,000',
            includes: ['LED strip replacement', 'Driver repair', 'Testing'],
            warranty: '120 days'
        },
        {
            service: 'Main Board Repair',
            price: '₹2,500 - ₹5,000',
            includes: ['Circuit testing', 'Chip repair', 'Software update'],
            warranty: '90 days'
        },
        {
            service: 'Panel Repair',
            price: '₹3,000 - ₹8,000',
            includes: ['Panel testing', 'Connection repair', 'Calibration'],
            warranty: '90 days'
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-gray-900 overflow-hidden">
                {/* Glowing Effect */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4 py-12 md:py-20">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-blue-300 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} className="mr-2" />
                            Back to All Services
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                                <Tv size={18} className="mr-2" />
                                <span>Professional TV Repair Service</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Expert <span className="text-cyan-400">TV Repair</span> Service
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                Professional TV repair for all brands and screen types. Our certified technicians
                                fix power, display, sound, and smart TV issues with precision and care.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+91 07206904101"
                                    className="group bg-white text-gray-900 px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <Phone size={22} />
                                    <span>Call TV Expert</span>
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

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                    <div className="text-xl md:text-2xl font-bold text-cyan-400">30 Min</div>
                                    <div className="text-gray-300 text-sm">Response Time</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                    <div className="text-xl md:text-2xl font-bold text-cyan-400">90 Days</div>
                                    <div className="text-gray-300 text-sm">Warranty</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                    <div className="text-xl md:text-2xl font-bold text-cyan-400">4.9/5</div>
                                    <div className="text-gray-300 text-sm">Rating</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                    <div className="text-xl md:text-2xl font-bold text-cyan-400">Same Day</div>
                                    <div className="text-gray-300 text-sm">Repair</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
                                <Image
                                    src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1170&auto=format&fit=crop"
                                    alt="TV Repair Service"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-2xl"
                                    priority
                                />
                            </div>

                            {/* Emergency Badge */}
                            <div className="absolute -top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                                <AlertCircle size={16} className="inline mr-2" />
                                Same Day Repair
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
                        <path fill="#111827" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-20 -mt-4">

                {/* Tabs Navigation */}
                <div className="flex overflow-x-auto mb-8 md:mb-12 scrollbar-hide">
                    <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
                        {[
                            { id: 'problems', label: 'Common Problems', icon: '⚠️' },
                            { id: 'types', label: 'TV Types', icon: '📺' },
                            { id: 'process', label: 'Repair Process', icon: '🔧' },
                            { id: 'pricing', label: 'Service Pricing', icon: '💰' },
                            { id: 'brands', label: 'Brands We Service', icon: '🏷️' },
                            { id: 'booking', label: 'Book Service', icon: '📅' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 md:px-6 py-3 rounded-xl font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-cyan-600 text-white shadow-lg'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
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
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Common <span className="text-cyan-400">TV Problems</span>
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-3xl">
                                These are the most frequent TV issues we fix. Our experts specialize in diagnosing and repairing all types of TV problems.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {problems.map((problem, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-cyan-500/20">
                                                <div className="text-cyan-400">
                                                    {problem.icon}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${problem.severity === 'High'
                                                        ? 'bg-red-900/30 text-red-400 border border-red-800'
                                                        : problem.severity === 'Medium'
                                                            ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800'
                                                            : 'bg-green-900/30 text-green-400 border border-green-800'
                                                        }`}>
                                                        {problem.severity}
                                                    </span>
                                                </div>
                                                <p className="text-gray-300 mb-3">{problem.description}</p>

                                                <div className="mb-3">
                                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Symptoms:</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {problem.symptoms.map((symptom, i) => (
                                                            <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600">
                                                                {symptom}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Common Cause:</h4>
                                                    <p className="text-gray-300 text-sm">{problem.commonCause}</p>
                                                </div>

                                                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                                                    <div className="flex items-center text-sm text-gray-400">
                                                        <Clock size={16} className="mr-2" />
                                                        Fix time: {problem.fixTime}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Tips */}
                            <div className="mt-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-6">TV Maintenance Tips</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 border border-cyan-500/20">
                                            <CheckCircle size={24} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-white mb-2">Proper Ventilation</h4>
                                        <p className="text-gray-300 text-sm">Keep 4-6 inches space around TV for heat dissipation.</p>
                                    </div>
                                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 border border-cyan-500/20">
                                            <CheckCircle size={24} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-white mb-2">Surge Protection</h4>
                                        <p className="text-gray-300 text-sm">Use good quality surge protector to prevent power damage.</p>
                                    </div>
                                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 border border-cyan-500/20">
                                            <CheckCircle size={24} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-white mb-2">Regular Cleaning</h4>
                                        <p className="text-gray-300 text-sm">Clean screen with microfiber cloth, avoid chemicals.</p>
                                    </div>
                                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 border border-cyan-500/20">
                                            <CheckCircle size={24} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-white mb-2">Firmware Updates</h4>
                                        <p className="text-gray-300 text-sm">Keep smart TV software updated for best performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TV Types Tab */}
                    {activeTab === 'types' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Types of <span className="text-cyan-400">Televisions</span>
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-3xl">
                                We repair all types of modern televisions. Each technology has its own repair methods and common issues.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {tvTypes.map((tv, index) => (
                                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-700 hover:border-cyan-500/30">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={tv.image}
                                                alt={tv.type}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-xl font-bold text-white">{tv.type}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-white mb-2 text-cyan-300">Features:</h4>
                                                <ul className="space-y-1">
                                                    {tv.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center text-sm text-gray-300">
                                                            <CheckCircle size={14} className="text-green-400 mr-2" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-2 text-cyan-300">Common Issues:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {tv.commonIssues.map((issue, i) => (
                                                        <span key={i} className="px-3 py-1 bg-red-900/20 text-red-300 rounded-full text-xs border border-red-800/30">
                                                            {issue}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Parts We Repair */}
                            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-cyan-500/20">
                                <h3 className="text-2xl font-bold text-white mb-6">TV Components We Repair</h3>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                                            <Zap size={28} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-lg text-white">Power Supply</h4>
                                        <p className="text-cyan-200 text-sm">SMPS boards, capacitors, fuses</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                                            <Monitor size={28} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-lg text-white">Display Panel</h4>
                                        <p className="text-cyan-200 text-sm">LED backlights, T-con boards</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                                            <Settings size={28} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-lg text-white">Main Board</h4>
                                        <p className="text-cyan-200 text-sm">Processors, memory, chipsets</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                                            <Volume2 size={28} className="text-cyan-400" />
                                        </div>
                                        <h4 className="font-bold text-lg text-white">Audio System</h4>
                                        <p className="text-cyan-200 text-sm">Speakers, audio boards, amplifiers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Repair Process Tab */}
                    {activeTab === 'process' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Our <span className="text-cyan-400">Repair Process</span>
                            </h2>

                            <div className="relative mb-12">
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {repairSteps.map((step) => (
                                        <div key={step.step} className="relative">
                                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg h-full border border-gray-700">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 bg-cyan-900/30 rounded-xl flex items-center justify-center text-2xl border border-cyan-500/30">
                                                        {step.icon}
                                                    </div>
                                                    <div className="text-3xl font-bold text-cyan-400">0{step.step}</div>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                                <p className="text-gray-300 mb-4">{step.description}</p>
                                                <div className="flex items-center text-sm text-cyan-400 font-medium">
                                                    <Clock size={16} className="mr-2" />
                                                    Time: {step.time}
                                                </div>
                                            </div>
                                            {step.step < 4 && (
                                                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                                    <ArrowRight size={24} className="text-gray-600" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our TV Repair Service?</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                                            <Users size={24} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Certified Technicians</h4>
                                            <p className="text-gray-300 text-sm">TV repair specialists with 8+ years experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                                            <Shield size={24} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">90 Days Warranty</h4>
                                            <p className="text-gray-300 text-sm">On all repairs and genuine spare parts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                                            <Clock size={24} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Same Day Service</h4>
                                            <p className="text-gray-300 text-sm">Most repairs completed within hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                                            <CheckCircle size={24} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Free Diagnosis</h4>
                                            <p className="text-gray-300 text-sm">No charge if you don't proceed with repair</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                                            <Wrench size={24} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Genuine Parts</h4>
                                            <p className="text-gray-300 text-sm">We use only OEM or high-quality spare parts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                                        <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                                            <Phone size={24} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-2">Home Service</h4>
                                            <p className="text-gray-300 text-sm">We come to your location, no need to carry TV</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Pricing Tab */}
                    {activeTab === 'pricing' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Service <span className="text-cyan-400">Pricing</span>
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-3xl">
                                Transparent pricing with no hidden charges. Diagnostic fee is waived if you proceed with repair.
                            </p>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Pricing Cards */}
                                <div className="lg:col-span-2">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {pricing.map((service, index) => (
                                            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-cyan-500/30 transition-colors">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-bold text-white">{service.service}</h3>
                                                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                                                </div>

                                                <div className="mb-4">
                                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Includes:</h4>
                                                    <ul className="space-y-2">
                                                        {service.includes.map((item, i) => (
                                                            <li key={i} className="flex items-center text-gray-300">
                                                                <CheckCircle size={16} className="text-green-400 mr-3" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                                    <div className="flex items-center text-sm">
                                                        <Shield size={16} className="text-green-400 mr-2" />
                                                        <span className="font-medium text-gray-300">Warranty: {service.warranty}</span>
                                                    </div>
                                                    <a
                                                        href="tel:+91 07206904101"
                                                        className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Services */}
                                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 text-white rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-cyan-500/30">
                                    <h3 className="text-2xl font-bold mb-6">Additional Services</h3>

                                    <div className="space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                            <h4 className="font-bold text-lg mb-3 text-cyan-300">TV Installation</h4>
                                            <ul className="space-y-3 text-gray-300">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-400 mr-3" />
                                                    Wall mounting service
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-400 mr-3" />
                                                    Cable management
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-400 mr-3" />
                                                    Setup & calibration
                                                </li>
                                            </ul>
                                            <div className="mt-4 text-xl font-bold text-cyan-400">₹800 - ₹2,500</div>
                                        </div>

                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                            <h4 className="font-bold text-lg mb-3 text-cyan-300">Annual Maintenance</h4>
                                            <ul className="space-y-3 text-gray-300">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-400 mr-3" />
                                                    Complete diagnostics
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-400 mr-3" />
                                                    Software optimization
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-400 mr-3" />
                                                    Preventive maintenance
                                                </li>
                                            </ul>
                                            <div className="mt-4 text-xl font-bold text-cyan-400">₹1,499/year</div>
                                        </div>

                                        <a
                                            href="tel:+91 07206904101"
                                            className="block bg-white text-gray-900 py-4 rounded-xl text-center font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                        >
                                            Get Custom Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Brands Tab */}
                    {activeTab === 'brands' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Brands We <span className="text-cyan-400">Service</span>
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-3xl">
                                We repair all major TV brands with genuine spare parts and manufacturer-approved repair techniques.
                            </p>

                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg mb-8 border border-gray-700">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-900/50 hover:bg-cyan-900/30 rounded-xl p-4 text-center transition-colors border border-gray-700 hover:border-cyan-500/30 group"
                                        >
                                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform border border-gray-600">
                                                <Tv size={20} className="text-cyan-400" />
                                            </div>
                                            <span className="font-semibold text-white">{brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-gray-700">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">Service Areas</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Derabassi', 'New Chandigarh'].map((city, index) => (
                                                <div key={index} className="flex items-center bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                                                    <Home size={20} className="text-cyan-400 mr-3" />
                                                    <span className="font-medium text-white">{city}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 shadow-lg border border-cyan-500/20">
                                        <h3 className="text-xl font-bold text-white mb-4">Need Urgent TV Repair?</h3>
                                        <a
                                            href="tel:+91 07206904101"
                                            className="block bg-red-600 text-white py-4 rounded-xl text-center font-bold text-lg mb-4 hover:bg-red-700 transition-colors"
                                        >
                                            Emergency Call Now
                                        </a>
                                        <div className="text-center text-gray-300">
                                            <Clock size={16} className="inline mr-2 text-cyan-400" />
                                            Average response time: 30-45 minutes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Booking Tab */}
                    {activeTab === 'booking' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Book <span className="text-cyan-400">TV Repair Service</span>
                            </h2>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Contact Info */}
                                <div className="lg:col-span-2">
                                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg mb-8 border border-gray-700">
                                        <h3 className="text-xl font-bold text-white mb-6">Quick Contact Options</h3>

                                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                                            <a
                                                href="tel:+91 07206904101"
                                                className="bg-cyan-600 text-white p-6 rounded-2xl hover:bg-cyan-700 transition-colors text-center group border border-cyan-500/30"
                                            >
                                                <Phone size={32} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                                <div className="text-2xl font-bold">Call Now</div>
                                                <div className="text-cyan-100 mt-2"> +91 07206904101</div>
                                            </a>

                                            <a
                                                href="https://wa.me/91 07206904101"
                                                className="bg-green-600 text-white p-6 rounded-2xl hover:bg-green-700 transition-colors text-center group border border-green-500/30"
                                            >
                                                <div className="text-4xl mb-4">💬</div>
                                                <div className="text-2xl font-bold">WhatsApp</div>
                                                <div className="text-green-100 mt-2">Instant Chat Support</div>
                                            </a>

                                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl text-center border border-purple-500/30">
                                                <Calendar size={32} className="mx-auto mb-4" />
                                                <div className="text-2xl font-bold">Schedule</div>
                                                <div className="text-purple-100 mt-2">Book Online 24/7</div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                                            <h4 className="font-bold text-white mb-4">Service Hours</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-300">Monday - Friday</span>
                                                    <span className="font-semibold text-white">8:00 AM - 10:00 PM</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-300">Saturday - Sunday</span>
                                                    <span className="font-semibold text-white">9:00 AM - 9:00 PM</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                                                    <span className="text-cyan-400 font-bold flex items-center">
                                                        <AlertCircle size={18} className="mr-2" />
                                                        Emergency Service
                                                    </span>
                                                    <span className="font-bold text-cyan-400">24/7 Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 text-white rounded-3xl p-6 md:p-8 shadow-lg backdrop-blur-sm border border-cyan-500/30">
                                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                                    <Star size={32} className="text-yellow-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-lg italic mb-4 text-gray-200">
                                                    "My Samsung QLED TV suddenly went black with sound working. Called these experts and they arrived in 40 minutes.
                                                    Diagnosed it as a backlight issue and fixed it same day. Professional service and reasonable pricing!"
                                                </blockquote>
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-cyan-700 rounded-full mr-3"></div>
                                                    <div>
                                                        <div className="font-bold">Amit Khanna</div>
                                                        <div className="text-cyan-200 text-sm">Chandigarh, Sector 22</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Form */}
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-700">
                                    <h3 className="text-xl font-bold text-white mb-6">Schedule TV Repair</h3>

                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-gray-300 mb-2">Your Name *</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                                                placeholder="+91 98765 43210"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2">TV Type</label>
                                            <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white">
                                                <option className="bg-gray-800">Select TV Type</option>
                                                <option className="bg-gray-800">LED TV</option>
                                                <option className="bg-gray-800">OLED TV</option>
                                                <option className="bg-gray-800">QLED TV</option>
                                                <option className="bg-gray-800">Smart TV</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2">Problem Type</label>
                                            <select className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white">
                                                <option className="bg-gray-800">Select Problem</option>
                                                <option className="bg-gray-800">No Power</option>
                                                <option className="bg-gray-800">No Display</option>
                                                <option className="bg-gray-800">No Sound</option>
                                                <option className="bg-gray-800">Lines on Screen</option>
                                                <option className="bg-gray-800">Smart TV Issues</option>
                                                <option className="bg-gray-800">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2">Describe the Problem</label>
                                            <textarea
                                                rows={3}
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                                                placeholder="e.g., TV not turning on, display issues, sound problems..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-300 mb-2">Preferred Date</label>
                                            <input
                                                type="date"
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-colors shadow-lg"
                                        >
                                            Book TV Repair Now
                                        </button>

                                        <p className="text-gray-400 text-sm text-center">
                                            <CheckCircle size={16} className="inline mr-2 text-green-400" />
                                            We respect your privacy. Your information is safe with us.
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #0ea5e9;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #0284c7;
        }
      `}</style>
        </div>
    );
}