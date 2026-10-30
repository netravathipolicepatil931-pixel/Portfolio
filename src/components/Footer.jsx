import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B14] border-t border-white/5 relative z-10">
      <div className="w-full py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <a
            href="#home"
            className="w-8 h-8 rounded-lg bg-[#121A2B] border border-white/10 flex items-center justify-center font-display text-xs font-bold text-[#EAF1FF] hover:border-[#9B7BFF] transition-colors"
          >
            NP
          </a>
          <div>
            <span className="font-display font-semibold text-sm text-[#EAF1FF] block">
              {personalInfo.name}
            </span>
            <p className="font-body text-xs text-[#9AA8BF]">
              {personalInfo.subheadline}
            </p>
          </div>
        </div>

        {/* Quick Navigation & Socials */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#9AA8BF]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38BDF8] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38BDF8] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#38BDF8] transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="text-[#38BDF8] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-4 px-6 text-center">
        <p className="font-mono text-[10px] text-[#9AA8BF]/60">
          © {new Date().getFullYear()} Netravathi Police Patil • REVA University CSE (AI &amp; ML), Bengaluru.
        </p>
      </div>
    </footer>
  );
}
