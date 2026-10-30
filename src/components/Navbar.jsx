import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData.js';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Roadmap', href: '#roadmap' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'roadmap', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <nav 
        className="glass-nav rounded-full px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/60 transition-all duration-300"
        aria-label="Main Navigation"
      >
        {/* Monogram & Name */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B7BFF] rounded-full"
        >
          <div className="w-9 h-9 rounded-xl p-[1px] bg-gradient-to-tr from-[#9B7BFF] to-[#38BDF8] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#080B14] rounded-[11px] flex items-center justify-center">
              <span className="font-display text-sm font-bold text-[#EAF1FF] tracking-wider">NP</span>
            </div>
          </div>
          <span className="font-display font-semibold text-sm tracking-wide text-[#EAF1FF] hidden sm:inline group-hover:text-[#9B7BFF] transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[#9AA8BF]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`py-1 transition-colors relative ${
                  isActive ? 'text-[#EAF1FF] font-medium' : 'hover:text-[#EAF1FF]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="stitch-nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#38BDF8]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-[#EAF1FF] bg-[#121A2B] border border-white/10 hover:border-[#9B7BFF] hover:bg-[#18233a] transition-all shadow-sm"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#9B7BFF]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-9 h-9 rounded-full bg-[#121A2B] border border-white/10 flex items-center justify-center text-[#9AA8BF] hover:text-[#EAF1FF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#9B7BFF]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mt-2 p-4 rounded-2xl glass-card border border-white/10 flex flex-col space-y-2 font-mono text-sm shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#9AA8BF] hover:text-[#EAF1FF] py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#9B7BFF] font-semibold py-2 px-3 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
