
import { motion } from 'framer-motion';
import { EvolutionAnimation } from './EvolutionAnimation';

export const EvolutionSection = () => {
    return (
        <section className="relative section-padding overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium border border-teal-200 dark:border-teal-800">
                            <span className="animate-pulse mr-2 w-2 h-2 rounded-full bg-teal-500"></span>
                            Bridging Heritage & Future
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                            Honoring Tradition <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
                                Elevating with Innovation
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            At <strong className="text-slate-900 dark:text-white">InnovoraMind LLC</strong>, we believe that established methods aren't obsolete—they are the foundation.
                        </p>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Our New Mexico-based team leverages cutting-edge <strong>AI, IT, and Software Solutions</strong> to transform these reliable foundations into scalable, high-efficiency powerhouses. We don't just replace; we enhance, optimize, and future-proof your business.
                        </p>

                        <ul className="space-y-3 mt-4">
                            {[
                                "AI-Enhanced Workflow Optimization",
                                "Legacy System Modernization",
                                "Intelligent Software Integration"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xs">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Animation / Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-lg aspect-video rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10"
                    >
                        <EvolutionAnimation />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
