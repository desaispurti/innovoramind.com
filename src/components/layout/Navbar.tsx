import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MexicanFlag } from '@/components/ui/MexicanFlag';
import seal from '@/assets/seal.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Funding & Grants', path: '/funding-grants' },
  { label: 'Tech Innovation', path: '/tech-innovation' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img src={seal} alt="Seal" className="h-12 lg:h-14 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-lg text-foreground leading-tight">
                Innovora<span className="text-gradient">Mind LLC</span>
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <MexicanFlag width={18} height={12} />
                <span className="text-[10px] font-medium text-muted-foreground/70 tracking-wide uppercase">New Mexico, USA</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                    ? 'text-primary bg-primary/8'
                    : 'text-foreground/65 hover:text-foreground hover:bg-muted/60'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2.5 rounded-xl hover:bg-muted/60 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden border-t border-border/30 bg-background/95 backdrop-blur-xl"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${isActive(item.path)
                        ? 'text-primary bg-primary/8'
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};