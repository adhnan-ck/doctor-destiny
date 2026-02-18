
import { Users, Compass, HeartHandshake, TrendingUp, Sparkles, FileCheck } from 'lucide-react';

const features = [
    {
        title: "Experience",
        description: "Counsellors with over 20 years of expertise provide personalized career guidance.",
        icon: <Users className="w-8 h-8 text-[#D5AD36]" />
    },
    {
        title: "Guidance",
        description: "Detailed career guidance help you explore and choose from a wide range of career options.",
        icon: <Compass className="w-8 h-8 text-[#D5AD36]" />
    },
    {
        title: "Support",
        description: "A dedicated operations team ensures smooth departure and arrival processes.",
        icon: <HeartHandshake className="w-8 h-8 text-[#D5AD36]" />
    },
    {
        title: "Success",
        description: "Over 6000+ success stories with counseling for numerous countries around the world.",
        icon: <TrendingUp className="w-8 h-8 text-[#D5AD36]" />
    },
    {
        title: "Expertise",
        description: "Access personalized guidance from experienced professionals.",
        icon: <Sparkles className="w-8 h-8 text-[#D5AD36]" />
    },
    {
        title: "Accreditation",
        description: "Connect with reputable and recognized universities abroad.",
        icon: <FileCheck className="w-8 h-8 text-[#D5AD36]" />
    }
];

const WhyChooseUs = () => {
    return (
        <section className="bg-[#0E0C4F] py-16 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Why Choose Us?
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">

                            {/* Icon Container */}
                            <div className="shrink-0">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;