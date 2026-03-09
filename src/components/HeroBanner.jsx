import React from 'react';
import doctorImage from '../assets/doctor-image.png';

const HeroBanner = () => {
    return (
        <section className="relative w-full bg-[#F0F7FF] overflow-hidden min-h-[400px] flex items-center">

            {/* ── MOBILE top-left accent ── */}
            <div
                className="absolute top-0 left-0 bg-[#0E0C4F] opacity-90 -z-0 md:hidden"
                style={{ width: '80px', height: '60px', borderRadius: '0 0 100% 0' }}
            />

            {/* ── DESKTOP background shape: large rounded shape on the right ── */}
            <div
                className="absolute bottom-0 right-0 w-[45%] h-full bg-[#0E0C4F] opacity-90 hidden md:block -z-0"
                style={{ clipPath: 'ellipse(90% 100% at 100% 50%)' }}
            />
            {/* ── DESKTOP top-left accent ── */}
            <div className="absolute top-0 left-0 w-1/4 h-24 bg-[#0E0C4F] rounded-br-full opacity-90 -z-0 hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">


                    {/* Left: Text Content */}
                    <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start mb-8 mt-16 md:mt-0">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#164E8E] leading-tight mb-2">
                            START YOUR MEDICAL JOURNEY WITH CONFIDENCE
                        </h2>

                        <h3 className="text-xl md:text-2xl font-bold text-[#164E8E] mb-6">
                            Doctor Destiny MBBS Abroad Consultancy
                        </h3>

                        <p className="text-lg md:text-xl text-gray-700 font-medium max-w-lg mb-8">
                            For Students Dreaming <br /> Of Studying Medicine Abroad
                        </p>

                        <button className="hidden md:inline-block bg-[#164E8E] text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#0E3563] transition-all transform hover:scale-105">
                            Find Out More
                        </button>
                    </div>

                    {/* Right: Doctor Image */}
                    <div className="md:col-span-5 flex justify-center md:justify-end">
                        <img
                            src={doctorImage.src}
                            alt="Medical Consultant"
                            className="w-48 max-w-xs sm:w-64 md:max-w-md md:w-full h-auto object-cover object-bottom"
                        />
                    </div>

                </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D5AD36] hover:text-[#D5AD36]/80 hidden md:block transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D5AD36] hover:text-[#D5AD36]/80 hidden md:block transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

        </section>
    );
};

export default HeroBanner;