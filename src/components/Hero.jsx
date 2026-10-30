import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Check, Copy, ArrowUpRight, GraduationCap } from 'lucide-react';
import { personalInfo, metrics } from '../data/portfolioData.js';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting with subtle violet-blue gradients */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-blue-600/15 to-cyan-600/10 blur-[130px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Decorative ambient node elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[12%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        />
        <motion.div
          animate={{ y: [0, 16, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 right-[15%] w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.8)]"
        />
        <motion.div
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-[22%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Split Screen 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Unboxed natural kicker */}
            <motion.div 
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4"
            >
              <span className="font-semibold text-violet-400">Computer Science & Engineering</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-cyan-400">AI & ML Specialization</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold">{personalInfo.cgpa}</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance"
            >
              Turning ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                real-world applications.
              </span>
            </motion.h1>

            {/* Lead Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              Hello, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a Second Year B.Tech student in Computer Science & Engineering (AI & ML) at <span className="text-cyan-300 font-medium">{personalInfo.university}</span>. I build responsive web applications, interactive productivity tools, and software solutions that solve real everyday problems.
            </motion.p>

            {/* Action Row */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
              >
                Explore Real Projects
              </a>

              <a
                href="#education"
                className="px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-violet-500/40 rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span>Education & CGPA</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3 text-xs font-mono text-slate-300 hover:text-cyan-300 bg-slate-900/70 hover:bg-slate-850 border border-slate-800/90 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </motion.div>

            {/* Social Proof & Profiles */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-3 border-t border-slate-800/70 w-full max-w-xl"
            >
              <span className="font-mono text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Fidelity Profile Photo Frame with Violet-Blue Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Subtle animated violet-blue gradient border & glow */}
              <div 
                className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600/40 via-blue-500/30 to-cyan-400/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" 
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden glass-panel border border-violet-500/30 shadow-2xl bg-slate-950/90 transition-transform duration-500 group-hover:scale-[1.01]">
                {/* Visual Header Window Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">netravathi_patil.profile</span>
                  <span className="font-mono text-[11px] text-violet-400">REVA · B.Tech</span>
                </div>

                {/* Profile Photograph Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-900/80 flex items-center justify-center p-4">
                  <motion.img
                    src={personalInfo.avatar}
                    alt="Netravathi Police Patil - AI & ML Engineering Student at REVA University"
                    className="w-full h-full object-cover object-center rounded-xl transition-all duration-500 group-hover:scale-103"
                    loading="eager"
                  />
                  
                  {/* Overlay unboxed bio chip */}
                  <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-violet-500/30 shadow-lg">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white tracking-tight">{personalInfo.name}</span>
                      <span className="text-cyan-400 font-mono text-[11px] font-semibold">{personalInfo.cgpa}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5 truncate">
                      B.Tech CSE (AI & ML) · {personalInfo.currentYear}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Metrics Row below the Hero Split - Accurately Featuring 9.19 / 10 CGPA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {metrics.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight flex items-baseline gap-1">
                <span>{item.value}</span>
                {item.label === "Academic CGPA" && (
                  <span className="text-xs font-semibold text-emerald-400 font-mono">CGPA</span>
                )}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
