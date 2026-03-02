import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Phone, Mail } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

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
            {/* Animated canvas background */}
            <AnimatedBackground />

            <div className="relative z-10 flex flex-col items-center">

                {/* Golden glow ring that expands behind the logo */}
                <div className="relative">
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.6, 1.3], opacity: [0, 0.6, 0] }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        style={{
                            background: 'radial-gradient(circle, rgba(213,173,54,0.4) 0%, rgba(213,173,54,0) 70%)',
                            width: '100%',
                            height: '100%',
                        }}
                    />

                    {/* Logo with cinematic entrance */}
                    <motion.img
                        src="/logo.png"
                        alt="Doctor Destiny Logo"
                        className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl relative"
                        initial={{ scale: 0.6, opacity: 0, filter: 'blur(12px)' }}
                        animate={{
                            scale: [0.6, 1.05, 1],
                            opacity: [0, 1, 1],
                            filter: ['blur(12px)', 'blur(0px)', 'blur(0px)'],
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            times: [0, 0.7, 1],
                        }}
                    />

                    {/* Persistent subtle glow behind logo */}
                    <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0.2, 0.4] }}
                        transition={{
                            duration: 4,
                            delay: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            background: 'radial-gradient(circle, rgba(213,173,54,0.25) 0%, transparent 60%)',
                        }}
                    />
                </div>

                {/* CTA Buttons — phone & email */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 mt-10 pointer-events-auto"
                >
                    <a
                        href="tel:+919071100445"
                        className="btn-shimmer flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
                        style={{
                            backgroundColor: '#D5AD36',
                            color: '#0E0C4F',
                        }}
                    >
                        <Phone className="w-4 h-4" />
                        Call Us Now
                    </a>

                    <a
                        href="mailto:admissions@doctordestiny.com"
                        className="btn-shimmer flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
                        style={{
                            backgroundColor: 'transparent',
                            color: '#D5AD36',
                            border: '2px solid #D5AD36',
                        }}
                    >
                        <Mail className="w-4 h-4" />
                        Email Us
                    </a>
                </motion.div>

            </div>

            {/* Floating Scroll Indicator - positioned at bottom of viewport */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3 }}
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