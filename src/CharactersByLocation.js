// src/CharactersByLocation.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useLocation } from 'react-router-dom';
import { GET_LOCATIONS, GET_CHARACTERS_BY_LOCATION } from './queries';
import './CharactersByLocation.css';

const CharactersByLocation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const locationName = query.get('name');

    const { loading, error, data } = useQuery(GET_LOCATIONS);
    const { loading: charactersLoading, error: charactersError, data: charactersData } = useQuery(GET_CHARACTERS_BY_LOCATION, {
        variables: { locationName },
        skip: !locationName,
    });

    const handleLocationSelect = (locationName) => {
        navigate(`/location?name=${locationName}`);
    };

    const handleCardClick = (character) => {
        navigate(`/character/${character.id}`);
    };

    if (loading) return <p>Loading locations...</p>;
    if (error) return <p>Error {error.message}</p>;

    return (
        <div className="character-by-location p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Characters by Location</h1>
            <div className="locations-list flex flex-wrap justify-center gap-2 mb-4">
                {data && data.locations && data.locations.results.map((location) => (
                    <button
                        key={location.id}
                        onClick={() => handleLocationSelect(location.name)}
                        className="px-4 py-2 bg-blue-500 text-white rounded">
                        {location.name}
                    </button>
                ))}
            </div>
            {locationName && (
                <div className="characters-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {charactersLoading ? (
                        <p>Loading characters...</p>
                    ) : charactersError ? (
                        <p>Error {charactersError.message}</p>
                    ) : (
                        charactersData &&
                        charactersData.locations &&
                        charactersData.locations.results.length > 0 &&
                        charactersData.locations.results[0].residents.length === 0 ? (
                            <p>There is no character here</p>
                        ) : (
                            charactersData.locations.results[0].residents.map((character) => (
                                <div
                                    key={character.id}
                                    className="character-item bg-white shadow-md rounded-lg overflow-hidden"
                                    onClick={() => handleCardClick(character)}>
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="font-bold text-lg">{character.name}</p>
                                        <p className="text-gray-600">{character.status} - {character.species}</p>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default CharactersByLocation;