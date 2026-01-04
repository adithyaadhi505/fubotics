import React from 'react';
import { motion } from 'framer-motion';

/**
 * Header Component
 * Fixed navigation header with smooth scroll behavior and mobile responsiveness
 */
interface HeaderProps {
  scrolled: boolean;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-glass-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        scale: scrolled ? 0.95 : 1,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'py-1' : 'py-2'
      }`}>
        {/* Logo */}
        <motion.div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => handleNavClick('hero')}
          whileHover={{ scale: 1.05 }}
        >
          <span className={`font-bold gradient-text transition-all duration-500 ${
            scrolled ? 'text-xl' : 'text-2xl'
          }`}>Fubotics</span>
        </motion.div>

        {/* Desktop CTA Button */}
        <motion.button
          onClick={() => handleNavClick('contact')}
          className={`hidden md:block px-6 bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900 rounded-xl font-semibold transition-all duration-500 ${
            scrolled ? 'py-1.5 text-sm' : 'py-2 text-base'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-accent-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={mobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-sm"
      >
        <nav className="flex flex-col gap-4 px-4 py-6">
          <motion.button
            onClick={() => handleNavClick('contact')}
            className="w-full px-6 py-3 bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900 rounded-xl font-semibold hover:shadow-glow-tan-lg transition-all duration-300 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
