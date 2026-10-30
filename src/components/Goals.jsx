import React from 'react';
import { motion } from 'motion/react';
import { Activity, Terminal, Brain, Globe, Database, Sparkles, Users } from 'lucide-react';
import { roadmapMilestones } from '../data/portfolioData.js';

export default function Goals() {
  const iconComponents = [Terminal, Brain, Globe, Database, Sparkles, Users];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="roadmap">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
          <Activity className="w-4 h-4 text-[#38BDF8]" />
          <span>06 / WHAT'S NEXT</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF]">
          What's Next in My Journey.
        </h2>
        <p className="font-body text-sm md:text-base text-[#9AA8BF] max-w-2xl">
          A proactive roadmap guiding my technical trajectory as I prepare for high-impact AI/ML engineering roles.
        </p>
      </div>

      {/* Roadmap 6-Node Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {roadmapMilestones.map((milestone, idx) => {
          const IconComp = iconComponents[idx % iconComponents.length];
          const isPurple = milestone.color === '#9B7BFF';
          const borderStyle = isPurple ? 'border-[#9B7BFF]/30 hover:border-[#9B7BFF]' : 'border-white/10 hover:border-[#38BDF8]';
          const numColor = isPurple ? 'text-[#9B7BFF]' : 'text-[#38BDF8]';
          const iconColor = isPurple ? 'text-[#38BDF8]' : 'text-[#9B7BFF]';

          return (
            <motion.div
              key={milestone.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className={`glass-card rounded-2xl p-6 border ${borderStyle} relative overflow-hidden group transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-2xl font-bold ${numColor}`}>
                  {milestone.num}
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#080B14] flex items-center justify-center">
                  <IconComp className={`w-4 h-4 ${iconColor}`} />
                </span>
              </div>

              <h3 className="font-display text-base font-semibold text-[#EAF1FF] mb-2">
                {milestone.title}
              </h3>

              <p className="font-body text-xs text-[#9AA8BF] leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
