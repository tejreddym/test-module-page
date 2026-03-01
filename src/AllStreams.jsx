import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GraduationCap, Stethoscope, Briefcase, Scale, Palette, Code, Brain, BookOpen, Music, Microscope, Landmark } from 'lucide-react';
import './AllStreams.css';

const AllStreams = () => {
    const getStreamPath = (name) => {
        const streamPaths = {
            'Engineering': '/stream-mock-tests',
            'Medical': '/stream-mock-tests',
            'Management': '/stream-mock-tests',
            'Commerce': '/stream-mock-tests',
            'Law & UPSC': '/stream-mock-tests',
            'Civil Services': '/stream-mock-tests'
        };
        return streamPaths[name] || '/select-stream';
    };

    // Upgraded array utilizing the application's core aesthetic colors
    const allStreams = [
        { id: 1, name: 'Engineering', icon: <GraduationCap />, color: '#3B82F6', lightColor: '#EEF2FF', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' }, // Focus Blue
        { id: 2, name: 'Medical', icon: <Stethoscope />, color: '#10B981', lightColor: '#E8F5E8', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ca8d09093?q=80&w=600&auto=format&fit=crop' }, // Success Green
        { id: 3, name: 'Commerce', icon: <Briefcase />, color: '#F59E0B', lightColor: '#FFFBEB', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' }, // Motivational Orange
        { id: 4, name: 'Law & UPSC', icon: <Scale />, color: '#8B5CF6', lightColor: '#F5F3FF', imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop' }, // Creativity Purple
        { id: 5, name: 'Design', icon: <Palette />, color: '#1488A6', lightColor: '#E0F2FE', imageUrl: 'https://images.unsplash.com/photo-1561070791-2ea01438dceb?q=80&w=600&auto=format&fit=crop' }, // Calm Teal
        { id: 6, name: 'IT & Software', icon: <Code />, color: '#3B82F6', lightColor: '#EEF2FF', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop' }, // Focus Blue
        { id: 7, name: 'Management', icon: <Brain />, color: '#10B981', lightColor: '#E8F5E8', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop' }, // Success Green
        { id: 8, name: 'Humanities', icon: <BookOpen />, color: '#F59E0B', lightColor: '#FFFBEB', imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop' }, // Motivational Orange
        { id: 9, name: 'Arts & Music', icon: <Music />, color: '#8B5CF6', lightColor: '#F5F3FF', imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop' }, // Creativity Purple
        { id: 10, name: 'Pure Science', icon: <Microscope />, color: '#1488A6', lightColor: '#E0F2FE', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop' }, // Calm Teal
        { id: 11, name: 'Architecture', icon: <Landmark />, color: '#173CBA', lightColor: '#EEF2FF', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop' }, // Primary Brand Blue
        { id: 12, name: 'Agriculture', icon: <BookOpen />, color: '#00C798', lightColor: '#E8F5E8', imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef61f9?q=80&w=600&auto=format&fit=crop' }, // Primary Brand Green
    ];

    return (
        <section className="all-streams-section">
            <div className="container">
                <div className="all-streams-header">
                    <Link to="/select-stream" className="back-link">
                        <ArrowLeft size={20} /> Back to Featured
                    </Link>
                    <h1 className="all-streams-title">All Career Streams</h1>
                    <p className="all-streams-subtitle">Discover premium paths tailored for every possible career and educational stream</p>
                </div>

                <div className="all-streams-grid">
                    {allStreams.map((stream) => (
                        <div
                            key={stream.id}
                            className="all-stream-card group"
                            style={{
                                '--accent-color': stream.color,
                                '--accent-light': stream.lightColor
                            }}
                        >
                            <img src={stream.imageUrl} alt={stream.name} className="stream-bg-image" />
                            <div className="stream-overlay"></div>
                            <div className="card-content">
                                <div className="stream-icon-wrapper">
                                    {stream.icon}
                                </div>
                                <h3 className="stream-name">{stream.name}</h3>
                                <Link
                                    to={getStreamPath(stream.name)}
                                    className="explore-btn"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                                >
                                    Explore Tests <ArrowRight className="explore-arrow" size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllStreams;
