import React, { useState, useEffect } from 'react';
import Navbar, { navTabs } from './components/Navbar';
import BottomNavBar from './components/ui/bottom-nav-bar';
import Dashboard from './components/Dashboard';
import DailyPlanner from './components/DailyPlanner';
import ProblemTracker from './components/ProblemTracker';
import RoadmapView from './components/RoadmapView';
import RevisionQueue from './components/RevisionQueue';
import StatsCharts from './components/StatsCharts';
import FocusTimer from './components/FocusTimer';
import AddTaskModal from './components/AddTaskModal';
import AddProblemModal from './components/AddProblemModal';
import AuthModal from './components/AuthModal';
import Particles from './components/reactbits/Particles';
import { api } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [tasks, setTasks] = useState([]);
  const [problems, setProblems] = useState([]);
  const [roadmap, setRoadmap] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [stats, setStats] = useState({
    user: { streak: 7, name: 'Alex' },
    totalProblemsSolved: 42,
    difficultyCounts: { Easy: 18, Medium: 20, Hard: 4 },
    statusCounts: { Independently: 28, NeededHint: 10, LookedAtSolution: 4 },
    revisionCount: 3,
    heatmaps: []
  });
  
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load initial data & auth state
  const loadData = async () => {
    try {
      const [fetchedTasks, fetchedProblems, fetchedRoadmap, fetchedStats, userProfile] = await Promise.all([
        api.getTasks(),
        api.getProblems(),
        api.getRoadmap(),
        api.getStats(),
        api.getCurrentUser()
      ]);
      setTasks(fetchedTasks || []);
      setProblems(fetchedProblems || []);
      setRoadmap(fetchedRoadmap || []);
      setStats(fetchedStats || {});
      if (userProfile) setCurrentUser(userProfile);
    } catch (err) {
      console.warn("Failed to load backend data, fallback active", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    loadData();
  };

  const handleLogout = async () => {
    await api.logout();
    setCurrentUser(null);
    loadData();
  };

  // Today's tasks for dashboard
  const todayStr = new Date().toISOString().split('T')[0];
  const todayTasks = tasks.filter(t => t.date === todayStr);

  // Task actions
  const handleToggleTask = async (id) => {
    const updated = await api.toggleTask(id);
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    const newStats = await api.getStats();
    setStats(newStats);
  };

  const handleAddTask = async (taskData) => {
    const newTask = await api.createTask(taskData);
    setTasks(prev => [newTask, ...prev]);
    const newStats = await api.getStats();
    setStats(newStats);
  };

  const handleCarryOverTask = async (id, targetDate) => {
    const updated = await api.carryOverTask(id, targetDate);
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return { ...t, date: targetDate || tomorrow.toISOString().split('T')[0], carriedOver: true };
      }
      return t;
    }));
  };

  const handleDeleteTask = async (id) => {
    await api.deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  // Problem actions
  const handleAddProblem = async (problemData) => {
    const newProblem = await api.createProblem(problemData);
    setProblems(prev => [newProblem, ...prev]);
    const newStats = await api.getStats();
    setStats(newStats);
  };

  const handleToggleRevision = async (id) => {
    await api.toggleRevision(id);
    setProblems(prev => prev.map(p => p.id === id ? { ...p, needsRevision: !p.needsRevision } : p));
    const newStats = await api.getStats();
    setStats(newStats);
  };

  const handleDeleteProblem = async (id) => {
    await api.deleteProblem(id);
    setProblems(prev => prev.filter(p => p.id !== id));
    const newStats = await api.getStats();
    setStats(newStats);
  };

  // Roadmap actions
  const handleToggleRoadmapTopic = async (weekNum, topicIndex) => {
    await api.toggleRoadmapTopic(weekNum, topicIndex);
    const updatedRoadmap = await api.getRoadmap();
    setRoadmap(updatedRoadmap);
  };

  // Active tab index for bottom-nav-bar
  const activeIndex = navTabs.findIndex(t => t.id === activeTab);
  const handleTabChange = (idx, item) => {
    if (item?.id) {
      setActiveTab(item.id);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-100 flex flex-col selection:bg-brand-500 selection:text-black overflow-x-hidden pb-20 md:pb-0">
      
      {/* React Bits Ambient Background Particles */}
      <Particles
        particleColors={['#22c55e', '#06b6d4', '#a855f7', '#f97316']}
        particleCount={28}
        speed={0.12}
        alpha={0.25}
      />

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        streak={stats.user?.streak || 7}
        onOpenTaskModal={() => setIsTaskModalOpen(true)}
        onOpenProblemModal={() => setIsProblemModalOpen(true)}
        onToggleTimer={() => setIsTimerOpen(!isTimerOpen)}
        isTimerActive={isTimerOpen}
        revisionCount={problems.filter(p => p.needsRevision).length}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <Dashboard
            stats={stats}
            todayTasks={todayTasks}
            onToggleTask={handleToggleTask}
            onOpenTaskModal={() => setIsTaskModalOpen(true)}
            onOpenProblemModal={() => setIsProblemModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'planner' && (
          <DailyPlanner
            tasks={tasks.filter(t => t.date === selectedDate)}
            onToggleTask={handleToggleTask}
            onCarryOverTask={handleCarryOverTask}
            onDeleteTask={handleDeleteTask}
            onOpenTaskModal={() => setIsTaskModalOpen(true)}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}

        {activeTab === 'problems' && (
          <ProblemTracker
            problems={problems}
            onToggleRevision={handleToggleRevision}
            onDeleteProblem={handleDeleteProblem}
            onOpenProblemModal={() => setIsProblemModalOpen(true)}
          />
        )}

        {activeTab === 'roadmap' && (
          <RoadmapView
            roadmap={roadmap}
            onToggleTopic={handleToggleRoadmapTopic}
          />
        )}

        {activeTab === 'revision' && (
          <RevisionQueue
            problems={problems}
            onToggleRevision={handleToggleRevision}
          />
        )}

        {activeTab === 'analytics' && (
          <StatsCharts
            stats={stats}
          />
        )}
      </main>

      {/* Floating Bottom Nav Bar (Shadcn + Framer Motion Pattern) */}
      <div className="md:hidden">
        <BottomNavBar
          stickyBottom
          items={navTabs}
          activeIndex={activeIndex !== -1 ? activeIndex : 0}
          onTabChange={handleTabChange}
          revisionCount={problems.filter(p => p.needsRevision).length}
        />
      </div>

      {/* Floating Focus Stopwatch / Timer */}
      <FocusTimer
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Modals */}
      <AddTaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onAddTask={handleAddTask}
        defaultDate={selectedDate}
      />

      <AddProblemModal
        isOpen={isProblemModalOpen}
        onClose={() => setIsProblemModalOpen(false)}
        onAddProblem={handleAddProblem}
      />

      {/* Mobile OTP Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onAuthSuccess={handleAuthSuccess}
        onLogout={handleLogout}
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 CodeStreak • Built with Shadcn UI pattern & Framer Motion</p>
          <p className="text-slate-400">
            Frontend: <span className="text-brand-400">React + Tailwind + Framer Motion</span> | Backend: <span className="text-brand-400">Node.js + Express</span>
          </p>
        </div>
      </footer>

    </div>
  );
}
