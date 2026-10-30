import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Code, Share2, School, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Hero() {
  const canvasRef = useRef(null);

  // Interactive subtle constellation canvas from Stitch HTML
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    let particles = [];
    const particleCount = 24;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * (width || 380),
          y: Math.random() * (height || 380),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.6 + 1,
          color: Math.random() > 0.4 ? 'rgba(155, 123, 255, ' : 'rgba(56, 189, 248, '
        });
      }
    };

    resize();
    initParticles();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.22;
            ctx.strokeStyle = `rgba(155, 123, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color + '0.65)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-28 pb-12 md:py-20 relative" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121A2B] border border-[#38BDF8]/30 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#38BDF8] tracking-widest uppercase">
              {personalInfo.eyebrow}
            </span>
          </div>

          {/* Main Headlines */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#EAF1FF]">
              Hi, I'm <span className="text-[#9B7BFF]">Netravathi.</span>
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-gradient">
              {personalInfo.subheadline}
            </p>
          </div>

          {/* Description */}
          <p className="font-body text-[#9AA8BF] text-base md:text-lg max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTAs & Social Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#9B7BFF] to-[#7f5af0] text-[#080B14] shadow-lg shadow-[#9B7BFF]/25 hover:shadow-[#9B7BFF]/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider bg-[#121A2B] border border-white/10 hover:border-[#38BDF8] text-[#EAF1FF] hover:text-[#38BDF8] transition-all duration-300 active:scale-95"
            >
              <span>Let's Connect</span>
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-[#121A2B] border border-white/10 flex items-center justify-center text-[#9AA8BF] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 transition-all duration-200"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-[#121A2B] border border-white/10 flex items-center justify-center text-[#9AA8BF] hover:text-[#9B7BFF] hover:border-[#9B7BFF]/40 transition-all duration-200"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Academic Affiliation metadata tag */}
          <div className="pt-4 flex items-center gap-2 text-[#9AA8BF]/90 font-mono text-xs">
            <School className="w-4 h-4 text-[#38BDF8]" />
            <span>B.Tech CSE (AI &amp; ML) • REVA University, Bengaluru • CGPA: 9.19</span>
          </div>
        </motion.div>

        {/* Right Column: Abstract Neural & AI Architecture Visual with Neon Tech Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-[#9B7BFF]/30 via-white/5 to-transparent">
            <div className="w-full h-full rounded-[23px] bg-[#121A2B]/85 backdrop-blur-2xl p-6 relative overflow-hidden border border-white/10 flex items-center justify-center">
              {/* Subtle Background Matrix Grid lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#9B7BFF_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
              
              {/* Animated Neural Canvas */}
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

              {/* Central Neon Tech Portrait Container */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full p-[2px] bg-gradient-to-tr from-[#9B7BFF] via-[#38BDF8] to-[#9B7BFF] shadow-2xl shadow-[#9B7BFF]/30 group hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#080B14]">
                  <img
                    src={personalInfo.avatar}
                    alt="Netravathi Police Patil - AI & ML Engineering Student"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Telemetry Glass Chip 1 (Top Left) */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-[#080B14]/90 backdrop-blur-md border border-[#9B7BFF]/30 shadow-lg font-mono text-[10px] text-primary">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF] animate-ping" />
                  <code>Framework: PyTorch / Scikit</code>
                </div>
              </div>

              {/* Floating Telemetry Glass Chip 2 (Bottom Left) */}
              <div className="absolute bottom-5 left-4 z-20 px-3 py-1.5 rounded-lg bg-[#080B14]/90 backdrop-blur-md border border-[#38BDF8]/30 shadow-lg font-mono text-[10px] text-[#38BDF8]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <code>Architecture: Transformer / MLP</code>
                </div>
              </div>

              {/* Floating Telemetry Glass Chip 3 (Top Right) */}
              <div className="absolute top-6 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#080B14]/90 backdrop-blur-md border border-white/10 shadow-lg font-mono text-[10px] text-[#EAF1FF]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#38BDF8] text-[10px]">▲</span>
                  <span>TENSOR OPS: <span className="text-[#9B7BFF] font-semibold">Active</span></span>
                </div>
              </div>

              {/* Floating Telemetry Glass Chip 4 (Bottom Right) */}
              <div className="absolute bottom-5 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#080B14]/80 backdrop-blur-md border border-white/10 text-[#9AA8BF] font-mono text-[10px]">
                <span>Status: Iterating Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <div className="mt-14 flex flex-col items-center justify-center gap-1">
        <a 
          href="#about"
          className="flex flex-col items-center gap-1 text-[#9AA8BF]/60 hover:text-[#9B7BFF] transition-colors"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll To Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#9B7BFF]" />
        </a>
      </div>
    </section>
  );
}
