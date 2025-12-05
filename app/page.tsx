// app/page.tsx - Fixed Version
'use client';

import React, { useEffect, useState } from 'react';
import {
  Phone,
  Wrench,
  Shield,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Tv,
  Wind,
  Droplets,
  Microwave,
  RefreshCw,
  Sparkles,
  Zap,
  Award,
  Users
} from 'lucide-react';
import Image from 'next/image';

// Fixed CountUp component
const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Array<{
    left: number;
    top: number;
    delay: number;
    duration: number;
  }>>([]);

  // Initialize particles only on client side
  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Generate particles data
    const particleCount = isMobile ? 15 : 30;
    const newParticles = Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]); // Remove isMobile from dependency to prevent infinite loop

  // Services data with image URLs
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1643705314142-6f072c3d48fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Refrigerator Repair',
      desc: 'Cooling issues, gas charging, compressor repair'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1170&auto=format&fit=crop',
      title: 'Washing Machine',
      desc: 'Motor repair, leakage, spin problems'
    },
    {
      image: 'https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'AC Service & Repair',
      desc: 'Gas refill, PCB repair, installation'
    },
    {
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1170&auto=format&fit=crop',
      title: 'TV Repair',
      desc: 'LED/LCD repair, sound issues, panel replacement'
    },
    {
      image: 'https://images.unsplash.com/photo-1740803292349-c7e53f7125b2?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Microwave Oven',
      desc: 'Heating issues, panel repair'
    },
    {
      image: 'https://images.unsplash.com/photo-1628239532623-c035054bff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwdXJpZmllcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Water Purifier',
      desc: 'RO service, filter change, motor repair'
    },
  ];

  // Why Choose Us points
  const features = [
    { icon: <Clock size={24} />, title: '24/7 Emergency Service', desc: 'Available round the clock' },
    { icon: <Shield size={24} />, title: '90 Days Warranty', desc: 'On all spare parts and service' },
    { icon: <Wrench size={24} />, title: 'Expert Technicians', desc: 'Certified and experienced professionals' },
    { icon: <CheckCircle size={24} />, title: 'Same Day Service', desc: 'Most repairs completed in single visit' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 text-white">
        {/* Floating Particles - Client Side Only */}
        <div className="absolute inset-0 overflow-hidden">
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

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 md:space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm animate-pulse-once">
                <Sparkles size={16} className="mr-2" />
                <span className="text-sm font-medium">24/7 Emergency Service Available</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional <span className="text-yellow-300 drop-shadow-lg">Home Appliance</span> Repair Service
              </h1>

              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Fast, reliable, and affordable repair services for all your home appliances.
                Serving 1000+ happy customers with 99% satisfaction rate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+917678134697"
                  className="group bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
                >
                  <Phone size={22} />
                  <span>Call Now: +91 76781 34697</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>

                <a
                  href="https://wa.me/917678134697"
                  className="group bg-green-500 text-white px-6 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg active:scale-95"
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Stats Grid - Mobile Optimized */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors animate-fade-in delay-300">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                    <CountUp end={2000} />+
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">Repairs Done</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors animate-fade-in delay-400">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">4.8<span className="text-white">/5</span></div>
                  <div className="text-blue-200 text-sm md:text-base">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors animate-fade-in delay-500">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                    <CountUp end={45} />
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors animate-fade-in delay-600">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                    <CountUp end={30} />+
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">Expert Techs</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image - Hidden on small mobile */}
            <div className={`relative ${isMobile ? 'hidden lg:block' : ''} ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1613405685219-5b5ac1c21fef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Appliance Repair Technician"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow text-sm md:text-base">
                    <Zap className="inline mr-2" size={16} />
                    Expert Tech
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white text-blue-700 p-4 rounded-xl shadow-lg animate-float-left hidden md:block">
                  <Award size={24} className="text-yellow-500" />
                  <div className="text-sm font-bold mt-2">Best Service<br />Award 2024</div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white text-blue-700 p-4 rounded-xl shadow-lg animate-float-right hidden md:block">
                  <Users size={24} className="text-green-500" />
                  <div className="text-sm font-bold mt-2">5000+<br />Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider - Mobile Optimized */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 md:h-24 lg:h-32">
            <path fill="#f0f9ff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1392,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 animate-slide-up">
              Our <span className="text-blue-600">Repair Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base animate-fade-in">
              We provide expert repair services for all major home appliances with warranty and genuine spare parts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 group cursor-pointer animate-service-card`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center animate-pulse-once">
                      <Wrench size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm md:text-base">
                    Book Service
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Left Content - Features */}
            <div className="lg:w-1/2 space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 animate-slide-up">
                  Why <span className="text-blue-600">Choose Us?</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6 md:mb-8 animate-fade-in">
                  We are committed to providing the best appliance repair service with transparency, quality, and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-xl p-4 md:p-6 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 animate-feature-item"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Testimonials */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl animate-scale-in">
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 animate-spin-slow">
                    <Star size={28} className="text-yellow-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Customer Reviews</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm md:text-base">4.8/5 from 500+ reviews</p>
                </div>

                {/* Testimonial Cards */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
                          alt="Customer"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Manpreet</h4>
                        <div className="flex">
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-blue-100">"Excellent fridge repair service. Technician was on time and fixed the cooling issue in 1 hour."</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src="https://tse3.mm.bing.net/th/id/OIP.tEpdc2oOnFAAKYtR95g3RgHaGw?pid=Api&P=0&h=180"
                          alt="Customer"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Gurvinder</h4>
                        <div className="flex">
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                          <Star size={14} className="fill-yellow-300 text-yellow-300" />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-blue-100">"AC repair was done professionally. They provided 90 days warranty on service."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-slide-up">
            Need Appliance Repair? <span className="text-yellow-300">We're Here to Help!</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto text-blue-100 animate-fade-in">
            Get instant service booking with our 24/7 customer support. Free diagnosis on first visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-scale-in">
            <a
              href="tel:+917678134697"
              className="bg-white text-blue-600 px-6 md:px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              <Phone size={22} />
              Call For Free Consultation
            </a>

            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-2xl active:scale-95"
            >
              Book Service Online
            </a>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto animate-fade-in delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-colors">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">✓ Free</div>
              <div className="text-blue-100 text-sm md:text-base">Diagnosis on First Visit</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-colors">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">90 Days</div>
              <div className="text-blue-100 text-sm md:text-base">Service Warranty</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-colors">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">30 Min</div>
              <div className="text-blue-100 text-sm md:text-base">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 animate-slide-up">
            Service <span className="text-blue-600">Areas</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {['Chandigarh', 'Panchkula', 'Mohali', 'Zirakpur', 'Kharar', 'Derabassi', 'New Chandigarh'].map((city, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 text-center shadow hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:scale-105 animate-service-area"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Home size={18} className="text-blue-600" />
                </div>
                <span className="font-medium text-gray-900 text-sm md:text-base">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes float-left {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
        }

        @keyframes float-right {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-float-left {
          animation: float-left 3s ease-in-out infinite;
        }

        .animate-float-right {
          animation: float-right 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-once {
          animation: pulse-once 2s ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-service-card {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-feature-item {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-service-area {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile touch feedback */
        @media (hover: none) and (pointer: coarse) {
          a, button {
            -webkit-tap-highlight-color: transparent;
          }
          
          .active\:scale-95:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}