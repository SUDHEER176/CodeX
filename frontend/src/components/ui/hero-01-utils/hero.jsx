import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Star, 
  ShieldCheck, 
  Award
} from 'lucide-react';

/**
 * Hero Section with clean modern typography (non-bold) and pure black background
 */
export default function HeroSection({
  avatarList = [],
  title = "Accelerate Your DSA Preparation with Relentless Consistency.",
  subtitle = "The structured learning roadmap, spaced-repetition revision queue, and streak tracker built to help engineers crack Tier-1 tech interviews.",
  onOpenProblemModal,
  onOpenTaskModal,
  onNavigate,
  stats = {}
}) {
  const defaultAvatars = [
    { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
    { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
    { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  ];

  const avatars = avatarList.length > 0 ? avatarList : defaultAvatars;

  return (
    <section className="relative w-full pt-14 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-black text-white">
      
      {/* Subtle fine grid pattern on pure black */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-20" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-7">
        
        {/* Social Proof + Rating Stacked Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 shadow-sm backdrop-blur-md"
        >
          {/* Stacked Avatars */}
          <div className="flex items-center -space-x-2">
            {avatars.slice(0, 4).map((av, idx) => (
              <img
                key={idx}
                src={av.image}
                alt={`Learner ${idx + 1}`}
                className="w-7 h-7 rounded-full border border-black object-cover"
              />
            ))}
          </div>

          {/* Rating Stars & Count */}
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-normal">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-medium">4.9/5</span>
            <span className="text-slate-400 font-normal">from 15,000+ active coders</span>
          </div>
        </motion.div>

        {/* Main Headline (Clean typography, non-bold) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
            Master Daily DSA with <br />
            <span className="text-[#0066FF] font-medium">
              Zero Hesitation.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Primary and Secondary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onOpenProblemModal}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052FF] text-white font-medium text-sm shadow-[0_0_25px_rgba(0,102,255,0.4)] transition-all active:scale-95"
          >
            <Code2 className="w-4 h-4 text-white stroke-[2]" />
            <span>Start Daily Problem</span>
            <ArrowRight className="w-4 h-4 text-white stroke-[2]" />
          </button>

          <button
            onClick={() => onNavigate && onNavigate('roadmap')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-normal text-sm border border-white/10 transition-all hover:border-white/20 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Explore Curated Roadmap</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-normal text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>450+ Curated Interview Problems</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#0066FF]" />
            <span>Spaced Repetition Engine</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Instant Complexity Analyzer</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
