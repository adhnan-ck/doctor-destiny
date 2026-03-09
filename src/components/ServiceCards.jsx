import img1 from '../assets/InternationalStudyAdvisory.avif';
import img2 from '../assets/HelpChooseUniversities.avif';
import img3 from '../assets/TravelLogisticsSupport.avif';

const services = [
    {
        title: "International Study Advisory",
        description: "Your global guide to educational opportunities abroad.",
        image: img1.src
    },
    {
        title: "Help Choose Universities",
        description: "Select universities based location, and finances best academic experience",
        image: img2.src
    },
    {
        title: "Travel Logistics Support",
        description: "Comprehensive travel logistics assistance and support.",
        image: img3.src
    }
];

// Minimal MBBS-themed SVG icon sets per card
const cardIcons = [
    // Card 1: Globe + Stethoscope
    <>
        {/* Globe */}
        <svg style={{ position: 'absolute', top: '12px', right: '14px', opacity: 0.12, width: '60px', height: '60px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.2">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4" ry="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
        {/* Stethoscope simplified */}
        <svg style={{ position: 'absolute', bottom: '10px', left: '12px', opacity: 0.1, width: '52px', height: '52px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.3">
            <path d="M4.5 2h3a1 1 0 0 1 1 1v5a4 4 0 0 1-8 0V3a1 1 0 0 1 1-1z" />
            <path d="M8 11a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-1" />
            <circle cx="20" cy="10" r="2" />
        </svg>
        {/* Medical cross */}
        <svg style={{ position: 'absolute', bottom: '14px', right: '20px', opacity: 0.09, width: '36px', height: '36px' }} viewBox="0 0 24 24" fill="#0E0C4F">
            <rect x="9" y="2" width="6" height="20" rx="1" />
            <rect x="2" y="9" width="20" height="6" rx="1" />
        </svg>
        {/* Small star/sparkle */}
        <svg style={{ position: 'absolute', top: '16px', left: '16px', opacity: 0.08, width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="#D5AD36">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
    </>,
    // Card 2: Mortarboard + Caduceus lines
    <>
        {/* Mortarboard */}
        <svg style={{ position: 'absolute', top: '12px', right: '14px', opacity: 0.12, width: '58px', height: '58px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.2">
            <path d="M22 10l-10-5-10 5 10 5 10-5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            <line x1="22" y1="10" x2="22" y2="16" />
        </svg>
        {/* DNA helix simplified */}
        <svg style={{ position: 'absolute', bottom: '10px', left: '10px', opacity: 0.1, width: '50px', height: '50px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.3">
            <path d="M5 3c4 0 6 2 6 5s-2 5-6 5" />
            <path d="M5 13c4 0 6 2 6 5s-2 3-6 3" />
            <line x1="5" y1="3" x2="5" y2="21" />
            <line x1="7" y1="7" x2="11" y2="7" />
            <line x1="7" y1="16" x2="11" y2="16" />
        </svg>
        {/* Pill */}
        <svg style={{ position: 'absolute', bottom: '16px', right: '16px', opacity: 0.1, width: '40px', height: '40px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.3">
            <rect x="4" y="10" width="16" height="4" rx="2" />
            <line x1="12" y1="10" x2="12" y2="14" />
        </svg>
        <svg style={{ position: 'absolute', top: '18px', left: '14px', opacity: 0.07, width: '30px', height: '30px' }} viewBox="0 0 24 24" fill="#D5AD36">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
    </>,
    // Card 3: Plane + Medical cross + Compass
    <>
        {/* Plane */}
        <svg style={{ position: 'absolute', top: '12px', right: '12px', opacity: 0.12, width: '58px', height: '58px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.2">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2C4.2 5 3.6 5.4 3.4 6l-.4 1c-.2.5 0 1.1.5 1.4l5.4 3.2-1.4 4.2c-.2.7.3 1.4 1 1.4.3 0 .6-.1.8-.3l3.6-3.6 3.2 5.4c.3.5.9.7 1.4.5l1-.4c.6-.2 1-.8.8-1.4z" />
        </svg>
        {/* Stethoscope */}
        <svg style={{ position: 'absolute', bottom: '10px', left: '12px', opacity: 0.1, width: '52px', height: '52px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.3">
            <path d="M4.5 2h3a1 1 0 0 1 1 1v5a4 4 0 0 1-8 0V3a1 1 0 0 1 1-1z" />
            <path d="M8 11a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-1" />
            <circle cx="20" cy="10" r="2" />
        </svg>
        {/* Compass */}
        <svg style={{ position: 'absolute', bottom: '14px', right: '16px', opacity: 0.09, width: '38px', height: '38px' }} viewBox="0 0 24 24" fill="none" stroke="#0E0C4F" strokeWidth="1.3">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
        </svg>
        <svg style={{ position: 'absolute', top: '18px', left: '14px', opacity: 0.07, width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="#D5AD36">
            <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
        </svg>
    </>
];

const ServiceCards = () => {
    return (
        <section className="py-16 bg-[#0E0C4F]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    What We Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                {/* Image section — taller now (h-64) with decorative background icons */}
                                <div className="h-48 md:h-64 overflow-hidden" style={{ position: 'relative' }}>
                                    {/* Decorative MBBS icons (rendered behind the image) */}
                                    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', background: '#f0f4ff' }}>
                                        {cardIcons[index]}
                                    </div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-contain md:object-cover"
                                        style={{ position: 'relative', zIndex: 1 }}
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-3" style={{ color: '#0E0C4F' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
