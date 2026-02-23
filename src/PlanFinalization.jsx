import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StepsTracker from './components/ui/StepsTracker';

const PlanFinalization = () => {
    const { examId } = useParams();

    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedMonth, setSelectedMonth] = useState('May');
    const [selectedGoal, setSelectedGoal] = useState('Top 5% (95%ile)');
    const [dailyHours, setDailyHours] = useState(6);
    const [aiOptimization, setAiOptimization] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        // Simulate AI generation time
        setTimeout(() => {
            setIsGenerating(false);
            setShowPreview(true);
        }, 2500);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900 pb-24"
        >
            <main className="flex-grow flex flex-col items-center px-4 py-8 lg:px-8 max-w-[1000px] mx-auto w-full">

                {/* Steps Tracker */}
                <StepsTracker currentStep={4} />

                {/* Header Titles */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Finalize Your Plan</h1>
                    <p className="text-[#64748B] text-lg font-medium max-w-xl mx-auto">
                        Just a few more details to help our AI craft the perfect schedule for your success.
                    </p>
                </div>

                {/* Main Card */}
                <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-6 md:p-10 flex flex-col md:flex-row gap-10 md:gap-14">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-8 w-full">

                        {/* Target Exam Date */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-[#113cbb]">calendar_month</span>
                                <h3 className="font-bold text-[#0F172A] text-lg">Target Exam Date</h3>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <div className="relative flex-1">
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#113cbb]/20 focus:border-[#113cbb] transition-all"
                                    >
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                                <div className="relative flex-1">
                                    <select
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                        className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#113cbb]/20 focus:border-[#113cbb] transition-all"
                                    >
                                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">We'll structure your revision timeline backwards from this date.</p>
                        </div>

                        {/* Personalized Goal */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-[#113cbb]">flag</span>
                                <h3 className="font-bold text-[#0F172A] text-lg">Personalized Goal</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {['Top 1% (99%ile)', 'Top 5% (95%ile)', 'Top 10% (90%ile)', 'Pass with Merit'].map((goal) => (
                                    <button
                                        key={goal}
                                        onClick={() => setSelectedGoal(goal)}
                                        className={`py-3 px-2 rounded-xl text-sm font-bold transition-all border-2 
                                            ${selectedGoal === goal
                                                ? 'bg-[#113cbb] text-white border-[#113cbb] shadow-md shadow-blue-500/20'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                                    >
                                        {goal}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* AI Break Optimization */}
                        <div
                            onClick={() => setAiOptimization(!aiOptimization)}
                            className={`flex gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all items-start
                                ${aiOptimization ? 'bg-blue-50/50 border-blue-100' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}`}
                        >
                            <div className={`w-6 h-6 rounded-full border-[6px] transition-colors mt-0.5
                                ${aiOptimization ? 'border-[#113cbb] bg-white' : 'border-slate-300 bg-transparent'}`}
                            ></div>
                            <div>
                                <h4 className="font-bold text-[#0F172A] text-base mb-1">AI Break Optimization</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">Includes scheduled mental health breaks and pomodoro intervals in your plan.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-8 w-full">

                        {/* Daily Commitment */}
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#113cbb]">schedule</span>
                                    <h3 className="font-bold text-[#0F172A] text-lg">Daily Commitment</h3>
                                </div>
                                <span className="text-[10px] font-bold text-[#FF7D29] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                    INTENSIVE
                                </span>
                            </div>

                            <div className="px-2 mb-8 relative">
                                <input
                                    type="range"
                                    min="2" max="12" step="1"
                                    value={dailyHours}
                                    onChange={(e) => setDailyHours(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#113cbb]"
                                    style={{
                                        background: `linear-gradient(to right, #113cbb ${(dailyHours - 2) / 10 * 100}%, #e2e8f0 ${(dailyHours - 2) / 10 * 100}%)`
                                    }}
                                />
                                {/* Custom Slider Track */}
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    input[type=range]::-webkit-slider-thumb {
                                        appearance: none;
                                        width: 24px;
                                        height: 24px;
                                        border-radius: 50%;
                                        background: #113cbb;
                                        border: 4px solid white;
                                        box-shadow: 0 2px 6px rgba(17,60,187,0.4);
                                        cursor: pointer;
                                    }
                                `}} />

                                <div className="absolute top-8 left-0 right-0 flex justify-between px-2 text-xs font-semibold text-slate-400">
                                    <span>2h</span>
                                    <span>4h</span>
                                    <span className="text-[#113cbb] font-black text-lg -mt-1">{dailyHours}h / day</span>
                                    <span>8h</span>
                                    <span>10h</span>
                                    <span>12h</span>
                                </div>
                            </div>
                        </div>

                        {/* Summary Block */}
                        <div className="bg-slate-50 rounded-2xl p-6 mt-4 border border-slate-100">
                            <h4 className="font-bold text-[#0F172A] mb-4">Based on your settings:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <span className="material-symbols-outlined text-[16px] text-green-500 mt-0.5">check</span>
                                    Plan duration: ~4.5 Months
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <span className="material-symbols-outlined text-[16px] text-green-500 mt-0.5">check</span>
                                    Completion date: Mid-September {selectedYear}
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <span className="material-symbols-outlined text-[16px] text-green-500 mt-0.5">check</span>
                                    Includes 2 Revision Cycles
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <button
                                onClick={handleGenerate}
                                className="w-full bg-[#113cbb] hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
                            >
                                <span className="material-symbols-outlined">auto_fix</span>
                                Generate My Study Plan
                            </button>
                            <div className="flex items-center justify-center gap-1.5 mt-4 text-xs font-semibold text-slate-400">
                                <span className="material-symbols-outlined text-[14px]">lock</span>
                                Secure & Private
                            </div>
                        </div>

                    </div>
                </div>

                {/* AI Schedule Preview Section (conditionally shown) */}
                <AnimatePresence>
                    {showPreview && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full mt-12 bg-[#0F172A] rounded-[32px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
                                            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                                            AI-Optimized Schedule
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black mb-2">Your Success Blueprint</h2>
                                        <p className="text-slate-400 font-medium">We've mapped out exactly what you need to study over the next week.</p>
                                    </div>
                                    <button className="bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2">
                                        Go to My Dashboard
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>

                                {/* Weekly Schedule Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { day: 'Monday', task: 'Physics: Laws of Motion', hours: '3h', status: 'Primary Focus', color: 'border-blue-500/50 bg-blue-500/5' },
                                        { day: 'Tuesday', task: 'Math: Calculus Basics', hours: '2.5h', status: 'Problem Solving', color: 'border-purple-500/50 bg-purple-500/5' },
                                        { day: 'Wednesday', task: 'Chemistry: Solutions', hours: '2h', status: 'Theory Study', color: 'border-teal-500/50 bg-teal-500/5' },
                                        { day: 'Thursday', task: 'Physics: Practice Set', hours: '3h', status: 'Revision Cycle', color: 'border-orange-500/50 bg-orange-500/5' },
                                    ].map((item, i) => (
                                        <div key={i} className={`p-6 rounded-2xl border ${item.color} backdrop-blur-sm group hover:scale-[1.02] transition-transform cursor-pointer`}>
                                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{item.day}</div>
                                            <div className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">{item.task}</div>
                                            <div className="flex items-center justify-between mt-6">
                                                <span className="text-sm font-medium text-slate-400">{item.hours}</span>
                                                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-white/10 text-white/60">{item.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Loading Overlay */}
                <AnimatePresence>
                    {isGenerating && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-6"
                        >
                            <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
                                <div className="relative w-24 h-24 mx-auto mb-8">
                                    <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-4 border-transparent border-t-[#113cbb] rounded-full"
                                    ></motion.div>
                                    <div className="absolute inset-0 flex items-center justify-center text-[#113cbb]">
                                        <span className="material-symbols-outlined text-3xl animate-pulse">auto_fix</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Analyzing Your Syllabus</h3>
                                <p className="text-slate-500 font-medium">Our AI is crunching high-weightage topics and personalizing your study path...</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
        </motion.div>
    );
};

export default PlanFinalization;
