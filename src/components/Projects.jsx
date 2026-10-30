import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, ExternalLink, X, ArrowUpRight, Check, Sparkles, 
  Brain, ShoppingCart, ClipboardList, Ticket, CheckSquare, 
  Layout, Code2, Layers, Info, BookOpen, Clock, Calendar, 
  Search, Plus, ShieldCheck
} from 'lucide-react';
import { projects } from '../data/portfolioData.js';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = [
    'All Projects',
    'AI & EdTech',
    'Web Applications',
    'Management Systems',
    'Productivity'
  ];

  const filteredProjects = selectedFilter === 'All Projects'
    ? projects
    : projects.filter((p) => {
        if (selectedFilter === 'Web Applications') {
          return p.filterCategory === 'Web Applications';
        }
        return p.filterCategory === selectedFilter || p.category.toLowerCase().includes(selectedFilter.toLowerCase());
      });

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Professional SVG & CSS UI Mockup Component for each real project
  const renderProjectVisual = (project, isLarge = false) => {
    switch (project.id) {
      case 'studymate-ai':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-950 p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-44 h-44 bg-violet-600/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono relative z-10 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-violet-400 font-semibold">
                <Brain className="w-4 h-4" /> StudyMate AI Workspace
              </span>
              <span className="text-[11px] text-slate-500">Revision Deck · Active</span>
            </div>

            <div className="my-auto py-3 space-y-2.5 relative z-10">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-violet-500/30 shadow-md">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="font-mono text-cyan-400">Card #04: Transformer Attention</span>
                  <span className="text-emerald-400">Mastered</span>
                </div>
                <div className="text-xs font-semibold text-white">
                  "Self-attention relates different positions of a single sequence to compute representation."
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Next review scheduled in 2 hours</span>
                <span className="text-violet-400 font-mono">14 Notes Indexed</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono border-t border-white/5 pt-2">
              <span>Smart Study Assistant</span>
              <span className="text-violet-300">JS · Web · AI</span>
            </div>
          </div>
        );

      case 'online-grocery-store':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-950 p-5 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-600/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono relative z-10 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShoppingCart className="w-4 h-4" /> FreshHarvest Storefront
              </span>
              <span className="text-emerald-400 font-mono font-bold">Cart: 3 Items</span>
            </div>

            <div className="my-auto py-3 space-y-2 relative z-10">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-500/25">
                  <span className="text-slate-400 block text-[10px]">Fresh Organic Produce</span>
                  <span className="text-white font-semibold">Avocado & Greens</span>
                  <span className="text-emerald-400 text-[11px] block mt-0.5">$6.40</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-500/25">
                  <span className="text-slate-400 block text-[10px]">Dairy & Staples</span>
                  <span className="text-white font-semibold">Almond Milk 1L</span>
                  <span className="text-emerald-400 text-[11px] block mt-0.5">$3.20</span>
                </div>
              </div>
              <div className="p-2 rounded bg-slate-950/70 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                <span>Subtotal (Free Delivery Applied)</span>
                <span className="text-emerald-400 font-bold font-mono">$19.60</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono border-t border-white/5 pt-2">
              <span>React Shopping UI</span>
              <span className="text-emerald-300">React · State · CSS</span>
            </div>
          </div>
        );

      case 'milk-dairy-management':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <ClipboardList className="w-4 h-4" /> Dairy Intake Log
              </span>
              <span className="text-slate-400 text-[10px]">Daily Ledger</span>
            </div>

            <div className="my-auto py-2 space-y-1.5 text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/90 border border-cyan-500/25 flex justify-between items-center text-[11px]">
                <span className="text-slate-300">Supplier #104 · Morning</span>
                <span className="text-cyan-300 font-bold">42.5 Liters</span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-cyan-500/25 flex justify-between items-center text-[11px]">
                <span className="text-slate-300">Supplier #108 · Evening</span>
                <span className="text-cyan-300 font-bold">38.0 Liters</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-white/5 pt-1.5">
              <span>Operations & Records</span>
              <span className="text-cyan-400">React · Web</span>
            </div>
          </div>
        );

      case 'ipl-ticket-booking':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Ticket className="w-4 h-4" /> IPL Match Booking
              </span>
              <span className="text-amber-400 text-[10px]">Chinnaswamy Stadium</span>
            </div>

            <div className="my-auto py-2 space-y-1.5">
              <div className="p-2 rounded bg-slate-900/90 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Match Fixture</span>
                  <span className="text-xs font-bold text-white">RCB vs CSK</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">West Stand</span>
                  <span className="text-xs font-bold text-amber-400 font-mono">2 Seats</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-white/5 pt-1.5">
              <span>Interactive Ticket UI</span>
              <span className="text-amber-300">React · CSS</span>
            </div>
          </div>
        );

      case 'my-todo-list':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                <CheckSquare className="w-4 h-4" /> Task Flow
              </span>
              <span className="text-purple-300 text-[10px]">4 Pending</span>
            </div>

            <div className="my-auto py-2 space-y-1.5 text-xs">
              <div className="p-2 rounded bg-slate-900/90 border border-purple-500/25 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="line-through text-slate-500 text-[11px]">Prepare DAA Assignment</span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-purple-500/25 flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded border border-purple-400 shrink-0" />
                <span className="text-slate-200 text-[11px]">Build React Component Library</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-white/5 pt-1.5">
              <span>Productivity Manager</span>
              <span className="text-purple-300">HTML · CSS · JS</span>
            </div>
          </div>
        );

      case 'personal-e-portfolio':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-950 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <Layout className="w-4 h-4" /> Netravathi Portfolio
              </span>
              <span className="text-cyan-400 text-[10px]">React + Tailwind</span>
            </div>

            <div className="my-auto py-2 space-y-1.5 text-xs">
              <div className="p-2 rounded bg-slate-900/90 border border-cyan-500/25 flex items-center justify-between">
                <span className="text-slate-300 text-[11px]">Academic & Project Showcase</span>
                <span className="text-emerald-400 font-mono text-[10px]">9.19 CGPA</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-white/5 pt-1.5">
              <span>Personal Engineering Brand</span>
              <span className="text-cyan-300">React · Motion</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Exact Requested Heading & Labels */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3">
              <span>03 / FEATURED ENGINEERING PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 text-balance">
              Turning Ideas Into Real-World Applications.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Explore the applications I've developed while learning software engineering, web development, and practical problem-solving.
            </p>
          </div>

          {/* Project Filters Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 shrink-0 self-start md:self-auto overflow-x-auto max-w-full no-scrollbar shadow-inner">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-md shadow-violet-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout: 2 Prominent Featured Projects + 4 Clean Complementary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            const isWideFeatured = project.isFeatured && (selectedFilter === 'All Projects' || selectedFilter === 'Web Applications' || selectedFilter === 'AI & EdTech');
            const colSpanClass = isWideFeatured ? 'lg:col-span-6' : 'lg:col-span-6 xl:col-span-6';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`${colSpanClass} group glass-panel rounded-2xl overflow-hidden border border-slate-800/90 hover:border-violet-500/40 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/20 relative`}
              >
                {/* Subtle top violet-blue hairline accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" 
                  aria-hidden="true" 
                />

                <div>
                  {/* Visual Interface Mockup Window */}
                  <div 
                    className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-800/80 cursor-pointer"
                    onClick={() => setActiveModalProject(project)}
                  >
                    {renderProjectVisual(project, isWideFeatured)}

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 shadow-sm">
                      {project.category}
                    </div>

                    {/* View Details hover indicator */}
                    <div className="absolute bottom-3 right-3 text-xs font-medium text-white bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <Info className="w-3.5 h-3.5 text-violet-400" />
                      <span>View Details</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 
                        onClick={() => setActiveModalProject(project)}
                        className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors cursor-pointer leading-snug"
                      >
                        {project.title}
                      </h3>
                      {project.isFeatured && (
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/50 px-2 py-0.5 rounded border border-violet-800/40 shrink-0">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Technologies tags with icons */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3 text-cyan-400" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Overview & Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors flex items-center gap-1.5"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-violet-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 bg-slate-900/95 backdrop-blur z-10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-violet-400 mb-1">
                      <span>{activeModalProject.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Netravathi Police Patil</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    aria-label="Close project details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Visual Banner */}
                <div className="aspect-[16/8] w-full bg-slate-950 border-b border-slate-800">
                  {renderProjectVisual(activeModalProject, true)}
                </div>

                {/* Modal Body Content */}
                <div className="p-6 space-y-6">
                  {/* Problem & Motivation */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Problem Context
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeModalProject.details.problem}
                    </p>
                  </div>

                  {/* Solution & Implementation */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Solution & Engineering Implementation
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeModalProject.details.solution}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Application Features
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProject.details.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Approach */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Technical Approach & Architecture
                    </h4>
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                      {activeModalProject.details.technicalApproach}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Technologies & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {activeModalProject.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="p-6 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
