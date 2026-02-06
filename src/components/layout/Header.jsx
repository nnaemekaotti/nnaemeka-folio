import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '2rem 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 50,
            /* mixBlendMode removed to keep logo color consistent */
            color: 'var(--text-color)'
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '40px', height: '40px' }}>
                    <img src="/images/icon/Nnaemeka Logo.svg" alt="Nnaemeka Otti" style={{ width: '100%', height: '100%' }} />
                </div>
            </Link>

            <nav>
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
                    <li>
                        <button
                            onClick={() => {
                                if (window.location.pathname !== '/') {
                                    window.location.href = '/#about';
                                } else {
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                background: 'transparent',
                                border: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                padding: 0
                            }}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => window.location.href = "mailto:nnaemekaotti@gmail.com"}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                background: 'transparent',
                                border: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                padding: 0
                            }}
                        >
                            Contact
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'inherit'
                            }}
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
