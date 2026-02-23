import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { examData as fullExamData } from './data/examSyllabus';
import StepsTracker from './components/ui/StepsTracker';

const ExamSetup = () => {
    const { examId } = useParams();

    // Attempt to load the exact exam data, or fallback to returning null if not yet defined
    const [examData, setExamData] = useState(null);
    const [activeSubjectId, setActiveSubjectId] = useState('');
    const [selectedChapterIds, setSelectedChapterIds] = useState(new Set());

    useEffect(() => {
        const loadedData = fullExamData[examId];
        if (loadedData && loadedData.subjects && loadedData.subjects.length > 0) {
            setExamData(loadedData);
            setActiveSubjectId(loadedData.subjects[0].id);
            // Pre-select highly weighted chapters by default as a helpful feature!
            const highWeightage = new Set();
            loadedData.subjects.forEach(sub => {
                sub.categories.forEach(cat => {
                    cat.chapters.forEach(ch => {
                        if (ch.weightage === 'high') {
                            highWeightage.add(ch.id);
                        }
                    });
                });
            });
            setSelectedChapterIds(highWeightage);
        } else {
            setExamData(null);
        }
    }, [examId]);

    const activeSubject = examData?.subjects.find(s => s.id === activeSubjectId);

    // Get all chapter IDs for the active subject
    const activeSubjectChapterIds = useMemo(() => {
        if (!activeSubject) return [];
        const ids = [];
        activeSubject.categories.forEach(cat => {
            cat.chapters.forEach(ch => ids.push(ch.id));
        });
        return ids;
    }, [activeSubject]);

    // Calculate how many chapters are selected for the active subject
    const selectedActiveCount = useMemo(() => {
        return activeSubjectChapterIds.filter(id => selectedChapterIds.has(id)).length;
    }, [selectedChapterIds, activeSubjectChapterIds]);

    const handleSelectAll = () => {
        const newSet = new Set(selectedChapterIds);
        const allSelected = selectedActiveCount === activeSubjectChapterIds.length;

        activeSubjectChapterIds.forEach(id => {
            if (allSelected) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
        });
        setSelectedChapterIds(newSet);
    };

    const toggleChapter = (id) => {
        const newSet = new Set(selectedChapterIds);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setSelectedChapterIds(newSet);
    };

    // Compute the dynamic summary string
    const summaryText = useMemo(() => {
        if (!examData) return '';

        const parts = [];
        examData.subjects.forEach(subject => {
            // Count total chapters for this subject
            let totalChapters = 0;
            let selectedChapters = 0;

            subject.categories.forEach(cat => {
                cat.chapters.forEach(ch => {
                    totalChapters++;
                    if (selectedChapterIds.has(ch.id)) {
                        selectedChapters++;
                    }
                });
            });

            if (selectedChapters > 0) {
                if (selectedChapters === totalChapters) {
                    parts.push(`${subject.name} (All)`);
                } else {
                    parts.push(`${subject.name} (${selectedChapters})`);
                }
            }
        });

        return parts.length > 0 ? parts.join(' + ') : 'No chapters selected';
    }, [examData, selectedChapterIds]);

    if (!examData) {
        return (
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900 justify-center items-center"
            >
                <div className="text-center max-w-lg p-8">
                    <div className="w-20 h-20 bg-blue-100 text-[#113cbb] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-4xl">construction</span>
                    </div>
                    <h1 className="text-3xl font-black mb-4">Syllabus Coming Soon</h1>
                    <p className="text-slate-500 mb-8">We are closely curating the exact chapters and high-weightage topics for the <strong>{examId}</strong> exam.</p>
                    <Link to="/select-stream" className="bg-[#113cbb] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all">
                        Go Back to Streams
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900 pb-24"
        >
            <main className="flex-grow flex flex-col items-center px-4 py-8 lg:px-8 max-w-[1400px] mx-auto w-full">

                {/* Steps Tracker */}
                <StepsTracker currentStep={3} />

                {/* Header Titles */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Personalize Your Focus</h1>
                    <p className="text-[#64748B] text-lg font-medium max-w-2xl mx-auto">
                        Select the subjects you want to focus on and customize specific chapters to generate your tailored study plan.
                    </p>
                </div>

                {/* Main Two-Panel Layout */}
                <div className="flex flex-col lg:flex-row gap-8 w-full">

                    {/* Left Panel: Subjects List */}
                    <div className="w-full lg:w-1/4 xl:w-[320px] flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2 text-slate-800 font-bold px-2">
                            <span className="material-symbols-outlined text-blue-600">view_list</span>
                            Select Subjects
                        </div>

                        {examData.subjects.map((subject) => {
                            const isSelected = activeSubjectId === subject.id;

                            const handleSubjectClick = () => {
                                setActiveSubjectId(subject.id);
                                // On mobile, scroll down to the chapters section when a subject is clicked
                                if (window.innerWidth < 1024) {
                                    setTimeout(() => {
                                        document.getElementById('chapters-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 50);
                                }
                            };

                            return (
                                <div
                                    key={subject.id}
                                    onClick={handleSubjectClick}
                                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-200 border-2
                                        ${isSelected
                                            ? 'bg-blue-50/50 border-blue-500 shadow-[0_4px_16px_rgba(17,60,187,0.06)]'
                                            : 'bg-white border-transparent hover:border-slate-200 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    {/* Small indicator on the left for selected */}
                                    {isSelected && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-md bg-blue-600"></div>}

                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${subject.iconBg}`}>
                                            <span className={`material-symbols-outlined ${subject.iconColor}`}>
                                                {subject.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1E293B] text-lg">{subject.name}</h3>
                                            <p className="text-sm font-semibold text-slate-500">{subject.totalChapters} Chapters</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Panel: Chapters List view */}
                    <div id="chapters-panel" className="w-full lg:w-3/4 flex-grow bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col scroll-mt-6">

                        {/* Header of the Right Panel */}
                        <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-[#0F172A] mb-1">{activeSubject.name} Chapters</h2>
                                <p className="text-slate-500 font-medium text-sm md:text-base">Select chapters to include in your study plan.</p>
                            </div>

                            <div className="flex items-center gap-3 bg-slate-50 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none">
                                <span className="text-sm font-bold text-[#1E293B]">
                                    <span className="text-[#113cbb] text-base">{selectedActiveCount}</span> of {activeSubjectChapterIds.length} selected
                                </span>
                                <button
                                    onClick={handleSelectAll}
                                    className="text-sm font-bold text-[#113cbb] hover:text-blue-800 underline underline-offset-4 decoration-2 decoration-blue-200 hover:decoration-[#113cbb] transition-all"
                                >
                                    {selectedActiveCount === activeSubjectChapterIds.length ? 'Deselect All' : 'Select All'}
                                </button>
                            </div>
                        </div>

                        {/* Chapters Container */}
                        <div className="p-8">
                            {activeSubject.categories.map((category, catIdx) => (
                                <div key={category.name} className="mb-10 last:mb-0 pb-8 last:pb-0 border-b last:border-0 border-slate-100">
                                    {/* Category Title */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-8 h-[3px] rounded-full ${category.colorClass}`}></div>
                                        <h3 className="uppercase tracking-widest text-[#94A3B8] font-black text-[13px]">{category.name}</h3>
                                    </div>

                                    {/* Chapters Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {category.chapters.map((chapter) => {
                                            const isChecked = selectedChapterIds.has(chapter.id);
                                            return (
                                                <div
                                                    key={chapter.id}
                                                    onClick={() => toggleChapter(chapter.id)}
                                                    className={`relative border-2 rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 
                                                        ${isChecked
                                                            ? 'border-blue-500 bg-blue-50/30'
                                                            : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'}`}
                                                >
                                                    {/* Checkbox Replacement */}
                                                    <div className={`w-6 h-6 min-w-[24px] rounded-lg border-[2px] flex items-center justify-center transition-all
                                                        ${isChecked ? 'bg-[#113cbb] border-[#113cbb] text-white' : 'bg-white border-slate-200'}`}
                                                    >
                                                        {isChecked && <span className="material-symbols-outlined text-[16px] font-bold scale-110">check</span>}
                                                    </div>

                                                    <span className={`font-bold text-[15px] transition-colors ${isChecked ? 'text-[#113cbb]' : 'text-slate-700'}`}>
                                                        {chapter.name}
                                                    </span>

                                                    {/* Badge */}
                                                    {chapter.weightage === 'high' && (
                                                        <span className={`absolute -top-3 right-4 text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm tracking-tight
                                                            ${isChecked ? 'bg-[#FF7D29] text-white' : 'bg-orange-100 text-[#FF7D29]'}`}>
                                                            HIGH WEIGHTAGE
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>

            {/* Floating Action Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 py-4 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm">
                        <span className="font-extrabold text-slate-800">Summary: </span>
                        <span className="font-medium text-slate-500">{summaryText}</span>
                    </div>

                    <Link
                        to={`/studyplanner/${examId}/finalize`}
                        style={{ pointerEvents: selectedChapterIds.size === 0 ? 'none' : 'auto' }}
                        className={`font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all flex items-center gap-2 transform ${selectedChapterIds.size > 0
                            ? 'bg-[#113cbb] hover:bg-blue-800 text-white hover:shadow-xl hover:-translate-y-0.5'
                            : 'bg-slate-200 text-slate-400 opacity-70'
                            }`}
                    >
                        Set Goal
                        <span className="material-symbols-outlined text-[20px]">magic_button</span>
                    </Link>
                </div>
            </div>

        </motion.div>
    );
};

export default ExamSetup;
