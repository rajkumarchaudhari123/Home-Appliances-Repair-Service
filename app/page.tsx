// app/page.tsx - Fixed with visible navbar
'use client';

import React, { useEffect, useState } from 'react';
import {
  Phone,
  Wrench,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Droplets,
  Microwave,
  RefreshCw,
  Zap,
  Award,
  Users,
  ShieldCheck,
  ThumbsUp,
  MapPin,
  ChevronRight,
  Home
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Fixed CountUp component with start parameter
const CountUp = ({ start = 0, end, duration = 2000 }: { start?: number; end: number; duration?: number }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let current = start;
    const increment = (end - start) / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function HomePage() {
  // Services data
  const services = [
    {
      id: 'refrigerator',
      image: '/refrigeratorrepair.jpg',
      title: 'Refrigerator Repair',
      desc: 'Cooling issues, gas charging, compressor repair',
      icon: <Droplets size={20} className="text-white" />,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Cooling problems', 'Gas leakage', 'Compressor issues', 'Temperature control']
    },
    {
      id: 'washing-machine',
      image: '/washing-machine1.jpg',
      title: 'Front Load Washing Machine',
      desc: 'Motor repair, leakage, spin problems, PCB issues',
      icon: <RefreshCw size={20} className="text-white" />,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Motor problems', 'Water leakage', 'Spinning issues', 'PCB faults']
    },
    {
      id: 'washing-machine',
      image: '/washingmachine2.jpg',
      title: 'Top Load Washing Machine',
      desc: 'Drainage issues, agitator repair, motor problems',
      icon: <RefreshCw size={20} className="text-white" />,
      gradient: 'from-indigo-500 to-blue-500',
      features: ['Drainage problems', 'Agitator issues', 'Timer faults', 'Motor repair']
    },
    {
      id: 'washing-machine',
      image: '/washing-machine3.jpg',
      title: 'Semi-Automatic Washing Machine',
      desc: 'Timer issues, motor repair, water filling problems',
      icon: <RefreshCw size={20} className="text-white" />,
      gradient: 'from-teal-500 to-green-500',
      features: ['Timer problems', 'Motor failure', 'Water filling', 'Pulley issues']
    },
    {
      id: 'microwave-oven',
      image: '/microwave-oven.jpg',
      title: 'Microwave Oven',
      desc: 'Heating issues, panel repair, magnetron replacement',
      icon: <Microwave size={20} className="text-white" />,
      gradient: 'from-amber-500 to-orange-500',
      features: ['Not heating', 'Control panel', 'Magnetron issues', 'Turntable problems']
    },
  ];

  // Why Choose Us points
  const features = [
    {
      icon: <Clock size={24} className="text-white" />,
      title: '24/7 Emergency Service',
      desc: 'Available round the clock',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Wrench size={24} className="text-white" />,
      title: 'Expert Technicians',
      desc: 'Certified and experienced professionals',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <CheckCircle size={24} className="text-white" />,
      title: 'Same Day Service',
      desc: 'Most repairs completed in single visit',
      gradient: 'from-green-500 to-emerald-500'
    },

  ];

  // Stats with icons
  const stats = [
    {
      value: <CountUp start={0} end={2000} duration={2500} />,
      label: 'Repairs Done',
      icon: <Wrench size={20} className="text-blue-500" />,
      color: 'text-blue-500'
    },
    {
      value: '4.8/5',
      label: 'Customer Rating',
      icon: <Star size={20} className="text-yellow-500" />,
      color: 'text-yellow-500'
    },
    {
      value: '30 Min',
      label: 'Response Time',
      icon: <Clock size={20} className="text-green-500" />,
      color: 'text-green-500'
    },
    {
      value: <CountUp start={0} end={15} duration={2000} />,
      label: 'Expert Techs',
      icon: <Users size={20} className="text-purple-500" />,
      color: 'text-purple-500'
    },
  ];

  // Service areas
  const serviceAreas = [
    'Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar',
    'Derabassi', 'New Chandigarh'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Professional <span className="text-yellow-300 drop-shadow-lg">Appliance Repair</span> Service
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
                Fast, reliable, and affordable repair services for all your home appliances.
                Serving 2000+ happy customers with 99% satisfaction rate.
              </p>

              {/* Internal Navigation Links */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Link
                  href="#services"
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors text-sm"
                >
                  <Wrench size={16} className="mr-2" />
                  Our Services
                </Link>
                <Link
                  href="#why-choose-us"
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors text-sm"
                >
                  <Star size={16} className="mr-2" />
                  Why Choose Us
                </Link>
                <Link
                  href="#service-areas"
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors text-sm"
                >
                  <MapPin size={16} className="mr-2" />
                  Service Areas
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+9107206904101"
                  className="group bg-white text-blue-600 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg active:scale-95"
                >
                  <Phone size={20} />
                  <span>Call Now: +91 07206904101</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>

                <a
                  href="https://wa.me/9107206904101?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
                  className="group bg-green-500 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg active:scale-95"
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center hover:bg-white/20 transition-colors"
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

            {/* Right Side - Image */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700">
                  <Image
                    src="/appliance.jpg"
                    alt="Appliance Repair Technician fixing washing machine in Chandigarh"
                    width={800}
                    height={600}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>

                  {/* Floating Badge */}
                  <div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg animate-bounce-slow text-xs sm:text-sm"
                  >
                    <Zap className="inline mr-1 sm:mr-2" size={14} />
                    Expert Technician
                  </div>
                </div>

                {/* Floating Cards */}
                <div
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white text-blue-700 p-3 sm:p-4 rounded-xl shadow-lg animate-float-left hidden sm:block"
                >
                  <Award size={20} className="text-yellow-500 mb-1" />
                  <div className="text-xs sm:text-sm font-bold">Best Service<br />Award 2024</div>
                </div>

                <div
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white text-blue-700 p-3 sm:p-4 rounded-xl shadow-lg animate-float-right hidden sm:block"
                >
                  <Users size={20} className="text-green-500 mb-1" />
                  <div className="text-xs sm:text-sm font-bold">5000+<br />Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-12 sm:h-16 md:h-20 lg:h-24">
            <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1392,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-xs sm:text-sm font-medium mb-3">
              <Wrench size={14} className="mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Repair Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Professional repair services for all major home appliances with genuine spare parts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} repair service in Chandigarh`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Service Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

               
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              <span>View All Services</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-xs sm:text-sm font-medium mb-3">
                  <ThumbsUp size={14} className="mr-2" />
                  Why Choose Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Appliance Repair</span> Service
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  We are committed to providing the best appliance repair service with transparency, quality, and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${feature.gradient} text-white rounded-xl p-4 md:p-5 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-white/90 text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Internal Links to Service Pages */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Link
                  href="/refrigerator"
                  className="bg-blue-50 hover:bg-blue-100 rounded-lg p-3 text-center transition-colors"
                >
                  <div className="font-medium text-blue-700">Refrigerator Repair</div>
                  <div className="text-xs text-gray-600">Cooling issues, gas leakage</div>
                </Link>
                <Link
                  href="/washing-machine"
                  className="bg-purple-50 hover:bg-purple-100 rounded-lg p-3 text-center transition-colors"
                >
                  <div className="font-medium text-purple-700">Washing Machine Repair</div>
                  <div className="text-xs text-gray-600">Drainage, spinning problems</div>
                </Link>
              </div>
            </div>

            {/* Right Content - Testimonials */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200">
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={28} className="text-yellow-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-base">4.8/5 from 500+ reviews</p>
                </div>

                {/* Testimonials */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                          alt="Manpreet Singh - Satisfied customer from Chandigarh"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Manpreet Singh</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"Excellent fridge repair service. Technician was on time and fixed the cooling issue within an hour."</p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src="https://tse2.mm.bing.net/th/id/OIP.MnDi3z9FWDHQXnBO-stHcAHaE8?pid=Api&P=0&h=180"
                          alt="Gurvinder Kaur - Happy washing machine repair customer"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Gurvinder Kaur</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"Front load washing machine repair was done professionally. They provided genuine parts with warranty."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs sm:text-sm font-medium mb-3">
              <MapPin size={14} className="mr-2" />
              Service Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Service Areas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              We provide expert appliance repair services across Chandigarh and surrounding areas
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl md:rounded-3xl p-6 shadow-lg border border-purple-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {serviceAreas.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Home size={18} className="text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900 text-base">{city}</span>
                  <div className="mt-2">
                    <Link
                      href={`/services?area=${city.toLowerCase()}`}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Services in {city}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Appliance Problems</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Refrigerator not cooling properly
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Washing machine not spinning
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Microwave not heating food
                </li>
                <li>
                  <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4">
                    View all common problems
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href="tel:+9107206904101" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone size={20} className="mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold">+91 07206904101</div>
                    <div className="text-sm text-gray-500">24/7 Emergency Service</div>
                  </div>
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Serving Chandigarh, Panchkula, Mohali, Zirakpur and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Appliance Repair? <span className="text-yellow-300">We're Here to Help!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-white/90">
            Get instant service booking with our 24/7 customer support. ₹299 visit charge only.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 sm:mb-12">
            <a
              href="tel:+9107206904101"
              className="group bg-white text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              <Phone size={20} />
              Call For Consultation
            </a>

            <a
              href="https://wa.me/917206904101?text=Hello%2C%20I%20need%20help%20with%20appliance%20repair.%20Please%20assist%20me%20with%20the%20service%20details."
              className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl active:scale-95 flex items-center justify-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/20 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-300">30 Min</div>
              <div className="text-white/90 text-sm sm:text-base">Average Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/20 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-300">₹299</div>
              <div className="text-white/90 text-sm sm:text-base">Visit Charge</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 hover:bg-white/20 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-300">90 Days</div>
              <div className="text-white/90 text-sm sm:text-base">Service Warranty</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/services/refrigerator" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Refrigerator Repair
            </Link>
            <Link href="/services/washing-machine" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Washing Machine Repair
            </Link>
            <Link href="/services/microwave-oven" className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Microwave Repair
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}