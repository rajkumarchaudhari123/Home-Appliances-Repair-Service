// app/services/microwave-oven/page.tsx
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
    Mail
} from 'lucide-react';

export default function MicrowaveOvenPage() {
    const [activeTab, setActiveTab] = useState('problems');
    const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);

    // Common Problems
    const problems = [
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
        {
            icon: <Sparkles size={24} />,
            title: 'Spark Inside',
            description: 'Sparks or arcing inside microwave',
            symptoms: ['Visible sparks', 'Burning smell', 'Loud crackling', 'Damage marks'],
            fixTime: '1-2 hours',
            severity: 'High',
            commonCause: 'Waveguide cover damaged'
        },
        {
            icon: <RotateCw size={24} />,
            title: 'Turntable Issues',
            description: 'Turntable not rotating properly',
            symptoms: ['Not rotating', 'Stuck turntable', 'Uneven rotation', 'Noise'],
            fixTime: '30-60 mins',
            severity: 'Medium',
            commonCause: 'Motor or roller issue'
        },
        {
            icon: <Settings size={24} />,
            title: 'Control Panel Fault',
            description: 'Buttons not working or display issues',
            symptoms: ['Unresponsive buttons', 'Display errors', 'Random beeping', 'Settings lost'],
            fixTime: '1-2 hours',
            severity: 'Medium',
            commonCause: 'Membrane or PCB failure'
        },
        {
            icon: <AlertTriangle size={24} />,
            title: 'Door Problems',
            description: 'Door not closing properly',
            symptoms: ['Door won\'t latch', 'Gap in seal', 'Safety switch issue', 'Handle broken'],
            fixTime: '1 hour',
            severity: 'High',
            commonCause: 'Door latch or hinge failure'
        },
    ];

    // Microwave Types
    const microwaveTypes = [
        {
            type: 'Solo Microwave',
            image: 'https://images.unsplash.com/photo-1616569078186-1e3c1b97a4ee?q=80&w=1170&auto=format&fit=crop',
            features: ['Basic functions', 'Affordable', 'Simple operation'],
            commonIssues: ['Magnetron failure', 'Turntable motor', 'Power supply']
        },
        {
            type: 'Grill Microwave',
            image: 'https://images.unsplash.com/photo-1649264191931-9235c8dd03ef?q=80&w=1169&auto=format&fit=crop',
            features: ['Grill function', 'Browning', 'Crisping'],
            commonIssues: ['Heating element', 'Grill fan', 'Dual function issues']
        },
        {
            type: 'Convection Microwave',
            image: 'https://images.unsplash.com/photo-1740803292349-c7e53f7125b2?q=80&w=1202&auto=format&fit=crop',
            features: ['Baking', 'Roasting', 'Multi-function'],
            commonIssues: ['Convection fan', 'Heater coil', 'Temperature sensor']
        },
        {
            type: 'Smart Microwave',
            image: 'https://images.unsplash.com/photo-1606811841687-b1c0d60d2bf2?q=80&w=1170&auto=format&fit=crop',
            features: ['Wi-Fi enabled', 'App control', 'Preset programs'],
            commonIssues: ['PCB board', 'Display panel', 'Software issues']
        },
    ];

    // Repair Process Steps
    const repairSteps = [
        {
            step: 1,
            title: 'Safety Check',
            description: 'Complete safety inspection and discharge of capacitor.',
            time: '15-20 mins',
            icon: '⚠️'
        },
        {
            step: 2,
            title: 'Diagnosis',
            description: 'Thorough testing with professional microwave testers.',
            time: '20-30 mins',
            icon: '🔍'
        },
        {
            step: 3,
            title: 'Component Repair',
            description: 'Safe repair using genuine parts and proper tools.',
            time: '1-3 hours',
            icon: '🔧'
        },
        {
            step: 4,
            title: 'Testing',
            description: 'Complete testing for radiation leakage and heating.',
            time: '15-20 mins',
            icon: '✅'
        },
    ];

    // Brands We Service
    const brands = [
        'Samsung', 'LG', 'Whirlpool', 'IFB', 'Panasonic', 'Godrej',
        'Haier', 'Morphy Richards', 'Bajaj', 'Prestige', 'Philips', 'Kenstar'
    ];

    // Pricing
    const pricing = [
        {
            service: 'Magnetron Repair',
            price: '₹1,500 - ₹3,500',
            includes: ['Magnetron testing', 'Replacement', 'Safety testing'],
            note: 'Most common repair'
        },
        {
            service: 'High Voltage Repair',
            price: '₹1,000 - ₹2,500',
            includes: ['Capacitor replacement', 'Diode check', 'Transformer test'],
            note: 'Power issues'
        },
        {
            service: 'Control Panel',
            price: '₹800 - ₹2,000',
            includes: ['Membrane repair', 'PCB fixing', 'Display replacement'],
            note: 'Button/display issues'
        },
        {
            service: 'Door Mechanism',
            price: '₹500 - ₹1,500',
            includes: ['Latch repair', 'Hinge fixing', 'Seal replacement'],
            note: 'Door safety issues'
        },
    ];

    // Customer Reviews
    const reviews = [
        {
            name: 'Rajesh Kumar',
            rating: 5,
            date: '2 days ago',
            comment: 'Expert service! My microwave stopped heating. Technician came same day, diagnosed magnetron issue and fixed . Highly recommended!',
            location: 'Delhi'
        },
        {
            name: 'Priya Sharma',
            rating: 5,
            date: '1 week ago',
            comment: 'Sparks in my microwave scared me. Technician explained the waveguide cover issue, replaced it safely. Professional and courteous service.',
            location: 'Mumbai'
        },
        {
            name: 'Amit Patel',
            rating: 5,
            date: '3 days ago',
            comment: 'Turntable was not rotating. Fixed in 30 minutes! Reasonable price and they tested for radiation leakage too. Good job!',
            location: 'Bangalore'
        }
    ];

    // Booking Form Handler
    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        setIsBookingSubmitted(true);
        setTimeout(() => setIsBookingSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 via-red-500 to-blue-600 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
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
                                <Microwave size={18} className="mr-2" />
                                <span>Expert Microwave Repair Service</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Professional <span className="text-yellow-300">Microwave Oven</span> Repair Service
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                                Fast, safe, and reliable microwave oven repairs by certified technicians.
                                We fix heating, power, sparking, and all other issues on magnetron repairs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+917678134697"
                                    className="group bg-white text-blue-600 px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    <Phone size={22} />
                                    <span>Call Microwave Expert</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </a>

                                <button
                                    onClick={() => {
                                        setActiveTab('booking');
                                        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="group bg-transparent border-2 border-white text-white px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                                >
                                    <Calendar size={20} />
                                    <span>Book Service</span>
                                </button>
                            </div>

                            {/* Warning Banner */}
                            <div className="mt-8 p-4 bg-yellow-500/20 backdrop-blur-sm rounded-xl border border-yellow-400/30">
                                <div className="flex items-start">
                                    <AlertTriangle size={20} className="text-yellow-300 mr-3 mt-1" />
                                    <div>
                                        <p className="text-yellow-100 text-sm font-medium">
                                            ⚠️ Never attempt DIY microwave repair. High voltage capacitors can retain lethal charge even when unplugged.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1655354438845-561bc349a1a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Microwave Oven Repair"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-2xl"
                                    priority
                                />
                            </div>

                            {/* Safety Badge */}
                            <div className="absolute -top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                                <Shield size={16} className="inline mr-2" />
                                Certified Safe Repair
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
                        <path fill="#ffedd5" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-20 -mt-4">

                {/* Tabs Navigation */}
                <div className="flex overflow-x-auto mb-8 md:mb-12 scrollbar-hide">
                    <div className="flex space-x-1 bg-white/50 backdrop-blur-sm rounded-2xl p-1 shadow-sm">
                        {[
                            { id: 'problems', label: 'Common Problems', icon: '⚠️' },
                            { id: 'types', label: 'Microwave Types', icon: '🍲' },
                            { id: 'process', label: 'Repair Process', icon: '🔧' },
                            { id: 'pricing', label: 'Service Pricing', icon: '💰' },
                            { id: 'brands', label: 'Brands We Service', icon: '🏷️' },
                            { id: 'reviews', label: 'Customer Reviews', icon: '⭐' },
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
                                Common <span className="text-blue-600">Microwave Problems</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                These are the most frequent microwave oven issues. Our certified technicians safely repair all types of microwave problems.
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
                                                    <button
                                                        onClick={() => {
                                                            setActiveTab('booking');
                                                            document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}
                                                        className="text-blue-600 font-medium hover:text-blue-700 text-sm flex items-center gap-1"
                                                    >
                                                        Book Repair
                                                        <ArrowRight size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Safety Warning */}
                            <div className="mt-12 bg-gradient-to-r from-red-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-red-200">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                                            <AlertTriangle size={32} className="text-red-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Important Safety Warning</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white rounded-xl p-4 border border-red-100">
                                                <h4 className="font-bold text-gray-900 mb-2 text-red-600">High Voltage Danger</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Microwave capacitors store up to 4000 volts even when unplugged.
                                                    Only certified technicians should handle internal components.
                                                </p>
                                            </div>
                                            <div className="bg-white rounded-xl p-4 border border-red-100">
                                                <h4 className="font-bold text-gray-900 mb-2 text-red-600">Radiation Safety</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Proper sealing is crucial. Our technicians use specialized tools to test for
                                                    microwave leakage after every repair.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Microwave Types Tab */}
                    {activeTab === 'types' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Types of <span className="text-blue-600">Microwave Ovens</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-3xl">
                                We repair all types of microwave ovens. Each type has specific components and common repair needs.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {microwaveTypes.map((microwave, index) => (
                                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={microwave.image}
                                                alt={microwave.type}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-xl font-bold text-white">{microwave.type}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="mb-4">
                                                <h4 className="font-semibold text-gray-900 mb-2 text-blue-600">Features:</h4>
                                                <ul className="space-y-1">
                                                    {microwave.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                                            <CheckCircle size={14} className="text-green-500 mr-2" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 text-blue-600">Common Issues:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {microwave.commonIssues.map((issue, i) => (
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

                            {/* Components We Repair */}
                            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-6 md:p-8 border border-blue-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Microwave Components We Repair</h3>
                                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                                            <Zap size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900">Magnetron</h4>
                                        <p className="text-gray-600 text-sm">Generates microwaves for heating</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                                            <Battery size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900">High Voltage System</h4>
                                        <p className="text-gray-600 text-sm">Capacitor, diode, transformer</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                                            <Settings size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900">Control Board</h4>
                                        <p className="text-gray-600 text-sm">Timer, settings, display</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                                            <RotateCw size={28} className="text-blue-600" />
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900">Turntable System</h4>
                                        <p className="text-gray-600 text-sm">Motor, rollers, guide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Repair Process Tab */}
                    {activeTab === 'process' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Safe Repair Process</span>
                            </h2>

                            <div className="relative mb-12">
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {repairSteps.map((step) => (
                                        <div key={step.step} className="relative">
                                            <div className="bg-white rounded-2xl p-6 shadow-lg h-full border border-gray-100">
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
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Microwave Repair Service?</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Shield size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Certified Safety</h4>
                                            <p className="text-gray-600 text-sm">Technicians certified in microwave safety and repair</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Same Day Service</h4>
                                            <p className="text-gray-600 text-sm">Most repairs completed within hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Free Diagnosis</h4>
                                            <p className="text-gray-600 text-sm">No charge if you don't proceed with repair</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Wrench size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Genuine Parts</h4>
                                            <p className="text-gray-600 text-sm">We use only OEM or high-quality spare parts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Thermometer size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Leakage Testing</h4>
                                            <p className="text-gray-600 text-sm">Radiation leakage test after every repair</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Users size={24} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
                                            <p className="text-gray-600 text-sm">Specialized in microwave repair for 5+ years</p>
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
                                Transparent pricing with safety-first approach. All repairs include radiation leakage testing.
                            </p>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Pricing Cards */}
                                <div className="lg:col-span-2">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {pricing.map((service, index) => (
                                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900">{service.service}</h3>
                                                        <div className="text-sm text-gray-500 mt-1">{service.note}</div>
                                                    </div>
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
                                </div>

                                {/* Additional Services */}
                                <div className="bg-gradient-to-br from-blue-600 to-red-600 text-white rounded-3xl p-8 shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-6">Safety & Additional Services</h3>

                                    <div className="space-y-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-lg mb-3 text-yellow-300">Leakage Testing</h4>
                                            <ul className="space-y-3 text-blue-100">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Radiation safety check
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Seal integrity test
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Certification provided
                                                </li>
                                            </ul>
                                            <div className="mt-4 text-xl font-bold text-yellow-300">₹300</div>
                                        </div>

                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                            <h4 className="font-bold text-lg mb-3 text-yellow-300">Annual Maintenance</h4>
                                            <ul className="space-y-3 text-blue-100">
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Complete cleaning
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Performance check
                                                </li>
                                                <li className="flex items-center">
                                                    <CheckCircle size={16} className="text-green-300 mr-3" />
                                                    Safety inspection
                                                </li>
                                            </ul>
                                            <div className="mt-4 text-xl font-bold text-yellow-300">₹499/year</div>
                                        </div>

                                        <a
                                            href="tel:+917678134697"
                                            className="block bg-white text-blue-600 py-4 rounded-xl text-center font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                                        >
                                            Get Safety Inspection
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
                                We repair all major microwave oven brands with genuine spare parts and safety-first approach.
                            </p>

                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg mb-8 border border-gray-100">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {brands.map((brand, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 hover:bg-blue-50 rounded-xl p-4 text-center transition-colors border border-gray-100 hover:border-blue-200 group"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                                                <Microwave size={20} className="text-blue-600" />
                                            </div>
                                            <div className="font-semibold text-gray-900">{brand}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Spare Parts Info */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl p-8 border border-blue-200">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Spare Parts Advantage</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200">
                                                <CheckCircle size={24} className="text-green-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Genuine OEM Parts</h4>
                                                <p className="text-gray-600">We use only authentic spare parts from manufacturers</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200">
                                                <Shield size={24} className="text-blue-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-2">Quality Assurance</h4>
                                                <p className="text-gray-600">All parts are tested for safety and performance</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200">
                                                <Clock size={24} className="text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-gray-600">  magnetron and major parts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-red-600 text-white rounded-3xl p-8">
                                    <h3 className="text-2xl font-bold mb-6">📞 Immediate Assistance</h3>
                                    <div className="space-y-6">
                                        <a href="tel:+917678134697" className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                                <Phone size={24} className="text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">Call Microwave Expert</div>
                                                <div className="text-blue-100">+91 7678 1346 97</div>
                                            </div>
                                        </a>
                                        <div className="p-4 bg-white/10 rounded-xl">
                                            <div className="font-bold mb-2">Service Hours:</div>
                                            <div className="text-blue-100">Mon-Sun: 8 AM - 9 PM</div>
                                            <div className="text-blue-100">Emergency: 24/7 Available</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Customer Reviews Tab */}
                    {activeTab === 'reviews' && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Customer <span className="text-blue-600">Reviews</span>
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="font-bold text-gray-900">{review.name}</div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <MapPin size={12} className="mr-1" />
                                                    {review.location}
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-4">{review.comment}</p>
                                        <div className="text-sm text-gray-500">{review.date}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Ratings Summary */}
                            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-8 border border-blue-200 mb-8">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-gray-900">4.9/5</div>
                                        <div className="flex items-center justify-center my-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </div>
                                        <div className="text-gray-600">Based on 1,247 reviews</div>
                                    </div>
                                    <div className="flex-1 max-w-md">
                                        <div className="space-y-2">
                                            {[5, 4, 3, 2, 1].map((rating) => (
                                                <div key={rating} className="flex items-center">
                                                    <div className="w-8 text-gray-700 font-medium">{rating}★</div>
                                                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-blue-500"
                                                            style={{ width: `${rating === 5 ? '92%' : rating === 4 ? '6%' : '2%'}` }}
                                                        ></div>
                                                    </div>
                                                    <div className="w-12 text-gray-600 text-sm">
                                                        {rating === 5 ? '92%' : rating === 4 ? '6%' : '2%'}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Booking Tab */}
                    {activeTab === 'booking' && (
                        <div id="booking-section" className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Book <span className="text-blue-600">Microwave Repair</span>
                            </h2>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Booking Form */}
                                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule Your Repair</h3>

                                    {isBookingSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle size={40} className="text-green-500" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h4>
                                            <p className="text-gray-600 mb-6">
                                                Our microwave expert will call you within 15 minutes to confirm the appointment.
                                            </p>
                                            <div className="bg-blue-50 rounded-xl p-4 mb-6">
                                                <div className="font-bold text-gray-900 mb-2">Emergency Contact:</div>
                                                <a href="tel:+917678134697" className="text-blue-600 font-bold text-lg">
                                                    +91 7678 1346 97
                                                </a>
                                            </div>
                                            <button
                                                onClick={() => setIsBookingSubmitted(false)}
                                                className="text-blue-600 font-medium hover:text-blue-700"
                                            >
                                                Book another service
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleBookingSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Your Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Phone Number *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="Enter your phone number"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="Enter your email"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Address *
                                                </label>
                                                <textarea
                                                    required
                                                    rows={3}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                                    placeholder="Enter your complete address"
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Microwave Brand *
                                                    </label>
                                                    <select
                                                        required
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                    >
                                                        <option value="">Select brand</option>
                                                        {brands.map((brand) => (
                                                            <option key={brand} value={brand}>{brand}</option>
                                                        ))}
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Problem Type *
                                                    </label>
                                                    <select
                                                        required
                                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                    >
                                                        <option value="">Select problem</option>
                                                        {problems.map((problem) => (
                                                            <option key={problem.title} value={problem.title}>{problem.title}</option>
                                                        ))}
                                                        <option value="other">Other issue</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Preferred Date & Time *
                                                </label>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <input
                                                        type="date"
                                                        required
                                                        min={new Date().toISOString().split('T')[0]}
                                                        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                    />
                                                    <select
                                                        required
                                                        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                    >
                                                        <option value="">Select time slot</option>
                                                        <option value="9-12">9:00 AM - 12:00 PM</option>
                                                        <option value="12-3">12:00 PM - 3:00 PM</option>
                                                        <option value="3-6">3:00 PM - 6:00 PM</option>
                                                        <option value="6-9">6:00 PM - 9:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Additional Details (Optional)
                                                </label>
                                                <textarea
                                                    rows={2}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                                    placeholder="Describe the issue or special instructions"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                                            >
                                                Book Microwave Repair
                                            </button>

                                            <p className="text-center text-sm text-gray-500">
                                                By booking, you agree to our terms of service. Our expert will call to confirm.
                                            </p>
                                        </form>
                                    )}
                                </div>

                                {/* Booking Info */}
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-blue-600 to-red-600 text-white rounded-3xl p-8">
                                        <h3 className="text-2xl font-bold mb-6">⚡ Same-Day Service</h3>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Clock size={24} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg mb-2">Fast Response</h4>
                                                    <p className="text-blue-100">Technician dispatched within 2 hours in emergency cases</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Shield size={24} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg mb-2">Safety First</h4>
                                                    <p className="text-blue-100">All technicians certified in microwave safety procedures</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle size={24} className="text-blue-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg mb-2">Free Diagnosis</h4>
                                                    <p className="text-blue-100">No charge for inspection if you don't proceed with repair</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">📞 Need Immediate Help?</h3>
                                        <div className="space-y-4">
                                            <a href="tel:+917678134697" className="block">
                                                <div className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                                                    <Phone size={24} />
                                                    Call Microwave Expert Now
                                                </div>
                                            </a>
                                            <div className="text-center text-gray-600">OR</div>
                                            <a href="https://wa.me/917678134697" target="_blank" rel="noopener noreferrer" className="block">
                                                <div className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors">
                                                    💬 WhatsApp Us
                                                </div>
                                            </a>
                                            <div className="text-center text-sm text-gray-500 mt-4">
                                                Available 24/7 for emergency microwave repairs
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            Don't Risk DIY Microwave Repair
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            High voltage and radiation risks require professional handling.
                            Our certified technicians ensure safe, reliable repairs .
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917678134697"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Call Expert Now
                            </a>
                            <button
                                onClick={() => {
                                    setActiveTab('booking');
                                    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Book Online
                            </button>
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