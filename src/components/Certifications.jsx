import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Professional certifications & coursework credentials.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Specialized learning programs covering deep neural networks, GPU computing foundations, and machine learning techniques.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-violet-500/40 hover:bg-slate-850/80 transition-all flex flex-col justify-between shadow-lg hover:shadow-violet-950/20"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center shrink-0 border border-violet-500/20">
                    <Award className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-800/40">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Completion</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug mb-1.5">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-400 font-mono mb-4">
                  <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{cert.instructor}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Issued {cert.date}</span>
                </div>

                {/* Skills tags rendered as clean unboxed inline text */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-slate-500 mb-2">
                    Core Competencies Covered
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 font-mono">
                    {cert.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {sIdx < cert.skills.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom status */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Verified Curriculum</span>
                <span className="text-violet-400/90 font-semibold">Active Credential</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
