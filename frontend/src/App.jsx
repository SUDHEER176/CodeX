import React, { useState, useEffect } from 'react';
import Navbar, { navTabs } from './components/Navbar';
import BottomNavBar from './components/ui/bottom-nav-bar';
import Dashboard from './components/Dashboard';
import FocusTimer from './components/FocusTimer';
import AddTaskModal from './components/AddTaskModal';
import AddProblemModal from './components/AddProblemModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
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
      if (item.id === 'dashboard') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Scroll spy to keep activeTab in sync with scroll position across sections
  useEffect(() => {
    const sectionIds = ['analytics', 'revision', 'roadmap', 'problems', 'planner'];
    const handleScroll = () => {
      if (window.scrollY < 350) {
        setActiveTab('dashboard');
        return;
      }
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 100) {
            setActiveTab(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 flex flex-col selection:bg-brand-500 selection:text-black overflow-x-hidden pb-20 md:pb-0">
      
      {/* React Bits Ambient Background Particles */}
      <Particles
        particleColors={['#0066FF', '#00C2FF', '#38bdf8', '#818cf8']}
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

      {/* Main Content Area: Unified Dashboard with all sections */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard
          stats={stats}
          todayTasks={todayTasks}
          onToggleTask={handleToggleTask}
          onOpenTaskModal={() => setIsTaskModalOpen(true)}
          onOpenProblemModal={() => setIsProblemModalOpen(true)}
          onOpenAuthModal={() => setIsAuthModalOpen(true)}
          currentUser={currentUser}
          setActiveTab={setActiveTab}
        />
      </main>

      {/* Footer 12 – Always at the bottom of the Dashboard */}
      <Footer stats={stats} />

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



    </div>
  );
}
