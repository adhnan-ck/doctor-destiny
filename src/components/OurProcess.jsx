import React from 'react';

const OurProcess = () => {
    const processes = [
        {
            id: 1,
            title: 'Consultation',
            description: 'Personalised guidance on course',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#D5AD36" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 3v4M8 3v4M2 11h20" />
                    <path d="M8 15h.01M12 15h.01M16 15h.01" />
                </svg>
            ),
            bgColor: 'bg-[#8AB4F8]'
        },
        {
            id: 2,
            title: 'Application',
            description: 'Streamline your study abroad',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#D5AD36" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="12" cy="13" r="2" />
                    <path d="M12 15v4" />
                </svg>
            ),
            bgColor: 'bg-[#0B3D91]'
        },
        {
            id: 3,
            title: 'Arrival Care',
            description: 'Comprehensive support on arrival',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#D5AD36" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            bgColor: 'bg-[#8AB4F8]'
        }
    ];

    return (
        <section className="relative w-full bg-white py-16 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Process Steps */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                            Our Process
                        </h2>

                        <div className="flex flex-col items-start space-y-6">
                            {processes.map((process, index) => (
                                <div
                                    key={process.id}
                                    className={`${process.bgColor
                                        } rounded-[2rem] px-8 py-6 text-white transition-all hover:scale-105 w-full max-w-xl ${index === 1 ? 'ml-4 md:ml-12' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0">
                                            {process.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">
                                                {process.title}
                                            </h3>
                                            <p className="text-base opacity-90">
                                                {process.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Student Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Decorative Dots - Top Right */}
                        <div className="absolute top-0 right-12 grid grid-cols-6 gap-2 opacity-60">
                            {[...Array(30)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-[#8AB4F8]"
                                />
                            ))}
                        </div>

                        {/* Decorative Dots - Bottom Right */}
                        <div className="absolute bottom-12 right-0 grid grid-cols-4 gap-2 opacity-40">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-gray-300"
                                />
                            ))}
                        </div>

                        {/* Student Image in Octagon Shape */}
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div
                                className="w-full h-full overflow-hidden"
                                style={{
                                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                }}
                            >
                                <img
                                    src="/student-image.png"
                                    alt="Student with books"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurProcess;