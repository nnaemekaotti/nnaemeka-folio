import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectNavigation from '../components/home/ProjectNavigation';

// --- Shared Components for Brand Design Pages ---

const Header = ({ category, title, heroImage }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
    >
        <span style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
            {category}
        </span>
        <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            maxWidth: '900px',
            marginBottom: '40px',
            color: 'var(--text-color)'
        }}>
            {title}
        </h1>
        {heroImage && (
            <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'var(--card-bg)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                marginBottom: '40px'
            }}>
                <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>
        )}
    </motion.div>
);

const TextBlock = ({ title, children }) => (
    <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
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

const ImageStack = ({ images }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {images.map((img, index) => (
            <div key={index} style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'var(--card-bg)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
                <img
                    src={img.src}
                    alt={img.alt || "Project Image"}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>
        ))}
    </div>
);

const ContentSection = ({ title, children, images = [] }) => (
    <div style={{ marginBottom: '120px' }}>
        <TextBlock title={title}>{children}</TextBlock>
        {images.length > 0 && <ImageStack images={images} />}
    </div>
);

// --- Page Component ---

const Kraft = () => {
    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--bg-color)' }}>
            <div className="container">
                {/* Back Link */}
                <Link to="/" state={{ category: 'Brand Design' }} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '60px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <ArrowLeft size={16} /> Back to work
                </Link>

                {/* Header & Hero */}
                <Header
                    category="Brand Identity • Healthcare"
                    title="Reimagining Kraft Pharmacy for a modern healthcare era."
                    heroImage={{ src: "/images/kraft/Kraft Hero@4x.png", alt: "Kraft Hero" }}
                />

                {/* Overview Section */}
                <ContentSection
                    title="Introduction & Objectives"
                    images={[]}
                >
                    <p className="mb-8">
                        Kraft Pharmacy needed a brand identity that aligned with its growing expertise. The existing brand lacked the innovative look needed to convey commitment to advanced solutions.
                    </p>
                    <p className="mb-4"><strong>Key Objectives:</strong></p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        <li className="mb-2"><strong>Modernization:</strong> Craft a fresh, science-driven identity.</li>
                        <li className="mb-2"><strong>Patient Trust:</strong> Resonate with patients through personalized care.</li>
                        <li><strong>Distinction:</strong> Stand out visually from competitors.</li>
                    </ul>
                </ContentSection>

                {/* Solution Section */}
                <ContentSection
                    title="The Solution"
                    images={[
                        { src: "/images/kraft/Artboard 5.webp", alt: "Logo Concept 1" },
                        { src: "/images/kraft/Artboard 6.webp", alt: "Logo Concept 2" },
                        { src: "/images/kraft/Artboard 7.webp", alt: "Logo Concept 3" },
                        { src: "/images/kraft/Artboard 8.webp", alt: "Logo Concept 4" }
                    ]}
                >
                    <p>
                        The solution centered around a molecular structure forming the letter "K". This design associates the brand with science and precision while maintaining a clean, modern aesthetic that ensures immediate recognition.
                    </p>
                </ContentSection>

                {/* Design Details Section */}
                <ContentSection
                    title="Design Details"
                    images={[
                        { src: "/images/kraft/Asset 2.webp", alt: "Logo Construction" },
                        { src: "/images/kraft/Artboard 17.webp", alt: "Colors and Typography" }
                    ]}
                >
                    <p className="mb-8">
                        The molecular "K" symbolizes the interconnection between healthcare, science, and patient well-being.
                    </p>
                    <p>
                        A bold, vibrant color scheme of blue, purple, red, and orange reflects trust and innovation, paired with modern, legible typography for accessibility.
                    </p>
                </ContentSection>

                {/* Context Section */}
                <ContentSection
                    title="In Context"
                    images={[
                        { src: "/images/kraft/Artboard 10.webp", alt: "Mockup 1" },
                        { src: "/images/kraft/Artboard 11.webp", alt: "Mockup 2" },
                        { src: "/images/kraft/Artboard 12.webp", alt: "Mockup 3" },
                        { src: "/images/kraft/Artboard 15.webp", alt: "Mockup 4" }
                    ]}
                >
                    <p>
                        The new identity is applied across physical and digital touchpoints, ensuring a cohesive and professional patient experience at every interaction.
                    </p>
                </ContentSection>

                <ProjectNavigation currentCategory="Brand Design" />
            </div>
        </div>
    );
};

export default Kraft;
