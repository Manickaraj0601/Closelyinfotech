import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown, FiStar, FiFileText } from 'react-icons/fi';
import Logo from './Logo';

export default function Header({ theme, toggleTheme, onOpenFeedback }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      // Find offset to account for sticky header
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Technologies', id: 'technologies' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-navbar py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center logo-container-wrap" 
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <Logo width={130} height={60} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[15px] font-medium tracking-wide text-theme-text/80 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-800/60 dark:bg-slate-800/60 border border-slate-700/50 text-amber-400 dark:text-yellow-400 hover:bg-slate-700/60 transition-all duration-200"
              title="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={18} className="text-slate-700" /> : <FiSun size={18} />}
            </button>

            {/* Enquiry Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[15px] font-medium tracking-wide text-theme-text/80 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
              >
                Enquiry <FiChevronDown size={14} className="text-primary" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-[var(--card-bg)] backdrop-blur-md p-2 shadow-xl"
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, 'contact')}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-theme-text/90 hover:bg-primary/10 hover:text-primary rounded-lg transition-all"
                    >
                      <FiFileText size={14} className="text-primary" /> Project Enquiry
                    </a>
                    <button
                      onClick={() => { setIsDropdownOpen(false); onOpenFeedback(); }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-theme-text/90 hover:bg-primary/10 hover:text-primary rounded-lg transition-all text-left"
                    >
                      <FiStar size={14} className="text-secondary" /> Send Feedback
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-800/60 dark:bg-slate-800/60 border border-slate-700/50 text-amber-500 dark:text-yellow-400 hover:bg-slate-700/60 transition-all duration-200"
              title="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={16} className="text-slate-700" /> : <FiSun size={16} />}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-white transition-all"
            >
              {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 w-full bg-[var(--bg)] backdrop-blur-lg border-b border-slate-200 dark:border-slate-800/80 z-40 md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-base font-medium text-theme-text/90 hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-200 dark:bg-slate-800/80 my-2" />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="flex items-center gap-2 text-sm text-theme-text/90 hover:text-primary py-1"
              >
                <FiFileText size={16} className="text-primary" /> Project Enquiry
              </a>
              <button
                onClick={() => { setIsMobileOpen(false); onOpenFeedback(); }}
                className="flex items-center gap-2 text-sm text-theme-text/90 hover:text-secondary py-1 text-left"
              >
                <FiStar size={16} className="text-secondary" /> Send Feedback
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
