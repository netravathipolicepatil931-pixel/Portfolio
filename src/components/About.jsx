import React from 'react';
import { motion } from 'motion/react';
import { Terminal, BookOpen, Lightbulb, Wrench, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo, aboutNarrative } from '../data/portfolioData.js';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="about">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
          <Terminal className="w-4 h-4 text-[#38BDF8]" />
          <span>01 / ABOUT ME</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF]">
          Driven by Curiosity. Defined by Creation.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Profile Card Frame + Prominent Academic Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 glass-card rounded-2xl p-6 relative overflow-hidden border border-white/10"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6 font-mono text-[11px] text-[#9AA8BF]">
            <span>IDENTITY_OVERVIEW</span>
            <span className="inline-flex items-center gap-1.5 text-[#38BDF8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
              ACTIVE LEARNER
            </span>
          </div>

          {/* Profile Photograph Window Frame */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#080B14] border border-white/10 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9B7BFF]/20 via-transparent to-[#38BDF8]/15 z-10 pointer-events-none" />
            <img
              src={personalInfo.avatar}
              alt="Netravathi Police Patil Profile"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-3 z-20 font-mono text-[10px] text-white/90 bg-[#080B14]/80 px-2 py-0.5 rounded backdrop-blur-sm">
              LOC: Bengaluru, India (REVA)
            </div>
          </div>

          {/* Prominent Academic Highlight Badge: 9.19 / 10 CGPA */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#9B7BFF]/15 via-[#121A2B] to-[#38BDF8]/15 border border-[#9B7BFF]/40 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] uppercase text-[#38BDF8] tracking-wider block">ACADEMIC EXCELLENCE</span>
              <span className="font-display font-bold text-xl text-[#EAF1FF]">
                9.19 <span className="text-sm font-normal text-[#9AA8BF]">/ 10 CGPA</span>
              </span>
            </div>
            <div className="px-3 py-1 rounded-lg bg-[#080B14] border border-white/10 text-right">
              <span className="font-mono text-xs text-[#9B7BFF] font-medium block">2nd Year B.Tech</span>
              <span className="font-mono text-[10px] text-[#9AA8BF]">REVA University</span>
            </div>
          </div>

          {/* Metadata Spec Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-3 rounded-xl bg-[#080B14]/70 border border-white/5">
              <span className="block font-mono text-[10px] text-[#9AA8BF]">MAJOR</span>
              <span className="font-mono text-xs text-[#EAF1FF] font-medium">CSE (AI &amp; ML)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#080B14]/70 border border-white/5">
              <span className="block font-mono text-[10px] text-[#9AA8BF]">LOCATION</span>
              <span className="font-mono text-xs text-[#EAF1FF] font-medium">Bengaluru, IN</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Narrative & 3 Core Values */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-4"
          >
            <p className="font-body text-[#EAF1FF] text-base md:text-lg leading-relaxed">
              I am an undergraduate student in <span className="text-[#9B7BFF] font-semibold">Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning</span> at REVA University, Bengaluru.
            </p>
            <p className="font-body text-[#9AA8BF] leading-relaxed">
              My engineering journey is driven by a deep interest in how computational logic, data models, and modern software principles combine to solve practical problems. Rather than treating theory as abstract textbook rules, I focus on turning programmatic concepts into functional digital tools.
            </p>
            <p className="font-body text-[#9AA8BF] leading-relaxed">
              Whether building accessible web applications, implementing data structures, or experimenting with foundational machine learning models, I approach every challenge with thorough discipline, curiosity, and continuous improvement.
            </p>
          </motion.div>

          {/* Three Core Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-5 border border-white/5 hover:border-[#9B7BFF]/40 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-[#9B7BFF]/10 text-[#9B7BFF] flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-semibold text-[#EAF1FF] mb-1">Continuous Learning</h4>
              <p className="font-body text-xs text-[#9AA8BF] leading-snug">
                Actively strengthening core algorithms and tracking modern paradigms in applied AI and software engineering.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-5 border border-white/5 hover:border-[#38BDF8]/40 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-semibold text-[#EAF1FF] mb-1">Creative Problem Solving</h4>
              <p className="font-body text-xs text-[#9AA8BF] leading-snug">
                Approaching messy real-world challenges through clean logic, step-by-step design, and scalable execution.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-5 border border-white/5 hover:border-white/20 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[#EAF1FF] flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-display text-sm font-semibold text-[#EAF1FF] mb-1">Real-World Solutions</h4>
              <p className="font-body text-xs text-[#9AA8BF] leading-snug">
                Developing practical applications focused on tangible user utility, clean accessibility, and functional value.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
