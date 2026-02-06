import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: '80px 40px', background: '#0d0d0d', color: '#fff' }}>
            <div className="container">
                <div style={{ paddingBottom: '80px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        lineHeight: 1.1,
                        marginBottom: '40px'
                    }}>
                        Got a project that needs<br />some polish?
                    </h2>

                    <a href="mailto:nnaemekaotti@gmail.com" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '1.25rem',
                        borderBottom: '1px solid rgba(255,255,255,0.3)',
                        paddingBottom: '4px'
                    }}>
                        Email me <ArrowUpRight size={20} />
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '40px',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <div>
                        <span style={{ display: 'block', color: '#666', marginBottom: '12px', fontSize: '0.8rem' }}>NAVIGATION</span>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#work">Work</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'block', color: '#666', marginBottom: '12px', fontSize: '0.8rem' }}>SOCIALS</span>
                        <a href="https://www.instagram.com/emeka.designs/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div style={{ marginTop: '80px', color: '#666', fontSize: '0.8rem' }}>
                    © 2026 Nnaemeka Otti
                </div>
            </div>
        </footer>
    );
};

export default Footer;
