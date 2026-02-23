import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Trophy } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

import AnimatedCounter from './components/ui/AnimatedCounter';

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
        <div className="exam-prep-library font-display bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                .hero-gradient {
                    background-image: radial-gradient(rgba(23, 60, 186, 0.15) 1.5px, transparent 1.5px),
                                      radial-gradient(circle at top right, rgba(17, 60, 187, 0.08), transparent),
                                      radial-gradient(circle at bottom left, rgba(17, 60, 187, 0.05), transparent);
                    background-size: 40px 40px, 100% 100%, 100% 100%;
                    background-position: 0 0, 0 0, 0 0;
                }
                .dark .hero-gradient {
                    background-image: radial-gradient(rgba(0, 199, 152, 0.15) 1.5px, transparent 1.5px),
                                      radial-gradient(circle at top right, rgba(17, 60, 187, 0.15), transparent),
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
                <section className="relative hero-gradient overflow-hidden pt-16 pb-24 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div className="z-10 text-center lg:text-left">
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
                            <div className="hero-actions">
                                <button className="btn-primary">
                                    Start Free Mock Test <ArrowRight size={20} />
                                </button>
                                <button className="btn-secondary">
                                    Explore Plans
                                </button>
                            </div>

                            <div className="hero-stats">
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

                        <div ref={constraintsRef} className="hidden lg:flex relative h-[500px] w-full items-center justify-center">
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-[80px]"></div>

                            {/* Test Progress Card */}
                            <motion.div
                                drag
                                dragConstraints={{ top: -50, left: -200, right: 100, bottom: 200 }}
                                dragElastic={0.2}
                                whileHover={{ scale: 1.05, zIndex: 100 }} whileDrag={{ scale: 1.05, zIndex: 100, cursor: "grabbing" }}
                                style={{ rotate: 3, cursor: "grab" }}
                                className="absolute top-0 right-10 z-20 glass-card p-5 rounded-2xl shadow-xl w-48"
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
                                style={{ rotate: -2, cursor: "grab" }}
                                className="absolute bottom-12 left-4 z-20 glass-card p-5 rounded-2xl shadow-xl w-64"
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
                                style={{ x: "-50%", y: "-50%", cursor: "grab" }}
                                className="absolute top-1/2 left-1/2 z-10 glass-card p-6 rounded-2xl shadow-2xl w-80 border-t-4 border-t-[#113cbb]"
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
                                style={{ cursor: "grab" }}
                                className="absolute -top-6 left-10 z-30"
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
                                style={{ rotate: 2, cursor: "grab" }}
                                className="absolute bottom-0 right-4 z-30 glass-card p-4 rounded-2xl shadow-xl w-56 border-b-4 border-b-green-500"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden shadow-sm">
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
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">Your Path to <span className="text-[#113cbb]">Success</span></h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Experience a streamlined journey from preparation to perfection with our scientifically designed workflow.
                            </p>
                        </div>
                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            {[
                                { step: '01', icon: 'target', title: 'Select Your Goal', desc: 'Choose from our extensive library of 50+ competitive exams. Tailored paths for JEE, NEET, or UPSC.' },
                                { step: '02', icon: 'timer_play', title: 'Attempt Mock Test', desc: 'Experience real exam pressure. Interface mimics NTA pattern with strict timing and negative marking.', highlight: true },
                                { step: '03', icon: 'insights', title: 'Unlock Analytics', desc: 'Granular breakdown of performance. Identify weak topics and improve your rank instantly.' }
                            ].map((item, i) => (
                                <div key={i} className={`group relative bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 hover:-translate-y-4 transition-all duration-500 ${item.highlight ? 'shadow-[#113cbb]/20 border-[#113cbb]/10 dark:border-[#113cbb]/20 z-20' : ''}`}>
                                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white dark:border-slate-800 shadow-xl flex items-center justify-center font-black text-3xl z-20 ${item.highlight ? 'bg-gradient-to-br from-[#113cbb] to-blue-600 text-white shadow-[#113cbb]/40' : 'bg-gradient-to-br from-white to-blue-50 dark:from-slate-700 dark:to-slate-800 text-[#113cbb]'}`}>
                                        {item.step}
                                    </div>
                                    <div className="mt-8 text-center">
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-blue-100 to-white dark:from-slate-700 dark:to-slate-600 rounded-3xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                            <span className="material-symbols-outlined text-5xl text-[#113cbb]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>{item.icon}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Explore Streams Section */}
                <section className="py-24 px-6 bg-white dark:bg-slate-950">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="h-1 w-8 bg-[#113cbb] rounded-full"></span>
                                    <span className="text-[#113cbb] font-bold uppercase tracking-widest text-xs">Categories</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-black mb-3 text-slate-900 dark:text-white">Explore Streams</h2>
                                <p className="text-slate-500 text-lg">Curated tests designed by experts for every career path</p>
                            </div>
                            <button className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-[#113cbb]/20 hover:scale-105 transition-all duration-300">
                                <span>View All Streams</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
                            {/* Engineering Card */}
                            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-full card-pattern-engineering opacity-20"></div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-white/30">
                                    <span className="material-symbols-outlined text-sm">local_fire_department</span> HOT
                                </div>
                                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
                                            <span className="material-symbols-outlined text-4xl">engineering</span>
                                        </div>
                                        <h3 className="text-3xl font-black mb-2">Engineering</h3>
                                        <p className="text-orange-100 max-w-sm">JEE Mains, Advanced, BITSAT, GATE & more. Comprehensive coverage for top institutes.</p>
                                    </div>
                                    <div className="mt-auto pt-8">
                                        <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors shadow-lg shadow-orange-900/20 group-hover:scale-[1.02] transform duration-200">
                                            View Tests <span className="material-symbols-outlined">arrow_outward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Medical Card */}
                            <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-bl from-teal-400 to-emerald-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 w-full h-full card-pattern-medical opacity-20"></div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                                    POPULAR
                                </div>
                                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
                                            <span className="material-symbols-outlined text-3xl">medical_services</span>
                                        </div>
                                        <h3 className="text-2xl font-black mb-2">Medical</h3>
                                        <p className="text-teal-50 text-sm mb-4">NEET UG, PG, AIIMS, and State Medical exams.</p>
                                    </div>
                                    <button className="w-full bg-white text-teal-600 px-4 py-3 rounded-xl font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg">
                                        Explore
                                    </button>
                                </div>
                            </div>

                            {/* Small Cards */}
                            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-between">
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner border border-white/10">
                                        <span className="material-symbols-outlined text-2xl">payments</span>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-black mb-1">Commerce</h3>
                                        <p className="text-blue-100 text-xs">CA, CS, CMA, Banking exams.</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-20">
                                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm">View Details</button>
                                </div>
                            </div>
                            <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-between">
                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner border border-white/10">
                                        <span className="material-symbols-outlined text-2xl">gavel</span>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-black mb-1">Law & UPSC</h3>
                                        <p className="text-purple-100 text-xs">CLAT, AILET, Civil Services.</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-20">
                                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold text-sm">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Study Planner Section */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto bg-[#113cbb] rounded-[2rem] p-8 lg:p-16 text-white relative overflow-hidden">
                        {/* Abstract BG */}
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.7,-76.4C58.3,-69.2,70.1,-58,78.8,-44.6C87.5,-31.2,93.1,-15.6,91.2,-0.5C89.3,14.6,80,29.1,70.3,42.3C60.6,55.5,50.6,67.3,37.8,74.1C25,80.9,9.4,82.7,-6.1,80.8C-21.6,78.9,-36.9,73.4,-50,64.2C-63.1,55,-74,42.1,-80.4,27.5C-86.8,12.9,-88.7,-3.4,-84.9,-18.2C-81.1,-33,-71.5,-46.3,-59.4,-54.2C-47.3,-62.1,-32.7,-64.6,-19,-71.7C-5.3,-78.8,7.5,-90.4,23.3,-90.8C39.1,-91.2,57.9,-80.4,44.7,-76.4Z" fill="#FFFFFF" transform="translate(100 100)"></path>
                            </svg>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-black mb-6">Smart Study Planner</h2>
                                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                    Organize your preparation with an automated schedule. We track your progress and adjust your goals daily to ensure you finish the syllabus 30 days before the exam.
                                </p>
                                <Link to="/select-stream" className="inline-block bg-white text-[#113cbb] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                                    Personalize My Schedule
                                </Link>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="font-bold text-xl">Weekly Goals</h4>
                                    <span className="text-sm font-medium">May 20 - May 27</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Mechanics Part II</span>
                                            <span className="font-bold"><AnimatedCounter from={0} to={75} suffix="%" /></span>
                                        </div>
                                        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 3.5, ease: "easeOut" }} viewport={{ once: true }} className="h-full bg-green-400 rounded-full"></motion.div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Organic Chemistry</span>
                                            <span className="font-bold"><AnimatedCounter from={0} to={40} suffix="%" /></span>
                                        </div>
                                        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ duration: 3.5, ease: "easeOut", delay: 0.2 }} viewport={{ once: true }} className="h-full bg-orange-400 rounded-full"></motion.div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <div className="bg-white/20 p-4 rounded-xl flex-1 text-center">
                                            <div className="text-2xl font-black"><AnimatedCounter from={0} to={12} duration={3.5} /></div>
                                            <div className="text-[10px] uppercase font-bold opacity-70">Tests Taken</div>
                                        </div>
                                        <div className="bg-white/20 p-4 rounded-xl flex-1 text-center border-2 border-white/50">
                                            <div className="text-2xl font-black"><AnimatedCounter from={0} to={3} duration={3.5} /></div>
                                            <div className="text-[10px] uppercase font-bold opacity-70">Pending Tests</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
};

export default ExamPrepLibrary;
