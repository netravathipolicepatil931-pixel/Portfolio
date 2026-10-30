import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, Code, ArrowUpRight, ShoppingBag, 
  Package, Ticket, CheckSquare, Globe, X, Check, Info 
} from 'lucide-react';
import { projects } from '../data/portfolioData.js';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const lastTriggerRef = useRef(null);
  const modalRef = useRef(null);

  const filterTabs = [
    { label: 'All (6)', key: 'all' },
    { label: 'AI & EdTech', key: 'ai-edtech' },
    { label: 'Web Apps', key: 'web-apps' },
    { label: 'Management', key: 'management' },
    { label: 'Productivity', key: 'productivity' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.filterKey === activeFilter);

  // Background scroll locking and keyboard accessibility
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      // Focus modal when open
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalProject]);

  const openModal = (project, event) => {
    lastTriggerRef.current = event?.currentTarget || null;
    setActiveModalProject(project);
  };

  const closeModal = () => {
    setActiveModalProject(null);
    lastTriggerRef.current?.focus();
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="projects">
      {/* Section Header matching Stitch */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
            <FolderGit2 className="w-4 h-4 text-[#38BDF8]" />
            <span>03 / SELECTED WORK</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF]">
            From Concepts to Working Applications.
          </h2>
          <p className="font-body text-sm md:text-base text-[#9AA8BF] max-w-2xl">
            A selection of practical projects reflecting my journey through software development, engineering, and problem-solving.
          </p>
        </div>
      </div>

      {/* Functional Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/5 font-mono text-xs">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-1.5 rounded-lg border transition-all cursor-pointer ${
              activeFilter === tab.key
                ? 'bg-[#9B7BFF] text-[#080B14] border-[#9B7BFF] font-semibold'
                : 'border-white/10 text-[#9AA8BF] hover:text-[#EAF1FF] hover:border-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid: 2 Large Bento Spotlights + 4 Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6" id="projects-grid">
        {filteredProjects.map((project, idx) => {
          if (project.id === 'studymate-ai') {
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 border border-[#9B7BFF]/30 flex flex-col justify-between group hover:border-[#9B7BFF] transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Terminal UI Mockup */}
                  <div 
                    onClick={(e) => openModal(project, e)}
                    className="w-full h-44 rounded-xl bg-[#080B14] border border-white/10 p-4 font-mono text-xs flex flex-col justify-between group-hover:border-[#9B7BFF]/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                        <span className="ml-2 text-[#9AA8BF]">{project.fileMockup}</span>
                      </div>
                      <span className="text-[#38BDF8] text-[10px]">{project.mockupModule}</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-[#9AA8BF]">
                      <p className="text-[#9B7BFF]">{project.mockupQuery}</p>
                      {project.mockupResults.map((r, i) => (
                        <p key={i} className={i === 0 ? "text-[#EAF1FF]" : "text-[#38BDF8]"}>{r}</p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-[#9AA8BF]/60">
                      <span>{project.mockupFooter}</span>
                      <span className="text-[#9B7BFF] flex items-center gap-1">Details <Info className="w-3 h-3" /></span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-[#9B7BFF]/10 border border-[#9B7BFF]/30 text-[#9B7BFF] font-mono text-[11px]">
                      Education Technology
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-mono text-[11px]">
                      AI Concepts
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#080B14] border border-white/10 text-[#EAF1FF] font-mono text-[11px]">
                      Web Development
                    </span>
                  </div>

                  <h3 
                    onClick={(e) => openModal(project, e)}
                    className="font-display text-xl font-bold text-[#EAF1FF] group-hover:text-[#9B7BFF] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-[#9AA8BF] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10 mt-6 font-mono text-xs">
                  <span className="text-[#9AA8BF]">{project.stage}</span>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#38BDF8] hover:text-[#EAF1FF] transition-colors"
                    >
                      <span>Code</span>
                      <Code className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={(e) => openModal(project, e)}
                      className="flex items-center gap-1 text-[#9B7BFF] hover:text-[#EAF1FF] transition-colors cursor-pointer"
                    >
                      <span>Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          }

          if (project.id === 'online-grocery-store') {
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 border border-[#38BDF8]/30 flex flex-col justify-between group hover:border-[#38BDF8] transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Simulated Store Window Mockup */}
                  <div 
                    onClick={(e) => openModal(project, e)}
                    className="w-full h-44 rounded-xl bg-[#080B14] border border-white/10 p-4 font-mono text-xs flex flex-col justify-between group-hover:border-[#38BDF8]/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-[#38BDF8]" />
                        <span className="text-[#EAF1FF]">{project.fileMockup}</span>
                      </div>
                      <span className="text-[#9B7BFF] text-[10px]">{project.mockupModule}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {project.mockupItems.map((item, i) => (
                        <div key={i} className="p-2 rounded bg-[#121A2B] border border-white/5 flex items-center justify-between">
                          <span className="text-[#9AA8BF]">{item.name}</span>
                          <span className="text-[#38BDF8] font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-[#9AA8BF]/60">
                      <span>{project.mockupFooter}</span>
                      <span className="text-[#38BDF8] flex items-center gap-1">Details <Info className="w-3 h-3" /></span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-mono text-[11px]">
                      Web Development
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#9B7BFF]/10 border border-[#9B7BFF]/30 text-[#9B7BFF] font-mono text-[11px]">
                      JavaScript
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#080B14] border border-white/10 text-[#EAF1FF] font-mono text-[11px]">
                      UI/UX
                    </span>
                  </div>

                  <h3 
                    onClick={(e) => openModal(project, e)}
                    className="font-display text-xl font-bold text-[#EAF1FF] group-hover:text-[#38BDF8] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-[#9AA8BF] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-white/10 mt-6 font-mono text-xs">
                  <span className="text-[#9AA8BF]">{project.stage}</span>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#38BDF8] hover:text-[#EAF1FF] transition-colors"
                    >
                      <span>Code</span>
                      <Code className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={(e) => openModal(project, e)}
                      className="flex items-center gap-1 text-[#9B7BFF] hover:text-[#EAF1FF] transition-colors cursor-pointer"
                    >
                      <span>Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          }

          // Remaining 4 projects
          const iconComp = project.id === 'milk-dairy-management' 
            ? <Package className="w-4 h-4" /> 
            : project.id === 'ipl-ticket-booking' 
            ? <Ticket className="w-4 h-4" /> 
            : project.id === 'my-todo-list' 
            ? <CheckSquare className="w-4 h-4" /> 
            : <Globe className="w-4 h-4" />;

          const accentColor = project.id === 'ipl-ticket-booking' || project.id === 'personal-e-portfolio'
            ? 'hover:border-[#38BDF8]/40'
            : 'hover:border-[#9B7BFF]/40';

          const iconBg = project.id === 'ipl-ticket-booking' || project.id === 'personal-e-portfolio'
            ? 'bg-[#38BDF8]/10 text-[#38BDF8]'
            : 'bg-[#9B7BFF]/10 text-[#9B7BFF]';

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`lg:col-span-6 glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between ${accentColor} transition-all duration-200`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
                    {iconComp}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#080B14] border border-white/10 font-mono text-[10px] text-[#9AA8BF]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 
                  onClick={(e) => openModal(project, e)}
                  className="font-display text-lg font-bold text-[#EAF1FF] cursor-pointer hover:text-[#9B7BFF] transition-colors"
                >
                  {project.title}
                </h3>

                <p className="font-body text-xs text-[#9AA8BF] leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-[#9AA8BF] text-[11px]">{project.stage}</span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#38BDF8] hover:text-white transition-colors"
                  >
                    <span>Code</span>
                    <Code className="w-3.5 h-3.5" />
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1 text-[#9B7BFF] hover:text-white transition-colors"
                    >
                      <span>Live View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={(e) => openModal(project, e)}
                      className="flex items-center gap-1 text-[#9B7BFF] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Accessible Project Details Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e1322] border border-[#9B7BFF]/30 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative focus:outline-none"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-[#38BDF8] block mb-1">
                    {activeModalProject.category} · {activeModalProject.stage}
                  </span>
                  <h3 id="modal-title" className="font-display text-2xl font-bold text-[#EAF1FF]">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close dialog"
                  className="p-1.5 rounded-lg bg-[#121A2B] border border-white/10 text-[#9AA8BF] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-5 text-sm">
                <div>
                  <h4 className="font-mono text-xs uppercase text-[#9AA8BF] mb-1.5">Problem Context</h4>
                  <p className="text-[#EAF1FF] font-body leading-relaxed">{activeModalProject.details.problem}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase text-[#9AA8BF] mb-1.5">Engineering Solution</h4>
                  <p className="text-[#9AA8BF] font-body leading-relaxed">{activeModalProject.details.solution}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase text-[#9AA8BF] mb-2">Key Application Features</h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.details.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#EAF1FF] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase text-[#9AA8BF] mb-2">Verified Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-[#080B14] border border-white/10 font-mono text-xs text-[#38BDF8]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#121A2B] border border-white/10 text-xs font-mono text-[#EAF1FF] hover:border-[#38BDF8]"
                >
                  <Code className="w-4 h-4 text-[#38BDF8]" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-xl bg-[#9B7BFF] text-[#080B14] font-mono text-xs font-semibold hover:bg-[#a078ff]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
