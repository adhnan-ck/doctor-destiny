import { useState, useRef, useEffect } from 'react';

const testimonials = [
    {
        name: "Pranitha",
        university: "Crimean Federal University",
        country: "Russia 🇷🇺",
        quote: "I am glad to share the journey with DOCTOR DESTINY which was a very positive one. The atmosphere is very professional as they pay attention to all matters and brought it to our knowledge.",
        initials: "PR",
        color: "#2563EB",
    },
    {
        name: "Sagar R G",
        university: "Orel State Medical University",
        country: "Russia 🇷🇺",
        quote: "Thanks to Doctor Destiny, I am now studying at my dream university in Russia. Their consultants were incredibly knowledgeable and helpful throughout the entire process.",
        initials: "SA",
        color: "#1D4ED8",
    },
    {
        name: "Akshaya R",
        university: "Vitebsk State Medical University",
        country: "Belarus 🇧🇾",
        quote: "I scored less marks in my NEET exams leaving me with the only option to pursue my Medicine Career Abroad. Doctor Dreams guided me perfectly and changed everything.",
        initials: "AK",
        color: "#3B82F6",
    },
    {
        name: "Ashwini",
        university: "Altai State Medical University",
        country: "Russia 🇷🇺",
        quote: "I always had a high aspiration to pursue my career in Medicine. I approached Doctor Destiny and on the first instant they gave me complete confidence and a clear roadmap.",
        initials: "AS",
        color: "#0EA5E9",
    }
];

const StarRating = () => (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
        {[...Array(5)].map((_, i) => (
            <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#D5AD36">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);

    // Track which card is in view using IntersectionObserver
    useEffect(() => {
        const observers = [];
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveIndex(i);
                },
                { root: scrollRef.current, threshold: 0.6 }
            );
            observer.observe(card);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollToCard = (index) => {
        const card = cardRefs.current[index];
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    return (
        <section style={{
            background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #eff6ff 100%)',
            padding: '72px 0',
            fontFamily: "'Segoe UI', system-ui, sans-serif",
            overflow: 'hidden',
        }}>
            <style>{`
                .t-scroll::-webkit-scrollbar { display: none; }
                .t-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                .t-card {
                    background: white;
                    border-radius: 24px;
                    padding: 32px;
                    box-shadow: 0 4px 24px rgba(37,99,235,0.07), 0 1px 4px rgba(0,0,0,0.05);
                    border: 1px solid rgba(219,234,254,0.8);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: default;
                    position: relative;
                    overflow: hidden;
                }
                .t-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #2563EB, #60A5FA);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .t-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 16px 48px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.06);
                }
                .t-card:hover::before { opacity: 1; }
                .dot-btn {
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
                    border-radius: 4px;
                }
            `}</style>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                    <span style={{
                        display: 'inline-block',
                        background: 'linear-gradient(90deg, #EFF6FF, #DBEAFE)',
                        color: '#2563EB',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        padding: '6px 18px',
                        borderRadius: '20px',
                        marginBottom: '16px',
                        border: '1px solid #BFDBFE',
                    }}>
                        Student Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0E0C4F]" style={{ lineHeight: 1.2 }}>
                        What Our Students{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Are Saying
                        </span>
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
                        Real experiences from students now living their dream of studying medicine abroad.
                    </p>
                    <div style={{
                        width: '48px', height: '3px', margin: '20px auto 0',
                        background: 'linear-gradient(90deg, #2563EB, #60A5FA)',
                        borderRadius: '2px',
                    }} />
                </div>

                {/* Cards — Desktop: grid | Mobile: scroll */}
                <div
                    ref={scrollRef}
                    className="t-scroll"
                    style={{
                        display: 'flex',
                        gap: '20px',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        paddingBottom: '8px',
                    }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            ref={el => cardRefs.current[index] = el}
                            className="t-card"
                            style={{
                                // Mobile: full width cards; Desktop: fixed width
                                minWidth: 'min(calc(100vw - 48px), 280px)',
                                maxWidth: '320px',
                                flex: '1 0 auto',
                                scrollSnapAlign: 'center',
                            }}
                        >
                            {/* Big decorative quote */}
                            <div style={{
                                position: 'absolute', top: '16px', right: '20px',
                                fontSize: '80px', lineHeight: 1,
                                color: item.color, opacity: 0.07,
                                fontFamily: 'Georgia, serif', fontWeight: 900,
                                userSelect: 'none', pointerEvents: 'none',
                            }}>
                                "
                            </div>

                            <StarRating />

                            <p style={{
                                color: '#475569',
                                fontSize: '14.5px',
                                lineHeight: 1.75,
                                fontStyle: 'italic',
                                flex: 1,
                                margin: '0 0 28px',
                            }}>
                                "{item.quote}"
                            </p>

                            {/* Divider */}
                            <div style={{
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, #E2E8F0, transparent)',
                                marginBottom: '20px',
                            }} />

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '14px',
                                    background: `linear-gradient(135deg, ${item.color}, #93C5FD)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '15px', fontWeight: 800, color: 'white',
                                    flexShrink: 0,
                                    boxShadow: `0 4px 12px ${item.color}40`,
                                }}>
                                    {item.initials}
                                </div>
                                <div style={{ overflow: 'hidden' }}>
                                    <p style={{
                                        margin: 0, fontWeight: 700, color: '#0F172A',
                                        fontSize: '15px', whiteSpace: 'nowrap',
                                        overflow: 'hidden', textOverflow: 'ellipsis',
                                    }}>
                                        {item.name}
                                    </p>
                                    <p style={{
                                        margin: '2px 0 0', fontSize: '11px', color: item.color,
                                        fontWeight: 600, textTransform: 'uppercase',
                                        letterSpacing: '0.8px', whiteSpace: 'nowrap',
                                        overflow: 'hidden', textOverflow: 'ellipsis',
                                    }}>
                                        {item.university}
                                    </p>
                                    <p style={{ margin: '1px 0 0', fontSize: '12px', color: '#94A3B8' }}>
                                        {item.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots — mobile only via CSS, but always rendered and functional */}
                <div style={{
                    display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px',
                }}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className="dot-btn"
                            onClick={() => scrollToCard(i)}
                            style={{
                                width: i === activeIndex ? '28px' : '8px',
                                height: '8px',
                                background: i === activeIndex
                                    ? 'linear-gradient(90deg, #2563EB, #60A5FA)'
                                    : '#CBD5E1',
                                transform: i === activeIndex ? 'scale(1)' : 'scale(0.9)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}