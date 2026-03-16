import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Tohid",
        university: "Orel State Medical University",
        country: "Russia 🇷🇺",
        quote: "Doctor Destiny made my dream of studying abroad come true. Their team guided me through every step of the application process, from choosing the right university to securing my visa. Their support and expertise were invaluable!",
        initials: "TO",
    },
    {
        name: "Pranitha",
        university: "Crimean Federal University",
        country: "Russia 🇷🇺",
        quote: "I am glad to share the journey with DOCTOR DESTINY which was a very positive one. The atmosphere is very professional as they pay attention to all matters and brought it to our knowledge. They made their best efforts to get me an admit to the medical University of my choice.",
        initials: "PR",
    },
    {
        name: "Sagar R G",
        university: "Orel State Medical University",
        country: "Russia 🇷🇺",
        quote: "Thanks to Doctor Destiny, I am now studying at my dream university in Russia. Their consultants were incredibly knowledgeable and helpful, providing personalized advice that made the entire process smooth and stress-free. I couldn't have done it without them!",
        initials: "SA",
    },
    {
        name: "Akshaya R",
        university: "Vitebsk State Medical University",
        country: "Belarus 🇧🇾",
        quote: "I scored less marks in my NEET exams with this it was challenging for me to get a medical seat in INDIA, leaving me with the only option to pursue my Medicine Career ABROAD. With this taught, I received a call from Ms. Jyothi K T from Doctor Destiny, Davanagere.",
        initials: "AK",
    },
    {
        name: "Ashwini",
        university: "Altai State Medical University",
        country: "Russia 🇷🇺",
        quote: "I always had a high aspiration to pursue my career in Medicine. I approached Doctor Destiny and on the first instant they gave me complete confidence and a clear roadmap for my future.",
        initials: "AS",
    },
];


// Variants for staggered card entrance
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

export default function TestimonialSection() {
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);

    // Responsive cards per view
    useEffect(() => {
        const updateCardsPerView = () => {
            const w = window.innerWidth;
            if (w < 640) setCardsPerView(1);
            else if (w < 900) setCardsPerView(2);
            else if (w < 1200) setCardsPerView(3);
            else setCardsPerView(4);
        };
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const totalPages = Math.ceil(testimonials.length / cardsPerView);

    const goTo = useCallback((page) => {
        setCurrentPage((page + totalPages) % totalPages);
    }, [totalPages]);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;
        autoPlayRef.current = setInterval(() => {
            goTo(currentPage + 1);
        }, 5000);
        return () => clearInterval(autoPlayRef.current);
    }, [currentPage, isAutoPlaying, goTo]);

    const handleNav = (dir) => {
        setIsAutoPlaying(false);
        goTo(currentPage + dir);
        // Resume auto-play after 10s
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const visibleCards = testimonials.slice(
        currentPage * cardsPerView,
        currentPage * cardsPerView + cardsPerView
    );

    return (
        <section style={{
            position: 'relative',
            padding: '80px 0 96px',
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            overflow: 'hidden',
            background: '#0E0C4F',
        }}>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(2deg); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .testimonial-card {
                    background: rgba(255,255,255,0.97);
                    border-radius: 20px;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    cursor: default;
                    position: relative;
                    overflow: visible;
                    transition: box-shadow 0.4s ease;
                }
                .testimonial-card:hover {
                    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
                }
                .testimonial-card:hover .card-body {
                    transform: translateY(-2px);
                }
                .card-body {
                    padding: 28px 24px 20px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s ease;
                }
                .card-chevron {
                    position: relative;
                    height: 60px;
                    overflow: visible;
                }
                .card-chevron-bg {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                }
                .card-footer {
                    background: linear-gradient(135deg, #1565C0, #1E88E5);
                    padding: 48px 24px 24px;
                    border-radius: 0 0 20px 20px;
                    text-align: center;
                    position: relative;
                }
                .avatar-ring {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    border: 3px solid #fff;
                    background: linear-gradient(135deg, #1565C0, #42A5F5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                    font-weight: 800;
                    color: #fff;
                    position: absolute;
                    top: -36px;
                    left: 50%;
                    transform: translateX(-50%);
                    box-shadow: 0 8px 24px rgba(21,101,192,0.35);
                    z-index: 2;
                }
                .nav-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    z-index: 10;
                    backdrop-filter: blur(8px);
                }
                .nav-arrow:hover {
                    background: rgba(255,255,255,0.25);
                    border-color: rgba(255,255,255,0.5);
                    transform: translateY(-50%) scale(1.1);
                }
                .nav-arrow.left { left: -16px; }
                .nav-arrow.right { right: -16px; }
                @media (min-width: 768px) {
                    .nav-arrow.left { left: -24px; }
                    .nav-arrow.right { right: -24px; }
                }
                @media (min-width: 1200px) {
                    .nav-arrow.left { left: -56px; }
                    .nav-arrow.right { right: -56px; }
                }
                .page-dot {
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    border-radius: 6px;
                    transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
                }
                .page-dot:hover {
                    opacity: 0.9;
                }
                .testimonial-quote-text {
                    color: #374151;
                    font-size: 14px;
                    line-height: 1.8;
                    flex: 1;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 7;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                /* Floating decorative elements */
                .float-shape {
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0.06;
                    pointer-events: none;
                }
            `}</style>

            {/* Decorative floating shapes */}
            <div className="float-shape" style={{
                width: '300px', height: '300px', background: '#60A5FA',
                top: '-100px', right: '-80px', animation: 'float 8s ease-in-out infinite',
            }} />
            <div className="float-shape" style={{
                width: '200px', height: '200px', background: '#3B82F6',
                bottom: '-60px', left: '-60px', animation: 'float 10s ease-in-out infinite 2s',
            }} />
            <div className="float-shape" style={{
                width: '120px', height: '120px', background: '#93C5FD',
                top: '40%', left: '5%', animation: 'float 7s ease-in-out infinite 1s',
            }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.08)',
                            color: '#93C5FD',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            padding: '8px 20px',
                            borderRadius: '24px',
                            marginBottom: '20px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(4px)',
                        }}>
                        Student Testimonials
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            color: '#fff',
                            lineHeight: 1.2,
                            marginBottom: '16px',
                            fontFamily: "'Open Sans', sans-serif", // Simply provide the string here
                        }}>
                        What Our Students{' '}
                        <span style={{ color: '#60A5FA' }}>Are Saying</span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            width: '60px', height: '3px', margin: '0 auto',
                            background: 'linear-gradient(90deg, #D5AD36, #F59E0B)',
                            borderRadius: '4px',
                        }}
                    />
                </div>

                {/* Cards Grid with AnimatePresence */}
                <div style={{ position: 'relative', minHeight: '420px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`,
                                gap: '24px',
                                padding: '0 8px',
                            }}
                        >
                            {visibleCards.map((item, index) => (
                                <motion.div
                                    key={`${currentPage}-${index}`}
                                    variants={cardVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="testimonial-card"
                                >
                                    {/* Card Quote Body */}
                                    <div className="card-body">
                                        {/* Decorative quote mark */}
                                        <div style={{
                                            fontSize: '56px', lineHeight: 1, color: '#1565C0',
                                            opacity: 0.12, fontFamily: 'Georgia, serif',
                                            fontWeight: 900, userSelect: 'none', marginBottom: '-8px',
                                        }}>
                                            ❝
                                        </div>

                                        <p className="testimonial-quote-text">
                                            {item.quote}
                                        </p>
                                    </div>

                                    {/* Chevron + Footer */}
                                    <div className="card-chevron">
                                        <svg
                                            viewBox="0 0 300 60"
                                            preserveAspectRatio="none"
                                            style={{ width: '100%', height: '60px', display: 'block' }}
                                        >
                                            <defs>
                                                <linearGradient id={`chevGrad-${currentPage}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#1565C0" />
                                                    <stop offset="100%" stopColor="#1E88E5" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d={`M0,20 L150,0 L300,20 L300,60 L0,60 Z`}
                                                fill={`url(#chevGrad-${currentPage}-${index})`}
                                            />
                                        </svg>
                                    </div>

                                    <div className="card-footer">
                                        {/* Avatar circle */}
                                        <div className="avatar-ring">
                                            {item.initials}
                                        </div>

                                        <p style={{
                                            margin: '0 0 4px', fontWeight: 700,
                                            color: '#fff', fontSize: '16px',
                                            fontFamily: "'Playfair Display', serif",
                                        }}>
                                            {item.name}
                                        </p>
                                        <p style={{
                                            margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.75)',
                                            fontWeight: 500, lineHeight: 1.5,
                                        }}>
                                            Studying in {item.university}
                                        </p>
                                        <p style={{
                                            margin: '4px 0 0', fontSize: '13px',
                                            color: 'rgba(255,255,255,0.6)',
                                        }}>
                                            {item.country}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {totalPages > 1 && (
                        <>
                            <button
                                className="nav-arrow left"
                                onClick={() => handleNav(-1)}
                                aria-label="Previous testimonials"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                className="nav-arrow right"
                                onClick={() => handleNav(1)}
                                aria-label="Next testimonials"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Page Dots */}
                {totalPages > 1 && (
                    <div style={{
                        display: 'flex', justifyContent: 'center',
                        gap: '10px', marginTop: '40px',
                    }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className="page-dot"
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentPage(i);
                                    setTimeout(() => setIsAutoPlaying(true), 10000);
                                }}
                                style={{
                                    width: i === currentPage ? '32px' : '10px',
                                    height: '10px',
                                    background: i === currentPage
                                        ? 'linear-gradient(90deg, #D5AD36, #F59E0B)'
                                        : 'rgba(255,255,255,0.2)',
                                    transform: i === currentPage ? 'scale(1)' : 'scale(0.85)',
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}