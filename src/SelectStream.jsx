import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import StepsTracker from './components/ui/StepsTracker';
import './SelectStream.css';

const streams = [
    {
        id: 'engineering',
        title: 'Engineering',
        desc: 'JEE Mains, Advanced, BITSAT, GATE & more. Comprehensive coverage for top institutes.',
        icon: 'engineering',
        color: '#EA580C',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'medical',
        title: 'Medical',
        desc: 'NEET UG, PG, AIIMS, and State Medical exams.',
        icon: 'medical_services',
        color: '#0D9488',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'management',
        title: 'Management',
        desc: 'CAT, MAT, XAT, GMAT & MBA exams.',
        icon: 'business_center',
        color: '#9333EA',
        image: 'https://images.unsplash.com/photo-1454165833767-027ffea36c2e?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'commerce',
        title: 'Commerce',
        desc: 'CA, CS, CMA, Banking exams and Accountancy guides.',
        icon: 'account_balance',
        color: '#059669',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'law',
        title: 'Law & UPSC',
        desc: 'CLAT, AILET, Civil Services and Judiciary exams.',
        icon: 'gavel',
        color: '#7C3AED',
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 'civil',
        title: 'Civil Services',
        desc: 'IAS, IPS, IFS, State PSC and other competitive govt exams.',
        icon: 'public',
        color: '#1E3A8A',
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=600'
    }
];

const StreamCard = ({ stream, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/studyplanner-${stream.id}-exams-list`);
    };

    return (
        <div
            className="perspective-1000 h-[260px] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={handleCardClick}
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                initial={false}
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-[1.5rem] overflow-hidden shadow-lg">
                    <div className="relative h-full w-full">
                        {/* Background Image */}
                        <img
                            src={stream.image}
                            alt={stream.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 transition-opacity duration-300"
                            style={{
                                background: `linear-gradient(to bottom, ${stream.color}40, ${stream.color}80)`,
                            }}
                        />

                        <div className="relative z-10 p-6 h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20">
                                <span className="material-symbols-outlined text-2xl text-white">{stream.icon}</span>
                            </div>

                            {/* Content */}
                            <div className="mt-auto">
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{stream.title}</h3>
                                <p className="text-white/90 text-sm font-medium leading-relaxed line-clamp-2 mb-6">
                                    {stream.desc}
                                </p>

                                {/* Action Button */}
                                <div
                                    className="inline-flex bg-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider items-center justify-center gap-2 transition-all hover:bg-slate-50 shadow-md"
                                    style={{ color: stream.color }}
                                >
                                    Select Now <ArrowUpRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 backface-hidden rotate-x-180 rounded-[1.5rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 text-center"
                    style={{ backgroundColor: stream.color }}
                >
                    {/* Lite background image */}
                    <div className="absolute inset-0 opacity-15">
                        <img
                            src={stream.image}
                            alt=""
                            className="w-full h-full object-cover grayscale brightness-150 contrast-125"
                        />
                    </div>

                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/30 shadow-xl">
                            <span className="material-symbols-outlined text-4xl text-white">{stream.icon}</span>
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-wider drop-shadow-xl">{stream.title}</h3>
                        <div
                            className="inline-flex items-center gap-3 bg-white text-slate-900 border-2 border-white/50 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 shadow-2xl"
                            style={{ color: stream.color }}
                        >
                            Select Now <Sparkles size={16} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SelectStream = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50/50 font-sans antialiased flex flex-col">
            {/* Header Section */}
            <header className="pt-4 pb-2 px-6">
                <div className="container mx-auto max-w-[1400px]">
                    <div className="flex flex-col items-center gap-4">
                        {/* Navigation link */}
                        <div className="w-full flex justify-start">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-600 transition-all font-bold text-[11px] tracking-wide group"
                            >
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Landing Page
                            </Link>
                        </div>

                        {/* Title Section */}
                        <div className="text-center max-w-2xl">
                            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                                Select Your Stream
                            </h1>
                            <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
                                Tell us what you're preparing for so we can personalize your journey.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Grid Architecture */}
            <main className="container mx-auto max-w-[1400px] px-6 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {streams.map((stream, index) => (
                        <StreamCard key={stream.id} stream={stream} index={index} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SelectStream;
