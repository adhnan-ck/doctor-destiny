import React from 'react';
import mbbsImg from '../assets/our-process-doctor.png';

const OurProcess = () => {
    const processes = [
        {
            id: 1,
            title: 'Consultation',
            description: 'Personalised guidance on course',
            icon: (
                <img src="https://static.wixstatic.com/media/cab221_c4db428721db40deb0362421e8f8ee34~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cab221_c4db428721db40deb0362421e8f8ee34~mv2.png" alt="Student with books" className="w-full h-auto object-contain" />
            ),
            bgColor: 'bg-[#8AB4F8]'
        },
        {
            id: 2,
            title: 'Application',
            description: 'Streamline your study abroad',
            icon: (
                <img src="https://static.wixstatic.com/media/cab221_3da8ba88345c43d7b934df3e267fe6db~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/resume.png" alt="Student with books" className="w-full h-auto object-contain" />
            ),
            bgColor: 'bg-[#0B3D91]'
        },
        {
            id: 3,
            title: 'Arrival Care',
            description: 'Comprehensive support on arrival',
            icon: (
                <img src="https://static.wixstatic.com/media/cab221_327be7879a7a4b2da381b13622f5a144~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/arrived.png" alt="Student with books" className="w-full h-auto object-contain" />
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0E0C4F] text-center mb-12">
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

                        {/* Student Image */}
                        <div className="relative max-w-sm">

                            <img
                                src={mbbsImg.src}
                                alt="Student with books"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurProcess;