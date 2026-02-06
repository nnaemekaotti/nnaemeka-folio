import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';



const ProjectCard = ({ project }) => {
    const CardContent = (
        <div className="project-card">
            <motion.div
                className="project-image project-thumbnail"
                initial="initial"
                whileHover="hover"
                style={{
                    background: 'var(--card-bg)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    // aspectRatio handled by class
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    cursor: 'pointer'
                }}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>

            <div className="project-info">
                <span style={{
                    display: 'block',
                    color: 'var(--accent-blue)',
                    fontWeight: 600,
                    // margin handled by flex gap
                }}>
                    {project.category}
                </span>
                <h3 style={{
                    fontSize: '2.5rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    color: 'var(--text-color)',
                    // margin handled by flex gap
                }}>
                    {project.title}
                </h3>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    maxWidth: '400px'
                }}>
                    {project.description}
                </p>
            </div>
        </div>
    );

    // Dynamic Linking based on ID or Link property
    const linkPath = project.link || (
        project.id === '01' ? '/work/chinchilli' :
            project.id === '02' ? '/work/roi-digital' :
                project.id === '03' ? '/work/kraft' : '#'
    );

    return <Link to={linkPath}>{CardContent}</Link>;
};

const ProjectList = ({ category = 'Brand Design' }) => { // Default to Brand Design
    const filteredProjects = projects.filter(p => p.category === category);

    return (
        <section id="work" style={{ padding: '100px 40px' }}>
            <div className="container">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
