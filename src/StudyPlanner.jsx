import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ChevronLeft, ChevronRight, Download, CalendarRange,
    TrendingUp, ListChecks, Timer, ArrowUp,
    AlertCircle, AlertTriangle, Calendar, Lightbulb,
    Quote, Bot, BrainCircuit, Moon, Sun, Bell
} from 'lucide-react';

const StudyPlanner = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage or system preference on load
        const savedTheme = localStorage.getItem('color-theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0F172A] text-[#E2E8F0]' : 'bg-[#F3F4F6] text-[#1F2937]'}`}>
            {/* Embedded styles for specific dynamic color classes if needed, but Tailwind classes are preferred */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .progress-ring__circle {
                    transition: stroke-dashoffset 0.35s;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                }
                .text-primary { color: #4F46E5; }
                .bg-primary { background-color: #4F46E5; }
                .hover\\:bg-primary-hover:hover { background-color: #4338ca; }
                .text-accent-green { color: #10B981; }
                .text-accent-yellow { color: #F59E0B; }
                .text-accent-red { color: #EF4444; }
                .bg-accent-green { background-color: #10B981; }
                .bg-accent-yellow { background-color: #F59E0B; }
                .bg-accent-red { background-color: #EF4444; }
                .shadow-soft { box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); }
            `}} />

            <nav className={`border-b sticky top-0 z-50 ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/stream-mock-tests')}>
                                <BrainCircuit className="text-primary" size={32} />
                                <span className="font-bold text-xl tracking-tight">AI PrepMaster</span>
                            </div>
                            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                                <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/test-analytics')}>Dashboard</a>
                                <a className="border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/study-planner')}>Study Planner</a>
                                <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/stream-mock-tests')}>Mock Tests</a>
                                <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" onClick={() => navigate('/test-analytics')}>Analytics</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                            >
                                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                            <div className="relative">
                                <span className={`absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 transform translate-x-1/2 -translate-y-1/2 ${isDarkMode ? 'ring-[#1E293B]' : 'ring-white'}`}></span>
                                <Bell className="text-gray-500 cursor-pointer" size={24} />
                            </div>
                            <div
                                className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-primary flex items-center justify-center text-white font-bold text-sm cursor-pointer"
                                onClick={() => navigate('/user-profile')}
                            >
                                JD
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Your Personal Study Plan</h1>
                        <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>AI-generated schedule based on your recent Mock Test #4 performance.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className={`inline-flex items-center px-4 py-2 border rounded-lg shadow-sm text-sm font-medium ${isDarkMode ? 'border-gray-600 text-gray-200 bg-[#1E293B] hover:bg-gray-700' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}>
                            <Download className="mr-2" size={18} /> Export PDF
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            <CalendarRange className="mr-2" size={18} /> Adjust Preferences
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Top KPIs */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className={`rounded-xl p-5 shadow-soft border flex items-center gap-4 ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Predicted Rank</p>
                                    <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1,240 - 1,500</p>
                                    <p className="text-xs text-green-500 flex items-center mt-1">
                                        <ArrowUp size={14} className="mr-1" /> +150 ranks
                                    </p>
                                </div>
                            </div>
                            <div className={`rounded-xl p-5 shadow-soft border flex items-center gap-4 ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                                    <ListChecks size={24} />
                                </div>
                                <div>
                                    <p className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Syllabus Covered</p>
                                    <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>72%</p>
                                    <div className={`w-24 h-1.5 rounded-full mt-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div className="h-1.5 bg-green-500 rounded-full" style={{ width: '72%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={`rounded-xl p-5 shadow-soft border flex items-center gap-4 ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                                <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                                    <Timer size={24} />
                                </div>
                                <div>
                                    <p className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Study Hours</p>
                                    <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>6.5 hrs <span className="text-sm text-gray-400 font-normal">/ day</span></p>
                                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Target: 8 hrs</p>
                                </div>
                            </div>
                        </div>

                        {/* Weekly Schedule */}
                        <div className={`rounded-xl shadow-soft border overflow-hidden ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                            <div className={`px-6 py-5 border-b flex justify-between items-center ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Weekly Schedule</h3>
                                <div className="flex space-x-2">
                                    <button className={`p-1 rounded text-gray-500 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <span className={`text-sm font-medium self-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Oct 24 - Oct 30</span>
                                    <button className={`p-1 rounded text-gray-500 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                                    <div className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Mon</div>
                                    <div className="text-xs font-bold text-primary uppercase">Tue (Today)</div>
                                    <div className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Wed</div>
                                    <div className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Thu</div>
                                    <div className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Fri</div>
                                    <div className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sat</div>
                                    <div className={`text-xs font-medium uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sun</div>
                                </div>
                                <div className="space-y-4">
                                    {/* Timeline Item 1 */}
                                    <div className={`relative pl-8 border-l-2 pb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent-yellow ring-4 ${isDarkMode ? 'ring-[#1E293B]' : 'ring-white'}`}></div>
                                        <div className={`flex flex-col sm:flex-row sm:items-start justify-between p-4 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                                            <div>
                                                <span className={`text-xs font-bold text-accent-yellow px-2 py-1 rounded ${isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>06:00 AM - 09:00 AM</span>
                                                <h4 className={`text-md font-semibold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Physics: Electrostatics</h4>
                                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Focus on Gauss Law numericals. Your accuracy was low in last mock.</p>
                                            </div>
                                            <button className="mt-3 sm:mt-0 text-sm text-primary hover:underline">Start Practice</button>
                                        </div>
                                    </div>
                                    {/* Timeline Item 2 */}
                                    <div className={`relative pl-8 border-l-2 pb-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent-green ring-4 ${isDarkMode ? 'ring-[#1E293B]' : 'ring-white'}`}></div>
                                        <div className={`flex flex-col sm:flex-row sm:items-start justify-between p-4 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                                            <div>
                                                <span className={`text-xs font-bold text-accent-green px-2 py-1 rounded ${isDarkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>02:00 PM - 05:00 PM</span>
                                                <h4 className={`text-md font-semibold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Maths: Calculus Revision</h4>
                                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Mock Test scheduled. Complete Section A exercises.</p>
                                            </div>
                                            <button className="mt-3 sm:mt-0 text-sm text-primary hover:underline" onClick={() => navigate('/stream-mock-tests')}>Start Test</button>
                                        </div>
                                    </div>
                                    {/* Timeline Item 3 */}
                                    <div className={`relative pl-8 border-l-2 pb-0 border-transparent`}>
                                        <div className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ${isDarkMode ? 'ring-[#1E293B]' : 'ring-white'}`}></div>
                                        <div className={`flex flex-col sm:flex-row sm:items-start justify-between p-4 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                                            <div>
                                                <span className={`text-xs font-bold text-primary px-2 py-1 rounded ${isDarkMode ? 'bg-indigo-900/30' : 'bg-indigo-100'}`}>07:00 PM - 09:00 PM</span>
                                                <h4 className={`text-md font-semibold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Chemistry: Organic Reactions</h4>
                                                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Review named reactions sheet.</p>
                                            </div>
                                            <button className="mt-3 sm:mt-0 text-sm text-primary hover:underline">View Notes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Subject Mastery */}
                        <div className={`rounded-xl shadow-soft border p-6 ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Subject Mastery</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-end mb-1">
                                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Physics</span>
                                        <span className="text-sm font-bold text-accent-red">42% Accuracy</span>
                                    </div>
                                    <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div className="bg-accent-red h-2 rounded-full" style={{ width: '42%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Weakest Chapters: <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Rotational Motion, Waves</span></p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-1">
                                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Chemistry</span>
                                        <span className="text-sm font-bold text-accent-yellow">68% Accuracy</span>
                                    </div>
                                    <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div className="bg-accent-yellow h-2 rounded-full" style={{ width: '68%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Weakest Chapters: <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Thermodynamics</span></p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-1">
                                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mathematics</span>
                                        <span className="text-sm font-bold text-accent-green">85% Accuracy</span>
                                    </div>
                                    <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div className="bg-accent-green h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Weakest Chapters: <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>None (Strong Area)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Priority Chapters */}
                        <div className={`rounded-xl shadow-soft border overflow-hidden ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                            <div className="bg-gradient-to-r from-red-500 to-pink-600 px-6 py-4">
                                <div className="flex items-center gap-2 text-white">
                                    <AlertCircle size={24} />
                                    <h3 className="font-bold text-lg">Priority Chapters</h3>
                                </div>
                                <p className="text-red-100 text-xs mt-1">AI detected these as high-weightage but weak areas.</p>
                            </div>
                            <div className="p-0">
                                <ul className={`divide-y flex flex-col ${isDarkMode ? 'divide-gray-700' : 'divide-gray-100'}`}>
                                    <li className={`p-4 transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-1 ${isDarkMode ? 'bg-red-900/40 text-red-300' : 'bg-red-100 text-red-800'}`}>High Priority</span>
                                                <h4 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Rotational Motion</h4>
                                                <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Avg Score: 2/10 questions</p>
                                            </div>
                                            <button className="text-primary text-xs font-semibold hover:text-primary-hover border border-primary/20 px-2 py-1 rounded">Revise</button>
                                        </div>
                                    </li>
                                    <li className={`p-4 transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-1 ${isDarkMode ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-800'}`}>Medium Priority</span>
                                                <h4 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Integration</h4>
                                                <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Silly mistakes detected</p>
                                            </div>
                                            <button className="text-primary text-xs font-semibold hover:text-primary-hover border border-primary/20 px-2 py-1 rounded">Practice</button>
                                        </div>
                                    </li>
                                    <li className={`p-4 transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mb-1 ${isDarkMode ? 'bg-orange-900/40 text-orange-300' : 'bg-orange-100 text-orange-800'}`}>Medium Priority</span>
                                                <h4 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Equilibrium</h4>
                                                <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Slow solve speed</p>
                                            </div>
                                            <button className="text-primary text-xs font-semibold hover:text-primary-hover border border-primary/20 px-2 py-1 rounded">Quiz</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* AI Insights */}
                        <div className={`rounded-xl shadow-soft border p-6 ${isDarkMode ? 'bg-[#1E293B] border-gray-700' : 'bg-white border-gray-100'}`}>
                            <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                <Bot className="text-primary" size={24} />
                                AI Insights
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-red-500 ${isDarkMode ? 'bg-red-900/30' : 'bg-red-100'}`}>
                                            <AlertTriangle size={16} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                            <span className="font-semibold">Your Physics accuracy dropped to 40%.</span> Revise "Kinematics" today.
                                        </p>
                                        <span className="text-xs text-gray-400 block mt-1">2 hours ago</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-blue-500 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                                            <Calendar size={16} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                            Mock Test scheduled for <span className="font-semibold">tomorrow at 9:00 AM</span>. Prepare your setup.
                                        </p>
                                        <span className="text-xs text-gray-400 block mt-1">5 hours ago</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-green-500 ${isDarkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                                            <Lightbulb size={16} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                            Great job on Chemistry! Your organic score increased by 15%.
                                        </p>
                                        <span className="text-xs text-gray-400 block mt-1">Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quote of the Day */}
                        <div className="bg-indigo-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
                            <Quote className="absolute -right-4 -bottom-4 text-indigo-700 opacity-50" size={120} />
                            <p className="text-sm font-medium opacity-100 uppercase tracking-wider mb-2 text-indigo-300">Quote of the day</p>
                            <p className="text-lg font-serif italic mb-4 text-white font-bold drop-shadow-md">"Success is the sum of small efforts, repeated day in and day out."</p>
                            <p className="text-sm font-bold opacity-100 text-indigo-200">- Robert Collier</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudyPlanner;
