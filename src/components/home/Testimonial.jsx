import React from 'react';

const Testimonial = () => {
    return (
        <section style={{ padding: '40px 40px 100px' }}>
            <div className="container">
                <div style={{
                    background: 'var(--card-bg)',
                    color: 'var(--text-color)',
                    padding: '60px',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>★★★★★</div>
                    <blockquote style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontFamily: 'var(--font-display)',
                        maxWidth: '800px',
                        margin: '0 auto 40px'
                    }}>
                        "Working with Emeka means clarity, creativity, and execution at the highest level. His designs always communicate purpose beautifully."
                    </blockquote>
                    <div>
                        <cite style={{ fontStyle: 'normal', fontWeight: 600, display: 'block' }}>Seun Longe</cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
