import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame, Zap, CheckCircle2, Code2, Github,
  Twitter, ExternalLink, ArrowRight, Circle, Rss, Shield
} from 'lucide-react';
import CodeStreakLogo from './ui/CodeStreakLogo';

/* ─────────────────────────────────────────────
   Footer 12 – Dark Newsletter Panel + Status Vitals
   Adapted from React Bits Pro Footer 12 pattern
   ───────────────────────────────────────────── */

const STATUS_VITALS = [
  { label: 'API Server',       status: 'operational', uptime: '99.9%' },
  { label: 'DSA Engine',       status: 'operational', uptime: '100%'  },
  { label: 'Revision Queue',   status: 'operational', uptime: '99.7%' },
  { label: 'Streak Tracker',   status: 'operational', uptime: '99.9%' },
];

const NAV_LINKS = {
  Product: [
    { label: 'Dashboard',       href: '#dashboard' },
    { label: 'Daily Planner',   href: '#planner'   },
    { label: 'Problem Tracker', href: '#problems'  },
    { label: 'Roadmap',         href: '#roadmap'   },
    { label: 'Analytics',       href: '#analytics' },
  ],
  Resources: [
    { label: 'LeetCode',      href: 'https://leetcode.com',        external: true },
    { label: 'NeetCode',      href: 'https://neetcode.io',         external: true },
    { label: 'Striver SDE',   href: 'https://takeuforward.org',    external: true },
    { label: 'CP-Algorithms', href: 'https://cp-algorithms.com',   external: true },
  ],
  Company: [
    { label: 'About',   href: '#about'   },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms',   href: '#terms'   },
  ],
};

function StatusDot({ status }) {
  const color = status === 'operational' ? '#22c55e' : '#f59e0b';
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        style={{ background: color }} />
      <span className="relative inline-flex h-2 w-2 rounded-full"
        style={{ background: color }} />
    </span>
  );
}

export default function Footer({ stats = {} }) {
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  const totalSolved = stats.totalProblemsSolved || 42;
  const streak      = stats.user?.streak        || 7;
  const revisionDue = stats.revisionCount       || 3;

  return (
    <footer className="relative z-10 w-full border-t border-white/[0.07] bg-black/95 backdrop-blur-xl overflow-hidden">

      {/* Ambient top glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[200px]
        bg-gradient-to-b from-[#0066FF]/10 to-transparent blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── TOP BAND: Newsletter + Status Vitals ── */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-white/[0.06]">

          {/* Newsletter */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
              bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#38bdf8] text-xs font-semibold">
              <Rss className="w-3 h-3" />
              <span>DSA Tips &amp; Streak Insights</span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Level up your prep,<br />
                <span className="bg-gradient-to-r from-[#0066FF] to-[#38bdf8] bg-clip-text text-transparent">
                  one streak at a time.
                </span>
              </h2>
              <p className="mt-3 text-sm text-slate-400 max-w-md leading-relaxed">
                Get weekly curated DSA patterns, interview tips, and streak challenge drops —
                zero spam, unsubscribe anytime.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubscribe}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <div className="flex-1 relative">
                    <input
                      id="footer-newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      placeholder="your@email.com"
                      className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10
                        text-sm text-white placeholder:text-slate-500
                        focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/40
                        transition-colors"
                    />
                    {error && (
                      <p className="absolute -bottom-5 left-0 text-xs text-red-400">{error}</p>
                    )}
                  </div>
                  <button
                    id="footer-newsletter-submit"
                    type="submit"
                    className="h-11 px-5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052FF]
                      hover:from-[#0055dd] hover:to-[#0040cc] text-white font-bold text-sm
                      flex items-center gap-2 shadow-[0_0_20px_-4px_rgba(0,102,255,0.5)]
                      transition-colors active:scale-95 whitespace-nowrap"
                  >
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10
                    border border-green-500/25 text-green-400 text-sm font-semibold max-w-md"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>You're in! First streak tip lands soon 🚀</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
              <Shield className="w-3.5 h-3.5" /> No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Status Vitals Panel */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-4">

              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  System Status
                </span>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                  <Circle className="w-2 h-2 fill-green-400" /> All Systems Operational
                </span>
              </div>

              {/* Service rows */}
              <div className="space-y-2.5">
                {STATUS_VITALS.map((v) => (
                  <div key={v.label}
                    className="flex items-center justify-between px-3 py-2 rounded-lg
                      bg-white/[0.03] border border-white/[0.05]">
                    <div className="flex items-center gap-2.5">
                      <StatusDot status={v.status} />
                      <span className="text-sm text-slate-300 font-medium">{v.label}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">{v.uptime} uptime</span>
                  </div>
                ))}
              </div>

              {/* Live stats bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {[
                  { icon: Flame, label: 'Day Streak', value: streak    },
                  { icon: Code2, label: 'Solved',     value: totalSolved },
                  { icon: Zap,   label: 'Revisions',  value: revisionDue },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label}
                    className="flex flex-col items-center p-2.5 rounded-lg
                      bg-[#0066FF]/10 border border-[#0066FF]/20">
                    <Icon className="w-4 h-4 text-[#0066FF] mb-1" />
                    <span className="text-base font-black text-white">{value}</span>
                    <span className="text-[10px] text-slate-400 font-medium leading-tight text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MIDDLE BAND: Brand + Nav Links ── */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 border-b border-white/[0.06]">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <CodeStreakLogo size={28} textSize="text-base" showText animated={false} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
              Your personalized DSA roadmap to ace technical coding interviews — built for consistency.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github,  href: 'https://github.com',  label: 'GitHub'  },
                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                    text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(NAV_LINKS).map(([group, links]) => (
            <div key={group} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{group}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-1 text-sm text-slate-400 hover:text-white
                        transition-colors group"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAND: Copyright ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © 2026 Zero Hesitation. Built with ❤️ for DSA grinders.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            <span className="text-[#0066FF] font-semibold">React</span>
            <span className="text-slate-600 mx-0.5">·</span>
            <span className="text-[#0066FF] font-semibold">Tailwind</span>
            <span className="text-slate-600 mx-0.5">·</span>
            <span className="text-[#0066FF] font-semibold">Framer Motion</span>
            <span className="text-slate-600 mx-0.5">·</span>
            <span className="text-[#0066FF] font-semibold">Node.js</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
