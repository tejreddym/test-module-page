import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, Clock, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import './TestInstructions.css';

const TestInstructions = () => {
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const instructions = [
        "The total duration of the examination is 180 minutes.",
        "The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination.",
        "The Question Palette displayed on the right side of screen will show the status of each question.",
        "You can click on the '>' arrow which appears to the left of question palette to collapse the question palette thereby maximizing the question window.",
        "To select your answer, click on the button of one of the options.",
        "To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button.",
        "To change your chosen answer, click on the button of another option.",
        "To save your answer, you MUST click on the Save & Next button."
    ];

    const markingScheme = [
        { type: "Correct Answer", marks: "+4", color: "green" },
        { type: "Incorrect Answer", marks: "-1", color: "red" },
        { type: "Unanswered", marks: "0", color: "gray" }
    ];

    return (
        <div className="instructions-page">
            <div className="instructions-container">
                <header className="instructions-header">
                    <button className="back-btn" onClick={() => navigate('/stream-mock-tests')}>
                        <ChevronLeft size={20} /> Back to Tests
                    </button>
                    <div className="test-title-section">
                        <h1>JEE Main Full Mock 1 - General Instructions</h1>
                        <div className="test-quick-meta">
                            <span><Clock size={16} /> 180 Minutes</span>
                            <span><Info size={16} /> 90 Questions</span>
                            <span><AlertCircle size={16} /> 300 Marks</span>
                        </div>
                    </div>
                </header>

                <main className="instructions-content">
                    <section className="instruction-section">
                        <h2><Info size={20} /> Please read the instructions carefully</h2>
                        <div className="instructions-list">
                            {instructions.map((item, index) => (
                                <div key={index} className="instruction-item">
                                    <span className="step-number">{index + 1}</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <aside className="instructions-sidebar">
                        <section className="marking-scheme-v2">
                            <h3><Info size={18} /> Marking Scheme</h3>
                            <div className="marking-cards-row">
                                <div className="marking-card positive">
                                    <span className="marking-val">+4</span>
                                    <span className="marking-lab">Correct Answer</span>
                                </div>
                                <div className="marking-card negative">
                                    <span className="marking-val">-1</span>
                                    <span className="marking-lab">Negative Marking</span>
                                </div>
                                <div className="marking-card zero">
                                    <span className="marking-val">0</span>
                                    <span className="marking-lab">Unanswered</span>
                                </div>
                            </div>
                        </section>

                        <section className="palette-legend">
                            <div className="legend-grid-v2">
                                <div className="legend-item-v2">
                                    <div className="status-box not-visited"></div>
                                    <span>Not Visited</span>
                                </div>
                                <div className="legend-item-v2">
                                    <div className="status-box answered"></div>
                                    <span>Answered</span>
                                </div>
                                <div className="legend-item-v2">
                                    <div className="status-box marked-review"></div>
                                    <span>Marked for Review</span>
                                </div>
                                <div className="legend-item-v2">
                                    <div className="status-box not-answered"></div>
                                    <span>Not Answered</span>
                                </div>
                            </div>
                        </section>

                        <section className="important-note">
                            <h3><AlertCircle size={18} /> Important Note</h3>
                            <p>Once you start the test, the timer cannot be paused. Please ensure you have a stable internet connection.</p>
                        </section>
                    </aside>
                </main>

                <footer className="instructions-footer">
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        <p>I have read and understood the instructions. All computer hardware allotted to me are in proper working condition.</p>
                    </label>

                    <button
                        className={`begin-test-btn ${agreed ? 'active' : ''}`}
                        disabled={!agreed}
                        onClick={() => navigate('/mock-exam')}
                    >
                        I am ready to begin <ArrowRight size={20} />
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default TestInstructions;
