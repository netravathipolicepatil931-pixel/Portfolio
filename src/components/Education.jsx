import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { education, personalInfo } from '../data/portfolioData.js';

export default function Education() {
  const edu = education[0];

  return (
    <section id="education" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Exact Labels */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3">
            <span>{edu.sectionLabel || "04 / ACADEMIC FOUNDATIONS"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 text-balance">
            {edu.heading}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {edu.description}
          </p>
        </div>

        {/* Beautiful Education Card with Subtle Animated Violet-Blue Gradient Border */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Subtle animated gradient glow border */}
          <div 
            className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-blue-600/20 to-cyan-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" 
            aria-hidden="true" 
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-6 sm:p-10 glass-panel border border-violet-500/30 bg-slate-950/90 shadow-2xl overflow-hidden"
          >
            {/* Header / University & Degree Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-violet-600/20 to-blue-600/20 text-violet-400 border border-violet-500/30 shrink-0 shadow-lg shadow-violet-500/10">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                    {edu.institution}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-sm sm:text-base text-violet-300 font-medium mt-0.5">
                    {edu.branch} · <span className="text-white">{edu.specialization}</span>
                  </div>
                </div>
              </div>

              {/* CGPA & Year Highlight Card */}
              <div className="flex sm:items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-violet-500/30 shadow-inner shrink-0">
                <div className="text-left sm:text-right pr-4 sm:border-r border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Current Standing</span>
                  <span className="text-sm font-semibold text-slate-200">{edu.currentYear}</span>
                  <span className="text-[11px] text-slate-500 block font-mono">{edu.period}</span>
                </div>

                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 block">Academic CGPA</span>
                  <div className="text-2xl font-extrabold font-mono text-emerald-400 tracking-tight">
                    9.19 <span className="text-xs text-slate-400 font-normal">/ 10</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-500/90 font-medium">9.19 / 10 CGPA</span>
                </div>
              </div>
            </div>

            {/* Elegant Timeline & Key Academic Highlights */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Timeline Visual Graphic */}
              <div className="md:col-span-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  <span>Academic Timeline</span>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-blue-500 before:to-slate-800">
                  <div className="relative">
                    <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-violet-400 ring-4 ring-slate-950" />
                    <div className="text-xs font-mono text-violet-300">2022 - Admission</div>
                    <div className="text-sm font-medium text-slate-200">Enrolled in B.Tech CSE (AI & ML)</div>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-slate-950" />
                    <div className="text-xs font-mono text-emerald-300">Current Phase · 2024</div>
                    <div className="text-sm font-medium text-white font-semibold">Second Year Undergraduate</div>
                    <div className="text-xs text-slate-400 mt-0.5">Consistent Academic Record (9.19 CGPA)</div>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-slate-950" />
                    <div className="text-xs font-mono text-slate-500">2026 - Target Graduation</div>
                    <div className="text-xs text-slate-400">Software & AI Engineering Aspirant</div>
                  </div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="md:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Program Focus</span>
                </div>

                <div className="space-y-3">
                  {edu.keyHighlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-800/30 text-xs text-violet-300 flex items-center gap-2 font-mono">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Campus: Kattigenahalli, Yelahanka, Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
