import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin, Clock, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { personalInfo, contactDetails } from '../data/portfolioData.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-900 bg-slate-950/70">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-t from-violet-600/10 via-blue-600/5 to-transparent blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Connect & explore collaboration opportunities.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Interested in discussing software projects, tech internships, academic collaborations, or hackathons? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fastest response via email. Always eager to connect with fellow developers, mentors, and engineering teams.
                </p>
              </div>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-violet-500/30 flex items-center justify-between gap-3 shadow-inner">
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Personal Email</div>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-xs sm:text-sm font-semibold text-cyan-300 hover:text-cyan-200 truncate block mt-0.5"
                  >
                    {contactDetails.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Details */}
              <div className="space-y-3 pt-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>{contactDetails.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Timezone: {contactDetails.timezone}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-[11px] font-mono uppercase text-slate-500 mb-3">
                  Professional Profiles
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={contactDetails.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-violet-500/40 hover:bg-slate-850 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>

                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-850 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below or write directly to <span className="text-cyan-400">{contactDetails.email}</span>.
              </p>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Thank you for reaching out! Your message was received and I will reply promptly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {errorMsg && (
                <div className="mb-6 p-3 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Tech Internship Opportunity"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message Content *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your message or opportunity..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-500 font-mono">
                    * Required fields
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-60 flex items-center gap-2 shrink-0 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
