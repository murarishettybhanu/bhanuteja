import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className = "", watermarkClass = "text-[12vw] md:text-[10rem]" }) => {
    return (
        <div className={`relative mb-20 flex flex-col items-center justify-center text-center overflow-hidden py-10 ${className}`}>
            {/* Watermark Background */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none select-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <span className={`${watermarkClass} font-black text-foreground/5 uppercase tracking-tighter leading-none whitespace-nowrap blur-[2px]`}>
                    {title}
                </span>
            </motion.div>

            {/* Foreground Title */}
            <div className="relative z-10">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-sm tracking-tight"
                >
                    {title}
                </motion.h2>

                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 100, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="h-1.5 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-4 rounded-full"
                />

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-foreground/60 mt-4 text-lg font-light max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default SectionTitle;
