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

const Chinchilli = () => {
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
                    category="Brand Identity • Packaging"
                    title="Igniting the fiery spirit of Nsukka Peppers."
                    heroImage={{ src: "/images/chinchilli/Chinchilli Hero.png", alt: "Chinchilli Hero" }}
                />

                {/* Overview Section */}
                <ContentSection
                    title="Introduction & Objectives"
                    images={[
                        { src: "/images/chinchilli/Bottle_Plus_Pack.png", alt: "Bottle and Pack" },
                        { src: "/images/chinchilli/Label 02.png", alt: "Label Design" },
                        { src: "/images/chinchilli/Bottle Mockup.png", alt: "Bottle Mockup" },
                        { src: "/images/chinchilli/Chinchilli Bottle Mockup 01.png", alt: "Mockup Side" },
                        { src: "/images/chinchilli/Falling Peppers.png", alt: "Ingredients" },
                        { src: "/images/chinchilli/Label.png", alt: "Label Flat" }
                    ]}
                >
                    <p className="mb-8">
                        Chinchilli, known as the hottest chilli pepper oil made from Nsukka Peppers in Nigeria, sought to revamp its visual identity to match the fiery spirit of its product. This case study details the graphic design rebranding journey for Chinchilli.
                    </p>
                    <p className="mb-4"><strong>Key Objectives:</strong></p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li className="mb-2"><strong>Premium Aesthetic:</strong> Elevate visual appeal to reflect premium quality.</li>
                        <li className="mb-2"><strong>Storytelling:</strong> Infuse packaging with the narrative of Nsukka Peppers.</li>
                        <li><strong>Shelf Presence:</strong> Create packaging that conveys spice and flavor.</li>
                    </ul>
                </ContentSection>

                {/* Identity Section */}
                <ContentSection
                    title="The Identity"
                    images={[
                        { src: "/images/chinchilli/Logo Construction.png", alt: "Logo Construction" },
                        { src: "/images/chinchilli/Logo Technical.png", alt: "Logo Technical" },
                        { src: "/images/chinchilli/LogoAsset 1.gif", alt: "Logo Animation" },
                        { src: "/images/chinchilli/Chinchilli Logo.png", alt: "Final Logo" }
                    ]}
                >
                    <p>
                        The logo showcases crisp lines that come together to create a flame, representing the intense spiciness of the sauce. Additionally, a vibrant gradient is used to convey both the heat and sophistication of the product.
                    </p>
                </ContentSection>

                {/* System Section (Color & Type) */}
                <ContentSection
                    title="Design System"
                    images={[
                        { src: "/images/chinchilli/Brand Colors.png", alt: "Brand Colors" },
                        { src: "/images/chinchilli/Logo Text.png", alt: "Typography" }
                    ]}
                >
                    <p className="mb-8">
                        <strong>Color:</strong> Red and orange remain dominant to symbolize heat, with subtle gold accents for premium quality.
                    </p>
                    <p>
                        <strong>Typography:</strong> A custom typeface was designed to capture the spicy and flavorful nature of the brand, reflecting its fiery essence.
                    </p>
                </ContentSection>

                {/* Applications Section */}
                <ContentSection
                    title="In the Wild"
                    images={[
                        { src: "/images/chinchilli/Cookout.png", alt: "Cookout" },
                        { src: "/images/chinchilli/Chicken Wings.png", alt: "Wings" },
                        { src: "/images/chinchilli/Steak Barbecue.png", alt: "Steak" },
                        { src: "/images/chinchilli/Man.png", alt: "Lifestyle Man" },
                        { src: "/images/chinchilli/Woman.png", alt: "Lifestyle Woman" },
                        { src: "/images/chinchilli/T- Shirt.png", alt: "Merchandise" },
                        { src: "/images/chinchilli/Social_Media_v01.png", alt: "Social Media" },
                        { src: "/images/chinchilli/Chef Mockup.png", alt: "Chef Context" }
                    ]}
                >
                    <p>
                        The brand identity extends seamlessly across various touchpoints, from merchandise to social media and lifestyle photography, reinforcing the vibrant and spicy personality of Chinchilli.
                    </p>
                </ContentSection>

                <ProjectNavigation currentCategory="Brand Design" />
            </div>
        </div>
    );
};

export default Chinchilli;
