// app/page.tsx - Fixed Version
'use client';

import React, { useEffect, useState, useCallback } from 'react';
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
  Users,
  AlertCircle,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  BatteryCharging,
  ThumbsUp,
  MapPin,
  ChevronRight
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

  // Initialize particles only on client side - FIXED useEffect
  useEffect(() => {
    setIsVisible(true);

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Generate particles based on screen size
      const particleCount = mobile ? 12 : 25;
      const newParticles = Array.from({ length: particleCount }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3
      }));
      setParticles(newParticles);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array - runs only once on mount

  // Separate effect for handling window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array - runs only once

  // Services data with high-quality attractive images
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1630459065645-549fe5a56db4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Refrigerator Repair',
      desc: 'Cooling issues, gas charging, compressor repair',
      icon: <Droplets size={20} />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1170&auto=format&fit=crop',
      title: 'Front Load Washing Machine',
      desc: 'Motor repair, leakage, spin problems, PCB issues',
      icon: <RefreshCw size={20} />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      image: 'https://tse4.mm.bing.net/th/id/OIP.OSXwZQkH9KHYqCOMBEpfCgHaHa?pid=Api&P=0&h=180',
      title: 'Top Load Washing Machine',
      desc: 'Drainage issues, agitator repair, motor problems',
      icon: <RefreshCw size={20} />,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      image: 'https://images.unsplash.com/photo-1532916697008-5bc24f95592a?q=80&w=1090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Semi-Automatic Washing Machine',
      desc: 'Timer issues, motor repair, water filling problems',
      icon: <RefreshCw size={20} />,
      gradient: 'from-teal-500 to-green-500'
    },


    {
      image: 'https://images.unsplash.com/photo-1740803292349-c7e53f7125b2?q=80&w=1202&auto=format&fit=crop',
      title: 'Microwave Oven',
      desc: 'Heating issues, panel repair, magnetron replacement',
      icon: <Microwave size={20} />,
      gradient: 'from-amber-500 to-orange-500'
    },
  ];

  // Why Choose Us points
  const features = [
    {
      icon: <Clock size={24} />,
      title: '24/7 Emergency Service',
      desc: 'Available round the clock',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Expert Technicians',
      desc: 'Certified and experienced professionals',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Same Day Service',
      desc: 'Most repairs completed in single visit',
      gradient: 'from-green-500 to-emerald-500'
    },

  ];

  // Stats with icons
  const stats = [
    { value: '2000+', label: 'Repairs Done', icon: <Wrench size={20} />, color: 'text-blue-400' },
    { value: '4.8/5', label: 'Customer Rating', icon: <Star size={20} />, color: 'text-yellow-400' },
    { value: '45 Min', label: 'Response Time', icon: <Clock size={20} />, color: 'text-green-400' },
    { value: '30+', label: 'Expert Techs', icon: <Users size={20} />, color: 'text-purple-400' },
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

        {/* Floating Particles */}
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

        <div className="relative container mx-auto px-4 sm:px-6 py-8 md:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content - Optimized for Mobile */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full backdrop-blur-sm animate-pulse-once">
                <Sparkles size={14} className="mr-2" />
                <span className="text-xs sm:text-sm font-medium">24/7 Emergency Service Available</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Professional <span className="text-yellow-300 drop-shadow-lg">Appliance Repair</span> Service
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
                Fast, reliable, and affordable repair services for all your home appliances.
                Serving 2000+ happy customers with 99% satisfaction rate.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:+917678134697"
                  className="group bg-white text-blue-600 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg active:scale-95"
                >
                  <Phone size={20} />
                  <span>Call Now: +91 76781 34697</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>

                <a
                  href="https://wa.me/917678134697"
                  className="group bg-green-500 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg active:scale-95"
                >
                  <span>WhatsApp Us</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Stats Grid - Mobile Optimized */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center hover:bg-white/20 transition-colors animate-fade-in"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300">
                        {stat.value.includes('+') ? stat.value : stat.value}
                      </div>
                    </div>
                    <div className="text-blue-200 text-xs sm:text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1613405685219-5b5ac1c21fef?q=80&w=1170&auto=format&fit=crop"
                    alt="Appliance Repair Technician"
                    width={800}
                    height={600}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg animate-bounce-slow text-xs sm:text-sm">
                    <Zap className="inline mr-1 sm:mr-2" size={14} />
                    Expert Technician
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white text-blue-700 p-3 sm:p-4 rounded-xl shadow-lg animate-float-left hidden sm:block">
                  <Award size={20} className="text-yellow-500 mb-1" />
                  <div className="text-xs sm:text-sm font-bold">Best Service<br />Award 2024</div>
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white text-blue-700 p-3 sm:p-4 rounded-xl shadow-lg animate-float-right hidden sm:block">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-xs sm:text-sm font-medium mb-3">
              <Wrench size={14} className="mr-2" />
              Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Repair Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Professional repair services for all major home appliances with genuine spare parts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-200 cursor-pointer animate-service-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Service Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Overlay Gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-${service.gradient.split(' ')[1].replace('to-', '')}/20 via-transparent to-transparent`}></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                    {service.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 text-sm sm:text-base">
                    Book Service Now
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-xs sm:text-sm font-medium mb-3">
                  <ThumbsUp size={14} className="mr-2" />
                  Why Choose Us
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Appliance Repair</span> Service
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 md:mb-8">
                  We are committed to providing the best appliance repair service with transparency, quality, and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${feature.gradient} text-white rounded-xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-feature-item`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-white/90 text-sm md:text-base">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Testimonials */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl animate-scale-in">
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
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

                {/* Testimonials */}
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                          alt="Customer"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Manpreet Singh</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm md:text-base italic">"Excellent fridge repair service. Technician was on time and fixed the cooling issue within an hour."</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                          alt="Customer"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Gurvinder Kaur</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm md:text-base italic">"Front load washing machine repair was done professionally. They provided genuine parts with warranty."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs sm:text-sm font-medium mb-3">
              <MapPin size={14} className="mr-2" />
              Service Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Service Areas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              We provide expert appliance repair services across Chandigarh and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {serviceAreas.map((city, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-3 sm:p-4 text-center shadow hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 hover:scale-[1.02] animate-service-area"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Home size={18} className="text-purple-600" />
                </div>
                <span className="font-medium text-gray-900 text-sm sm:text-base">{city}</span>
              </div>
            ))}
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

        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Need Appliance Repair? <span className="text-yellow-300">We're Here to Help!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-white/90">
            Get instant service booking with our 24/7 customer support.  ₹ 299 visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 sm:mb-12">
            <a
              href="tel:+917678134697"
              className="group bg-white text-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              <Phone size={20} />
              Call For Free Consultation
            </a>

            <a
              href="https://wa.me/917678134697"
              className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl active:scale-95 flex items-center justify-center gap-3"
            >
              <span>WhatsApp Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">


            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-300">30 Min</div>
              <div className="text-white/90 text-sm sm:text-base">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
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
            transform: translateY(-80px) translateX(15px);
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

        @keyframes float-right {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-8px) translateX(4px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
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

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-scale-in {
          opacity: 0;
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

        .animate-pulse-once {
          animation: pulse-once 2s ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-service-card {
          opacity: 0;
          animation: slide-up 0.5s ease-out forwards;
        }

        .animate-feature-item {
          opacity: 0;
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-service-area {
          opacity: 0;
          animation: fade-in 0.4s ease-out forwards;
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

        /* Mobile touch optimization */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          button, a {
            min-height: 48px;
            min-width: 48px;
          }
        }

        /* Improve text readability on mobile */
        @media (max-width: 768px) {
          h1, h2, h3 {
            line-height: 1.2;
          }
          
          p {
            line-height: 1.6;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Remove blue highlight on mobile tap */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}