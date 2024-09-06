import React from 'react';
import Navbar from './Navbar';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <section className="showcase">
                <div className="content">
                    <h1>Ayub Subagiya</h1>
                    <h3>Rick and Morty Graph QL</h3>
                    <a href="/character-list" className="btn">Character List</a>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;