import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EngineeringExams = () => {
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('Intermediate');
    const [selectedExam, setSelectedExam] = useState('');
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [selectedExamInfo, setSelectedExamInfo] = useState(null);
    const navigate = useNavigate();

    const handleInfoClick = (examDetails) => {
        setSelectedExamInfo(examDetails);
        setIsInfoModalOpen(true);
    };

    const handleStartTestClick = (examName) => {
        setSelectedExam(examName);
        setIsLevelModalOpen(true);
    };

    const handleStartExam = () => {
        setIsLevelModalOpen(false);
        navigate('/stream-mock-tests', { state: { exam: selectedExam, level: selectedLevel } });
    };
    return (
        <div className="bg-[#f6f7f8] dark:bg-[#101922] font-['Lexend'] text-slate-900 dark:text-slate-100 antialiased relative flex min-h-screen flex-col">

            <main className="mx-auto w-full max-w-7xl px-6 py-12">
                {/* Header Section */}
                <div className="mb-12 flex flex-col gap-6">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">Engineering Exams</h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-medium">Select and manage your entrance exams with a minimalist dashboard designed for clarity.</p>
                    </div>

                </div>



                {/* Exam Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: JEE Mains */}
                    <div className="group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 hover:shadow-2xl hover:ring-[#137fec]/50 transition-all duration-300 overflow-hidden min-h-[340px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg">
                                    <span className="material-symbols-outlined">precision_manufacturing</span>
                                </div>
                                <span className="rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">UG Engineering</span>
                            </div>

                            <div className="mt-auto pt-4 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">JEE Mains</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-2">National level undergraduate entrance for IITs and NITs. Focus on core physics, chemistry, and mathematics.</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleStartTestClick('JEE Mains')} className="flex-1 rounded-xl bg-[#137fec] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#137fec]/25 hover:bg-[#137fec]/90 transition-all backdrop-blur-sm">
                                        Start Test
                                    </button>
                                    <button onClick={() => handleInfoClick({ title: 'JEE Mains', description: 'National level undergraduate entrance for IITs and NITs. Focus on core physics, chemistry, and mathematics.', type: 'National', subjects: 'Physics, Chemistry, Mathematics', duration: '3 Hours', totalMarks: '300', negativeMarking: 'Yes (-1 per incorrect answer)' })} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white hover:bg-white/20 transition-all shadow-lg">
                                        <span className="material-symbols-outlined block text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: BITSAT */}
                    <div className="group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 hover:shadow-2xl hover:ring-[#137fec]/50 transition-all duration-300 overflow-hidden min-h-[340px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg">
                                    <span className="material-symbols-outlined">science</span>
                                </div>
                                <span className="rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">Institute Level</span>
                            </div>

                            <div className="mt-auto pt-4 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">BITSAT</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-2">Computer-based admission test for BITS Pilani campuses. High emphasis on speed and logical reasoning.</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleStartTestClick('BITSAT')} className="flex-1 rounded-xl bg-[#137fec] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#137fec]/25 hover:bg-[#137fec]/90 transition-all backdrop-blur-sm">
                                        Start Test
                                    </button>
                                    <button onClick={() => handleInfoClick({ title: 'BITSAT', description: 'Computer-based admission test for BITS Pilani campuses. High emphasis on speed and logical reasoning.', type: 'Institute Level', subjects: 'Physics, Chemistry, English & LR, Mathematics/Biology', duration: '3 Hours', totalMarks: '390', negativeMarking: 'Yes (-1 per incorrect answer)' })} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white hover:bg-white/20 transition-all shadow-lg">
                                        <span className="material-symbols-outlined block text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: GATE */}
                    <div className="group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 hover:shadow-2xl hover:ring-[#137fec]/50 transition-all duration-300 overflow-hidden min-h-[340px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg">
                                    <span className="material-symbols-outlined">memory</span>
                                </div>
                                <span className="rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">Postgraduate</span>
                            </div>

                            <div className="mt-auto pt-4 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">GATE</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-2">Graduate Aptitude Test in Engineering for Master's programs and Public Sector recruitment in India.</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleStartTestClick('GATE')} className="flex-1 rounded-xl bg-[#137fec] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#137fec]/25 hover:bg-[#137fec]/90 transition-all backdrop-blur-sm">
                                        Start Test
                                    </button>
                                    <button onClick={() => handleInfoClick({ title: 'GATE', description: 'Graduate Aptitude Test in Engineering for Master\'s programs and Public Sector recruitment in India.', type: 'National', subjects: 'General Aptitude + Core Subject', duration: '3 Hours', totalMarks: '100', negativeMarking: 'Yes (fractional deductions)' })} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white hover:bg-white/20 transition-all shadow-lg">
                                        <span className="material-symbols-outlined block text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: VITEEE */}
                    <div className="group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 hover:shadow-2xl hover:ring-[#137fec]/50 transition-all duration-300 overflow-hidden min-h-[340px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg">
                                    <span className="material-symbols-outlined">biotech</span>
                                </div>
                                <span className="rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">Multi-campus</span>
                            </div>

                            <div className="mt-auto pt-4 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">VITEEE</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-2">Vellore Institute of Technology Engineering Entrance Examination for multiple specialization tracks.</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleStartTestClick('VITEEE')} className="flex-1 rounded-xl bg-[#137fec] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#137fec]/25 hover:bg-[#137fec]/90 transition-all backdrop-blur-sm">
                                        Start Test
                                    </button>
                                    <button onClick={() => handleInfoClick({ title: 'VITEEE', description: 'Vellore Institute of Technology Engineering Entrance Examination for multiple specialization tracks.', type: 'Private', subjects: 'Maths/Bio, Physics, Chemistry, English, Aptitude', duration: '2.5 Hours', totalMarks: '125', negativeMarking: 'No' })} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white hover:bg-white/20 transition-all shadow-lg">
                                        <span className="material-symbols-outlined block text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: SRMJEEE */}
                    <div className="group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 hover:shadow-2xl hover:ring-[#137fec]/50 transition-all duration-300 overflow-hidden min-h-[340px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg">
                                    <span className="material-symbols-outlined">developer_board</span>
                                </div>
                                <span className="rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">Private Tech</span>
                            </div>

                            <div className="mt-auto pt-4 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">SRMJEEE</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-2">Entrance exam for SRM Institute of Science and Technology. Known for comprehensive technical syllabus.</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleStartTestClick('SRMJEEE')} className="flex-1 rounded-xl bg-[#137fec] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#137fec]/25 hover:bg-[#137fec]/90 transition-all backdrop-blur-sm">
                                        Start Test
                                    </button>
                                    <button onClick={() => handleInfoClick({ title: 'SRMJEEE', description: 'Entrance exam for SRM Institute of Science and Technology. Known for comprehensive technical syllabus.', type: 'Private', subjects: 'Physics, Chemistry, Mathematics/Biology, English, Aptitude', duration: '2.5 Hours', totalMarks: '125', negativeMarking: 'No' })} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white hover:bg-white/20 transition-all shadow-lg">
                                        <span className="material-symbols-outlined block text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: MET */}
                    <div className="group relative flex flex-col rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-800 hover:shadow-2xl hover:ring-[#137fec]/50 transition-all duration-300 overflow-hidden min-h-[340px]">
                        <div
                            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg">
                                    <span className="material-symbols-outlined">construction</span>
                                </div>
                                <span className="rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">Applied Science</span>
                            </div>

                            <div className="mt-auto pt-4 flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2">MET</h3>
                                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-2">Manipal Entrance Test for various engineering and health sciences courses at Manipal Academy.</p>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => handleStartTestClick('MET')} className="flex-1 rounded-xl bg-[#137fec] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#137fec]/25 hover:bg-[#137fec]/90 transition-all backdrop-blur-sm">
                                        Start Test
                                    </button>
                                    <button onClick={() => handleInfoClick({ title: 'MET', description: 'Manipal Entrance Test for various engineering and health sciences courses at Manipal Academy.', type: 'Private', subjects: 'Physics, Chemistry, Mathematics, English', duration: '2 Hours', totalMarks: '240', negativeMarking: 'Yes (-1 for incorrect)' })} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-3.5 text-white hover:bg-white/20 transition-all shadow-lg">
                                        <span className="material-symbols-outlined block text-xl">info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Info Modal */}
            {isInfoModalOpen && selectedExamInfo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative transition-all border border-slate-200 dark:border-slate-800">
                        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#137fec]">info</span>
                                About {selectedExamInfo.title}
                            </h3>
                            <button onClick={() => setIsInfoModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 p-1">
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-5">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {selectedExamInfo.description}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Type</div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">{selectedExamInfo.type}</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Duration</div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">{selectedExamInfo.duration}</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Total Marks</div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">{selectedExamInfo.totalMarks}</div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Negative Marking</div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">{selectedExamInfo.negativeMarking}</div>
                                </div>
                                <div className="col-span-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">Subjects</div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">{selectedExamInfo.subjects}</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
                            <button
                                onClick={() => setIsInfoModalOpen(false)}
                                className="w-full py-3 px-4 rounded-xl font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Level Selection Pop-up Modal */}
            {isLevelModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative transition-all border border-slate-200 dark:border-slate-800">
                        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#137fec]">tune</span>
                                Select Level
                            </h3>
                            <button onClick={() => setIsLevelModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 p-1">
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-3">
                            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                <label
                                    key={level}
                                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${selectedLevel === level ? 'border-[#137fec] bg-[#137fec]/5' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}
                                >
                                    <div className="relative flex items-center justify-center">
                                        <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-colors ${selectedLevel === level ? 'bg-[#137fec] border-[#137fec]' : 'border-slate-300 dark:border-slate-600'}`}>
                                            {selectedLevel === level && (
                                                <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                                            )}
                                        </div>
                                        <input
                                            type="radio"
                                            name="testLevel"
                                            value={level}
                                            checked={selectedLevel === level}
                                            onChange={() => setSelectedLevel(level)}
                                            className="hidden"
                                        />
                                    </div>
                                    <span className={`font-semibold text-lg ${selectedLevel === level ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                                        {level}
                                    </span>
                                </label>
                            ))}
                        </div>
                        <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
                            <button
                                onClick={() => setIsLevelModalOpen(false)}
                                className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleStartExam}
                                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-[#137fec] hover:bg-[#137fec]/90 shadow-lg shadow-[#137fec]/20 transition-all"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EngineeringExams;
