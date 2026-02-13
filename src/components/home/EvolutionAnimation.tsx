
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EvolutionAnimation = () => {
    const [phase, setPhase] = useState<'old' | 'transition' | 'new'>('old');

    useEffect(() => {
        const cycle = () => {
            setPhase('old');
            setTimeout(() => setPhase('transition'), 3000);
            setTimeout(() => setPhase('new'), 5000);
        };
        cycle();
        const interval = setInterval(cycle, 10000); // 10s loop
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full bg-slate-900 overflow-hidden relative rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center">
            {/* Background Grid - Digital Vibe */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,22,30,0.9)_2px,transparent_2px),linear-gradient(90deg,rgba(18,22,30,0.9)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <AnimatePresence mode="wait">

                {/* PHASE 1: TRADITIONAL / OLD METHODS */}
                {phase === 'old' && (
                    <motion.div
                        key="old"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="text-center z-10 p-8"
                    >
                        <div className="flex justify-center gap-4 mb-6">
                            {/* Static, heavy gears/blocks representing old sturdy methods */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                className="w-24 h-24 border-8 border-stone-500 rounded-full border-dashed opacity-50"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                                className="w-32 h-32 border-8 border-stone-600 rounded-full border-dotted opacity-50 -ml-12"
                            />
                        </div>
                        <h3 className="text-3xl font-serif text-stone-400 mb-2">Proven Traditions</h3>
                        <p className="text-stone-500 font-medium">Reliable. Established. Foundational.</p>
                    </motion.div>
                )}

                {/* PHASE 2: TRANSITION / SCANNING */}
                {phase === 'transition' && (
                    <motion.div
                        key="transition"
                        className="absolute inset-0 z-20 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ height: "0%" }}
                            animate={{ height: "100%" }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent border-y border-teal-500/50 absolute top-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1.5 }}
                            exit={{ opacity: 0 }}
                            className="text-teal-400 font-bold text-4xl tracking-widest uppercase glow-text"
                        >
                            Optimizing
                        </motion.div>
                    </motion.div>
                )}

                {/* PHASE 3: NEW / AI FUTURISTIC */}
                {phase === 'new' && (
                    <motion.div
                        key="new"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center z-10 p-8"
                    >
                        {/* Dynamic Particle Cloud / AI Network */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-teal-400 rounded-full"
                                    initial={{ x: "50%", y: "50%", opacity: 0 }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0]
                                    }}
                                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300 mb-4 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                                    Enhanced by Innovation
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-slate-300 text-lg max-w-lg mx-auto"
                            >
                                <p className="mb-2">Traditional reliability meets</p>
                                <p className="font-semibold text-teal-300">AI-Driven Efficiency & Software Precision</p>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="mt-8 inline-block px-6 py-2 border border-teal-500/30 rounded-full bg-teal-500/10 backdrop-blur-sm"
                            >
                                <span className="text-teal-400 font-semibold tracking-wider text-sm">INNOVORAMIND LLC</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-teal-500/20 w-full">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                    className="h-full bg-teal-500 shadow-[0_0_10px_#2dd4bf]"
                />
            </div>
        </div>
    );
};
