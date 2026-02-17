import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function IntroCover() {
    const { scrollY } = useScroll();

    // Opacity fades from 1 to 0 between 0 and 300px of scroll
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Content moves up slightly as you scroll
    const y = useTransform(scrollY, [0, 300], [0, -100]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#0E0C4F] text-white pointer-events-none overflow-hidden z-0"
        >
            <div className="relative z-10 flex flex-col items-center">
                {/* Animated Logo Icon */}
                <motion.img
                    src="/logo.png"
                    alt="Doctor Destiny Logo"
                    className="w-64 md:w-80 lg:w-96 h-auto mb-8 drop-shadow-2xl"
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 1.5
                    }}
                />

                {/* Animated Headline */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight text-center px-4"
                        style={{
                            textShadow: '0 0 30px rgba(213, 173, 54, 0.5)'
                        }}
                    >
                        {/* You left the H1 empty in your code, add text here if needed */}
                    </motion.h1>
                </div>

            </div>

            {/* Floating Scroll Indicator - positioned at bottom of viewport */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-[#D5AD36]"
                >
                    <span className="text-xs uppercase tracking-widest font-medium text-white/80">Scroll to Explore</span>
                    <ArrowDown className="w-6 h-6 animate-bounce" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}