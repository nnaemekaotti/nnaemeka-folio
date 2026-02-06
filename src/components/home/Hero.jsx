import React from 'react';
import { motion } from 'framer-motion';

const Hero = (props) => {
    return (
        <section className="hero-section">
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: '#ccc',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="/images/pfp/emeka-pfp.png"
                            alt="Nnaemeka Otti"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => e.target.style.backgroundColor = '#ccc'}
                        />
                    </div>
                    <span style={{
                        padding: '8px 16px',
                        border: '1px solid #ddd',
                        borderRadius: '100px',
                        fontSize: '0.9rem',
                        color: '#666'
                    }}>
                        Available for new projects
                    </span>
                </div>

                <h1 className="hero-title" style={{
                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-color)'
                }}>
                    Hey, I’m Nnaemeka, I design purposeful visuals that turn ideas into memorable brands.
                </h1>

                {/* Removed "Elevating digital brands at VYRL Media" as requested */}

                {/* Category Toggle */}
                <div style={{
                    marginTop: '40px', /* Added spacing */
                    display: 'inline-flex',
                    background: 'var(--card-bg)',
                    padding: '8px',
                    borderRadius: '100px',
                    gap: '8px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    {['Brand Design', 'Motion Graphics', 'Social Media'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => props.setCategory && props.setCategory(cat)}
                            style={{
                                padding: '12px 24px',
                                borderRadius: '100px',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                background: props.activeCategory === cat ? 'var(--text-color)' : 'transparent',
                                color: props.activeCategory === cat ? 'var(--bg-color)' : 'var(--text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
