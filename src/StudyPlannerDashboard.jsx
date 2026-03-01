import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Calendar,
  CheckCircle2,
  Trophy,
  Target,
  X,
  User,
  Mail,
  Lock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const StudyPlannerDashboard = () => {
  const { examId } = useParams();
  const [activeTab, setActiveTab] = useState('OVERALL');
  const [expandedSection, setExpandedSection] = useState('VERBAL ABILITY');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Used for modal toggle (Sign In vs Sign Up)
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Actual auth state set to true by default
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1)); // March 2026
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const subjects = [
    { name: 'Verbal Ability', progress: 0, attempts: 0, accuracy: 0 },
    { name: 'Data Analysis and Logical Reasoning', progress: 0, attempts: 0, accuracy: 0 },
    { name: 'Quantitative Ability', progress: 0, attempts: 0, accuracy: 0 },
  ];

  const tabs = ['OVERALL', 'VERBAL ABILITY', 'DATA ANALYSIS AND LOGICAL REASONING', 'QUANTITATIVE ABILITY'];

  const sections = {
    'VERBAL ABILITY': [
      'Critical Reasoning',
      'Verbal Reasoning',
      'Vocabulary',
      'Error Identification',
      'Reading Comprehension'
    ],
    'DATA ANALYSIS AND LOGICAL REASONING': [
      'Data Interpretation',
      'Logic Based Games',
      'Analytical Reasoning',
      'Visual Reasoning'
    ],
    'QUANTITATIVE ABILITY': [
      'Arithmetic',
      'Algebra',
      'Geometry',
      'Number System',
      'Mensuration'
    ]
  };

  const goals = isAuthenticated ? [
    { name: 'Verbal Ability', pts: 87 },
    { name: 'Data Analysis and Logical Reasoning', pts: 93 },
  ] : [
    { name: 'Verbal Ability', pts: 0 },
    { name: 'Data Analysis and Logical Reasoning', pts: 0 },
  ];

  const performanceData = isAuthenticated ? {
    'VERBAL ABILITY': {
      accuracy: 78,
      questionsAttempted: 245,
      timeSpent: '8.5 hrs',
      performanceGap: 12,
      weakTopics: ['Reading Comprehension', 'Critical Reasoning'],
      strongTopics: ['Vocabulary', 'Error Identification'],
      trend: 'improving',
      averageScore: 7.8,
    },
    'DATA ANALYSIS AND LOGICAL REASONING': {
      accuracy: 82,
      questionsAttempted: 189,
      timeSpent: '6.2 hrs',
      performanceGap: 8,
      weakTopics: ['Visual Reasoning', 'Logic Based Games'],
      strongTopics: ['Data Interpretation', 'Analytical Reasoning'],
      trend: 'stable',
      averageScore: 8.2,
    },
    'QUANTITATIVE ABILITY': {
      accuracy: 71,
      questionsAttempted: 312,
      timeSpent: '10.1 hrs',
      performanceGap: 19,
      weakTopics: ['Geometry', 'Mensuration'],
      strongTopics: ['Number System', 'Arithmetic'],
      trend: 'declining',
      averageScore: 7.1,
    }
  } : {
    'VERBAL ABILITY': {
      accuracy: 0,
      questionsAttempted: 0,
      timeSpent: '0 hrs',
      performanceGap: 0,
      weakTopics: [],
      strongTopics: [],
      trend: 'stable',
      averageScore: 0,
    },
    'DATA ANALYSIS AND LOGICAL REASONING': {
      accuracy: 0,
      questionsAttempted: 0,
      timeSpent: '0 hrs',
      performanceGap: 0,
      weakTopics: [],
      strongTopics: [],
      trend: 'stable',
      averageScore: 0,
    },
    'QUANTITATIVE ABILITY': {
      accuracy: 0,
      questionsAttempted: 0,
      timeSpent: '0 hrs',
      performanceGap: 0,
      weakTopics: [],
      strongTopics: [],
      trend: 'stable',
      averageScore: 0,
    }
  };

  const topicPerformance = isAuthenticated ? {
    'Critical Reasoning': { progress: 65, accuracy: 72, attempts: 48, difficulty: 'Hard' },
    'Verbal Reasoning': { progress: 78, accuracy: 81, attempts: 52, difficulty: 'Medium' },
    'Vocabulary': { progress: 92, accuracy: 95, attempts: 67, difficulty: 'Easy' },
    'Error Identification': { progress: 85, accuracy: 88, attempts: 54, difficulty: 'Medium' },
    'Reading Comprehension': { progress: 58, accuracy: 65, attempts: 45, difficulty: 'Hard' },
    'Data Interpretation': { progress: 88, accuracy: 90, attempts: 42, difficulty: 'Medium' },
    'Logic Based Games': { progress: 62, accuracy: 68, attempts: 35, difficulty: 'Hard' },
    'Analytical Reasoning': { progress: 82, accuracy: 85, attempts: 48, difficulty: 'Medium' },
    'Visual Reasoning': { progress: 71, accuracy: 75, attempts: 38, difficulty: 'Hard' },
    'Arithmetic': { progress: 78, accuracy: 82, attempts: 65, difficulty: 'Medium' },
    'Algebra': { progress: 68, accuracy: 72, attempts: 58, difficulty: 'Hard' },
    'Geometry': { progress: 52, accuracy: 58, attempts: 52, difficulty: 'Hard' },
    'Number System': { progress: 85, accuracy: 88, attempts: 62, difficulty: 'Medium' },
    'Mensuration': { progress: 48, accuracy: 55, attempts: 45, difficulty: 'Hard' },
  } : {};

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const handlePracticeClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      // Handle actual practice logic here
      console.log("Start practice");
    }
  };

  const handleCalendarClick = () => {
    setShowCalendar(true);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowLoginModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] font-sans antialiased text-[#1E293B] pb-20">{/* Top Navbar */}
      <nav className="bg-gradient-to-r from-cm-primary to-cm-teal text-white px-4 py-2 flex items-center justify-between shadow-md relative z-50">
        <h1 className="text-2xl font-black tracking-tight uppercase">Study Planner</h1>

        <div className="relative">
          {isAuthenticated ? (
            <div
              className="flex items-center gap-3 cursor-pointer hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <span className="text-sm font-medium">Tej</span>
              <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tej" alt="User Profile" />
              </div>
              <ChevronDown size={16} className={`transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
            </div>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-white text-[#1732C4] px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors shadow-sm"
            >
              Login
            </button>
          )}

          {/* Profile Dropdown */}
          <AnimatePresence>
            {showProfileDropdown && isAuthenticated && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
              >
                {/* Triangle pointer */}
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-slate-100"></div>

                <div className="py-2 relative z-10 bg-white">
                  <Link to="/" className="block px-5 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#1732C4] transition-colors border-b border-slate-100">Home</Link>
                  <Link to="#" className="block px-5 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#1732C4] transition-colors border-b border-slate-100">Leaderboards</Link>
                  <Link to="#" className="block px-5 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#1732C4] transition-colors border-b border-slate-100">My Achievements</Link>
                  <Link to="#" className="block px-5 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#1732C4] transition-colors border-b border-slate-100">Purchase Plan</Link>
                  <Link to="/select-stream" className="block px-5 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-[#1732C4] transition-colors border-b border-slate-100">Switch Category</Link>
                  <button
                    onClick={() => {
                      setIsAuthenticated(false);
                      setShowProfileDropdown(false);
                    }}
                    className="w-full text-left block px-5 py-3 text-[15px] text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors"
                  >
                    Exit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumbs & Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-cm-primary to-cm-accent-blue text-white px-4 py-2 text-sm font-bold skew-x-[-15deg] origin-left -ml-2 pl-6">
              <span className="skew-x-[15deg] inline-block">STUDY PLANNER</span>
            </div>
            <div className="px-6 py-2 text-sm font-bold text-slate-500 uppercase">
              {examId?.replace(/-/g, ' ') || 'MBA ENTRANCE'}
            </div>
          </div>

          <button
            onClick={() => setShowGuidelines(true)}
            className="bg-gradient-to-r from-cm-primary to-cm-accent-blue hover:from-cm-dark hover:to-cm-primary text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md"
          >
            Guidelines/Instructions
          </button>
        </div>

        {/* Top Summary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Subject Progress Cards */}
          {subjects.map((subject, idx) => {
            const attemptCount = isAuthenticated ? (performanceData[subject.name.toUpperCase()]?.questionsAttempted || 0) : 0;
            const accuracy = isAuthenticated ? (performanceData[subject.name.toUpperCase()]?.accuracy || 0) : 0;
            const progress = isAuthenticated ? Math.min(Math.round((attemptCount / 400) * 100), 100) : 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5 rgba(0,0,0,0.1)' }}
                className="bg-gradient-to-br from-[#F3F3F3] to-white rounded-2xl shadow-lg border border-[#E0E7FF] overflow-hidden group hover:border-[#1732C4] hover:border-opacity-50 transition-all cursor-pointer"
              >
                <div className="bg-gradient-to-r from-cm-primary via-cm-teal to-cm-green h-1.5"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-base font-black text-slate-800 group-hover:text-[#1732C4] transition-colors leading-tight max-w-[60%]">{subject.name}</h3>
                    <div className="text-2xl font-black bg-gradient-to-r from-cm-primary to-cm-teal bg-clip-text text-transparent">{accuracy}%</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-600 font-bold">Progress</span>
                      <span className="text-slate-700 font-black">{progress}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-cm-primary via-cm-teal to-cm-green shadow-lg rounded-full"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <div className="bg-gradient-to-br from-[#E0E7FF] to-[#F0E7FF] rounded-lg p-2 text-center border border-[#1732C4] border-opacity-10">
                        <div className="text-[11px] text-slate-600 font-bold">Attempts</div>
                        <div className="text-sm font-black text-cm-primary">{attemptCount}</div>
                      </div>
                      <div className="bg-gradient-to-br from-[#F0FDF4] to-[#E0FFE7] rounded-lg p-2 text-center border border-[#00D084] border-opacity-10">
                        <div className="text-[11px] text-slate-600 font-bold">Accuracy</div>
                        <div className="text-sm font-black text-cm-success">{accuracy}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Deadline Card */}
          <div
            onClick={handleCalendarClick}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg hover:border-blue-300 transition-all"
          >
            <div className="text-sm font-bold text-slate-500 uppercase mb-2">Deadline</div>
            <div className="text-xl font-black text-red-500 mb-4">Mar 12, 2026</div>
            <div className="relative mb-2">
              <Calendar className="text-slate-200" size={64} strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center mt-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                  <CheckCircle2 size={16} />
                </div>
              </div>
            </div>
            <div className="text-sm font-bold text-slate-600 mt-2">Days Left: <span className="text-lg text-slate-900">19</span></div>
          </div>
        </div>

        {/* Content Section with Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Tabs Area */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tabs Header */}
            <div className="bg-gradient-to-r from-cm-primary to-cm-teal rounded-xl overflow-hidden shadow-md flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab !== 'OVERALL') {
                      setExpandedSection(tab);
                    }
                  }}
                  className={`flex-1 py-4 px-2 text-[10px] sm:text-xs font-black transition-all border-b-4 
                    ${activeTab === tab
                      ? 'bg-white text-[#1732C4] border-[#1732C4]'
                      : 'text-white border-transparent hover:bg-white hover:text-[#1732C4] hover:bg-opacity-10'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Card - Sections */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              {Object.keys(sections).map((sectionName) => {
                const shouldDisplay = activeTab === 'OVERALL' || activeTab === sectionName;
                return shouldDisplay ? (
                  <div key={sectionName} className="border-b border-slate-200 last:border-b-0">
                    <div
                      onClick={() => setExpandedSection(expandedSection === sectionName ? null : sectionName)}
                      className="bg-gradient-to-r from-cm-primary to-cm-teal p-4 flex justify-between items-center text-white cursor-pointer hover:from-cm-dark hover:to-cm-primary transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1.5 rounded-lg">
                          <span className="material-symbols-outlined text-[18px]">menu_book</span>
                        </div>
                        <span className="font-black uppercase tracking-wide text-sm">{sectionName}</span>
                      </div>
                      <ChevronDown size={20} className={`transition-transform ${expandedSection === sectionName ? 'rotate-180' : ''}`} />
                    </div>

                    {expandedSection === sectionName && (
                      <div className="p-6 bg-gradient-to-br from-slate-50 to-white space-y-6">
                        {/* Performance Metrics Row */}
                        <div className="grid grid-cols-4 gap-3 mb-6">
                          <div className="bg-white rounded-lg border border-[#E0E7FF] p-4 text-center shadow-sm">
                            <div className="text-2xl font-black text-cm-primary">{isAuthenticated ? performanceData[sectionName].accuracy : 0}%</div>
                            <p className="text-xs font-bold text-slate-600 uppercase mt-1">Accuracy</p>
                          </div>
                          <div className="bg-white rounded-lg border border-[#E9D5FF] p-4 text-center shadow-sm">
                            <div className="text-2xl font-black text-[#8B5CF6]">{isAuthenticated ? performanceData[sectionName].questionsAttempted : 0}</div>
                            <p className="text-xs font-bold text-slate-600 uppercase mt-1">Attempts</p>
                          </div>
                          <div className="bg-white rounded-lg border border-[#FFCC99] p-4 text-center shadow-sm">
                            <div className="text-lg font-black text-cm-maths">{isAuthenticated ? performanceData[sectionName].timeSpent : '0 hrs'}</div>
                            <p className="text-xs font-bold text-slate-600 uppercase mt-1">Time</p>
                          </div>
                          <div className={`rounded-lg border p-4 text-center shadow-sm ${!isAuthenticated || performanceData[sectionName].performanceGap < 10 ? 'bg-[#F0FDF4] border-[#CCFFDD]' : 'bg-[#FEF2F2] border-[#FFCCCC]'}`}>
                            <div className={`text-2xl font-black ${!isAuthenticated || performanceData[sectionName].performanceGap < 10 ? 'text-[#00D084]' : 'text-[#EF4444]'}`}>{isAuthenticated ? performanceData[sectionName].performanceGap : 0}%</div>
                            <p className="text-xs font-bold text-slate-600 uppercase mt-1">Gap</p>
                          </div>
                        </div>

                        {/* Topics List */}
                        <div className="border-t border-slate-200 pt-4">
                          <h4 className="font-black text-slate-700 uppercase text-sm mb-4">Topics to Practice</h4>

                          <div className="grid grid-cols-1 gap-4 mb-6">
                            {sections[sectionName].map((topic, idx) => {
                              const perfData = topicPerformance[topic] || { progress: 0, accuracy: 0, attempts: 0, difficulty: 'Medium' };
                              const difficultyColors = {
                                Easy: { bg: '#F0FDF4', text: '#00D084', border: '#CCFFDD' },
                                Medium: { bg: '#E0E7FF', text: '#1732C4', border: '#C7D2FE' },
                                Hard: { bg: '#FEF2F2', text: '#EF4444', border: '#FFCCCC' }
                              };
                              const difficulty = difficultyColors[perfData.difficulty] || difficultyColors.Medium;

                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="group bg-gradient-to-br from-[#F3F3F3] to-white rounded-xl border border-[#E0E7FF] overflow-hidden hover:shadow-lg hover:border-[#1732C4] hover:border-opacity-50 transition-all duration-300 p-4"
                                >
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="flex-1">
                                      <h4 className="text-sm font-black text-slate-800 group-hover:text-[#1732C4] transition-colors">{topic}</h4>
                                      <div className="flex gap-2 mt-2">
                                        <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ backgroundColor: difficulty.bg, color: difficulty.text, borderColor: difficulty.border, borderWidth: '1px' }}>
                                          {perfData.difficulty}
                                        </span>
                                        <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ backgroundColor: '#F0E7FF', color: '#8B5CF6', borderColor: '#E9D5FF', borderWidth: '1px' }}>
                                          {perfData.attempts} Attempts
                                        </span>
                                        <span className="text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: '#FFF4E5', color: '#FF9800', borderColor: '#FFE0B2', borderWidth: '1px' }}>
                                          <span className="material-symbols-outlined text-[12px]">local_fire_department</span>
                                          {isAuthenticated ? Math.floor(Math.random() * 5) + 1 : 0} Day Streak
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                      <button
                                        onClick={handlePracticeClick}
                                        className="bg-gradient-to-r from-[#1732C4] to-[#00C78B] hover:from-[#1a2b8f] hover:to-[#009966] text-white text-xs font-black px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg group-hover:scale-105 transform"
                                      >
                                        {isAuthenticated ? 'Practice' : 'Login to Practice'}
                                      </button>
                                      <div className="flex items-center gap-1 text-[10px] font-bold text-[#00C78B] bg-[#F0FDF4] px-2 py-1 rounded-md border border-[#CCFFDD]">
                                        <span className="material-symbols-outlined text-[12px]">stars</span>
                                        +{isAuthenticated ? Math.floor(Math.random() * 20) + 10 : 0} Pts
                                      </div>
                                    </div>
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="mt-3">
                                    <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                                      <span>Mastery</span>
                                      <span>{perfData.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-gradient-to-r from-[#1732C4] to-[#00C78B] rounded-full"
                                        style={{ width: `${perfData.progress}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Performance Gap Analysis moved to the end */}
                          <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-black text-slate-700 uppercase text-sm">Performance Analysis</h4>
                              {isAuthenticated && (
                                <div className={`text-xs font-bold px-2 py-1 rounded-full ${performanceData[sectionName].trend === 'improving' ? 'bg-[#F0FDF4] text-[#00D084]' : performanceData[sectionName].trend === 'declining' ? 'bg-[#FEF2F2] text-[#EF4444]' : 'bg-[#E0E7FF] text-[#1732C4]'}`}>
                                  {performanceData[sectionName].trend.toUpperCase()}
                                </div>
                              )}
                            </div>

                            {/* Weak Topics */}
                            <div>
                              <p className="text-xs font-bold text-[#EF4444] mb-2 uppercase">⚠ Weak Areas</p>
                              <div className="flex flex-wrap gap-2">
                                {isAuthenticated && performanceData[sectionName].weakTopics.length > 0 ? (
                                  performanceData[sectionName].weakTopics.map((topic, idx) => (
                                    <span key={idx} className="bg-[#FEF2F2] text-[#EF4444] text-xs font-bold px-3 py-1 rounded-full border border-[#FFCCCC]">
                                      {topic}
                                    </span>
                                  ))
                                ) : (
                                  <span className="text-xs text-slate-500 italic">No data available</span>
                                )}
                              </div>
                            </div>

                            {/* Strong Topics */}
                            <div>
                              <p className="text-xs font-bold text-[#00D084] mb-2 uppercase">✓ Strong Areas</p>
                              <div className="flex flex-wrap gap-2">
                                {isAuthenticated && performanceData[sectionName].strongTopics.length > 0 ? (
                                  performanceData[sectionName].strongTopics.map((topic, idx) => (
                                    <span key={idx} className="bg-[#F0FDF4] text-[#00D084] text-xs font-bold px-3 py-1 rounded-full border border-[#CCFFDD]">
                                      {topic}
                                    </span>
                                  ))
                                ) : (
                                  <span className="text-xs text-slate-500 italic">No data available</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          </div>

          {/* Goals and Sidebar Section */}
          <div className="space-y-6">
            {/* GOTD Card */}
            <div className="bg-gradient-to-br from-cm-primary via-cm-accent-blue/80 to-cm-dark rounded-[24px] p-8 text-white shadow-xl shadow-cm-primary/20 relative overflow-hidden">{/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Trophy className="text-white" size={20} />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight">GOTD (Goals of the day)</h2>
                </div>

                <div className="space-y-6">
                  {goals.map((goal, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold uppercase tracking-wide opacity-90">{goal.name}</span>
                        <span className="text-xs font-black bg-white/20 px-2 py-1 rounded">{goal.pts} Pts</span>
                      </div>
                      <div className="h-6 bg-white/10 rounded-full overflow-hidden p-1 backdrop-blur-sm border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${goal.pts}%` }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + idx * 0.2 }}
                          className="h-full bg-gradient-to-r from-[#FF9800] via-[#00D084] to-[#00FE35] rounded-full shadow-[0_0_15px_rgba(255,152,0,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-medium text-sky-100/70 italic text-center">
                    {isAuthenticated ? "Keep pushing! You're on track to reach your daily goal." : "Login to start tracking your daily goals."}
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Practice Index */}
            <div className="bg-gradient-to-br from-[#0B1B3E] via-[#1a2d4f] to-[#0B3D23] rounded-[24px] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600/20 rounded-full -ml-16 -mt-16 blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Target className="text-purple-400" size={20} />
                  </div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Daily Practice Index</h2>
                </div>

                <div className="text-center mb-4">
                  <div className="text-4xl font-black text-yellow-400 mb-2">
                    {isAuthenticated ? (
                      <span className="material-symbols-outlined text-5xl">nightlight</span>
                    ) : (
                      <span className="material-symbols-outlined text-5xl text-slate-500">nightlight</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    {isAuthenticated ? "22-Day Moving Average of Daily Practice done" : "0-Day Moving Average of Daily Practice done"}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                  <p className="text-xs text-slate-300 italic text-center">
                    Remember to attempt at least 1 question daily to extend your practice streak!
                  </p>
                </div>

                {/* Daily Attempt Stats Chart */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h3 className="text-sm font-black text-white mb-4 text-center">Daily Attempt Trends - {activeTab !== 'OVERALL' ? activeTab : 'All Subjects'}</h3>

                  {/* Simple Bar Chart - 7 Day Trend */}
                  <svg viewBox="0 0 350 200" className="w-full h-32">
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map((val) => (
                      <line key={`grid-${val}`} x1="30" y1={180 - val * 1.5} x2="340" y2={180 - val * 1.5} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    ))}

                    {/* Y-axis */}
                    <line x1="30" y1="10" x2="30" y2="180" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    {/* X-axis */}
                    <line x1="30" y1="180" x2="340" y2="180" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                    {/* Bars for 7-day progress trend */}
                    {(() => {
                      const dailyProgress = [12, 18, 25, 15, 32, 28, 45];
                      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                      const maxValue = Math.max(...dailyProgress, 50);

                      return dailyProgress.map((value, idx) => {
                        const x = 45 + idx * 42;
                        const barHeight = (value / maxValue) * 150;
                        const barColor = value > 40 ? '#10B981' : value > 25 ? '#3B82F6' : '#F59E0B';
                        return (
                          <g key={`bar-${idx}`}>
                            <rect
                              x={x}
                              y={180 - barHeight}
                              width="30"
                              height={barHeight}
                              fill={barColor}
                              rx="4"
                              className="transition-all duration-700 ease-out"
                            />
                            <text x={x + 15} y="195" fontSize="10" textAnchor="middle" fill="rgba(255,255,255,0.7)">
                              {labels[idx]}
                            </text>
                            <text x={x + 15} y={175 - barHeight} fontSize="9" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontWeight="bold">
                              {value}
                            </text>
                          </g>
                        );
                      });
                    })()}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Login/Signup Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowLoginModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-5">
                <h2 className="text-2xl font-black text-slate-900 mb-1">
                  {isLogin ? 'Welcome Back!' : 'Create Account'}
                </h2>
                <p className="text-slate-500 font-medium text-sm">
                  {isLogin ? 'Sign in to continue your learning journey' : 'Start your preparation journey today'}
                </p>
              </div>

              <form className="space-y-3" onSubmit={handleLoginSubmit}>
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-slate-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm font-bold text-[#1732C4] hover:text-[#00C78B]">
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1732C4] to-[#00C78B] hover:from-[#1a2b8f] hover:to-[#009966] text-white font-bold py-2.5 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-slate-600 text-sm">
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-bold text-[#1732C4] hover:text-[#00C78B] transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-center text-xs text-slate-500 mb-3">Or continue with</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleLoginSubmit}
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors font-semibold text-xs"
                  >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                    Google
                  </button>
                  <button
                    type="button"
                    onClick={handleLoginSubmit}
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors font-semibold text-xs"
                  >
                    <img src="https://github.com/favicon.ico" alt="GitHub" className="w-4 h-4" />
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendar Modal */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowCalendar(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowCalendar(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h2 className="text-xl font-black text-slate-900">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-xs font-bold text-slate-500 py-2">
                      {day}
                    </div>
                  ))}

                  {(() => {
                    const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
                    const days = [];

                    // Empty cells for days before the first day of month
                    for (let i = 0; i < firstDay; i++) {
                      days.push(
                        <div key={`empty-${i}`} className="aspect-square"></div>
                      );
                    }

                    // Days of the month
                    for (let day = 1; day <= daysInMonth; day++) {
                      const isDeadline = day === 12;
                      const isToday = day === 23 && currentMonth.getMonth() === 1; // Feb 23

                      days.push(
                        <div
                          key={day}
                          className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold cursor-pointer transition-all
                            ${isDeadline
                              ? 'bg-red-500 text-white ring-2 ring-red-300 ring-offset-2'
                              : isToday
                                ? 'bg-gradient-to-r from-[#1732C4] to-[#00C78B] text-white'
                                : 'hover:bg-slate-100 text-slate-700'}`}
                        >
                          {day}
                        </div>
                      );
                    }

                    return days;
                  })()}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm font-medium text-slate-700">Exam Deadline (Mar 12, 2026)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#1732C4] to-[#00C78B] rounded"></div>
                    <span className="text-sm font-medium text-slate-700">Today</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guidelines Modal */}
      <AnimatePresence>
        {showGuidelines && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowGuidelines(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowGuidelines(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-[#1732C4] via-[#00C78B] to-[#00FE35] p-6">
                <h2 className="text-2xl font-black text-white">Guidelines/Instructions</h2>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Welcome to STUDY PLANNER</h3>

                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></div>
                    <p className="text-base font-medium">We are working out your daily goals.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></div>
                    <p className="text-base font-medium">Practice GOTD targets daily.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></div>
                    <p className="text-base font-medium">Every correct attempt carries: <span className="font-bold text-[#00D084]">+1 Score</span></p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></div>
                    <p className="text-base font-medium">Every incorrect attempt carries <span className="font-bold text-[#EF4444]">- 0.5 Score</span></p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"></div>
                    <p className="text-base font-medium">Every in-time attempt carries bonus of <span className="font-bold text-[#1732C4]">+0.5 score.</span></p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#E0E7FF] to-[#F0FDF4] rounded-2xl border border-[#1732C4] border-opacity-20">
                  <p className="text-center text-slate-700 font-semibold text-sm">
                    📚 Stay consistent and track your progress daily to achieve your goals! 🎯
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudyPlannerDashboard;
