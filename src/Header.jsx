import React from 'react';
import { Search, ChevronDown, LogIn } from 'lucide-react';
import logo from './assets/logo.png';

const Header = () => {
    const navItems = [
        { name: 'Home', active: true },
        { name: 'Colleges', hasDropdown: true },
        { name: 'Courses', hasDropdown: true },
        { name: 'Exams', hasDropdown: true },
        { name: 'Careers', hasDropdown: true, highlight: true },
        { name: 'News' },
        { name: 'More', hasDropdown: true },
    ];

    return (
        <header style={styles.header}>
            <div className="container" style={styles.headerContainer}>
                {/* Logo Section */}
                <div style={styles.logoContainer}>
                    <img src={logo} alt="College Mentor" style={styles.logo} />
                </div>

                {/* Navigation Section */}
                <nav style={styles.nav}>
                    <ul style={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.name} style={styles.navItem}>
                                <a
                                    href={`#${item.name.toLowerCase()}`}
                                    style={{
                                        ...styles.navLink,
                                        color: item.active ? 'var(--primary-blue)' : item.highlight ? 'var(--accent-orange)' : 'var(--text-dark)',
                                        fontWeight: item.active || item.highlight ? '600' : '500',
                                    }}
                                >
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown size={16} style={styles.chevron} />}
                                </a>
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
        padding: '1.25rem 0',
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
    },
    logo: {
        height: '45px',
        objectFit: 'contain',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
    },
    navList: {
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
    },
    navLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: '0.95rem',
    },
    chevron: {
        marginTop: '2px',
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },
    searchButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
    },
    loginButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.6rem 1.5rem',
        borderRadius: '8px',
        border: '1.5px solid var(--primary-green)',
        color: 'var(--primary-green)',
        fontWeight: '600',
        fontSize: '0.95rem',
        transition: 'all 0.2s ease',
    },
    loginIcon: {
        marginRight: '2px',
    }
};

export default Header;
