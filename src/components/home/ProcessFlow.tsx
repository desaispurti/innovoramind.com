import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Pencil, CircleDot, XCircle, Stamp, Rocket } from 'lucide-react';

export const ProcessFlow = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const steps = [
        {
            number: "01",
            title: "Ideate",
            icon: Lightbulb,
            gradientId: "gradient1",
            colors: { from: "#8B5CF6", to: "#06B6D4" }
        },
        {
            number: "02",
            title: "Sketch",
            icon: Pencil,
            gradientId: "gradient2",
            colors: { from: "#3B82F6", to: "#8B5CF6" }
        },
        {
            number: "03",
            title: "Decide",
            icon: null, // Special case with two icons
            gradientId: "gradient3",
            colors: { from: "#06B6D4", to: "#8B5CF6" }
        },
        {
            number: "04",
            title: "Test",
            icon: Stamp,
            gradientId: "gradient4",
            colors: { from: "#8B5CF6", to: "#3B82F6" }
        },
        {
            number: "05",
            title: "Launch",
            icon: Rocket,
            gradientId: "gradient5",
            colors: { from: "#3B82F6", to: "#06B6D4" }
        }
    ];

    return (
        <section ref={containerRef} className="relative py-16 md:py-32 overflow-hidden bg-gradient-to-b from-background via-slate-50 dark:via-slate-900 to-background">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <motion.div style={{ opacity }} className="container-custom relative z-10">
                {/* Desktop Layout - Hidden on mobile */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {/* SVG Curved Dashed Path */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1200 400"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <motion.path
                            d="M 150 250 Q 250 150, 350 250 Q 450 350, 550 250 Q 650 150, 750 250 Q 850 350, 950 250 Q 1050 150, 1150 250"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="12 12"
                            fill="none"
                            className="text-secondary/30 dark:text-secondary/20"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Steps positioned along the path */}
                    <div className="relative h-[400px]">
                        {/* Step 1: Ideate - Top Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                            className="absolute"
                            style={{ left: '8%', top: '15%' }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotateY: 25, rotateX: 15, z: 50 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                                    className="relative w-24 h-24 mb-4"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                >
                                    <Lightbulb
                                        className="w-24 h-24 relative z-10"
                                        strokeWidth={1.5}
                                        style={{
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                            stroke: 'url(#gradient1)',
                                            fill: 'url(#gradient1)',
                                            transform: 'translateZ(30px)'
                                        }}
                                    />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-2xl font-bold text-foreground mb-1"
                                >
                                    01. Ideate
                                </motion.h3>
                            </div>
                        </motion.div>

                        {/* Step 2: Sketch - Bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
                            className="absolute"
                            style={{ left: '28%', top: '55%' }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotateY: 25, rotateX: 15, z: 50 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                                    className="relative w-24 h-24 mb-4"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                >
                                    <Pencil
                                        className="w-24 h-24 relative z-10"
                                        strokeWidth={1.5}
                                        style={{
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                            stroke: 'url(#gradient2)',
                                            fill: 'url(#gradient2)',
                                            transform: 'translateZ(30px)'
                                        }}
                                    />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="text-2xl font-bold text-foreground mb-1"
                                >
                                    02. Sketch
                                </motion.h3>
                            </div>
                        </motion.div>

                        {/* Step 3: Decide - Top Center */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                            className="absolute"
                            style={{ left: '45%', top: '5%' }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotateY: 25, rotateX: 15, z: 50 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                                    className="relative w-24 h-24 mb-4"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                >
                                    <div className="flex gap-2 relative z-10" style={{ transform: 'translateZ(30px)' }}>
                                        <CircleDot className="w-10 h-10" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))', stroke: 'url(#gradient3)', fill: 'url(#gradient3)' }} />
                                        <XCircle className="w-10 h-10" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))', stroke: 'url(#gradient3)', fill: 'url(#gradient3)' }} />
                                    </div>
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="text-2xl font-bold text-foreground mb-1"
                                >
                                    03. Decide
                                </motion.h3>
                            </div>
                        </motion.div>

                        {/* Step 4: Test - Bottom Center */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
                            className="absolute"
                            style={{ left: '62%', top: '55%' }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotateY: 25, rotateX: 15, z: 50 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
                                    className="relative w-24 h-24 mb-4"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                >
                                    <Stamp
                                        className="w-24 h-24 relative z-10"
                                        strokeWidth={1.5}
                                        style={{
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                            stroke: 'url(#gradient4)',
                                            fill: 'url(#gradient4)',
                                            transform: 'translateZ(30px)'
                                        }}
                                    />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.0, duration: 0.6 }}
                                    className="text-2xl font-bold text-foreground mb-1"
                                >
                                    04. Test
                                </motion.h3>
                            </div>
                        </motion.div>

                        {/* Step 5: Launch - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0, duration: 0.8, type: "spring", stiffness: 100 }}
                            className="absolute"
                            style={{ left: '82%', top: '15%' }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotateY: 25, rotateX: 15, z: 50 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
                                    className="relative w-24 h-24 mb-4"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                >
                                    <Rocket
                                        className="w-24 h-24 relative z-10 transform -rotate-45"
                                        strokeWidth={1.5}
                                        style={{
                                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                            stroke: 'url(#gradient5)',
                                            fill: 'url(#gradient5)',
                                            transform: 'translateZ(30px) rotate(-45deg)'
                                        }}
                                    />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className="text-2xl font-bold text-foreground mb-1"
                                >
                                    05. Launch
                                </motion.h3>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout - Vertical list */}
                <div className="lg:hidden space-y-12 max-w-md mx-auto px-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }
                                    }}
                                    className="relative w-20 h-20 mb-4"
                                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                                >
                                    {step.number === "03" ? (
                                        <div className="flex gap-2 relative z-10">
                                            <CircleDot
                                                className="w-9 h-9"
                                                strokeWidth={1.5}
                                                style={{
                                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                                    stroke: `url(#${step.gradientId})`,
                                                    fill: `url(#${step.gradientId})`
                                                }}
                                            />
                                            <XCircle
                                                className="w-9 h-9"
                                                strokeWidth={1.5}
                                                style={{
                                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                                    stroke: `url(#${step.gradientId})`,
                                                    fill: `url(#${step.gradientId})`
                                                }}
                                            />
                                        </div>
                                    ) : Icon ? (
                                        <Icon
                                            className={`w-20 h-20 relative z-10 ${step.number === "05" ? "transform -rotate-45" : ""}`}
                                            strokeWidth={1.5}
                                            style={{
                                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                                                stroke: `url(#${step.gradientId})`,
                                                fill: `url(#${step.gradientId})`
                                            }}
                                        />
                                    ) : null}
                                </motion.div>

                                {/* Label */}
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                                    className="text-xl md:text-2xl font-bold text-foreground"
                                >
                                    {step.number}. {step.title}
                                </motion.h3>
                            </motion.div>
                        );
                    })}
                </div>

                {/* SVG Gradients - Shared by both layouts */}
                <svg width="0" height="0" className="absolute">
                    <defs>
                        {steps.map((step) => (
                            <linearGradient key={step.gradientId} id={step.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={step.colors.from} />
                                <stop offset="100%" stopColor={step.colors.to} />
                            </linearGradient>
                        ))}
                    </defs>
                </svg>
            </motion.div>
        </section>
    );
};
