import React, { useState } from 'react';
import { Search, ChevronDown, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';

const Header = () => {
    const [showMore, setShowMore] = useState(false);
    const location = useLocation();

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

    return (
        <header style={styles.header}>
            <div className="container" style={styles.headerContainer}>
                {/* Logo Section */}
                <Link to="/" style={styles.logoContainer}>
                    <img src={logo} alt="College Mentor" style={styles.logo} />
                </Link>

                {/* Navigation Section */}
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                style={styles.navItem}
                                onMouseEnter={() => item.name === 'More' && setShowMore(true)}
                                onMouseLeave={() => item.name === 'More' && setShowMore(false)}
                            >
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        style={{
                                            ...styles.navLink,
                                            color: item.active ? 'var(--primary-blue)' : item.highlight ? 'var(--accent-orange)' : 'var(--text-dark)',
                                            fontWeight: item.active || item.highlight ? '600' : '500',
                                        }}
                                    >
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown size={16} style={styles.chevron} />}
                                    </Link>
                                ) : (
                                    <div
                                        style={{
                                            ...styles.navLink,
                                            color: item.highlight ? 'var(--accent-orange)' : 'var(--text-dark)',
                                            fontWeight: item.highlight ? '600' : '500',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown size={16} style={styles.chevron} />}
                                    </div>
                                )}

                                {/* Dropdown Menu for "More" */}
                                {item.name === 'More' && showMore && (
                                    <div style={styles.dropdown}>
                                        {item.dropdownItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                style={styles.dropdownItem}
                                                onClick={() => setShowMore(false)}
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
                <div style={styles.actions}>
                    <button style={styles.searchButton}>
                        <Search size={22} color="var(--primary-blue)" />
                    </button>
                    <button style={styles.loginButton}>
                        <LogIn size={20} style={styles.loginIcon} />
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: 'var(--secondary-bg)',
        padding: '0.6rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    },
    logo: {
        height: '36px',
        objectFit: 'contain',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
    navList: {
        display: 'flex',
        gap: '1.2rem',
        alignItems: 'center',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    navLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: '0.9rem',
        textDecoration: 'none'
    },
    chevron: {
        marginTop: '2px',
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '0.5rem 0',
        minWidth: '180px',
        zIndex: 1001,
        border: '1px solid rgba(0,0,0,0.05)',
        marginTop: '0.5rem'
    },
    dropdownItem: {
        display: 'block',
        padding: '0.75rem 1.25rem',
        fontSize: '0.9rem',
        color: 'var(--text-dark)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        fontWeight: '500'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    searchButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.4rem',
    },
    loginButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1.2rem',
        borderRadius: '6px',
        border: '1.5px solid var(--primary-green)',
        color: 'var(--primary-green)',
        fontWeight: '600',
        fontSize: '0.85rem',
        transition: 'all 0.2s ease',
    },
    loginIcon: {
        marginRight: '2px',
    }
};

export default Header;
