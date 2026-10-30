import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Code, GitBranch, Compass, Network, Brain, Database, Globe } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData.js';

export default function Skills() {
  const { 
    programmingLanguages, 
    frontendDevelopment, 
    developerTools, 
    coreConcepts, 
    areasOfInterest, 
    currentlyExploring 
  } = skillsCategories;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="skills">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
          <Cpu className="w-4 h-4 text-[#38BDF8]" />
          <span>02 / TECHNICAL EXPERTISE</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF]">
          The Tools Behind My Ideas.
        </h2>
        <p className="font-body text-sm md:text-base text-[#9AA8BF] max-w-2xl">
          A disciplined stack focused on programmatic problem-solving, structured algorithms, intelligent models, and clean client-side engineering.
        </p>
      </div>

      {/* Bento Grid for Skills matching Stitch design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        {/* Programming Languages */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B7BFF] animate-pulse"></span>
              <h3 className="font-display text-base font-semibold text-[#EAF1FF]">{programmingLanguages.title}</h3>
            </div>
            <span className="font-mono text-[10px] text-[#9AA8BF]">{programmingLanguages.subtitle}</span>
          </div>
          <p className="font-body text-xs text-[#9AA8BF] mb-4">
            {programmingLanguages.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#9B7BFF]/15 border border-[#9B7BFF]/40 text-[#9B7BFF] font-mono text-xs">
              <Code className="w-4 h-4" />
              <span>Python (Primary Focus)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080B14] border border-white/10 text-[#EAF1FF] font-mono text-xs hover:border-white/20 transition-colors">
              <Terminal className="w-4 h-4 text-[#38BDF8]" />
              <span>C Language</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#080B14] border border-white/10 text-[#EAF1FF] font-mono text-xs hover:border-white/20 transition-colors">
              <Globe className="w-4 h-4 text-[#9B7BFF]" />
              <span>JavaScript</span>
            </div>
          </div>
        </motion.div>

        {/* Frontend Web Development */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="lg:col-span-6 glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]"></span>
              <h3 className="font-display text-base font-semibold text-[#EAF1FF]">{frontendDevelopment.title}</h3>
            </div>
            <span className="font-mono text-[10px] text-[#9AA8BF]">{frontendDevelopment.subtitle}</span>
          </div>
          <p className="font-body text-xs text-[#9AA8BF] mb-4">
            {frontendDevelopment.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {frontendDevelopment.skills.map((s) => (
              <span key={s.name} className="px-3 py-1.5 rounded-xl bg-[#080B14] border border-white/10 text-[#EAF1FF] font-mono text-xs">
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Developer Tools */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 glass-card rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-base font-semibold text-[#EAF1FF]">{developerTools.title}</h3>
            <Terminal className="w-4 h-4 text-[#9B7BFF]" />
          </div>
          <p className="font-body text-xs text-[#9AA8BF] mb-4">
            {developerTools.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {developerTools.skills.map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-lg bg-[#080B14] border border-white/10 font-mono text-xs text-[#EAF1FF]">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Core Concepts */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-4 glass-card rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-base font-semibold text-[#EAF1FF]">{coreConcepts.title}</h3>
            <Network className="w-4 h-4 text-[#38BDF8]" />
          </div>
          <p className="font-body text-xs text-[#9AA8BF] mb-4">
            {coreConcepts.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {coreConcepts.skills.map((c) => (
              <span key={c} className="px-2.5 py-1 rounded-lg bg-[#080B14] border border-white/10 font-mono text-xs text-[#EAF1FF]">
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Areas of Interest */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 glass-card rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-base font-semibold text-[#EAF1FF]">{areasOfInterest.title}</h3>
            <Brain className="w-4 h-4 text-[#9B7BFF]" />
          </div>
          <p className="font-body text-xs text-[#9AA8BF] mb-4">
            {areasOfInterest.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {areasOfInterest.skills.map((area) => (
              <span
                key={area.name}
                className={`px-2.5 py-1 rounded-lg font-mono text-xs ${
                  area.highlight === 'purple'
                    ? 'bg-[#9B7BFF]/10 border border-[#9B7BFF]/30 text-[#9B7BFF]'
                    : area.highlight === 'cyan'
                    ? 'bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8]'
                    : 'bg-[#080B14] border border-white/10 text-[#EAF1FF]'
                }`}
              >
                {area.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Currently Exploring Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="lg:col-span-12 glass-card rounded-2xl p-5 border border-[#9B7BFF]/20 bg-gradient-to-r from-[#121A2B] via-[#080B14] to-[#121A2B] flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9B7BFF]/15 text-[#9B7BFF] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-[#EAF1FF]">{currentlyExploring.title}</h4>
              <p className="font-body text-xs text-[#9AA8BF]">{currentlyExploring.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentlyExploring.tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-3 py-1.5 rounded-full bg-[#080B14] border font-mono text-xs ${
                  tag.color === 'cyan'
                    ? 'border-white/10 text-[#38BDF8]'
                    : tag.color === 'purple'
                    ? 'border-[#9B7BFF]/40 text-[#9B7BFF]'
                    : 'border-white/10 text-[#EAF1FF]'
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
