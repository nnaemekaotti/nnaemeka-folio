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
        aspectRatio: '4/5', // Updated to 4:5 aspect ratio
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

// List of all Lakowe assets
const assets = [
    "ETTG News Oct 06, 2023 v01.png",
    "ETTG Special Guests Spe 11, 2023 v01.png",
    "LL Apr 22, 2025.png",
    "LL Aug 08, 2025.png",
    "LL Easter Mar 20, 2025 v02.5.png",
    "LL Golf X Aug 19, 2024.png",
    "LL Golf X Launch Jun 28, 2024 (NMI).png",
    "LL Golf X Launch Jun 29, 2024.png",
    "LL Golf X Teaser Feb 05, 2026 v02.png",
    "LL Golf X Teaser Feb 05, 2026.png",
    "LL Jul 03, 2025.png",
    "LL Jul 15, 2025.png",
    "LL Jul 21, 2025.png",
    "LL May 08, 2025.png",
    "LL May 26, 2025.png",
    "LL May 27, 2025.png",
    "LL Summer Countdown Jul 02, 2025.png",
    "LL Summer Countdown Jul 04, 2025.png",
    "LL Summer Splash Jun 01, 2025 v02 (NMI).png",
    "LL Summer Splash Jun 04, 2025.png",
    "LL Summer Splash Jun 05, 2025.png",
    "LL-Jan-22,-2025_01.png"
];

const Lakowe = () => {
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
                        Lakowe Lakes
                    </h1>

                    {/* Responsive Grid: 4 cols Desktop, 3 cols Tablet, 1 col Mobile */}
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
                            <SingleImage key={i} src={`/images/social media/01-lakowe/${file}`} alt={`Lakowe Social ${i}`} />
                        ))}
                    </div>
                </motion.div>

                <ProjectNavigation currentCategory="Social Media" />
            </div>
        </div>
    );
};

export default Lakowe;
