import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EXAM_STREAMS } from '../../data/exams';
import StepsTracker from '../ui/StepsTracker';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const ExamListLayout = ({ streamId }) => {
    const stream = EXAM_STREAMS[streamId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!stream) return <div>Stream not found</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900"
        >
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full">
                <div className="w-full flex justify-between items-center mb-6">
                    <Link className="flex items-center gap-2 text-slate-500 hover:text-[#113cbb] transition-colors font-semibold group" to="/select-stream">
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Streams
                    </Link>

                    {/* Breadcrumbs */}
                    <div className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                        <Link to="/select-stream" className="hover:text-[#113cbb] transition-colors">{stream.title}</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900">Select Exams</span>
                    </div>
                </div>

                {/* Steps Tracker */}
                <StepsTracker currentStep={2} />

                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">{stream.subtitle}</h1>
                    <p className="text-lg text-slate-500">
                        {stream.description}
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12"
                >
                    {stream.exams.map((exam) => (
                        <motion.div key={exam.id} variants={itemVariants} className="h-full">
                            <Link to={`/studyplanner/${exam.id}/setup`} className="relative group block h-full">
                                <div className={`bg-gradient-to-br ${exam.gradient} p-6 rounded-[2rem] border border-white/20 transition-transform duration-300 h-full flex flex-col text-left overflow-hidden shadow-xl hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]`}>
                                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px)' }}></div>

                                    <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center mb-6 relative z-10 shadow-inner ${exam.iconBg} backdrop-blur-md`}>
                                        <span className="material-symbols-outlined text-2xl text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
                                            {exam.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-2 relative z-10 tracking-tight">{exam.title}</h3>
                                    <p className="text-sm text-white/90 leading-relaxed mb-6 flex-grow relative z-10 font-medium">
                                        {exam.desc}
                                    </p>

                                    <div className="mt-auto relative z-10 w-full pt-4 border-t border-white/20">
                                        <div className="flex gap-2">
                                            {exam.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold bg-white/20 text-white px-2 py-1 rounded backdrop-blur-sm shadow-sm">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center border-2 border-[#113cbb] z-20">
                                        <div className="flex items-center gap-2 text-[#113cbb] font-bold text-xl">
                                            Select {exam.title}
                                            <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">add_circle</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex flex-col items-center w-full max-w-md mt-2">
                    <div className="text-sm text-slate-500 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
                        Not sure which exam? <a className="text-[#113cbb] font-bold hover:text-blue-800 hover:underline transition-colors" href="#">{stream.guideLink}</a>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default ExamListLayout;
