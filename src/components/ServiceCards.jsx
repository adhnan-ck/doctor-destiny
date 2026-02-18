

const services = [
    {
        title: "International Study Advisory",
        description: "Your global guide to educational opportunities abroad.",
        image: "/image_5.png" // This image contains all three illustrations
    },
    {
        title: "Help Choose Universities",
        description: "Select universities based location, and finances best academic experience",
        image: "/image_5.png" // Using the same source image for all
    },
    {
        title: "Travel Logistics Support",
        description: "Comprehensive travel logistics assistance and support.",
        image: "/image_5.png" // Using the same source image for all
    }
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
                        // This is a trick to show different parts of the same image for each card.
                        // In a real scenario, you would have 3 separate images.
                        let imageStyle = {};
                        if (index === 0) {
                            imageStyle = { objectPosition: '0 0' };
                        } else if (index === 1) {
                            imageStyle = { objectPosition: '50% 0' };
                        } else {
                            imageStyle = { objectPosition: '100% 0' };
                        }

                        return (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        style={{ ...imageStyle, width: '300%' }} // Zoom in and position
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-[#0E0C4F] mb-3">
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
