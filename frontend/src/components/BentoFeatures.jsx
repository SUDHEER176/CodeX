import React from 'react';
import { 
  FlatRoadmapIcon, 
  FlatRecallIcon, 
  FlatTimerIcon, 
  FlatAnalyticsIcon 
} from './ui/FlatIcons';
import { BentoGrid, BentoCard } from './ui/bento-grid';

export default function BentoFeatures({ 
  stats = {}, 
  setActiveTab, 
  onOpenTaskModal, 
  onOpenProblemModal,
  onToggleTimer 
}) {
  const streakDays = stats.user?.streak || 7;
  const totalSolved = stats.totalProblemsSolved || 42;
  const revisionCount = stats.revisionCount || 3;

  const features = [
    {
      Icon: FlatRoadmapIcon,
      name: "Structured FAANG Roadmap",
      description: "Step-by-step topic mastery from Arrays to Dynamic Programming with curated LeetCode problems.",
      cta: "Open Syllabus Roadmap",
      badge: "6-Week Master",
      className: "col-span-1 md:col-span-2",
      onClick: () => setActiveTab && setActiveTab('roadmap'),
    },
    {
      Icon: FlatRecallIcon,
      name: "Smart Spaced Repetition",
      description: "Never forget a tricky problem. Automated reminder queue for problems where you needed hints.",
      cta: "Review Revision Queue",
      badge: `${revisionCount} Due Today`,
      className: "col-span-1 md:col-span-1",
      onClick: () => setActiveTab && setActiveTab('revision'),
    },
    {
      Icon: FlatTimerIcon,
      name: "Interview Sprint Timer",
      description: "Simulate real OA & interview time constraints with 20m, 45m, and custom DSA focus timers.",
      cta: "Start Focus Sprint",
      badge: "Pomodoro Engine",
      className: "col-span-1 md:col-span-1",
      onClick: onToggleTimer,
    },
    {
      Icon: FlatAnalyticsIcon,
      name: "Streak & Consistency Analytics",
      description: "Visualize daily problem distributions across Easy, Medium, and Hard tiers with submission heatmaps.",
      cta: "View Full Analytics",
      badge: `${totalSolved} Total Logged`,
      className: "col-span-1 md:col-span-2",
      onClick: () => setActiveTab && setActiveTab('analytics'),
    },
  ];

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-white font-heading">
            Feature Ecosystem
          </h2>
          <p className="text-sm text-slate-400">
            Everything you need to stay disciplined and conquer coding interviews.
          </p>
        </div>
      </div>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
