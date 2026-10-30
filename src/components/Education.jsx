import React from 'react';
import { motion } from 'motion/react';
import { School, Star } from 'lucide-react';
import { educationData } from '../data/portfolioData.js';

export default function Education() {
  const [btech, puc] = educationData;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="education">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
          <School className="w-4 h-4 text-[#38BDF8]" />
          <span>04 / EDUCATION</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF]">
          Building a Strong Engineering Foundation.
        </h2>
        <p className="font-body text-sm md:text-base text-[#9AA8BF] max-w-2xl">
          Academic milestones and structured foundational preparation in computer science and artificial intelligence.
        </p>
      </div>

      {/* Vertical Timeline Track */}
      <div className="relative pl-6 md:pl-10 border-l border-white/10 ml-3 md:ml-6 space-y-10">
        {/* Timeline Item 1: B.Tech Degree */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Node */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#080B14] border-2 border-[#38BDF8] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
          </div>

          {/* Academic Card */}
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-[#38BDF8]/30 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
              <div>
                <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider block">CURRENT DEGREE PROGRAM</span>
                <h3 className="font-display text-lg md:text-xl font-bold text-[#EAF1FF] mt-1">
                  {btech.title}
                </h3>
                <p className="font-body text-sm text-[#9B7BFF] font-medium">
                  {btech.specialization}
                </p>
              </div>
              <div className="md:text-right space-y-1">
                <span className="inline-block px-3 py-1 rounded-full bg-[#080B14] border border-[#38BDF8]/40 font-mono text-xs text-[#38BDF8]">
                  {btech.period}
                </span>
                <p className="font-mono text-[11px] text-[#9AA8BF]">{btech.institution}</p>
              </div>
            </div>

            {/* Highlight Banner: CGPA 9.19 / 10 */}
            <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#9B7BFF]/10 border border-[#9B7BFF]/30 text-[#9B7BFF] font-mono text-xs font-semibold">
              <Star className="w-4 h-4 fill-[#9B7BFF] text-[#9B7BFF]" />
              <span>{btech.distinction}</span>
            </div>

            <p className="font-body text-sm text-[#9AA8BF] leading-relaxed mb-5">
              {btech.description}
            </p>

            {/* Coursework Badges */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#9AA8BF] tracking-wider uppercase block">Core Coursework Highlights:</span>
              <div className="flex flex-wrap gap-2">
                {btech.coursework.map((course, idx) => {
                  const borderStyle = idx === 1 
                    ? 'border-[#9B7BFF]/30 text-[#9B7BFF]' 
                    : idx === 4 
                    ? 'border-[#38BDF8]/30 text-[#38BDF8]' 
                    : 'border-white/10 text-[#EAF1FF]';
                  return (
                    <span key={course} className={`px-3 py-1 rounded-lg bg-[#080B14] border font-mono text-xs ${borderStyle}`}>
                      {course}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Item 2: Pre-University Milestone */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          {/* Timeline Node */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#080B14] border-2 border-[#9B7BFF] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF]"></span>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <div>
                <span className="font-mono text-xs text-[#9AA8BF] uppercase tracking-wider">{puc.specialization}</span>
                <h4 className="font-display text-base font-semibold text-[#EAF1FF] mt-0.5">
                  {puc.title}
                </h4>
              </div>
              <span className="font-mono text-xs text-[#9AA8BF]">{puc.institution}</span>
            </div>
            <p className="font-body text-xs text-[#9AA8BF]">
              {puc.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
