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

const Borderless = () => {
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
                        Borderless Go Live Campaign
                    </h1>

                    {/* Video First (Swapped Position) */}
                    <SingleMedia src="/images/motion-graphics/01-borderless/Borderless Go Live Jun 11, 2025.mp4" alt="Borderless Animation" isVideo={true} />

                    {/* Content */}
                    <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
                        <Section title="Overview">
                            <p>Borderless is an innovative global hiring platform committed to reshaping how companies source top-tier remote talent. As part of their recruitment drive for a <strong>Lead Designer</strong> role, I was tasked with creating a compelling video that told their story, clarified the opportunity, and resonated with high-caliber creative professionals.</p>
                        </Section>

                        <Section title="Objective">
                            <p className="mb-4">To craft a concise, visually engaging video that:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1rem' }}>
                                <li>Reflects the <strong>Borderless brand ethos</strong></li>
                                <li>Showcases the <strong>value and scope</strong> of the Lead Designer role</li>
                                <li>Appeals to design professionals looking for <strong>impactful remote work</strong></li>
                            </ul>
                        </Section>

                        <Section title="My Approach">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li className="mb-2"><strong>Narrative Strategy:</strong> I built a storyboard around a clear progression: who Borderless is, what the role entails, and why it’s a unique opportunity.</li>
                                <li className="mb-2"><strong>Tone & Style:</strong> Clean, modern, and minimal with smart transitions and subtle animations that match the tech-forward nature of Borderless.</li>
                                <li className="mb-2"><strong>Visuals:</strong> Integrated bold typography, animated UI snippets, and motion-driven layouts to emphasize clarity and energy.</li>
                                <li><strong>Sound Design:</strong> Paired with an upbeat track and kinetic sound cues to guide pacing and emotion.</li>
                            </ul>
                        </Section>

                        <Section title="Impact">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li className="mb-2">Helped attract attention from <strong>qualified design candidates</strong> on platforms like LinkedIn and Dribbble</li>
                                <li className="mb-2">Provided the Borderless team with a high-quality <strong>brand-aligned recruitment asset</strong></li>
                                <li>Reinforced their positioning as a global-first, design-conscious company</li>
                            </ul>
                        </Section>
                    </div>

                    {/* Thumbnail Second */}
                    <SingleMedia src="/images/motion-graphics/01-borderless/Borderless Portfolio Jun 20, 2025.png" alt="Borderless Portfolio" />

                </motion.div>

                <ProjectNavigation currentCategory="Motion Graphics" />
            </div>
        </div>
    );
};

export default Borderless;
