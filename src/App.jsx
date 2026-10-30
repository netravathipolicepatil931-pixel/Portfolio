import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Goals from './components/Goals.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#EAF1FF] font-body antialiased relative overflow-x-hidden selection:bg-[#9B7BFF] selection:text-[#080B14]">
      {/* Ambient Cinematic Deep Glow Orbs from Stitch Design */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-[#9B7BFF]/10 rounded-full blur-[150px]" />
        <div className="absolute top-[32%] -left-36 w-[550px] h-[550px] bg-[#38BDF8]/8 rounded-full blur-[170px]" />
        <div className="absolute top-[68%] -right-36 w-[600px] h-[600px] bg-[#9B7BFF]/9 rounded-full blur-[180px]" />
        <div className="absolute bottom-8 left-1/4 w-[500px] h-[450px] bg-[#38BDF8]/7 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#9B7BFF_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035]" />
      </div>

      {/* FLOATING NAVIGATION BAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Goals />
        <Contact />
      </main>

      {/* OBSIDIAN FOOTER */}
      <Footer />

      {/* Subtle Floating Back to Top Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#121A2B] hover:bg-[#1c2942] border border-[#38BDF8]/40 text-[#38BDF8] shadow-2xl transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#9B7BFF] cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
