// src/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ character }) => {
    return (
        <div className="card">
            <div className="imgBx">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="contentBx">
                <h3>{character.name}</h3>
                <p className="price">{character.status} - {character.species}</p>
                <Link to={`/character/${character.id}`} className="buy">View Details</Link>
                <Link to={`/location?name=${character.location.name}`} className="location-link">View Same Location</Link>
            </div>
        </div>
    );
};

export default Card;