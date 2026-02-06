import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '0 40px 100px', background: 'var(--bg-color)' }}>
            <div className="container" style={{ width: '100%' }}>
                {/* Changed to Flexbox for height matching on desktop, Stack on mobile */}
                <div className="about-layout" style={{
                    display: 'flex',
                    flexDirection: 'column', // Mobile first: Stacked
                    gap: '40px',
                    alignItems: 'stretch'
                }}>

                    {/* Image - Left (Order 1 on mobile, Order 2 on desktop is handled via flex-direction or order if needed, but standard is Image Left) */}
                    {/* User requested: Image Left, Text Right. Stacked usually means Image Top? Or Text. Let's stick to Image Top for stack. */}

                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            background: '#ccc',
                            flex: '1', /* Takes remaining space or specific ratio on desktop */
                            minHeight: '400px'
                        }}
                    >
                        <img
                            src="/images/about-me/Nnaemeka Otti.jpg"
                            alt="Nnaemeka Otti"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>

                    {/* Text - Right */}
                    <div className="about-text-container" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        flex: '2', /* 2/3 width on desktop */
                        padding: '20px'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-display)',
                            marginBottom: '1.5rem',
                            color: 'var(--text-color)'
                        }}>
                            Creative Director &<br />Brand Strategist
                        </h2>

                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem'
                        }}>
                            I’m a Graphic & Motion Designer with a passion for turning ideas into clear, compelling visual stories. My journey has been shaped by working with brands across different industries, helping them communicate better, connect deeper, and show up stronger through thoughtful design. I care deeply about purpose—every layout, frame, and concept I create is driven by strategy, storytelling, and impact, not just aesthetics. I’m constantly learning, refining my craft, and pushing for work that feels intentional and memorable.
                            <br /><br />
                            When I’m not designing, you’ll probably find me watching anime, playing retro games, or discovering new places.
                        </p>
                    </div>
                </div>
                <style>{`
                    @media (min-width: 1024px) {
                        .about-layout {
                            flex-direction: row !important; /* Side by side */
                            gap: 80px !important;
                        }
                        .about-image-container {
                            height: auto !important; /* Match height of text container due to stretch */
                            /* Or set a min-height that matches text? Flex stretch does this. */
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default About;
