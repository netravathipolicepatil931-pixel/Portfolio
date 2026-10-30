import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Cpu, Database, FileCode, Terminal, Layout, Boxes, 
  Palette, Monitor, Globe, Layers, Brain, Sliders, Binary, 
  Sparkles, GitBranch, Search, Zap, CheckCircle2 
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData.js';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconComponents = {
    Code2, Cpu, Database, FileCode, Terminal, Layout, Boxes, 
    Palette, Monitor, Globe, Layers, Brain, Sliders, Binary, 
    Sparkles, GitBranch, Search, Zap
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Programming languages, web frameworks & tools.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Technologies and tools I work with across frontend engineering, algorithmic programming, and machine learning coursework.
          </p>
        </div>

        {/* Interactive Category Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {skillsCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(idx)}
              role="tab"
              aria-selected={activeCategory === idx}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20 border border-violet-400/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              <span>{cat.category}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                activeCategory === idx ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Category Overview & Skills Grid */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl">
          <div className="mb-6 pb-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{skillsCategories[activeCategory].category}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {skillsCategories[activeCategory].description}
              </p>
            </div>
            <div className="text-xs font-mono text-cyan-400 whitespace-nowrap bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              {skillsCategories[activeCategory].skills.length} competencies
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsCategories[activeCategory].skills.map((skill, sIdx) => {
              const IconComp = iconComponents[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: sIdx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-violet-500/40 hover:bg-slate-850 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:text-violet-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {skill.level}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/40">
                    Active
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Global Competency Highlights */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-violet-500/30 transition-colors">
            <div className="text-lg font-bold text-white font-mono">React & JS</div>
            <div className="text-xs text-slate-400 mt-1">Web Applications</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-cyan-500/30 transition-colors">
            <div className="text-lg font-bold text-white font-mono">HTML & CSS</div>
            <div className="text-xs text-slate-400 mt-1">Responsive UI/UX</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-blue-500/30 transition-colors">
            <div className="text-lg font-bold text-white font-mono">Python & C++</div>
            <div className="text-xs text-slate-400 mt-1">Algorithms & Logic</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-emerald-500/30 transition-colors">
            <div className="text-lg font-bold text-white font-mono">AI Concepts</div>
            <div className="text-xs text-slate-400 mt-1">B.Tech (AI & ML)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
