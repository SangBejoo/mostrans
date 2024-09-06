import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS, GET_LOCATIONS } from './queries';
import Card from './Card';
import './Card.css';
import './CharacterList.css';

const CharacterList = () => {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
    const { loading: locationsLoading, error: locationsError, data: locationsData } = useQuery(GET_LOCATIONS);
    const [selectedLocation, setSelectedLocation] = useState('');

    if (loading || locationsLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (locationsError) return <p>Error: {locationsError.message}</p>;

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const filteredCharacters = selectedLocation
        ? data?.characters?.results?.filter(character => character.location.name === selectedLocation)
        : data?.characters?.results;

    return (
        <div className="character-list-container">
            <div className="filter">
                <label htmlFor="location" className="filter-label">Filter by Location: </label>
                <select
                    id="location"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="filter-select"
                >
                    <option value="">All Locations</option>
                    {locationsData?.locations?.results?.map(location => (
                        <option key={location.id} value={location.name}>
                            {location.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="gallery">
                {filteredCharacters?.map(character => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default CharacterList;