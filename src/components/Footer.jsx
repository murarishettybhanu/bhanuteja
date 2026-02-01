import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer className="bg-background relative overflow-hidden">
            <div className="py-6 text-center bg-background relative z-10">
                <p className="text-foreground/60 font-mono text-sm tracking-wider">
                    © {new Date().getFullYear()} {resumeData.profile.name}. All rights reserved.
                </p>
            </div>

            {/* Funky Gradient Top Border */}
            <motion.div
                className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 10
                }}
            />

            {/* Background Marquee */}
            <div className="absolute bottom-0 left-0 right-0 h-40 flex items-center justify-center opacity-10 dark:opacity-20 pointer-events-none select-none overflow-hidden">
                <motion.div
                    className="flex gap-20 whitespace-nowrap text-[10vw] font-black uppercase text-foreground leading-none"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 120
                    }}
                >
                    {/* First massive block */}
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>

                    {/* Exact Duplicate for seamless loop */}
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                    <span>BHANU TEJA • FULL STACK DEVELOPER •</span>
                </motion.div>
            </div>

            <div className="h-40" /> {/* Spacer for marquee visibility */}
        </footer>
    );
};

export default Footer;
