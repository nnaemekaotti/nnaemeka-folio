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

const BIC = () => {
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
                        BIC Training Video
                    </h1>

                    {/* Video First */}
                    <SingleMedia src="/images/motion-graphics/03-bic/BIC Training Video Jul 12, 2024 (with Voiceover) 5.mp4" alt="BIC Training Video" isVideo={true} />

                    {/* Content */}
                    <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
                        <Section title="Problem">
                            <p>Consumers face difficulty finding an affordable yet high-quality shaver that provides a smooth, reliable shave while offering protection and durability. Many available options compromise on either quality or affordability, leaving users dissatisfied.</p>
                        </Section>

                        <Section title="Goal">
                            <p>I’ve created a dynamic and engaging motion graphic video for the BIC 1 shaver, highlighting its main features: a fixed head with a high-quality stainless steel blade, a protective cap that prevents dust and humidity, and its affordable price. The video aims to clearly communicate why BIC 1 is the ideal choice for consumers seeking both value and performance in a shaver.</p>
                        </Section>

                        <Section title="Solution">
                            <p>The motion graphic video emphasizes the BIC 1’s core features through vibrant visuals that incorporate BIC’s brand colors (Blade Excellence Blue and BIC Orange). It showcases the fixed head for precision, the stainless steel blade for durability, and the protective cap that keeps the shaver in top condition. The calm background music complements the clear voiceover, ensuring that the benefits and value of BIC 1 are conveyed effectively to the audience.</p>
                        </Section>
                    </div>

                    {/* Thumbnail Second */}
                    <SingleMedia src="/images/motion-graphics/03-bic/BIC Cover Creative Sep 2024.jpg" alt="BIC Cover" />

                </motion.div>

                <ProjectNavigation currentCategory="Motion Graphics" />
            </div>
        </div>
    );
};

export default BIC;
