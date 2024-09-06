// src/App.js
import React, { Suspense, lazy } from 'react';
import { Route, Routes, useLocation, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

const CharactersByLocation = lazy(() => import('./CharactersByLocation'));
const CharacterDetail = lazy(() => import('./CharacterDetail'));
const CharacterList = lazy(() => import('./CharacterList'));
const LandingPage = lazy(() => import('./LandingPage'));

const App = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    return (
        <div className="App">
            {!isLandingPage && <Navbar />}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/character-list" element={<CharacterList />} />
                    <Route path="/location" element={<CharactersByLocation />} />
                    <Route path="/character/:id" element={<CharacterDetail />} />
                    <Route path="/" exact element={<LandingPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

const AppWrapper = () => (
    <Router basename="/mostrans">
        <App />
    </Router>
);

export default AppWrapper;