import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

// CSS for the 3D-like Robot constructed purely from DOM elements
const RobotStyles = () => (
    <style>{`
        .robot-container {
            perspective: 1000px;
        }
        .robot-body {
            transform-style: preserve-3d;
        }
        .robot-head {
             background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
             box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3);
        }
        .robot-face {
            background: #0f172a;
            box-shadow: inset 0 0 15px rgba(0,0,0,0.8);
        }
        .eye {
            background: #ef4444;
            box-shadow: 0 0 10px #ef4444, inset 0 0 5px rgba(255,255,255,0.5);
        }
        .mouth {
            border-bottom: 4px solid #ef4444;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 2px 0 rgba(239, 68, 68, 0.5);
        }
        .torso {
             background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
             box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
        }
        .limb {
            background: #1e293b;
        }
        .joint {
            background: #334155;
        }
        .hand, .foot {
             background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
             box-shadow: 0 5px 15px rgba(185, 28, 28, 0.4);
        }
        .antenna {
            background: #334155;
        }
        .antenna-tip {
            background: #ef4444;
            box-shadow: 0 0 10px #ef4444;
        }
    `}</style>
)

export const AnimatedRobot = ({
    onClick,
    className = "",
    size = "medium", // small, medium, large
    scrollProgress // Optional scroll progress for parallax
}: {
    onClick?: () => void,
    className?: string,
    size?: "small" | "medium" | "large",
    scrollProgress?: any
}) => {
    const scale = size === 'small' ? 0.5 : size === 'large' ? 1.5 : 1;

    // Default animation if no scroll progress provided
    const floatY = useSpring(0, { stiffness: 50, damping: 10 });

    // Parallax logic if scrollProgress is provided
    const y = scrollProgress ? useTransform(scrollProgress, [0, 1], [-100, 300]) : 0;
    const rotate = scrollProgress ? useTransform(scrollProgress, [0, 1], [-10, 10]) : 0;

    return (
        <div className={`robot-container relative inline-block cursor-pointer group ${className}`} onClick={onClick}>
            <RobotStyles />
            <motion.div
                className="robot-body relative z-10"
                style={{ scale, y: scrollProgress ? y : undefined, rotate: scrollProgress ? rotate : undefined }}
                animate={!scrollProgress ? { y: [0, -20, 0] } : undefined}
                transition={!scrollProgress ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
                whileHover={{ scale: scale * 1.1, rotate: 5 }}
            >
                {/* Antenna */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                        className="w-4 h-4 rounded-full antenna-tip"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <div className="w-1 h-8 antenna" />
                </div>

                {/* Head */}
                <div className="w-40 h-32 rounded-3xl robot-head relative border-t border-l border-white/10 p-4 flex items-center justify-center">
                    {/* Face Screen */}
                    <div className="w-32 h-24 rounded-2xl robot-face relative flex flex-col items-center justify-center gap-2 overflow-hidden">
                        {/* Eyes */}
                        <div className="flex gap-8 mt-2">
                            <motion.div
                                className="w-6 h-8 rounded-sm eye"
                                animate={{ scaleY: [1, 0.1, 1] }}
                                transition={{ duration: 0.2, delay: 3, repeat: Infinity, repeatDelay: 5 }}
                            />
                            <motion.div
                                className="w-6 h-8 rounded-sm eye"
                                animate={{ scaleY: [1, 0.1, 1] }}
                                transition={{ duration: 0.2, delay: 3, repeat: Infinity, repeatDelay: 5 }}
                            />
                        </div>
                        {/* Mouth */}
                        <motion.div
                            className="w-16 h-4 mouth"
                            animate={{ width: ["4rem", "2rem", "4rem"] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        />
                        {/* Screen Glare */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none rounded-2xl" />
                    </div>
                </div>

                {/* Neck */}
                <div className="w-12 h-6 bg-slate-700 mx-auto -mt-1 relative z-0" />

                {/* Torso */}
                <div className="w-32 h-28 rounded-3xl torso mx-auto relative z-10 border-t border-white/5 flex flex-col items-center justify-center">
                    {/* Chest Logo/Text */}
                    <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-black/20 px-2 py-1 rounded">
                        Innovora
                    </div>
                    <div className="mt-2 w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-red-500 w-full" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                    </div>
                </div>

                {/* Arms */}
                <div className="absolute top-40 -left-12 w-12 h-24 rounded-full limb origin-top -z-10 flex flex-col justify-end items-center">
                    <motion.div
                        className="w-16 h-16 rounded-3xl hand absolute top-16"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                <div className="absolute top-40 -right-12 w-12 h-24 rounded-full limb origin-top -z-10 flex flex-col justify-end items-center">
                    <motion.div
                        className="w-16 h-16 rounded-3xl hand absolute top-16"
                        animate={{ rotate: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>

                {/* Legs */}
                <div className="flex justify-center gap-4 -mt-4 relative -z-10">
                    <div className="w-10 h-20 bg-slate-800 rounded-b-2xl flex flex-col justify-end">
                        <div className="w-16 h-12 rounded-2xl foot -ml-3" />
                    </div>
                    <div className="w-10 h-20 bg-slate-800 rounded-b-2xl flex flex-col justify-end">
                        <div className="w-16 h-12 rounded-2xl foot -ml-3" />
                    </div>
                </div>
            </motion.div>

            {/* Shadow */}
            <motion.div
                className="w-32 h-4 bg-black/20 blur-md rounded-[100%] mx-auto mt-4"
                animate={{ scale: [1, 0.8, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export const FloatingRobotGuide = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
            <div className="relative group">
                {/* Speech Bubble on Hover */}
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-full right-0 mb-4 bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tr-sm shadow-xl border border-slate-200 dark:border-slate-700 w-48 mb-2 origin-bottom-right"
                >
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        Hi! I'm <span className="text-red-500 font-bold">InnoBot</span>. <br />
                        Click me to see our <span className="text-blue-500 font-bold">Solutions</span>!
                    </p>
                </motion.div>

                <AnimatedRobot
                    size="small"
                    onClick={() => navigate('/solutions')}
                    className="hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300"
                />
            </div>
        </div>
    )
}
