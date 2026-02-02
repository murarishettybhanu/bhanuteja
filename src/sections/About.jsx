import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import SectionTitle from '../components/SectionTitle';


const About = () => {
    const { profile } = resumeData;

    return (
        <section id="about" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know me better"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
                >
                    {/* Image Section */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] group">
                            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-secondary rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500 ease-in-out" />

                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-full h-full object-cover transition-all duration-500 ease-in-out scale-100 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Title removed */}
                        <div className="prose prose-lg dark:prose-invert text-foreground/80 leading-relaxed mb-8">
                            <p className="text-xl font-light mb-6">
                                {profile.tagline}
                            </p>
                            <p>
                                {profile.about}
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
