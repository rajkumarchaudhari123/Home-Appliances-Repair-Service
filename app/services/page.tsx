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
    Tablet,
    Headphones,
    Speaker,
    Radio,
    Cpu,
    HardDrive,
    SmartphoneCharging,
    BatteryCharging,
    Plug,
    Cloud,
    Database,
    Server,
    Router,
    Info
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

    // Service-specific data
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
                {
                    icon: <Droplet size={24} />, // Changed from Water to Droplet
                    title: 'Not Draining',
                    description: 'Water doesn\'t drain from machine',
                    symptoms: ['Water remains in drum', 'Drain pump noise', 'Error codes', 'Cycle stops'],
                    fixTime: '1 hour',
                    severity: 'Medium',
                    commonCause: 'Drain pump clogged'
                },
                {
                    icon: <Power size={24} />,
                    title: 'No Power',
                    description: 'Washing machine won\'t turn on',
                    symptoms: ['No lights', 'No response', 'Dead control panel', 'Complete failure'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Power supply or main board issue'
                },
                {
                    icon: <Settings size={24} />,
                    title: 'Control Panel Issues',
                    description: 'Buttons not working or display problems',
                    symptoms: ['Unresponsive buttons', 'Display errors', 'Wrong settings', 'Program errors'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Membrane or PCB failure'
                },
                {
                    icon: <AlertTriangle size={24} />,
                    title: 'Noisy Operation',
                    description: 'Loud noises during wash or spin',
                    symptoms: ['Grinding noise', 'Knocking sounds', 'Vibration', 'Unbalanced load'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Bearings or shock absorbers worn'
                },
            ],
            brands: ['LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Panasonic', 'Haier', 'Godrej', 'Onida', 'Videocon'],
            pricing: [
                { service: 'Motor Repair', price: '₹1,500 - ₹4,000' },
                { service: 'Drain Pump', price: '₹800 - ₹2,000' },
                { service: 'Control Panel', price: '₹1,000 - ₹3,000' },
                { service: 'Drum Bearing', price: '₹2,000 - ₹5,000' },
            ]
        },
        'tv': {
            problems: [
                {
                    icon: <Monitor size={24} />,
                    title: 'No Picture',
                    description: 'TV has sound but no display',
                    symptoms: ['Backlight works', 'Sound present', 'Black screen', 'Faint image'],
                    fixTime: '2-3 hours',
                    severity: 'High',
                    commonCause: 'LED/LCD panel or T-Con board'
                },
                {
                    icon: <Volume2 size={24} />,
                    title: 'No Sound',
                    description: 'Picture works but no audio',
                    symptoms: ['Display works', 'Mute not active', 'No audio output', 'Speaker issues'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Audio board or speaker failure'
                },
                {
                    icon: <Power size={24} />,
                    title: 'Power Issues',
                    description: 'TV won\'t turn on or keeps restarting',
                    symptoms: ['No power light', 'Keeps restarting', 'Standby only', 'Power cycles'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Power supply board failure'
                },
                {
                    icon: <Tv size={24} />, // Changed from Remote to Tv
                    title: 'Remote Issues',
                    description: 'Remote control not working',
                    symptoms: ['Buttons unresponsive', 'IR sensor issue', 'Battery problem', 'Pairing lost'],
                    fixTime: '30-60 mins',
                    severity: 'Low',
                    commonCause: 'IR sensor or remote failure'
                },
                {
                    icon: <Gamepad2 size={24} />,
                    title: 'Smart Features',
                    description: 'Smart TV features not working',
                    symptoms: ['Wi-Fi issues', 'Apps not loading', 'Slow performance', 'Update problems'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Main board or software issue'
                },
                {
                    icon: <Cable size={24} />,
                    title: 'Input Problems',
                    description: 'HDMI/AV ports not working',
                    symptoms: ['No signal', 'Ports dead', 'Input switching issues', 'Connection drops'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Input board or connection issue'
                },
            ],
            brands: ['Samsung', 'LG', 'Sony', 'Panasonic', 'TCL', 'Mi', 'OnePlus', 'Vu', 'Thomson', 'Realme'],
            pricing: [
                { service: 'LED Panel', price: '₹3,000 - ₹8,000' },
                { service: 'Power Board', price: '₹1,500 - ₹3,500' },
                { service: 'Main Board', price: '₹2,000 - ₹5,000' },
                { service: 'T-Con Board', price: '₹1,500 - ₹3,000' },
            ]
        },
        'ac': {
            problems: [
                {
                    icon: <Snowflake size={24} />,
                    title: 'Not Cooling',
                    description: 'AC runs but doesn\'t cool room',
                    symptoms: ['Fan works', 'No cold air', 'Room temperature high', 'Weak airflow'],
                    fixTime: '2-3 hours',
                    severity: 'High',
                    commonCause: 'Gas leakage or compressor issue'
                },
                {
                    icon: <Droplet size={24} />,
                    title: 'Water Leakage',
                    description: 'Water dripping from AC unit',
                    symptoms: ['Water puddles', 'Indoor leakage', 'Drain pipe blocked', 'Ice formation'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Drain pipe clogged'
                },
                {
                    icon: <Power size={24} />,
                    title: 'No Power',
                    description: 'AC unit not turning on',
                    symptoms: ['No LED lights', 'Complete failure', 'Trip issues', 'Remote not working'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'PCB or capacitor failure'
                },
                {
                    icon: <Fan size={24} />,
                    title: 'Noisy Operation',
                    description: 'Loud noises from AC unit',
                    symptoms: ['Grinding sounds', 'Vibration', 'Rattling noise', 'Fan blade issue'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Fan motor or blower issue'
                },
                {
                    icon: <Tv size={24} />, // Changed from Remote to Tv
                    title: 'Remote Issues',
                    description: 'Remote control not working',
                    symptoms: ['Buttons not responding', 'IR sensor problem', 'Display issues', 'Battery dead'],
                    fixTime: '30-60 mins',
                    severity: 'Low',
                    commonCause: 'IR sensor or remote failure'
                },
                {
                    icon: <Filter size={24} />,
                    title: 'Poor Airflow',
                    description: 'Weak or no airflow from vents',
                    symptoms: ['Low air pressure', 'Dirty filters', 'Blower issues', 'Duct blockage'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Filter clogged or blower motor'
                },
            ],
            brands: ['Daikin', 'LG', 'Samsung', 'Voltas', 'Blue Star', 'Carrier', 'Hitachi', 'Panasonic', 'Mitsubishi', 'Haier'],
            pricing: [
                { service: 'Gas Refilling', price: '₹1,500 - ₹3,500' },
                { service: 'PCB Repair', price: '₹2,000 - ₹4,500' },
                { service: 'Compressor', price: '₹4,000 - ₹8,000' },
                { service: 'Fan Motor', price: '₹1,500 - ₹3,500' },
            ]
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
                {
                    icon: <ThermometerSun size={24} />,
                    title: 'Freezer Issues',
                    description: 'Freezer not freezing properly',
                    symptoms: ['Ice melting', 'Temperature high', 'Frost buildup', 'Food thawing'],
                    fixTime: '2-3 hours',
                    severity: 'High',
                    commonCause: 'Thermostat or defrost timer'
                },
                {
                    icon: <Power size={24} />,
                    title: 'No Power',
                    description: 'Refrigerator not turning on',
                    symptoms: ['No lights', 'Complete failure', 'Compressor silent', 'Control dead'],
                    fixTime: '1-2 hours',
                    severity: 'High',
                    commonCause: 'Main board or relay issue'
                },
                {
                    icon: <Package size={24} />,
                    title: 'Ice Maker Problems',
                    description: 'Ice maker not working',
                    symptoms: ['No ice production', 'Ice stuck', 'Water not filling', 'Dispenser issues'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Water inlet valve or motor'
                },
                {
                    icon: <AlertTriangle size={24} />,
                    title: 'Noisy Operation',
                    description: 'Loud noises from refrigerator',
                    symptoms: ['Buzzing sounds', 'Clicking noise', 'Compressor noise', 'Fan rattling'],
                    fixTime: '1-2 hours',
                    severity: 'Medium',
                    commonCause: 'Compressor or fan motor'
                },
            ],
            brands: ['LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 'Panasonic', 'Voltas', 'Hitachi', 'Mitsubishi', 'Carrier'],
            pricing: [
                { service: 'Compressor', price: '₹4,000 - ₹8,000' },
                { service: 'Gas Refilling', price: '₹1,500 - ₹3,000' },
                { service: 'Thermostat', price: '₹800 - ₹2,000' },
                { service: 'Main Board', price: '₹2,000 - ₹4,000' },
            ]
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
            ],
            brands: ['Samsung', 'LG', 'Whirlpool', 'IFB', 'Panasonic', 'Godrej', 'Haier', 'Morphy Richards', 'Bajaj', 'Prestige'],
            pricing: [
                { service: 'Magnetron', price: '₹1,500 - ₹3,500' },
                {
                    service: 'High Voltage', price: '₹1,000 - ₹2,500'
                },

                {
                    service: 'Control Panel', price: '₹800 - ₹2,000'
                },
                { service: 'Door Mechanism', price: '₹500 - ₹1,500' },
            ]
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
                            for washing machines, TVs, ACs, refrigerators, and microwaves.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917678134697"
                                className="group bg-white text-blue-600 px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Phone size={22} />
                                <span>Call Appliance Expert</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </a>

                            <button
                                onClick={() => {
                                    const bookingSection = document.getElementById('booking-section');
                                    if (bookingSection) {
                                        bookingSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="group bg-transparent border-2 border-white text-white px-6 md:px-8 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                            >
                                <Calendar size={20} />
                                <span>Book Service</span>
                            </button>
                        </div>
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

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    setActiveService(service.id);
                                    setActiveTab('problems');
                                }}
                                className={`relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 ${activeService === service.id
                                    ? `bg-gradient-to-r ${service.color} text-white shadow-xl`
                                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${activeService === service.id ? 'bg-white/20' : 'bg-blue-50'
                                    }`}>
                                    <div className={activeService === service.id ? 'text-white' : 'text-blue-600'}>
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                                <div className={`text-sm opacity-90 ${activeService === service.id ? 'text-blue-100' : 'text-gray-600'
                                    }`}>
                                    {service.commonProblems.length}+ common issues
                                </div>

                                {activeService === service.id && (
                                    <div className="absolute top-2 right-2">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Service Details */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
                    {/* Service Header */}
                    <div className={`bg-gradient-to-r ${currentService?.color} text-white p-6 md:p-8`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
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
                                    href="tel:+917678134697"
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
                                    { id: 'brands', label: 'Brands We Service', icon: '🏷️' },
                                    { id: 'pricing', label: 'Service Pricing', icon: '💰' },
                                    { id: 'why-us', label: 'Why Choose Us', icon: '⭐' },
                                    { id: 'booking', label: 'Book Service', icon: '📅' },
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

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                                            <button
                                                                onClick={() => setActiveTab('booking')}
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
                                </div>
                            )}

                            {/* Brands Tab */}
                            {activeTab === 'brands' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Brands We Repair
                                    </h3>

                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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

                            {/* Pricing Tab */}
                            {activeTab === 'pricing' && (
                                <div className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Service Pricing
                                    </h3>

                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 border border-blue-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-6">Common Repairs</h4>

                                                <div className="space-y-4">
                                                    {currentData?.pricing.map((item: any, index: number) => (
                                                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                                                            <div>
                                                                <div className="font-semibold text-gray-900">{item.service}</div>
                                                            </div>
                                                            <div className="text-xl font-bold text-blue-600">{item.price}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                                                    <div className="flex items-center gap-3">
                                                        <Info size={20} className="text-blue-600" />
                                                        <p className="text-sm text-gray-700">
                                                            * Prices include labor, parts, and GST.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8">
                                                <h4 className="text-xl font-bold mb-6">Service Packages</h4>

                                                <div className="space-y-6">
                                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                                        <h5 className="font-bold text-lg mb-3">Basic Service</h5>
                                                        <ul className="space-y-2 mb-4">
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
                                                                Minor adjustments
                                                            </li>
                                                        </ul>
                                                        <div className="text-2xl font-bold text-yellow-300">₹499</div>
                                                    </div>

                                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                                        <h5 className="font-bold text-lg mb-3">Premium Service</h5>
                                                        <ul className="space-y-2 mb-4">
                                                            <li className="flex items-center">
                                                                <CheckCircle size={16} className="text-green-300 mr-3" />
                                                                Everything in Basic
                                                            </li>
                                                            <li className="flex items-center">
                                                                <CheckCircle size={16} className="text-green-300 mr-3" />
                                                                Deep cleaning
                                                            </li>
                                                            <li className="flex items-center">
                                                                <CheckCircle size={16} className="text-green-300 mr-3" />
                                                                Gas pressure check
                                                            </li>
                                                            <li className="flex items-center">
                                                                <CheckCircle size={16} className="text-green-300 mr-3" />
                                                                30 days "
                                                            </li>
                                                        </ul>
                                                        <div className="text-2xl font-bold text-yellow-300">₹999</div>
                                                    </div>
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
                                                <Shield size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3">Certified Technicians</h4>
                                            <p className="text-gray-600">
                                                All our technicians are certified and have 5+ years of experience in {currentService?.name.toLowerCase()} repair.
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
                                            <h4 className="font-bold text-gray-900 mb-3">Genuine Parts</h4>
                                            <p className="text-gray-600">
                                                We use only OEM or high-quality spare parts with ".
                                            </p>
                                        </div>



                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Wrench size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3">" on Repairs</h4>
                                            <p className="text-gray-600">
                                                90-180 days " on all repairs depending on the component.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                                <Phone size={24} className="text-blue-600" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-3">24/7 Support</h4>
                                            <p className="text-gray-600">
                                                Round-the-clock customer support for emergency repairs.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-8">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold mb-2">5,000+</div>
                                                <div className="text-blue-200">Happy Customers</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold mb-2">98%</div>
                                                <div className="text-blue-200">Success Rate</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold mb-2">24/7</div>
                                                <div className="text-blue-200">Service Available</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold mb-2">4.9★</div>
                                                <div className="text-blue-200">Customer Rating</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Booking Tab */}
                            {activeTab === 'booking' && (
                                <div id="booking-section" className="animate-fade-in">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                                        Book {currentService?.name} Repair
                                    </h3>

                                    <div className="grid lg:grid-cols-2 gap-8">
                                        {/* Booking Form */}
                                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-6 md:p-8 border border-blue-200">
                                            <h4 className="text-lg font-bold text-gray-900 mb-6">Schedule Your Repair</h4>

                                            <form className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Your Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                                                            className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                            placeholder="Enter your phone"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Full Address *
                                                    </label>
                                                    <textarea
                                                        required
                                                        rows={3}
                                                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                                        placeholder="Enter your complete address"
                                                    />
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            {currentService?.name} Brand *
                                                        </label>
                                                        <select
                                                            required
                                                            className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                        >
                                                            <option value="">Select brand</option>
                                                            {currentData?.brands.map((brand: string) => (
                                                                <option key={brand} value={brand}>{brand}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                                            Problem Type *
                                                        </label>
                                                        <select
                                                            required
                                                            className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                        >
                                                            <option value="">Select problem</option>
                                                            {currentData?.problems.map((problem: any) => (
                                                                <option key={problem.title} value={problem.title}>{problem.title}</option>
                                                            ))}
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
                                                            className="px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                        />
                                                        <select
                                                            required
                                                            className="px-4 py-3 bg-white border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                        >
                                                            <option value="">Select time slot</option>
                                                            <option value="9-12">9:00 AM - 12:00 PM</option>
                                                            <option value="12-3">12:00 PM - 3:00 PM</option>
                                                            <option value="3-6">3:00 PM - 6:00 PM</option>
                                                            <option value="6-9">6:00 PM - 9:00 PM</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                                                >
                                                    Book {currentService?.name} Repair
                                                </button>

                                                <p className="text-center text-sm text-gray-500">
                                                    Our expert will call within 15 minutes to confirm your appointment.
                                                </p>
                                            </form>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-8">
                                                <h4 className="text-xl font-bold mb-6">⚡ Immediate Assistance</h4>

                                                <div className="space-y-6">
                                                    <a href="tel:+917678134697" className="block">
                                                        <div className="flex items-center justify-center gap-3 bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
                                                            <Phone size={24} />
                                                            Call Expert Now
                                                        </div>
                                                    </a>

                                                    <div className="space-y-4">
                                                        <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                                            <Clock size={24} className="text-blue-200" />
                                                            <div>
                                                                <div className="font-bold">Service Hours</div>
                                                                <div className="text-blue-200">Mon-Sun: 8 AM - 9 PM</div>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                                            <Shield size={24} className="text-blue-200" />
                                                            <div>
                                                                <div className="font-bold">Emergency Service</div>
                                                                <div className="text-blue-200">Available 24/7</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-3xl p-8 border border-blue-200 shadow-lg">
                                                <h4 className="text-lg font-bold text-gray-900 mb-6">What to Expect</h4>

                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <CheckCircle size={16} className="text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">Free Diagnosis</div>
                                                            <p className="text-sm text-gray-600">No charge if repair not done</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <CheckCircle size={16} className="text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">Same Day Service</div>
                                                            <p className="text-sm text-gray-600">Most repairs completed same day</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-start gap-3">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <CheckCircle size={16} className="text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900">"</div>
                                                            <p className="text-sm text-gray-600">90-180 days " on repairs</p>
                                                        </div>
                                                    </div>
                                                </div>
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
                                href="tel:+917678134697"
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Call All Appliance Expert
                            </a>
                            <a
                                href="https://wa.me/917678134697"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg"
                            >
                                💬 WhatsApp Now
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