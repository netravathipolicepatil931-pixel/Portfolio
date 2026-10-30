import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { careerGoals } from '../data/portfolioData.js';

export default function Goals() {
  return (
    <section id="goals" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Career Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Engineering aspirations & research interests.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Strategic learning milestones guiding my development as a versatile computer science and AI/ML engineer.
          </p>
        </div>

        {/* 3-Column Roadmap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {careerGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-panel rounded-2xl p-7 border border-slate-800 hover:border-violet-500/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {goal.timeline}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-violet-500/15 text-violet-400 flex items-center justify-center border border-violet-500/20">
                    <Target className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  {goal.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {goal.description}
                </p>

                {/* Milestones */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-slate-500 mb-3">
                    Target Milestones
                  </div>
                  <ul className="space-y-2.5">
                    {goal.milestones.map((m, mIdx) => (
                      <li key={mIdx} className="text-xs text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Phase {index + 1} of 3</span>
                <span className="text-cyan-400 flex items-center gap-1 font-semibold">
                  In Progress <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
