import { motion } from 'framer-motion';
import { Cpu, Network, Binary, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const TechInnovationShowcase = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2" />
            <div className="absolute inset-0 z-0 opacity-40">
                <motion.div
                    animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-[15%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4 text-secondary font-bold tracking-wider uppercase text-xs">
                            <Sparkles className="w-4 h-4" />
                            <span>Technology & Future Research</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                            Advancing the Frontiers of <br />
                            <span className="text-secondary underline decoration-secondary/20 underline-offset-8">Artificial Intelligence</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
                            InnovoraMind connects global researchers and industry leaders to explore
                            breakthroughs in AI, Software Engineering, and Information Technology.
                        </p>
                        <Button asChild variant="outline" className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white rounded-full group">
                            <Link to="/tech-innovation">
                                Explore Tech Domains
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Animation/Element Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative flex items-center justify-center p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-inner"
                    >
                        <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-md relative z-10">
                            {[
                                { icon: Cpu, label: 'AI' },
                                { icon: Network, label: 'IT' },
                                { icon: Binary, label: 'Dev' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: i * 0.8,
                                        ease: "easeInOut"
                                    }}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-lg shadow-slate-200 flex items-center justify-center border border-slate-100 group">
                                        <item.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Connecting decorative lines/blobs */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent absolute" />
                            <motion.div
                                animate={{ opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
