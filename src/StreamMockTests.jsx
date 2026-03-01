import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Search, Filter, Clock, FileText, Award, PlayCircle } from 'lucide-react';
import './StreamMockTests.css';

const StreamMockTests = () => {
    const tests = [
        {
            id: 1,
            title: 'JEE Main 2024 - Full Syllabus Mock 1',
            questions: 90,
            time: '180 min',
            marks: 300,
            category: 'Full Mock',
            difficulty: 'Moderate',
            tag: 'MOST RECENT'
        },
        {
            id: 2,
            title: 'Physics - Mechanics & Electrodynamics',
            questions: 30,
            time: '60 min',
            marks: 100,
            category: 'Subject Wise',
            difficulty: 'Hard',
            tag: 'TRENDING'
        },
        {
            id: 3,
            title: 'Mathematics - Calculus Special',
            questions: 25,
            time: '60 min',
            marks: 100,
            category: 'Subject Wise',
            difficulty: 'Medium',
        },
        {
            id: 4,
            title: 'JEE Advanced - Paper 1 Mock',
            questions: 54,
            time: '180 min',
            marks: 180,
            category: 'Advanced',
            difficulty: 'Extreme',
            tag: 'PREMIUM'
        },
        {
            id: 5,
            title: 'Chemistry - Organic Synthesis',
            questions: 30,
            time: '60 min',
            marks: 100,
            category: 'Subject Wise',
            difficulty: 'Easy',
        },
        {
            id: 6,
            title: 'NTA Abhyas - JEE Main Set 12',
            questions: 90,
            time: '180 min',
            marks: 300,
            category: 'Full Mock',
            difficulty: 'Moderate',
        }
    ];

    const filters = ['All Tests', 'Full Mock', 'Subject Wise'];

    return (
        <div className="all-tests-page">
            <div className="page-header-bg"></div>

            <div className="all-tests-container">
                <nav className="breadcrumb">
                    <Link to="/stream-wise-tests" className="back-link">
                        <ChevronLeft size={20} /> Back to Streams
                    </Link>
                    <h1>Engineering Mock Tests</h1>
                    <p>Access our premium collection of JEE and other top engineering entrance tests.</p>
                </nav>

                <div className="tests-content">
                    <aside className="filters-sidebar">
                        <div className="search-box">
                            <Search size={18} />
                            <input type="text" placeholder="Search mock tests..." />
                        </div>

                        <div className="filter-group">
                            <h3>Test Category</h3>
                            {filters.map((filter) => (
                                <label key={filter} className="filter-option">
                                    <input type="radio" name="category" defaultChecked={filter === 'All Tests'} />
                                    <span>{filter}</span>
                                </label>
                            ))}
                        </div>

                        <div className="filter-group">
                            <h3>Level</h3>
                            <label className="filter-option">
                                <input type="checkbox" /> <span>Beginner</span>
                            </label>
                            <label className="filter-option">
                                <input type="checkbox" defaultChecked /> <span>Intermediate</span>
                            </label>
                            <label className="filter-option">
                                <input type="checkbox" /> <span>Advanced</span>
                            </label>
                        </div>
                    </aside>

                    <main className="tests-list-container">
                        <div className="tests-stats">
                            <span>Showing <b>{tests.length}</b> Practice Tests</span>
                            <div className="sort-by">
                                <span>Sort By: </span>
                                <div className="sort-by-select-container">
                                    <select>
                                        <option>Most Recent</option>
                                        <option>Highest Rated</option>
                                        <option>Most Attempted</option>
                                    </select>
                                    <ChevronDown size={18} className="select-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="tests-grid">
                            {tests.map((test) => (
                                <div key={test.id} className="test-list-card">
                                    {test.tag && <span className={`test-tag ${test.tag.toLowerCase().replace(' ', '-')}`}>{test.tag}</span>}

                                    <div className="test-content-left">
                                        <div className="test-info-main">
                                            <h3>{test.title}</h3>
                                        </div>

                                        <div className="test-meta-stats">
                                            <div className="stat-item">
                                                <FileText size={20} className="stat-icon" strokeWidth={1.5} />
                                                <div className="stat-text">
                                                    <span className="stat-value">{test.questions}</span>
                                                    <span className="stat-label">QUESTIONS</span>
                                                </div>
                                            </div>
                                            <div className="stat-item">
                                                <Clock size={20} className="stat-icon" strokeWidth={1.5} />
                                                <div className="stat-text">
                                                    <span className="stat-value">{test.time.split(' ')[0]}</span>
                                                    <span className="stat-label">MIN</span>
                                                </div>
                                            </div>
                                            <div className="stat-item">
                                                <Award size={20} className="stat-icon" strokeWidth={1.5} />
                                                <div className="stat-text">
                                                    <span className="stat-value">{test.marks}</span>
                                                    <span className="stat-label">MARKS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="test-actions">
                                        <div className="test-badge-info">
                                            <span className={`difficulty-badge ${test.difficulty.toLowerCase()}`}>
                                                {test.difficulty}
                                            </span>
                                            <span className="category-text">{test.category}</span>
                                        </div>
                                        <Link
                                            to="/test-instructions"
                                            className="start-test-btn"
                                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}
                                        >
                                            Start Test <PlayCircle size={18} strokeWidth={2} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default StreamMockTests;
