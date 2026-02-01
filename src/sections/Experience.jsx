import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import SectionTitle from '../components/SectionTitle';

const Experience = () => {
    const { experience } = resumeData;

    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Experiences"
                    subtitle="My professional journey and career highlights"
                />

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start group"
                        >
                            {/* Date Column */}
                            <div className="md:col-span-3 md:sticky md:top-24 pt-1">
                                <h4 className="text-xl font-bold text-foreground/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                                    {exp.period.split(' - ')[0]}
                                </h4>
                                <span className="text-sm text-foreground/30 hidden md:block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                                    to {exp.period.split(' - ')[1] || 'Present'}
                                </span>
                                <div className="md:hidden text-sm text-foreground/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                                    {exp.period}
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="md:col-span-9 relative">
                                <div className="group relative bg-background rounded-3xl p-1 shadow-sm hover:shadow-xl transition-all duration-300">
                                    {/* Gradient Border Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative h-full bg-background rounded-[20px] p-8 border border-border/50 group-hover:border-transparent transition-colors z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                            <h3 className="text-2xl font-bold text-foreground">
                                                {exp.role}
                                            </h3>
                                            <span className="text-lg text-primary font-medium bg-primary/10 px-4 py-1 rounded-full w-fit">
                                                {exp.company}
                                            </span>
                                        </div>

                                        <p className="text-lg text-foreground/70 mb-6 font-light leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="space-y-3">
                                            {exp.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex gap-3 text-foreground/80">
                                                    <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-primary/60" />
                                                    <span className="leading-relaxed">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
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

export default Experience;
