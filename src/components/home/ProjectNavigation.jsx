import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ArrowRight } from 'lucide-react';

const ProjectNavigation = ({ currentCategory }) => {
    // Get projects in the same category
    const categoryProjects = projects.filter(p => p.category === currentCategory);

    // Pick up to 3 random projects from the same category to show
    // Or just show the next ones?
    // "more in 'Brand Design'" etc.
    // I'll filter out the current project if I had the current project ID, but for now I'll just show the list or a slice.
    // Let's simplified: Show up to 2 other projects from this category.

    // Show all projects in the category (should be 3 if we include current, or slice to 3)
    const otherProjects = categoryProjects;

    return (
        <section className="project-nav-section" style={{ padding: '80px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="container project-nav-container" style={{ maxWidth: '1400px', margin: '0 auto' }}> { /* Rely on index.css for padding */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        color: 'var(--text-color)'
                    }}>
                        More in {currentCategory}
                    </h3>
                    <Link to="/" state={{ category: currentCategory }} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: 500 }}>
                        View all <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="project-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {/* User said remove padding from section/container. 
                        If I add padding to grid, I'm effectively re-adding it.
                        User might want FULL BLEED or just flush alignment.
                        I'll remove padding from the grid container too.
                    */}
                    {otherProjects.map(project => (
                        <Link to={project.link || (project.id === '01' ? '/work/chinchilli' : project.id === '02' ? '/work/roi-digital' : project.id === '03' ? '/work/kraft' : '#')} key={project.id} style={{ display: 'block' }}>
                            <div style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                background: 'var(--card-bg)',
                                aspectRatio: '16/9',
                                marginBottom: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-color)', paddingLeft: '20px' }}>{project.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '20px' }}>{project.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectNavigation;
