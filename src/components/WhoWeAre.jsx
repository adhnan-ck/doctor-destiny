const WhoWeAre = () => {
    // Replace this with your actual YouTube video ID
    const youtubeVideoId = "zU3n_7-YkM8";

    return (
        <section className="w-full bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

                    {/* Left: YouTube Video Embed */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-video">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                title="Doctor Destiny – Fulfill Your Dreams of Becoming a Doctor"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 text-left">
                        {/* Label */}
                        <p className="text-base font-semibold text-gray-500 mb-2 tracking-wide">
                            Who We Are
                        </p>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0E0C4F] mb-5 leading-tight">
                            Empowering Medical <br className="hidden md:block" />
                            Aspirations Globally
                        </h2>

                        {/* Body Text */}
                        <p className="text-gray-600 leading-relaxed mb-4 text-base">
                            Established in 2025,{" "}
                            <span className="font-semibold text-[#0E0C4F]">
                                Doctor Destiny
                            </span>{" "}
                            helps students who missed the chance to study medicine in India
                            pursue their dreams abroad. We focus on quality,
                            cost-effectiveness, safety, and trust. Our experienced team
                            supports students at every step, ensuring they achieve their
                            goals.{" "}

                            Embracing digital transformation, we provide seamless, online
                            services.

                            Our vision is to support students&apos; aspirations with{" "}
                            personalized and committed service.

                        </p>

                        {/* CTA Button */}
                        <a
                            href="/about-us"
                            className="inline-block mt-2 bg-[#D5AD36] hover:bg-[#d62f3a] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
