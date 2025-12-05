// app/about/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
    Shield,
    Award,
    Users,
    Clock,
    CheckCircle,
    Wrench,
    Home,
    Phone,
    Star,
    Heart,
    Target,
    TrendingUp,
    Zap,
    ChevronRight,
    MapPin,
    Calendar,
    Sparkles,
    Trophy,
    ThumbsUp,
    UsersRound,
    Building,
    Lightbulb,
    Handshake,
    Globe,
    BadgeCheck,
    ArrowRight,
    StarIcon as StarFull,
    Quote,
    Ribbon,
    Medal,
    Crown,
    Flag,
    TrendingUp as Growth,
    Briefcase,
    WrenchIcon as Tool,
    Gauge,
    DollarSign,
    Smile,
    Headphones
} from 'lucide-react';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeMilestone, setActiveMilestone] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Auto rotate milestones
        const interval = setInterval(() => {
            setActiveMilestone((prev) => (prev + 1) % milestones.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Enhanced Statistics
    const stats = [
        {
            icon: <Wrench size={28} />,
            value: '5000+',
            label: 'Repairs Completed',
            color: 'from-blue-500 to-cyan-500',
            description: 'Successful repairs'
        },
        {
            icon: <Users size={28} />,
            value: '98%',
            label: 'Customer Satisfaction',
            color: 'from-green-500 to-emerald-500',
            description: 'Happy customers'
        },
        {
            icon: <Clock size={28} />,
            value: '30 min',
            label: 'Avg Response Time',
            color: 'from-orange-500 to-amber-500',
            description: 'Quick response'
        },
        {
            icon: <Shield size={28} />,
            value: '90 Days',
            label: 'Service Warranty',
            color: 'from-purple-500 to-pink-500',
            description: 'Warranty period'
        },
        {
            icon: <Trophy size={28} />,
            value: '4.9/5',
            label: 'Google Rating',
            color: 'from-yellow-500 to-orange-500',
            description: 'Stars rating'
        },
        {
            icon: <Award size={28} />,
            value: '15+',
            label: 'Expert Technicians',
            color: 'from-indigo-500 to-blue-500',
            description: 'Certified team'
        },
    ];

    // Enhanced Values
    const values = [
        {
            icon: <Shield size={32} />,
            title: 'Integrity First',
            description: '100% transparent pricing with no hidden charges. We believe in honest service.',
            color: 'from-blue-500 to-cyan-500',
            points: ['No hidden charges', 'Free diagnosis', 'Upfront pricing']
        },
        {
            icon: <Zap size={32} />,
            title: 'Lightning Fast',
            description: 'Emergency service 24/7. Same-day repairs for most appliances.',
            color: 'from-green-500 to-emerald-500',
            points: ['Same-day service', '24/7 emergency', 'Quick response']
        },
        {
            icon: <Award size={32} />,
            title: 'Quality Excellence',
            description: 'Only genuine parts. Certified technicians with 5+ years experience.',
            color: 'from-purple-500 to-pink-500',
            points: ['Genuine parts', 'Certified techs', 'Quality work']
        },
        {
            icon: <Heart size={32} />,
            title: 'Customer Love',
            description: 'Your satisfaction is our success. 90 days warranty on all repairs.',
            color: 'from-red-500 to-rose-500',
            points: ['90 days warranty', 'Follow-up calls', 'Happy customers']
        },
        {
            icon: <Lightbulb size={32} />,
            title: 'Smart Solutions',
            description: 'Modern tools and techniques for efficient and effective repairs.',
            color: 'from-yellow-500 to-amber-500',
            points: ['Modern equipment', 'Latest techniques', 'Smart approach']
        },
        {
            icon: <Handshake size={32} />,
            title: 'Trust & Reliability',
            description: 'Building long-term relationships based on trust and reliability.',
            color: 'from-indigo-500 to-blue-500',
            points: ['Trusted service', 'Reliable team', 'Long-term clients']
        },
    ];

    // Enhanced Team Members
    const team = [
        {
            name: 'Rajesh Kumar',
            role: 'Founder & CEO',
            experience: '15+ Years Experience',
            specialty: 'AC & Refrigeration Expert',
            achievements: ['Certified Engineer', '500+ AC Repairs', 'Customer Favorite'],
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80'
        },
        {
            name: 'Priya Sharma',
            role: 'Service Manager',
            experience: '10+ Years Experience',
            specialty: 'Customer Relations Expert',
            achievements: ['Customer Satisfaction', 'Team Management', 'Operations'],
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80'
        },
        {
            name: 'Amit Patel',
            role: 'Lead Technician',
            experience: '12+ Years Experience',
            specialty: 'Electronics & PCB Repair',
            achievements: ['PCB Specialist', 'Quick Diagnosis', 'Technical Expert'],
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400&h=400&fit=crop&q=80'
        },
        {
            name: 'Suresh Verma',
            role: 'Field Operations Head',
            experience: '8+ Years Experience',
            specialty: 'Washing Machine Expert',
            achievements: ['Appliance Expert', 'Fast Service', 'Quality Work'],
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80'
        },
    ];

    // Enhanced Milestones
    const milestones = [
        {
            year: '2015',
            title: 'Humble Beginnings',
            description: 'Started with 2 passionate technicians serving Chandigarh area',
            icon: '🚀'
        },
        {
            year: '2017',
            title: 'Rapid Growth',
            description: 'Expanded team to 10 experts and added AC repair services',
            icon: '📈'
        },
        {
            year: '2019',
            title: 'Digital Revolution',
            description: 'Launched online booking system and customer portal',
            icon: '💻'
        },
        {
            year: '2021',
            title: 'Citywide Service',
            description: 'Started serving entire Chandigarh Tricity region',
            icon: '🌆'
        },
        {
            year: '2023',
            title: '5000 Repairs Milestone',
            description: 'Completed 5000+ successful repairs with 98% satisfaction',
            icon: '🏆'
        },
        {
            year: '2024',
            title: 'Award Winning',
            description: 'Received Best Service Award 2024 - Customer Choice',
            icon: '🎖️'
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

            {/* Hero Section with Particles */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-20 md:py-28">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
                </div>

                <div className="relative container mx-auto px-4">
                    <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                        {/* Floating Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse-once">
                            <Sparkles size={18} className="text-yellow-300" />
                            <span className="font-semibold">⭐ Trusted Since 2015</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Your Trusted <span className="text-yellow-300">Appliance Repair</span> Partner
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Serving Chandigarh with expert appliance repairs since 2015.
                            <span className="block text-yellow-200 font-semibold mt-2">5000+ repairs • 98% satisfaction • 90-day warranty</span>
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">9<span className="text-white">+</span></div>
                                <div className="text-blue-200 text-sm">Years Experience</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">15<span className="text-white">+</span></div>
                                <div className="text-blue-200 text-sm">Expert Technicians</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-300">24<span className="text-white">/7</span></div>
                                <div className="text-blue-200 text-sm">Service Available</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                            >
                                <Calendar size={22} />
                                Book Service Now
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </a>

                            <a
                                href="tel:+917678134697"
                                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                            >
                                <Phone size={22} />
                                Emergency Call
                            </a>
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

            {/* Enhanced Stats Section */}
            <section className="py-16 bg-white -mt-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="font-semibold text-sm md:text-base mb-1">{stat.label}</div>
                                    <div className="text-white/80 text-xs">{stat.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Our <span className="text-blue-600">Journey</span> of Excellence
                                </h2>

                                <div className="space-y-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Founded in 2015 by <span className="font-semibold text-blue-600">Rajesh Kumar</span>,
                                        a refrigeration engineer with 15+ years of experience, we started with a simple
                                        mission: to provide honest, reliable, and affordable appliance repair services.
                                    </p>

                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        What began as a small team of two passionate technicians in Chandigarh has
                                        grown into the city's most trusted appliance repair company, serving thousands
                                        of satisfied customers across the Tricity region.
                                    </p>

                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Today, we stand proud with <span className="font-semibold text-blue-600">15+ certified technicians</span>,
                                        <span className="font-semibold text-blue-600"> 5000+ successful repairs</span>, and a
                                        <span className="font-semibold text-blue-600"> 98% customer satisfaction rate</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Mission & Vision Cards */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Target size={24} className="text-yellow-300" />
                                        <h4 className="font-bold text-lg">Our Mission</h4>
                                    </div>
                                    <p className="text-blue-100">
                                        To provide fast, reliable, and affordable appliance repair services while maintaining
                                        the highest standards of quality and customer satisfaction.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Globe size={24} className="text-yellow-300" />
                                        <h4 className="font-bold text-lg">Our Vision</h4>
                                    </div>
                                    <p className="text-blue-100">
                                        To become Chandigarh's most trusted and preferred appliance repair service,
                                        setting new benchmarks in quality and customer service.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Card */}
                        <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Crown size={36} className="text-yellow-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                                    <p className="text-blue-100">Experience the difference with our premium service</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { icon: <BadgeCheck size={20} />, title: 'Certified Experts', desc: 'All technicians certified with 5+ years experience' },
                                        { icon: <Clock size={20} />, title: 'Same Day Service', desc: 'Most repairs completed on the same day' },
                                        { icon: <Tool size={20} />, title: 'Genuine Parts', desc: 'We use only genuine/OEM spare parts' },
                                        { icon: <DollarSign size={20} />, title: 'Best Price', desc: 'Competitive pricing with no hidden charges' },
                                        { icon: <Shield size={20} />, title: '90 Days Warranty', desc: 'Comprehensive warranty on all repairs' },
                                        { icon: <Headphones size={20} />, title: '24/7 Support', desc: 'Round-the-clock customer support' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                                            <div className="text-green-300 mr-3 mt-1 flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">{item.title}</h4>
                                                <p className="text-sm text-blue-100">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/20">
                                    <div className="flex items-center justify-center gap-2">
                                        <ThumbsUp size={20} className="text-yellow-300" />
                                        <span className="text-lg">98% Customer Satisfaction Rate</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 -z-10"></div>
                            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-full opacity-30 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-blue-600">Core Values</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            These principles guide everything we do, from customer service to technical repairs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${value.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer animate-fade-in`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{value.title}</h3>
                                </div>

                                <p className="text-blue-100 mb-6">
                                    {value.description}
                                </p>

                                <div className="space-y-2">
                                    {value.points.map((point, i) => (
                                        <div key={i} className="flex items-center text-sm">
                                            <CheckCircle size={16} className="text-green-300 mr-3" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Expert Team */}
            <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="text-blue-600">Expert Team</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our certified technicians bring years of experience and expertise to every repair job
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Team Member Image */}
                                <div className="relative h-56 bg-gradient-to-br from-blue-100 to-cyan-100">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Experience Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={14} className="text-blue-600" />
                                            <span className="text-sm font-semibold text-blue-700">{member.experience}</span>
                                        </div>
                                    </div>

                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full px-3 py-1.5 shadow-lg">
                                        <div className="flex items-center gap-1">
                                            <StarFull size={14} />
                                            <span className="text-sm font-bold">{member.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Team Member Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>

                                    <div className="mb-4">
                                        <div className="flex items-center text-sm text-gray-600 mb-2">
                                            <Wrench size={16} className="mr-2 text-blue-500" />
                                            <span className="font-medium">{member.specialty}</span>
                                        </div>

                                        <div className="space-y-1.5">
                                            {member.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-center text-xs text-gray-500">
                                                    <CheckCircle size={12} className="text-green-500 mr-2" />
                                                    {achievement}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Skills Progress */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-600">Expertise</span>
                                            <span className="font-semibold text-blue-600">95%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Team Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                            <div className="text-gray-600">Certified Experts</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                            <div className="text-gray-600">Years Combined Experience</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                            <div className="text-gray-600">Average Rating</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-blue-600">Journey</span> Timeline
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From humble beginnings to Chandigarh's trusted appliance repair service
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col lg:flex-row items-center lg:items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Year Circle */}
                                    <div className={`z-10 flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4 lg:mb-0 transition-all duration-500 ${activeMilestone === index
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 scale-110'
                                        : 'bg-gradient-to-r from-blue-500 to-blue-700'
                                        }`}>
                                        <div className="text-center">
                                            <div className="text-2xl">{milestone.icon}</div>
                                            <div className="text-sm mt-1">{milestone.year}</div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                        <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 ${activeMilestone === index
                                            ? 'border-blue-500 shadow-xl scale-105'
                                            : 'border-gray-100'
                                            }`}>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Navigation */}
                    <div className="flex justify-center mt-12">
                        <div className="flex space-x-2">
                            {milestones.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveMilestone(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${activeMilestone === index
                                        ? 'bg-blue-600 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to milestone ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="text-blue-600">Customers Say</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Don't just take our word for it - hear from our satisfied customers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Rahul Sharma',
                                location: 'Chandigarh',
                                rating: 5,
                                comment: 'AC repair was excellent! Technician arrived on time and fixed the cooling issue within an hour. Highly recommended!',
                                service: 'AC Repair'
                            },
                            {
                                name: 'Priya Singh',
                                location: 'Mohali',
                                rating: 5,
                                comment: 'Washing machine stopped spinning. The technician diagnosed and fixed it quickly. Very professional service!',
                                service: 'Washing Machine'
                            },
                            {
                                name: 'Amit Kumar',
                                location: 'Panchkula',
                                rating: 5,
                                comment: 'TV display issue resolved perfectly. Got 90 days warranty on service. Will definitely call again if needed.',
                                service: 'TV Repair'
                            }
                        ].map((review, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{review.name}</div>
                                        <div className="text-sm text-gray-500">{review.location} • {review.service}</div>
                                    </div>
                                </div>

                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <StarFull key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-600 mb-6">{review.comment}</p>

                                <div className="flex items-center text-sm text-gray-500">
                                    <Quote size={16} className="text-blue-500 mr-2" />
                                    Verified Customer • 2 days ago
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            We Serve <span className="text-yellow-300">Chandigarh Tricity</span>
                        </h2>
                        <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                            Providing fast and reliable appliance repair services across all major areas
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {[
                            'Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Derabassi', 'New Chandigarh',
                        ].map((area, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all transform hover:scale-105 cursor-pointer border border-white/20"
                            >
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-medium">{area}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                            <Flag size={20} className="text-yellow-300" />
                            <span className="font-semibold">🎯 Free home service available in all areas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Experience <span className="text-yellow-300">Premium Service?</span>
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
                        Join thousands of satisfied customers who trust us for their appliance repair needs
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <a
                            href="tel:+917678134697"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                        >
                            <Phone size={24} />
                            Call Now: +91 76781 34697
                        </a>

                        <a
                            href="/contact"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                        >
                            <Calendar size={24} />
                            Book Online Instantly
                        </a>
                    </div>

                    {/* Guarantee Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield size={24} className="text-green-300" />
                            </div>
                            <div className="text-2xl font-bold mb-2">✓ Free Diagnosis</div>
                            <div className="text-blue-100">No charge if repair not done</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy size={24} className="text-yellow-300" />
                            </div>
                            <div className="text-2xl font-bold mb-2">90 Days Warranty</div>
                            <div className="text-blue-100">On all parts and service</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock size={24} className="text-blue-300" />
                            </div>
                            <div className="text-2xl font-bold mb-2">30 Min Response</div>
                            <div className="text-blue-100">Emergency service available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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
                
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.6s ease-out forwards;
                }
                
                .animate-pulse-once {
                    animation: pulse-once 2s ease-in-out;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}