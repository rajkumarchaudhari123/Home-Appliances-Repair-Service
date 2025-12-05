"use client";
import React from "react";
import { FaSnowflake, FaTools, FaRecycle } from "react-icons/fa";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">

            {/* Main Container */}
            <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-blue-200 animate-fadeIn">

                <h1 className="text-4xl font-bold text-blue-800 text-center mb-4 animate-slideDown">
                    AC & Refrigerator Repair Service
                </h1>

                <p className="text-xl text-gray-700 text-center mb-10 animate-fadeIn delay-200">
                    Fast • Reliable • Affordable Home Appliance Repair
                </p>

                {/* Features Section */}
                <div className="grid md:grid-cols-2 gap-10 mt-10">

                    {/* AC Repair Card */}
                    <div className="p-6 bg-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center gap-4">
                            <FaSnowflake className="text-blue-600 text-5xl" />
                            <h2 className="text-2xl font-semibold text-blue-700">AC Repair & Service</h2>
                        </div>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            We provide expert AC repair, servicing, gas refilling, cooling issues fix,
                            installation & maintenance. Our trained technicians ensure fast,
                            reliable and affordable service at your doorstep.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✔ Cooling Issue Fix</li>
                            <li>✔ Gas Refilling</li>
                            <li>✔ AC Servicing & Cleaning</li>
                            <li>✔ AC Installation / Uninstallation</li>
                            <li>✔ No Power / Water Leakage Solutions</li>
                        </ul>
                    </div>

                    {/* Refrigerator Card */}
                    <div className="p-6 bg-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="flex items-center gap-4">
                            <FaRecycle className="text-green-600 text-5xl" />
                            <h2 className="text-2xl font-semibold text-blue-700">Refrigerator Repair</h2>
                        </div>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Get professional refrigerator repair for cooling issues,
                            compressor problems, water leakage, ice forming, gas refilling
                            and door sealing issues. Fast doorstep service available.
                        </p>

                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✔ Cooling Problem Fix</li>
                            <li>✔ Gas Charging</li>
                            <li>✔ Compressor Repair</li>
                            <li>✔ Thermostat & Sensor Issues</li>
                            <li>✔ Door Seal / Water Leakage Fix</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <a
                        href="tel:+919667048566"
                        className="bg-blue-700 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-800 transition-all shadow-md hover:shadow-xl animate-bounce"
                    >
                        📞 Book Service Now
                    </a>
                </div>
            </div>
        </div>
    );
}
