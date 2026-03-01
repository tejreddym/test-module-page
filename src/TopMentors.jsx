import React from 'react';
import { Star, Users, Briefcase, MapPin, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import './TopMentors.css';

import mentor1 from './assets/mentor_ananya.png';
import mentor2 from './assets/mentor_vikram.png';
import mentor3 from './assets/mentor_priya.png';

const TopMentors = () => {
    const mentors = [
        {
            name: 'Ananya Gupta',
            subtitle: 'IIT Bombay, JEE Adv AIR 45',
            quote: '"Concepts must be crystal clear. I specialize in teaching complex physics problems."',
            rating: '4.8',
            sessions: '850+',
            experience: '6 yrs',
            location: 'Mumbai',
            image: mentor1,
            color: 'green'
        },
        {
            name: 'Vikram Singh',
            subtitle: 'IIM Ahmedabad, CAT 99.98%tile',
            quote: '"Cracking CAT is about speed and accuracy. Let\'s work on your Quant strategies."',
            rating: '4.9',
            sessions: '2.1k+',
            experience: '10 yrs',
            location: 'Ahmedabad',
            image: mentor2,
            color: 'teal'
        },
        {
            name: 'Priya Menon',
            subtitle: 'NLU Delhi, CLAT AIR 8',
            quote: '"Law is not just about rules — it\'s about reasoning. Let me show you how to think like a lawyer."',
            rating: '4.8',
            sessions: '920+',
            experience: '7 yrs',
            location: 'New Delhi',
            image: mentor3,
            color: 'blue'
        }
    ];

    return (
        <section className="top-mentors-section">
            <div className="container">
                <div className="top-mentors-header">
                    <h1>Learn from the <span className="highlight-blue">Best Mentor</span></h1>
                    <p>Get personalized guidance from India's top educators who have helped thousands of students achieve their dreams</p>
                </div>

                <div className="mentors-carousel-container">
                    <button className="nav-arrow left">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="mentors-grid">
                        {mentors.map((mentor, index) => (
                            <div key={mentor.name} className="mentor-card" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className={`card-header ${mentor.color}`}>
                                    <div className="watermark-text mentor">Mentor</div>
                                    <div className="watermark-text guidance">GUIDANCE</div>
                                    <div className="rating-badge">
                                        <Star size={14} className="star-icon" fill="currentColor" />
                                        <span>{mentor.rating}</span>
                                    </div>
                                    <div className="mentor-image-wrapper">
                                        <img src={mentor.image} alt={mentor.name} className="mentor-image" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3>{mentor.name}</h3>
                                    <div className="mentor-subtitle">{mentor.subtitle}</div>
                                    <p className="mentor-quote">{mentor.quote}</p>

                                    <div className="mentor-meta">
                                        <div className="meta-item">
                                            <div className="meta-value">
                                                <Users size={14} />
                                                <span>{mentor.sessions}</span>
                                            </div>
                                            <span className="meta-label">Sessions</span>
                                        </div>
                                        <div className="meta-item">
                                            <div className="meta-value">
                                                <Briefcase size={14} />
                                                <span>{mentor.experience}</span>
                                            </div>
                                            <span className="meta-label">Experience</span>
                                        </div>
                                        <div className="meta-item">
                                            <div className="meta-value">
                                                <MapPin size={14} />
                                                <span>{mentor.location}</span>
                                            </div>
                                            <span className="meta-label">Location</span>
                                        </div>
                                    </div>

                                    <div className="card-actions">
                                        <button className="btn-profile">View Profile</button>
                                        <button className="btn-session">Book Session</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-arrow right">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="view-all-container">
                    <button className="btn-view-all">
                        View all mentors <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopMentors;
