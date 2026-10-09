# 🔥 CodeStreak — Full-Stack DSA Learning Planner & Problem Tracker

<div align="center">

![CodeStreak](https://img.shields.io/badge/CodeStreak-DSA%20Platform-ff5500?style=for-the-badge&logo=codeforces&logoColor=white)
![React](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**A high-performance, dark-themed daily DSA learning planner, LeetCode problem tracker, consistency streak manager, and structured interview roadmap platform.**

</div>

---

## 📖 Table of Contents
- [✨ What We've Built](#-what-weve-built)
- [🎨 Design System & Aesthetics](#-design-system--aesthetics)
- [📱 Mobile OTP Authentication](#-mobile-otp-authentication)
- [🧩 Key UI & Feature Components](#-key-ui--feature-components)
- [📁 Project Architecture](#-project-architecture)
- [⚡ Quick Start Guide](#-quick-start-guide)
- [🌐 REST API Specification](#-rest-api-specification)
- [🖋️ Typography & Fonts](#️-typography--fonts)

---

## ✨ What We've Built

### 1. 🚀 React Bits Pro "Hero 22" Block
- **Signature Mesh Gradient**: Dynamic animated canvas shader mesh gradient with customizable color stops (`#ff5500`, `#ff3300`, `#2563eb`, `#1e1b4b`) and subtle grain texture.
- **Glassmorphic Launch Header**: Dynamic streak badges, real-time problem metrics, quick action CTA triggers, and clean navigation shortcuts.

### 2. 📋 React Bits Pro "Features 13" Block
- **Accordion List with Live Preview Panel**: 4 interactive feature accordions with active indicator bars on the left and a live, animated preview panel on the right rendering dynamic mockups (Daily Task Sprint, Problem Detail with complexity breakdown, Spaced Repetition Queue, and Roadmap Milestone gauge).

### 3. 🎯 React Bits Pro "Stats 15" Block
- **Coverage Dial with Automation Ledger**: Large dual coverage radial gauge with animated SVG tracks, central percentage readout, comparison legend, and a 3-row automation ledger with mini circular progress dials.

### 4. 🔄 React Bits Pro "Social Proof 9" Block
- **Two-Direction Minimal Logo Marquee**: Dual continuous opposing marquees featuring top target engineering companies (Google, Meta, OpenAI, Stripe, Amazon, Apple, Palantir, etc.) with side-fade masks on pure black.

### 5. 🛠️ React Bits Pro "How It Works 7" Block
- **Four Steps around an Arched Live Simulator**: 4 interactive progression milestones (Roadmap selection, Daily practice, Spaced repetition, Streak analytics) wrapping around a central arched terminal simulator with live benchmark stats.

### 6. 🟩 Motion-Animated Activity Heatmap
- **Contribution-Style Calendar**: Interactive grid with diagonal wave reveals, digit-by-digit rolling totals, spring-gliding hover tooltips, and level filter swatches.

### 3. 🍱 Magic UI Bento Grid Showcase
- **Modern Feature Grid**: 4 interactive cards detailing the core system features:
  - **Structured Syllabus**: Visual milestone indicators with progress completion percentages.
  - **Active Streak Heatmap**: 7-day visual consistency matrix.
  - **Spaced Repetition Engine**: Automated revision queue for tricky problems.
  - **Interview Performance Analytics**: Topic and difficulty breakdowns.

### 3. 📜 Magic UI Animated Feed (Daily LeetCode Curriculum)
- **Staggered Animated Notification Feed**: Curated problem recommendations with live difficulty badges (Easy / Medium / Hard), topic tags, and direct external problem links.

### 4. 📲 Mobile Number OTP Authentication
- **Full-Stack Passwordless Login**:
  - **Backend**: Generates secure 6-digit OTPs, handles verification, and issues auth tokens.
  - **Frontend**: Clean 6-digit auto-advancing OTP input modal with resend countdown timer and user session badge in navbar.

### 5. 🗺️ Structured Weekly DSA Roadmap
- **Sleek Module Milestone Nodes**: Clean dark glass indicators (`WK 01`, `WK 02`, etc.) with glowing status indicators (Completed, Current Focus, Upcoming).
- **Interactive Checkpoints**: Drill checklists with live completion progress gauges.
- **Pace Modes**: Toggle between **6-Week Master** and **4-Week Sprint** syllabus tracks.

### 6. 📊 Core Productivity & Tracking Tools
- **Daily Study Planner**: Task creation, priority tags, time estimates, and 1-click **Carry Forward** for incomplete tasks.
- **Problem Tracker**: Multi-filter problem log (Topic, Difficulty, Status, Notes, Approach reflection).
- **Spaced Repetition Revision Queue**: Auto-flags problems where hints/solutions were needed.
- **90-Day GitHub-Style Heatmap**: Visual streak and activity intensity tracker.
- **DSA Sprint Focus Timer**: Built-in Pomodoro sprint stopwatch (25m / 45m / 60m).
- **Interactive Confetti Celebrations**: Real-time celebration effects when completing daily tasks or marking problems solved.

---

## 🎨 Design System & Aesthetics

- **Color Palette**: Pure Black Theme (`#000000`), Dark Glass Slate (`#090d16`), with vivid Flame Orange (`#ff5500`) and Emerald Green (`#10b981`) accents.
- **Glassmorphism**: Soft background blurs (`backdrop-blur-xl`), ultra-thin white borders (`border-white/10`), and deep drop shadows.
- **Brand Logo**: Custom SVG hexagonal emblem with an aggressive flame streak slash.

---

## 📁 Project Architecture

```text
CodeStreak/
├── frontend/                          # React 18 + Vite + Tailwind CSS
│   ├── index.html                     # Preconnected Google Fonts & Root DOM
│   ├── package.json                   # Dependencies & Scripts
│   ├── tailwind.config.js             # Extended color tokens & typography
│   ├── vite.config.js                 # Vite dev server configuration
│   └── src/
│       ├── main.jsx                   # React Entry Point
│       ├── App.jsx                    # Application Shell & Tab Router
│       ├── index.css                  # Global styles, fonts & glass classes
│       ├── components/
│       │   ├── Hero22.jsx             # React Bits Pro Launch Hero Block
│       │   ├── BentoFeatures.jsx      # Magic UI Bento Grid Feature Section
│       │   ├── DailyLeetCodeFeed.jsx  # Magic UI Animated List Feed
│       │   ├── AuthModal.jsx          # Mobile Number OTP Login Modal
│       │   ├── Navbar.jsx             # Top Nav with Profile & Streak
│       │   ├── Dashboard.jsx          # Overview Cards & Daily Metrics
│       │   ├── DailyPlanner.jsx       # Task Planner with Carry-Over
│       │   ├── ProblemTracker.jsx     # LeetCode Log with Multi-Filters
│       │   ├── RoadmapView.jsx        # Milestone Roadmap & Syllabus
│       │   ├── HeatmapCalendar.jsx    # 90-Day Consistency Heatmap
│       │   ├── StatsCharts.jsx        # Recharts Analytics Dashboards
│       │   ├── RevisionQueue.jsx      # Spaced Repetition Queue
│       │   ├── FocusTimer.jsx         # Pomodoro Sprint Timer
│       │   ├── AddTaskModal.jsx       # Task Creation Dialog
│       │   ├── AddProblemModal.jsx    # Problem Logging Dialog
│       │   ├── reactbits/
│       │   │   ├── MeshGradient.jsx   # Shader Mesh Gradient Canvas
│       │   │   ├── SpotlightCard.jsx  # Mouse-tracking Spotlight Glow
│       │   │   ├── CountUp.jsx        # Smooth Numeric Rollup
│       │   │   ├── ShinyText.jsx      # Shimmering Metallic Text
│       │   │   └── DecryptedText.jsx  # Unscramble Text Animation
│       │   └── ui/
│       │       ├── CodeStreakLogo.jsx # Brand Hexagonal Emblem Logo
│       │       ├── bento-grid.jsx     # Bento Grid & Card Components
│       │       ├── animated-list.jsx  # Animated Notification Stream
│       │       └── animated-circular-progress-bar.jsx # Circular Radial Gauge
│       ├── data/
│       │   └── initialData.js         # Curated problems & seed syllabus
│       └── services/
│           └── api.js                 # Unified API Client with Offline Fallback
│
└── backend/                           # Node.js + Express REST API
    ├── package.json                   # Backend Dependencies
    ├── server.js                      # Express App, CORS & Route Registry
    ├── routes/
    │   ├── auth.js                    # Mobile OTP Authentication Endpoints
    │   ├── tasks.js                   # Daily Tasks CRUD & Carry-over
    │   ├── problems.js                # Problem Tracker & Revision Endpoints
    │   ├── roadmap.js                 # Roadmap Modules & Subtopics
    │   └── stats.js                   # Aggregated Metrics & Heatmap Data
    └── data/
        └── store.js                   # JSON Database Engine & Initial State
```

---

## ⚡ Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- `npm` or `yarn`

### 1. Run the Backend API Server
```bash
cd backend
npm install
npm run dev
```
> Server runs on: `http://localhost:5000`  
> Health check: `http://localhost:5000/api/health`

### 2. Run the Frontend Client
```bash
cd frontend
npm install
npm run dev
```
> App runs on: `http://localhost:3000` (or Vite assigned port)

*Note: The frontend includes full offline support with `localStorage` fallback if the backend is not running.*

---

## 🌐 REST API Specification

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/send-otp` | Send 6-digit OTP to mobile number |
| `POST` | `/api/auth/verify-otp` | Verify OTP and issue session token |
| `GET` | `/api/auth/me` | Fetch active authenticated user profile |
| `GET` | `/api/tasks` | Get all tasks for the current day |
| `POST` | `/api/tasks` | Create a new daily study task |
| `PATCH` | `/api/tasks/:id/toggle` | Toggle task completion status |
| `POST` | `/api/tasks/carry-forward` | Carry over incomplete tasks to today |
| `GET` | `/api/problems` | Retrieve all logged solved problems |
| `POST` | `/api/problems` | Log a new solved problem |
| `PATCH` | `/api/problems/:id/revision` | Toggle spaced repetition flag |
| `GET` | `/api/roadmap` | Get weekly structured roadmap syllabus |
| `PATCH` | `/api/roadmap/toggle-topic` | Update subtopic checkpoint progress |
| `GET` | `/api/stats` | Aggregated metrics, streak & heatmap points |

---

## 🖋️ Typography & Fonts

The application supports a flexible font system configured in `index.css`, `index.html`, and `tailwind.config.js`:

- **Default Body**: `Outfit` / `Inter` (`font-sans`)
- **Typeface Utilities**:
  - `font-outfit`: Modern, geometric sans-serif
  - `font-inter`: High-legibility UI typography
  - `font-josefin`: Clean editorial sans
  - `font-clarity`: Geometric clarity font
  - `font-roboto`: Classical clean sans
  - `font-mono`: `JetBrains Mono` for code snippets, difficulty tags, and metrics

---

<div align="center">
  <sub>Built with ❤️ for passionate engineers mastering Data Structures & Algorithms.</sub>
</div>
