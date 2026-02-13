
import { motion } from "framer-motion";

const ZiaSun = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        {/* Circle */}
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="4" fill="none" />

        {/* Top Group */}
        <rect x="38" y="15" width="4" height="15" rx="1" />
        <rect x="44" y="5" width="4" height="25" rx="1" />
        <rect x="52" y="5" width="4" height="25" rx="1" />
        <rect x="58" y="15" width="4" height="15" rx="1" />

        {/* Bottom Group */}
        <rect x="38" y="70" width="4" height="15" rx="1" />
        <rect x="44" y="70" width="4" height="25" rx="1" />
        <rect x="52" y="70" width="4" height="25" rx="1" />
        <rect x="58" y="70" width="4" height="15" rx="1" />

        {/* Left Group */}
        <rect x="15" y="38" width="15" height="4" rx="1" />
        <rect x="5" y="44" width="25" height="4" rx="1" />
        <rect x="5" y="52" width="25" height="4" rx="1" />
        <rect x="15" y="58" width="15" height="4" rx="1" />

        {/* Right Group */}
        <rect x="70" y="38" width="15" height="4" rx="1" />
        <rect x="70" y="44" width="25" height="4" rx="1" />
        <rect x="70" y="52" width="25" height="4" rx="1" />
        <rect x="70" y="58" width="15" height="4" rx="1" />
    </svg>
);

const Balloon = ({ color, delay, duration, left, scale = 1 }: { color: string, delay: number, duration: number, left: string, scale?: number }) => (
    <motion.div
        initial={{ y: "110vh", opacity: 0 }}
        animate={{
            y: "-20vh",
            opacity: [0, 0.4, 0.4, 0]
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "linear"
        }}
        className="absolute pointer-events-none drop-shadow-md z-[1] w-12 h-16"
        style={{ color, left, transform: `scale(${scale})` }}
    >
        <svg viewBox="0 0 100 125" fill="currentColor">
            {/* Balloon body */}
            <path d="M50 0 C20 0 0 25 0 55 C0 85 20 100 50 100 C80 100 100 85 100 55 C100 25 80 0 50 0 Z" />
            {/* Basket lines */}
            <path d="M50 100 L50 115" stroke="currentColor" strokeWidth="2" />
            <path d="M30 90 L35 115" stroke="currentColor" strokeWidth="1" />
            <path d="M70 90 L65 115" stroke="currentColor" strokeWidth="1" />
            {/* Basket */}
            <rect x="35" y="115" width="30" height="10" rx="2" />
        </svg>
    </motion.div>
)

export const NewMexicoBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            {/* Background Gradient - Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-transparent to-teal-50/20 pointer-events-none dark:from-orange-900/10 dark:to-teal-900/10 mix-blend-overlay opacity-50" />

            {/* Floating Zia Sun - Top Right, watermarked */}
            <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] text-yellow-500/10 dark:text-yellow-500/5 opacity-30">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                >
                    <ZiaSun className="w-full h-full" />
                </motion.div>
            </div>

            {/* Floating Zia Sun - Bottom Left, watermarked */}
            <div className="absolute -bottom-48 -left-20 w-[40rem] h-[40rem] text-red-600/5 dark:text-red-500/5 opacity-30">
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                >
                    <ZiaSun className="w-full h-full" />
                </motion.div>
            </div>

            {/* Floating Hot Air Balloons */}
            <Balloon color="#2DD4BF" delay={0} duration={45} left="10%" scale={1.2} />
            <Balloon color="#FACC15" delay={15} duration={55} left="85%" scale={0.8} />
            <Balloon color="#F43F5E" delay={8} duration={50} left="20%" scale={1} />
            <Balloon color="#2DD4BF" delay={25} duration={60} left="70%" scale={0.9} />
        </div>
    );
};

export default NewMexicoBackground;
