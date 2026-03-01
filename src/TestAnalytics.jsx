import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ChevronLeft, BarChart2, Bell, Download, Sparkles,
    Trophy, Target, Timer, BrainCircuit, AlertTriangle,
    CheckCircle, XCircle, MinusCircle, Eye, ArrowUp,
    ArrowRight, Edit3, TrendingDown, TrendingUp, Lightbulb,
    Microscope, BookOpen, CheckCircle2, FlaskConical, Zap,
    Flame, Clock, ChevronDown
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import ViewSolutions from './ViewSolutions';
import './TestAnalytics.css';
import { jeeTestData } from './jeeTestData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const TestAnalytics = () => {
    const navigate = useNavigate();
    const [showSolutions, setShowSolutions] = useState(false);
    const [showPricing, setShowPricing] = useState(false);
    const [showTopicsModal, setShowTopicsModal] = useState(false);
    const [topicsModalConfig, setTopicsModalConfig] = useState({ title: '', type: 'weak', topics: [] });

    const handleBackToDashboard = () => {
        window.location.hash = '#mock-exam';
    };

    const handleShowMoreTopics = (title, type) => {
        const topics = Array.from({ length: 27 }, (_, i) => ({
            id: i,
            name: `Diagnostic Topic ${i + 4}`,
            score: type === 'weak' ? `${Math.floor(Math.random() * 30) + 10}%` : `${Math.floor(Math.random() * 20) + 80}%`,
            status: type === 'weak' ? 'Needs Revision' : 'Mastered'
        }));
        setTopicsModalConfig({ title, type, topics });
        setShowTopicsModal(true);
    };

    // Dynamic Data Map for View Solutions from jeeTestData
    const mockQuestions = useMemo(() => {
        const result = [];
        const subjects = ['Physics', 'Chemistry', 'Mathematics'];

        subjects.forEach(subject => {
            if (jeeTestData[subject]) {
                jeeTestData[subject].forEach((q, index) => {
                    // Extract A, B, C, D to 0, 1, 2, 3
                    const correctIndex = q.correctAnswer ? q.correctAnswer.charCodeAt(0) - 65 : 0;

                    // Simulate different statuses predictably based on index
                    let status = 'unattempted';
                    let userOption = -1;

                    if (index % 5 === 0 || index % 5 === 1) {
                        status = 'correct'; userOption = correctIndex;
                    } else if (index % 5 === 2 || index % 5 === 3) {
                        status = 'incorrect'; userOption = (correctIndex + 1) % 4;
                    } else {
                        status = 'unattempted'; userOption = -1;
                    }

                    result.push({
                        ...q,
                        subject: subject,
                        question: q.question,
                        image: q.imageUrl,
                        options: q.options ? q.options.map(o => o.text || o.id) : ['A', 'B', 'C', 'D'],
                        correctOption: correctIndex,
                        userOption: userOption,
                        status: status,
                        solution: q.solution || 'Detailed step-by-step solution will be provided here based on fundamental principles.'
                    });
                });
            }
        });
        return result;
    }, []);

    // Chart Options & Data
    const analyticsData = {
        subjects: {
            Physics: { correct: 15, incorrect: 3, unattempted: 7, timeSpent: '55m 20s' },
            Chemistry: { correct: 18, incorrect: 2, unattempted: 5, timeSpent: '42m 15s' },
            Mathematics: { correct: 12, incorrect: 8, unattempted: 5, timeSpent: '78m 45s' }
        }
    };

    // Calculate Data for the Snapshot
    const totalCorrect = analyticsData.subjects.Physics.correct + analyticsData.subjects.Chemistry.correct + analyticsData.subjects.Mathematics.correct;
    const totalIncorrect = analyticsData.subjects.Physics.incorrect + analyticsData.subjects.Chemistry.incorrect + analyticsData.subjects.Mathematics.incorrect;
    const totalSkipped = analyticsData.subjects.Physics.unattempted + analyticsData.subjects.Chemistry.unattempted + analyticsData.subjects.Mathematics.unattempted;
    const totalAttempted = totalCorrect + totalIncorrect;
    const totalQs = totalAttempted + totalSkipped;

    const donutData = {
        labels: ['Correct', 'Incorrect', 'Skipped'],
        datasets: [
            {
                data: [totalCorrect, totalIncorrect, totalSkipped],
                backgroundColor: ['#10B981', '#EF4444', '#F59E0B'],
                borderWidth: 0,
                cutout: '75%',
                hoverOffset: 4
            },
        ],
    };

    const donutOptions = {
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        maintainAspectRatio: false,
    };

    // Calculate dynamic time string (based on avg time 1m 45s * 75 q)
    const mockTotalSeconds = 7875;
    const psHours = Math.floor(mockTotalSeconds / 3600);
    const psMins = Math.floor((mockTotalSeconds % 3600) / 60);
    const psSecs = mockTotalSeconds % 60;
    const displayTimeStr = `${psHours.toString().padStart(2, '0')} : ${psMins.toString().padStart(2, '0')} : ${psSecs.toString().padStart(2, '0')}s`;

    return (
        <div className="analytics-page">
            {/* Top Navigation Bar */}
            <nav className="analytics-nav">
                <div className="nav-container">
                    <div className="nav-left">
                        <button className="back-btn" onClick={handleBackToDashboard}>
                            <ChevronLeft size={20} />
                            <span>Back</span>
                        </button>
                        <BarChart2 className="nav-icon" size={24} />
                        <span className="nav-brand">JEE Mock AI</span>
                    </div>
                    <div className="nav-right">
                        <button className="icon-btn relative">
                            <Bell size={20} />
                            <span className="notification-dot"></span>
                        </button>
                        <div className="avatar" style={{ cursor: 'pointer' }} onClick={() => navigate('/user-profile')}>JD</div>
                    </div>
                </div>
            </nav>

            <main className="analytics-main">
                {/* Hero / Header Section */}
                <div className="analytics-hero">
                    <div className="hero-text">
                        <h1>JEE Main - Full Mock Test 05</h1>
                        <p>Completed on Oct 24, 2023 • 3 Hours duration</p>
                    </div>
                    <div className="hero-actions">
                        <button className="btn-secondary">
                            <Download size={18} strokeWidth={1.5} style={{ color: '#173CBA' }} />
                            <span style={{ color: '#173CBA', fontWeight: 500 }}>Download Report</span>
                        </button>
                        <button className="btn-secondary" onClick={() => setShowSolutions(true)}>
                            <Eye size={18} strokeWidth={1.5} style={{ color: '#173CBA' }} />
                            <span style={{ color: '#173CBA', fontWeight: 500 }}>View Answer Key</span>
                        </button>
                        <button className="btn-primary" onClick={() => navigate('/rank-predictor')}>
                            <Sparkles size={16} /> Predict My Rank
                        </button>
                    </div>
                </div>

                {/* 4 Top Stat Cards */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-bg-icon text-indigo"><Trophy size={64} strokeWidth={1} /></div>
                        <p className="stat-label">Total Score</p>
                        <div className="stat-value">
                            <span className="val primary-text">186</span>
                            <span className="max muted-text">/ 300</span>
                        </div>
                        <div className="stat-trend trend-up">
                            <TrendingUpIcon /> <span>+12%</span> <span className="trend-context">vs last test</span>
                        </div>
                    </div>

                    <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <p className="stat-label" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#6b7280', width: '100%', textAlign: 'left' }}>OVERALL ACCURACY</p>

                        <div style={{ position: 'relative', width: '110px', height: '110px', margin: '0 auto 0.5rem' }}>
                            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)', filter: 'drop-shadow(0px 2px 4px rgba(37, 99, 235, 0.2))' }}>
                                {/* Background track */}
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                                {/* Progress ring (76%) */}
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#1d4ed8" strokeWidth="8" strokeDasharray="263.89" strokeDashoffset={263.89 - (263.89 * 0.76)} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease-in-out' }} />
                            </svg>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111827', lineHeight: 1, letterSpacing: '-0.5px' }}>76%</span>
                                <span style={{ fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', marginTop: '4px', fontFamily: 'serif' }}>Complete</span>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <p className="stat-label" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: '#6b7280' }}>AVG. TIME / QUESTION</p>

                        <div className="stat-value" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <span className="val primary-text" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, color: '#111827' }}>1m 45s</span>
                            <div style={{ backgroundColor: '#fff7ed', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Timer size={16} strokeWidth={3} style={{ color: '#f59e0b' }} />
                            </div>
                        </div>

                        <div className="stat-trend" style={{ color: '#ef4444', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1.5rem', marginTop: '0.25rem' }}>
                            <ArrowUp size={16} strokeWidth={2.5} /> <span>15s slower than avg</span>
                        </div>

                        <div className="perf-meter" style={{ width: '100%', marginTop: 'auto', paddingTop: '0.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', marginBottom: '0.35rem', padding: '0 2px' }}>
                                <span>FAST</span>
                                <span>AVG</span>
                                <span>SLOW</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: 'linear-gradient(to right, #10b981 0%, #f59e0b 50%, #f97316 75%, #ef4444 100%)', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-3px', bottom: '-3px', width: '3px', backgroundColor: '#111827', left: '72%', borderRadius: '1.5px', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="stat-card card-gradient">
                        <div className="grad-blur"></div>
                        <p className="stat-label text-indigo-100">Predicted Percentile</p>
                        <div className="stat-value">
                            <span className="val text-white">98.4</span>
                            <span className="max text-indigo-200">%ile</span>
                        </div>
                        <div className="stat-badge">
                            Based on current difficulty
                        </div>
                    </div>
                </div>

                {/* Performance Snapshot */}
                <div className="performance-snapshot">
                    <div className="ps-header">
                        <div className="ps-header-left">
                            <div className="ps-indicator"></div>
                            <div className="ps-title-container">
                                <h2>Your Performance Snapshot</h2>
                                <p>Here is a quick overview of your latest mock test results.</p>
                            </div>
                        </div>
                        <div className="ps-header-right">
                            <Timer size={16} color="#6B7280" />
                            <div className="ps-time-text">
                                <span className="ps-time-label">TIME TAKEN</span>
                                <span className="ps-time-value">{displayTimeStr}</span>
                            </div>
                        </div>
                    </div>

                    <div className="ps-content">
                        <div className="ps-donut-wrapper">
                            <Doughnut data={donutData} options={donutOptions} />
                            <div className="ps-donut-center">
                                <span className="ps-donut-total">{totalQs}</span>
                                <span className="ps-donut-label">Total Qs</span>
                            </div>
                        </div>

                        <div className="ps-stats-grid">
                            <div className="ps-stat-item card-emerald">
                                <div className="ps-stat-icon bg-emerald-light"><CheckCircle size={20} className="text-emerald" /></div>
                                <div className="ps-stat-info">
                                    <span className="ps-stat-val text-emerald">{totalCorrect}</span>
                                    <span className="ps-stat-name">Correct</span>
                                </div>
                            </div>
                            <div className="ps-stat-item card-danger">
                                <div className="ps-stat-icon bg-danger-light"><XCircle size={20} className="text-danger" /></div>
                                <div className="ps-stat-info">
                                    <span className="ps-stat-val text-danger">{totalIncorrect}</span>
                                    <span className="ps-stat-name">Incorrect</span>
                                </div>
                            </div>
                            <div className="ps-stat-item card-amber">
                                <div className="ps-stat-icon bg-amber-light"><ArrowRight size={20} className="text-amber" /></div>
                                <div className="ps-stat-info">
                                    <span className="ps-stat-val text-amber">{totalSkipped}</span>
                                    <span className="ps-stat-name">Skipped</span>
                                </div>
                            </div>
                            <div className="ps-stat-item card-indigo border-l-item">
                                <div className="ps-stat-icon bg-indigo-light"><Edit3 size={20} className="text-indigo" /></div>
                                <div className="ps-stat-info">
                                    <span className="ps-stat-val text-indigo">{totalAttempted}</span>
                                    <span className="ps-stat-name">Attempted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Content Columns */}
                <div className="content-grid">
                    {/* Left Column (Charts) */}
                    <div className="charts-column">
                        <div className="panel ta-breakdown-panel">
                            <div className="panel-header" style={{ marginBottom: '0', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                                <h2>Subject-wise Analysis</h2>
                            </div>
                            <div className="ta-table-container">
                                <table className="ta-breakdown-table">
                                    <thead>
                                        <tr>
                                            <th>SUBJECT</th>
                                            <th><CheckCircle size={14} className="ta-icon-correct" /> CORRECT</th>
                                            <th><XCircle size={14} className="ta-icon-incorrect" /> INCORRECT</th>
                                            <th><MinusCircle size={14} className="ta-icon-unattempted" /> UNATTEMPTED</th>
                                            <th>SUBTOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(analyticsData.subjects).map(([subject, stats]) => {
                                            const subtotal = (stats.correct * 4) - (stats.incorrect * 1);
                                            return (
                                                <tr key={subject}>
                                                    <td className="font-bold text-lg" data-label="SUBJECT">{subject}</td>
                                                    <td className="ta-td-correct font-medium text-base" data-label="CORRECT">{stats.correct}</td>
                                                    <td className="ta-td-incorrect font-medium text-base" data-label="INCORRECT">{stats.incorrect}</td>
                                                    <td className="ta-td-unattempted font-medium text-base" data-label="UNATTEMPTED">{stats.unattempted}</td>
                                                    <td className="ta-td-subtotal font-bold text-lg" data-label="SUBTOTAL">{subtotal} <span className="ta-subtotal-max">/ 100</span></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="panel time-spent-panel">
                            <div className="section-header-v2">
                                <div className="vertical-bar"></div>
                                <h2>Section Wise Time Spent</h2>
                            </div>
                            <div className="time-spent-grid">
                                {Object.entries(analyticsData.subjects).map(([subject, stats]) => (
                                    <div key={subject} className="time-spent-card">
                                        <div className="ts-subject">{subject}</div>
                                        <div className="ts-value">{stats.timeSpent}</div>
                                        <div className="ts-progress-bg">
                                            <div
                                                className={`ts-progress-fill ${subject.toLowerCase()}`}
                                                style={{ width: subject === 'Physics' ? '70%' : subject === 'Chemistry' ? '55%' : '90%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Insights & Chapters) */}
                    <div className="insights-column">

                        <div className="panel">
                            <div className="panel-title-icon">
                                <BrainCircuit className="text-indigo animate-pulse" size={24} />
                                <h2>AI Evaluation Insights</h2>
                            </div>
                            <div className="insights-list">
                                <div className="insight-box box-danger">
                                    <h3>Silly Mistakes Detected</h3>
                                    <p>You changed the correct answer to wrong in <strong>3 questions</strong> in Physics. Trust your first instinct.</p>
                                </div>
                                <div className="insight-box box-warning">
                                    <h3>Low Speed Area</h3>
                                    <p>Calculus problems took <strong>2.5x</strong> longer than average. Drill integration formulas.</p>
                                </div>
                                <div className="insight-box box-success">
                                    <h3>Strong Concept</h3>
                                    <p>Your accuracy in <strong>Organic Chemistry</strong> is 95%. Excellent retention!</p>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <h2 className="mb-4">Chapter Analysis</h2>

                            <div className="chapter-section mb-6">
                                <h3 className="section-subtitle"><AlertTriangle size={14} className="inline mr-1 text-amber" /> Weak Chapters (Focus Here)</h3>
                                <div className="chapter-bars">
                                    <div className="chapter-bar-item">
                                        <div className="c-bar-header">
                                            <span>Electrostatics</span>
                                            <span className="badge badge-danger">32% Acc</span>
                                        </div>
                                        <div className="c-progress"><div className="c-fill bg-danger" style={{ width: '32%' }}></div></div>
                                    </div>
                                    <div className="chapter-bar-item">
                                        <div className="c-bar-header">
                                            <span>Complex Numbers</span>
                                            <span className="badge badge-danger">40% Acc</span>
                                        </div>
                                        <div className="c-progress"><div className="c-fill bg-danger" style={{ width: '40%' }}></div></div>
                                    </div>
                                </div>
                            </div>

                            <div className="chapter-section">
                                <h3 className="section-subtitle"><span className="mr-1">💪</span> Strong Chapters</h3>
                                <div className="pills-flex">
                                    <span className="pill pill-success">Coordination Compounds</span>
                                    <span className="pill pill-success">Vector Algebra</span>
                                    <span className="pill pill-success">Modern Physics</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Performance Analytics Section */}
                <div className="performance-analytics-wrapper mt-8 mb-8" style={{ background: '#f8fafc', borderRadius: '1rem', padding: '1rem', marginTop: "2rem" }}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-2">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-1">Performance Analytics</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Weak Points Card */}
                        <div className="border border-slate-200 bg-white rounded-[1.5rem] p-6 shadow-sm overflow-hidden relative">
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400"></div>
                            <div className="flex justify-between items-center mb-6 mt-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                                        <TrendingDown size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800">Weak Points</h3>
                                </div>
                                <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">Attention Needed</span>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col gap-3 transition-colors hover:bg-red-50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <Lightbulb size={20} className="text-red-500" />
                                            <span className="font-bold text-slate-800">Calculus</span>
                                        </div>
                                        <span className="font-black text-red-600 text-sm flex items-center gap-1">0% <ChevronDown strokeWidth={3} size={14} /></span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500 shadow-sm">Knowledge Gap</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col gap-3 transition-colors hover:bg-red-50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <Microscope size={20} className="text-red-500" />
                                            <span className="font-bold text-slate-800">Cell Biology</span>
                                        </div>
                                        <span className="font-black text-red-600 text-sm flex items-center gap-1">12% <ChevronDown strokeWidth={3} size={14} /></span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500 shadow-sm">Concept Unclear</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col gap-3 transition-colors hover:bg-red-50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <BookOpen size={20} className="text-red-500" />
                                            <span className="font-bold text-slate-800">Modern History</span>
                                        </div>
                                        <span className="font-black text-red-600 text-sm flex items-center gap-1">24% <ChevronDown strokeWidth={3} size={14} /></span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500 shadow-sm">Improving</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={() => handleShowMoreTopics('Weak Points', 'weak')}
                                    className="px-6 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold text-sm rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
                                >
                                    +27 more
                                </button>
                            </div>
                        </div>

                        {/* Strong Points Card */}
                        <div className="border border-slate-200 bg-white rounded-[1.5rem] p-6 shadow-sm overflow-hidden relative">
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-400"></div>
                            <div className="flex justify-between items-center mb-6 mt-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                        <TrendingUp size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800">Strong Points</h3>
                                </div>
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full">Top Performer</span>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-3 transition-colors hover:bg-emerald-50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-emerald-500" />
                                            <span className="font-bold text-slate-800">Mechanics</span>
                                        </div>
                                        <span className="font-black text-emerald-600 text-sm flex items-center gap-1.5">100% <Trophy size={14} className="text-yellow-500 fill-yellow-500" /></span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500 shadow-sm">Mastered</span>
                                        <span className="text-xs font-bold px-2.5 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-md flex items-center gap-1 shadow-sm"><Trophy size={12} className="text-yellow-600" /> Top 1% of Students</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-3 transition-colors hover:bg-emerald-50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <FlaskConical size={20} className="text-emerald-500" />
                                            <span className="font-bold text-slate-800">Acids & Bases</span>
                                        </div>
                                        <span className="font-black text-emerald-600 text-sm flex items-center gap-1.5">100% <Trophy size={14} className="text-yellow-500 fill-yellow-500" /></span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500 shadow-sm">Mastered</span>
                                        <span className="text-xs font-bold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-md flex items-center gap-1 shadow-sm"><Flame size={12} className="text-purple-600" /> Consistent Streak</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-3 transition-colors hover:bg-emerald-50">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <Zap size={20} className="text-emerald-500" />
                                            <span className="font-bold text-slate-800">Electricity</span>
                                        </div>
                                        <span className="font-black text-emerald-600 text-sm flex items-center gap-1.5">98% <Trophy size={14} className="text-slate-400 fill-slate-300" /></span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500 shadow-sm">Strong</span>
                                        <span className="text-xs font-bold px-2.5 py-1 bg-slate-50 text-slate-500 border border-slate-200 rounded-md flex items-center gap-1 shadow-sm"><Clock size={12} /> Avg: 45s</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={() => handleShowMoreTopics('Strong Points', 'strong')}
                                    className="px-6 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold text-sm rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm"
                                >
                                    +27 more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="plan-banner">
                    <div className="banner-bg"></div>
                    <div className="banner-content">
                        <h2>Personalized Study Plan Ready</h2>
                        <p>Based on your weak areas in Electrostatics and Calculus, our AI has generated a revision schedule and a custom mini-mock test for tomorrow.</p>
                    </div>
                    <div className="banner-actions">
                        <button className="btn-light" onClick={() => setShowPricing(true)}>View Plan</button>
                        <button className="btn-primary border-0" onClick={() => navigate('/study-planner')}>Start Revision</button>
                    </div>
                </div>

            </main>

            <footer className="analytics-footer">
                <p>© 2026 JEE Mock AI Platform. All rights reserved.</p>
            </footer>

            {showTopicsModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${topicsModalConfig.type === 'weak' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
                                    {topicsModalConfig.type === 'weak' ? <TrendingDown size={24} /> : <TrendingUp size={24} />}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 leading-tight">{topicsModalConfig.title}</h2>
                                    <p className="text-sm font-semibold text-slate-500">27 Additional Topics Analyzed</p>
                                </div>
                            </div>
                            <button onClick={() => setShowTopicsModal(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-2 bg-slate-50/50">
                            <div className="grid gap-3 p-4">
                                {topicsModalConfig.topics.map((topic, index) => (
                                    <div key={topic.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all">
                                        <div className="flex items-start sm:items-center gap-4">
                                            <span className="text-slate-400 font-bold text-sm w-6 pt-0.5 sm:pt-0">{index + 1}.</span>
                                            <div>
                                                <h4 className="font-bold text-slate-800 text-[15px]">{topic.name}</h4>
                                                <span className={`text-xs font-bold px-2.5 py-1 rounded inline-block mt-2 ${topicsModalConfig.type === 'weak' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                                    {topic.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-left sm:text-right mt-3 sm:mt-0 ml-10 sm:ml-0 flex items-center gap-2">
                                            <span className={`text-xl font-black ${topicsModalConfig.type === 'weak' ? 'text-red-500' : 'text-emerald-500'}`}>
                                                {topic.score}
                                            </span>
                                            {topicsModalConfig.type === 'strong' ? <Trophy size={16} className="text-yellow-500 fill-yellow-500" /> : <ChevronDown strokeWidth={3} size={16} className="text-red-500" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showSolutions && (
                <ViewSolutions
                    questions={mockQuestions}
                    onClose={() => setShowSolutions(false)}
                />
            )}

            {showPricing && (
                <PricingModal onClose={() => setShowPricing(false)} />
            )}
        </div>
    );
};

// Helper SVG Icon for Trends
const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

// Pricing Modal Component
const PricingModal = ({ onClose }) => {
    const plans = [
        {
            name: 'AI Basic',
            price: 'Free',
            features: ['Basic Analytics', 'Weekly Study Plan', 'Limited Mock Tests', 'Email Support'],
            button: 'Current Plan',
            popular: false,
            color: '#64748b'
        },
        {
            name: 'AI Pro',
            price: '₹499',
            period: '/month',
            features: ['Advanced AI Insights', 'Daily Personalized Plan', 'Unlimited Mock Tests', 'Priority Support', 'Rank Predictor'],
            button: 'Go Pro',
            popular: true,
            color: '#4f46e5'
        },
        {
            name: 'AI Mastery',
            price: '₹999',
            period: '/month',
            features: ['1-on-1 AI Mentoring', 'Hardest Question Drills', 'University Admissions AI', 'Lifetime Access', '24/7 Support'],
            button: 'Get Mastery',
            popular: false,
            color: '#7c3aed'
        }
    ];

    return (
        <div className="pricing-overlay">
            <div className="pricing-content animate-pop">
                <button className="pricing-close" onClick={onClose}><XCircle size={32} /></button>
                <div className="pricing-header">
                    <Sparkles className="text-primary mb-2" size={40} />
                    <h2>Choose Your Success Path</h2>
                    <p>Unlock the full potential of AI-driven preparation</p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                            <div className="card-top">
                                <h3 style={{ color: plan.color }}>{plan.name}</h3>
                                <div className="price-tag">
                                    <span className="price">{plan.price}</span>
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                            </div>
                            <ul className="features-list">
                                {plan.features.map((f, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} className="text-emerald" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`pricing-btn ${plan.popular ? 'primary' : 'secondary'}`}
                                style={!plan.popular ? { borderColor: plan.color, color: plan.color } : {}}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestAnalytics;
