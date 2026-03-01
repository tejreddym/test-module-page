import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import StepsTracker from './components/ui/StepsTracker';

const PlanFinalization = () => {
    const { examId } = useParams();
    const navigate = useNavigate();

    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedMonth, setSelectedMonth] = useState('May');
    const [selectedGoal, setSelectedGoal] = useState('Top 5% (95%ile)');
    const [dailyHours, setDailyHours] = useState(6);
    const [aiOptimization, setAiOptimization] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        // Simulate AI generation time
        setTimeout(() => {
            setIsGenerating(false);
            navigate(`/studyplanner/${examId}/blueprint`);
        }, 2500);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-rose-50 min-h-screen flex flex-col antialiased text-slate-900 pb-24"
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
                                <span className="material-symbols-outlined text-cm-primary">calendar_month</span>
                                <h3 className="font-bold text-[#0F172A] text-lg">Target Exam Date</h3>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <div className="relative flex-1">
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full appearance-none bg-white border border-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cm-primary/20 focus:border-cm-primary transition-all"
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
                                        className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cm-primary/20 focus:border-cm-primary transition-all"
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
                                <span className="material-symbols-outlined text-cm-primary">flag</span>
                                <h3 className="font-bold text-[#0F172A] text-lg">Personalized Goal</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {['Top 1% (99%ile)', 'Top 5% (95%ile)', 'Top 10% (90%ile)', 'Pass with Merit'].map((goal) => (
                                    <button
                                        key={goal}
                                        onClick={() => setSelectedGoal(goal)}
                                        className={`py-3 px-2 rounded-xl text-sm font-bold transition-all border-2 
                                            ${selectedGoal === goal
                                                ? 'bg-cm-primary text-white border-cm-primary shadow-md shadow-cm-primary/20'
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
                                ${aiOptimization ? 'border-cm-primary bg-white' : 'border-slate-300 bg-transparent'}`}
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
                                    <span className="material-symbols-outlined text-cm-primary">schedule</span>
                                    <h3 className="font-bold text-[#0F172A] text-lg">Daily Commitment</h3>
                                </div>
                                <span className="text-[10px] font-bold text-cm-maths bg-cm-maths/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                    INTENSIVE
                                </span>
                            </div>

                            <div className="px-2 mb-8 relative">
                                <input
                                    type="range"
                                    min="2" max="12" step="1"
                                    value={dailyHours}
                                    onChange={(e) => setDailyHours(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cm-primary"
                                    style={{
                                        background: `linear-gradient(to right, #173CBA ${(dailyHours - 2) / 10 * 100}%, #e2e8f0 ${(dailyHours - 2) / 10 * 100}%)`
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
                                        background: #173CBA;
                                        border: 4px solid white;
                                        box-shadow: 0 2px 6px rgba(23,60,186,0.4);
                                        cursor: pointer;
                                    }
                                `}} />

                                <div className="absolute top-8 left-0 right-0 flex justify-between px-2 text-xs font-semibold text-slate-400">
                                    <span>2h</span>
                                    <span>4h</span>
                                    <span className="text-cm-primary font-black text-lg -mt-1">{dailyHours}h / day</span>
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
                                    <span className="material-symbols-outlined text-[16px] text-cm-success mt-0.5">check</span>
                                    Plan duration: ~4.5 Months
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <span className="material-symbols-outlined text-[16px] text-cm-success mt-0.5">check</span>
                                    Completion date: Mid-September {selectedYear}
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <span className="material-symbols-outlined text-[16px] text-cm-success mt-0.5">check</span>
                                    Includes 2 Revision Cycles
                                </li>
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-auto">
                            <button
                                onClick={handleGenerate}
                                className="w-full bg-cm-primary hover:bg-cm-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-cm-primary/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
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
                                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-4 border-transparent border-t-cm-primary rounded-full"
                                    ></motion.div>
                                    <div className="absolute inset-0 flex items-center justify-center text-cm-primary">
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
