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

const ROIDigital = () => {
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
                    category="Brand Identity • Digital Marketing"
                    title="Rejuvenating the identity of ROI Digital to reflect innovation."
                    heroImage={{ src: "/images/roi digital/ROI Billboard v01.png", alt: "ROI Hero Billboard" }}
                />

                {/* Overview Section */}
                <ContentSection
                    title="Introduction & Objectives"
                    images={[]}
                >
                    <p className="mb-8">
                        ROI Digital had been operating under an outdated brand identity that no longer reflected its vision. The goal was to rejuvenate the identity to remain competitive.
                    </p>
                    <p className="mb-4"><strong>Key Objectives:</strong></p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        <li className="mb-2"><strong>Modernization:</strong> Align with industry trends.</li>
                        <li className="mb-2"><strong>Client Attraction:</strong> New identity to resonate with target clientele.</li>
                        <li><strong>Consistency:</strong> Establish a cohesive brand image.</li>
                    </ul>
                </ContentSection>

                {/* Logo Section */}
                <ContentSection
                    title="The Logo"
                    images={[
                        { src: "/images/roi digital/ROI Logo Construction.png", alt: "Logo Construction" },
                        { src: "/images/roi digital/ROI Logo Construction v02.png", alt: "Logo Construction 2" }
                    ]}
                >
                    <p>
                        Crafted a new logo that encapsulated ROI Digital's essence—modernity, innovation, and results. The logo incorporated dynamic shapes and a refined typography that conveyed professionalism and creativity.
                    </p>
                </ContentSection>

                {/* System Section */}
                <ContentSection
                    title="Color & Typography"
                    images={[
                        { src: "/images/roi digital/ROI Logo Colors.png", alt: "Brand Colors" },
                        { src: "/images/roi digital/ROI Typography.png", alt: "Typography" }
                    ]}
                >
                    <p className="mb-8">
                        <strong>Colors:</strong> A vibrant yet sophisticated palette was selected to evoke trust and excitement.
                    </p>
                    <p>
                        <strong>Typography:</strong> A contemporary typeface balanced readability with uniqueness, reflecting expertise in data-driven strategies.
                    </p>
                </ContentSection>

                {/* Visual Elements & Applications */}
                <ContentSection
                    title="Visual Expressions"
                    images={[
                        { src: "/images/roi digital/ROI Billboard v02.png", alt: "Billboard 2" },
                        { src: "/images/roi digital/ROI Billboard v03.png", alt: "Billboard 3" },
                        { src: "/images/roi digital/ROI Billboard v04.png", alt: "Billboard 4" },
                        { src: "/images/roi digital/ROI Billboard v06.png", alt: "Billboard 6" },
                        { src: "/images/roi digital/ROI Merch v01.png", alt: "Merch 1" },
                        { src: "/images/roi digital/ROI Merch v02.png", alt: "Merch 2" },
                        { src: "/images/roi digital/ROI Business Cards  v01.png", alt: "Business Cards" },
                        { src: "/images/roi digital/ROI Website v01.png", alt: "Website" },
                        { src: "/images/roi digital/ROI iPhone v01.png", alt: "Mobile App" }
                    ]}
                >
                    <p>
                        We introduced patterns and imagery styles that reinforced the brand's narrative. This system was applied across billboards, merchandise, and digital platforms to ensure a cohesive experience.
                    </p>
                </ContentSection>

                <ProjectNavigation currentCategory="Brand Design" />
            </div>
        </div>
    );
};

export default ROIDigital;
