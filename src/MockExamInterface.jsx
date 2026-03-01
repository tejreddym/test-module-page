import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ChevronRight,
    ChevronLeft,
    Flag,
    CheckCircle2,
    AlertCircle,
    Check,
    Send,
    Bookmark,
    Calculator,
    Info,
    Delete,
    X,
    Menu
} from 'lucide-react';
import './MockExamInterface.css';
import { jeeTestData } from './jeeTestData';
import ScientificCalculator from './ScientificCalculator';
import RoughNote from './RoughNote';

const MockExamInterface = () => {
    const navigate = useNavigate();
    // Timer State
    const [timeLeft, setTimeLeft] = useState(10530); // 02:55:30

    // UI State
    const [showCalculator, setShowCalculator] = useState(false);
    const [showRoughSheet, setShowRoughSheet] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [showMobilePalette, setShowMobilePalette] = useState(false);

    // Test Progress State
    const [currentSubject, setCurrentSubject] = useState('Physics');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // User response state: { Subject: { questionId: { answer: 'A', status: 'answered' | 'marked' | 'visited' } } }
    const [userResponses, setUserResponses] = useState({
        Physics: {},
        Chemistry: {},
        Mathematics: {}
    });

    const subjects = ['Physics', 'Chemistry', 'Mathematics'];

    // Current data based on subject
    const currentQuestions = useMemo(() => jeeTestData[currentSubject] || [], [currentSubject]);
    const currentQuestion = currentQuestions[currentQuestionIndex] || {};

    // Local selection state (cleared when moving questions if not saved)
    const [tempSelection, setTempSelection] = useState(null);

    // Sync temp selection with saved response when question changes
    useEffect(() => {
        if (currentQuestion && currentQuestion.id) {
            const saved = userResponses[currentSubject][currentQuestion.id];
            setTempSelection(saved ? saved.answer : null);

            setUserResponses(prev => {
                const subjData = prev[currentSubject] || {};
                const qData = subjData[currentQuestion.id] || {};
                if (!qData.visited) {
                    return {
                        ...prev,
                        [currentSubject]: {
                            ...subjData,
                            [currentQuestion.id]: {
                                ...qData,
                                visited: true
                            }
                        }
                    };
                }
                return prev;
            });
        }
    }, [currentSubject, currentQuestionIndex, currentQuestion?.id]);

    // Timer Effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTimePart = (val) => val.toString().padStart(2, '0');
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // --- Dynamic Question Counts ---
    const getStatusForGlobal = (sub, qId) => {
        const res = userResponses[sub]?.[qId];
        if (res?.status === 'answered_marked') return 'answered_marked';
        if (res?.status === 'marked') return 'marked';
        if (res?.answer) return 'answered';
        if (res?.visited && !res?.answer) return 'not-answered';
        return 'not-visited';
    };

    const statusCounts = useMemo(() => {
        const counts = { answered: 0, notAnswered: 0, notVisited: 0, marked: 0, answeredMarked: 0 };

        subjects.forEach(sub => {
            const qs = jeeTestData[sub] || [];
            qs.forEach(q => {
                const status = getStatusForGlobal(sub, q.id);
                if (status === 'answered') counts.answered++;
                else if (status === 'answered_marked') counts.answeredMarked++;
                else if (status === 'not-answered') counts.notAnswered++;
                else if (status === 'marked') counts.marked++;
                else counts.notVisited++;
            });
        });

        return counts;
    }, [userResponses, subjects]);


    // Handlers
    const handleSubjectChange = (sub) => {
        setCurrentSubject(sub);
        setCurrentQuestionIndex(0);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            const subIdx = subjects.indexOf(currentSubject);
            if (subIdx < subjects.length - 1) {
                handleSubjectChange(subjects[subIdx + 1]);
            }
        }
    };

    const handleSaveAndNext = () => {
        if (tempSelection && currentQuestion.id) {
            setUserResponses(prev => ({
                ...prev,
                [currentSubject]: {
                    ...prev[currentSubject],
                    [currentQuestion.id]: {
                        ...prev[currentSubject]?.[currentQuestion.id],
                        answer: tempSelection,
                        status: 'answered'
                    }
                }
            }));
        }
        goToNextQuestion();
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        } else {
            const subIdx = subjects.indexOf(currentSubject);
            if (subIdx > 0) {
                const prevSub = subjects[subIdx - 1];
                setCurrentSubject(prevSub);
                setCurrentQuestionIndex((jeeTestData[prevSub] || []).length - 1);
            }
        }
    };

    const handleMarkForReview = () => {
        if (currentQuestion.id) {
            setUserResponses(prev => ({
                ...prev,
                [currentSubject]: {
                    ...prev[currentSubject],
                    [currentQuestion.id]: {
                        ...prev[currentSubject]?.[currentQuestion.id],
                        answer: tempSelection,
                        status: 'marked'
                    }
                }
            }));
            goToNextQuestion();
        }
    };

    const handleSaveAndMarkForReview = () => {
        if (currentQuestion.id && tempSelection) {
            setUserResponses(prev => ({
                ...prev,
                [currentSubject]: {
                    ...prev[currentSubject],
                    [currentQuestion.id]: {
                        ...prev[currentSubject]?.[currentQuestion.id],
                        answer: tempSelection,
                        status: 'answered_marked'
                    }
                }
            }));
            goToNextQuestion();
        } else if (currentQuestion.id && !tempSelection) {
            // Fallback for empty selection
            handleMarkForReview();
        }
    };

    const handleClearResponse = () => {
        if (currentQuestion.id) {
            setTempSelection(null);
            setUserResponses(prev => ({
                ...prev,
                [currentSubject]: {
                    ...prev[currentSubject],
                    [currentQuestion.id]: {
                        ...prev[currentSubject]?.[currentQuestion.id],
                        answer: null,
                        status: null
                    }
                }
            }));
        }
    };

    const handlePaletteClick = (idx) => {
        setCurrentQuestionIndex(idx);
    };

    const getStatusForPalette = (sub, qId, qIdx) => {
        const res = userResponses[sub]?.[qId];
        if (res?.status === 'answered_marked') return 'answered_marked';
        if (res?.status === 'marked') return 'marked';
        if (res?.answer) return 'answered';
        if (res?.visited && !res?.answer) return 'not-answered';
        return 'empty';
    };

    const handleKeypadInput = (key) => {
        setTempSelection(prev => {
            const current = (prev || '').toString();
            if (key === 'CLEAR') return '';
            if (key === 'BACKSPACE') return current.slice(0, -1);
            if (key === '.' && current.includes('.')) return current;
            return current + key;
        });
    };

    const answeredCount = Object.values(userResponses[currentSubject] || {}).filter(r => r.answer).length;
    const notAnsweredCount = Object.values(userResponses[currentSubject] || {}).filter(r => r.visited && !r.answer).length;

    return (
        <div className="exam-interface-root">
            {/* Header */}
            <header className="exam-top-bar">
                <div className="top-bar-left">
                    <button className="mobile-palette-toggle" onClick={() => setShowMobilePalette(!showMobilePalette)}>
                        {showMobilePalette ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="brand-logo">AI</div>
                    <h1 className="exam-title-desktop">JEE Main Mock Test - Full Syllabus</h1>
                </div>

                <div className="top-bar-center">
                    <div className="timer-wrapper">
                        <span className="timer-label">TIME REMAINING</span>
                        <div className="timer-clocks">
                            <span className="time-box-item">{formatTimePart(hours)}</span>
                            <span className="time-separator">:</span>
                            <span className="time-box-item">{formatTimePart(minutes)}</span>
                            <span className="time-separator">:</span>
                            <span className="time-box-item">{formatTimePart(seconds)}</span>
                        </div>
                    </div>
                </div>

                <div className="top-bar-right">
                    <div className="candidate-profile-v3">
                        <div className="profile-text-v3">
                            <p className="p-name">Alex Sharma</p>
                            <p className="p-id">ID: 202400159</p>
                        </div>
                        <div className="p-avatar-v3">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="avatar" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Portal Area */}
            <div className="portal-container">
                {/* Left Section: Question Workspace */}
                <section className="workspace-section">
                    {/* Controls Row */}
                    <div className="controls-row-v3">
                        <div className="subject-pills custom-scrollbar-x">
                            {subjects.map(s => (
                                <button
                                    key={s}
                                    className={`pill-btn ${currentSubject === s ? 'active' : ''}`}
                                    onClick={() => handleSubjectChange(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <div className="marking-summary-v3">
                            <button
                                className={`q-action-icon ${showCalculator ? 'text-primary' : ''}`}
                                onClick={() => setShowCalculator(!showCalculator)}
                                title="Scientific Calculator"
                                style={{ marginRight: '0.75rem', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                            >
                                <Calculator size={20} />
                            </button>
                            <button
                                className={`q-action-icon ${showRoughSheet ? 'text-primary' : ''}`}
                                onClick={() => setShowRoughSheet(!showRoughSheet)}
                                title="Rough Sheet"
                                style={{ marginRight: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                            >
                                <Info size={20} />
                            </button>
                            <div className="marking-info-desktop">
                                <div className="m-val-v3 success"><CheckCircle2 size={16} /> +4.0</div>
                                <div className="m-val-v3 danger"><AlertCircle size={16} /> {currentQuestion.type === 'Numerical' ? '-0.0' : '-1.0'}</div>
                                <div className="v-sep"></div>
                                <div className="m-type-label">Type: <strong>{currentQuestion.type === 'Numerical' ? 'Numerical Value' : 'MCQ'}</strong></div>
                            </div>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="question-card-v3">
                        <div className="q-head-v3">
                            <h2 className="q-title-v3">
                                Question {currentQuestion.id}
                                {currentQuestion.difficulty && <span className="difficulty-tag">{currentQuestion.difficulty}</span>}
                            </h2>
                            <button className="q-action-icon"><Flag size={20} /></button>
                        </div>

                        <div className="q-body-v3 custom-scrollbar">
                            {currentQuestion.type === 'Numerical' ? (
                                <div className="numerical-layout-v3">
                                    <div className="numerical-main custom-scrollbar">
                                        {currentQuestion.isHtml ? (
                                            <div className="q-instruction-text" dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></div>
                                        ) : (
                                            <p className="q-instruction-text">
                                                {currentQuestion.question}
                                            </p>
                                        )}
                                        {currentQuestion.hint && (
                                            <p className="text-sm text-gray-500 italic mt-4">
                                                {currentQuestion.hint}
                                            </p>
                                        )}
                                        {currentQuestion.imageUrl && (
                                            <div className="mt-4 mb-6">
                                                <img src={currentQuestion.imageUrl} alt="Question Diagram" className="max-h-64 object-contain" />
                                            </div>
                                        )}
                                        <div className="numerical-input-section">
                                            <label>Your Answer:</label>
                                            <div className="relative max-w-xs">
                                                <input
                                                    type="text"
                                                    className="num-val-input"
                                                    value={tempSelection || ''}
                                                    onChange={(e) => setTempSelection(e.target.value)}
                                                    placeholder="Enter value..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="numerical-keypad-sidebar">
                                        <div className="keypad-label">Virtual Keypad</div>
                                        <div className="keypad-grid">
                                            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].map(key => (
                                                <button key={key} className="kp-btn" onClick={() => handleKeypadInput(key)}>{key}</button>
                                            ))}
                                            <button className="kp-btn" onClick={() => handleKeypadInput('0')}>0</button>
                                            <button className="kp-btn kp-btn-del" onClick={() => handleKeypadInput('BACKSPACE')}>
                                                <Delete size={18} />
                                            </button>
                                            <button className="kp-btn kp-btn-clear" onClick={() => handleKeypadInput('CLEAR')}>Clear</button>
                                        </div>
                                        <div className="keypad-instructions">
                                            <div className="inst-header">
                                                <Info size={14} /> Instructions
                                            </div>
                                            <ul>
                                                <li>Use the virtual keypad or your keyboard.</li>
                                                <li>Round off to 2 decimal places if required.</li>
                                                <li>e.g., 12.45, -5, 0.5</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="q-content-main">
                                    <p className="q-instruction-text">
                                        {currentQuestion.question}
                                    </p>
                                    {currentQuestion.hint && (
                                        <p className="q-hint-text italic text-gray-500 text-sm mb-4">
                                            ({currentQuestion.hint})
                                        </p>
                                    )}

                                    {currentQuestion.imageUrl && (
                                        <div className="q-image-container q-image-inline">
                                            <div className="q-img-wrapper">
                                                <img src={currentQuestion.imageUrl} alt="Question Diagram" />
                                            </div>
                                            <div className="q-img-note">
                                                <AlertCircle size={14} />
                                                <span>Click on the image to view in expanded mode.</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className={`mcq-options-v3 ${currentQuestion.options?.some(o => o.imageUrl) ? 'opt-grid-v3' : ''}`}>
                                        {currentQuestion.options?.map(opt => (
                                            <label key={opt.id} className={`mcq-opt-v3 ${opt.imageUrl ? 'opt-card-v3' : ''} ${tempSelection === opt.id ? 'selected' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="exam-mcq"
                                                    checked={tempSelection === opt.id}
                                                    onChange={() => setTempSelection(opt.id)}
                                                />
                                                <div className="opt-header-v3">
                                                    <div className="opt-radio-circle">
                                                        {tempSelection === opt.id ? <div className="dot-inner"></div> : opt.id}
                                                    </div>
                                                    <span className="opt-content"><strong>{opt.imageUrl ? `Option ${opt.id}` : opt.id}.</strong> {!opt.imageUrl && opt.text}</span>
                                                    {tempSelection === opt.id && <Check size={18} className="check-icon-v3" />}
                                                </div>
                                                {opt.imageUrl && (
                                                    <div className="opt-img-body">
                                                        <img src={opt.imageUrl} alt={`Option ${opt.id}`} />
                                                    </div>
                                                )}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="q-footer-v3">
                            <div className="f-group-left">
                                <button className="f-btn-v3 secondary" onClick={handleMarkForReview}><Bookmark size={16} /> <span className="btn-label">Mark for Review</span></button>
                                <button className="f-btn-v3 secondary" onClick={handleClearResponse}><span className="btn-label">Clear Response</span></button>
                                <button className="f-btn-v3 secondary answered-marked-btn" onClick={handleSaveAndMarkForReview} title="Answered & Marked for Review">
                                    <Bookmark size={16} className="text-emerald" /> <span className="btn-label">Answered &amp; Marked</span>
                                    <span className="info-tooltip hide-on-mobile">(will be considered for evaluation)</span>
                                </button>
                            </div>
                            <div className="f-group-right">
                                <button className="f-btn-v3 secondary" onClick={handlePrevious}><ChevronLeft size={16} /> Prev</button>
                                <button className="f-btn-v3 primary" onClick={handleSaveAndNext}>Save &amp; Next <ChevronRight size={16} /></button>
                            </div>
                        </div>
                    </div >
                </section >

                {/* Mobile Palette Overlay */}
                {showMobilePalette && (
                    <div className="mobile-palette-overlay" onClick={() => setShowMobilePalette(false)}></div>
                )}

                {/* Right Section: Question Palette Sidebar */}
                < aside className={`palette-sidebar-v3 ${showMobilePalette ? 'open' : ''}`} >
                    <div className="sidebar-header-v3">
                        <h3>Question Palette</h3>
                        <p>Navigate to any question instantly</p>
                    </div>

                    <div className="legend-grid-v3">
                        <div className="leg-v3"><span className="box-v3 answered">{statusCounts.answered}</span> Answered</div>
                        <div className="leg-v3"><span className="box-v3 not-answered">{statusCounts.notAnswered}</span> Visited & Not Answered</div>
                        <div className="leg-v3"><span className="box-v3 marked">{statusCounts.marked}</span> Marked for Review</div>
                        <div className="leg-v3"><span className="box-v3 empty">{statusCounts.notVisited}</span> Not Visited</div>
                        <div className="leg-v3 leg-full"><span className="box-v3 answered-marked">{statusCounts.answeredMarked}</span> Answered & Marked for Review</div>
                    </div>

                    <div className="palette-scroll-area custom-scrollbar">
                        <h4 className="section-label">{currentSubject} - Section A</h4>
                        <div className="p-grid-v3">
                            {(currentQuestions || []).filter(q => q.id <= 20).map((q) => {
                                const idx = currentQuestions.findIndex(x => x.id === q.id);
                                const status = getStatusForPalette(currentSubject, q.id, idx);
                                return (
                                    <button
                                        key={q.id}
                                        className={`p-item-v3 ${status} ${idx === currentQuestionIndex ? 'current' : ''}`}
                                        onClick={() => handlePaletteClick(idx)}
                                    >
                                        {q.id < 10 ? `0${q.id}` : q.id}
                                        {(status === 'marked' || status === 'answered_marked') && <span className="mark-dot"></span>}
                                    </button>
                                );
                            })}
                            {Array.from({ length: 20 - (currentQuestions?.filter(q => q.id <= 20).length || 0) }).map((_, i) => {
                                const id = (currentQuestions?.filter(q => q.id <= 20).length || 0) + i + 1;
                                return (
                                    <button key={`empty-${id}`} className="p-item-v3 empty">
                                        {id < 10 ? `0${id}` : id}
                                    </button>
                                );
                            })}
                        </div>

                        <h4 className="section-label">{currentSubject} - Section B (Numerical)</h4>
                        <div className="p-grid-v3">
                            {(currentQuestions || []).filter(q => q.id > 20).map(q => {
                                const idx = currentQuestions.findIndex(x => x.id === q.id);
                                const status = getStatusForPalette(currentSubject, q.id, idx);
                                return (
                                    <button
                                        key={q.id}
                                        className={`p-item-v3 ${status} ${idx === currentQuestionIndex ? 'current' : ''}`}
                                        onClick={() => handlePaletteClick(idx)}
                                    >
                                        {q.id}
                                        {(status === 'marked' || status === 'answered_marked') && <span className="mark-dot"></span>}
                                    </button>
                                );
                            })}
                            {[21, 22, 23, 24, 25].filter(n => !(currentQuestions || []).find(q => q.id === n)).map(n => (
                                <button key={n} className="p-item-v3 empty">{n}</button>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-bottom-v3" style={{ marginTop: 'auto' }}>
                        <div className="mb-3 text-center">
                            <p className="summary-text-v3">Section Summary: {statusCounts.answered < 10 ? `0${statusCounts.answered}` : statusCounts.answered} Answered, {statusCounts.notAnswered < 10 ? `0${statusCounts.notAnswered}` : statusCounts.notAnswered} Not Answered</p>
                        </div>
                        <button className="submit-exam-btn-v3" onClick={() => setShowSubmitModal(true)}>
                            SUBMIT TEST <Send size={16} />
                        </button>
                    </div>
                </aside >
            </div >

            {/* Exam Summary Modal */}
            {showSubmitModal && (
                <div className="submit-modal-overlay">
                    <div className="submit-modal-content">
                        <div className="sm-header">
                            <h2>Exam Summary</h2>
                            <button className="sm-close-btn" onClick={() => setShowSubmitModal(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="sm-body">
                            <p className="sm-warning-text">Are you sure you want to submit the exam? Once submitted, you cannot modify your answers.</p>

                            <div className="sm-stats-grid">
                                <div className="sm-stat-box answered">
                                    <span className="sm-val">{statusCounts.answered}</span>
                                    <span className="sm-label">Answered</span>
                                </div>
                                <div className="sm-stat-box not-answered">
                                    <span className="sm-val">{statusCounts.notAnswered}</span>
                                    <span className="sm-label">Not Answered</span>
                                </div>
                                <div className="sm-stat-box marked">
                                    <span className="sm-val">{statusCounts.marked}</span>
                                    <span className="sm-label">Marked for Review</span>
                                </div>
                                <div className="sm-stat-box not-visited">
                                    <span className="sm-val">{statusCounts.notVisited}</span>
                                    <span className="sm-label">Not Visited</span>
                                </div>
                                <div className="sm-stat-box answered-marked sm-col-full">
                                    <span className="sm-val">{statusCounts.answeredMarked}</span>
                                    <span className="sm-label">Answered &<br />Marked for Review</span>
                                </div>
                            </div>
                        </div>
                        <div className="sm-footer">
                            <button className="sm-btn-cancel" onClick={() => setShowSubmitModal(false)}>Cancel</button>
                            <button className="sm-btn-confirm" onClick={() => navigate('/test-analytics')}>Confirm Submit</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Scientific Calculator */}
            {
                showCalculator && (
                    <ScientificCalculator onClose={() => setShowCalculator(false)} />
                )
            }
            {
                showRoughSheet && (
                    <RoughNote onClose={() => setShowRoughSheet(false)} />
                )
            }
        </div >
    );
};

export default MockExamInterface;
