import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
    const { profile } = resumeData;

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                    <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to connect with me!
                    </p>

                    <div className="flex justify-center gap-8">
                        {profile.contact.social.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/60 hover:text-primary transition-colors flex flex-col items-center gap-2 group"
                            >
                                <div className="p-4 bg-muted/50 rounded-full border border-border group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600 transition-all relative overflow-hidden">
                                    <div className="absolute inset-0 bg-muted/50 rounded-full z-0 group-hover:opacity-0 transition-opacity" />
                                    <social.icon size={24} className="relative z-10" />
                                </div>
                                <span className="text-sm font-medium relative">
                                    {social.name}
                                    <ArrowUpRight size={12} className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
