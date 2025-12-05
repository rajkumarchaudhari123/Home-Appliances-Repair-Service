// app/services/washing-machine/page.tsx
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
    AlertTriangle
} from 'lucide-react';

export default function WashingMachinePage() {
    const [activeTab, setActiveTab] = useState('problems');

    // Common Problems
    const problems = [
        {
            icon: <RotateCw size={24} />,
            title: 'Not Spinning',
            description: 'Drum not rotating, clothes remain wet',
            symptoms: ['No spinning action', 'Clothes soaking wet', 'Error codes'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Motor or belt issues'
        },
        {
            icon: <Droplets size={24} />,
            title: 'Water Leakage',
            description: 'Water leaking from machine',
            symptoms: ['Puddles under machine', 'Water dripping', 'Floor damage'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Hose or pump issues'
        },
        {
            icon: <Zap size={24} />,
            title: 'Not Draining',
            description: 'Water stays in drum after cycle',
            symptoms: ['Water in drum', 'Drainage error', 'Musty smell'],
            fixTime: '1 hour',
            severity: 'Medium',
            commonCause: 'Clogged drain pump'
        },
        {
            icon: <Settings size={24} />,
            title: 'Not Starting',
            description: 'Machine won\'t power on or start cycle',
            symptoms: ['No power', 'No response', 'Error lights'],
            fixTime: '1 hour',
            severity: 'High',
            commonCause: 'Power supply or PCB issues'
        },
        {
            icon: <Volume2 size={24} />,
            title: 'Loud Noises',
            description: 'Unusual sounds during operation',
            symptoms: ['Grinding noise', 'Banging sounds', 'Squeaking'],
            fixTime: '1-2 hours',
            severity: 'Medium',
            commonCause: 'Bearing or drum issues'
        },
        {
            icon: <AlertTriangle size={24} />,
            title: 'Vibration Issues',
            description: 'Excessive shaking during spin cycle',
            symptoms: ['Machine moving', 'Loud vibrations', 'Floor damage'],
            fixTime: '30-60 mins',
            severity: 'Low',
            commonCause: 'Unbalanced load or leveling'
        },
    ];

    // Repair Process Steps
    const repairSteps = [
        {
            step: 1,
            title: 'Diagnosis',
            description: 'Our technician will run diagnostic tests to identify the exact problem.',
            time: '15-20 mins',
            icon: '🔍'
        },
        {
            step: 2,
            title: 'Cost Estimation',
            description: 'Transparent pricing with free diagnosis. No hidden charges.',
            time: '5-10 mins',
            icon: '💰'
        },
        {
            step: 3,
            title: 'Repair Work',
            description: 'Expert repair using genuine parts and professional tools.',
            time: '1-3 hours',
            icon: '🔧'
        },
        {
            step: 4,
            title: 'Testing',
            description: 'Test run to ensure proper functioning. 90 days warranty provided.',
            time: '15-20 mins',
            icon: '✅'
        },
    ];

    // Types of Washing Machines
    const machineTypes = [
        {
            type: 'Top Load',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1170&auto=format&fit=crop',
            features: ['Affordable', 'Easy to load', 'Less water usage'],
            commonIssues: ['Agitator problems', 'Lid switch', 'Timer issues']
        },
        {
            type: 'Front Load',
            image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1170&auto=format&fit=crop',
            features: ['Better cleaning', 'Energy efficient', 'Gentle on clothes'],
            commonIssues: ['Door seal', 'Drum bearing', 'Heater problems']
        },
        {
            type: 'Semi-Automatic',
            image: 'https://images.unsplash.com/photo-1622470953794-aa9c8277f0c5?q=80&w=1170&auto=format&fit=crop',
            features: ['Manual control', 'No power needed', 'Portable'],
            commonIssues: ['Timer issues', 'Motor problems', 'Drainage issues']
        },
        {
            type: 'Fully Automatic',
            image: 'https://images.unsplash.com/photo-1600587605392-7c5f4d9b0d7e?q=80&w=1170&auto=format&fit=crop',
            features: ['Smart features', 'Multiple programs', 'Water saving'],
            commonIssues: ['PCB faults', 'Sensor issues', 'Display problems']
        },
    ];

    // Brands We Service
    const brands = [
        'LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Haier',
        'Panasonic', 'Godrej', 'Onida', 'Videocon', 'Lloyd', 'Kenstar'
    ];

    // Pricing
    const pricing = [
        {
            service: 'Motor Repair',
            price: '₹2,000 - ₹4,500',
            includes: ['Motor testing', 'Repair/Replacement', 'Installation'],
            warranty: '120 days'
        },
        {
            service: 'Drain Pump Repair',
            price: '₹1,200 - ₹2,500',
            includes: ['Pump cleaning', 'Impeller check', 'Seal replacement'],
            warranty: '90 days'
        },
        {
            service: 'PCB Repair',
            price: '₹2,500 - ₹5,000',
            includes: ['Circuit testing', 'Component repair', 'Programming'],
            warranty: '90 days'
        },
        {
            service: 'General Service',
            price: '₹600 - ₹1,200',
            includes: ['Deep cleaning', 'Lubrication', 'Performance check'],
            warranty: '30 days'
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
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
                                <RefreshCw size={18} className="mr-2" />
                                <span>Expert Washing Machine Repair</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Professional <span className="text-yellow-300">Washing Machine</span> Repair Service
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                                Fast, reliable washing machine repairs for all brands and models.
                                Our certified technicians fix spin, drain, motor, and all other issues with 90 days warranty.
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

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <div className="text-xl md:text-2xl font-bold text-yellow-300">45 Min</div>
                                    <div className="text-blue-200 text-sm">Response Time</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <div className="text-xl md:text-2xl font-bold text-yellow-300">90 Days</div>
                                    <div className="text-blue-200 text-sm">Warranty</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <div className="text-xl md:text-2xl font-bold text-yellow-300">4.8/5</div>
                                    <div className="text-blue-200 text-sm">Rating</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <div className="text-xl md:text-2xl font-bold text-yellow-300">Same Day</div>
                                    <div className="text-blue-200 text-sm">Service</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1622470953794-aa9c8277f0c5?q=80&w=1170&auto=format&fit=crop"
                                    alt="Washing Machine Repair"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-2xl"
                                    priority
                                />
                            </div>

                            {/* Emergency Badge */}
                            <div className="absolute -top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                                <AlertCircle size={16} className="inline mr-2" />
                                24/7 Emergency
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
                        <path fill="#f0f9ff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
                            { id: 'types', label: 'Machine Types', icon: '🧺' },
                            { id: 'process', label: 'Repair Process', icon: '🔧' },
                            { id: 'pricing', label: 'Service Pricing', icon: '💰' },
                            { id: 'brands', label: 'Brands We Service', icon: '🏷️' },
                            { id: 'booking', label: 'Book Service', icon: '📅' },
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
                                Common <span className="text-blue-600">Washing Machine Problems</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                These are the most frequent washing machine issues we fix. Our experts can diagnose and repair any problem quickly.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {problems.map((problem, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

                                                <div className="mb-4">
                                                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Common Cause:</h4>
                                                    <p className="text-gray-600 text-sm">{problem.commonCause}</p>
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

                            {/* Quick Tips */}
                            <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Maintenance Tips</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-white rounded-xl p-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle size={24} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Clean Filter Monthly</h4>
                                        <p className="text-gray-600 text-sm">Remove lint and debris from filter to prevent drainage issues.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle size={24} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Balance Load</h4>
                                        <p className="text-gray-600 text-sm">Distribute clothes evenly to reduce vibration and noise.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle size={24} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Use Right Detergent</h4>
                                        <p className="text-gray-600 text-sm">Use HE detergent for front load machines to prevent suds.</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle size={24} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Leave Door Open</h4>
                                        <p className="text-gray-600 text-sm">Prevent mold by keeping door open between washes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Machine Types Tab */}
                    {activeTab === 'types' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Types of <span className="text-blue-600">Washing Machines</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                We service all types of washing machines. Each type has its own common issues and repair methods.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {machineTypes.map((machine, index) => (
                                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={machine.image}
                                                alt={machine.type}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-xl font-bold text-white">{machine.type}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                                                <ul className="space-y-1">
                                                    {machine.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                                            <CheckCircle size={14} className="text-green-500 mr-2" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2">Common Issues:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {machine.commonIssues.map((issue, i) => (
                                                        <span key={i} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs">
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
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-6 md:p-8">
                                <h3 className="text-2xl font-bold mb-6">Parts We Repair & Replace</h3>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <RotateCw size={28} />
                                        </div>
                                        <h4 className="font-bold text-lg">Motor</h4>
                                        <p className="text-blue-100 text-sm">Brushes, bearings, windings</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Droplets size={28} />
                                        </div>
                                        <h4 className="font-bold text-lg">Pump</h4>
                                        <p className="text-blue-100 text-sm">Drain & inlet pumps</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Settings size={28} />
                                        </div>
                                        <h4 className="font-bold text-lg">PCB</h4>
                                        <p className="text-blue-100 text-sm">Control boards & displays</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Wrench size={28} />
                                        </div>
                                        <h4 className="font-bold text-lg">Mechanical</h4>
                                        <p className="text-blue-100 text-sm">Belts, pulleys, bearings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Repair Process Tab */}
                    {activeTab === 'process' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Repair Process</span>
                            </h2>

                            <div className="relative mb-12">
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Washing Machine Repair?</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Users size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
                                            <p className="text-gray-600 text-sm">Certified with 5+ years washing machine repair experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Shield size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">90 Days Warranty</h4>
                                            <p className="text-gray-600 text-sm">On all repairs and genuine spare parts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Same Day Service</h4>
                                            <p className="text-gray-600 text-sm">Most repairs completed in single visit</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Free Diagnosis</h4>
                                            <p className="text-gray-600 text-sm">On first visit, no obligation to proceed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Wrench size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Genuine Parts</h4>
                                            <p className="text-gray-600 text-sm">We use only OEM or high-quality spare parts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                                            <p className="text-gray-600 text-sm">Emergency service available round the clock</p>
                                        </div>
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
                                Transparent pricing with no hidden charges. Diagnostic fee waived if you proceed with repair.
                            </p>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Pricing Cards */}
                                <div className="lg:col-span-2">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {pricing.map((service, index) => (
                                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
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
                                                        <span className="font-medium">Warranty: {service.warranty}</span>
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
                                </div>

                                {/* Additional Services */}
                                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white rounded-3xl p-8 shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6">Additional Services</h3>

                                    <div className="space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-lg mb-3">Installation Service</h4>
                                            <ul className="space-y-3 text-blue-100">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    New machine installation
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Leveling & plumbing
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Demo & testing
                                                </li>
                                            </ul>
                                            <div className="mt-4 text-xl font-bold">₹500 - ₹1,500</div>
                                        </div>

                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-lg mb-3">Annual Maintenance</h4>
                                            <ul className="space-y-3 text-blue-100">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Deep cleaning service
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Performance optimization
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Parts inspection
                                                </li>
                                            </ul>
                                            <div className="mt-4 text-xl font-bold">₹999/year</div>
                                        </div>

                                        <a
                                            href="tel:+917678134697"
                                            className="block bg-white text-blue-700 py-4 rounded-xl text-center font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
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
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Brands We <span className="text-blue-600">Service</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                We repair all major washing machine brands with genuine spare parts and manufacturer-approved techniques.
                            </p>

                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg mb-8">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 hover:bg-blue-50 rounded-xl p-4 text-center transition-colors border border-gray-100 hover:border-blue-200 group"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                                <RefreshCw size={20} className="text-blue-600" />
                                            </div>
                                            <span className="font-semibold text-gray-900">{brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Derabassi', 'New Chandigarh'].map((city, index) => (
                                                <div key={index} className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                                                    <Home size={20} className="text-blue-600 mr-3" />
                                                    <span className="font-medium text-gray-900">{city}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Repair?</h3>
                                        <a
                                            href="tel:+917678134697"
                                            className="block bg-red-600 text-white py-4 rounded-xl text-center font-bold text-lg mb-4 hover:bg-red-700 transition-colors"
                                        >
                                            Emergency Call Now
                                        </a>
                                        <div className="text-center text-gray-600">
                                            <Clock size={16} className="inline mr-2" />
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
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Book <span className="text-blue-600">Service Now</span>
                            </h2>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Contact Info */}
                                <div className="lg:col-span-2">
                                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact Options</h3>

                                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                                            <a
                                                href="tel:+917678134697"
                                                className="bg-blue-600 text-white p-6 rounded-2xl hover:bg-blue-700 transition-colors text-center group"
                                            >
                                                <Phone size={32} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                                <div className="text-2xl font-bold">Call Now</div>
                                                <div className="text-blue-100 mt-2">+91 76781 34697</div>
                                            </a>

                                            <a
                                                href="https://wa.me/917678134697"
                                                className="bg-green-600 text-white p-6 rounded-2xl hover:bg-green-700 transition-colors text-center group"
                                            >
                                                <div className="text-4xl mb-4">💬</div>
                                                <div className="text-2xl font-bold">WhatsApp</div>
                                                <div className="text-green-100 mt-2">Instant Chat Support</div>
                                            </a>

                                            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-2xl text-center">
                                                <Calendar size={32} className="mx-auto mb-4" />
                                                <div className="text-2xl font-bold">Schedule</div>
                                                <div className="text-blue-100 mt-2">Book Online 24/7</div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
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
                                                    <span className="text-blue-600 font-bold flex items-center">
                                                        <AlertCircle size={18} className="mr-2" />
                                                        Emergency Service
                                                    </span>
                                                    <span className="font-bold text-blue-600">24/7 Available</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-3xl p-6 md:p-8 shadow-lg">
                                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                                                    <Star size={32} className="text-yellow-300" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={20} className="fill-yellow-300 text-yellow-300" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-lg italic mb-4">
                                                    "My Samsung washing machine stopped draining. Called these guys and they fixed it same day.
                                                    Technician was very professional, explained the issue clearly, and the price was fair.
                                                    Highly recommended!"
                                                </blockquote>
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-blue-300 rounded-full mr-3"></div>
                                                    <div>
                                                        <div className="font-bold">Neha Sharma</div>
                                                        <div className="text-blue-200 text-sm">Mohali, Phase 7</div>
                                                    </div>
                                                </div>
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
                                            <label className="block text-gray-700 mb-2">Machine Type</label>
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Type</option>
                                                <option>Top Load</option>
                                                <option>Front Load</option>
                                                <option>Semi-Automatic</option>
                                                <option>Fully Automatic</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Problem Type</label>
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Select Problem</option>
                                                <option>Not Spinning</option>
                                                <option>Water Leakage</option>
                                                <option>Not Draining</option>
                                                <option>Not Starting</option>
                                                <option>Loud Noises</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Describe the Problem</label>
                                            <textarea
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="e.g., Machine making loud noise, water not draining..."
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
                                            <CheckCircle size={16} className="inline mr-2 text-green-500" />
                                            Free diagnosis on first visit
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