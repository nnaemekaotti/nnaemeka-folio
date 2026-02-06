import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectNavigation from '../components/home/ProjectNavigation';

const Section = ({ title, children, className = "" }) => (
    <div className={`mb-24 ${className}`}>
        {title && (
            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                color: 'var(--text-color)'
            }}>
                {title}
            </h2>
        )}
        <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            {children}
        </div>
    </div>
);

const SingleMedia = ({ src, alt, className = "mb-24", isVideo = false }) => {
    return (
        <div className={className} style={{
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'var(--card-bg)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            marginBottom: '40px'
        }}>
            {isVideo ? (
                <video
                    src={src}
                    controls
                    autoPlay
                    loop
                    muted
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            )}
        </div>
    );
};

const Munchmate = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)' }}>
            <div className="container">
                <Link to="/" state={{ category: 'Motion Graphics' }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '60px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to work
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-24">
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                        Motion Graphics
                    </span>
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        maxWidth: '900px',
                        marginBottom: '40px',
                        color: 'var(--text-color)'
                    }}>
                        Munchmate App Launch
                    </h1>

                    {/* Video First */}
                    <SingleMedia src="/images/motion-graphics/02-munchmate/Munchmate Launch Main Feb 06, 2024.mp4" alt="Munchmate Animation" isVideo={true} />

                    {/* Content */}
                    <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
                        <Section title="Problem">
                            <p>With a crowded food delivery market lacking both taste and affordability, Munchmate saw an opportunity.</p>
                        </Section>

                        <Section title="Goal">
                            <p>Announce app launch, raise awareness, and drive adoption.</p>
                        </Section>

                        <Section title="Solution">
                            <p>Developed a vibrant motion graphic video showcasing carefully curated restaurants, unbeatable flavors, and affordable prices. The video was distributed across social media and integrated within the app, successfully capturing attention and driving downloads. Munchmate emerged as a top choice for convenient and delicious food delivery.</p>
                        </Section>
                    </div>

                    {/* Thumbnail Second */}
                    <SingleMedia src="/images/motion-graphics/02-munchmate/Munchmate Launch Cover Feb 05, 2024.png" alt="Munchmate Cover" />

                </motion.div>

                <ProjectNavigation currentCategory="Motion Graphics" />
            </div>
        </div>
    );
};

export default Munchmate;
