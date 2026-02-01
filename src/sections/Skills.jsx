import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench, Server, Smartphone, Globe, Terminal } from 'lucide-react';
import { resumeData } from '../data/resume';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
    const { skills } = resumeData;

    const getIcon = (category) => {
        switch (category.toLowerCase()) {
            case 'frontend': return <Layout className="w-6 h-6" />;
            case 'backend': return <Server className="w-6 h-6" />;
            case 'database & cloud': return <Database className="w-6 h-6" />;
            case 'tools & testing': return <Terminal className="w-6 h-6" />;
            default: return <Code2 className="w-6 h-6" />;
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Skills & Expertise"
                    subtitle="A comprehensive list of my technical skills and expertise"
                    watermarkClass="text-[8vw] md:text-[7rem]"
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="group relative bg-background rounded-2xl p-1 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Gradient Border Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative h-full bg-background rounded-xl p-6 border border-border/50 group-hover:border-transparent transition-colors z-10 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        {getIcon(skillGroup.category)}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 content-start">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground/70 rounded-md border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
