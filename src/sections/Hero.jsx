import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
    const { profile } = resumeData;

    return (
        <section className="min-h-[90vh] flex items-center justify-center pt-16 relative overflow-hidden isolate">
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                {/* Floating Cube 1 */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 45, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[10%] w-20 h-20 bg-primary/20 dark:bg-primary/30 rounded-2xl backdrop-blur-md border border-primary/20 dark:border-primary/50 shadow-xl"
                />

                {/* Floating Sphere */}
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-[10%] w-32 h-32 bg-secondary/30 dark:bg-secondary/20 rounded-full backdrop-blur-md border border-primary/20 dark:border-primary/50 shadow-2xl"
                />

                {/* Rotating Ring */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-primary/10 dark:border-primary/30 rounded-full opacity-60 pointer-events-none"
                    style={{ borderStyle: 'dashed' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="text-center flex flex-col items-center justify-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-300% animate-gradient"
                                style={{ backgroundSize: '200% auto' }}
                            >
                                {profile.name}
                            </motion.span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl text-foreground/60 font-light tracking-wide">
                            {profile.role}
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
