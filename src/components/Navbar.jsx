import React, { useState, useEffect } from 'react';

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
                { name: 'MBBS in Russia', href: '/mbbs-in-russia' },
                { name: 'MBBS in Belarus', href: '/mbbs-in-belarus' },
                { name: 'MBBS in USA', href: '/mbbs-in-usa' },
            ],
        },
        {
            name: 'Universities',
            href: '#',
            dropdown: [
                { name: 'Crimea Federal University', href: '#' },
                { name: 'Kazan Federal University', href: '#' },
                { name: 'Bashkir State Medical University', href: '#' },
                { name: 'Orenburg State Medical University', href: '#' },
                { name: 'Perm State Medical University', href: '#' },
            ],
        },
        { name: 'Contact Us', href: '/contact', isButton: true },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[9999] pointer-events-auto transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
                : 'bg-gradient-to-b from-[#0E0C4F]/90 to-transparent py-4'
                }`}
        >
            <div className="max-w-[1920px] mx-auto w-full px-4 lg:px-6 xl:px-10 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src="/logo2.png" alt="Doctor Dreams Logo" className="h-12 w-auto" />
                    <span className={`font-trajan font-bold text-lg md:text-2xl tracking-widest transition-colors ${scrolled ? 'text-[#0E0C4F]' : 'text-white'
                        }`}>
                        DOCTOR DESTINY
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.isButton ? (
                                <a
                                    href={link.href}
                                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D5AD36] to-[#f0c847] text-[#0E0C4F] font-semibold hover:shadow-[0_0_20px_rgba(213,173,54,0.5)] hover:scale-105 transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <>
                                    <a
                                        href={link.href}
                                        className={`font-medium hover:text-[#00BFFF] transition-colors duration-300 py-2 flex items-center gap-1 ${scrolled ? 'text-[#0E0C4F]' : 'text-white'
                                            }`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        )}
                                    </a>
                                    {/* Dropdown */}
                                    {link.dropdown && (
                                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 overflow-hidden">
                                            {link.dropdown.map((sublink) => (
                                                <a
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className="block px-6 py-3 text-[#0E0C4F] hover:bg-[#F5F5F5] hover:text-[#00BFFF] hover:shadow-[inset_4px_0_0_#00BFFF] transition-all duration-200"
                                                >
                                                    {sublink.name}
                                                </a>
                                            ))}
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
                    className={`lg:hidden focus:outline-none z-50 ${scrolled ? 'text-[#0E0C4F]' : 'text-white'
                        }`}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <div className="container mx-auto px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                            {link.isButton ? (
                                <a
                                    href={link.href}
                                    className="inline-block px-6 py-3 mt-2 text-center rounded-full bg-gradient-to-r from-[#D5AD36] to-[#f0c847] text-[#0E0C4F] font-bold shadow-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <>
                                    <a
                                        href={link.href}
                                        className="block text-xl font-semibold text-[#0E0C4F] mb-2"
                                        onClick={() => !link.dropdown && setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                    {link.dropdown && (
                                        <div className="pl-4 flex flex-col gap-2">
                                            {link.dropdown.map(sublink => (
                                                <a
                                                    key={sublink.name}
                                                    href={sublink.href}
                                                    className="text-gray-600 hover:text-[#00BFFF] transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sublink.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;