import React, { useState, useEffect } from 'react';

import logo2 from '../assets/logo2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check immediately on load in case user refreshes mid-page
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'Study MBBS Abroad',
            href: '#',
            dropdown: [
                { name: 'MBBS in Australia', href: '/mbbs-in-australia' },
                { name: 'MBBS in Bangladesh', href: '/mbbs-in-bangladesh' },
                { name: 'MBBS in China', href: '/mbbs-in-china' },
                { name: 'MBBS in Europe', href: '/mbbs-in-europe' },
                { name: 'MBBS in Georgia', href: '/study-mbbs-in-georgia' },
                { name: 'MBBS in Germany', href: '/mbbs-in-germany' },
                { name: 'MBBS in India', href: '/mbbs-in-india' },
                { name: 'MBBS in Kazakhstan', href: '/mbbs-in-kazakhstan' },
                { name: 'MBBS in Kyrgyzstan', href: '/mbbs-in-kyrgyzstan' },
                { name: 'MBBS in Mauritius', href: '/mbbs-in-mauritius' },
                { name: 'MBBS in Nepal', href: '/mbbs-in-nepal' },
                { name: 'MBBS in Philippines', href: '/mbbs-in-philippines' },
                { name: 'MBBS in Russia', href: '/mbbs-in-russia' },
                { name: 'MBBS in Timor Leste', href: '/mbbs-in-timor-leste' },
                { name: 'MBBS in UK', href: '/mbbs-in-uk' },
                { name: 'MBBS in USA', href: '/mbbs-in-usa' },
                { name: 'MBBS in Uzbekistan', href: '/mbbs-in-uzbekistan' },
            ],
        },
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us', href: '/contact-us', isButton: true },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[9999] pointer-events-auto transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3'
                : 'bg-gradient-to-b from-[#0E0C4F]/95 to-transparent py-5'
                }`}
        >
            <div className="max-w-[1920px] mx-auto w-full px-4 lg:px-8 xl:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 group">
                    <img src={logo2.src} alt="Doctor Dreams Logo" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
                    <span className={`font-trajan font-bold text-lg md:text-2xl tracking-widest transition-colors duration-300 ${scrolled ? 'text-[#0E0C4F]' : 'text-white'
                        }`}>
                        DOCTOR DESTINY
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/nav">
                            {link.isButton ? (
                                <a
                                    href={link.href}
                                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D5AD36] to-[#F1D16B] text-[#0E0C4F] font-bold tracking-wide shadow-[0_10px_20px_-10px_rgba(213,173,54,0.6)] hover:shadow-[0_15px_25px_-10px_rgba(213,173,54,0.8)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <>
                                    <a
                                        href={link.href}
                                        className={`font-semibold text-[15px] uppercase tracking-wide hover:text-[#00BFFF] transition-colors duration-300 py-2 flex items-center gap-1.5 relative group/link ${scrolled ? 'text-[#0E0C4F]' : 'text-white/95'
                                            }`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover/nav:-rotate-180">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        )}
                                        {/* Animated Underline Effect */}
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#D5AD36] transition-all duration-300 group-hover/link:w-full rounded-full`}></span>
                                    </a>

                                    {/* Desktop Mega Menu Dropdown */}
                                    {link.dropdown && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 p-8 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-400 transform translate-y-4 group-hover/nav:translate-y-0 border border-white/50 w-max max-w-[900px]">
                                            {/* Invisible bridge for hover */}
                                            <div className="absolute -top-6 left-0 w-full h-8"></div>

                                            <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                                                <span className="text-[#0E0C4F] font-bold text-lg tracking-wide">DESTINATIONS</span>
                                                <span className="text-sm font-semibold text-[#D5AD36] bg-[#D5AD36]/10 px-3 py-1 rounded-full">{link.dropdown.length} Countries</span>
                                            </div>

                                            <div className="grid grid-cols-3 gap-x-12 gap-y-5">
                                                {link.dropdown.map((sublink) => (
                                                    <a
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        className="flex items-center gap-3 group/item relative p-2 -m-2 rounded-xl hover:bg-[#F0F7FF] transition-colors duration-300"
                                                    >
                                                        {/* <div className="w-8 h-8 rounded-full bg-[#0E0C4F]/5 flex items-center justify-center group-hover/item:bg-[#164E8E] transition-colors duration-300">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#164E8E] group-hover/item:text-white transition-colors duration-300">
                                                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                            </svg>
                                                        </div> */}
                                                        <span className="text-[#0E0C4F] font-semibold tracking-tight hover:text-[#164E8E] transition-colors duration-200 whitespace-nowrap text-[15px]">
                                                            {sublink.name}
                                                        </span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className={`lg:hidden focus:outline-none z-50 p-2 rounded-full transition-colors ${scrolled ? 'text-[#0E0C4F] hover:bg-[#F5F5F5]' : 'text-white hover:bg-white/10'
                        }`}
                    aria-label="Toggle Menu"
                >
                    <div className="relative w-7 h-5 flex flex-col justify-between overflow-hidden">
                        <span className={`w-full h-0.5 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-[#0E0C4F]' : 'bg-white'}`}></span>
                        <span className={`w-full h-0.5 transition-all duration-300 ${isOpen ? 'translate-x-[150%] opacity-0' : 'translate-x-0 opacity-100'} ${scrolled ? 'bg-[#0E0C4F]' : 'bg-white'}`}></span>
                        <span className={`w-full h-0.5 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''} ${scrolled ? 'bg-[#0E0C4F]' : 'bg-white'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-t border-gray-100/50 ${isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="container mx-auto px-5 py-6 flex flex-col gap-6 overflow-y-auto max-h-[85vh] custom-scrollbar">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-100/60 pb-5 last:border-0">
                            {link.isButton ? (
                                <a
                                    href={link.href}
                                    className="flex justify-center w-full px-6 py-4 mt-2 rounded-2xl bg-gradient-to-r from-[#D5AD36] to-[#F1D16B] text-[#0E0C4F] font-bold shadow-[0_8px_20px_-8px_rgba(213,173,54,0.6)] tracking-wide"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <>
                                    {link.dropdown ? (
                                        <div className="flex flex-col gap-5">
                                            <span className="text-lg font-extrabold text-[#0E0C4F] tracking-wide flex items-center justify-between">
                                                {link.name}
                                                <span className="text-xs tracking-normal font-semibold bg-[#F5F8FC] text-[#164E8E] px-2.5 py-1 rounded-full">{link.dropdown.length} options</span>
                                            </span>
                                            <div className="grid grid-cols-2 gap-3">
                                                {link.dropdown.map(sublink => (
                                                    <a
                                                        key={sublink.name}
                                                        href={sublink.href}
                                                        className="group flex flex-col gap-1 text-[13px] font-bold text-gray-700 bg-[#F8FAFC] hover:bg-[#F0F7FF] hover:text-[#164E8E] rounded-xl px-4 py-3.5 transition-all duration-300 border border-gray-100 hover:border-[#BFDBFE] hover:shadow-sm"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span className="text-[#164E8E]/40 group-hover:text-[#D5AD36] transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span className="truncate w-full mt-1">{sublink.name.replace('MBBS in ', '')}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="block text-lg font-extrabold text-[#0E0C4F] hover:text-[#00BFFF] transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Global style for custom scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #E2E8F0;
                    border-radius: 20px;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;