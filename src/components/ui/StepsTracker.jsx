import React from 'react';
import { Link } from 'react-router-dom';

const StepsTracker = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Stream', path: '/select-stream' },
        { id: 2, label: 'Exam', back: true }, // Back logic handled internally or via path
        { id: 3, label: 'Subjects' },
        { id: 4, label: 'Finalize Plan' }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-3 rounded-full border border-slate-200 shadow-sm mb-8 text-xs sm:text-sm font-semibold max-w-fit mx-auto">
            {steps.map((step, index) => {
                const isDone = currentStep > step.id;
                const isActive = currentStep === step.id;
                const isPending = currentStep < step.id;

                return (
                    <React.Fragment key={step.id}>
                        {index > 0 && <span className="text-slate-300">›</span>}

                        <div className={`flex items-center gap-1.5 sm:gap-2 ${isActive ? 'text-cm-primary' : isDone ? 'text-slate-700' : 'text-slate-400'}`}>
                            {isDone ? (
                                <Link
                                    to={step.path || '#'}
                                    onClick={(e) => {
                                        if (!step.path) {
                                            e.preventDefault();
                                            if (step.back) window.history.back();
                                        }
                                    }}
                                    className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-700 transition-colors"
                                >
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cm-success/10 flex items-center justify-center text-cm-success">
                                        <span className="material-symbols-outlined text-[10px] sm:text-[14px] font-bold">check</span>
                                    </div>
                                    {step.label}
                                </Link>
                            ) : (
                                <>
                                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs
                                        ${isActive ? 'bg-cm-primary text-white' : 'bg-slate-100 text-slate-400'}`}
                                    >
                                        {step.id}
                                    </div>
                                    {step.label}
                                </>
                            )}
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default StepsTracker;
