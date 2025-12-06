// app/contact/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageSquare,
    Send,
    CheckCircle,
    User,
    Home,
    Tv,
    Wind,
    RefreshCw,
    Microwave,
    Droplets,
    AlertCircle,
    ChevronRight,
    Shield,
    Calendar,
    Users,
    Star,
    Award,
    Zap,
    Sparkles,
    Globe,
    Headphones,
    BadgeCheck,
    ThumbsUp,
    Tag,
    Percent,
    Gift,
    Wrench
} from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        date: '',
        time: '',
        address: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState<Array<{
        left: number;
        top: number;
        delay: number;
        duration: number;
    }>>([]);
    const [offers, setOffers] = useState([
        { id: 1, title: '20% OFF', desc: 'First Time Customers', icon: <Tag />, color: 'from-purple-500 to-pink-500' },
        { id: 4, title: 'Same Day', desc: 'Service Available', icon: <Zap />, color: 'from-orange-500 to-red-500' }
    ]);

    useEffect(() => {
        setIsVisible(true);

        // Generate particles only on client side
        const particleCount = 15;
        const newParticles = Array.from({ length: particleCount }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4
        }));
        setParticles(newParticles);

        // Animate offers
        const timer = setInterval(() => {
            setOffers(prev => {
                const newOffers = [...prev];
                const first = newOffers.shift();
                if (first) newOffers.push(first);
                return newOffers;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const services = [
        { id: 'refrigerator', name: 'Refrigerator Repair', icon: <Home size={24} />, color: 'bg-cyan-500' },
        { id: 'washing-machine', name: 'Washing Machine', icon: <RefreshCw size={24} />, color: 'bg-blue-500' },
        { id: 'microwave', name: 'Microwave Oven', icon: <Microwave size={24} />, color: 'bg-orange-500' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (serviceId: string) => {
        setFormData(prev => ({ ...prev, service: serviceId }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);

        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            message: '',
            date: '',
            time: '',
            address: ''
        });
        setCurrentStep(1);
    };

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const timeSlots = [
        '9:00 AM - 11:00 AM',
        '11:00 AM - 1:00 PM',
        '1:00 PM - 3:00 PM',
        '3:00 PM - 5:00 PM',
        '5:00 PM - 7:00 PM',
        '7:00 PM - 9:00 PM'
    ];

    const emergencyContacts = [
        {
            title: '📱 24/7 Emergency Hotline',
            number: '+91 76781 34697',
            description: 'Immediate assistance for urgent repairs',
            color: 'from-red-500 to-orange-500',
            icon: <Phone size={28} className="text-white" />
        },
        {
            title: '💬 WhatsApp Priority Support',
            number: '+91 76781 34697',
            description: 'Instant chat with technicians',
            color: 'from-green-500 to-emerald-500',
            icon: <MessageSquare size={28} className="text-white" />
        },
        {
            title: '📧 Email Support',
            number: 'support@appliancerepair.com',
            description: 'Queries & appointment scheduling',
            color: 'from-blue-500 to-cyan-500',
            icon: <Mail size={28} className="text-white" />
        },
    ];

    const serviceAreas = [
        'Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur',
        'Kharar', 'Derabassi', 'New Chandigarh', 'Banur'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

            {/* Hero Section with Particles */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white py-20 md:py-28">
                {/* Animated Background Particles - Client Side Only */}
                <div className="absolute inset-0">
                    {particles.map((particle, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                animationDelay: `${particle.delay}s`,
                                animationDuration: `${particle.duration}s`
                            }}
                        />
                    ))}
                </div>

                {/* Gradient Blobs */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4">
                    <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                        {/* Floating Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse-once">
                            <Sparkles size={18} className="text-yellow-300" />
                            <span className="font-semibold">🎯 100% Satisfaction Guarantee</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Get <span className="text-yellow-300">Instant Repair</span> Service
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Connect with certified technicians for all your appliance repairs.
                            <span className="block text-yellow-200 font-semibold mt-2">Same-day service • Free diagnosis • </span>
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">30<span className="text-white">min</span></div>
                                <div className="text-blue-200 text-sm">Response Time</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">4.9<span className="text-white text-lg">/5</span></div>
                                <div className="text-blue-200 text-sm">Customer Rating</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">5000<span className="text-white">+</span></div>
                                <div className="text-blue-200 text-sm">Happy Customers</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">24<span className="text-white">/7</span></div>
                                <div className="text-blue-200 text-sm">Service Available</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24">
                        <path fill="#f0f9ff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1392,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 md:py-20 -mt-8">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column - Contact Form */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Special Offers Carousel */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {offers.map((offer, index) => (
                                <div
                                    key={offer.id}
                                    className={`bg-gradient-to-br ${offer.color} text-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            {offer.icon}
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold">{offer.title}</div>
                                            <div className="text-white/90 text-sm">{offer.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Booking Form */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">

                            {/* Progress Steps */}
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6">
                                <div className="flex items-center justify-between">
                                    {[1, 2, 3, 4].map((step) => (
                                        <div key={step} className="flex items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= step
                                                ? 'bg-blue-600 text-white shadow-lg scale-110'
                                                : 'bg-gray-200 text-gray-400'
                                                }`}>
                                                {currentStep > step ? <CheckCircle size={20} /> : step}
                                            </div>
                                            {step < 4 && (
                                                <div className={`w-16 md:w-24 h-1 mx-2 md:mx-4 transition-all duration-300 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}`} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 text-sm">
                                    <span className={currentStep >= 1 ? 'text-blue-600 font-bold' : 'text-gray-500'}>Select Service</span>
                                    <span className={currentStep >= 2 ? 'text-blue-600 font-bold' : 'text-gray-500'}>Contact Info</span>
                                    <span className={currentStep >= 3 ? 'text-blue-600 font-bold' : 'text-gray-500'}>Schedule</span>
                                    <span className={currentStep >= 4 ? 'text-blue-600 font-bold' : 'text-gray-500'}>Confirm</span>
                                </div>
                            </div>

                            {/* Form Content */}
                            <div className="p-6 md:p-8">
                                {isSubmitted ? (
                                    <div className="text-center py-12 animate-fade-in">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                                            <CheckCircle size={40} className="text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">🎉 Request Submitted Successfully!</h3>
                                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                            Thank you for choosing our service! Our expert technician will call you within <span className="font-bold text-blue-600">15 minutes</span> to confirm your appointment.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="tel:+917678134697"
                                                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                                            >
                                                📞 Call Now for Immediate Assistance
                                            </a>
                                            <button
                                                onClick={() => setIsSubmitted(false)}
                                                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
                                            >
                                                Submit Another Request
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>

                                        {/* Step 1: Service Selection */}
                                        {currentStep === 1 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                        What appliance needs repair? 🛠️
                                                    </h3>
                                                    <p className="text-gray-600 mb-6">Select the appliance that requires service</p>

                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                                        {services.map((service) => (
                                                            <button
                                                                key={service.id}
                                                                type="button"
                                                                onClick={() => handleServiceSelect(service.id)}
                                                                className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${formData.service === service.id
                                                                    ? `border-blue-600 ${service.color} text-white scale-105`
                                                                    : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                                                                    }`}
                                                            >
                                                                <div className={`mb-3 ${formData.service === service.id ? 'text-white' : 'text-gray-600'}`}>
                                                                    {service.icon}
                                                                </div>
                                                                <span className="font-semibold text-center">{service.name}</span>
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="mb-6">
                                                        <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
                                                            <AlertCircle size={18} />
                                                            Describe the issue (optional)
                                                        </label>
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            rows={3}
                                                            placeholder="e.g., Fridge not cooling, AC making noise, Washing machine leaking water, TV no display..."
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex justify-end">
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!formData.service}
                                                        className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${formData.service
                                                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-105 shadow-lg'
                                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        Next Step
                                                        <ChevronRight className="inline" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 2: Contact Details */}
                                        {currentStep === 2 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                        📋 Your Contact Information
                                                    </h3>
                                                    <p className="text-gray-600 mb-6">We'll use this to schedule your service</p>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2">
                                                            Full Name *
                                                        </label>
                                                        <div className="relative">
                                                            <User className="absolute left-4 top-3.5 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="John Doe"
                                                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2">
                                                            Phone Number *
                                                        </label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-4 top-3.5 text-gray-400" />
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="+91 98765 43210"
                                                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2">
                                                            Email Address
                                                        </label>
                                                        <div className="relative">
                                                            <Mail className="absolute left-4 top-3.5 text-gray-400" />
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                placeholder="john@example.com"
                                                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2">
                                                            Address *
                                                        </label>
                                                        <div className="relative">
                                                            <MapPin className="absolute left-4 top-3.5 text-gray-400" />
                                                            <input
                                                                type="text"
                                                                name="address"
                                                                value={formData.address}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Complete address with landmark"
                                                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between pt-6">
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="px-8 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        ← Back
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!formData.name || !formData.phone || !formData.address}
                                                        className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${formData.name && formData.phone && formData.address
                                                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-105 shadow-lg'
                                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        Next Step
                                                        <ChevronRight className="inline" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 3: Schedule */}
                                        {currentStep === 3 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                        📅 Schedule Your Service
                                                    </h3>
                                                    <p className="text-gray-600 mb-6">Choose convenient date and time slot</p>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2">
                                                            Preferred Date *
                                                        </label>
                                                        <div className="relative">
                                                            <Calendar className="absolute left-4 top-3.5 text-gray-400" />
                                                            <input
                                                                type="date"
                                                                name="date"
                                                                value={formData.date}
                                                                onChange={handleChange}
                                                                required
                                                                min={new Date().toISOString().split('T')[0]}
                                                                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-700 font-semibold mb-2">
                                                            Time Slot *
                                                        </label>
                                                        <select
                                                            name="time"
                                                            value={formData.time}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        >
                                                            <option value="">Select time slot</option>
                                                            {timeSlots.map((slot) => (
                                                                <option key={slot} value={slot}>{slot}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="bg-blue-50 rounded-2xl p-6">
                                                    <div className="flex items-start gap-4">
                                                        <Clock className="text-blue-600 mt-1" />
                                                        <div>
                                                            <h4 className="font-bold text-blue-900 mb-2">📢 Same Day Service Available!</h4>
                                                            <p className="text-blue-700">
                                                                Select today's date for emergency service. Our technician will arrive within 2 hours.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between pt-6">
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="px-8 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        ← Back
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!formData.date || !formData.time}
                                                        className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${formData.date && formData.time
                                                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-105 shadow-lg'
                                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        Next Step
                                                        <ChevronRight className="inline" />
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Step 4: Confirmation */}
                                        {currentStep === 4 && (
                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                                        ✅ Confirm Your Details
                                                    </h3>
                                                    <p className="text-gray-600 mb-6">Review and submit your service request</p>
                                                </div>

                                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6 border border-blue-200">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                                <Wrench size={20} />
                                                                Service Details
                                                            </h4>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center">
                                                                    <span className="text-gray-600 w-32">Service:</span>
                                                                    <span className="font-semibold text-blue-700">
                                                                        {services.find(s => s.id === formData.service)?.name || 'Not selected'}
                                                                    </span>
                                                                </div>
                                                                {formData.message && (
                                                                    <div className="flex">
                                                                        <span className="text-gray-600 w-32">Issue:</span>
                                                                        <span className="text-gray-700">{formData.message}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                                <User size={20} />
                                                                Contact Information
                                                            </h4>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center">
                                                                    <span className="text-gray-600 w-32">Name:</span>
                                                                    <span className="font-semibold">{formData.name}</span>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <span className="text-gray-600 w-32">Phone:</span>
                                                                    <span className="font-semibold">{formData.phone}</span>
                                                                </div>
                                                                {formData.address && (
                                                                    <div className="flex items-center">
                                                                        <span className="text-gray-600 w-32">Address:</span>
                                                                        <span className="text-sm">{formData.address}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Schedule Details */}
                                                    <div className="mt-6 pt-6 border-t border-blue-200">
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                            <Calendar size={20} />
                                                            Schedule
                                                        </h4>
                                                        <div className="flex items-center gap-4">
                                                            <div className="bg-white rounded-xl p-3 border border-blue-100">
                                                                <div className="text-sm text-gray-600">Date</div>
                                                                <div className="font-semibold">{formData.date || 'Not selected'}</div>
                                                            </div>
                                                            <div className="bg-white rounded-xl p-3 border border-blue-100">
                                                                <div className="text-sm text-gray-600">Time Slot</div>
                                                                <div className="font-semibold">{formData.time || 'Not selected'}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Benefits Card */}
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-6">
                                                    <div className="flex items-start">
                                                        <ThumbsUp className="text-green-600 mr-3 mt-1" size={24} />
                                                        <div>
                                                            <h4 className="font-bold text-green-800 mb-2 text-lg">✅ What You Get:</h4>
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                                <div className="text-center">
                                                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                        <Headphones size={20} className="text-green-600" />
                                                                    </div>
                                                                    <div className="text-sm font-semibold text-green-700">Free Diagnosis</div>
                                                                </div>
                                                                <div className="text-center">
                                                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                        <BadgeCheck size={20} className="text-green-600" />
                                                                    </div>
                                                                </div>
                                                                <div className="text-center">
                                                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                        <Clock size={20} className="text-green-600" />
                                                                    </div>
                                                                    <div className="text-sm font-semibold text-green-700">Same Day Service</div>
                                                                </div>
                                                                <div className="text-center">
                                                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                        <Percent size={20} className="text-green-600" />
                                                                    </div>
                                                                    <div className="text-sm font-semibold text-green-700">Best Price</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between pt-4">
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="px-8 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        ← Edit Details
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                                Submitting...
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Send size={20} />
                                                                Submit Service Request
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-8">

                        {/* Emergency Contacts */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <Zap className="text-yellow-500" />
                                Emergency Contacts
                            </h3>

                            {emergencyContacts.map((contact, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${contact.color} text-white rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 shadow-lg cursor-pointer animate-fade-in`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                    onClick={() => {
                                        if (contact.title.includes('Email')) {
                                            window.location.href = `mailto:${contact.number}`;
                                        } else if (contact.title.includes('WhatsApp')) {
                                            window.open(`https://wa.me/${contact.number.replace(/\D/g, '')}`, '_blank');
                                        } else {
                                            window.location.href = `tel:${contact.number}`;
                                        }
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            {contact.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-lg mb-1">{contact.title}</div>
                                            <div className="text-white/90 text-sm mb-3">{contact.description}</div>
                                            <div className="text-xl font-bold tracking-wide">{contact.number}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Office Info */}
                        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <MapPin className="text-blue-600" />
                                Office Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <MapPin className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">Our Office Address</div>
                                        <div className="text-gray-600">
                                            123 Tech Park, Sector 62<br />
                                            Chandigarh, 160062<br />
                                            <span className="text-sm text-blue-500">📍 Near DLF Mall</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <Clock className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">Working Hours</div>
                                        <div className="text-gray-600 space-y-1">
                                            <div className="flex justify-between">
                                                <span>Mon - Fri:</span>
                                                <span className="font-semibold">8:00 AM - 10:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sat - Sun:</span>
                                                <span className="font-semibold">9:00 AM - 9:00 PM</span>
                                            </div>
                                            <div className="text-green-600 font-semibold mt-2">
                                                ⚡ 24/7 Emergency Service Available
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Buttons */}
                            <div className="mt-8 space-y-3">
                                <a
                                    href="https://wa.me/917678134697"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3.5 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                                >
                                    <MessageSquare size={20} />
                                    Start WhatsApp Chat
                                </a>
                                <a
                                    href="tel:+917678134697"
                                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3.5 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
                                >
                                    <Phone size={20} />
                                    Request Callback
                                </a>
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Globe className="text-yellow-300" />
                                Service Areas
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {serviceAreas.map((area, index) => (
                                    <span
                                        key={index}
                                        className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm hover:bg-white/30 transition-colors cursor-pointer"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                            <p className="text-blue-100 text-sm">
                                We serve Chandigarh Tricity and nearby areas.
                                <span className="block text-yellow-200 font-semibold mt-1">✓ Free home service available in all areas</span>
                            </p>
                        </div>

                        {/* Customer Support Card */}
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Headphones size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Customer Support</div>
                                    <div className="text-white/90 text-sm">Always here to help you</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span>Response Time:</span>
                                    <span className="font-bold">15-30 mins</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Support Team:</span>
                                    <span className="font-bold">Available 24/7</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Languages:</span>
                                    <span className="font-bold">EN, हिंदी, ਪੰਜਾਬੀ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        What Our <span className="text-blue-600">Customers Say</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'Rahul Sharma',
                                rating: 5,
                                comment: 'Microwave oven repair was excellent! Technician arrived on time and fixed the cooling issue within an hour. Highly recommended!',
                                service: 'Microwave oven Repair'
                            },
                            {
                                name: 'Priya Singh',
                                rating: 5,
                                comment: 'Washing machine stopped spinning. The technician diagnosed and fixed it quickly. Very professional service!',
                                service: 'Washing Machine'
                            },
                            {
                                name: 'Amit Kumar',
                                rating: 5,
                                comment: 'Refrigerator display issue resolved perfectly. . Will definitely call again if needed.',
                                service: 'Refrigerator Repair'
                            }
                        ].map((review, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-blue-100"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <User className="text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{review.name}</div>
                                            <div className="text-sm text-gray-500">{review.service}</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{review.comment}</p>
                                <div className="text-sm text-gray-500">Verified Customer • 2 days ago</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Get Your Appliance Fixed?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Don't wait! Get instant service booking with our 24/7 customer support.
                        <span className="block text-yellow-200 font-semibold mt-2">Free diagnosis • Same-day service </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+917678134697"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                        >
                            <Phone size={24} />
                            Call Now: +91 76781 34697
                        </a>
                        <a
                            href="#"
                            onClick={() => setCurrentStep(1)}
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                            Book Online Instantly
                        </a>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                @keyframes float-particle {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10%, 90% {
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-100px) translateX(20px);
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
                        opacity: 0.2;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }
                
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.6s ease-out forwards;
                }
                
                .animate-float-particle {
                    animation: float-particle linear infinite;
                }
                
                .animate-pulse-once {
                    animation: pulse-once 2s ease-in-out;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
                
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                
                input:focus, textarea:focus, select:focus {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
            `}</style>
        </div>
    );
}