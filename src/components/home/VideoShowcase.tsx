import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const VideoShowcase = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax and scale effects
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

    // Autoplay video when component mounts
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        }
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section ref={containerRef} className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-slate-50 dark:via-slate-900 to-background">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6"
                    >
                        See Us In Action
                    </motion.span>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Innovation in <span className="text-gradient">Motion</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Experience how we transform ideas into reality through cutting-edge technology and creative solutions
                    </p>
                </motion.div>

                {/* Video Container with 3D Transform */}
                <motion.div
                    style={{
                        scale,
                        opacity,
                        y,
                        rotateX,
                        transformPerspective: 1200
                    }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Decorative Frame Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-secondary rounded-3xl blur-2xl opacity-20 animate-pulse" />

                    {/* Main Video Frame */}
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-700/50">
                        {/* Browser-like Header */}
                        <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-slate-800/50 dark:bg-slate-950/50 rounded-xl">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 mx-4 px-4 py-1 bg-slate-700/50 dark:bg-slate-900/50 rounded-lg text-xs text-slate-400 font-mono">
                                innovoramind.com/showcase
                            </div>
                        </div>

                        {/* Video Player */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <video
                                ref={videoRef}
                                className="w-full h-auto"
                                loop
                                muted
                                playsInline
                                autoPlay
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            >
                                <source src="/src/assets/VN20260213_165728.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Small Play/Pause Button in Corner */}
                            <motion.button
                                onClick={togglePlay}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-black/80 transition-all shadow-lg"
                            >
                                {isPlaying ? (
                                    <Pause className="w-4 h-4 text-white" />
                                ) : (
                                    <Play className="w-4 h-4 text-white ml-0.5" />
                                )}
                            </motion.button>

                            {/* Gradient Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Bottom Decorative Bar */}
                        <div className="mt-4 flex items-center justify-between px-4 py-2 bg-slate-800/30 dark:bg-slate-950/30 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="text-xs text-slate-400 font-medium">Live Showcase</span>
                            </div>
                            <div className="flex gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1 h-4 bg-slate-600 rounded-full" style={{ height: `${Math.random() * 16 + 8}px` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-3xl opacity-20 blur-xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent to-secondary rounded-3xl opacity-20 blur-xl"
                    />
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-muted-foreground mb-6">
                        Ready to bring your vision to life?
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        Start Your Project
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};
