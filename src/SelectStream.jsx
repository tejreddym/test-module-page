import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import StreamCard from './components/ui/StreamCard';
import StepsTracker from './components/ui/StepsTracker';
import './SelectStream.css';

const streams = [
    {
        id: 'engineering',
        icon: 'engineering',
        gradient: 'from-[#ff6b00] to-[#e63900]',
        iconBg: 'bg-white/20',
        title: 'Engineering',
        desc: 'JEE Mains, Advanced, BITSAT, GATE & more. Comprehensive coverage for top institutes.',
        tags: ['JEE', 'BITSAT']
    },
    {
        id: 'medical',
        icon: 'stethoscope',
        gradient: 'from-[#12cd9b] to-[#04a572]',
        iconBg: 'bg-white/20',
        title: 'Medical',
        desc: 'NEET UG, PG, AIIMS, and State Medical exams.',
        tags: ['NEET', 'AIIMS']
    },
    {
        id: 'management',
        icon: 'leaderboard',
        gradient: 'from-[#bc13fe] to-[#8f00f0]',
        iconBg: 'bg-white/20',
        title: 'Management',
        desc: 'Data interpretation, logical reasoning & quant for CAT, XAT, MAT, CMAT, SNAP, and GMAT.',
        tags: ['CAT', 'GMAT']
    },
    {
        id: 'commerce',
        icon: 'account_balance',
        gradient: 'from-[#426df8] to-[#1241df]',
        iconBg: 'bg-white/20',
        title: 'Commerce',
        desc: 'CA, CS, CMA, Banking exams.',
        tags: ['CA', 'Banking']
    },
    {
        id: 'law',
        icon: 'gavel',
        gradient: 'from-[#9b4dca] to-[#7f32a8]',
        iconBg: 'bg-white/20',
        title: 'Law & UPSC',
        desc: 'CLAT, AILET, Civil Services.',
        tags: ['CLAT', 'UPSC']
    },
    {
        id: 'civil',
        icon: 'public',
        gradient: 'from-[#ef4444] to-[#c71717]',
        iconBg: 'bg-white/20',
        title: 'State PSC & SSD',
        desc: 'State PSCs, and SSC exams.',
        tags: ['PSC', 'SSC']
    }
];

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

const SelectStream = () => {
    const [selectedStream, setSelectedStream] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-slate-50 min-h-screen flex flex-col antialiased text-slate-900"
        >
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full">
                <div className="w-full flex justify-start mb-6">
                    <Link className="flex items-center gap-2 text-slate-500 hover:text-[#113cbb] transition-colors font-semibold group" to="/">
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Landing Page
                    </Link>
                </div>

                {/* Steps Tracker */}
                <StepsTracker currentStep={1} />

                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Select Your Stream</h1>
                    <p className="text-lg text-[#64748B]">
                        Tell us what you're preparing for so we can personalize your schedule, mock tests, and analytics dashboard.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12"
                >
                    {streams.map((stream) => (
                        <StreamCard key={stream.id} stream={stream} itemVariants={itemVariants} />
                    ))}
                </motion.div>

                <div className="flex flex-col items-center w-full max-w-md mt-2">
                    <div className="text-sm text-slate-500 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
                        Not sure yet? <a className="text-[#113cbb] font-bold hover:text-blue-800 hover:underline transition-colors" href="#">Take our Career Assessment test</a>
                    </div>
                </div>
            </main>
        </motion.div>
    );
};

export default SelectStream;
