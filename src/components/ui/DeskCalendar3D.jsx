import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageContent = ({ day }) => (
    <div className="w-full h-full flex flex-col p-6 sm:p-8 justify-center relative bg-[#f4f9ff] border-b-[3px] border-slate-200 rounded-xl">
        {/* Logo Placeholder */}
        <div className="absolute top-6 left-8 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#d2efee]"></div>
            <div className="text-[10px] font-bold text-slate-800 leading-tight">
                LOGO HERE<br /><span className="text-slate-500 font-normal">Tagline Here</span>
            </div>
        </div>

        {/* Month Badge */}
        <div className="mt-8 mb-6 inline-block bg-[#d2efee] text-slate-800 px-6 py-2 rounded-full font-black text-lg tracking-widest shadow-md mx-auto w-max">
            {day.month}
        </div>

        {/* Center Content: Date (Left) and Topic (Right) Side by Side */}
        <div className="flex flex-row items-center justify-between w-full mt-4 h-full pb-4 px-2">

            {/* Left Side: Date */}
            <div className="flex flex-col items-center justify-center w-[45%] h-full border-r-2 border-slate-100 pr-4">
                <span className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-[-5px]">{day.day}</span>
                <span className="text-7xl font-black text-slate-800 tracking-tighter leading-none">{day.date}</span>
            </div>

            {/* Right Side: Topic with Gradient Background */}
            <div className="flex flex-col items-start justify-center w-[55%] h-full pl-6">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 opacity-80">
                    Topic of the Day
                </div>
                <div className="text-xl font-black text-white bg-gradient-to-br from-[#173CBA] to-[#00C798] px-5 py-3 rounded-2xl w-full shadow-lg shadow-[#00C798]/20 border border-white/20 break-words whitespace-normal leading-tight">
                    {day.topic}
                </div>
            </div>
        </div>
    </div>
);

const DeskCalendar3D = () => {
    // 5 Days of topics
    const schedule = [
        { date: '01', day: 'MON', month: 'JANUARY', topic: 'Calculus Introduction' },
        { date: '02', day: 'TUE', month: 'JANUARY', topic: 'Physics Kinematics' },
        { date: '03', day: 'WED', month: 'JANUARY', topic: 'Organic Chemistry' },
        { date: '04', day: 'THU', month: 'JANUARY', topic: 'Mock Test 1' },
        { date: '05', day: 'FRI', month: 'JANUARY', topic: 'Doubt Clearing Session' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll every 2.5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % schedule.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [schedule.length]);

    return (
        <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto perspective-[1200px] flex items-center justify-center">
            {/* The 3D Calendar Container */}
            <div className="relative w-[90%] h-[90%] transform-style-3d rotate-x-[15deg] rotate-y-[-5deg] shadow-2xl rounded-xl bg-[#f8f9fa] border-b-[8px] border-b-slate-300 transition-transform duration-700 hover:rotate-x-[10deg] hover:rotate-y-[0deg]">

                {/* Spiral Bindings */}
                <div className="absolute top-[-15px] left-0 w-full flex justify-between px-8 z-30 pointer-events-none">
                    {[...Array(14)].map((_, i) => (
                        <div key={i} className="w-3 h-8 bg-gradient-to-b from-slate-400 via-slate-700 to-slate-900 rounded-full border border-slate-500 shadow-xl"></div>
                    ))}
                </div>

                {/* Calendar Pages Container */}
                <div className="relative w-full h-full rounded-xl transform-style-3d z-20 shadow-inner">

                    {/* The flipping pages */}
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ rotateX: 0, opacity: 1, zIndex: 10 }}
                            animate={{ rotateX: 0, opacity: 1, zIndex: 10, transition: { duration: 0 } }}
                            exit={{
                                rotateX: -180,
                                zIndex: 20,
                                opacity: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeInOut",
                                    opacity: { delay: 0.4, duration: 0.2 },
                                    zIndex: { duration: 0 }
                                }
                            }}
                            className="absolute inset-0 rounded-xl shadow-md origin-top transform-style-3d bg-[#f4f9ff] overflow-hidden"
                            style={{ backfaceVisibility: 'hidden', transformOrigin: 'top center' }}
                        >
                            <PageContent day={schedule[currentIndex]} />

                            {/* Adding a gradient overlay to simulate shadow as it flips */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0 }}
                                exit={{ opacity: 1, transition: { duration: 0.4 } }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Back Stand Shadow/Tent fold illusion */}
                <div className="absolute inset-0 bg-slate-900/10 transform translate-y-6 -translate-x-2 blur-xl -z-10 rounded-xl pointer-events-none"></div>
                <div className="absolute left-[-20px] bottom-0 w-[40px] h-[95%] bg-slate-200 transform-style-3d -rotate-y-[80deg] origin-right skew-y-[15deg] box-border border-l-8 border-slate-300 z-0 pointer-events-none"></div>

            </div>
        </div>
    );
};

export default DeskCalendar3D;
