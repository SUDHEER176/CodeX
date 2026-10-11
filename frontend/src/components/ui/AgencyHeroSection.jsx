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
    { name: "Google" },
    { name: "Microsoft" },
    { name: "Amazon" },
    { name: "Meta" },
    { name: "Apple" },
    { name: "Netflix" },
    { name: "Stripe" },
    { name: "LeetCode" },
    { name: "OpenAI" },
    { name: "Uber" },
    { name: "Airbnb" },
    { name: "Spotify" },
    { name: "Adobe" },
    { name: "Palantir" },
    { name: "Databricks" },
    { name: "Coinbase" }
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
