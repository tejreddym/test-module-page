import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BrainCircuit, Bell, Zap, TrendingUp, FlaskConical, Microscope, Sigma,
    AlertTriangle, CheckCircle, Timer, Sparkles, ArrowRight, ChevronRight,
    Clock, FileText
} from 'lucide-react';
import './RankPredictor.css';

const RankPredictor = () => {
    const navigate = useNavigate();
    const [gaugeProgress, setGaugeProgress] = useState(0);

    useEffect(() => {
        // Animate gauge on mount. 
        const timer = setTimeout(() => {
            setGaugeProgress(0.75);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased transition-colors duration-200 min-h-screen">
            <nav className="bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
                                <BrainCircuit className="text-primary mr-2" size={32} />
                                <span className="font-display font-bold text-xl text-gray-900 dark:text-white">ExamAI<span className="text-primary">.</span></span>
                            </div>
                            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                                <a className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/test-analytics')}>Dashboard</a>
                                <a className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/stream-mock-tests')}>Mock Tests</a>
                                <a className="border-primary text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/rank-predictor')}>Rank Predictor</a>
                                <a className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/study-planner')}>Study Plan</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
                                <Bell size={20} />
                            </button>
                            <div className="ml-3 relative flex items-center gap-2 cursor-pointer" onClick={() => navigate('/user-profile')}>
                                <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 dark:text-blue-400 font-black text-sm">JS</div>
                                <span className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300">John Smith</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate font-display">
                            Performance Analysis & Rank Prediction
                        </h2>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Based on your latest mock test: <span className="font-medium text-blue-600 border-b border-blue-600 pb-[1px] hover:text-blue-700 cursor-pointer" onClick={() => navigate('/test-analytics')}>JEE Main - Full Test #04</span>
                        </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:ml-4">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="button" onClick={() => navigate('/test-analytics')}>
                            View Answer Key
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-slate-100 rounded-md shadow-sm text-sm font-medium text-slate-500 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 transition-all" type="button" onClick={() => navigate('/study-planner')}>
                            <Zap size={18} className="mr-2 text-slate-400" />
                            Generate Action Plan
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Rank Predictor Hero Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-50 dark:bg-indigo-900/20 blur-3xl opacity-50 pointer-events-none"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="text-center md:text-left">
                                    <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Predicted All India Rank (AIR)</h3>
                                    <div className="mt-2 flex items-baseline justify-center md:justify-start">
                                        <span className="text-5xl font-extrabold text-gray-900 dark:text-white font-display tracking-tight">2,450</span>
                                        <span className="ml-2 text-xl font-medium text-gray-500 dark:text-gray-400">- 3,100</span>
                                    </div>
                                    <div className="mt-4 flex items-center justify-center md:justify-start space-x-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                            <TrendingUp size={14} className="mr-1" />
                                            Top 1.5%
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Improvement from last test</span>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                        Your score of <span className="font-bold text-gray-900 dark:text-white">215/300</span> places you in a strong position for top-tier NITs and newer IITs.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center relative">
                                    <div className="mb-4 relative" style={{ width: '200px', height: '100px' }}>
                                        <svg width="200" height="100" viewBox="0 0 200 100">
                                            <path
                                                d="M 20 90 A 80 80 0 0 1 180 90"
                                                fill="none"
                                                stroke="#e5e7eb"
                                                strokeWidth="16"
                                                strokeLinecap="round"
                                                className="dark:stroke-gray-700"
                                            />
                                            <path
                                                d="M 20 90 A 80 80 0 0 1 180 90"
                                                fill="none"
                                                stroke="#4F46E5"
                                                strokeWidth="16"
                                                strokeLinecap="round"
                                                strokeDasharray={Math.PI * 80}
                                                style={{
                                                    strokeDashoffset: Math.PI * 80 * (1 - gaugeProgress),
                                                    transition: 'stroke-dashoffset 1s ease-out'
                                                }}
                                            />
                                        </svg>
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-center">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Competition</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between text-xs text-gray-500 px-8">
                                        <span>Top 10%</span>
                                        <span>Top 1%</span>
                                        <span>Top 0.1%</span>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <div className="text-sm font-medium text-primary">High Probability Range</div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500">Based on historic cutoffs & difficulty</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subject Breakdowns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Physics</p>
                                        <h4 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">72<span className="text-sm font-normal text-gray-400">/100</span></h4>
                                    </div>
                                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <FlaskConical size={20} />
                                    </div>
                                </div>
                                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '72%' }}></div>
                                </div>
                                <p className="mt-2 text-xs text-red-500 flex items-center">
                                    <AlertTriangle size={14} className="mr-1" /> Weakness: Rotational Motion
                                </p>
                            </div>

                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Chemistry</p>
                                        <h4 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">85<span className="text-sm font-normal text-gray-400">/100</span></h4>
                                    </div>
                                    <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                        <Microscope size={20} />
                                    </div>
                                </div>
                                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <p className="mt-2 text-xs text-green-600 dark:text-green-400 flex items-center">
                                    <CheckCircle size={14} className="mr-1" /> Strong: Organic Chem
                                </p>
                            </div>

                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-rose-500 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Mathematics</p>
                                        <h4 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">58<span className="text-sm font-normal text-gray-400">/100</span></h4>
                                    </div>
                                    <div className="p-2 bg-rose-50 dark:bg-rose-900/30 rounded-lg text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                        <Sigma size={20} />
                                    </div>
                                </div>
                                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '58%' }}></div>
                                </div>
                                <p className="mt-2 text-xs text-orange-500 flex items-center">
                                    <Timer size={14} className="mr-1" /> Time mgmt issue detected
                                </p>
                            </div>
                        </div>

                        {/* College Options */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white font-display">Potential College Options</h3>
                                <a className="text-sm font-medium text-primary hover:text-indigo-500 cursor-pointer">View Full List</a>
                            </div>
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xl font-bold text-indigo-700 dark:text-indigo-300">
                                            N
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                NIT Trichy
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                Computer Science Engineering
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                            92% Chance
                                        </div>
                                    </div>
                                </li>
                                <li className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xl font-bold text-blue-700 dark:text-blue-300">
                                            I
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                IIT Hyderabad
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                Electrical Engineering
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                                            65% Chance
                                        </div>
                                    </div>
                                </li>
                                <li className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-xl font-bold text-pink-700 dark:text-pink-300">
                                            B
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                BITS Pilani
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                Mechanical Engineering
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                            88% Chance
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Boost Rank Card */}
                        <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <Sparkles className="text-yellow-300 mr-2" size={24} />
                                    <h3 className="text-lg font-bold font-display">Boost Your Rank</h3>
                                </div>
                                <p className="text-blue-100 text-sm mb-6">
                                    Our AI detected you lost <span className="font-bold text-white">25 marks</span> due to silly calculation errors in Maths.
                                </p>
                                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors flex justify-center items-center" onClick={() => navigate('/study-planner')}>
                                    Generate Focused Study Plan
                                    <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>

                        {/* Critical Weak Areas */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 font-display">Critical Weak Areas</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600 dark:text-gray-400">Calculus (Maths)</span>
                                        <span className="font-medium text-red-500">35% Accuracy</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600 dark:text-gray-400">Optics (Physics)</span>
                                        <span className="font-medium text-orange-500">48% Accuracy</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600 dark:text-gray-400">Thermodynamics (Chem)</span>
                                        <span className="font-medium text-yellow-500">62% Accuracy</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a className="text-sm text-primary font-medium hover:underline flex items-center cursor-pointer" onClick={() => navigate('/stream-mock-tests')}>
                                    Practice questions from these topics
                                    <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>

                        {/* Upcoming Schedule */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 font-display">Upcoming Schedule</h3>
                            <div className="flow-root">
                                <ul className="-mb-8">
                                    <li>
                                        <div className="relative pb-8">
                                            <span aria-hidden="true" className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></span>
                                            <div className="relative flex space-x-3">
                                                <div>
                                                    <span className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                                                        <Clock size={16} className="text-blue-600 dark:text-blue-300" />
                                                    </span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-900 dark:text-white font-medium">Maths Revision: Algebra</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">Today, 4:00 PM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="relative pb-8">
                                            <div className="relative flex space-x-3">
                                                <div>
                                                    <span className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                                                        <FileText size={16} className="text-red-600 dark:text-red-300" />
                                                    </span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-900 dark:text-white font-medium">Mock Test #05 (Full)</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">Tomorrow, 9:00 AM</p>
                                                    </div>
                                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Trend (Custom CSS Chart) */}
                <div className="mt-8 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white font-display">Performance Trend</h3>
                        <select className="block w-32 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-transparent text-gray-900 dark:text-gray-200">
                            <option>Last 5 Tests</option>
                            <option>Last 10 Tests</option>
                            <option>This Month</option>
                        </select>
                    </div>
                    <div className="flex mt-10 w-full mb-4">
                        <div className="flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 h-64 pb-8 pr-4 text-right" style={{ minWidth: '40px' }}>
                            <span>300</span>
                            <span>225</span>
                            <span>150</span>
                            <span>75</span>
                            <span>0</span>
                        </div>
                        <div className="relative h-64 flex-1">
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 pb-8">
                                <div className="border-t border-gray-100 dark:border-gray-800 w-full"></div>
                                <div className="border-t border-gray-100 dark:border-gray-800 w-full"></div>
                                <div className="border-t border-gray-100 dark:border-gray-800 w-full"></div>
                                <div className="border-t border-gray-100 dark:border-gray-800 w-full"></div>
                                <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end justify-between px-2 sm:px-6 z-10 pb-8">
                                <div className="h-full w-full flex flex-col justify-end items-center group cursor-pointer relative">
                                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded mb-2">180</div>
                                    <div className="w-full max-w-[56px] bg-blue-200 dark:bg-blue-900/60 rounded-t hover:bg-blue-300 dark:hover:bg-blue-800 transition-all" style={{ height: '60%' }}></div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 absolute -bottom-6">Test 1</span>
                                </div>
                                <div className="h-full w-full flex flex-col justify-end items-center group cursor-pointer relative">
                                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded mb-2">195</div>
                                    <div className="w-full max-w-[56px] bg-blue-300 dark:bg-blue-800/60 rounded-t hover:bg-blue-400 dark:hover:bg-blue-700 transition-all" style={{ height: '65%' }}></div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 absolute -bottom-6">Test 2</span>
                                </div>
                                <div className="h-full w-full flex flex-col justify-end items-center group cursor-pointer relative">
                                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded mb-2">170</div>
                                    <div className="w-full max-w-[56px] bg-blue-200 dark:bg-blue-900/60 rounded-t hover:bg-blue-300 dark:hover:bg-blue-800 transition-all" style={{ height: '56%' }}></div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 absolute -bottom-6">Test 3</span>
                                </div>
                                <div className="h-full w-full flex flex-col justify-end items-center group cursor-pointer relative">
                                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded mb-2">205</div>
                                    <div className="w-full max-w-[56px] bg-blue-400 dark:bg-blue-700/60 rounded-t hover:bg-blue-500 dark:hover:bg-blue-600 transition-all" style={{ height: '68%' }}></div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 absolute -bottom-6">Test 4</span>
                                </div>
                                <div className="h-full w-full flex flex-col justify-end items-center group cursor-pointer relative">
                                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs py-1 px-2 rounded mb-2">215</div>
                                    <div className="w-full max-w-[56px] bg-blue-600 dark:bg-blue-500 rounded-t hover:bg-blue-700 dark:hover:bg-blue-400 transition-all shadow-md shadow-blue-500/20" style={{ height: '72%' }}></div>
                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 absolute -bottom-6">Current</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 mt-12">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a className="text-gray-400 hover:text-gray-500 cursor-pointer">
                            <span className="sr-only">About</span>
                            <span className="text-sm">About Us</span>
                        </a>
                        <a className="text-gray-400 hover:text-gray-500 cursor-pointer">
                            <span className="sr-only">Help</span>
                            <span className="text-sm">Help Center</span>
                        </a>
                        <a className="text-gray-400 hover:text-gray-500 cursor-pointer">
                            <span className="sr-only">Privacy</span>
                            <span className="text-sm">Privacy</span>
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            © 2023 ExamAI, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RankPredictor;
