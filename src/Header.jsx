import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, LogIn, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';
import './Header.css';

const Header = () => {
    const [showMore, setShowMore] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setShowMore(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/', active: location.pathname === '/' },
        { name: 'Colleges', hasDropdown: true },
        { name: 'Courses', hasDropdown: true },
        { name: 'Exams', hasDropdown: true },
        { name: 'Careers', hasDropdown: true, highlight: true },
        { name: 'News' },
        {
            name: 'More', hasDropdown: true, dropdownItems: [
                { name: 'Exam Library', path: '/' },
                { name: 'Stream-wise Mock Tests', path: '/stream-wise-tests' },
                { name: 'All Streams', path: '/all-streams' },
                { name: 'Stream Tests', path: '/stream-mock-tests' },
                { name: 'Test Instructions', path: '/test-instructions' },
                { name: 'Mock Exam', path: '/mock-exam' },
                { name: 'Step Design', path: '/step-design' },
                { name: 'Top Mentors', path: '/top-mentors' },
                { name: 'Test Analytics', path: '/test-analytics' },
                { name: 'Study Planner', path: '/study-planner' },
                { name: 'User Profile', path: '/user-profile' },
                { name: 'Rank Predictor', path: '/rank-predictor' }
            ]
        },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="container headerContainer">
                <div className="headerLeftGroup">
                    {/* Mobile Menu Toggle Button */}
                    <button className="hamburgerMenu" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Logo Section */}
                    <Link to="/" className="logoContainer" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src={logo} alt="College Mentor" className="logo" />
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className={`nav ${isMobileMenuOpen ? 'mobileOpen' : ''}`}>
                    <ul className="navList">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className="navItem"
                                onMouseEnter={() => window.innerWidth > 968 && item.name === 'More' && setShowMore(true)}
                                onMouseLeave={() => window.innerWidth > 968 && item.name === 'More' && setShowMore(false)}
                            >
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        className="navLink"
                                        style={{
                                            color: item.active ? 'var(--primary-blue, #1d4ed8)' : item.highlight ? 'var(--accent-orange, #f97316)' : 'var(--text-dark, #333)',
                                            fontWeight: item.active || item.highlight ? '600' : '500',
                                        }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        {item.hasDropdown && <ChevronDown size={16} className="chevron" />}
                                    </Link>
                                ) : (
                                    <button
                                        className="navLink"
                                        style={{
                                            color: item.highlight ? 'var(--accent-orange, #f97316)' : 'var(--text-dark, #333)',
                                            fontWeight: item.highlight ? '600' : '500',
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.name === 'More') {
                                                setShowMore(!showMore);
                                            }
                                        }}
                                    >
                                        <span>{item.name}</span>
                                        {item.hasDropdown && <ChevronDown size={16} className="chevron" />}
                                    </button>
                                )}

                                {/* Dropdown Menu for "More" */}
                                {item.name === 'More' && (
                                    <div
                                        className={`dropdown ${showMore ? 'mobileOpen' : ''}`}
                                        style={{ display: showMore ? 'flex' : 'none' }}
                                    >
                                        {item.dropdownItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="dropdownItem"
                                                onClick={() => {
                                                    setShowMore(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions Section */}
                <div className="actions">
                    <button className="searchButton">
                        <Search size={24} color="#1d2d3d" />
                    </button>
                    <button className="loginButton">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
