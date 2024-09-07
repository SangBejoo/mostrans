import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => navigate('/')}>
                <span className="logo">*</span>
                <span className="app-name">Ayub Subagiya</span>
            </div>
            <button
                className={`hamburger ${isMobileMenuOpen ? 'is-active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation"
            >
                <span className="hamburger-icon"></span>
            </button>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { navigate('/'); closeMobileMenu(); }}>Home</li>
                <li onClick={() => { navigate('/location'); closeMobileMenu(); }}>CharacterByLocation</li>
                <li onClick={() => { navigate('/character-list'); closeMobileMenu(); }}>CharacterList</li>
            </ul>

        </nav>
    );
};

export default Navbar;
