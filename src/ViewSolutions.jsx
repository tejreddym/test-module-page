import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle, XCircle, MinusCircle, AlertCircle, Download } from 'lucide-react';
import './ViewSolutions.css';

const ViewSolutions = ({ questions, onClose }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [filter, setFilter] = useState('All');
    const [selectedSubject, setSelectedSubject] = useState('Physics');

    const subjects = ['Physics', 'Chemistry', 'Mathematics'];

    const filteredQuestions = questions.filter(q => {
        const subjectMatch = q.subject === selectedSubject;
        let statusMatch = true;

        if (filter === 'Correct') statusMatch = q.status === 'correct';
        else if (filter === 'Incorrect') statusMatch = q.status === 'incorrect';
        else if (filter === 'Unattempted') statusMatch = q.status === 'unattempted';

        return subjectMatch && statusMatch;
    });

    const currentQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

    // Calculate Legend Counts
    const counts = questions.reduce((acc, q) => {
        acc[q.status] = (acc[q.status] || 0) + 1;
        acc.total += 1;
        return acc;
    }, { correct: 0, incorrect: 0, unattempted: 0, total: 0 });

    const handlePrev = () => {
        if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleNext = () => {
        if (currentQuestionIndex < filteredQuestions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    if (!currentQuestion) return null;

    return (
        <div className="vs-overlay">
            <div className="vs-container">
                {/* Header */}
                <header className="vs-header">
                    <div className="vs-header-left">
                        <button className="vs-close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>
                        <button className="vs-download-report-btn">
                            <Download size={18} strokeWidth={1.5} style={{ color: '#475569' }} />
                            <span>Download Report</span>
                        </button>
                    </div>
                    <div className="vs-filters">
                        {['All', 'Correct', 'Incorrect', 'Unattempted'].map(f => (
                            <button
                                key={f}
                                className={`vs-filter-btn ${filter === f ? 'active' : ''}`}
                                onClick={() => {
                                    setFilter(f);
                                    setCurrentQuestionIndex(0);
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="vs-content">
                    {/* Sidebar Question List */}
                    <aside className="vs-sidebar">
                        <div className="vs-subject-tabs">
                            {subjects.map(sub => (
                                <button
                                    key={sub}
                                    className={`vs-sub-tab ${selectedSubject === sub ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedSubject(sub);
                                        setCurrentQuestionIndex(0);
                                    }}
                                >
                                    {sub}
                                </button>
                            ))}
                        </div>
                        <div className="vs-palette-header">
                            <h3>Question Palette</h3>
                            <p>Navigate to any question instantly</p>
                        </div>

                        <div className="vs-palette-legend">
                            <div className="vs-legend-item">
                                <span className="vs-dot correct"></span>
                                <span>Correct ({counts.correct})</span>
                            </div>
                            <div className="vs-legend-item">
                                <span className="vs-dot incorrect"></span>
                                <span>Incorrect ({counts.incorrect})</span>
                            </div>
                            <div className="vs-legend-item">
                                <span className="vs-dot unattempted"></span>
                                <span>Unattempted ({counts.unattempted})</span>
                            </div>
                            <div className="vs-legend-item">
                                <span className="vs-circle current"></span>
                                <span>Current</span>
                            </div>
                        </div>

                        <div className="vs-sidebar-scroll">
                            <div className="vs-subject-group">
                                <h4 className="vs-subject-header">{selectedSubject.toUpperCase()}</h4>
                                <div className="vs-palette-grid">
                                    {filteredQuestions.map((q, idx) => (
                                        <button
                                            key={idx}
                                            className={`vs-palette-item ${currentQuestionIndex === idx ? 'active' : ''} ${q.status}`}
                                            onClick={() => setCurrentQuestionIndex(idx)}
                                        >
                                            {idx + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Question Detail Area */}
                    <main className="vs-main">
                        <div className="vs-question-card">
                            <div className="vs-q-header">
                                <span className={`vs-status-badge ${currentQuestion.status}`}>
                                    {currentQuestion.status.toUpperCase()}
                                </span>
                                <span className="vs-subject-tag">{currentQuestion.subject}</span>
                            </div>

                            <div className="vs-q-body">
                                <p className="vs-text">{currentQuestion.question}</p>
                                {currentQuestion.image && <img src={currentQuestion.image} alt="Question" className="vs-q-image" />}

                                <div className="vs-options">
                                    {currentQuestion.options.map((opt, i) => {
                                        let optionClass = '';
                                        if (i === currentQuestion.correctOption) optionClass = 'correct';
                                        if (i === currentQuestion.userOption && i !== currentQuestion.correctOption) optionClass = 'incorrect';

                                        return (
                                            <div key={i} className={`vs-option-item ${optionClass}`}>
                                                <span className="vs-opt-label">{String.fromCharCode(65 + i)}</span>
                                                <span className="vs-opt-text">{opt}</span>
                                                {i === currentQuestion.correctOption && <CheckCircle size={18} className="vs-opt-icon" />}
                                                {i === currentQuestion.userOption && i !== currentQuestion.correctOption && <XCircle size={18} className="vs-opt-icon" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="vs-solution-box">
                                <div className="vs-sol-header">
                                    <AlertCircle size={18} />
                                    <h3>Step-by-Step Solution</h3>
                                </div>
                                <p className="vs-sol-text">{currentQuestion.solution}</p>
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        <div className="vs-navigation">
                            <button
                                className="vs-nav-btn secondary"
                                onClick={handlePrev}
                                disabled={currentQuestionIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                className="vs-nav-btn primary"
                                onClick={handleNext}
                                disabled={currentQuestionIndex === filteredQuestions.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ViewSolutions;
