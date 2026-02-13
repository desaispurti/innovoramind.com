import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MexicanFlag } from '@/components/ui/MexicanFlag';
import logo from '@/assets/logo.png';
import seal from '@/assets/seal.png';
const mainNavItems = [{
  label: 'Home',
  path: '/'
}, {
  label: 'Services',
  path: '/services'
}, {
  label: 'Solutions',
  path: '/solutions'
}, {
  label: 'Funding & Grants',
  path: '/funding-grants'
  // }, {
  //   label: 'Proceedings',
  //   path: '/proceedings'
}, {
  label: 'Registrations',
  path: '/registrations'
}];

const moreNavItems = [{
  label: 'Tech Innovation',
  path: '/tech-innovation'
}, {
  label: 'About Us',
  path: '/about'
}, {
  label: 'Contact',
  path: '/contact'
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Combine all items for the menu
  const allNavItems = [...mainNavItems, ...moreNavItems];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50 relative">
              <img src={seal} alt="Seal" className="h-14 w-auto" />
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

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-muted transition-colors z-50 relative group"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground block transition-transform origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-4 h-0.5 bg-foreground block transition-opacity group-hover:w-6"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-foreground block transition-transform origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full Screen Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 md:px-12"
          >
            <div className="container-custom max-w-5xl h-full overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                {/* Navigation Links Column */}
                <div className="space-y-6 md:col-span-2">
                  <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase mb-4">Navigation</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {allNavItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg md:text-xl font-medium transition-colors hover:text-primary flex items-center gap-3 group ${isActive(item.path) ? 'text-secondary' : 'text-foreground/80'}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive(item.path) ? 'bg-secondary' : 'bg-transparent group-hover:bg-primary'}`} />
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA and Info Column */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase mb-4">Action</h3>
                    <Button asChild className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                      <Link to="/registrations" onClick={() => setIsOpen(false)}>Register Now</Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10"
                  >
                    <p className="text-foreground/80 font-medium mb-2">Have questions?</p>
                    <p className="text-sm text-muted-foreground mb-4">Contact our team for support regarding IT solutions, projects, or partnerships.</p>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-secondary font-semibold hover:underline">
                      Get in touch &toea;
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};