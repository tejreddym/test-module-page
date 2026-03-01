import React, { useEffect, useRef, useState } from 'react';
import { Target, CheckCircle2, BarChart3, Rocket } from 'lucide-react';
import './Design2Index.css';

const StepDesign = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    const steps = [
        {
            number: '01',
            title: 'Select Your Goal',
            description: 'Choose your path from 50+ exams like JEE, NEET, or UPSC.',
            position: { top: '0%', left: '10%' },
            color: '#3B82F6', // Focus Blue
            lightColor: '#EEF2FF' // Secondary Blue
        },
        {
            number: '02',
            title: 'Attempt Mock Test',
            description: 'Experience real exam interfaces with strict timing and negative marking.',
            position: { top: '30%', right: '10%' },
            color: '#F59E0B', // Motivational Orange
            lightColor: '#FFFbeb' // Light Orange equivalent
        },
        {
            number: '03',
            title: 'Unlock Analytics',
            description: 'Get granular insights to identify weak topics and improve your rank.',
            position: { top: '55%', left: '10%' },
            color: '#8B5CF6', // Creativity Purple
            lightColor: '#f5f3ff' // Light Purple equivalent
        },
        {
            number: '04',
            title: 'Start Working',
            description: 'Focus on your goals and make every minute count towards success.',
            position: { top: '80%', right: '10%' },
            color: '#10B981', // Success Green
            lightColor: '#E8F5E8' // Secondary Green
        }
    ];

    return (
        <section className={`step-design-section ${isVisible ? 'is-visible' : ''}`} ref={sectionRef}>
            <div className="container">
                <div className="step-design-header animate-header">
                    <h1>Your Journey to <span className="highlight-blue">Excellence</span></h1>
                    <p>Experience a streamlined journey fueled by focus, motivation, creativity, and success.</p>
                </div>

                <div className="steps-container">
                    {/* SVG Connector Lines split according to the new reference: Right->Top, Left->Top, Right->Top */}
                    <svg className="connector-svg" viewBox="0 0 1000 900" fill="none" preserveAspectRatio="none">
                        {/* Line 1: Right of Card 1 (x: 420, y: 150) to Top of Card 2 (x: 750, y: 250) */}
                        <path
                            className="draw-path path-1"
                            d="M 420 120 Q 750 150 750 250"
                            stroke="#000000"
                            strokeWidth="4"
                        />
                        {/* Line 2: Left of Card 2 (x: 580, y: 400) to Top of Card 3 (x: 250, y: 480) */}
                        <path
                            className="draw-path path-2"
                            d="M 580 400 Q 250 430 250 480"
                            stroke="#000000"
                            strokeWidth="4"
                        />
                        {/* Line 3: Right of Card 3 (x: 420, y: 650) to Top of Card 4 (x: 750, y: 700) */}
                        <path
                            className="draw-path path-3"
                            d="M 420 650 Q 750 670 750 700"
                            stroke="#000000"
                            strokeWidth="4"
                        />
                    </svg>

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`step-card ${index % 2 === 0 ? 'left' : 'right'} card-anim-${index + 1}`}
                            style={step.position}
                        >
                            <div className="step-indicator">
                                <div
                                    className="step-circle-badge"
                                    style={{
                                        backgroundColor: step.color,
                                        boxShadow: `0 0.25em 1em ${step.color}40`
                                    }}
                                >
                                    {step.number}
                                </div>
                            </div>
                            <div className="step-content" style={{ borderTop: `4px solid ${step.color}`, backgroundColor: step.lightColor }}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepDesign;
