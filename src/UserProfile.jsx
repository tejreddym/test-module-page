import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';
import {
    User,
    Award,
    Target,
    TrendingUp,
    Clock,
    FileText,
    ChevronRight,
    ArrowLeft,
    CheckCircle,
    BarChart3,
    X,
    Sparkles,
    Eye,
    ChevronLeft,
    Download,
    BarChart2,
    Trophy
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend);

const UserProfile = () => {
    const navigate = useNavigate();
    const [showReport, setShowReport] = useState(false);
    const [selectedTest, setSelectedTest] = useState(null);
    const user = {
        name: "Tej",
        id: "PREP-2024-X89",
        goal: "IIT - JEE Main & Advanced",
        targetYear: "2024",
        avatarInitial: "T",
        joinedDate: "Oct 2023"
    };

    const stats = [
        { label: "Tests Taken", value: "24", icon: FileText, color: "#4f46e5" },
        { label: "Avg Score", value: "182/300", icon: BarChart3, color: "#10b981" },
        { label: "Avg Accuracy", value: "78%", icon: Target, color: "#f59e0b" },
        { label: "Current Rank", value: "1,240", icon: TrendingUp, color: "#8b5cf6", subValue: "1,239 users ahead" }
    ];

    const testHistory = [
        {
            id: "T-05",
            name: "JEE Main - Full Mock Test 05",
            date: "Oct 24, 2023",
            score: "186/300",
            percentile: "98.4 %ile",
            status: "Completed",
            trend: "up"
        },
        {
            id: "T-04",
            name: "Physics - Topical Test: Electrostatics",
            date: "Oct 22, 2023",
            score: "85/100",
            percentile: "96.2 %ile",
            status: "Completed",
            trend: "up"
        },
        {
            id: "T-03",
            name: "JEE Main - Full Mock Test 04",
            date: "Oct 18, 2023",
            score: "168/300",
            percentile: "94.8 %ile",
            status: "Completed",
            trend: "down"
        },
        {
            id: "T-02",
            name: "Maths - Sectional Mock 01",
            date: "Oct 15, 2023",
            score: "92/100",
            percentile: "99.1 %ile",
            status: "Completed",
            trend: "up"
        }
    ];

    const leaderboardData = [
        { rank: 1, name: "Aarav Sharma", score: 295, isCurrentUser: false },
        { rank: 2, name: "Priya Patel", score: 292, isCurrentUser: false },
        { rank: 3, name: "Rahul Verma", score: 288, isCurrentUser: false },
        { rank: 1240, name: user.name, score: 182, isCurrentUser: true }
    ];

    const weeklyScheduleData = [
        { day: 'Mon', date: '23', title: 'Physics: Electrostatics', time: '06:00 AM - 09:00 AM', action: 'Review', isCompleted: true },
        { day: 'Tue', date: '24', title: 'Maths: Calculus Mock Test', time: '02:00 PM - 05:00 PM', action: 'Start', isToday: true, isCompleted: false },
        { day: 'Wed', date: '25', title: 'Chemistry: Organic', time: '07:00 PM - 09:00 PM', action: 'Study', isCompleted: false }
    ];

    const timeSpentWeekly = [
        { day: 'Mon', time: '1h 15m', height: '35%', color: '#cbd5e1' },
        { day: 'Tue', time: '1h 50m', height: '55%', color: '#94a3b8' },
        { day: 'Wed', time: '1h 30m', height: '45%', color: '#64748b' },
        { day: 'Thu', time: '2h 20m', height: '70%', color: '#4f46e5', opacity: 0.8 },
        { day: 'Fri', time: '2h 45m', height: '85%', color: '#4f46e5', opacity: 0.9 },
        { day: 'Sat', time: '2h 00m', height: '60%', color: '#4338ca' },
        { day: 'Sun', time: '1h 00m', height: '30%', color: '#312e81' }
    ];

    const [activeDay, setActiveDay] = useState(null);

    const performanceTrendData = {
        labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
        datasets: [
            {
                label: 'Score',
                data: [180, 195, 170, 205, 215],
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, '#4f46e5'); // indigo-600
                    gradient.addColorStop(1, '#818cf8'); // indigo-400
                    return gradient;
                },
                borderRadius: 4,
                barThickness: 32,
            }
        ]
    };

    const performanceTrendOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1f2937',
                padding: 10,
                titleFont: { size: 13 },
                bodyFont: { size: 14, weight: 'bold' },
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return `${context.parsed.y} pts`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 300,
                grid: {
                    color: '#f1f5f9',
                    drawBorder: false,
                },
                ticks: {
                    stepSize: 50,
                    color: '#64748b',
                    font: { size: 11 }
                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    color: '#64748b',
                    font: { size: 11 }
                }
            }
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="profile-page">
            <nav className="profile-nav">
                <div className="nav-container">
                    <button className="back-btn" onClick={handleBack}>
                        <ArrowLeft size={20} />
                        <span>Back to Dashboard</span>
                    </button>
                    <div className="nav-title">Student Profile</div>
                    <div className="nav-actions">
                        <button className="btn-edit">Edit Profile</button>
                    </div>
                </div>
            </nav>

            <main className="profile-content">
                {/* Header Section */}
                <section className="profile-header-card">
                    <div className="header-left">
                        <div className="profile-avatar-large">
                            {user.avatarInitial}
                            <div className="top-1-badge">TOP 1%</div>
                        </div>
                        <div className="profile-info">
                            <h1>{user.name} <Award className="verified-badge" size={20} fill="#4f46e5" stroke="#ffffff" /></h1>
                            <p className="user-id">ID: {user.id} <span className="text-profile-muted">•</span> Joined {user.joinedDate}</p>
                            <div className="profile-badges">
                                <span className="badge-item"><Target size={14} /> JEE Aspirant</span>
                                <span className="badge-item elite-badge"><Award size={14} /> Elite Member</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="target-card">
                            <span className="target-label">Target Goal</span>
                            <span className="target-value">{user.goal}</span>
                            <div className="target-progress">
                                <div className="progress-bar" style={{ width: '75%' }}></div>
                            </div>
                            <span className="progress-text">75% Syllabus Completed</span>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="profile-stat-card">
                            <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                                <stat.icon size={24} />
                            </div>
                            <div className="stat-details">
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-value">{stat.value}</span>
                                {stat.subValue && <span className="stat-sub-value">{stat.subValue}</span>}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Main Body Grid */}
                <div className="profile-main-grid">
                    {/* Left Column: Test History */}
                    <div className="history-column">
                        <div className="section-header">
                            <h2>Recent Activity</h2>
                            <button className="view-all">View All</button>
                        </div>
                        <div className="test-list">
                            {testHistory.map((test, index) => (
                                <div key={index} className="test-item-card">
                                    <div className="test-info">
                                        <div className="test-icon">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <h3>{test.name}</h3>
                                            <span className="test-date">{test.date}</span>
                                        </div>
                                    </div>
                                    <div className="test-metrics">
                                        <div className="metric">
                                            <span className="label">Score</span>
                                            <span className="value">{test.score}</span>
                                        </div>
                                        <div className="metric">
                                            <span className="label">Percentile</span>
                                            <span className="value text-primary">{test.percentile}</span>
                                        </div>
                                        <button
                                            className="view-report-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedTest(test);
                                                setShowReport(true);
                                            }}
                                        >
                                            View Report
                                        </button>
                                        <ChevronRight className="arrow" size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Weekly Schedule Section */}
                        <div className="section-header" style={{ marginTop: '2.5rem' }}>
                            <h2>Weekly Schedule</h2>
                            <button className="view-all" onClick={() => navigate('/study-planner')}>View Planner</button>
                        </div>
                        <div className="schedule-list">
                            {weeklyScheduleData.map((day, idx) => (
                                <div key={idx} className={`schedule-item-card ${day.isToday ? 'active-day' : ''}`}>
                                    <div className="s-date-box">
                                        <span className="s-day">{day.day}</span>
                                        <span className="s-date">{day.date}</span>
                                    </div>
                                    <div className="s-info">
                                        <h4>{day.title}</h4>
                                        <p><Clock size={14} className="inline-icon" /> {day.time}</p>
                                    </div>
                                    <div className="s-action">
                                        {day.isCompleted ? (
                                            <span className="status-completed"><CheckCircle size={16} /></span>
                                        ) : (
                                            <button className="btn-start-task">{day.action}</button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Performance Trend Chart */}
                        <div className="section-header" style={{ marginTop: '2.5rem' }}>
                            <h2>Performance Trend</h2>
                            <select className="trend-select" style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.875rem', color: '#475569', outline: 'none', backgroundColor: '#fff' }}>
                                <option>Last 5 Tests</option>
                                <option>Last 10 Tests</option>
                            </select>
                        </div>
                        <div className="trend-chart-container" style={{ background: '#ffffff', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0', height: '280px', marginTop: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <Bar data={performanceTrendData} options={performanceTrendOptions} />
                        </div>
                    </div>

                    {/* Right Column: Insights & Weak Areas */}
                    <div className="insights-column">
                        <div className="profile-panel">
                            <h3 className="ts-title" style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', letterSpacing: '1px', color: '#64748b' }}>
                                {activeDay !== null ? `TIME SPENT - ${timeSpentWeekly[activeDay].day.toUpperCase()}` : 'TIME SPENT'}
                            </h3>
                            <div className="ts-stats" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="ts-value" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>
                                    {activeDay !== null ? timeSpentWeekly[activeDay].time : '2h 45m'}
                                </span>
                                <span className="ts-percent" style={{ fontSize: '0.9rem', fontWeight: '700', color: '#10b981', transition: 'opacity 0.2s', opacity: activeDay !== null ? 0 : 1 }}>
                                    +12% vs last week
                                </span>
                            </div>
                            <div className="ts-chart" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '0.5rem', height: '120px', marginTop: '1.5rem' }} onMouseLeave={() => setActiveDay(null)}>
                                {timeSpentWeekly.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="ts-bar"
                                        style={{
                                            height: item.height,
                                            backgroundColor: item.color,
                                            flex: 1,
                                            borderRadius: '2px 2px 0 0',
                                            opacity: activeDay === null || activeDay === idx ? (item.opacity || 1) : 0.4,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease-in-out'
                                        }}
                                        title={item.day}
                                        onMouseEnter={() => setActiveDay(idx)}
                                        onClick={() => setActiveDay(idx)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="profile-panel">
                            <h3><TrendingUp size={18} /> Subject-wise Performance</h3>
                            <div className="subject-bars">
                                <div className="subject-bar-item">
                                    <div className="bar-info">
                                        <span>Mathematics</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '85%', background: '#10b981' }}></div></div>
                                </div>
                                <div className="subject-bar-item">
                                    <div className="bar-info">
                                        <span>Chemistry</span>
                                        <span>68%</span>
                                    </div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '68%', background: '#f59e0b' }}></div></div>
                                </div>
                                <div className="subject-bar-item">
                                    <div className="bar-info">
                                        <span>Physics</span>
                                        <span>42%</span>
                                    </div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '42%', background: '#ef4444' }}></div></div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-panel">
                            <h3><CheckCircle size={18} /> Top Identified Weak Areas</h3>
                            <div className="weak-areas">
                                <span className="weak-tag">Rotational Motion</span>
                                <span className="weak-tag">Integral Calculus</span>
                                <span className="weak-tag">Ionic Equilibrium</span>
                                <span className="weak-tag">Thermodynamics</span>
                            </div>
                            <button className="practice-btn" onClick={() => navigate('/study-planner')}>Improve These Areas</button>
                        </div>

                        <div className="profile-panel leaderboard-panel">
                            <div className="leaderboard-header">
                                <h3><Trophy size={18} className="text-yellow-500" /> Leaderboard</h3>
                                <button className="view-all-link">Full Rankings</button>
                            </div>
                            <div className="leaderboard-list">
                                {leaderboardData.map((student, idx) => (
                                    <div key={idx} className={`leaderboard-item ${student.isCurrentUser ? 'current-user-rank' : ''}`}>
                                        <div className="leaderboard-left">
                                            <span className={`rank-badge ${student.rank === 1 ? 'gold' : student.rank === 2 ? 'silver' : student.rank === 3 ? 'bronze' : ''}`}>
                                                #{student.rank}
                                            </span>
                                            <div className="leaderboard-avatar">{student.name.charAt(0)}</div>
                                            <span className="leaderboard-name">{student.name} {student.isCurrentUser && "(You)"}</span>
                                        </div>
                                        <div className="leaderboard-score">
                                            {student.score} <span className="score-label">pts</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {showReport && (
                <ReportModal
                    test={selectedTest}
                    onClose={() => setShowReport(false)}
                />
            )}
        </div>
    );
};

// Report Modal Component (Test Analytics Dashboard)
const ReportModal = ({ test, onClose }) => {
    const navigate = useNavigate();
    return (
        <div className="report-modal-overlay">
            <div className="report-modal-content animate-pop">
                <header className="report-modal-header">
                    <div className="header-left">
                        <button className="modal-back" onClick={onClose}><ChevronLeft size={20} /> Back</button>
                        <BarChart2 className="text-primary" size={24} />
                        <span className="brand-name">JEE Mock AI</span>
                    </div>
                    <button className="modal-close" onClick={onClose}><X size={24} /></button>
                </header>

                <div className="report-body">
                    {/* Hero Section */}
                    <div className="report-hero">
                        <div className="hero-info">
                            <h1>{test?.name || "JEE Main - Full Mock Test 05"}</h1>
                            <p>Completed on {test?.date || "Oct 24, 2023"} • 3 Hours duration</p>
                        </div>
                        <div className="hero-btns">
                            <button className="report-btn-secondary"><Download size={18} /> Download Report</button>
                            <button className="report-btn-secondary"><Eye size={18} /> View Answer Key</button>
                            <button className="report-btn-primary" onClick={() => navigate('/rank-predictor')}><Sparkles size={18} /> Predict My Rank</button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="report-stats-grid">
                        <div className="r-stat-card">
                            <div className="r-stat-label">TOTAL SCORE</div>
                            <div className="r-stat-main">
                                <span className="val">186</span>
                                <span className="total">/ 300</span>
                            </div>
                            <div className="r-stat-trend text-emerald">+12% vs last test</div>
                        </div>
                        <div className="r-stat-card">
                            <div className="r-stat-label">OVERALL ACCURACY</div>
                            <div className="r-stat-main">
                                <span className="val">76%</span>
                            </div>
                            <div className="r-progress-bg"><div className="r-progress-fill" style={{ width: '76%' }}></div></div>
                        </div>
                        <div className="r-stat-card">
                            <div className="r-stat-label">AVG. TIME / QUESTION</div>
                            <div className="r-stat-main">
                                <span className="val">1m 45s</span>
                            </div>
                            <div className="r-stat-trend text-danger">15s slower than avg</div>
                        </div>
                        <div className="r-stat-card r-card-purple">
                            <div className="r-stat-label">PREDICTED PERCENTILE</div>
                            <div className="r-stat-main">
                                <span className="val">98.4</span>
                                <span className="suffix">%ile</span>
                            </div>
                            <div className="r-stat-desc">Based on current difficulty</div>
                        </div>
                    </div>

                    {/* Bottom Content Grid */}
                    <div className="report-content-grid">
                        <div className="report-left-col">
                            <div className="r-panel">
                                <h3>Subject-wise Analysis</h3>
                                <table className="r-table">
                                    <thead>
                                        <tr>
                                            <th>SUBJECT</th>
                                            <th>CORRECT</th>
                                            <th>INCORRECT</th>
                                            <th>UNATTEMPTED</th>
                                            <th>SUBTOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="SUBJECT">Physics</td>
                                            <td data-label="CORRECT">15</td>
                                            <td data-label="INCORRECT">3</td>
                                            <td data-label="UNATTEMPTED">7</td>
                                            <td data-label="SUBTOTAL"><strong>57</strong>/100</td>
                                        </tr>
                                        <tr>
                                            <td data-label="SUBJECT">Chemistry</td>
                                            <td data-label="CORRECT">18</td>
                                            <td data-label="INCORRECT">2</td>
                                            <td data-label="UNATTEMPTED">5</td>
                                            <td data-label="SUBTOTAL"><strong>70</strong>/100</td>
                                        </tr>
                                        <tr>
                                            <td data-label="SUBJECT">Mathematics</td>
                                            <td data-label="CORRECT">12</td>
                                            <td data-label="INCORRECT">8</td>
                                            <td data-label="UNATTEMPTED">5</td>
                                            <td data-label="SUBTOTAL"><strong>40</strong>/100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="r-panel">
                                <h3>Time Spent on Each Question</h3>
                                <div className="r-chart-placeholder">
                                    {/* Simplified Chart Visual */}
                                    <div className="chart-svg">
                                        <svg viewBox="0 0 400 150">
                                            <rect x="10" y="108" width="25" height="42" rx="3" fill="#10b981" />
                                            <rect x="50" y="38" width="25" height="112" rx="3" fill="#ef4444" />
                                            <rect x="90" y="75" width="25" height="75" rx="3" fill="#10b981" />
                                            <rect x="130" y="0" width="25" height="150" rx="3" fill="#ef4444" />
                                            <rect x="170" y="66" width="25" height="84" rx="3" fill="#10b981" />
                                            <rect x="210" y="103" width="25" height="47" rx="3" fill="#10b981" />
                                            <rect x="250" y="47" width="25" height="103" rx="3" fill="#ef4444" />
                                            <rect x="290" y="85" width="25" height="65" rx="3" fill="#10b981" />
                                            <rect x="330" y="28" width="25" height="122" rx="3" fill="#ef4444" />
                                            <rect x="370" y="70" width="25" height="80" rx="3" fill="#10b981" />
                                        </svg>
                                    </div>
                                    <div className="chart-legend">
                                        <span><span className="dot dot-green"></span> Correct</span>
                                        <span><span className="dot dot-red"></span> Incorrect</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="report-right-col">
                            <div className="r-panel">
                                <h3 className="section-title"><Sparkles size={18} className="text-primary" /> AI Evaluation Insights</h3>
                                <div className="r-ai-cards">
                                    <div className="ai-card border-red">
                                        <h4>Silly Mistakes Detected</h4>
                                        <p>You changed the correct answer to wrong in <strong>3 questions</strong> in Physics. Trust your first instinct.</p>
                                    </div>
                                    <div className="ai-card border-amber">
                                        <h4>Low Speed Area</h4>
                                        <p>Calculus problems took <strong>2.5x</strong> longer than average. Drill integration formulas.</p>
                                    </div>
                                    <div className="ai-card border-emerald">
                                        <h4>Strong Concept</h4>
                                        <p>Your accuracy in <strong>Organic Chemistry</strong> is 95%. Excellent retention!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="r-panel">
                                <h3>Chapter Analysis</h3>
                                <div className="r-chapter-section">
                                    <h4 className="r-sub">WEAK CHAPTERS (FOCUS HERE)</h4>
                                    <div className="r-chapter-item">
                                        <div className="r-c-info"><span>Electrostatics</span> <span className="text-danger">32% Acc</span></div>
                                        <div className="r-c-bar"><div className="r-c-fill bg-danger" style={{ width: '32%' }}></div></div>
                                    </div>
                                    <div className="r-chapter-item">
                                        <div className="r-c-info"><span>Complex Numbers</span> <span className="text-danger">40% Acc</span></div>
                                        <div className="r-c-bar"><div className="r-c-fill bg-danger" style={{ width: '40%' }}></div></div>
                                    </div>
                                </div>
                                <div className="r-chapter-section">
                                    <h4 className="r-sub">STRONG CHAPTERS</h4>
                                    <div className="r-strong-pills">
                                        <span className="r-pill">Coordination Compounds</span>
                                        <span className="r-pill">Vector Algebra</span>
                                        <span className="r-pill">Modern Physics</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
