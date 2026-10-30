import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, BarChart3, Network, ArrowUpRight } from 'lucide-react';
import { certificationsData } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="certifications">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
          <Award className="w-4 h-4 text-[#38BDF8]" />
          <span>05 / CERTIFICATIONS</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF]">
          Learning Beyond the Classroom.
        </h2>
        <p className="font-body text-sm md:text-base text-[#9AA8BF] max-w-2xl">
          Verified continuous education credentials acquired through industry leaders and academic platforms.
        </p>
      </div>

      {/* Credential Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((cert, idx) => {
          const Icon = idx === 0 ? Award : idx === 1 ? BarChart3 : Network;
          const isCyan = cert.color === '#38BDF8';
          const borderHover = isCyan ? 'hover:border-[#38BDF8]/40' : 'hover:border-[#9B7BFF]/40';
          const titleHover = isCyan ? 'group-hover:text-[#38BDF8]' : 'group-hover:text-[#9B7BFF]';
          const iconColor = isCyan ? 'text-[#38BDF8]' : 'text-[#9B7BFF]';
          const iconBg = isCyan ? 'bg-[#38BDF8]/10 border-[#38BDF8]/30' : 'bg-[#9B7BFF]/10 border-[#9B7BFF]/30';

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between ${borderHover} transition-all duration-300 group`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20">
                    <CheckCircle className="w-3 h-3 text-[#38BDF8]" />
                    VERIFIED
                  </span>
                </div>

                <div>
                  <h3 className={`font-display text-base font-semibold text-[#EAF1FF] ${titleHover} transition-colors`}>
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#38BDF8] mt-1">{cert.issuer}</p>
                </div>

                <p className="font-body text-xs text-[#9AA8BF] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#9AA8BF]">{cert.credentialTag}</span>
                <ArrowUpRight className={`w-4 h-4 ${iconColor}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
