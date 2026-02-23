import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StreamCard = ({ stream, itemVariants }) => {
    return (
        <motion.div variants={itemVariants} className="h-full">
            <Link to={`/studyplanner-${stream.id}-exams-list`} className="relative group block h-full">
                <div className={`bg-gradient-to-br ${stream.gradient} p-6 rounded-[2rem] border border-white/20 transition-transform duration-300 h-full flex flex-col text-left overflow-hidden shadow-xl hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]`}>
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px)' }}></div>

                    <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center mb-6 relative z-10 shadow-inner ${stream.iconBg} backdrop-blur-md`}>
                        <span className="material-symbols-outlined text-2xl text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
                            {stream.icon}
                        </span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 relative z-10 tracking-tight">{stream.title}</h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-6 flex-grow relative z-10 font-medium">
                        {stream.desc}
                    </p>

                    <div className="mt-auto relative z-10 w-full pt-4">
                        <div className="bg-white text-[#113cbb] rounded-xl py-3 px-4 font-bold text-center text-sm flex items-center justify-center gap-2 transition-transform duration-300 transform group-hover:-translate-y-1 shadow-lg">
                            View Tests
                            <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                        </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center border-2 border-[#113cbb] z-20">
                        <div className="flex items-center gap-2 text-[#113cbb] font-bold text-xl">
                            Show {stream.title} Exams
                            <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default StreamCard;
