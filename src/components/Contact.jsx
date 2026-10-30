import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AtSign, Copy, Check, Mail, Share2, Code, 
  MapPin, Send, CheckCircle2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    setShowToast(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    setTimeout(() => {
      setShowToast(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative" id="contact">
      {/* Ambient Glow Behind Contact */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9B7BFF]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12 text-center items-center">
        <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase">
          <AtSign className="w-4 h-4 text-[#38BDF8]" />
          <span>07 / GET IN TOUCH</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAF1FF] max-w-2xl">
          Let's Build Something Meaningful.
        </h2>
        <p className="font-body text-sm md:text-base text-[#9AA8BF] max-w-xl">
          I'm always interested in connecting with fellow developers, students, mentors, and people exploring technology and creative ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left: Quick Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Copy-to-Clipboard Email Bar */}
          <div className="glass-card rounded-2xl p-6 border border-[#38BDF8]/30 relative">
            <span className="font-mono text-[10px] text-[#38BDF8] uppercase tracking-widest block mb-2">
              PRIMARY DIRECT CHANNEL
            </span>
            <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 truncate">
                <span className="text-[#38BDF8] font-mono text-xs">&gt;_</span>
                <span className="font-mono text-xs text-[#EAF1FF] truncate">
                  {personalInfo.email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-[#121A2B] hover:bg-[#1a253d] text-[#38BDF8] hover:text-white transition-all flex items-center gap-1.5 font-mono text-xs border border-white/5 cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9B7BFF] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Mail Client</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 border border-white/10 flex items-center justify-between hover:border-[#9B7BFF]/50 transition-all duration-200 group block"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#9B7BFF]/10 text-[#9B7BFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-[#EAF1FF]">LinkedIn Profile</h4>
                <p className="font-body text-xs text-[#9AA8BF]">Connect for professional collaborations</p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#9B7BFF] group-hover:translate-x-1 transition-transform">↗</span>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 border border-white/10 flex items-center justify-between hover:border-[#38BDF8]/50 transition-all duration-200 group block"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-[#EAF1FF]">GitHub Profile</h4>
                <p className="font-body text-xs text-[#9AA8BF]">Explore codebases and repositories</p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#38BDF8] group-hover:translate-x-1 transition-transform">↗</span>
          </a>

          {/* Location Note */}
          <div className="p-4 rounded-xl bg-[#080B14] border border-white/5 flex items-center gap-3 text-[#9AA8BF] font-mono text-[11px]">
            <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 md:p-8 border border-white/10">
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#9AA8BF] block uppercase tracking-wider" htmlFor="user-name">
                  Your Name
                </label>
                <input
                  id="user-name"
                  name="name"
                  required
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 focus:border-[#9B7BFF] focus:ring-1 focus:ring-[#9B7BFF] text-[#EAF1FF] font-body text-sm placeholder:text-[#9AA8BF]/40 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[11px] text-[#9AA8BF] block uppercase tracking-wider" htmlFor="user-email">
                  Your Email
                </label>
                <input
                  id="user-email"
                  name="email"
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#EAF1FF] font-body text-sm placeholder:text-[#9AA8BF]/40 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#9AA8BF] block uppercase tracking-wider" htmlFor="user-subject">
                Subject
              </label>
              <input
                id="user-subject"
                name="subject"
                required
                type="text"
                placeholder="Project Collaboration / Hackathon / Internship"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 focus:border-[#9B7BFF] focus:ring-1 focus:ring-[#9B7BFF] text-[#EAF1FF] font-body text-sm placeholder:text-[#9AA8BF]/40 outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[11px] text-[#9AA8BF] block uppercase tracking-wider" htmlFor="user-message">
                Message
              </label>
              <textarea
                id="user-message"
                name="message"
                rows={4}
                required
                placeholder="Hi Netravathi, I came across your portfolio and wanted to discuss..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 focus:border-[#9B7BFF] focus:ring-1 focus:ring-[#9B7BFF] text-[#EAF1FF] font-body text-sm placeholder:text-[#9AA8BF]/40 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#9B7BFF] to-[#7f5af0] text-[#080B14] shadow-lg shadow-[#9B7BFF]/25 hover:shadow-[#9B7BFF]/40 hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            <p className="text-[11px] font-mono text-[#9AA8BF]/60 text-center pt-1">
              Messages will open directly in your mail client or notify prompt response.
            </p>
          </form>

          {/* Status Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-3 rounded-xl bg-[#080B14] border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>MESSAGE_DISPATCHED: Thanks for reaching out! Mail client prepared.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
