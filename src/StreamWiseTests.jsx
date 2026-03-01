import React from 'react';
import { ArrowRight, Flame, GraduationCap, Stethoscope, Briefcase, Scale } from 'lucide-react';
import './StreamWiseTests.css';

const StreamWiseTests = () => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-1 w-8 bg-blue-700 rounded-full"></span>
                            <span className="text-blue-700 font-bold uppercase tracking-widest text-xs">Categories</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black mb-3 text-slate-900 dark:text-white">Explore Streams</h2>
                        <p className="text-slate-500 text-lg">Curated tests designed by experts for every career path</p>
                    </div>
                    <button
                        className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-blue-700/20 hover:scale-105 transition-all duration-300"
                        onClick={() => window.location.hash = '#all-streams'}
                    >
                        <span>View All Streams</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
                    <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-full card-pattern-engineering opacity-20"></div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-white/30">
                            <Flame size={14} className="mb-0.5" /> HOT
                        </div>
                        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                            <div>
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
                                    <GraduationCap size={32} />
                                </div>
                                <h3 className="text-3xl font-black mb-2">Engineering</h3>
                                <p className="text-orange-100 max-w-sm">JEE Mains, Advanced, BITSAT, GATE & more. Comprehensive coverage for top institutes.</p>
                            </div>
                            <div className="mt-auto pt-8">
                                <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors shadow-lg shadow-orange-900/20 group-hover:scale-[1.02] transform duration-200" onClick={() => window.location.hash = '#stream-tests'}>
                                    View Tests <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                        <GraduationCap className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 rotate-12" />
                    </div>

                    <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-bl from-teal-400 to-emerald-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute top-0 left-0 w-full h-full card-pattern-medical opacity-20"></div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                            POPULAR
                        </div>
                        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                            <div>
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
                                    <Stethoscope size={28} />
                                </div>
                                <h3 className="text-2xl font-black mb-2">Medical</h3>
                                <p className="text-teal-50 text-sm mb-4">NEET UG, PG, AIIMS, and State Medical exams.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded font-semibold">Biology</span>
                                    <span className="text-[10px] bg-white/10 px-2 py-1 rounded font-semibold">Chemistry</span>
                                </div>
                            </div>
                            <button className="w-full bg-white text-teal-600 px-4 py-3 rounded-xl font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 duration-300" onClick={() => window.location.hash = '#stream-tests'}>
                                Explore
                            </button>
                        </div>
                        <Stethoscope className="absolute -bottom-8 -right-8 w-40 h-40 opacity-10 rotate-[-15deg]" />
                    </div>

                    <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner border border-white/10">
                                    <Briefcase size={24} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-black mb-1">Management</h3>
                                <p className="text-blue-100 text-xs line-clamp-2">CAT, GMAT, XAT and top MBA entrance exams.</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-20">
                            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform" onClick={() => window.location.hash = '#stream-tests'}>View Details</button>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-inner border border-white/10">
                                    <Scale size={24} />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-black mb-1">Law & UPSC</h3>
                                <p className="text-purple-100 text-xs line-clamp-2">CLAT, AILET, Civil Services.</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-20">
                            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform" onClick={() => window.location.hash = '#stream-tests'}>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamWiseTests;
