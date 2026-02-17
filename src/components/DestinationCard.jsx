import { motion } from 'framer-motion';

export default function DestinationCard({ country, image, details, span = '' }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-72 ${span}`}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{country}</h3>
                <p className="text-sm font-medium text-gray-200 opacity-90">{details}</p>

                {/* Action Button (Hidden until hover) */}
                <div className="h-0 overflow-hidden group-hover:h-10 transition-all duration-300 mt-0 group-hover:mt-3">
                    <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-xs font-semibold hover:bg-white hover:text-trust-blue transition-colors">
                        View Universities
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
