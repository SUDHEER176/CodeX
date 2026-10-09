import React from 'react';
import HeroSection from "./hero-01-utils/hero";
import Header from "./hero-01-utils/header";
import BrandSlider from "./hero-01-utils/brand-slider";

export default function AgencyHeroSection({
  stats,
  todayTasks = [],
  onOpenTaskModal,
  onOpenProblemModal,
  onOpenAuthModal,
  onNavigate,
  activeTab,
  currentUser
}) {
  const avatarList = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    },
  ];

  const navigationData = [
    {
      title: "Dashboard",
      id: "dashboard",
      isActive: activeTab === "dashboard",
    },
    {
      title: "Daily Planner",
      id: "planner",
      isActive: activeTab === "planner",
    },
    {
      title: "Problem Tracker",
      id: "problems",
      isActive: activeTab === "problems",
    },
    {
      title: "Roadmap",
      id: "roadmap",
      isActive: activeTab === "roadmap",
    },
    {
      title: "Revision Queue",
      id: "revision",
      isActive: activeTab === "revision",
    },
    {
      title: "Analytics",
      id: "stats",
      isActive: activeTab === "stats",
    },
  ];

  const brandList = [
    {
      logo: "https://cdn.simpleicons.org/google/ffffff",
      name: "Google",
    },
    {
      logo: "https://cdn.simpleicons.org/meta/ffffff",
      name: "Meta",
    },
    {
      logo: "https://cdn.simpleicons.org/amazon/ffffff",
      name: "Amazon",
    },
    {
      logo: "https://cdn.simpleicons.org/apple/ffffff",
      name: "Apple",
    },
    {
      logo: "https://cdn.simpleicons.org/microsoft/ffffff",
      name: "Microsoft",
    },
    {
      logo: "https://cdn.simpleicons.org/netflix/ffffff",
      name: "Netflix",
    },
    {
      logo: "https://cdn.simpleicons.org/uber/ffffff",
      name: "Uber",
    },
    {
      logo: "https://cdn.simpleicons.org/stripe/ffffff",
      name: "Stripe",
    },
    {
      logo: "https://cdn.simpleicons.org/leetcode/ffffff",
      name: "LeetCode",
    },
  ];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-white/[0.08] bg-black shadow-xl">
      <HeroSection
        avatarList={avatarList}
        stats={stats}
        onOpenProblemModal={onOpenProblemModal}
        onOpenTaskModal={onOpenTaskModal}
        onNavigate={onNavigate}
      />
      <BrandSlider brandList={brandList} />
    </div>
  );
}
