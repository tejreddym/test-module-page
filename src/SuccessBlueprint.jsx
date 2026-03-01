import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SuccessBlueprint = () => {
    const { examId } = useParams();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900 pb-24"
        >
            <main className="flex-grow flex flex-col items-center px-4 py-8 lg:px-8 max-w-[1200px] mx-auto w-full">

                {/* Success Blueprint Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-cm-dark rounded-[32px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cm-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cm-logical/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-cm-accent/20 text-cm-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-cm-accent/30">
                                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                                    AI-Optimized Schedule
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black mb-2">Your Success Blueprint</h2>
                                <p className="text-slate-400 font-medium">We've mapped out exactly what you need to study over the next week.</p>
                            </div>
                            <Link
                                to={`/studyplanner/${examId}/dashboard`}
                                className="bg-white text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Go to My Dashboard
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Weekly Schedule Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { day: 'Monday', task: 'Physics: Laws of Motion', hours: '3h', status: 'Primary Focus', color: 'border-cm-physics/50 bg-cm-physics/5' },
                                { day: 'Tuesday', task: 'Math: Calculus Basics', hours: '2.5h', status: 'Problem Solving', color: 'border-cm-maths/50 bg-cm-maths/5' },
                                { day: 'Wednesday', task: 'Chemistry: Solutions', hours: '2h', status: 'Theory Study', color: 'border-cm-chemistry/50 bg-cm-chemistry/5' },
                                { day: 'Thursday', task: 'Physics: Practice Set', hours: '3h', status: 'Revision Cycle', color: 'border-cm-physics/50 bg-cm-physics/5' },
                                { day: 'Friday', task: 'Math: Integration', hours: '2.5h', status: 'Concept Building', color: 'border-cm-maths/50 bg-cm-maths/5' },
                                { day: 'Saturday', task: 'Chemistry: Organic', hours: '3.5h', status: 'Deep Dive', color: 'border-cm-chemistry/50 bg-cm-chemistry/5' },
                                { day: 'Sunday', task: 'Full Mock Test', hours: '3h', status: 'Assessment', color: 'border-cm-warning/50 bg-cm-warning/5' },
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

            </main>
        </motion.div>
    );
};

export default SuccessBlueprint;
