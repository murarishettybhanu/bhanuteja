import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Code2, Cpu } from 'lucide-react';
import { resumeData } from '../data/resume';
import SectionTitle from '../components/SectionTitle';

const Projects = () => {
    const { projects } = resumeData;

    return (
        <section id="projects" className="py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Projects"
                    subtitle="A showcase of my technical projects and experiments"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative rounded-xl bg-[#1e1e1e] border border-white/10 shadow-2xl overflow-hidden font-mono"
                        >
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="text-xs text-white/40 flex items-center gap-1">
                                    <Terminal size={12} />
                                    <span>{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/40 hover:text-white transition-colors"
                                            aria-label="View Source"
                                        >
                                            <Github size={14} />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/40 hover:text-primary transition-colors"
                                            aria-label="View Live"
                                        >
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 md:p-8 relative">
                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-400 via-blue-500 to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                                <div className="mb-6 space-y-2">
                                    <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wide">
                                        <span className="text-purple-400">const</span>
                                        <span className="text-blue-400">role</span>
                                        <span className="text-white/60">=</span>
                                        <span className="text-[#ce9178]">"{project.role}"</span>;
                                    </div>
                                    <h3 className="text-2xl font-bold text-white/90 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed font-sans border-l-2 border-white/10 pl-4 py-1">
                                        {project.description}
                                    </p>
                                </div>

                                {project.features && (
                                    <div className="mb-6 space-y-2">
                                        <div className="text-xs text-white/30 uppercase tracking-widest font-sans font-bold">Key Features</div>
                                        <ul className="space-y-1">
                                            {project.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                                    <span className="min-w-[10px] text-green-500">➜</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-4 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 text-xs rounded bg-white/5 text-blue-300 border border-white/5 hover:border-blue-400/30 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
