import { motion } from 'framer-motion';

interface NewMexicoFlagProps {
    width?: number;
    height?: number;
    className?: string;
}

/**
 * New Mexico State Flag — Gold/Yellow background with the red Zia sun symbol.
 */
export const NewMexicoFlag = ({ width = 28, height = 18, className = '' }: NewMexicoFlagProps) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 54"
            width={width}
            height={height}
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}
        >
            {/* Gold background */}
            <rect x="0" y="0" width="84" height="54" fill="#FCD116" />

            {/* Zia Sun Symbol — centered */}
            <g transform="translate(42, 27)" fill="#BE2033">
                {/* Center circle */}
                <circle cx="0" cy="0" r="4" />

                {/* Top rays */}
                <rect x="-1" y="-16" width="2" height="8" rx="0.3" />
                <rect x="-2.5" y="-16" width="5" height="1" rx="0.3" />
                <rect x="-3.5" y="-13" width="7" height="1" rx="0.3" />
                <rect x="-1.5" y="-8" width="3" height="4" rx="0.3" />

                {/* Bottom rays */}
                <rect x="-1" y="8" width="2" height="8" rx="0.3" />
                <rect x="-2.5" y="15" width="5" height="1" rx="0.3" />
                <rect x="-3.5" y="12" width="7" height="1" rx="0.3" />
                <rect x="-1.5" y="4" width="3" height="4" rx="0.3" />

                {/* Left rays */}
                <rect x="-16" y="-1" width="8" height="2" rx="0.3" />
                <rect x="-16" y="-2.5" width="1" height="5" rx="0.3" />
                <rect x="-13" y="-3.5" width="1" height="7" rx="0.3" />
                <rect x="-8" y="-1.5" width="4" height="3" rx="0.3" />

                {/* Right rays */}
                <rect x="8" y="-1" width="8" height="2" rx="0.3" />
                <rect x="15" y="-2.5" width="1" height="5" rx="0.3" />
                <rect x="12" y="-3.5" width="1" height="7" rx="0.3" />
                <rect x="4" y="-1.5" width="4" height="3" rx="0.3" />
            </g>

            {/* Subtle border */}
            <rect x="0" y="0" width="84" height="54" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1" rx="1" />
        </motion.svg>
    );
};

// Keep backward-compatible export
export const MexicanFlag = NewMexicoFlag;

export default NewMexicoFlag;
