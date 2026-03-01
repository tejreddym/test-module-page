import React from 'react';
import './TrendingMentors.css';

const TrendingMentors = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
            alt: 'Professional mentor teaching',
            className: 'photo-1'
        },
        {
            url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
            alt: 'Mentors collaborating',
            className: 'photo-2'
        },
        {
            url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
            alt: 'Group discussion',
            className: 'photo-3'
        },
        {
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
            alt: 'Students learning',
            className: 'photo-4'
        },
        {
            url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
            alt: 'Mentor providing guidance',
            className: 'photo-5'
        },
        {
            url: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=600',
            alt: 'Students collaborating',
            className: 'photo-6'
        }
    ];

    return (
        <section className="trending-mentors-section">
            <div className="section-header">
                <h1 className="section-title">Learn from the <span className="highlight">Best Mentor</span></h1>
                <p className="section-subtitle">
                    Get personalized guidance from India's top educators who have helped thousands of students achieve their dreams
                </p>
            </div>
            <div className="scrapbook-container">
                <div className="scrapbook-canvas">
                    {images.map((img, index) => (
                        <div key={index} className={`polaroid ${img.className}`}>
                            <div className="pin"></div>
                            <div className="photo-wrapper">
                                <img src={img.url} alt={img.alt} />
                            </div>
                        </div>
                    ))}
                    <div className="collage-footer">19/02/2026</div>
                </div>
            </div>
        </section>
    );
};

export default TrendingMentors;
