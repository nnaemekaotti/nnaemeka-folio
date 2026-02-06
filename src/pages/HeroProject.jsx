import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectNavigation from '../components/home/ProjectNavigation';

const SingleImage = ({ src, alt }) => (
    <div style={{
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'var(--card-bg)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        width: '100%',
        aspectRatio: '4/5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <img
            src={src}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    </div>
);

const assets = [
    "Hero AFCON Final  V01.png",
    "Hero AFCON Final  V02.png",
    "Hero Dec 25, 2023.png",
    "Hero Feb 07, 2025 (Emeka Ver).png",
    "Hero Feb 07, 2025-1.png",
    "Hero Football Wallpaper Apr 00, 2024 v01.png",
    "Hero Football Wallpaper Apr 00, 2024 v03.png",
    "Hero Football Wallpaper Apr 00, 2024 v04.png",
    "Hero Football Wallpaper Apr 00, 2024 v05.png",
    "Hero Football Wallpaper Mar 28, 2024 v02.png",
    "Hero Mar 14, 2024.png",
    "Hero Mar 31, 2023.png",
    "Hero May 01, 2023.png",
    "Hero Sep 2024.png",
    "Hero Sunset Apr 11, 2025 v01.png"
];

const HeroProject = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)' }}>
            <div className="container">
                <Link to="/" state={{ category: 'Social Media' }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '60px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to work
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-24">
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                        Social Media
                    </span>
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        maxWidth: '900px',
                        marginBottom: '40px',
                        color: 'var(--text-color)'
                    }}>
                        Hero Lager
                    </h1>

                    <div className="social-grid" style={{ marginBottom: '80px' }}>
                        <style>
                            {`
                                .social-grid {
                                    display: grid;
                                    grid-template-columns: 1fr;
                                    gap: 20px;
                                }
                                @media (min-width: 600px) {
                                    .social-grid {
                                        grid-template-columns: repeat(3, 1fr);
                                    }
                                }
                                @media (min-width: 1024px) {
                                    .social-grid {
                                        grid-template-columns: repeat(4, 1fr);
                                    }
                                }
                            `}
                        </style>
                        {assets.map((file, i) => (
                            <SingleImage key={i} src={`/images/social media/03-hero/${file}`} alt={`Hero Lager Social ${i}`} />
                        ))}
                    </div>
                </motion.div>

                <ProjectNavigation currentCategory="Social Media" />
            </div>
        </div>
    );
};

export default HeroProject;
