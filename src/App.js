import React, { Suspense, lazy } from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

const CharactersByLocation = lazy(() => import('./CharactersByLocation'));
const CharacterDetail = lazy(() => import('./CharacterDetail'));
const CharacterList = lazy(() => import('./CharacterList'));

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routes>
                    <Route path="/character-list" element={<CharacterList />} />
                    <Route path="/location" element={<CharactersByLocation />} />
                    <Route path="/character/:id" element={<CharacterDetail />} />
                </Routes>
            </Suspense>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
