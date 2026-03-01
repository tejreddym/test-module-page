import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Trophy } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

import AnimatedCounter from './components/ui/AnimatedCounter';
import DeskCalendar3D from './components/ui/DeskCalendar3D';
import dotsPattern from './assets/dots-to-bottom.svg';
import TopMentors from './TopMentors';
import FlashcardFAQ from './FlashcardFAQ';
import StepDesign from './StepDesign';

const ExamPrepLibrary = () => {
    const constraintsRef = useRef(null);
    const stats = [
        { value: '10,000+', label: 'Students Mentored', icon: <Users size={20} /> },
        { value: '95%', label: 'Success Rate', icon: <Target size={20} /> },
        { value: '500+', label: 'Expert Mentors', icon: <Trophy size={20} /> },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="exam-prep-library font-display bg-[#d2efee] dark:bg-[#101522] text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                .hero-gradient {
                    background-color: #7cdedb 20%;
                    background-image: radial-gradient(circle at top right, rgba(17, 60, 187, 0.05), transparent),
                                      radial-gradient(circle at bottom left, rgba(0, 199, 152, 0.05), transparent);
                }

                .dark .hero-gradient {
                    background-image: radial-gradient(circle at top right, rgba(17, 60, 187, 0.15), transparent),
                                      radial-gradient(circle at bottom left, rgba(17, 60, 187, 0.1), transparent);
                }
                .btn-gradient {
                    background: linear-gradient(135deg, #173CBA 0%, #00C798 100%);
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }
                .dark .glass-card {
                    background: rgba(16, 21, 34, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .card-pattern-engineering {
                    background-image: radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 10px, transparent 10px), radial-gradient(circle at 0 0, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 10px, transparent 10px);
                    background-size: 20px 20px;
                }
                .card-pattern-medical {
                    background-image: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent);
                    background-size: 20px 20px;
                }
            ` }} />

            <main>
                {/* Hero Section */}
                <section className="relative hero-gradient overflow-visible pt-10 pb-16 lg:pt-16 lg:pb-24 px-2 lg:px-6 h-[calc(100vh-80px)] max-h-[100vh] flex items-center hero-with-dots-bottom">

                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .hero-with-dots-bottom::after {
                            display: block;
                            position: absolute;
                            content: "";
                            left: 0;
                            right: 0;
                            /* Move them inside the view perfectly */
                            z-index: 10;
                            height: 60px;
                            bottom: 0px;
                            background: url('${dotsPattern}') repeat-x left bottom;
                            background-size: 15px auto;
                            pointer-events: none;
                        }
                        @media (min-width: 768px) {
                            .hero-with-dots-bottom::after {
                                height: 120px;
                                bottom: 0px;
                                background-size: 30px auto;
                            }
                        }
                    `}} />

                    <div className="relative w-full h-full z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch lg:items-center py-6 lg:py-0">
                        <div className="z-10 text-left w-full h-full flex flex-col justify-between lg:justify-center">
                            <div className="hero-badge">
                                <span className="badge-icon">🎯</span>
                                <span className="badge-text">India's #1 Exam Prep Platform</span>
                            </div>
                            <h1 className="hero-title">
                                Ace Every Exam with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#173CBA] to-[#00C798]">Smart Practice</span>
                            </h1>
                            <p className="hero-subtitle">
                                Master your exams with personalized mock tests, AI-powered analytics, and 1:1 mentorship - everything you need to crack your dream exam.
                            </p>
                            <div className="flex flex-row gap-3 w-full mb-4 lg:mb-16 mt-2">
                                <button className="btn-primary flex-1 min-w-0 text-[15px] px-2 lg:text-lg lg:min-w-[200px] lg:px-12 bg-gradient-to-br from-[#173CBA] to-[#00C798] text-white rounded-lg font-medium flex items-center justify-center gap-2 h-14 lg:h-[50px] transition-all hover:bg-blue-600 hover:shadow-lg">
                                    Start Free Mock Test <ArrowRight className="w-5 h-5 lg:w-5 lg:h-5" />
                                </button>
                                <button className="btn-secondary flex-1 min-w-0 text-[15px] px-2 lg:text-lg lg:px-8 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium flex items-center justify-center gap-2 h-14 lg:h-[50px] transition-all hover:bg-slate-50">
                                    Explore Plans
                                </button>
                            </div>

                            <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:gap-10 mt-2 lg:mt-0 lg:mb-0">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <div className="stat-icon-wrapper">
                                            {stat.icon}
                                        </div>
                                        <div className="stat-info">
                                            <span className="stat-value">{stat.value}</span>
                                            <span className="stat-label">{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div ref={constraintsRef} className="absolute inset-0 z-0 opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto lg:relative h-full lg:h-[500px] w-full flex items-center justify-center overflow-hidden lg:overflow-visible">
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-[80px]"></div>

                            {/* Test Progress Card */}
                            <motion.div
                                drag
                                dragConstraints={{ top: -50, left: -200, right: 100, bottom: 200 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.05, zIndex: 100 }} whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
                                initial={{ scale: 0, opacity: 0, rotate: 3, x: 0, y: 0 }}
                                animate={{ scale: 1, opacity: 1, x: [0, 20, -15, 0], y: [0, -15, 10, 0], rotate: [3, 6, 0, 3] }}
                                transition={{
                                    scale: { type: "spring", bounce: 0.5, delay: 0.1 },
                                    opacity: { delay: 0.1 },
                                    x: { repeat: Infinity, duration: 15, ease: "easeInOut" },
                                    y: { repeat: Infinity, duration: 15, ease: "easeInOut" },
                                    rotate: { repeat: Infinity, duration: 15, ease: "easeInOut" }
                                }}
                                style={{ cursor: "grab" }}
                                className="absolute top-0 right-0 lg:top-0 lg:right-10 z-20 glass-card p-4 lg:p-5 rounded-2xl shadow-xl w-44 lg:w-48 scale-[0.65] lg:scale-100 origin-top-right block"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Test Progress</h3>
                                    <span className="material-symbols-outlined text-[#113cbb] text-sm">trending_up</span>
                                </div>
                                <div className="relative flex items-center justify-center w-32 h-32 mx-auto">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle className="text-slate-100 dark:text-slate-700" cx="64" cy="64" fill="none" r="56" stroke="currentColor" strokeWidth="12"></circle>
                                        <circle className="text-[#113cbb]" cx="64" cy="64" fill="none" r="56" stroke="currentColor" strokeDasharray="351.86" strokeDashoffset="52.78" strokeLinecap="round" strokeWidth="12"></circle>
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-2xl font-black text-slate-800 dark:text-white">85%</span>
                                        <span className="text-[10px] text-slate-400 font-semibold">Complete</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Leaderboard Card */}
                            <motion.div
                                drag
                                dragConstraints={{ top: -300, left: -50, right: 200, bottom: 50 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.05, zIndex: 100 }} whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
                                initial={{ scale: 0, opacity: 0, rotate: -2, x: 0, y: 0 }}
                                animate={{ scale: 1, opacity: 1, x: [0, -25, 15, 0], y: [0, 20, -10, 0], rotate: [-2, -5, 2, -2] }}
                                transition={{
                                    scale: { type: "spring", bounce: 0.5, delay: 0.2 },
                                    opacity: { delay: 0.2 },
                                    x: { repeat: Infinity, duration: 18, ease: "easeInOut" },
                                    y: { repeat: Infinity, duration: 18, ease: "easeInOut" },
                                    rotate: { repeat: Infinity, duration: 18, ease: "easeInOut" }
                                }}
                                style={{ cursor: "grab" }}
                                className="absolute bottom-20 left-0 lg:bottom-12 lg:left-4 z-20 glass-card p-4 lg:p-5 rounded-2xl shadow-xl w-48 lg:w-64 scale-[0.65] lg:scale-100 origin-bottom-left block"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">Leaderboard</h3>
                                    <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full font-bold">Top 4</span>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { rank: 1, score: '99.9%', color: 'from-[#173CBA] to-[#00C798] text-white', w1: 'w-16', w2: 'w-10' },
                                        { rank: 2, score: '98.5%', color: 'from-yellow-400 to-yellow-200 text-yellow-900', w1: 'w-14', w2: 'w-8' },
                                        { rank: 3, score: '97.2%', color: 'from-slate-300 to-slate-100 text-slate-700', w1: 'w-12', w2: 'w-8' },
                                        { rank: 4, score: '95.8%', color: 'from-orange-400 to-orange-200 text-orange-900', w1: 'w-10', w2: 'w-6' }
                                    ].map((player, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm bg-gradient-to-br ${player.color}`}>
                                                {player.rank}
                                            </div>
                                            <div className="flex-1">
                                                <div className={`h-2 ${player.w1} bg-slate-200 dark:bg-slate-700 rounded-full mb-1`}></div>
                                                <div className={`h-1.5 ${player.w2} bg-slate-100 dark:bg-slate-800 rounded-full`}></div>
                                            </div>
                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{player.score}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Time Spent Card */}
                            <motion.div
                                drag
                                dragConstraints={{ top: -150, left: -150, right: 150, bottom: 150 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.05, zIndex: 100 }} whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
                                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                                animate={{ scale: 1, opacity: 1, x: ["-50%", "-46%", "-54%", "-50%"], y: ["-50%", "-54%", "-46%", "-50%"] }}
                                transition={{
                                    scale: { type: "spring", bounce: 0.5, delay: 0.3 },
                                    opacity: { delay: 0.3 },
                                    x: { repeat: Infinity, duration: 20, ease: "easeInOut" },
                                    y: { repeat: Infinity, duration: 20, ease: "easeInOut" }
                                }}
                                style={{ zIndex: 10, cursor: "grab" }}
                                className="absolute top-0 left-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:translate-y-0 glass-card p-4 lg:p-6 rounded-2xl shadow-2xl w-56 lg:w-80 border-t-4 border-t-[#113cbb] scale-[0.65] lg:scale-100 origin-top-left block"
                            >
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Time Spent</h3>
                                        <div className="text-3xl font-black text-slate-900 dark:text-white">2h 45m</div>
                                    </div>
                                    <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12% vs last week</span>
                                </div>
                                <div className="h-24 flex items-end justify-between gap-2 px-1">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                        <div key={i} className="w-full bg-[#113cbb] rounded-t-sm group relative" style={{ height: `${[40, 65, 50, 75, 90, 60, 30][i]}%`, opacity: 0.1 * (i + 1) }}>
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">{day}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* AI Coach Bubble */}
                            <motion.div
                                drag
                                dragConstraints={{ top: -50, left: -50, right: 250, bottom: 350 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.05, zIndex: 100 }} whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
                                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                animate={{ scale: 1, opacity: 1, x: [0, 15, -10, 0], y: [0, -15, 12, 0] }}
                                transition={{
                                    scale: { type: "spring", bounce: 0.5, delay: 0.4 },
                                    opacity: { delay: 0.4 },
                                    x: { repeat: Infinity, duration: 12, ease: "easeInOut" },
                                    y: { repeat: Infinity, duration: 12, ease: "easeInOut" }
                                }}
                                style={{ cursor: "grab" }}
                                className="hidden lg:block absolute top-10 lg:-top-6 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 z-30 scale-75 lg:scale-100 pointer-events-auto"
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-none shadow-xl border border-blue-600/20 p-4 max-w-[200px] relative">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-[#113cbb] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
                                        </div>
                                        <div className="text-xs font-bold text-slate-500">AI Coach</div>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                                        Ready for your next <span className="text-[#113cbb]">JEE Mock Test</span>?
                                    </p>
                                </div>
                            </motion.div>

                            {/* Social Proof Card */}
                            <motion.div
                                drag
                                dragConstraints={{ top: -350, left: -250, right: 50, bottom: 50 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.05, zIndex: 100 }} whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
                                initial={{ scale: 0, opacity: 0, rotate: 2, x: 0, y: 0 }}
                                animate={{ scale: 1, opacity: 1, x: [0, -20, 15, 0], y: [0, -15, 10, 0], rotate: [2, -1, 4, 2] }}
                                transition={{
                                    scale: { type: "spring", bounce: 0.5, delay: 0.5 },
                                    opacity: { delay: 0.5 },
                                    x: { repeat: Infinity, duration: 16, ease: "easeInOut" },
                                    y: { repeat: Infinity, duration: 16, ease: "easeInOut" },
                                    rotate: { repeat: Infinity, duration: 16, ease: "easeInOut" }
                                }}
                                style={{ cursor: "grab" }}
                                className="absolute bottom-16 right-0 lg:bottom-0 lg:right-4 z-30 glass-card p-3 lg:p-4 rounded-xl shadow-lg w-48 lg:w-60 scale-[0.65] lg:scale-100 origin-bottom-right block pointer-events-auto"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-9 h-9 lg:w-8 lg:h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-500">+2.5k</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-black text-slate-800 dark:text-white">Recent Selections</div>
                                    <p className="text-[10px] text-slate-500 font-semibold leading-tight">500+ JEE Aspirant's joined this month</p>
                                </div>
                                <div className="mt-2 flex items-center gap-1 text-green-500 font-bold text-[10px]">
                                    <span className="material-symbols-outlined text-xs">stars</span>
                                    4.9/5 Student Rating
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Path to Success Section */}
                <StepDesign />

                {/* Explore Streams Section */}
                <section className="pt-[98px] pb-16 px-6 bg-white dark:bg-slate-950">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-1 w-8 bg-cm-primary rounded-full"></span>
                                    <span className="text-cm-primary font-bold uppercase tracking-widest text-xs">Categories</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black mb-3 text-slate-900 dark:text-white">Explore Streams</h2>
                                <p className="text-slate-500 text-lg">Curated tests designed by experts for every career path</p>
                            </div>
                            <Link to="/all-streams" className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-cm-primary/20 hover:scale-105 transition-all duration-300">
                                <span>View All Streams</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[400px]">
                            {/* Engineering Card */}
                            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Engineering" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-black/30"></div>

                                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-inner border border-white/20">
                                            <span className="material-symbols-outlined text-3xl">engineering</span>
                                        </div>
                                        <h3 className="text-2xl font-black mb-1 drop-shadow-md">Engineering</h3>
                                        <p className="text-cm-maths/10 max-w-sm drop-shadow-sm text-sm font-medium">JEE Mains, Advanced, BITSAT, GATE & more. Comprehensive coverage.</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Link to="/stream-mock-tests" className="w-full bg-cm-maths text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cm-maths/90 transition-colors shadow-lg group-hover:shadow-cm-maths/50 transform duration-300 backdrop-blur-sm border border-cm-maths/50">
                                            View Tests <span className="material-symbols-outlined">arrow_outward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Medical Card */}
                            <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" alt="Medical" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cm-teal/90 via-cm-teal/40 to-black/30"></div>

                                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-inner border border-white/20">
                                            <span className="material-symbols-outlined text-2xl">medical_services</span>
                                        </div>
                                        <h3 className="text-xl font-black mb-1 drop-shadow-md">Medical</h3>
                                        <p className="text-teal-50/90 text-sm mb-2 drop-shadow-sm font-medium">NEET UG, PG, AIIMS exams.</p>
                                    </div>
                                    <Link to="/stream-mock-tests" className="block text-center w-full bg-cm-teal text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-cm-teal/90 transition-colors shadow-lg group-hover:shadow-cm-teal/50 backdrop-blur-sm border border-cm-teal/40">
                                        View Tests
                                    </Link>
                                </div>
                            </div>

                            {/* Small Cards */}
                            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col justify-between">
                                <img src="https://images.unsplash.com/photo-1454165833767-027ffea36c2e?auto=format&fit=crop&q=80&w=600" alt="Management" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cm-physics/95 via-cm-physics/60 to-shadow-cm-dark/40"></div>
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-inner border border-white/20">
                                        <span className="material-symbols-outlined text-2xl">work</span>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-black mb-1 drop-shadow-md">Management</h3>
                                        <p className="text-blue-50/90 text-xs drop-shadow-sm font-medium">CAT, MAT, XAT, GMAT & MBA exams.</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20">
                                    <Link to="/stream-mock-tests" className="bg-white text-cm-physics px-6 py-2 rounded-lg font-bold text-sm shadow-xl hover:scale-105 transition-transform">View Tests</Link>
                                </div>
                            </div>

                            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-6 flex flex-col justify-between">
                                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" alt="Law & UPSC" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cm-logical/95 via-cm-logical/60 to-shadow-cm-dark/40"></div>
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-inner border border-white/20">
                                        <span className="material-symbols-outlined text-2xl">gavel</span>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-black mb-1 drop-shadow-md">Law & UPSC</h3>
                                        <p className="text-purple-50/90 text-xs drop-shadow-sm font-medium">CLAT, AILET, Civil Services.</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20">
                                    <Link to="/stream-mock-tests" className="bg-white text-cm-logical px-6 py-2 rounded-lg font-bold text-sm shadow-xl hover:scale-105 transition-transform">View Tests</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slanted Top Divider */}
                <div className="relative h-24 w-full overflow-hidden bg-[#f0fdf4] dark:bg-slate-900/50 -mb-1">
                    <div className="absolute inset-0 z-0 opacity-40"
                        style={{
                            backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)',
                            backgroundSize: '30px 30px'
                        }}>
                    </div>
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 w-full h-[101%]">
                        <path d="M0 0L720 100L1440 0V0H0V0Z" fill="white" className="dark:fill-slate-950" />
                    </svg>
                </div>

                {/* New Animated Study Planner Section */}
                <section className="pt-10 pb-12 bg-[#f0fdf4] dark:bg-slate-900/50 relative overflow-hidden z-10">
                    {/* Background Dot Pattern */}
                    <div className="absolute inset-0 z-0 opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}>
                    </div>

                    <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                                Smart <span className="text-cm-primary">Study Planner</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="overflow-hidden px-6 py-4">
                        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
                            {/* Left Card: Text Content */}
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut"
                                }}
                                className="bg-[#E8F2FF] rounded-[3rem] p-8 lg:p-10 relative shadow-2xl z-10 overflow-hidden h-full flex flex-col justify-center group border border-blue-100"
                            >
                                <img src="/assets/images/study_planner_bg.png" alt="Study Planner Background" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-blue-500/5"></div>

                                <div className="relative z-10 w-full max-w-lg">
                                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif tracking-wide text-[#173CBA]">Smart Study Planner</h3>
                                    <p className="text-slate-600 text-base mb-6 leading-relaxed font-medium">
                                        Organize your preparation with an automated schedule. We track your progress and adjust your goals daily to ensure you finish the syllabus 30 days before the exam.
                                    </p>
                                    <Link to="/select-stream" className="inline-flex items-center justify-center bg-gradient-to-r from-[#173CBA] to-[#00C798] text-white px-8 py-3 rounded-xl font-bold text-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                                        Personalize My Schedule
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right Card: 3D Calendar Animation */}
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                                className="relative z-20 flex justify-center items-center py-10 lg:py-0 w-full"
                            >
                                {/* Behind glowing effect */}
                                <div className="absolute inset-x-4 inset-y-10 bg-gradient-to-tr from-cyan-400 via-blue-500 to-teal-400 blur-[60px] rounded-[3rem] -z-10 opacity-40 animate-pulse" style={{ animationDuration: '4s' }}></div>

                                {/* Desk Calendar Component */}
                                <DeskCalendar3D />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Slanted Bottom Divider */}
                <div className="relative h-24 w-full bg-[#f0fdf4] dark:bg-slate-900/50 -mt-10 z-30">
                    <div className="absolute inset-0 z-0 opacity-40"
                        style={{
                            backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)',
                            backgroundSize: '30px 30px'
                        }}>
                    </div>
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 w-full h-[101%] rotate-180">
                        <path d="M0 100L720 0L1440 100V100H0V100Z" fill="white" className="dark:fill-slate-950" />
                    </svg>
                </div>

                {/* Top Mentors Section */}
                <TopMentors />

                {/* FAQ Section */}
                <FlashcardFAQ />

            </main >
        </div >
    );
};

export default ExamPrepLibrary;
