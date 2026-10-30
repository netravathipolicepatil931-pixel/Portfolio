import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Workflow, GraduationCap, CheckCircle2, Award, Sparkles, Code2, Globe } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData.js';

export default function About() {
  const iconMap = [Code2, Globe, Brain];

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Engineering background & problem-solving mindset.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Combining academic rigor in Artificial Intelligence & Machine Learning with practical web and software engineering.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
              {aboutMe.headline}
            </h3>

            {aboutMe.paragraphs.map((para, idx) => (
              <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}

            {/* Academic Highlight Callout with Correct CGPA 9.19 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl glass-panel border border-violet-500/25 bg-slate-900/60 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-violet-600/10 to-cyan-500/10 blur-2xl pointer-events-none" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-violet-500/15 text-violet-300 shrink-0 border border-violet-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-white">
                      {personalInfo.degree} · {personalInfo.branch}
                    </h4>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                      {personalInfo.cgpa}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    {personalInfo.university} · {personalInfo.currentYear} (2022–2026)
                  </p>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    Specializing in Artificial Intelligence and Machine Learning. Building practical proficiency in data structures, algorithms, modular web applications, and data-driven problem solving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Core Technical Competencies
            </div>

            {aboutMe.pillars.map((pillar, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl glass-panel border border-slate-800/80 hover:border-violet-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-100">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-11">
                    {pillar.description}
                  </p>
                </div>
              );
            })}

            {/* Quick Facts Strip */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <span className="text-[11px] font-mono text-cyan-400 block mb-1">Academic Standing</span>
                <span className="text-xs font-semibold text-slate-200">{personalInfo.cgpa}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <span className="text-[11px] font-mono text-cyan-400 block mb-1">Current Progress</span>
                <span className="text-xs font-semibold text-slate-200">2nd Year Undergrad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
