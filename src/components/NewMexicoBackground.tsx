
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
            opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "linear"
        }}
        className="absolute pointer-events-none drop-shadow-md z-[1] w-16 h-20"
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

const ShiprockLandscape = () => (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
        {/* Sky/Distant Mountains */}
        <path fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>

        {/* Shiprock Peak */}
        <path d="M1000 320 L1100 100 L1150 180 L1200 120 L1300 320 Z" fillOpacity="0.6" />

        {/* Foreground terrain */}
        <path fillOpacity="0.8" d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,261.3C672,288,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
)

const WhiteSandsLandscape = () => (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
        {/* Distant Dunes */}
        <path fillOpacity="0.4" d="M0,256L60,245.3C120,235,240,213,360,213.3C480,213,600,235,720,224C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

        {/* Mid Dunes */}
        <path fillOpacity="0.6" d="M0,288L80,272C160,256,320,224,480,229.3C640,235,800,277,960,266.7C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>

        {/* Foreground Yuccas */}
        <g transform="translate(100, 260) scale(0.8)">
            <path d="M10 60 L20 -10 L30 60 Z M20 0 L0 20 M20 0 L40 20 M15 20 L20 40 L25 20" stroke="currentColor" strokeWidth="2" fill="none" />
        </g>
        <g transform="translate(300, 280) scale(0.6)">
            <path d="M10 60 L20 -10 L30 60 Z M20 0 L0 20 M20 0 L40 20" stroke="currentColor" strokeWidth="2" fill="none" />
        </g>
    </svg>
)

const PuebloLandscape = () => (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full fill-current">
        {/* Ground */}
        <path fillOpacity="0.8" d="M0,320L1440,320L1440,250L0,250Z"></path>

        {/* Pueblo Structures */}
        <path d="M100 320 L100 200 L250 200 L250 150 L350 150 L350 320" fill="currentColor" fillOpacity="0.6" />
        <path d="M350 320 L350 180 L500 180 L500 320" fill="currentColor" fillOpacity="0.5" />
        <path d="M800 320 L800 220 L950 220 L950 280 L1050 280 L1050 320" fill="currentColor" fillOpacity="0.6" />

        {/* Chili Ristras (abstract) */}
        <circle cx="120" cy="220" r="5" fill="#cc0000" fillOpacity="0.8" />
        <circle cx="120" cy="230" r="5" fill="#cc0000" fillOpacity="0.8" />
        <circle cx="120" cy="240" r="5" fill="#cc0000" fillOpacity="0.8" />

        {/* Ladders */}
        <path d="M220 320 L240 200" stroke="currentColor" strokeWidth="3" opacity="0.7" />
        <path d="M235 320 L255 200" stroke="currentColor" strokeWidth="3" opacity="0.7" />
        <path d="M225 300 L240 300" stroke="currentColor" strokeWidth="2" />
        <path d="M228 280 L243 280" stroke="currentColor" strokeWidth="2" />
        <path d="M231 260 L246 260" stroke="currentColor" strokeWidth="2" />
    </svg>
)


const RotatingLandscapes = () => {
    const [index, setIndex] = useState(0);
    const landscapes = [<ShiprockLandscape key="shiprock" />, <WhiteSandsLandscape key="whitesands" />, <PuebloLandscape key="pueblo" />];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % landscapes.length);
        }, 8000); // Rotate every 8 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 pointer-events-none z-0 opacity-20 dark:opacity-10 text-stone-600 dark:text-stone-400">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                >
                    {landscapes[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export const NewMexicoBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Background Gradient - Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-teal-50/30 pointer-events-none dark:from-orange-900/10 dark:to-teal-900/10 mix-blend-overlay opacity-60" />

            {/* Landscape Silhouette at Bottom - Rotating */}
            <RotatingLandscapes />

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
