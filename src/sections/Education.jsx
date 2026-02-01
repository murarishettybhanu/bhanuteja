import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resume';

const Education = () => {
    const { education } = resumeData;

    return (
        <section id="education" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-foreground mb-12"
                >
                    Education
                </motion.h2>

                <div className="space-y-8 max-w-3xl">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="mt-1 p-2 bg-muted rounded-full text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                                <p className="text-lg text-foreground/80">{edu.degree}</p>
                                <p className="text-sm text-foreground/60 mt-1">{edu.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
